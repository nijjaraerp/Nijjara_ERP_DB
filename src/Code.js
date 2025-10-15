// Code.gs - Consolidated Server-Side Code (fixed)

/** ---- GLOBAL CONFIG ---- */
const CONFIG = {
  APP_NAME: "Nijjara ERP",
  // Core sheet names
  SHEETS: {
    USERS: "SYS_Users",
    ROLES: "SYS_Roles",
    ROLE_PERMS: "SYS_Role_Permissions",
    PERMS: "SYS_Permissions",
    AUDIT: "SYS_Audit_Log",
    SETTINGS: "SYS_Settings",
    DOCUMENTS: "SYS_Documents",
    SESSIONS: "SYS_Sessions",
    AUDIT_REPORT: "SYS_Audit_Report",
    DROPDOWNS: "SYS_Dropdowns",
    DYNAMIC_FORMS: "SYS_Dynamic_Forms",
    PROFILE_VIEW: "SYS_Profile_View",
    USER_PROPERTIES: "SYS_User_Properties",

    // Projects
    PRJ_MAIN: "PRJ_Main",
    PRJ_TASKS: "PRJ_Tasks",
    PRJ_COSTS: "PRJ_Costs",
    PRJ_CLIENTS: "PRJ_Clients",
    PRJ_MATERIALS: "PRJ_Materials",
    PRJ_ALLOCATIONS: "PRJ_InDirExp_Allocations",
    PRJ_DASHBOARD: "PRJ_Dashboard",

    // Finance
    FIN_DIRECT_EXP: "FIN_DirectExpenses",
    FIN_INDIRECT_ONCE: "FIN_InDirExpense_Once",
    FIN_INDIRECT_REPEATED: "FIN_InDirExpense_Repeated",
    FIN_PROJECT_REVENUE: "FIN_Project_Revenue",
    FIN_REVENUES: "FIN_Revenues",
    FIN_JOURNAL: "FIN_Journal",
    FIN_CUSTODY: "FIN_Custody",

    // HR
    HR_EMPLOYEES: "HR_Employees",
    HR_ATTENDANCE: "HR_Attendance",
    HR_LEAVE_REQUESTS: "HR_Leave_Requests",
    HR_LEAVE: "HR_Leave",
    HR_ADVANCES: "HR_Advances",
    HR_DEDUCTIONS: "HR_Deductions",
    HR_PAYROLL: "HR_Payroll",
  },
};

/** ---- ENTRY POINT ---- */
function doGet(e) {
  const t = HtmlService.createTemplateFromFile("Dashboard");
  t.appName = CONFIG.APP_NAME;
  return t
    .evaluate()
    .setTitle(CONFIG.APP_NAME + " - Demo Portal")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/** ---- DATA ACCESS ---- */
function getBootstrapData() {
  const user = getCurrentUser();
  const role = user?.Role_Id || user?.role || "GUEST";
  const perms = getRolePermissions(role);
  const filters = getDeptAndRoleFilters();

  return {
    appName: CONFIG.APP_NAME,
    now: new Date().toISOString(),
    user,
    role,
    permissions: perms,
    filters,
  };
}

function getSystemKPIs() {
  const defaults = {
    totalUsers: 0,
    activeUsers: 0,
    inactiveUsers: 0,
    roleCount: 0,
    permissionCount: 0,
    pendingPasswordResets: 0,
  };

  const sheet = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.PROFILE_VIEW
  );

  if (sheet) {
    const data = sheet.getDataRange().getValues();
    if (data && data.length > 1) {
      const headers = data[0];
      const values = data[1];
      const read = (key) => {
        const index = headers.indexOf(key);
        if (index === -1) return null;
        const value = values[index];
        return value == null || value === "" ? null : value;
      };

      const candidate = {
        totalUsers: read("TotalUsers"),
        activeUsers: read("ActiveUsers"),
        inactiveUsers: read("InactiveUsers"),
        roleCount: read("RoleCount"),
        permissionCount: read("PermissionCount"),
        pendingPasswordResets: read("PendingPasswordResets"),
      };

      const hasAny = Object.values(candidate).some((v) => v != null);
      if (hasAny) {
        return Object.assign({}, defaults, candidate);
      }
    }
  }

  // Fallback to direct sheet computations
  const usersSheet = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.USERS
  );
  if (usersSheet) {
    const usersData = usersSheet.getDataRange().getValues();
    if (usersData && usersData.length > 1) {
      const headers = usersData[0];
      const isActiveIdx = headers.indexOf("IsActive");
      defaults.totalUsers = usersData.length - 1;
      if (isActiveIdx >= 0) {
        let active = 0;
        let inactive = 0;
        usersData.slice(1).forEach((row) => {
          const value = row[isActiveIdx];
          const boolVal = value === true || String(value).toLowerCase() === "true";
          if (boolVal) {
            active += 1;
          } else {
            inactive += 1;
          }
        });
        defaults.activeUsers = active;
        defaults.inactiveUsers = inactive;
      }
    }
  }

  const rolesSheet = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.ROLES
  );
  if (rolesSheet) {
    const roleData = rolesSheet.getDataRange().getValues();
    if (roleData && roleData.length > 1) {
      defaults.roleCount = roleData.length - 1;
    }
  }

  const permsSheet = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.PERMS
  );
  if (permsSheet) {
    const permData = permsSheet.getDataRange().getValues();
    if (permData && permData.length > 1) {
      defaults.permissionCount = permData.length - 1;
    }
  }

  const propsSheet = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.USER_PROPERTIES
  );
  if (propsSheet) {
    const propsData = propsSheet.getDataRange().getValues();
    if (propsData && propsData.length > 1) {
      const headers = propsData[0];
      const keyIdx = headers.indexOf("Property_Key");
      const valIdx = headers.indexOf("Property_Value");
      const userIdx = headers.indexOf("User_Id");
      if (keyIdx >= 0) {
        const pending = propsData.slice(1).filter((row) => {
          const key = String(row[keyIdx] || "").toLowerCase();
          if (key !== "must_change" && key !== "must_change_password") return false;
          const val = row[valIdx];
          const boolVal =
            val === true ||
            String(val).toLowerCase() === "true" ||
            String(val).toLowerCase() === "yes" ||
            String(val).toLowerCase() === "1";
          if (!boolVal) return false;
          return userIdx >= 0 ? row[userIdx] != null && row[userIdx] !== "" : true;
        });
        defaults.pendingPasswordResets = pending.length;
      }
    }
  }

  return defaults;
}

