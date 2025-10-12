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
    DROPDOWNS: "SYS_Dropdowns",
    DYNAMIC_FORMS: "SYS_Dynamic_Forms",
    PROFILE_VIEW: "SYS_Profile_View",

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
  const sheet = SpreadsheetApp.getActive().getSheetByName(
    CONFIG.SHEETS.PROFILE_VIEW
  );
  if (!sheet)
    return {
      userCount: 0,
      activeProjects: 0,
      monthlyCosts: 0,
      monthlyRevenue: 0,
    };

  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) {
    return {
      userCount: 0,
      activeProjects: 0,
      monthlyCosts: 0,
      monthlyRevenue: 0,
    };
  }
  const headers = data[0];
  const values = data[1];

  const idx = (key) => {
    const i = headers.indexOf(key);
    return i >= 0 ? i : null;
  };
  const safeVal = (key) => {
    const i = idx(key);
    return i == null ? 0 : values[i] || 0;
  };

  return {
    userCount: safeVal("UserCount"),
    activeProjects: safeVal("ActiveProjects"),
    monthlyCosts: safeVal("MonthlyCosts"),
    monthlyRevenue: safeVal("MonthlyRevenue"),
  };
}

// Enhanced user search with dynamic filtering
function searchUsers(filters = {}) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(CONFIG.SHEETS.USERS);
  if (!sheet) return [];

  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const headers = data[0];

  const h = (name) => headers.indexOf(name);
  const iFull = h("Full_Name"),
    iUsername = h("Username"),
    iEmail = h("Email"),
    iDept = h("Department"),
    iRole = h("Role_Id"),
    iActive = h("IsActive"),
    iId = h("User_Id");

  const users = data.slice(1).map(function (row) {
    return {
      fullName: iFull >= 0 ? row[iFull] || "" : "",
      username: iUsername >= 0 ? row[iUsername] || "" : "",
      email: iEmail >= 0 ? row[iEmail] || "" : "",
      department: iDept >= 0 ? row[iDept] || "" : "",
      role: iRole >= 0 ? row[iRole] || "" : "",
      isActive: iActive >= 0 ? row[iActive] === true : false,
      id: iId >= 0 ? row[iId] || "" : "",
    };
  });

  return users.filter(function (user) {
    // Text search
    if (filters.search) {
      const searchQuery = String(filters.search).toLowerCase();
      const matchesSearch = Object.values(user).some(function (value) {
        return String(value).toLowerCase().includes(searchQuery);
      });
      if (!matchesSearch) return false;
    }

    // Department filter
    if (filters.department && user.department !== filters.department) {
      return false;
    }

    // Role filter
    if (filters.role && user.role !== filters.role) {
      return false;
    }

    // Status filter
    if (
      filters.status !== undefined &&
      filters.status !== "" &&
      user.isActive !== (String(filters.status) === "true")
    ) {
      return false;
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
  if (iUpdAt >= 0) sh.getRange(targetRow, iUpdAt + 1).setValue(new Date());
  if (iUpdBy >= 0) sh.getRange(targetRow, iUpdBy + 1).setValue("SYSTEM");
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
  const current = sh.getRange(row, iAct + 1).getValue() === true;
  const next = !current;
  sh.getRange(row, iAct + 1).setValue(next);
  if (iDisAt >= 0)
    sh.getRange(row, iDisAt + 1).setValue(next ? "" : new Date());
  if (iDisBy >= 0) sh.getRange(row, iDisBy + 1).setValue(next ? "" : "SYSTEM");
  logAuditEvent(next ? "REACTIVATE_USER" : "DEACTIVATE_USER", { userId });
  return { success: true, isActive: next };
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
  const curr = getCurrentUser();
  const actor = curr?.Email || curr?.email || "SYSTEM";
  sheet.appendRow([new Date(), actor, action, JSON.stringify(details)]);
  return true;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
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
  if (!sh) return { departments: [], roles: [] };
  const data = sh.getDataRange().getValues();
  if (!data || data.length < 2) return { departments: [], roles: [] };
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
  };
}