// Enhanced user search with dynamic filtering
function searchUsers(filters = {}) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.USERS);
  if (!sheet) return [];

  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const headers = data[0];

  const idFilterSet = Array.isArray(filters.userIds)
    ? new Set(filters.userIds.map((id) => String(id)))
    : null;
  const getIndex = (name) => headers.indexOf(name);
  const idx = {
    id: getIndex("User_Id"),
    fullName: getIndex("Full_Name"),
    username: getIndex("Username"),
    email: getIndex("Email"),
    department: getIndex("Department"),
    role: getIndex("Role_Id"),
    isActive: getIndex("IsActive"),
    lastLogin: getIndex("Last_Login"),
    updatedAt: getIndex("Updated_At"),
  };

  const normDate = (value) => {
    if (!value) return null;
    if (value instanceof Date) return value;
    const maybe = new Date(value);
    return isNaN(maybe.getTime()) ? null : maybe;
  };

  const fromDate = normDate(filters.updatedFrom);
  const toDate = normDate(filters.updatedTo);
  const toString = (value) => {
    if (value == null) return "";
    if (value instanceof Date) return value.toISOString();
    return String(value);
  };

  const result = data.slice(1).map((row) => {
    const updatedRaw = idx.updatedAt >= 0 ? row[idx.updatedAt] : "";
    return {
      User_Id: idx.id >= 0 ? row[idx.id] : "",
      Full_Name: idx.fullName >= 0 ? row[idx.fullName] : "",
      Username: idx.username >= 0 ? row[idx.username] : "",
      Email: idx.email >= 0 ? row[idx.email] : "",
      Department: idx.department >= 0 ? row[idx.department] : "",
      Role_Id: idx.role >= 0 ? row[idx.role] : "",
      IsActive:
        idx.isActive >= 0
          ? row[idx.isActive] === true ||
            String(row[idx.isActive]).toLowerCase() === "true"
          : false,
      Last_Login: idx.lastLogin >= 0 ? row[idx.lastLogin] : "",
      Updated_At: updatedRaw,
    };
  });

  return result.filter((user) => {
    if (idFilterSet && !idFilterSet.has(String(user.User_Id || ""))) {
      return false;
    }

    if (filters.search) {
      const q = String(filters.search).toLowerCase();
      const searchable = [
        user.User_Id,
        user.Full_Name,
        user.Username,
        user.Email,
        user.Department,
        user.Role_Id,
      ]
        .map(toString)
        .join("||")
        .toLowerCase();
      if (!searchable.includes(q)) return false;
    }

    if (filters.department && user.Department !== filters.department) {
      return false;
    }

    if (filters.role && user.Role_Id !== filters.role) {
      return false;
    }

    if (filters.status !== undefined && filters.status !== "") {
      const desired = String(filters.status).toLowerCase();
      const active = user.IsActive === true;
      if (desired === "true" && !active) return false;
      if (desired === "false" && active) return false;
    }

    if (fromDate || toDate) {
      const updated = normDate(user.Updated_At);
      if (!updated) return false;
      if (fromDate && updated < fromDate) return false;
      if (toDate && updated > toDate) return false;
    }

    return true;
  });
}

function getUserFormStructure(formId = "FORM_SYS_AddUser") {
  const sh = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.DYNAMIC_FORMS
  );
  if (!sh) return [];

  const data = sh.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const h = data[0];
  const idx = {
    Form_ID: h.indexOf("Form_ID"),
    Form_Title: h.indexOf("Form_Title"),
    Tab_ID: h.indexOf("Tab_ID"),
    Tab_Name: h.indexOf("Tab_Name"),
    Section_Header: h.indexOf("Section_Header"),
    Field_ID: h.indexOf("Field_ID"),
    Field_Label: h.indexOf("Field_Label"),
    Field_Type: h.indexOf("Field_Type"),
    Source_Sheet: h.indexOf("Source_Sheet"),
    Source_Key: h.indexOf("Source_Column/Key"),
    Mandatory: h.indexOf("Mandatory"),
    Read_Only: h.indexOf("Read_Only"),
    Target_Sheet: h.indexOf("Target_Sheet"),
    Target_Column: h.indexOf("Target_Column"),
    Role_ID: h.indexOf("Role_ID"),
  };

  return data
    .slice(1)
    .filter((r) => r[idx.Form_ID] === formId)
    .map((r) => ({
      formId: r[idx.Form_ID],
      formTitle: r[idx.Form_Title],
      tabId: r[idx.Tab_ID],
      tabName: r[idx.Tab_Name],
      section: r[idx.Section_Header],
      fieldId: r[idx.Field_ID],
      label: r[idx.Field_Label],
      type: String(r[idx.Field_Type] || "Text").toLowerCase(),
      sourceSheet: r[idx.Source_Sheet] || "",
      sourceKey: r[idx.Source_Key] || "",
      required: String(r[idx.Mandatory] || "").toLowerCase() === "yes",
      readOnly: r[idx.Read_Only] === true,
      targetSheet: r[idx.Target_Sheet] || "",
      targetColumn: r[idx.Target_Column] || "",
      roleId: r[idx.Role_ID] || "",
    }));
}

function getDropdownOptions(key) {
  if (!key) return [];
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.DROPDOWNS);
  if (!sh) return [];

  const data = sh.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const h = data[0];
  const ix = {
    Key: h.indexOf("Key"),
    En: h.indexOf("English_Title"),
    Ar: h.indexOf("Arabic_Title"),
    Active: h.indexOf("Is_Active"),
    Sort: h.indexOf("Sort_Order"),
  };

  return data
    .slice(1)
    .filter((r) => r[ix.Key] === key)
    .filter((r) => {
      const v = String(r[ix.Active]).toLowerCase();
      return (
        v === "true" || v === "yes" || v === "1" || v === "نشط" || v === "y"
      );
    })
    .sort((a, b) => (Number(a[ix.Sort]) || 0) - (Number(b[ix.Sort]) || 0))
    .map((r) => ({
      label: r[ix.Ar] || r[ix.En] || "",
      value: r[ix.En] || r[ix.Ar] || "",
    }));
}

function listRoles() {
  const sheet = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.ROLES);
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const headers = data[0];
  const idx = {
    id: headers.indexOf("Role_Id"),
    title: headers.indexOf("Role_Title"),
    desc: headers.indexOf("Description"),
    isSystem: headers.indexOf("Is_System"),
    updatedAt: headers.indexOf("Updated_At"),
  };
  const toBool = (value) =>
    value === true || String(value).toLowerCase() === "true";
  return data.slice(1).map((row) => ({
    roleId: idx.id >= 0 ? row[idx.id] : "",
    title: idx.title >= 0 ? row[idx.title] : "",
    description: idx.desc >= 0 ? row[idx.desc] : "",
    isSystem: idx.isSystem >= 0 ? toBool(row[idx.isSystem]) : false,
    updatedAt: idx.updatedAt >= 0 ? row[idx.updatedAt] : "",
  }));
}

function listPermissions() {
  const sheet = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.PERMS
  );
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const headers = data[0];
  const idx = {
    key: headers.indexOf("Permission_Key"),
    label: headers.indexOf("Permission_Label"),
    desc: headers.indexOf("Description"),
    category: headers.indexOf("Category"),
    updatedAt: headers.indexOf("Updated_At"),
  };
  return data.slice(1).map((row) => ({
    permissionKey: idx.key >= 0 ? row[idx.key] : "",
    label: idx.label >= 0 ? row[idx.label] : "",
    description: idx.desc >= 0 ? row[idx.desc] : "",
    category: idx.category >= 0 ? row[idx.category] : "",
    updatedAt: idx.updatedAt >= 0 ? row[idx.updatedAt] : "",
  }));
}

function listRolePermissions() {
  const sheet = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.ROLE_PERMS
  );
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const headers = data[0];
  const idx = {
    role: headers.indexOf("Role_Id"),
    permission: headers.indexOf("Permission_Key"),
    scope: headers.indexOf("Scope"),
    allowed: headers.indexOf("Allowed"),
    updatedAt: headers.indexOf("Updated_At"),
  };
  const toBool = (value) =>
    value === true || String(value).toLowerCase() === "true";
  return data.slice(1).map((row) => ({
    roleId: idx.role >= 0 ? row[idx.role] : "",
    permissionKey: idx.permission >= 0 ? row[idx.permission] : "",
    scope: idx.scope >= 0 ? row[idx.scope] : "",
    allowed: idx.allowed >= 0 ? toBool(row[idx.allowed]) : false,
    updatedAt: idx.updatedAt >= 0 ? row[idx.updatedAt] : "",
  }));
}

function listUserProperties() {
  const sheet = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.USER_PROPERTIES
  );
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const headers = data[0];
  const idx = {
    user: headers.indexOf("User_Id"),
    key: headers.indexOf("Property_Key"),
    value: headers.indexOf("Property_Value"),
    updatedAt: headers.indexOf("Updated_At"),
    updatedBy: headers.indexOf("Updated_By"),
  };
  return data.slice(1).map((row) => ({
    userId: idx.user >= 0 ? row[idx.user] : "",
    key: idx.key >= 0 ? row[idx.key] : "",
    value: idx.value >= 0 ? row[idx.value] : "",
    updatedAt: idx.updatedAt >= 0 ? row[idx.updatedAt] : "",
    updatedBy: idx.updatedBy >= 0 ? row[idx.updatedBy] : "",
  }));
}

function listSessions() {
  const sheet = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.SESSIONS
  );
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const headers = data[0];
  const idx = {
    session: headers.indexOf("Session_Id"),
    user: headers.indexOf("User_Id"),
    actor: headers.indexOf("Actor_Email"),
    type: headers.indexOf("Type"),
    status: headers.indexOf("Status"),
    started: headers.indexOf("Started_At"),
    ended: headers.indexOf("Ended_At"),
  };
  return data.slice(1).map((row) => ({
    sessionId: idx.session >= 0 ? row[idx.session] : "",
    userId: idx.user >= 0 ? row[idx.user] : "",
    actor: idx.actor >= 0 ? row[idx.actor] : "",
    type: idx.type >= 0 ? row[idx.type] : "",
    status: idx.status >= 0 ? row[idx.status] : "",
    startedAt: idx.started >= 0 ? row[idx.started] : "",
    endedAt: idx.ended >= 0 ? row[idx.ended] : "",
  }));
}

function getFormWithOptions(formId = "FORM_SYS_AddUser") {
  const fields = getUserFormStructure(formId);
  return fields.map((f) => {
    if (
      f.type === "dropdown" &&
      f.sourceSheet === "SYS_Dropdowns" &&
      f.sourceKey
    ) {
      return Object.assign({}, f, { options: getDropdownOptions(f.sourceKey) });
    }
    return f;
  });
}

function getAuditLog() {
  const sheet = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.AUDIT);
  if (!sheet) return [];

  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const headers = data[0];

  return data
    .slice(1)
    .map(function (row) {
      const iTs = headers.indexOf("Timestamp");
      const iU = headers.indexOf("User");
      const iA = headers.indexOf("Action");
      const iD = headers.indexOf("Details");
      return {
        timestamp: new Date(row[iTs]).toISOString(),
        user: row[iU],
        action: row[iA],
        details: row[iD],
      };
    })
    .sort(function (a, b) {
      return new Date(b.timestamp) - new Date(a.timestamp);
    });
}

function createUser(userData) {
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.USERS);
  if (!sh) throw new Error("Users sheet not found");
  const headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  const getCol = (n) => headers.indexOf(n) + 1;

  const rawPassword =
    userData.password || userData.Password || userData.PASSWORD;
  const passwordHash = rawPassword
    ? hashPassword(rawPassword)
    : userData.Password_Hash || "";

  const row = new Array(headers.length).fill("");
  const set = (key, val) => {
    const c = getCol(key);
    if (c > 0) row[c - 1] = val;
  };

  set("User_Id", userData.User_Id || generateSequentialUserId_());
  set("Full_Name", userData.Full_Name || "");
  set("Username", userData.Username || "");
  set("Email", userData.Email || "");
  set("Job_Title", userData.Job_Title || "");
  set("Department", userData.Department || "");
  set("Role_Id", userData.Role_Id || "");
  set(
    "IsActive",
    userData.IsActive === true ||
      String(userData.IsActive).toLowerCase() === "true"
  );
  set("Password_Hash", passwordHash);
  set("MFA_Enabled", userData.MFA_Enabled === true);
  set("Notes", userData.Notes || "");
  set("Created_At", new Date());
  set("Created_By", Session.getActiveUser()?.getEmail() || "SYSTEM");

  sh.appendRow(row);
  logAuditEvent("CREATE_USER", { userId: row[getCol("User_Id") - 1] });
  return { success: true, userId: row[getCol("User_Id") - 1] };
}

function updateUserPassword(userId, newPassword) {
  if (!userId || !newPassword) throw new Error("Missing userId/password");
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.USERS);
  if (!sh) throw new Error("Users sheet not found");

  const data = sh.getDataRange().getValues();
  const h = data[0];
  const iUser = h.indexOf("User_Id");
  const iHash = h.indexOf("Password_Hash");
  const iUpdAt = h.indexOf("Updated_At");
  const iUpdBy = h.indexOf("Updated_By");
  if (iUser < 0 || iHash < 0) throw new Error("Users headers mismatch");

  const rowIndex = data.slice(1).findIndex((r) => r[iUser] === userId);
  if (rowIndex < 0) throw new Error("User not found");

  const targetRow = rowIndex + 2; // 1-based + header
  const hashed = hashPassword(newPassword);
  sh.getRange(targetRow, iHash + 1).setValue(hashed);
  const now = new Date();
  const actor = getActorEmail_();
  if (iUpdAt >= 0) sh.getRange(targetRow, iUpdAt + 1).setValue(now);
  if (iUpdBy >= 0) sh.getRange(targetRow, iUpdBy + 1).setValue(actor);
  upsertUserProperty_(userId, "Must_Change", true);
  logAuditEvent("RESET_PASSWORD", { userId });
  return { success: true };
}

function toggleUserActive(userId) {
  if (!userId) throw new Error("Missing userId");
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.USERS);
  if (!sh) throw new Error("Users sheet not found");

  const data = sh.getDataRange().getValues();
  const h = data[0];
  const iUser = h.indexOf("User_Id");
  const iAct = h.indexOf("IsActive");
  const iDisAt = h.indexOf("Disabled_At");
  const iDisBy = h.indexOf("Disabled_By");
  if (iUser < 0 || iAct < 0) throw new Error("Users headers mismatch");

  const idx = data.slice(1).findIndex((r) => r[iUser] === userId);
  if (idx < 0) throw new Error("User not found");

  const row = idx + 2;
  const currentRaw = data[idx + 1][iAct];
  const current = currentRaw === true || String(currentRaw).toLowerCase() === "true";
  const next = !current;
  const actor = getActorEmail_();
  sh.getRange(row, iAct + 1).setValue(next);
  if (iDisAt >= 0)
    sh.getRange(row, iDisAt + 1).setValue(next ? "" : new Date());
  if (iDisBy >= 0) sh.getRange(row, iDisBy + 1).setValue(next ? "" : actor);
  const iUpdAt = h.indexOf("Updated_At");
  const iUpdBy = h.indexOf("Updated_By");
  if (iUpdAt >= 0) sh.getRange(row, iUpdAt + 1).setValue(new Date());
  if (iUpdBy >= 0) sh.getRange(row, iUpdBy + 1).setValue(actor);
  logAuditEvent("TOGGLE_ACTIVE", {
    userId,
    previous: current,
    next,
  });
  return { success: true, isActive: next };
}

function bulkUpdateUserStatus(userIds = [], makeActive = true) {
  if (!Array.isArray(userIds) || userIds.length === 0) {
    return { success: false, message: "No users supplied" };
  }

  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.USERS);
  if (!sh) throw new Error("Users sheet not found");

  const data = sh.getDataRange().getValues();
  if (!data || data.length < 2) return { success: true, updated: 0 };
  const headers = data[0];
  const idx = {
    id: headers.indexOf("User_Id"),
    isActive: headers.indexOf("IsActive"),
    disabledAt: headers.indexOf("Disabled_At"),
    disabledBy: headers.indexOf("Disabled_By"),
    updatedAt: headers.indexOf("Updated_At"),
    updatedBy: headers.indexOf("Updated_By"),
  };
  if (idx.id < 0 || idx.isActive < 0) {
    throw new Error("Users headers mismatch");
  }

  const actor = getActorEmail_();
  const now = new Date();
  const rows = data.slice(1);
  const byId = new Map();
  rows.forEach((row, i) => {
    const id = row[idx.id];
    if (id != null && id !== "") byId.set(String(id), { row, index: i });
  });

  let updated = 0;
  userIds.forEach((rawId) => {
    const key = String(rawId);
    if (!byId.has(key)) return;
    const entry = byId.get(key);
    const prevRaw = entry.row[idx.isActive];
    const prev = prevRaw === true || String(prevRaw).toLowerCase() === "true";
    if (prev === makeActive) return;
    const rowNumber = entry.index + 2;
    sh.getRange(rowNumber, idx.isActive + 1).setValue(makeActive);
    if (idx.disabledAt >= 0)
      sh
        .getRange(rowNumber, idx.disabledAt + 1)
        .setValue(makeActive ? "" : now);
    if (idx.disabledBy >= 0)
      sh
        .getRange(rowNumber, idx.disabledBy + 1)
        .setValue(makeActive ? "" : actor);
    if (idx.updatedAt >= 0)
      sh.getRange(rowNumber, idx.updatedAt + 1).setValue(now);
    if (idx.updatedBy >= 0)
      sh.getRange(rowNumber, idx.updatedBy + 1).setValue(actor);
    logAuditEvent("TOGGLE_ACTIVE", {
      userId: rawId,
      previous: prev,
      next: makeActive,
    });
    updated += 1;
  });

  return { success: true, updated };
}

function bulkAssignRole(userIds = [], roleId) {
  if (!Array.isArray(userIds) || userIds.length === 0) {
    return { success: false, message: "No users supplied" };
  }
  if (!roleId) {
    throw new Error("Role_Id is required");
  }

  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.USERS);
  if (!sh) throw new Error("Users sheet not found");

  const data = sh.getDataRange().getValues();
  if (!data || data.length < 2) return { success: true, updated: 0 };
  const headers = data[0];
  const idx = {
    id: headers.indexOf("User_Id"),
    role: headers.indexOf("Role_Id"),
    updatedAt: headers.indexOf("Updated_At"),
    updatedBy: headers.indexOf("Updated_By"),
  };
  if (idx.id < 0 || idx.role < 0) throw new Error("Users headers mismatch");

  const actor = getActorEmail_();
  const now = new Date();
  const rows = data.slice(1);
  const byId = new Map();
  rows.forEach((row, i) => {
    const id = row[idx.id];
    if (id != null && id !== "") byId.set(String(id), { row, index: i });
  });

  let updated = 0;
  userIds.forEach((rawId) => {
    const key = String(rawId);
    if (!byId.has(key)) return;
    const entry = byId.get(key);
    const currentRole = entry.row[idx.role];
    if (String(currentRole) === String(roleId)) return;
    const rowNumber = entry.index + 2;
    sh.getRange(rowNumber, idx.role + 1).setValue(roleId);
    if (idx.updatedAt >= 0)
      sh.getRange(rowNumber, idx.updatedAt + 1).setValue(now);
    if (idx.updatedBy >= 0)
      sh.getRange(rowNumber, idx.updatedBy + 1).setValue(actor);
    logAuditEvent("ASSIGN_ROLE", { userId: rawId, roleId });
    updated += 1;
  });

  return { success: true, updated };
}

function exportUsers(filters = {}, format = "csv") {
  const data = searchUsers(filters);
  const headers = [
    "User_Id",
    "Full_Name",
    "Username",
    "Email",
    "Department",
    "Role_Id",
    "IsActive",
    "Last_Login",
    "Updated_At",
  ];

  const serialize = (value) => {
    if (value == null) return "";
    if (value instanceof Date) return value.toISOString();
    if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
    if (typeof value === "number") return String(value);
    const str = String(value);
    if (/[",\n]/.test(str)) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  };

  const csvRows = [headers.join(",")];
  data.forEach((row) => {
    logAuditEvent("EXPORT_USERS", { userId: row.User_Id });
    const values = headers.map((h) => serialize(row[h]));
    csvRows.push(values.join(","));
  });

  const csv = csvRows.join("\n");
  const timestamp = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone() || "GMT",
    "yyyyMMdd_HHmmss"
  );
  const filename = `users_export_${timestamp}.csv`;
  return {
    format: format || "csv",
    filename,
    mimeType: "text/csv",
    content: csv,
  };
}

function getCurrentUser() {
  const email = Session.getActiveUser().getEmail();
  const sheet = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.USERS);
  if (!sheet) return null;

  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return null;
  const headers = data[0];
  const emailCol = headers.indexOf("Email");
  if (emailCol === -1) return null;

  const row = data.slice(1).find(function (r) {
    return r[emailCol] === email;
  });
  if (!row) return null;

  const u = headers.reduce(function (user, header, i) {
    user[header] = row[i];
    return user;
  }, {});
  return u;
}

function getRolePermissions(roleOrId) {
  const sh = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.ROLE_PERMS
  );
  if (!sh) return [];

  const data = sh.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const h = data[0];
  const iRole =
    h.indexOf("Role_Id") >= 0 ? h.indexOf("Role_Id") : h.indexOf("Role");
  if (iRole < 0) return [];

  return data
    .slice(1)
    .filter((r) => r[iRole] === roleOrId)
    .map((row) => h.reduce((o, k, i) => ((o[k] = row[i]), o), {}));
}

function getUserById(userId) {
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.USERS);
  if (!sh) return null;
  const data = sh.getDataRange().getValues();
  if (!data || data.length < 2) return null;
  const h = data[0];
  const i = h.indexOf("User_Id");
  if (i < 0) return null;
  const idx = data.slice(1).findIndex((r) => r[i] === userId);
  if (idx < 0) return null;
  const row = data[idx + 1];
  return h.reduce((o, col, i2) => ((o[col] = row[i2]), o), {});
}

function updateUser(userData) {
  if (!userData || !userData.User_Id) throw new Error("Missing User_Id");
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.USERS);
  if (!sh) throw new Error("Users sheet not found");
  const data = sh.getDataRange().getValues();
  const h = data[0];
  const iId = h.indexOf("User_Id");
  const rIdx = data.slice(1).findIndex((r) => r[iId] === userData.User_Id);
  if (rIdx < 0) throw new Error("User not found");
  const row = rIdx + 2;

  Object.keys(userData).forEach((k) => {
    const c = h.indexOf(k);
    if (c >= 0 && k !== "Password_Hash" && k !== "password") {
      sh.getRange(row, c + 1).setValue(userData[k]);
    }
  });
  const iUpdAt = h.indexOf("Updated_At"),
    iUpdBy = h.indexOf("Updated_By");
  if (iUpdAt >= 0) sh.getRange(row, iUpdAt + 1).setValue(new Date());
  if (iUpdBy >= 0) sh.getRange(row, iUpdBy + 1).setValue("SYSTEM");
  logAuditEvent("UPDATE_USER", { userId: userData.User_Id });
  return { success: true };
}

/** ---- UTILITIES ---- */
function generateUserId() {
  return generateSequentialUserId_();
}

function hashPassword(password) {
  return Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    password,
    Utilities.Charset.UTF_8
  )
    .map(function (b) {
      return ("0" + (b & 0xff).toString(16)).slice(-2);
    })
    .join("");
}

function logAuditEvent(action, details) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.AUDIT);
  if (!sheet) return false;
  const actor = getActorEmail_();
  sheet.appendRow([new Date(), actor, action, JSON.stringify(details)]);
  return true;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getActorEmail_() {
  const current = getCurrentUser();
  if (current && (current.Email || current.email)) {
    return current.Email || current.email;
  }
  const sessionUser = Session.getActiveUser();
  const email = sessionUser ? sessionUser.getEmail() : "";
  return email || "SYSTEM";
}

function upsertUserProperty_(userId, key, value) {
  if (!userId || !key) return false;
  const sheet = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.USER_PROPERTIES
  );
  if (!sheet) return false;

  const data = sheet.getDataRange().getValues();
  if (!data || data.length === 0) return false;
  const headers = data[0];
  const idx = {
    user: headers.indexOf("User_Id"),
    key: headers.indexOf("Property_Key"),
    value: headers.indexOf("Property_Value"),
    updatedAt: headers.indexOf("Updated_At"),
    updatedBy: headers.indexOf("Updated_By"),
  };

  if (idx.user < 0 || idx.key < 0) return false;

  const targetKey = String(key).toLowerCase();
  const actor = getActorEmail_();
  const now = new Date();
  const rows = data.slice(1);
  const existingIndex = rows.findIndex((row) => {
    const userMatch = String(row[idx.user]) === String(userId);
    const keyMatch =
      idx.key >= 0 && String(row[idx.key] || "").toLowerCase() === targetKey;
    return userMatch && keyMatch;
  });

  if (existingIndex >= 0) {
    const rowNumber = existingIndex + 2;
    if (idx.value >= 0) sheet.getRange(rowNumber, idx.value + 1).setValue(value);
    if (idx.updatedAt >= 0)
      sheet.getRange(rowNumber, idx.updatedAt + 1).setValue(now);
    if (idx.updatedBy >= 0)
      sheet.getRange(rowNumber, idx.updatedBy + 1).setValue(actor);
  } else {
    const row = new Array(headers.length).fill("");
    row[idx.user] = userId;
    if (idx.key >= 0) row[idx.key] = key;
    if (idx.value >= 0) row[idx.value] = value;
    if (idx.updatedAt >= 0) row[idx.updatedAt] = now;
    if (idx.updatedBy >= 0) row[idx.updatedBy] = actor;
    sheet.appendRow(row);
  }
  return true;
}

function generateSequentialUserId_() {
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.USERS);
  if (!sh) return "USR_00001";
  const data = sh.getDataRange().getValues();
  if (!data || data.length < 2) return "USR_00001";
  const h = data[0];
  const iId = h.indexOf("User_Id");
  let max = 0;
  data.slice(1).forEach((r) => {
    const m = String(r[iId] || "").match(/^USR_(\d{5,})$/);
    if (m) max = Math.max(max, parseInt(m[1], 10));
  });
  const next = max + 1;
  return "USR_" + String(next).padStart(5, "0");
}

function getNextUserId() {
  return generateSequentialUserId_();
}

/** ---- SMALL HELPERS FOR CLIENT FILTERS ---- */
function getDeptAndRoleFilters() {
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.USERS);
  if (!sh) return { departments: [], roles: [], roleOptions: [] };
  const data = sh.getDataRange().getValues();
  if (!data || data.length < 2)
    return { departments: [], roles: [], roleOptions: getRoleOptions_() };
  const h = data[0];
  const iDept = h.indexOf("Department");
  const iRole = h.indexOf("Role_Id");
  const depts = new Set();
  const roles = new Set();
  data.slice(1).forEach((r) => {
    if (iDept >= 0 && r[iDept]) depts.add(String(r[iDept]));
    if (iRole >= 0 && r[iRole]) roles.add(String(r[iRole]));
  });
  return {
    departments: Array.from(depts).sort(),
    roles: Array.from(roles).sort(),
    roleOptions: getRoleOptions_(),
  };
}

function getRoleOptions_() {
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.ROLES);
  if (!sh) return [];
  const data = sh.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const headers = data[0];
  const idIdx = headers.indexOf("Role_Id");
  const titleIdx = headers.indexOf("Role_Title");
  return data
    .slice(1)
    .map((row) => ({
      value: idIdx >= 0 ? row[idIdx] : "",
      label: titleIdx >= 0 ? row[titleIdx] || row[idIdx] : row[idIdx],
    }))
    .filter((opt) => opt.value != null && opt.value !== "");
}

function getRoleOptions() {
  return getRoleOptions_();
}

function assignUserRole(userId, roleId) {
  if (!userId) throw new Error("User_Id is required");
  if (!roleId) throw new Error("Role_Id is required");
  return bulkAssignRole([userId], roleId);
}

function softDeleteUser(userId, reason) {
  if (!userId) throw new Error("User_Id is required");
  const sh = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.USERS);
  if (!sh) throw new Error("Users sheet not found");

  const data = sh.getDataRange().getValues();
  if (!data || data.length < 2) throw new Error("User not found");
  const headers = data[0];
  const idx = {
    id: headers.indexOf("User_Id"),
    isActive: headers.indexOf("IsActive"),
    disabledAt: headers.indexOf("Disabled_At"),
    disabledBy: headers.indexOf("Disabled_By"),
    updatedAt: headers.indexOf("Updated_At"),
    updatedBy: headers.indexOf("Updated_By"),
  };
  if (idx.id < 0 || idx.isActive < 0) throw new Error("Users headers mismatch");

  const rows = data.slice(1);
  const rowIndex = rows.findIndex((row) => String(row[idx.id]) === String(userId));
  if (rowIndex < 0) throw new Error("User not found");
  const rowNumber = rowIndex + 2;
  const actor = getActorEmail_();
  const now = new Date();

  sh.getRange(rowNumber, idx.isActive + 1).setValue(false);
  if (idx.disabledAt >= 0)
    sh.getRange(rowNumber, idx.disabledAt + 1).setValue(now);
  if (idx.disabledBy >= 0)
    sh.getRange(rowNumber, idx.disabledBy + 1).setValue(actor);
  if (idx.updatedAt >= 0)
    sh.getRange(rowNumber, idx.updatedAt + 1).setValue(now);
  if (idx.updatedBy >= 0)
    sh.getRange(rowNumber, idx.updatedBy + 1).setValue(actor);

  upsertUserProperty_(userId, "Deleted", true);
  if (reason) {
    upsertUserProperty_(userId, "Delete_Note", reason);
  }

  logAuditEvent("DELETE_USER_SOFT", { userId, reason: reason || "" });
  return { success: true };
}

function startImpersonation(userId) {
  if (!userId) throw new Error("User_Id is required");
  const sheet = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.SESSIONS);
  if (!sheet) throw new Error("Sessions sheet not found");

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const getCol = (name) => headers.indexOf(name) + 1;
  const row = new Array(headers.length).fill("");
  const sessionId = Utilities.getUuid();
  const actor = getActorEmail_();
  const now = new Date();

  const set = (key, value) => {
    const col = getCol(key);
    if (col > 0) row[col - 1] = value;
  };

  set("Session_Id", sessionId);
  set("Actor_Email", actor);
  const actorUser = getCurrentUser();
  if (actorUser && actorUser.User_Id) set("Actor_User_Id", actorUser.User_Id);
  set("User_Id", userId);
  set("Type", "IMPERSONATION");
  set("Status", "ACTIVE");
  set("Started_At", now);

  sheet.appendRow(row);
  logAuditEvent("IMPERSONATE_START", { userId, sessionId });
  return { success: true, sessionId };
}

function getUserProfile(userId) {
  if (!userId) throw new Error("User_Id is required");
  return {
    user: getUserById(userId),
    properties: getUserProperties_(userId),
    documents: getUserDocuments_(userId),
    sessions: getUserSessions_(userId),
    audit: getUserAuditTrail_(userId),
  };
}

function getUserProperties_(userId) {
  if (!userId) return [];
  const sheet = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.USER_PROPERTIES
  );
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const headers = data[0];
  const idx = {
    user: headers.indexOf("User_Id"),
    key: headers.indexOf("Property_Key"),
    value: headers.indexOf("Property_Value"),
    updatedAt: headers.indexOf("Updated_At"),
    updatedBy: headers.indexOf("Updated_By"),
  };
  if (idx.user < 0) return [];
  return data
    .slice(1)
    .filter((row) => String(row[idx.user]) === String(userId))
    .map((row) => ({
      key: idx.key >= 0 ? row[idx.key] : "",
      value: idx.value >= 0 ? row[idx.value] : "",
      updatedAt:
        idx.updatedAt >= 0 && row[idx.updatedAt]
          ? new Date(row[idx.updatedAt])
          : null,
      updatedBy: idx.updatedBy >= 0 ? row[idx.updatedBy] : "",
    }));
}

function getUserDocuments_(userId) {
  if (!userId) return [];
  const sheet = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.DOCUMENTS);
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const headers = data[0];
  const idx = {
    entity: headers.indexOf("Entity"),
    entityId: headers.indexOf("Entity_ID"),
    fileId: headers.indexOf("Drive_File_ID"),
    url: headers.indexOf("Drive_URL"),
    label: headers.indexOf("Label"),
    fileName: headers.indexOf("File_Name"),
    createdAt: headers.indexOf("Created_At"),
    uploadedBy: headers.indexOf("Uploaded_By"),
  };
  return data
    .slice(1)
    .filter((row) => {
      const entityMatch = idx.entity < 0 || row[idx.entity] === "Users";
      const idMatch = idx.entityId < 0 || String(row[idx.entityId]) === String(userId);
      return entityMatch && idMatch;
    })
    .map((row) => ({
      fileId: idx.fileId >= 0 ? row[idx.fileId] : "",
      url: idx.url >= 0 ? row[idx.url] : "",
      label: idx.label >= 0 ? row[idx.label] : "",
      fileName: idx.fileName >= 0 ? row[idx.fileName] : "",
      uploadedBy: idx.uploadedBy >= 0 ? row[idx.uploadedBy] : "",
      createdAt:
        idx.createdAt >= 0 && row[idx.createdAt]
          ? new Date(row[idx.createdAt])
          : null,
    }));
}

function getUserSessions_(userId) {
  if (!userId) return [];
  const sheet = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.SESSIONS);
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const headers = data[0];
  const idx = {
    user: headers.indexOf("User_Id"),
    actor: headers.indexOf("Actor_Email"),
    sessionId: headers.indexOf("Session_Id"),
    type: headers.indexOf("Type"),
    status: headers.indexOf("Status"),
    startedAt: headers.indexOf("Started_At"),
    endedAt: headers.indexOf("Ended_At"),
  };
  if (idx.user < 0) return [];
  return data
    .slice(1)
    .filter((row) => String(row[idx.user]) === String(userId))
    .map((row) => ({
      sessionId: idx.sessionId >= 0 ? row[idx.sessionId] : "",
      actor: idx.actor >= 0 ? row[idx.actor] : "",
      type: idx.type >= 0 ? row[idx.type] : "",
      status: idx.status >= 0 ? row[idx.status] : "",
      startedAt:
        idx.startedAt >= 0 && row[idx.startedAt]
          ? new Date(row[idx.startedAt])
          : null,
      endedAt:
        idx.endedAt >= 0 && row[idx.endedAt]
          ? new Date(row[idx.endedAt])
          : null,
    }));
}

function getUserAuditTrail_(userId) {
  if (!userId) return [];
  const primarySheet = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.AUDIT_REPORT
  );
  const sheet =
    primarySheet || SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.AUDIT);
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const headers = data[0];
  const idx = {
    userId:
      headers.indexOf("Entity_ID") >= 0
        ? headers.indexOf("Entity_ID")
        : headers.indexOf("User_Id"),
    action: headers.indexOf("Action"),
    actor: headers.indexOf("User"),
    details: headers.indexOf("Details"),
    timestamp: headers.indexOf("Timestamp"),
  };
  return data
    .slice(1)
    .filter((row) => {
      if (idx.userId < 0) return true;
      return String(row[idx.userId]) === String(userId);
    })
    .map((row) => ({
      action: idx.action >= 0 ? row[idx.action] : "",
      actor: idx.actor >= 0 ? row[idx.actor] : "",
      details: idx.details >= 0 ? row[idx.details] : "",
      timestamp:
        idx.timestamp >= 0 && row[idx.timestamp]
          ? new Date(row[idx.timestamp])
          : null,
    }))
    .sort((a, b) => {
      const ta = a.timestamp ? a.timestamp.getTime() : 0;
      const tb = b.timestamp ? b.timestamp.getTime() : 0;
      return tb - ta;
    });
}
