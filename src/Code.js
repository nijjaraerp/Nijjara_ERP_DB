// Code.gs - Consolidated Server-Side Code (fixed)

/** ---- GLOBAL CONFIG ---- */
const CONFIG = {
  APP_NAME: "Nijjara ERP",
  SPREADSHEET_ID: "1Oj7So4c5vBDpvj0pIfDeXz6XxBrY011J4xZwKlSkDzo",
  SPREADSHEET_URL:
    "https://docs.google.com/spreadsheets/d/1Oj7So4c5vBDpvj0pIfDeXz6XxBrY011J4xZwKlSkDzo/edit",
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
    TAB_REGISTER: "SYS_Tab_Register",
    USER_PROPERTIES: "SYS_User_Properties",
    USERS_VIEW: "PV_SYS_Users_Table",

    // Projects
    PRJ_MAIN: "PRJ_Main",
    PRJ_TASKS: "PRJ_Tasks",
    PRJ_COSTS: "PRJ_Costs",
    PRJ_CLIENTS: "PRJ_Clients",
    PRJ_MATERIALS: "PRJ_Materials",
    PRJ_MATERIALS_VIEW: "PV_PRJ_Materials",
    PRJ_ALLOCATIONS: "PRJ_InDirExp_Allocations",
    PRJ_DASHBOARD: "PRJ_Dashboard",

    // Finance
    FIN_DIRECT_EXP: "FIN_DirectExpenses",
    FIN_DIRECT_EXP_VIEW: "PV_FIN_DirectExpenses_View",
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
  DEBUG: true,
  DEBUG_MAX_ARRAY_LENGTH: 25,
  FEATURES: {
    enableDynamicForms: true,
  },
};

const TAB_REGISTER_FALLBACKS = [
  {
    tabId: "Tab_PRJ_Management",
    tabLabelEn: "Projects",
    tabLabelAr: "إدارة المشاريع",
    sortOrder: 20,
    permissions: "PRJ_VIEW_PROJECTS",
    subTabs: [
      {
        subId: "Sub_PRJ_Main",
        subLabelEn: "Projects",
        subLabelAr: "قائمة المشاريع",
        route: "/projects",
        sortOrder: 1,
        sourceSheet: CONFIG.SHEETS.PRJ_MAIN,
      },
      {
        subId: "Sub_PRJ_Tasks",
        subLabelEn: "Tasks",
        subLabelAr: "المهام",
        route: "/projects/tasks",
        sortOrder: 2,
        sourceSheet: CONFIG.SHEETS.PRJ_TASKS,
      },
      {
        subId: "Sub_PRJ_Costs",
        subLabelEn: "Costs",
        subLabelAr: "التكاليف",
        route: "/projects/costs",
        sortOrder: 3,
        sourceSheet: CONFIG.SHEETS.PRJ_COSTS,
      },
      {
        subId: "Sub_PRJ_Materials",
        subLabelEn: "Materials",
        subLabelAr: "المواد",
        route: "/projects/materials",
        sortOrder: 4,
        sourceSheet: CONFIG.SHEETS.PRJ_MATERIALS,
      },
      {
        subId: "Sub_PRJ_Revenue",
        subLabelEn: "Revenue",
        subLabelAr: "الإيرادات",
        route: "/projects/revenue",
        sortOrder: 5,
        sourceSheet: CONFIG.SHEETS.FIN_PROJECT_REVENUE,
      },
    ],
  },
  {
    tabId: "Tab_FIN_Management",
    tabLabelEn: "Finance",
    tabLabelAr: "المالية",
    sortOrder: 30,
    permissions: "FIN_VIEW_REPORTS",
    subTabs: [
      {
        subId: "Sub_FIN_Journal",
        subLabelEn: "Journal",
        subLabelAr: "دفتر اليومية",
        route: "/finance/journal",
        sortOrder: 1,
        sourceSheet: CONFIG.SHEETS.FIN_JOURNAL,
      },
      {
        subId: "Sub_FIN_Revenues",
        subLabelEn: "Revenues",
        subLabelAr: "الإيرادات",
        route: "/finance/revenues",
        sortOrder: 2,
        sourceSheet: CONFIG.SHEETS.FIN_REVENUES,
      },
      {
        subId: "Sub_FIN_Direct",
        subLabelEn: "Direct Expenses",
        subLabelAr: "المصروفات المباشرة",
        route: "/finance/direct-expenses",
        sortOrder: 3,
        sourceSheet: CONFIG.SHEETS.FIN_DIRECT_EXP,
      },
      {
        subId: "Sub_FIN_Indirect_Once",
        subLabelEn: "One-time Indirect",
        subLabelAr: "المصروفات غير المباشرة (مرة واحدة)",
        route: "/finance/indirect-once",
        sortOrder: 4,
        sourceSheet: CONFIG.SHEETS.FIN_INDIRECT_ONCE,
      },
      {
        subId: "Sub_FIN_Indirect_Repeated",
        subLabelEn: "Recurring Indirect",
        subLabelAr: "المصروفات غير المباشرة (متكررة)",
        route: "/finance/indirect-recurring",
        sortOrder: 5,
        sourceSheet: CONFIG.SHEETS.FIN_INDIRECT_REPEATED,
      },
      {
        subId: "Sub_FIN_Custody",
        subLabelEn: "Custody",
        subLabelAr: "العهد",
        route: "/finance/custody",
        sortOrder: 6,
        sourceSheet: CONFIG.SHEETS.FIN_CUSTODY,
      },
    ],
  },
  {
    tabId: "Tab_HR_Management",
    tabLabelEn: "HR",
    tabLabelAr: "الموارد البشرية",
    sortOrder: 40,
    permissions: "HR_VIEW_EMPLOYEES",
    subTabs: [
      {
        subId: "Sub_HR_Employees",
        subLabelEn: "Employees",
        subLabelAr: "الموظفون",
        route: "/hr/employees",
        sortOrder: 1,
        sourceSheet: CONFIG.SHEETS.HR_EMPLOYEES,
      },
      {
        subId: "Sub_HR_Attendance",
        subLabelEn: "Attendance",
        subLabelAr: "الحضور",
        route: "/hr/attendance",
        sortOrder: 2,
        sourceSheet: CONFIG.SHEETS.HR_ATTENDANCE,
      },
      {
        subId: "Sub_HR_Leave",
        subLabelEn: "Leave",
        subLabelAr: "الإجازات",
        route: "/hr/leave",
        sortOrder: 3,
        sourceSheet: CONFIG.SHEETS.HR_LEAVE,
      },
      {
        subId: "Sub_HR_Leave_Requests",
        subLabelEn: "Leave Requests",
        subLabelAr: "طلبات الإجازة",
        route: "/hr/leave-requests",
        sortOrder: 4,
        sourceSheet: CONFIG.SHEETS.HR_LEAVE_REQUESTS,
      },
      {
        subId: "Sub_HR_Advances",
        subLabelEn: "Advances",
        subLabelAr: "السلف",
        route: "/hr/advances",
        sortOrder: 5,
        sourceSheet: CONFIG.SHEETS.HR_ADVANCES,
      },
      {
        subId: "Sub_HR_Deductions",
        subLabelEn: "Deductions",
        subLabelAr: "الخصومات",
        route: "/hr/deductions",
        sortOrder: 6,
        sourceSheet: CONFIG.SHEETS.HR_DEDUCTIONS,
      },
      {
        subId: "Sub_HR_Payroll",
        subLabelEn: "Payroll",
        subLabelAr: "الرواتب",
        route: "/hr/payroll",
        sortOrder: 7,
        sourceSheet: CONFIG.SHEETS.HR_PAYROLL,
      },
    ],
  },
];

const DYNAMIC_FORMS_FALLBACK = Object.freeze({
  Sub_SYS_Users: {
    formId: "FORM_SYS_AddUser",
    titleEn: "Add User",
    titleAr: "إضافة مستخدم جديد",
  },
  Sub_SYS_Roles: {
    formId: "FORM_SYS_AddRole",
    titleEn: "Add Role",
    titleAr: "إضافة دور",
  },
  Sub_SYS_Permissions: {
    formId: "FORM_SYS_AddPermission",
    titleEn: "Add Permission",
    titleAr: "إضافة إذن",
  },
  Sub_SYS_RolePerms: {
    formId: "FORM_SYS_MapRolePermission",
    titleEn: "Map Role Permission",
    titleAr: "ربط إذن بدور",
  },
  Sub_SYS_Properties: {
    formId: "FORM_SYS_AddUserProperty",
    titleEn: "Add User Property",
    titleAr: "إضافة خاصية مستخدم",
  },
  Sub_PRJ_Main: {
    formId: "FORM_PRJ_AddProject",
    titleEn: "Add Project",
    titleAr: "إضافة مشروع جديد",
  },
  Sub_PRJ_Tasks: {
    formId: "FORM_PRJ_AddTask",
    titleEn: "Add Project Task",
    titleAr: "إضافة مهمة مشروع",
  },
  Sub_PRJ_Costs: {
    formId: "FORM_PRJ_AddCost",
    titleEn: "Log Project Cost",
    titleAr: "تسجيل تكلفة مشروع",
  },
  Sub_PRJ_Materials: {
    formId: "FORM_PRJ_AddMaterial",
    titleEn: "Add Material",
    titleAr: "إضافة مادة جديدة",
  },
  Sub_PRJ_Revenue: {
    formId: "FORM_PRJ_AddRevenue",
    titleEn: "Log Project Revenue",
    titleAr: "تسجيل إيراد مشروع",
  },
  Sub_PRJ_Clients: {
    formId: "FORM_PRJ_AddClient",
    titleEn: "Add Client",
    titleAr: "إضافة عميل",
  },
  Sub_HR_Employees: {
    formId: "FORM_HR_AddEmployee",
    titleEn: "Add Employee",
    titleAr: "إضافة موظف",
  },
  Sub_HR_Attendance: {
    formId: "FORM_HR_AddAttendance",
    titleEn: "Log Attendance",
    titleAr: "تسجيل الحضور",
  },
  Sub_HR_Leave_Requests: {
    formId: "FORM_HR_AddLeaveRequest",
    titleEn: "Submit Leave Request",
    titleAr: "تقديم طلب إجازة",
  },
  Sub_HR_Leave: {
    formId: "FORM_HR_AddLeave",
    titleEn: "Record Leave",
    titleAr: "تسجيل إجازة",
  },
  Sub_HR_Advances: {
    formId: "FORM_HR_AddAdvance",
    titleEn: "Log Advance",
    titleAr: "تسجيل سلفة",
  },
  Sub_HR_Deductions: {
    formId: "FORM_HR_AddDeduction",
    titleEn: "Log Deduction",
    titleAr: "تسجيل خصم",
  },
  Sub_HR_Payroll: {
    formId: "FORM_HR_AddPayroll",
    titleEn: "Create Payroll Entry",
    titleAr: "إنشاء بيان راتب",
  },
});

const HR_PANE_CONFIG = Object.freeze({
  Sub_HR_Employees: {
    sheetName: CONFIG.SHEETS.HR_EMPLOYEES,
    idColumn: "Employee_ID",
    entity: "HR_Employees",
    idPrefix: "EMP",
  },
  Sub_HR_Attendance: {
    sheetName: CONFIG.SHEETS.HR_ATTENDANCE,
    idColumn: "Attendance_ID",
    entity: "HR_Attendance",
    idPrefix: "ATT",
  },
  Sub_HR_Leave_Requests: {
    sheetName: CONFIG.SHEETS.HR_LEAVE_REQUESTS,
    idColumn: "Leave_ID",
    entity: "HR_Leave_Requests",
    idPrefix: "LRQ",
  },
  Sub_HR_Leave: {
    sheetName: CONFIG.SHEETS.HR_LEAVE,
    idColumn: "Leave_ID",
    entity: "HR_Leave",
    idPrefix: "LVE",
  },
  Sub_HR_Advances: {
    sheetName: CONFIG.SHEETS.HR_ADVANCES,
    idColumn: "Advance_ID",
    entity: "HR_Advances",
    idPrefix: "ADV",
  },
  Sub_HR_Deductions: {
    sheetName: CONFIG.SHEETS.HR_DEDUCTIONS,
    idColumn: "Deduction_ID",
    entity: "HR_Deductions",
    idPrefix: "DED",
  },
  Sub_HR_Payroll: {
    sheetName: CONFIG.SHEETS.HR_PAYROLL,
    idColumn: "Payroll_ID",
    entity: "HR_Payroll",
    idPrefix: "PAY",
  },
});

/** ---- DEBUGGING UTILITIES ---- */
function debugLog(context, message, data) {
  if (!CONFIG.DEBUG) return;
  try {
    const entry = {
      ts: new Date().toISOString(),
      context,
      message,
    };
    if (data !== undefined) {
      entry.data = sanitizeForLog(data);
    }
    Logger.log(JSON.stringify(entry));
  } catch (err) {
    Logger.log(`${context}::${message} (failed to stringify) -> ${err}`);
  }
}

function debugError(context, error, data) {
  if (!CONFIG.DEBUG) return;
  const payload = {
    message: error && error.message ? error.message : String(error),
    stack: error && error.stack ? String(error.stack) : null,
  };
  if (data !== undefined) payload.meta = sanitizeForLog(data);
  debugLog(context, "error", payload);
}

function withErrorHandling(fn, context, metadata) {
  try {
    return fn();
  } catch (err) {
    const name = context || "unknown";
    const message = err && err.message ? err.message : String(err);
    const stack = err && err.stack ? err.stack : "<no stack>";
    if (metadata !== undefined) {
      try {
        Logger.log(
          "[%s] metadata: %s",
          name,
          safeStringify_(sanitizeForLog(metadata))
        );
      } catch (metaErr) {
        Logger.log(
          "[%s] metadata logging failed: %s",
          name,
          metaErr && metaErr.message ? metaErr.message : String(metaErr)
        );
      }
    }
    Logger.log("[%s] Error: %s", name, message);
    Logger.log("[%s] Stack: %s", name, stack);
    return { error: true, message };
  }
}

function safeStringify_(value) {
  if (value === undefined) return "undefined";
  if (value === null) return "null";
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (value && typeof value === "object") {
    if (
      typeof value.getContent === "function" &&
      typeof value.setTitle === "function"
    ) {
      return "[HtmlOutput]";
    }

    const seen = new WeakSet();
    try {
      const sanitized = sanitizeForLog(value);
      return JSON.stringify(sanitized, function (key, val) {
        if (typeof val === "function") {
          return `[Function ${val.name || "anonymous"}]`;
        }
        if (val && typeof val === "object") {
          if (seen.has(val)) return "[Circular]";
          seen.add(val);
        }
        return val;
      });
    } catch (err) {
      try {
        return JSON.stringify(value);
      } catch (innerErr) {
        try {
          return String(value);
        } catch (stringErr) {
          return "[Unserializable]";
        }
      }
    }
  }

  try {
    return JSON.stringify(value);
  } catch (err) {
    try {
      return String(value);
    } catch (stringErr) {
      return "[Unserializable]";
    }
  }
}

function normalizeKeyValue_(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (value instanceof Date) return value.toISOString();
  try {
    return String(value).trim();
  } catch (err) {
    return "";
  }
}

function keysEqual_(a, b) {
  return normalizeKeyValue_(a) === normalizeKeyValue_(b);
}

function wrapFunctionWithErrorHandling_(name, fn) {
  return function wrappedWithErrorHandling() {
    const args = Array.prototype.slice.call(arguments || []);
    try {
      Logger.log("[%s] called with args: %s", name, safeStringify_(args));
    } catch (err) {
      Logger.log(
        "[%s] failed to log args: %s",
        name,
        err && err.message ? err.message : String(err)
      );
    }

    return withErrorHandling(
      () => {
        const result = fn.apply(this, args);
        try {
          Logger.log("[%s] returning: %s", name, safeStringify_(result));
        } catch (err) {
          Logger.log(
            "[%s] failed to log result: %s",
            name,
            err && err.message ? err.message : String(err)
          );
        }
        return result;
      },
      name,
      { args }
    );
  };
}

function sanitizeForLog(value, depth = 0) {
  if (value == null) return value;
  if (typeof value === "string") {
    const trimmed = value.length > 512 ? value.slice(0, 509) + "…" : value;
    return trimmed;
  }
  if (typeof value !== "object") return value;
  if (depth > 3) return "[MaxDepth]";
  if (Array.isArray(value)) {
    const limit = CONFIG.DEBUG_MAX_ARRAY_LENGTH || 25;
    const slice = value
      .slice(0, limit)
      .map((item) => sanitizeForLog(item, depth + 1));
    if (value.length > limit) slice.push(`…+${value.length - limit} more`);
    return slice;
  }
  const redactedFields = [
    "password",
    "Password",
    "Password_Hash",
    "Temp_Password",
    "USR_Temp_Password",
  ];
  const safe = {};
  Object.keys(value).forEach((key) => {
    if (redactedFields.indexOf(key) >= 0) {
      safe[key] = "[REDACTED]";
    } else {
      safe[key] = sanitizeForLog(value[key], depth + 1);
    }
  });
  return safe;
}

let cachedSpreadsheet_ = null;
let cachedSpreadsheetId_ = "";
const missingSheetsLogged_ = new Set();

function extractSpreadsheetId_(value) {
  if (!value) return "";
  const match = String(value).match(/[-\w]{25,}/);
  return match ? match[0] : "";
}

function resolveSpreadsheetId_() {
  if (cachedSpreadsheetId_) return cachedSpreadsheetId_;
  const candidates = [];
  if (CONFIG.SPREADSHEET_ID) candidates.push(CONFIG.SPREADSHEET_ID);
  if (CONFIG.SPREADSHEET_URL) {
    const idFromUrl = extractSpreadsheetId_(CONFIG.SPREADSHEET_URL);
    if (idFromUrl) candidates.push(idFromUrl);
  }
  try {
    const props = PropertiesService.getScriptProperties();
    const propId = props ? props.getProperty("SPREADSHEET_ID") : "";
    if (propId) candidates.push(propId);
  } catch (err) {
    debugError("resolveSpreadsheetId_", err);
  }
  cachedSpreadsheetId_ = candidates.find((id) => !!id) || "";
  return cachedSpreadsheetId_;
}

function getSpreadsheet_() {
  if (cachedSpreadsheet_) return cachedSpreadsheet_;
  try {
    const active = SpreadsheetApp.getActive();
    if (active) {
      cachedSpreadsheet_ = active;
      return cachedSpreadsheet_;
    }
  } catch (err) {
    debugError("getSpreadsheet_", err, { stage: "getActive" });
  }
  const id = resolveSpreadsheetId_();
  if (id) {
    try {
      cachedSpreadsheet_ = SpreadsheetApp.openById(id);
      return cachedSpreadsheet_;
    } catch (err) {
      debugError("getSpreadsheet_", err, { stage: "openById", id });
      throw err;
    }
  }
  throw new Error(
    "Spreadsheet context not found. Set CONFIG.SPREADSHEET_ID or script property SPREADSHEET_ID."
  );
}

function getSheet_(name) {
  if (!name) return null;
  try {
    const ss = getSpreadsheet_();
    if (!ss) return null;
    const sheet = ss.getSheetByName(name);
    if (!sheet) {
      if (!missingSheetsLogged_.has(name)) {
        missingSheetsLogged_.add(name);
        debugLog("getSheet_", "missingSheet", { name });
      }
    }
    return sheet;
  } catch (error) {
    console.error(
      `[getSheet_] EXCEPTION: ${error.message} Stack: ${error.stack}`
    );
    debugError("getSheet_", error, { name });
    throw error;
  }
}

function getSheetWithFallback_(...names) {
  for (const name of names) {
    if (!name) continue;
    const sheet = getSheet_(name);
    if (sheet) return sheet;
  }
  return null;
}

function getSheetByName_(name) {
  const FNAME = "getSheetByName_";
  try {
    return getSheet_(name);
  } catch (error) {
    console.error(
      `[${FNAME}] EXCEPTION: ${error.message} Stack: ${error.stack}`
    );
    debugError(FNAME, error, { name });
    throw error;
  }
}

function appendRow_(sheet, rowObject, headers) {
  const FNAME = "appendRow_";
  try {
    if (!sheet) {
      throw new Error("appendRow_: sheet is required");
    }

    let effectiveHeaders = Array.isArray(headers) ? headers.slice() : null;
    if (!effectiveHeaders || !effectiveHeaders.length) {
      const lastCol = sheet.getLastColumn();
      effectiveHeaders =
        lastCol > 0 ? sheet.getRange(1, 1, 1, lastCol).getValues().flat() : [];
    }

    if (!effectiveHeaders.length) {
      throw new Error("appendRow_: sheet headers could not be resolved");
    }

    const rowValues = effectiveHeaders.map((header) => {
      if (
        rowObject &&
        Object.prototype.hasOwnProperty.call(rowObject, header) &&
        rowObject[header] !== undefined &&
        rowObject[header] !== null
      ) {
        return rowObject[header];
      }
      return "";
    });

    sheet.appendRow(rowValues);
    return true;
  } catch (error) {
    const sheetName =
      sheet && typeof sheet.getName === "function" ? sheet.getName() : null;
    console.error(
      `[${FNAME}] EXCEPTION: ${error.message} Stack: ${error.stack}`
    );
    debugError(FNAME, error, { sheet: sheetName });
    throw error;
  }
}

function resolveDataSourceFromCandidate_(ss, candidate) {
  if (!candidate) return null;

  const trySheet = (name) => {
    if (!name) return null;
    const sheet = ss.getSheetByName(name);
    if (!sheet) return null;
    return {
      sheet,
      range: sheet.getDataRange(),
      sourceName: sheet.getName(),
      sourceType: "sheet",
    };
  };

  const tryNamedRange = (name) => {
    if (!name) return null;
    try {
      const range = ss.getRangeByName(name);
      if (!range) return null;
      const sheet = range.getSheet();
      return {
        sheet,
        range,
        sourceName: name,
        sourceType: "namedRange",
      };
    } catch (err) {
      debugError("resolveDataSourceFromCandidate_", err, {
        stage: "namedRange",
        name,
      });
      return null;
    }
  };

  const trySheetRange = (sheetName, a1Notation) => {
    if (!sheetName || !a1Notation) return null;
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) return null;
    try {
      const range = sheet.getRange(a1Notation);
      return {
        sheet,
        range,
        sourceName: `${sheetName}!${a1Notation}`,
        sourceType: "range",
      };
    } catch (err) {
      debugError("resolveDataSourceFromCandidate_", err, {
        stage: "sheetRange",
        sheet: sheetName,
        range: a1Notation,
      });
      return null;
    }
  };

  const normaliseString = (value) =>
    typeof value === "string" ? value.trim() : "";

  if (typeof candidate === "string") {
    const name = normaliseString(candidate);
    if (!name) return null;
    let resolved = trySheet(name) || tryNamedRange(name);
    if (!resolved && name.indexOf("!") >= 0) {
      const parts = name.split("!");
      const sheetName = normaliseString(parts[0]);
      const a1Notation = normaliseString(parts.slice(1).join("!"));
      resolved = trySheetRange(sheetName, a1Notation);
    }
    return resolved;
  }

  if (candidate && typeof candidate === "object") {
    const sheetName = normaliseString(candidate.sheet || candidate.sheetName);
    const rangeNotation = normaliseString(
      candidate.range || candidate.rangeA1 || candidate.a1
    );
    const named = normaliseString(candidate.name || candidate.namedRange);

    let resolved = null;
    if (named) {
      resolved = tryNamedRange(named) || trySheet(named);
    }
    if (!resolved && sheetName && rangeNotation) {
      resolved = trySheetRange(sheetName, rangeNotation);
    }
    if (!resolved && sheetName) {
      resolved = trySheet(sheetName);
    }
    if (!resolved && rangeNotation) {
      if (rangeNotation.indexOf("!") >= 0) {
        const parts = rangeNotation.split("!");
        resolved = trySheetRange(parts[0], parts.slice(1).join("!"));
      } else {
        resolved = tryNamedRange(rangeNotation) || trySheet(rangeNotation);
      }
    }
    return resolved;
  }

  return null;
}

function loadSheetData_(...names) {
  let ss;
  try {
    ss = getSpreadsheet_();
  } catch (err) {
    debugError("loadSheetData_", err, { stage: "getSpreadsheet", names });
    return { sheet: null, headers: [], rows: [], sourceName: "" };
  }

  let resolved = null;
  for (const candidate of names) {
    resolved = resolveDataSourceFromCandidate_(ss, candidate);
    if (resolved && resolved.range) {
      break;
    }
  }

  if (!resolved || !resolved.range) {
    debugLog("loadSheetData_", "noSource", { names });
    return { sheet: null, headers: [], rows: [], sourceName: "" };
  }

  const { sheet, range, sourceName, sourceType } = resolved;

  try {
    const values = range.getValues();
    if (!values || !values.length) {
      debugLog("loadSheetData_", "noValues", { sourceName, sourceType });
      return { sheet, headers: [], rows: [], sourceName };
    }

    const [headerRow, ...dataRows] = values;
    const headers = headerRow.map((header, index) => {
      if (header == null) {
        return `Column_${index + 1}`;
      }
      if (typeof header === "string") {
        const trimmed = header.trim();
        return trimmed || `Column_${index + 1}`;
      }
      return header;
    });

    const rows = dataRows.filter((row) =>
      row.some((cell) => cell !== "" && cell !== null && cell !== undefined)
    );

    debugLog("loadSheetData_", "resolved", {
      sourceName,
      sourceType,
      headers: headers.length,
      rows: rows.length,
    });
    return { sheet, headers, rows, sourceName, sourceType };
  } catch (err) {
    debugError("loadSheetData_", err, { names, sourceName, sourceType });
    return { sheet, headers: [], rows: [], sourceName };
  }
}

function normalizeHeaderKey_(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[\s_\-]+/g, "");
}

function findHeaderIndex_(headers, ...candidates) {
  if (!headers || !headers.length) return -1;
  const normalized = headers.map((h) => normalizeHeaderKey_(h));
  for (const candidate of candidates) {
    if (!candidate) continue;
    const key = normalizeHeaderKey_(candidate);
    const idx = normalized.indexOf(key);
    if (idx >= 0) return idx;
  }
  return -1;
}

function getValueAt_(row, index) {
  if (!row || index == null || index < 0) return "";
  return row[index];
}

function coerceDate_(value) {
  if (!value) return null;
  if (value instanceof Date) return value;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function normalizeDateOutput_(value) {
  const date = coerceDate_(value);
  if (!date) return "";
  try {
    return date.toISOString();
  } catch (err) {
    try {
      return new Date(date).toISOString();
    } catch (innerErr) {
      debugError("normalizeDateOutput_", innerErr);
      return "";
    }
  }
}

function isTruthyFlag_(value) {
  if (value === true) return true;
  if (value === false) return false;
  const text = String(value || "")
    .trim()
    .toLowerCase();
  if (!text) return false;
  const truthy = [
    "true",
    "yes",
    "1",
    "y",
    "enabled",
    "active",
    "نشط",
    "مفعل",
    "مُفعّل",
    "نعم",
  ];
  const falsy = ["false", "no", "0", "n", "غير نشط", "معطل", "لا"];
  if (truthy.indexOf(text) >= 0) return true;
  if (falsy.indexOf(text) >= 0) return false;
  return false;
}

function setRowValue_(headers, row, value, ...candidates) {
  if (!headers || !row) return;
  const idx = findHeaderIndex_(headers, ...candidates);
  if (idx >= 0) row[idx] = value;
}

/** ---- ENTRY POINT ---- */
function doGet(e) {
  // Add a clear marker for deployment vs. real user runs
  Logger.log(
    "[doGet] invoked at %s with params: %s",
    new Date(),
    safeStringify_(e)
  );

  const result = withErrorHandling(
    function () {
      debugLog("doGet", "render", { query: e && e.parameter });

      const t = HtmlService.createTemplateFromFile("Dashboard");
      t.appName = CONFIG.APP_NAME;

      const output = t
        .evaluate()
        .setTitle(CONFIG.APP_NAME + " - Demo Portal")
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

      Logger.log("[doGet] returning HtmlOutput at %s", new Date());
      return output;
    },
    "doGet",
    { query: e && e.parameter }
  );

  if (result && result.error) {
    Logger.log("[doGet] returning error Html due to: %s", result.message);
    const html = HtmlService.createHtmlOutput(
      Utilities.formatString(
        "<p><strong>Application Error:</strong> %s</p>",
        result.message
      )
    );
    html.setTitle("Application Error");
    return html;
  }

  return result;
}

/** ---- DATA ACCESS ---- */
function getBootstrapData(userOverride, permissionsOverride) {
  const FNAME = "getBootstrapData";
  debugLog(FNAME, "start", {
    hasOverride: !!userOverride,
    hasPermissionsOverride: Array.isArray(permissionsOverride),
  });

  try {
    const currentUser = userOverride || getCurrentUser();
    let payload = buildBootstrapPayload_(currentUser, permissionsOverride);
    if (!payload || typeof payload !== "object") {
      debugLog(FNAME, "invalidPayload", {
        hasPayload: !!payload,
        type: typeof payload,
      });
      payload = buildGuestBootstrapPayload_();
    }

    debugLog(FNAME, "resolved", {
      hasUser: !!payload.user,
      role: payload.role,
      nav: Array.isArray(payload.nav) ? payload.nav.length : 0,
    });
    return sanitizeForClientResponse_(payload);
  } catch (err) {
    console.error(`[${FNAME}] EXCEPTION: ${err.message} Stack: ${err.stack}`);
    debugError(FNAME, err, {
      stage: "unexpected",
      hasOverride: !!userOverride,
    });
    const fallback = buildGuestBootstrapPayload_();
    fallback.meta = Object.assign({}, fallback.meta, {
      error: true,
      errorMessage: err && err.message ? String(err.message) : "unknown",
    });
    return sanitizeForClientResponse_(fallback);
  }
}

function buildBootstrapPayload_(rawUser, permissionsOverride) {
  const sanitizedUser = sanitizeUserForClient_(rawUser);
  const role = sanitizedUser?.Role_Id || sanitizedUser?.role || "GUEST";
  const permissions = Array.isArray(permissionsOverride)
    ? permissionsOverride
    : getRolePermissions(role) || [];
  const filters = getDeptAndRoleFilters() || {
    departments: [],
    roles: [],
    roleOptions: [],
  };

  const timestamp = new Date().toISOString();

  return {
    appName: CONFIG.APP_NAME,
    now: timestamp,
    user: sanitizedUser,
    role,
    permissions,
    filters,
    dropdowns: {
      paymentStatus: getDropdownOptions("DD_Payment_Status"),
      paymentMethod: getDropdownOptions("DD_Payment_Method"),
    },
    nav: buildNavigationConfig_(role, permissions),
    tabRegister: getTabRegister(),
    forms: loadDynamicFormsRegisterSafe_(),
    meta: {
      hasUser: !!sanitizedUser,
      permissions: Array.isArray(permissions) ? permissions.length : 0,
      generatedAt: timestamp,
    },
  };
}

function buildGuestBootstrapPayload_() {
  const timestamp = new Date().toISOString();
  return {
    appName: CONFIG.APP_NAME,
    now: timestamp,
    user: null,
    role: "GUEST",
    permissions: [],
    filters: {
      departments: [],
      roles: [],
      roleOptions: [],
    },
    dropdowns: {
      paymentStatus: [],
      paymentMethod: [],
    },
    nav: buildNavigationConfig_("GUEST", []),
    tabRegister: getTabRegister(),
    forms: loadDynamicFormsRegisterSafe_(),
    meta: {
      hasUser: false,
      permissions: 0,
      generatedAt: timestamp,
    },
  };
}

function loadDynamicFormsRegisterSafe_() {
  const FNAME = "loadDynamicFormsRegisterSafe_";
  const fallback = cloneDynamicFormsFallback_();

  try {
    const features = CONFIG?.FEATURES || {};
    if (features.enableDynamicForms === false) {
      debugLog(FNAME, "disabledByConfig");
      return fallback;
    }

    if (typeof getDynamicFormsRegister_ !== "function") {
      debugLog(FNAME, "missingLoader");
      return fallback;
    }

    const register = getDynamicFormsRegister_();
    if (!register || typeof register !== "object") {
      debugLog(FNAME, "invalidRegister", {
        type: register == null ? "null" : typeof register,
      });
      return fallback;
    }

    const safeRegister = cloneDynamicFormsFallback_();
    Object.keys(register).forEach((key) => {
      if (!key) return;
      const entry = register[key];
      if (!entry || typeof entry !== "object") return;
      const formId =
        entry.formId ||
        entry.formID ||
        entry.Form_Id ||
        entry.FormID ||
        entry.id ||
        entry.Id;
      if (!formId) return;

      safeRegister[key] = {
        ...entry,
        formId: String(formId).trim(),
      };
    });

    const keys = Object.keys(safeRegister);
    debugLog(FNAME, "resolved", {
      count: keys.length,
    });

    return safeRegister;
  } catch (err) {
    debugError(FNAME, err);
    return fallback;
  }
}

function cloneDynamicFormsFallback_() {
  const clone = Object.create(null);
  const source = DYNAMIC_FORMS_FALLBACK || {};
  Object.keys(source).forEach((key) => {
    if (!key) return;
    const entry = source[key] || {};
    const formId = entry.formId ? String(entry.formId).trim() : "";
    clone[key] = {
      ...entry,
      formId,
    };
  });
  return clone;
}

function getDynamicFormsRegister_() {
  const FNAME = "getDynamicFormsRegister_";
  debugLog(FNAME, "start");

  try {
    const { headers, rows } = loadSheetData_(CONFIG.SHEETS.DYNAMIC_FORMS);

    if (!rows.length) {
      debugLog(FNAME, "noRows");
      return Object.create(null);
    }

    const idx = {
      pane: findHeaderIndex_(
        headers,
        "Pane",
        "Pane_Name",
        "Pane_Key",
        "PaneId",
        "Pane_ID",
        "PaneID"
      ),
      formId: findHeaderIndex_(
        headers,
        "Form_Id",
        "FormId",
        "FormID",
        "Form_Key",
        "Form",
        "FormCode"
      ),
      titleEn: findHeaderIndex_(
        headers,
        "Title_EN",
        "Form_Title_EN",
        "Form_Title",
        "Label_EN",
        "LabelEn"
      ),
      titleAr: findHeaderIndex_(
        headers,
        "Title_AR",
        "Form_Title_AR",
        "Label_AR",
        "LabelAr"
      ),
      permission: findHeaderIndex_(
        headers,
        "Permission_Key",
        "Permission",
        "Required_Permission",
        "PermissionKey"
      ),
      type: findHeaderIndex_(
        headers,
        "Form_Type",
        "Type",
        "Record_Type",
        "RecordType"
      ),
      isActive: findHeaderIndex_(
        headers,
        "IsActive",
        "Active",
        "Enabled",
        "Is_Active"
      ),
    };

    const readString = (row, index) => {
      if (index == null || index < 0) return "";
      const value = getValueAt_(row, index);
      if (value == null) return "";
      if (value instanceof Date) return value.toISOString();
      return String(value).trim();
    };

    const register = Object.create(null);

    rows.forEach((row) => {
      if (!row) return;
      if (idx.isActive >= 0 && !isTruthyFlag_(getValueAt_(row, idx.isActive))) {
        return;
      }

      const paneKey = readString(row, idx.pane);
      const formId = readString(row, idx.formId);
      if (!paneKey || !formId) return;

      register[paneKey] = {
        formId,
        titleEn: readString(row, idx.titleEn),
        titleAr: readString(row, idx.titleAr),
        permission: readString(row, idx.permission),
        type: readString(row, idx.type) || "FORM",
      };
    });

    const keys = Object.keys(register);
    debugLog(FNAME, "resolved", { count: keys.length });

    return register;
  } catch (err) {
    debugError(FNAME, err);
    return Object.create(null);
  }
}

function buildNavigationConfig_(role, permissions) {
  const permissionSet = new Set();
  if (Array.isArray(permissions)) {
    permissions.forEach((p) => {
      const key =
        (p && (p.Permission_Key || p.permissionKey || p.key || p.Permission)) ||
        null;
      if (key) permissionSet.add(String(key).toUpperCase());
    });
  }
  const hasPermission = (requiredKeys) => {
    if (
      !requiredKeys ||
      (Array.isArray(requiredKeys) && !requiredKeys.length)
    ) {
      return true;
    }
    if (!permissionSet.size) return false;
    const keys = Array.isArray(requiredKeys) ? requiredKeys : [requiredKeys];
    return keys.some((key) =>
      permissionSet.has(String(key || "").toUpperCase())
    );
  };

  const FALLBACK_TAB_TARGETS = {
    Tab_SYS_Management: "system-management-view",
    Tab_PRJ_Management: "projects-workspace",
    Tab_FIN_Management: "finance-workspace",
    Tab_HR_Management: "hr-workspace",
    TAB_SYS_MANAGEMENT: "system-management-view",
    TAB_PRJ_MANAGEMENT: "projects-workspace",
    TAB_FIN_MANAGEMENT: "finance-workspace",
    TAB_HR_MANAGEMENT: "hr-workspace",
  };

  const tabRegister = getTabRegister();
  const NAV_ITEMS = (Array.isArray(tabRegister) ? tabRegister : [])
    .map((tab) => {
      const rawPermissions = tab?.permissions;
      let permissionsList = [];
      if (Array.isArray(rawPermissions)) {
        permissionsList = rawPermissions.filter(Boolean).map(String);
      } else if (typeof rawPermissions === "string") {
        permissionsList = rawPermissions
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean);
      } else if (rawPermissions) {
        permissionsList = [String(rawPermissions)];
      }

      const key = tab?.tabId || tab?.tabID || tab?.key || "";
      const label =
        tab?.tabLabelAr || tab?.tabLabelEn || tab?.tabLabel || key || "";
      const normalizedKey = String(key || "");
      const fallbackTarget =
        FALLBACK_TAB_TARGETS[normalizedKey] ||
        FALLBACK_TAB_TARGETS[normalizedKey.toUpperCase()] ||
        FALLBACK_TAB_TARGETS[normalizedKey.toLowerCase()] ||
        null;
      const target = tab?.route || tab?.target || fallbackTarget || "";

      if (!key || !target) {
        return null;
      }

      return {
        key,
        label,
        target,
        permissions: permissionsList,
      };
    })
    .filter(Boolean);

  const eligible = NAV_ITEMS.filter((item) =>
    role && String(role).toUpperCase() === "ADMIN"
      ? true
      : hasPermission(item.permissions)
  );

  if (!eligible.length) {
    const systemNav =
      NAV_ITEMS.find((item) =>
        String(item.key || "")
          .toUpperCase()
          .includes("SYS")
      ) ||
      NAV_ITEMS.find(
        (item) =>
          String(item.target || "").toLowerCase() === "system-management-view"
      );
    if (systemNav) {
      return [systemNav];
    }
    if (NAV_ITEMS.length) {
      return [NAV_ITEMS[0]];
    }
    return [];
  }

  return eligible;
}

function getSheetData(sourceName) {
  const FNAME = "getSheetData";
  debugLog(FNAME, "start", { sourceName });
  try {
    if (!sourceName) {
      debugLog(FNAME, "emptySource");
      return sanitizeForClientResponse_({ headers: [], rows: [] });
    }

    const { headers = [], rows = [] } = loadSheetData_(sourceName);
    const payload = {
      headers: Array.isArray(headers) ? headers : [],
      rows: Array.isArray(rows) ? rows : [],
    };
    const sanitized = sanitizeForClientResponse_(payload);
    debugLog(FNAME, "success", {
      headers: payload.headers.length,
      rows: payload.rows.length,
    });
    return sanitized;
  } catch (err) {
    debugError(FNAME, err, { sourceName });
    throw err;
  }
}

const DETAIL_CONFIGS = [
  {
    type: "project",
    match: (paneId, entityKey) => {
      const id = String(paneId || "").toUpperCase();
      const key = String(entityKey || "").toUpperCase();
      return id.includes("PRJ") || key.includes("PROJECT");
    },
    primary: {
      sheet: CONFIG.SHEETS.PRJ_MAIN,
      keys: ["Project_ID", "ProjectId", "ID"],
    },
    titleField: "Project_Name",
    labels: {
      general: "البيانات العامة",
    },
    sections: [
      {
        id: "tasks",
        label: "المهام",
        sheet: CONFIG.SHEETS.PRJ_TASKS,
        keys: ["Project_ID", "ProjectId"],
      },
      {
        id: "costs",
        label: "التكاليف",
        sheet: CONFIG.SHEETS.PRJ_COSTS,
        keys: ["Project_ID"],
      },
      {
        id: "directExpenses",
        label: "المصروفات المباشرة",
        sheet: CONFIG.SHEETS.FIN_DIRECT_EXP,
        keys: ["Project_ID"],
      },
      {
        id: "indirectAllocations",
        label: "المصروفات غير المباشرة",
        sheet: CONFIG.SHEETS.PRJ_ALLOCATIONS,
        keys: ["Project_ID"],
      },
      {
        id: "revenues",
        label: "الإيرادات",
        sheet: CONFIG.SHEETS.FIN_PROJECT_REVENUE,
        keys: ["Project_ID"],
      },
      {
        id: "dashboard",
        label: "مؤشرات المشروع",
        sheet: CONFIG.SHEETS.PRJ_DASHBOARD,
        keys: ["Project_ID"],
      },
    ],
    attachments: { entity: "PRJ" },
  },
  {
    type: "hr",
    match: (paneId, entityKey) => {
      const id = String(paneId || "").toUpperCase();
      const key = String(entityKey || "").toUpperCase();
      return id.includes("HR") || key.includes("EMP") || key.includes("HR");
    },
    primary: {
      sheet: CONFIG.SHEETS.HR_EMPLOYEES,
      keys: ["Employee_ID", "EmployeeId", "ID"],
    },
    titleField: "Employee_Name",
    labels: {
      general: "بيانات الموظف",
    },
    sections: [
      {
        id: "attendance",
        label: "الحضور والانصراف",
        sheet: CONFIG.SHEETS.HR_ATTENDANCE,
        keys: ["Employee_ID", "EmployeeId"],
      },
      {
        id: "leaveRequests",
        label: "طلبات الإجازة",
        sheet: CONFIG.SHEETS.HR_LEAVE_REQUESTS,
        keys: ["Employee_ID"],
      },
      {
        id: "advances",
        label: "السلف",
        sheet: CONFIG.SHEETS.HR_ADVANCES,
        keys: ["Employee_ID"],
      },
      {
        id: "deductions",
        label: "الخصومات",
        sheet: CONFIG.SHEETS.HR_DEDUCTIONS,
        keys: ["Employee_ID"],
      },
      {
        id: "payroll",
        label: "الرواتب",
        sheet: CONFIG.SHEETS.HR_PAYROLL,
        keys: ["Employee_ID"],
      },
    ],
    attachments: { entity: "HR" },
  },
];

function getRecordDetail(paneId, recordId, entityKey, clientRecord) {
  const FNAME = "getRecordDetail";
  debugLog(FNAME, "start", { paneId, recordId, entityKey });
  try {
    const normalizedId = recordId == null ? "" : String(recordId).trim();
    const detail = {
      paneId: paneId || "",
      recordId: normalizedId,
      title: "",
      sections: [],
    };

    const configuration = resolveDetailConfig_(paneId, entityKey);
    let primaryRow = null;
    let primaryHeaders = [];

    if (configuration && normalizedId) {
      const lookup = findRowById_(
        configuration.primary.sheet,
        normalizedId,
        configuration.primary.keys
      );
      if (lookup) {
        primaryHeaders = lookup.headers;
        primaryRow = lookup.row;
      }
    }

    let generalFields = [];
    if (primaryRow) {
      generalFields = convertRowToFields_(primaryHeaders, primaryRow);
    } else if (clientRecord && typeof clientRecord === "object") {
      generalFields = convertObjectToFields_(clientRecord);
    }

    if (generalFields.length) {
      const generalLabel = configuration?.labels?.general || "البيانات العامة";
      detail.sections.push({
        id: "general",
        label: generalLabel,
        layout: "fields",
        fields: generalFields,
      });
    }

    detail.title = resolveDetailTitle_(
      configuration,
      primaryHeaders,
      primaryRow,
      clientRecord,
      normalizedId
    );

    if (configuration && normalizedId) {
      configuration.sections.forEach((section) => {
        const dataset = filterRowsByColumn_(
          section.sheet,
          normalizedId,
          section.keys
        );
        const headers = dataset.headers || [];
        const rows = dataset.rows || [];
        detail.sections.push({
          id: section.id,
          label: section.label,
          layout: "table",
          headers,
          rows,
        });
      });
    }

    if (normalizedId) {
      const attachments = getAttachmentsForDetail_(
        normalizedId,
        entityKey,
        configuration?.attachments?.entity
      );
      if (attachments.rows.length) {
        detail.sections.push({
          id: "attachments",
          label: "المرفقات",
          layout: "table",
          headers: attachments.headers,
          rows: attachments.rows,
        });
      }
    }

    if (
      !detail.sections.length &&
      clientRecord &&
      typeof clientRecord === "object"
    ) {
      detail.sections.push({
        id: "general",
        label: "البيانات العامة",
        layout: "fields",
        fields: convertObjectToFields_(clientRecord),
      });
    }

    return sanitizeForClientResponse_(detail);
  } catch (err) {
    debugError(FNAME, err, { paneId, recordId });
    throw err;
  }
}
function resolveDetailConfig_(paneId, entityKey) {
  for (const config of DETAIL_CONFIGS) {
    try {
      if (config.match(paneId, entityKey)) {
        return config;
      }
    } catch (err) {
      debugError("resolveDetailConfig_", err, { paneId, entityKey });
    }
  }
  return null;
}
function findRowById_(sheetName, recordId, keyColumns) {
  const data = loadSheetData_(sheetName);
  const headers = Array.isArray(data?.headers) ? data.headers : [];
  const rows = Array.isArray(data?.rows) ? data.rows : [];
  if (!headers.length || !rows.length) return null;
  const indexes = (keyColumns || [])
    .map((key) => findHeaderIndex_(headers, key))
    .filter((idx) => idx >= 0);
  if (!indexes.length) return null;
  for (let i = 0; i < rows.length; i += 1) {
    const row = rows[i];
    if (indexes.some((idx) => keysEqual_(row[idx], recordId))) {
      return { headers, row };
    }
  }
  return null;
}
function filterRowsByColumn_(sheetName, recordId, keyColumns) {
  const data = loadSheetData_(sheetName);
  const headers = Array.isArray(data?.headers) ? data.headers : [];
  const rows = Array.isArray(data?.rows) ? data.rows : [];
  if (!headers.length || !rows.length) {
    return { headers, rows: [] };
  }
  const indexes = (keyColumns || [])
    .map((key) => findHeaderIndex_(headers, key))
    .filter((idx) => idx >= 0);
  if (!indexes.length) {
    return { headers, rows: [] };
  }
  const filtered = rows.filter((row) =>
    indexes.some((idx) => keysEqual_(row[idx], recordId))
  );
  return { headers, rows: filtered };
}
function convertRowToFields_(headers, row) {
  const fields = [];
  headers.forEach((header, idx) => {
    const label = String(header || "").trim();
    if (!label) return;
    const value = Array.isArray(row) ? row[idx] : row?.[idx];
    if (value == null || value === "") return;
    fields.push({
      label,
      value: normalizeDetailValue_(value),
    });
  });
  return fields;
}
function convertObjectToFields_(record) {
  const fields = [];
  Object.keys(record || {}).forEach((key) => {
    if (key === "__meta") return;
    const value = record[key];
    if (value == null || value === "") return;
    fields.push({
      label: key,
      value: normalizeDetailValue_(value),
    });
  });
  return fields;
}
function normalizeDetailValue_(value) {
  if (value instanceof Date) {
    try {
      return value.toISOString();
    } catch (err) {
      return value.toString();
    }
  }
  if (Array.isArray(value)) {
    return value.map((item) => normalizeDetailValue_(item)).join(", ");
  }
  if (typeof value === "object" && value !== null) {
    return JSON.stringify(value);
  }
  return value;
}
function resolveDetailTitle_(config, headers, row, clientRecord, fallbackId) {
  const fallback = fallbackId || "";
  let candidate = "";
  if (config && row && Array.isArray(headers)) {
    const idx = findHeaderIndex_(headers, config.titleField);
    if (idx >= 0) {
      candidate = row[idx];
    }
  }
  if (!candidate && clientRecord && config?.titleField) {
    candidate = clientRecord[config.titleField];
  }
  if (!candidate && clientRecord) {
    candidate =
      clientRecord.Name ||
      clientRecord.Title ||
      clientRecord.Full_Name ||
      clientRecord.Employee_Name ||
      "";
  }
  if (!candidate) {
    return (
      fallback ||
      (config?.type === "project"
        ? "مشروع"
        : config?.type === "hr"
        ? "موظف"
        : "السجل")
    );
  }
  if (config?.type === "project") {
    return "مشروع: " + candidate;
  }
  if (config?.type === "hr") {
    return "موظف: " + candidate;
  }
  return candidate;
}
function getAttachmentsForDetail_(recordId, entityKey, fallbackEntity) {
  const data = loadSheetData_(CONFIG.SHEETS.DOCUMENTS);
  const headers = Array.isArray(data?.headers) ? data.headers : [];
  const rows = Array.isArray(data?.rows) ? data.rows : [];
  if (!headers.length || !rows.length) {
    return { headers: [], rows: [] };
  }
  const idxEntityId = findHeaderIndex_(
    headers,
    "Entity_ID",
    "EntityId",
    "Record_ID"
  );
  if (idxEntityId < 0) {
    return { headers: [], rows: [] };
  }
  const idxEntity = findHeaderIndex_(headers, "Entity", "Module");
  const desiredEntity = String(entityKey || fallbackEntity || "").toUpperCase();
  const filtered = rows.filter((row) => {
    if (!keysEqual_(row[idxEntityId], recordId)) return false;
    if (!desiredEntity) return true;
    if (idxEntity < 0) return true;
    const value = String(row[idxEntity] || "").toUpperCase();
    return value.includes(desiredEntity);
  });
  if (!filtered.length) {
    return { headers: [], rows: [] };
  }
  const columnMap = [
    { key: "Label", label: "الوصف" },
    { key: "File_Name", label: "اسم الملف" },
    { key: "Drive_URL", label: "الرابط" },
    { key: "Uploaded_By", label: "المستخدم" },
    { key: "Created_At", label: "تاريخ الرفع" },
  ];
  const mappedHeaders = columnMap
    .map((item) => {
      const idx = findHeaderIndex_(headers, item.key);
      return idx >= 0 ? { label: item.label, index: idx } : null;
    })
    .filter(Boolean);
  if (!mappedHeaders.length) {
    return { headers, rows: filtered };
  }
  const mappedRows = filtered.map((row) =>
    mappedHeaders.map((col) => normalizeDetailValue_(row[col.index]))
  );
  return {
    headers: mappedHeaders.map((col) => col.label),
    rows: mappedRows,
  };
}

function getMaterialsCatalog() {
  const FNAME = "getMaterialsCatalog";
  debugLog(FNAME, "start");

  try {
    const { headers = [], rows = [] } = loadSheetData_(
      CONFIG.SHEETS.PRJ_MATERIALS
    );
    if (!headers.length || !rows.length) {
      debugLog(FNAME, "noData", { headers: headers.length, rows: rows.length });
      return sanitizeForClientResponse_([]);
    }

    const idxActive = findHeaderIndex_(
      headers,
      "Active",
      "IsActive",
      "Active?",
      "Is Active",
      "Status",
      "الحالة",
      "نشط",
      "نشط؟"
    );
    const catalog = rows
      .filter((row) =>
        idxActive < 0 ? true : isTruthyFlag_(getValueAt_(row, idxActive))
      )
      .map((row) =>
        headers.reduce((acc, header, index) => {
          acc[header] = row[index];
          if (typeof header === "string") {
            const underscored = header.replace(/\s+/g, "_");
            if (underscored && !(underscored in acc)) {
              acc[underscored] = row[index];
            }
          }
          return acc;
        }, {})
      );

    debugLog(FNAME, "resolved", { count: catalog.length });
    return sanitizeForClientResponse_(catalog);
  } catch (err) {
    debugError(FNAME, err);
    throw err;
  }
}

function getMaterialsViewData() {
  const FNAME = "getMaterialsViewData";
  debugLog(FNAME, "start");

  try {
    const {
      headers = [],
      rows = [],
      sourceName,
    } = loadSheetData_(
      CONFIG.SHEETS.PRJ_MATERIALS_VIEW,
      CONFIG.SHEETS.PRJ_MATERIALS
    );

    const payload = {
      headers: Array.isArray(headers) ? headers : [],
      rows: Array.isArray(rows) ? rows : [],
      source: sourceName || "",
    };

    payload.items = Array.isArray(payload.rows) ? payload.rows : [];

    const sanitized = sanitizeForClientResponse_(payload);
    debugLog(FNAME, "resolved", {
      headers: payload.headers.length,
      rows: payload.rows.length,
      source: payload.source,
    });
    return sanitized;
  } catch (err) {
    debugError(FNAME, err);
    throw err;
  }
}

function getMaterialSheetContext_() {
  const sheet = getSheet_(CONFIG.SHEETS.PRJ_MATERIALS);
  if (!sheet) {
    throw new Error("PRJ_Materials sheet not found");
  }

  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) {
    throw new Error("PRJ_Materials sheet is empty");
  }

  const headers = data[0];
  const rows = data.slice(1);
  const indexes = {
    id: findHeaderIndex_(
      headers,
      "Material_ID",
      "MaterialId",
      "ID",
      "معرف_الخامات",
      "معرف الخامات",
      "معرف المادة"
    ),
    active: findHeaderIndex_(
      headers,
      "Active",
      "IsActive",
      "Enabled",
      "Status",
      "مفعل",
      "الحالة"
    ),
    price: findHeaderIndex_(
      headers,
      "Default_Price",
      "DefaultPrice",
      "Unit_Price",
      "UnitPrice",
      "السعر",
      "سعر_افتراضي"
    ),
    updatedAt: findHeaderIndex_(
      headers,
      "Updated_At",
      "UpdatedAt",
      "Last_Updated"
    ),
    updatedBy: findHeaderIndex_(
      headers,
      "Updated_By",
      "UpdatedBy",
      "Updated_By_User"
    ),
  };

  if (indexes.id < 0) {
    throw new Error("Material identifier column not found");
  }
  if (indexes.active < 0) {
    throw new Error("Material active column not found");
  }

  return { sheet, headers, rows, indexes };
}

function mutateMaterialActiveState_(materialIds, desiredState) {
  const ids = Array.isArray(materialIds)
    ? materialIds
        .map((value) => normalizeKeyValue_(value))
        .filter((value) => value !== "")
    : [];

  if (!ids.length) {
    return { updated: 0, results: [] };
  }

  const { sheet, rows, indexes } = getMaterialSheetContext_();
  const actor = getActorEmail_();
  const results = [];

  ids.forEach((materialId) => {
    const rowIndex = rows.findIndex((row) =>
      keysEqual_(getValueAt_(row, indexes.id), materialId)
    );

    if (rowIndex < 0) {
      results.push({
        materialId,
        updated: false,
        reason: "NOT_FOUND",
      });
      return;
    }

    const rowNumber = rowIndex + 2;
    const currentValue = getValueAt_(rows[rowIndex], indexes.active);
    const currentState = isTruthyFlag_(currentValue);
    const targetState =
      typeof desiredState === "boolean" ? desiredState : !currentState;

    sheet.getRange(rowNumber, indexes.active + 1).setValue(targetState);
    rows[rowIndex][indexes.active] = targetState;

    const timestamp = new Date();
    if (indexes.updatedAt >= 0) {
      sheet.getRange(rowNumber, indexes.updatedAt + 1).setValue(timestamp);
    }
    if (indexes.updatedBy >= 0) {
      sheet.getRange(rowNumber, indexes.updatedBy + 1).setValue(actor);
    }

    results.push({
      materialId,
      updated: true,
      isActive: targetState,
    });
  });

  const updatedCount = results.filter((entry) => entry.updated).length;
  return { updated: updatedCount, results };
}

function toggleMaterialActiveStatus(materialId) {
  const FNAME = "toggleMaterialActiveStatus";
  debugLog(FNAME, "start", { materialId });

  const normalizedId = normalizeKeyValue_(materialId);
  if (!normalizedId) {
    throw new Error("Material identifier is required");
  }

  try {
    const mutation = mutateMaterialActiveState_([normalizedId]);
    const result = mutation.results.find(
      (entry) => entry.materialId === normalizedId
    );
    if (!result || !result.updated) {
      return sanitizeForClientResponse_({
        success: false,
        materialId: normalizedId,
        message: "تعذر تحديث حالة المادة.",
      });
    }

    debugLog(FNAME, "updated", {
      materialId: normalizedId,
      isActive: result.isActive,
    });
    return sanitizeForClientResponse_({
      success: true,
      materialId: normalizedId,
      isActive: result.isActive,
    });
  } catch (err) {
    debugError(FNAME, err, { materialId });
    throw err;
  }
}

function archiveMaterial(materialId) {
  const FNAME = "archiveMaterial";
  debugLog(FNAME, "start", { materialId });

  const normalizedId = normalizeKeyValue_(materialId);
  if (!normalizedId) {
    throw new Error("Material identifier is required");
  }

  try {
    const mutation = mutateMaterialActiveState_([normalizedId], false);
    const result = mutation.results.find(
      (entry) => entry.materialId === normalizedId
    );
    const success = Boolean(result && result.updated);
    debugLog(FNAME, "complete", { materialId: normalizedId, success });
    return sanitizeForClientResponse_({
      success,
      materialId: normalizedId,
      isActive: result ? result.isActive : false,
      updated: mutation.updated,
    });
  } catch (err) {
    debugError(FNAME, err, { materialId });
    throw err;
  }
}

function bulkUpdateMaterialStatus(materialIds = [], status = true) {
  const FNAME = "bulkUpdateMaterialStatus";
  debugLog(FNAME, "start", {
    count: Array.isArray(materialIds) ? materialIds.length : 0,
    status,
  });

  const desiredState = isTruthyFlag_(status);

  try {
    const mutation = mutateMaterialActiveState_(materialIds, desiredState);
    debugLog(FNAME, "complete", {
      updated: mutation.updated,
      desiredState,
    });
    return sanitizeForClientResponse_({
      success: mutation.updated > 0,
      updated: mutation.updated,
      results: mutation.results,
      desiredState,
    });
  } catch (err) {
    debugError(FNAME, err, {
      count: Array.isArray(materialIds) ? materialIds.length : 0,
    });
    throw err;
  }
}

function updateMaterialPrice(materialId, newPrice) {
  const FNAME = "updateMaterialPrice";
  debugLog(FNAME, "start", { materialId, hasPrice: newPrice !== undefined });

  const normalizedId = normalizeKeyValue_(materialId);
  if (!normalizedId) {
    throw new Error("Material identifier is required");
  }

  const numericPrice = Number(newPrice);
  if (!Number.isFinite(numericPrice) || numericPrice < 0) {
    throw new Error("قيمة السعر غير صالحة");
  }

  try {
    const { sheet, rows, indexes } = getMaterialSheetContext_();
    if (indexes.price < 0) {
      throw new Error("لم يتم العثور على عمود السعر في كتالوج المواد");
    }

    const rowIndex = rows.findIndex((row) =>
      keysEqual_(getValueAt_(row, indexes.id), normalizedId)
    );
    if (rowIndex < 0) {
      return sanitizeForClientResponse_({
        success: false,
        materialId: normalizedId,
        message: "المادة غير موجودة.",
      });
    }

    const rowNumber = rowIndex + 2;
    sheet.getRange(rowNumber, indexes.price + 1).setValue(numericPrice);
    rows[rowIndex][indexes.price] = numericPrice;

    const timestamp = new Date();
    if (indexes.updatedAt >= 0) {
      sheet.getRange(rowNumber, indexes.updatedAt + 1).setValue(timestamp);
    }
    if (indexes.updatedBy >= 0) {
      sheet
        .getRange(rowNumber, indexes.updatedBy + 1)
        .setValue(getActorEmail_());
    }

    debugLog(FNAME, "complete", {
      materialId: normalizedId,
      price: numericPrice,
    });
    return sanitizeForClientResponse_({
      success: true,
      materialId: normalizedId,
      price: numericPrice,
    });
  } catch (err) {
    debugError(FNAME, err, { materialId });
    throw err;
  }
}

function saveMaterialCatalogEntry(payload) {
  const FNAME = "saveMaterialCatalogEntry";
  Logger.log("SERVER: saveMaterialCatalogEntry function STARTED.");
  debugLog(FNAME, "start", {
    hasPayload: !!payload,
    keys: payload ? Object.keys(payload) : [],
  });

  try {
    if (!payload || typeof payload !== "object") {
      throw new Error("بيانات المادة غير صالحة.");
    }

    const { sheet, headers, rows, indexes } = getMaterialSheetContext_();
    const actor = getActorEmail_();
    const timestamp = new Date();

    const readValue = (...keys) => {
      for (const key of keys) {
        if (!key) continue;
        if (Object.prototype.hasOwnProperty.call(payload, key)) {
          return payload[key];
        }
      }
      return undefined;
    };

    const toTrimmedString = (value) => {
      if (value === undefined || value === null) return "";
      return String(value).trim();
    };

    const rawId = readValue(
      "materialId",
      "Material_ID",
      "MaterialId",
      "MaterialId",
      "MaterialCode",
      "Material_Code",
      "ID",
      "Id",
      "id",
      "Code",
      "code"
    );
    const normalizedId = normalizeKeyValue_(rawId);
    if (!normalizedId) {
      throw new Error("معرف المادة مطلوب.");
    }

    const existingIndex = rows.findIndex((row) =>
      keysEqual_(getValueAt_(row, indexes.id), normalizedId)
    );
    const targetRow =
      existingIndex >= 0
        ? rows[existingIndex].slice()
        : new Array(headers.length).fill("");

    const nameArRaw = readValue(
      "Name_AR",
      "nameAr",
      "Arabic_Name",
      "Material_Name_AR",
      "materialNameAr",
      "NameAr"
    );
    const nameEnRaw = readValue(
      "Name_EN",
      "nameEn",
      "English_Name",
      "Material_Name_EN",
      "materialNameEn",
      "NameEn"
    );
    const safeNameAr = toTrimmedString(nameArRaw);
    const safeNameEn = toTrimmedString(nameEnRaw);

    if (!safeNameAr && !safeNameEn) {
      throw new Error("يجب إدخال اسم للمادة بالعربية أو الإنجليزية.");
    }

    const category = toTrimmedString(
      readValue(
        "Category",
        "category",
        "Material_Category",
        "categoryName",
        "Category_Name"
      )
    );
    const subcategory = toTrimmedString(
      readValue(
        "Subcategory",
        "subcategory",
        "Sub_Category",
        "Material_Subcategory",
        "SubCategory"
      )
    );
    const subcategory2 = toTrimmedString(
      readValue("Sub2", "Subcategory2", "Sub_Category_2", "subcategory2")
    );
    const unit = toTrimmedString(
      readValue("Default_Unit", "defaultUnit", "Unit", "unit", "Unit_Name")
    );

    const priceRaw = readValue(
      "Default_Price",
      "defaultPrice",
      "Unit_Price",
      "unitPrice",
      "Price"
    );
    const priceNumber = Number(priceRaw);
    const priceValue = Number.isFinite(priceNumber) ? priceNumber : null;

    const vatRaw = readValue(
      "VAT_Rate",
      "Vat_Rate",
      "vatRate",
      "vat",
      "vatRatePercent",
      "VAT"
    );
    let vatValue = null;
    if (vatRaw !== undefined && vatRaw !== null && vatRaw !== "") {
      const vatNumber = Number(vatRaw);
      if (Number.isFinite(vatNumber)) {
        if (vatNumber > 1.5) {
          vatValue = vatNumber / 100;
        } else if (vatNumber < 0) {
          vatValue = 0;
        } else {
          vatValue = vatNumber;
        }
      }
    }

    const activeRaw = (() => {
      if (Object.prototype.hasOwnProperty.call(payload, "isActive")) {
        return payload.isActive;
      }
      if (Object.prototype.hasOwnProperty.call(payload, "Active")) {
        return payload.Active;
      }
      if (Object.prototype.hasOwnProperty.call(payload, "active")) {
        return payload.active;
      }
      if (Object.prototype.hasOwnProperty.call(payload, "IsActive")) {
        return payload.IsActive;
      }
      return undefined;
    })();

    const activeValue =
      activeRaw === undefined
        ? existingIndex >= 0
          ? isTruthyFlag_(getValueAt_(rows[existingIndex], indexes.active))
          : true
        : isTruthyFlag_(activeRaw);

    setRowValue_(
      headers,
      targetRow,
      normalizedId,
      "Material_ID",
      "MaterialId",
      "ID",
      "Code"
    );
    setRowValue_(
      headers,
      targetRow,
      safeNameAr || safeNameEn || normalizedId,
      "Name_AR",
      "Arabic_Name",
      "Material_Name_AR"
    );
    setRowValue_(
      headers,
      targetRow,
      safeNameEn || safeNameAr || normalizedId,
      "Name_EN",
      "English_Name",
      "Material_Name_EN"
    );
    setRowValue_(
      headers,
      targetRow,
      category,
      "Category",
      "Material_Category",
      "Category_Name"
    );
    setRowValue_(
      headers,
      targetRow,
      subcategory,
      "Subcategory",
      "Sub_Category",
      "Material_Subcategory"
    );
    setRowValue_(
      headers,
      targetRow,
      subcategory2,
      "Sub2",
      "Subcategory2",
      "Sub_Category_2"
    );
    setRowValue_(headers, targetRow, unit, "Default_Unit", "Unit", "Unit_Name");
    if (priceValue !== null) {
      setRowValue_(
        headers,
        targetRow,
        priceValue,
        "Default_Price",
        "Unit_Price",
        "Price"
      );
    }
    if (vatValue !== null) {
      setRowValue_(headers, targetRow, vatValue, "VAT_Rate", "Vat_Rate", "VAT");
    }
    setRowValue_(
      headers,
      targetRow,
      activeValue,
      "Active",
      "IsActive",
      "Enabled",
      "Status",
      "الحالة"
    );

    if (indexes.updatedAt >= 0) {
      targetRow[indexes.updatedAt] = timestamp;
    }
    if (indexes.updatedBy >= 0) {
      targetRow[indexes.updatedBy] = actor;
    }

    const targetRowNumber =
      existingIndex >= 0 ? existingIndex + 2 : sheet.getLastRow() + 1;
    sheet
      .getRange(targetRowNumber, 1, 1, headers.length)
      .setValues([targetRow]);
    if (existingIndex >= 0) {
      rows[existingIndex] = targetRow;
    } else {
      rows.push(targetRow);
    }

    const materialObject = headers.reduce((acc, header, index) => {
      acc[header] = targetRow[index];
      if (typeof header === "string") {
        const underscored = header.replace(/\s+/g, "_");
        if (underscored && !(underscored in acc)) {
          acc[underscored] = targetRow[index];
        }
      }
      return acc;
    }, {});

    const message =
      existingIndex >= 0
        ? "تم تحديث بيانات المادة بنجاح."
        : "تمت إضافة المادة بنجاح.";

    debugLog(FNAME, "complete", {
      materialId: normalizedId,
      rowNumber: targetRowNumber,
      isUpdate: existingIndex >= 0,
    });

    return sanitizeForClientResponse_({
      success: true,
      materialId: normalizedId,
      rowNumber: targetRowNumber,
      isUpdate: existingIndex >= 0,
      material: materialObject,
      message,
    });
  } catch (err) {
    Logger.log("SERVER ERROR: " + err.message);
    Logger.log("SERVER STACK: " + err.stack);
    debugError(FNAME, err, {
      keys: payload ? Object.keys(payload) : [],
    });
    throw new Error("Server-side operation failed: " + err.message);
  }
}

function getProjectsForDropdown() {
  const FNAME = "getProjectsForDropdown";
  debugLog(FNAME, "start");

  try {
    const { headers = [], rows = [] } = loadSheetData_(CONFIG.SHEETS.PRJ_MAIN);
    if (!headers.length || !rows.length) {
      debugLog(FNAME, "noData", { headers: headers.length, rows: rows.length });
      return sanitizeForClientResponse_([]);
    }

    const idxId = findHeaderIndex_(
      headers,
      "Project_ID",
      "ProjectId",
      "ProjectID",
      "ID"
    );
    const idxName = findHeaderIndex_(
      headers,
      "Project_Name",
      "ProjectName",
      "Name",
      "Title"
    );

    const projects = rows
      .map((row) => ({
        Project_ID: idxId >= 0 ? getValueAt_(row, idxId) || "" : "",
        Project_Name: idxName >= 0 ? getValueAt_(row, idxName) || "" : "",
      }))
      .filter((record) => record.Project_ID || record.Project_Name);

    debugLog(FNAME, "resolved", { count: projects.length });
    return sanitizeForClientResponse_(projects);
  } catch (err) {
    debugError(FNAME, err);
    throw err;
  }
}

function getDirectExpenseViewData() {
  const FNAME = "getDirectExpenseViewData";
  debugLog(FNAME, "start");

  try {
    const { headers = [], rows = [] } = loadSheetData_(
      CONFIG.SHEETS.FIN_DIRECT_EXP_VIEW,
      CONFIG.SHEETS.FIN_DIRECT_EXP
    );
    const projectSource = loadSheetData_(CONFIG.SHEETS.PRJ_MAIN);
    const projectHeaders = Array.isArray(projectSource.headers)
      ? projectSource.headers
      : [];
    const projectRows = Array.isArray(projectSource.rows)
      ? projectSource.rows
      : [];
    const projectIdIndex = findHeaderIndex_(
      projectHeaders,
      "Project_ID",
      "ProjectId",
      "ID",
      "Code"
    );
    const projectNameIndex = findHeaderIndex_(
      projectHeaders,
      "Project_Name",
      "ProjectName",
      "Name",
      "Title",
      "Project"
    );

    const projectLookup = new Map();
    if (projectIdIndex >= 0 && projectNameIndex >= 0) {
      projectRows.forEach((row) => {
        const id = normalizeKeyValue_(getValueAt_(row, projectIdIndex));
        if (!id) return;
        const name = getValueAt_(row, projectNameIndex);
        projectLookup.set(id, name || id);
      });
    }

    const projectColumnIndex = findHeaderIndex_(
      headers,
      "Project_ID",
      "ProjectId",
      "Project",
      "Project Code",
      "كود_المشروع",
      "معرف_المشروع"
    );

    const processedRows = Array.isArray(rows)
      ? rows.map((row) => {
          if (!Array.isArray(row)) return row;
          if (projectColumnIndex >= 0 && projectLookup.size) {
            const projectValue = normalizeKeyValue_(
              getValueAt_(row, projectColumnIndex)
            );
            if (projectValue) {
              const name = projectLookup.get(projectValue);
              if (name) {
                const cloned = row.slice();
                cloned[projectColumnIndex] = name;
                return cloned;
              }
            }
          }
          return row.slice();
        })
      : [];

    const payload = {
      headers: Array.isArray(headers) ? headers : [],
      rows: processedRows,
    };
    payload.items = Array.isArray(payload.rows) ? payload.rows : [];

    const sanitized = sanitizeForClientResponse_(payload);
    debugLog(FNAME, "resolved", {
      headers: payload.headers.length,
      rows: payload.rows.length,
    });
    return sanitized;
  } catch (err) {
    debugError(FNAME, err);
    throw err;
  }
}

function getDirectExpenseDetailsById(expenseId) {
  const FNAME = "getDirectExpenseDetailsById";
  debugLog(FNAME, "start", { expenseId });

  if (expenseId === undefined || expenseId === null || expenseId === "") {
    return sanitizeForClientResponse_({
      found: false,
      expenseId: expenseId ?? "",
      headers: [],
      details: [],
    });
  }

  try {
    const { headers = [], rows = [] } = loadSheetData_(
      CONFIG.SHEETS.FIN_DIRECT_EXP
    );
    if (!headers.length || !rows.length) {
      return sanitizeForClientResponse_({
        found: false,
        expenseId,
        headers,
        details: [],
      });
    }

    const candidateIndexes = [
      findHeaderIndex_(
        headers,
        "Expense_ID",
        "ExpenseId",
        "Expense ID",
        "DirectExpense_ID",
        "Direct_Expense_ID"
      ),
      findHeaderIndex_(headers, "ID"),
      findHeaderIndex_(headers, "Record_ID", "RecordId"),
    ].filter((idx) => idx >= 0);

    let identifierIndex = candidateIndexes.length ? candidateIndexes[0] : -1;
    if (identifierIndex < 0) {
      identifierIndex = headers.findIndex((header) => {
        const normalized = String(header || "")
          .trim()
          .toLowerCase();
        return normalized.includes("expense") && normalized.includes("id");
      });
    }

    const normalizedTarget = normalizeKeyValue_(expenseId);
    const matches = rows
      .map((row, rowIndex) => ({ row, rowIndex }))
      .filter(({ row, rowIndex }) => {
        if (normalizedTarget === "") return false;
        if (identifierIndex >= 0) {
          const candidate = normalizeKeyValue_(
            getValueAt_(row, identifierIndex)
          );
          if (candidate && candidate === normalizedTarget) {
            return true;
          }
        }
        return normalizeKeyValue_(rowIndex) === normalizedTarget;
      });

    const details = matches.map(({ row }) => {
      const record = {};
      headers.forEach((header, index) => {
        record[header] = row[index];
      });
      return record;
    });

    return sanitizeForClientResponse_({
      found: details.length > 0,
      expenseId,
      headers,
      details,
    });
  } catch (err) {
    debugError(FNAME, err, { expenseId });
    throw err;
  }
}

function getAttachmentsForEntity(entityId, entityKey) {
  const FNAME = "getAttachmentsForEntity";
  const normalizedEntity = normalizeKeyValue_(entityKey || "");
  const normalizedId = normalizeKeyValue_(entityId);
  debugLog(FNAME, "start", { entityId, entityKey });

  try {
    const { headers = [], rows = [] } = loadSheetData_(CONFIG.SHEETS.DOCUMENTS);
    if (!headers.length || !rows.length) {
      return sanitizeForClientResponse_([]);
    }

    const idxDocId = findHeaderIndex_(headers, "Doc_ID", "DocId", "ID");
    const idxEntity = findHeaderIndex_(headers, "Entity");
    const idxEntityId = findHeaderIndex_(
      headers,
      "Entity_ID",
      "EntityId",
      "Entity ID"
    );
    const idxLabel = findHeaderIndex_(headers, "Label", "Document_Label");
    const idxFileName = findHeaderIndex_(
      headers,
      "File_Name",
      "Filename",
      "FileName"
    );
    const idxUrl = findHeaderIndex_(headers, "Drive_URL", "File_URL", "URL");
    const idxDriveId = findHeaderIndex_(
      headers,
      "Drive_File_ID",
      "File_ID",
      "DriveId"
    );
    const idxUploadedBy = findHeaderIndex_(
      headers,
      "Uploaded_By",
      "Created_By",
      "Uploader"
    );
    const idxUploadedAt = findHeaderIndex_(
      headers,
      "Created_At",
      "Uploaded_At",
      "Timestamp"
    );

    const attachments = rows
      .map((row) => {
        const rowEntity = idxEntity >= 0 ? getValueAt_(row, idxEntity) : "";
        const rowEntityId =
          idxEntityId >= 0 ? getValueAt_(row, idxEntityId) : "";
        if (
          normalizedEntity &&
          normalizeKeyValue_(rowEntity) !== normalizedEntity
        ) {
          return null;
        }
        if (normalizedId && normalizeKeyValue_(rowEntityId) !== normalizedId) {
          return null;
        }
        if (!normalizedEntity && !normalizedId) {
          return null;
        }
        const docId = idxDocId >= 0 ? getValueAt_(row, idxDocId) : "";
        return {
          Doc_ID: docId,
          Entity: rowEntity,
          Entity_ID: rowEntityId,
          Label: idxLabel >= 0 ? getValueAt_(row, idxLabel) : "",
          File_Name: idxFileName >= 0 ? getValueAt_(row, idxFileName) : "",
          Drive_URL: idxUrl >= 0 ? getValueAt_(row, idxUrl) : "",
          Drive_File_ID: idxDriveId >= 0 ? getValueAt_(row, idxDriveId) : "",
          Uploaded_By:
            idxUploadedBy >= 0 ? getValueAt_(row, idxUploadedBy) : "",
          Created_At: idxUploadedAt >= 0 ? getValueAt_(row, idxUploadedAt) : "",
        };
      })
      .filter(Boolean);

    debugLog(FNAME, "resolved", { count: attachments.length });
    return sanitizeForClientResponse_(attachments);
  } catch (err) {
    debugError(FNAME, err, { entityId, entityKey });
    throw err;
  }
}

function saveAttachmentRecord(payload) {
  const FNAME = "saveAttachmentRecord";
  debugLog(FNAME, "start", {
    hasPayload: !!payload,
    keys: payload ? Object.keys(payload) : [],
  });

  try {
    if (!payload || typeof payload !== "object") {
      throw new Error("بيانات المرفق غير صالحة.");
    }

    const entityRaw =
      payload.entity ||
      payload.Entity ||
      payload.entityKey ||
      payload.Entity_Key;
    const entityIdRaw =
      payload.entityId ||
      payload.Entity_ID ||
      payload.recordId ||
      payload.Record_ID;
    const labelRaw = payload.label || payload.Label || "";
    const fileNameRaw = payload.fileName || payload.File_Name || labelRaw;
    const driveIdRaw =
      payload.driveId || payload.Drive_File_ID || payload.File_Id;
    const urlRaw = payload.url || payload.Drive_URL || payload.File_URL;

    const entity = String(entityRaw || "").trim();
    const entityId = String(entityIdRaw || "").trim();
    if (!entity) throw new Error("نوع الكيان مطلوب للمرفقات.");
    if (!entityId) throw new Error("معرّف السجل مطلوب للمرفقات.");

    const sheet = getSheet_(CONFIG.SHEETS.DOCUMENTS);
    if (!sheet) throw new Error("لم يتم العثور على ورقة المرفقات.");

    const lastCol = sheet.getLastColumn();
    if (!lastCol) throw new Error("ورقة المرفقات لا تحتوي على رؤوس أعمدة.");
    const headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0] || [];
    if (!headers.length) throw new Error("تعذر تحميل رؤوس ورقة المرفقات.");

    const now = new Date();
    const actor = getActorEmail_();
    const docId =
      payload.docId ||
      payload.Doc_ID ||
      Utilities.getUuid() ||
      `${entity}-${entityId}-${now.getTime()}`;

    const safeLabel = String(labelRaw || "").trim();
    const safeFileName = String(fileNameRaw || safeLabel || "").trim();
    const safeDriveId = String(driveIdRaw || "").trim();
    const safeUrl = String(urlRaw || "").trim();

    const row = new Array(headers.length).fill("");
    const set = (name, value) => {
      const idx = headers.indexOf(name);
      if (idx >= 0) row[idx] = value;
    };

    set("Doc_ID", docId);
    set("Entity", entity);
    set("Entity_ID", entityId);
    set("Label", safeLabel);
    set("File_Name", safeFileName || safeLabel);
    set("Drive_File_ID", safeDriveId);
    set("Drive_URL", safeUrl);
    set("Uploaded_By", actor);
    set("Created_At", now);

    sheet.appendRow(row);

    debugLog(FNAME, "complete", { entity, entityId, docId });
    return sanitizeForClientResponse_({
      success: true,
      docId,
      entity,
      entityId,
    });
  } catch (err) {
    debugError(FNAME, err, {
      hasPayload: !!payload,
      entity: payload?.entity || payload?.Entity,
      entityId: payload?.entityId || payload?.Entity_ID,
    });
    throw err;
  }
}

function deleteAttachmentRecord(docId) {
  const FNAME = "deleteAttachmentRecord";
  debugLog(FNAME, "start", { docId });

  try {
    const normalizedId = String(docId || "").trim();
    if (!normalizedId) throw new Error("معرّف المرفق مطلوب للحذف.");

    const sheet = getSheet_(CONFIG.SHEETS.DOCUMENTS);
    if (!sheet) throw new Error("لم يتم العثور على ورقة المرفقات.");

    const data = sheet.getDataRange().getValues();
    if (!data || data.length <= 1) {
      return sanitizeForClientResponse_({
        success: false,
        message: "لا توجد بيانات",
      });
    }

    const headers = data[0] || [];
    const idxDoc = headers.indexOf("Doc_ID");
    if (idxDoc < 0) throw new Error("عمود Doc_ID غير موجود.");

    const rowIndex = data
      .slice(1)
      .findIndex(
        (row) =>
          normalizeKeyValue_(row[idxDoc]) === normalizeKeyValue_(normalizedId)
      );

    if (rowIndex < 0) {
      return sanitizeForClientResponse_({
        success: false,
        message: "لم يتم العثور على المرفق المحدد.",
      });
    }

    const deleteRowNumber = rowIndex + 2; // +1 header, +1 zero index
    sheet.deleteRow(deleteRowNumber);

    debugLog(FNAME, "deleted", { docId: normalizedId });
    return sanitizeForClientResponse_({
      success: true,
      docId: normalizedId,
    });
  } catch (err) {
    debugError(FNAME, err, { docId });
    throw err;
  }
}

function submitDynamicForm(formId, formData, options = {}) {
  const FNAME = "submitDynamicForm";
  debugLog(FNAME, "start", {
    formId,
    hasData: !!formData,
    optionKeys: Object.keys(options || {}),
  });

  try {
    const safeFormId = String(formId || "").trim();
    if (!safeFormId) throw new Error("معرّف النموذج غير محدد.");

    const structure = getDynamicFormStructure(safeFormId);
    if (!Array.isArray(structure) || !structure.length) {
      throw new Error("تعذر تحميل تعريف النموذج الديناميكي.");
    }

    const payload = formData && typeof formData === "object" ? formData : {};
    const actor = getActorEmail_();
    const now = new Date();

    const grouped = new Map();
    structure.forEach((field) => {
      const targetSheet =
        options.targetSheet || field.targetSheet || field.Target_Sheet || "";
      const targetColumn = field.targetColumn || field.Target_Column || "";
      if (!targetSheet || !targetColumn) return;
      if (!grouped.has(targetSheet)) grouped.set(targetSheet, []);
      grouped.get(targetSheet).push({
        fieldId: field.fieldId || field.Field_ID || targetColumn,
        type: (field.type || field.Field_Type || "text")
          .toString()
          .toLowerCase(),
        targetColumn,
        required: !!field.required,
        defaultValue: field.defaultValue,
        dropdownKey: field.sourceKey || field.Dropdown_Key || "",
      });
    });

    if (!grouped.size) {
      throw new Error("النموذج لا يحتوي على حقول قابلة للحفظ.");
    }

    grouped.forEach((fields, sheetName) => {
      const sheet = getSheet_(sheetName);
      if (!sheet) throw new Error(`لم يتم العثور على ورقة ${sheetName}.`);

      const lastCol = sheet.getLastColumn();
      if (!lastCol)
        throw new Error(`ورقة ${sheetName} تفتقر إلى رؤوس الأعمدة.`);
      const headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0] || [];
      if (!headers.length)
        throw new Error(`تعذر قراءة رؤوس الأعمدة للورقة ${sheetName}.`);

      const row = new Array(headers.length).fill("");
      const set = (name, value) => {
        const idx = headers.indexOf(name);
        if (idx >= 0) row[idx] = value;
      };

      const normalizeKey = (key) =>
        String(key || "")
          .replace(/\s+/g, "_")
          .toLowerCase();

      const rawDataMap = new Map();
      Object.keys(payload).forEach((key) => {
        rawDataMap.set(key, payload[key]);
        rawDataMap.set(normalizeKey(key), payload[key]);
      });

      const coerceValue = (field, value) => {
        if (value === undefined || value === null || value === "") {
          if (field.defaultValue !== undefined && field.defaultValue !== null) {
            return field.defaultValue;
          }
          return "";
        }
        switch (field.type) {
          case "number":
            if (value === "") return "";
            const num = Number(value);
            return Number.isFinite(num) ? num : value;
          case "date":
            if (value instanceof Date) return value;
            const parsed = new Date(value);
            return Number.isNaN(parsed.getTime()) ? value : parsed;
          case "checkbox":
          case "boolean":
            if (typeof value === "boolean") return value;
            return ["true", "yes", "1", "y", "نعم", "نشط"].includes(
              String(value).toLowerCase()
            );
          default:
            return value;
        }
      };

      fields.forEach((field) => {
        const candidates = [
          field.targetColumn,
          field.fieldId,
          normalizeKey(field.targetColumn),
          normalizeKey(field.fieldId),
        ].filter(Boolean);
        let value;
        for (const key of candidates) {
          if (rawDataMap.has(key)) {
            value = rawDataMap.get(key);
            break;
          }
        }
        const coerced = coerceValue(field, value);
        set(field.targetColumn, coerced);
      });

      if (headers.includes("Created_At")) set("Created_At", now);
      if (headers.includes("Created_By")) set("Created_By", actor);
      if (headers.includes("Updated_At")) set("Updated_At", now);
      if (headers.includes("Updated_By")) set("Updated_By", actor);

      sheet.appendRow(row);
      debugLog(FNAME, "rowAppended", {
        sheet: sheetName,
        columns: fields.length,
      });
    });

    return sanitizeForClientResponse_({
      success: true,
      formId: safeFormId,
      message: "تم حفظ البيانات بنجاح.",
    });
  } catch (err) {
    debugError(FNAME, err, { formId });
    throw err;
  }
}

function saveDirectExpenses(payload) {
  const FNAME = "saveDirectExpenses";
  debugLog(FNAME, "start", {
    hasPayload: !!payload,
    items: Array.isArray(payload?.items) ? payload.items.length : 0,
  });

  if (!payload || !Array.isArray(payload.items) || !payload.items.length) {
    return { success: false, message: "لا توجد عناصر لحفظها." };
  }

  const sheet = getSheetByName_(CONFIG.SHEETS.FIN_DIRECT_EXP);
  if (!sheet) {
    throw new Error("FIN_DirectExpenses sheet not found");
  }

  const lastCol = sheet.getLastColumn();
  const headers =
    lastCol > 0 ? sheet.getRange(1, 1, 1, lastCol).getValues().flat() : [];
  if (!headers.length) {
    throw new Error("FIN_DirectExpenses sheet is missing headers");
  }

  const headerData = payload.header || {};
  const projectId =
    headerData.project ||
    headerData.Project_ID ||
    headerData.projectId ||
    headerData.projectCode ||
    "";
  const rawDate = headerData.date || headerData.Date || "";
  const headerNotes =
    headerData.notes || headerData.Notes || headerData.note || "";
  const headerPaymentMethod =
    headerData.paymentMethod ||
    headerData.Payment_Method ||
    headerData.payMethod ||
    headerData.method ||
    "";
  const headerPayStatus =
    headerData.payStatus ||
    headerData.paymentStatus ||
    headerData.Pay_Status ||
    headerData.Payment_Status ||
    "";

  const assignToHeader = (rowObject, value, ...candidates) => {
    if (!rowObject || !Array.isArray(headers) || !candidates.length) {
      return;
    }
    const index = findHeaderIndex_(headers, ...candidates);
    if (index >= 0) {
      const headerName = headers[index];
      rowObject[headerName] = value ?? "";
    }
  };

  let normalizedDate = null;
  if (rawDate) {
    const parsed = coerceDate_(rawDate) || new Date(rawDate);
    normalizedDate =
      parsed instanceof Date && !Number.isNaN(parsed.getTime())
        ? parsed
        : rawDate;
  } else {
    normalizedDate = new Date();
  }

  let insertedCount = 0;

  payload.items.forEach((item) => {
    if (!item) return;

    const materialId =
      item.materialId || item.Material_ID || item.MaterialId || "";
    const materialName =
      item.materialName || item.Material_Name || item.MaterialName || "";
    const category = item.category || item.Category || "";
    const unit = item.unit || item.Unit || "";
    const quantityRaw =
      item.quantity ?? item.Qty ?? item.qty ?? item.Quantity ?? 0;
    const quantity = Number(quantityRaw);
    if (!quantity || Number.isNaN(quantity) || quantity <= 0) {
      debugLog(FNAME, "skipItem", { reason: "invalidQuantity", materialId });
      return;
    }

    const unitPriceRaw =
      item.unitPrice ?? item.Unit_Price ?? item.price ?? item.Price ?? 0;
    const unitPrice = Number(unitPriceRaw) || 0;
    const amount =
      item.amount != null && item.amount !== ""
        ? Number(item.amount)
        : quantity * unitPrice;
    const vatRateRaw =
      item.vatRate ?? item.VAT_Rate ?? item.vat ?? item.taxRate ?? 0;
    const vatRateNum =
      vatRateRaw === "" || vatRateRaw === null ? 0 : Number(vatRateRaw) || 0;
    const vatFactor = vatRateNum > 1 ? vatRateNum / 100 : vatRateNum;
    const vatAmount =
      item.vatAmount != null && item.vatAmount !== ""
        ? Number(item.vatAmount)
        : amount * (Number.isFinite(vatFactor) ? vatFactor : 0);
    const totalWithVat =
      item.totalWithVat != null && item.totalWithVat !== ""
        ? Number(item.totalWithVat)
        : amount + vatAmount;
    const paymentMethod =
      item.paymentMethod ||
      item.Payment_Method ||
      item.payMethod ||
      headerPaymentMethod ||
      "";
    const payStatus =
      item.payStatus ||
      item.paymentStatus ||
      item.Pay_Status ||
      item.Payment_Status ||
      headerPayStatus ||
      "";
    const notes = item.notes || item.Notes || item.note || headerNotes || "";

    const newRow = {
      Project_ID: projectId,
      Date: normalizedDate,
      Material_ID: materialId,
      Material_Name: materialName,
      Category: category,
      Unit: unit,
      Qty: quantity,
      Unit_Price: unitPrice,
      Amount: amount,
      VAT_Rate: vatRateNum,
      VAT_Amount: vatAmount,
      Total_With_VAT: totalWithVat,
      Payment_Method: paymentMethod,
      Pay_Status: payStatus,
      Notes: notes,
    };

    assignToHeader(
      newRow,
      paymentMethod,
      "Payment_Method",
      "Pay_Method",
      "PaymentMethod",
      "Payment Method"
    );
    assignToHeader(
      newRow,
      payStatus,
      "Payment_Status",
      "Pay_Status",
      "PaymentStatus",
      "Status"
    );
    assignToHeader(newRow, notes, "Notes", "Note", "Remarks");

    appendRow_(sheet, newRow, headers);
    insertedCount += 1;
  });

  if (!insertedCount) {
    return { success: false, message: "لم يتم العثور على عناصر صالحة للحفظ." };
  }

  debugLog(FNAME, "complete", { inserted: insertedCount });
  return {
    success: true,
    message: "تم حفظ المصروفات المباشرة بنجاح.",
    inserted: insertedCount,
  };
}

function sanitizeUserForClient_(user) {
  if (!user) return null;
  if (Array.isArray(user)) return null;
  const sanitized = {};
  Object.keys(user).forEach((key) => {
    if (/password/i.test(key)) return;
    sanitized[key] = user[key];
  });
  return sanitized;
}

function sanitizeForClientResponse_(value, depth = 0) {
  if (depth > 10) {
    return null;
  }
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  if (value instanceof Date) {
    return value.toISOString();
  }
  const valueType = typeof value;
  if (valueType === "string" || valueType === "boolean") {
    return value;
  }
  if (valueType === "number") {
    if (!Number.isFinite(value)) return null;
    return value;
  }
  if (Array.isArray(value)) {
    return value
      .map((item) => sanitizeForClientResponse_(item, depth + 1))
      .filter((item) => item !== undefined);
  }
  if (valueType === "object") {
    const result = {};
    Object.keys(value).forEach((key) => {
      const item = value[key];
      if (typeof item === "function") return;
      const sanitized = sanitizeForClientResponse_(item, depth + 1);
      if (sanitized !== undefined) {
        result[key] = sanitized;
      }
    });
    return result;
  }
  try {
    return JSON.parse(JSON.stringify(value));
  } catch (err) {
    return String(value);
  }
}

function getSystemKPIs() {
  debugLog("getSystemKPIs", "start");
  const defaults = {
    totalUsers: 0,
    activeUsers: 0,
    inactiveUsers: 0,
    roleCount: 0,
    permissionCount: 0,
    pendingPasswordResets: 0,
  };

  const sheet = getSheet_(CONFIG.SHEETS.PROFILE_VIEW);

  if (sheet) {
    try {
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
          debugLog("getSystemKPIs", "fromProfileView", candidate);
          return Object.assign({}, defaults, candidate);
        }
      }
    } catch (err) {
      debugError("getSystemKPIs", err, { stage: "profile_view" });
    }
  }

  // Fallback to direct sheet computations
  const usersSheet = getSheet_(CONFIG.SHEETS.USERS);
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
          const boolVal =
            value === true || String(value).toLowerCase() === "true";
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

  const rolesSheet = getSheet_(CONFIG.SHEETS.ROLES);
  if (rolesSheet) {
    const roleData = rolesSheet.getDataRange().getValues();
    if (roleData && roleData.length > 1) {
      defaults.roleCount = roleData.length - 1;
    }
  }

  const permsSheet = getSheet_(CONFIG.SHEETS.PERMS);
  if (permsSheet) {
    const permData = permsSheet.getDataRange().getValues();
    if (permData && permData.length > 1) {
      defaults.permissionCount = permData.length - 1;
    }
  }

  const propsSheet = getSheet_(CONFIG.SHEETS.USER_PROPERTIES);
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
          if (key !== "must_change" && key !== "must_change_password")
            return false;
          const val = row[valIdx];
          const boolVal =
            val === true ||
            String(val).toLowerCase() === "true" ||
            String(val).toLowerCase() === "yes" ||
            String(val).toLowerCase() === "1";
          if (!boolVal) return false;
          return userIdx >= 0
            ? row[userIdx] != null && row[userIdx] !== ""
            : true;
        });
        defaults.pendingPasswordResets = pending.length;
      }
    }
  }

  debugLog("getSystemKPIs", "fallback", defaults);
  return defaults;
}

function loginUser(username, password) {
  const FNAME = "loginUser";
  try {
    debugLog(FNAME, "start", {
      hasUsername: !!username,
      hasPassword: !!password,
    });
    return authenticateUser({ username, password });
  } catch (error) {
    console.error(
      `${FNAME} EXCEPTION: ${error.message} \nStack: ${error.stack}`
    );
    debugError(FNAME, error, { stage: "loginUser" });
    return {
      success: false,
      message: `Backend exception during login: ${error.message}`,
      meta: { reason: "EXCEPTION", errorDetails: error.toString() },
    };
  }
}

function authenticateUser(credentials) {
  const FNAME = "authenticateUser";
  const fail = (message, meta) => {
    const base = {
      success: false,
      message: message || "بيانات الدخول غير صحيحة.",
    };
    if (meta && typeof meta === "object") {
      base.meta = Object.assign({}, meta);
    }
    return base;
  };

  try {
    const username = String(credentials?.username || "")
      .trim()
      .toLowerCase();
    const password = credentials?.password || "";
    debugLog(FNAME, "start", {
      hasUsername: !!username,
      providedPassword: password ? "<hidden>" : "",
    });

    if (!username || !password) {
      debugLog(FNAME, "missingCredentials");
      return fail("يرجى إدخال اسم المستخدم وكلمة المرور.", {
        reason: "MISSING_CREDENTIALS",
      });
    }

    const sh = getSheet_(CONFIG.SHEETS.USERS);
    if (!sh) {
      debugLog(FNAME, "usersSheetMissing");
      return fail("تعذر الوصول إلى بيانات المستخدمين.", {
        reason: "NO_USERS_SHEET",
      });
    }

    const data = sh.getDataRange().getValues();
    if (!data || data.length < 2) {
      debugLog(FNAME, "usersEmpty");
      return fail("لا يوجد مستخدمون مسجلون.", { reason: "NO_USERS" });
    }

    const headers = data[0];
    const idx = {
      username: findHeaderIndex_(headers, "Username", "User", "Login"),
      email: findHeaderIndex_(headers, "Email", "Email_Address"),
      hash: findHeaderIndex_(headers, "Password_Hash", "Password"),
      isActive: findHeaderIndex_(headers, "IsActive", "Active", "Status"),
      userId: findHeaderIndex_(headers, "User_Id", "Id", "ID"),
      role: findHeaderIndex_(headers, "Role_Id", "Role", "RoleID"),
      fullName: findHeaderIndex_(headers, "Full_Name", "Name"),
      lastLogin: findHeaderIndex_(headers, "Last_Login", "LastLogin"),
    };

    const rows = data.slice(1);
    const matchEntry = rows.find((row) => {
      const rowUsername = idx.username >= 0 ? row[idx.username] : "";
      const rowEmail = idx.email >= 0 ? row[idx.email] : "";
      const normalizedUsername = String(rowUsername || "")
        .trim()
        .toLowerCase();
      const normalizedEmail = String(rowEmail || "")
        .trim()
        .toLowerCase();
      return username === normalizedUsername || username === normalizedEmail;
    });

    if (!matchEntry) {
      logAuditEvent("LOGIN_FAILURE", { username, reason: "NOT_FOUND" });
      debugLog(FNAME, "userNotFound", { username });
      return fail("بيانات الدخول غير صحيحة.", { reason: "NOT_FOUND" });
    }

    const entryIndex = rows.indexOf(matchEntry);
    const storedHash = idx.hash >= 0 ? matchEntry[idx.hash] : "";
    const activeFlag = idx.isActive >= 0 ? matchEntry[idx.isActive] : true;

    if (!isTruthyFlag_(activeFlag)) {
      logAuditEvent("LOGIN_FAILURE", { username, reason: "INACTIVE" });
      debugLog(FNAME, "userInactive", { username });
      return fail("تم تعطيل هذا الحساب. يرجى التواصل مع المسؤول.", {
        reason: "INACTIVE",
      });
    }

    if (!verifyPassword_(storedHash, password)) {
      logAuditEvent("LOGIN_FAILURE", { username, reason: "BAD_PASSWORD" });
      debugLog(FNAME, "passwordMismatch", { username });
      return fail("بيانات الدخول غير صحيحة.", { reason: "BAD_PASSWORD" });
    }

    const userObject = headers.reduce((obj, header, index) => {
      obj[header] = matchEntry[index];
      return obj;
    }, {});
    const userRowIndex = entryIndex + 2;

    console.log(
      `[${FNAME}] Password verified. Attempting to update last login...`
    );
    updateLastLogin_(userObject?.User_Id, userRowIndex, {
      sheet: sh,
      columnIndex: idx.lastLogin,
      username,
    });
    console.log(
      `[${FNAME}] updateLastLogin complete. Attempting to get permissions...`
    );

    const permissions = getRolePermissions(userObject?.Role_Id);
    console.log(
      `[${FNAME}] Permissions received (${
        permissions?.length || 0
      }). Attempting to create session...`
    );

    const session = createSession_(userObject, "LOGIN");
    console.log(
      `[${FNAME}] Session created (ID: ${
        session?.sessionId || "N/A"
      }). Attempting audit log...`
    );

    logAuditEvent_(
      "LOGIN_SUCCESS",
      `User ${userObject?.Username || username} logged in.`,
      {
        userId: userObject?.User_Id || "",
        username: userObject?.Username || username,
        role: userObject?.Role_Id || "",
        sessionId: session?.sessionId || "",
      },
      userObject?.User_Id
    );
    console.log(`[${FNAME}] Audit log complete. Attempting bootstrap data...`);

    const bootstrap =
      getBootstrapData(userObject, permissions) ||
      sanitizeForClientResponse_(buildGuestBootstrapPayload_());
    console.log(
      `[${FNAME}] Bootstrap data generated. Preparing success response...`
    );

    const sanitizedUser =
      sanitizeForClientResponse_(bootstrap?.user) ||
      sanitizeForClientResponse_(sanitizeUserForClient_(userObject)) ||
      null;
    if (bootstrap && typeof bootstrap === "object") {
      bootstrap.user = sanitizedUser;
    }

    debugLog(FNAME, "success", {
      userId: sanitizedUser?.User_Id,
      role: sanitizedUser?.Role_Id,
      sessionId: session?.sessionId || null,
    });

    return sanitizeForClientResponse_({
      success: true,
      user: sanitizedUser,
      bootstrap,
      meta: {
        loginAt: new Date().toISOString(),
        sessionId: session?.sessionId || undefined,
      },
    });
  } catch (err) {
    debugError(FNAME, err, { stage: "unexpected" });
    return fail("حدث خطأ غير متوقع أثناء تسجيل الدخول.", {
      reason: "EXCEPTION",
    });
  }
}

function updateLastLogin_(userId, rowIndex, options = {}) {
  const FNAME = "updateLastLogin_";
  try {
    if (!rowIndex || rowIndex < 2) {
      throw new Error("updateLastLogin_: invalid row index");
    }

    const sheet = options.sheet || getSheet_(CONFIG.SHEETS.USERS);
    if (!sheet) {
      throw new Error("updateLastLogin_: users sheet not found");
    }

    let columnIndex =
      typeof options.columnIndex === "number" ? options.columnIndex : null;
    if (columnIndex == null || columnIndex < 0) {
      const lastCol = sheet.getLastColumn();
      const headers =
        lastCol > 0 ? sheet.getRange(1, 1, 1, lastCol).getValues()[0] : [];
      columnIndex = headers.indexOf("Last_Login");
      if (columnIndex < 0) {
        columnIndex = headers.indexOf("LastLogin");
      }
    }

    if (columnIndex == null || columnIndex < 0) {
      throw new Error("updateLastLogin_: Last_Login column not found");
    }

    sheet.getRange(rowIndex, columnIndex + 1).setValue(new Date());
    debugLog(FNAME, "updated", {
      userId,
      rowIndex,
      columnIndex,
      username: options.username || null,
    });
    return true;
  } catch (error) {
    console.error(
      `[${FNAME}] EXCEPTION: ${error.message} Stack: ${error.stack}`
    );
    debugError(FNAME, error, {
      userId,
      rowIndex,
      columnIndex: options?.columnIndex ?? null,
      username: options?.username || null,
    });
    return false;
  }
}

function createSession_(user, eventType) {
  const FNAME = "createSession_";
  try {
    const sheet = getSheet_(CONFIG.SHEETS.SESSIONS);
    if (!sheet) {
      throw new Error("createSession_: sessions sheet not found");
    }

    const lastCol = sheet.getLastColumn();
    if (!lastCol || lastCol <= 0) {
      throw new Error("createSession_: sessions sheet missing headers");
    }

    const headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0] || [];
    if (!headers.length) {
      throw new Error("createSession_: unable to resolve session headers");
    }

    const sessionId = Utilities.getUuid();
    const now = new Date();
    const type = eventType || "LOGIN";
    const actor = getActorEmail_();

    const payload = {
      Session_Id: sessionId,
      SessionID: sessionId,
      Session: sessionId,
      User_Id: user?.User_Id || "",
      UserID: user?.User_Id || "",
      User: user?.Username || user?.Email || "",
      Username: user?.Username || "",
      Email: user?.Email || "",
      Type: type,
      Session_Type: type,
      Category: type,
      Status: "ACTIVE",
      Session_Status: "ACTIVE",
      State: "ACTIVE",
      Started_At: now,
      Start_At: now,
      Created_At: now,
      CreatedAt: now,
      Created_By: actor,
      Actor_Email: actor,
      Actor: actor,
      Actor_User_Id: user?.User_Id || "",
      Notes: `${type} session for ${user?.Username || user?.Email || "user"}`,
    };

    appendRow_(sheet, payload, headers);
    debugLog(FNAME, "created", {
      sessionId,
      userId: user?.User_Id || null,
      type,
    });

    return {
      sessionId,
      createdAt: now,
      type,
    };
  } catch (error) {
    console.error(
      `[${FNAME}] EXCEPTION: ${error.message} Stack: ${error.stack}`
    );
    debugError(FNAME, error, {
      userId: user?.User_Id || null,
      username: user?.Username || user?.Email || null,
      type: eventType || "LOGIN",
    });
    return null;
  }
}

function logAuditEvent_(action, message, payload = {}, userId) {
  const FNAME = "logAuditEvent_";
  try {
    const details = Object.assign({}, payload);
    if (message && typeof message === "string") {
      details.message = message;
    }
    if (userId) {
      details.entity = details.entity || "Users";
      details.entityId = details.entityId || userId;
    }

    logAuditEvent(action, details);
    debugLog(FNAME, "logged", { action, userId });
    return true;
  } catch (error) {
    console.error(
      `[${FNAME}] EXCEPTION: ${error.message} Stack: ${error.stack}`
    );
    debugError(FNAME, error, { action, userId });
    return false;
  }
}

// Enhanced user search with dynamic filtering
function searchUsers(filters = {}) {
  debugLog("searchUsers", "start", { filters });
  const { sheet, headers, rows, sourceName } = loadSheetData_(
    CONFIG.SHEETS.USERS,
    CONFIG.SHEETS.USERS_VIEW,
    "PV_SYS_Users_Table"
  );

  if (!sheet && !rows.length) {
    debugLog("searchUsers", "sheetNotFound", {
      tried: [
        CONFIG.SHEETS.USERS,
        CONFIG.SHEETS.USERS_VIEW,
        "PV_SYS_Users_Table",
      ],
    });
    return [];
  }

  if (!rows.length) {
    debugLog("searchUsers", "noRows", { source: sourceName || "<none>" });
    return [];
  }

  try {
    debugLog("searchUsers", "sheetInfo", {
      source: sheet ? sheet.getName() : sourceName || "<unknown>",
      rows: rows.length,
      columns: headers.length,
    });

    const idFilterSet = Array.isArray(filters.userIds)
      ? new Set(filters.userIds.map((id) => String(id)))
      : null;

    const idx = {
      id: findHeaderIndex_(
        headers,
        "User_Id",
        "User ID",
        "UserId",
        "Id",
        "ID",
        "معرف المستخدم",
        "معرّف المستخدم"
      ),
      fullName: findHeaderIndex_(
        headers,
        "Full_Name",
        "Full Name",
        "Name",
        "الاسم الكامل",
        "اسم كامل"
      ),
      username: findHeaderIndex_(
        headers,
        "Username",
        "User_Name",
        "Login",
        "User",
        "اسم المستخدم",
        "مستخدم"
      ),
      email: findHeaderIndex_(
        headers,
        "Email",
        "Email_Address",
        "E-mail",
        "البريد الإلكتروني",
        "البريد الالكتروني"
      ),
      department: findHeaderIndex_(
        headers,
        "Department",
        "Dept",
        "Division",
        "القسم",
        "قسم"
      ),
      role: findHeaderIndex_(
        headers,
        "Role_Id",
        "Role",
        "RoleID",
        "Role Id",
        "الدور",
        "الدور الوظيفي"
      ),
      isActive: findHeaderIndex_(
        headers,
        "IsActive",
        "Is_Active",
        "Active",
        "Status",
        "الحالة",
        "نشط"
      ),
      jobTitle: findHeaderIndex_(
        headers,
        "Job_Title",
        "Job Title",
        "Title",
        "المسمى الوظيفي",
        "الوظيفة"
      ),
      lastLogin: findHeaderIndex_(
        headers,
        "Last_Login",
        "LastLogin",
        "Last Login",
        "آخر تسجيل دخول",
        "اخر تسجيل دخول",
        "Last_SignIn",
        "Last_Signin"
      ),
      updatedAt: findHeaderIndex_(
        headers,
        "Updated_At",
        "UpdatedAt",
        "LastUpdated",
        "Last Updated",
        "آخر تحديث",
        "اخر تحديث"
      ),
    };

    debugLog("searchUsers", "headerIndices", idx);

    const readValue = (row, index) => (index >= 0 ? row[index] : "");
    const readString = (row, index) => {
      const value = readValue(row, index);
      if (value == null) return "";
      if (value instanceof Date) return value.toISOString();
      return String(value).trim();
    };

    const fromDate = coerceDate_(filters.updatedFrom);
    const toDateRaw = coerceDate_(filters.updatedTo);
    const toDate =
      toDateRaw != null
        ? new Date(
            toDateRaw.getFullYear(),
            toDateRaw.getMonth(),
            toDateRaw.getDate(),
            23,
            59,
            59,
            999
          )
        : null;
    const desiredDepartment = (filters.department || "").trim();
    const desiredRole = (filters.role || "").trim();
    const desiredStatus =
      filters.status !== undefined && filters.status !== null
        ? String(filters.status).trim().toLowerCase()
        : "";

    const normalizeSearchValue = (value) => {
      if (value == null) return "";
      if (value instanceof Date) return value.toISOString().toLowerCase();
      return String(value).trim().toLowerCase();
    };

    const normalizedDeptFilter = normalizeSearchValue(desiredDepartment);
    const normalizedRoleFilter = normalizeSearchValue(desiredRole);

    const filtered = [];

    rows.forEach((row) => {
      const updatedRaw = readValue(row, idx.updatedAt);
      const updatedDate = coerceDate_(updatedRaw);
      const lastLoginRaw = readValue(row, idx.lastLogin);
      const lastLoginDate = coerceDate_(lastLoginRaw);
      const lastLoginValue = normalizeDateOutput_(
        lastLoginDate || lastLoginRaw
      );
      const updatedValue = normalizeDateOutput_(updatedDate || updatedRaw);

      const record = {
        User_Id: readString(row, idx.id),
        Full_Name: readString(row, idx.fullName),
        Username: readString(row, idx.username),
        Email: readString(row, idx.email),
        Department: readString(row, idx.department),
        Role_Id: readString(row, idx.role),
        IsActive: idx.isActive >= 0 ? isTruthyFlag_(row[idx.isActive]) : false,
        Job_Title: readString(row, idx.jobTitle),
        Last_Login: lastLoginValue || readString(row, idx.lastLogin) || "",
        Updated_At: updatedValue || readString(row, idx.updatedAt) || "",
      };

      if (idFilterSet && !idFilterSet.has(String(record.User_Id || ""))) {
        return;
      }

      if (filters.search) {
        const q = normalizeSearchValue(filters.search);
        const searchable = [
          record.User_Id,
          record.Full_Name,
          record.Username,
          record.Email,
          record.Department,
          record.Role_Id,
          record.Job_Title,
        ]
          .map(normalizeSearchValue)
          .join("||");
        if (!searchable.includes(q)) {
          return;
        }
      }

      const rowDept = normalizeSearchValue(record.Department);
      if (normalizedDeptFilter && rowDept !== normalizedDeptFilter) {
        return;
      }

      const rowRole = normalizeSearchValue(record.Role_Id);
      if (normalizedRoleFilter && rowRole !== normalizedRoleFilter) {
        return;
      }

      if (desiredStatus) {
        const active = record.IsActive === true;
        if (desiredStatus === "true" && !active) return;
        if (desiredStatus === "false" && active) return;
        if (desiredStatus === "inactive" && active) return;
        if (desiredStatus === "active" && !active) return;
      }

      if (fromDate || toDate) {
        const updated =
          updatedDate ||
          coerceDate_(record.Updated_At) ||
          coerceDate_(updatedRaw);
        if (!updated) return;
        if (fromDate && updated < fromDate) return;
        if (toDate && updated > toDate) return;
      }

      filtered.push(record);
    });

    debugLog("searchUsers", "result", {
      source: sheet ? sheet.getName() : sourceName || "<unknown>",
      totalRows: rows.length,
      filteredCount: filtered.length,
    });
    return filtered;
  } catch (err) {
    debugError("searchUsers", err, { filters });
    throw err;
  }
}

function getDynamicFormStructure(formId = "FORM_SYS_AddUser") {
  debugLog("getDynamicFormStructure", "start", { formId });
  const sh = getSheet_(CONFIG.SHEETS.DYNAMIC_FORMS);
  if (!sh) return [];

  try {
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
      Source_Range: h.indexOf("Source_Range"),
      Dropdown_Key: h.indexOf("Dropdown_Key"),
      Mandatory: h.indexOf("Mandatory"),
      Default_Value: h.indexOf("Default_Value"),
      Read_Only: h.indexOf("Read_Only"),
      Target_Sheet: h.indexOf("Target_Sheet"),
      Target_Column: h.indexOf("Target_Column"),
      Role_ID: h.indexOf("Role_ID"),
    };

    const fields = data
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
        sourceRange: idx.Source_Range >= 0 ? r[idx.Source_Range] || "" : "",
        sourceKey: idx.Dropdown_Key >= 0 ? r[idx.Dropdown_Key] || "" : "",
        required: String(r[idx.Mandatory] || "").toLowerCase() === "yes",
        defaultValue: idx.Default_Value >= 0 ? r[idx.Default_Value] || "" : "",
        readOnly:
          idx.Read_Only >= 0
            ? r[idx.Read_Only] === true ||
              String(r[idx.Read_Only]).toLowerCase() === "yes"
            : false,
        targetSheet: r[idx.Target_Sheet] || "",
        targetColumn: r[idx.Target_Column] || "",
        roleId: r[idx.Role_ID] || "",
      }));
    debugLog("getDynamicFormStructure", "loaded", {
      formId,
      fieldCount: fields.length,
    });
    return fields;
  } catch (err) {
    debugError("getDynamicFormStructure", err, { formId });
    throw err;
  }
}

function getDropdownOptions(key) {
  debugLog("getDropdownOptions", "start", { key });
  if (!key) return [];
  const sh = getSheet_(CONFIG.SHEETS.DROPDOWNS);
  if (!sh) return [];

  try {
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

    const options = data
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
    debugLog("getDropdownOptions", "loaded", { key, count: options.length });
    return options;
  } catch (err) {
    debugError("getDropdownOptions", err, { key });
    throw err;
  }
}

function getTabRegister() {
  const FNAME = "getTabRegister";
  debugLog(FNAME, "start");

  const { headers, rows, sheet, sourceName } = loadSheetData_(
    CONFIG.SHEETS.TAB_REGISTER
  );

  if (!rows.length) {
    debugLog(FNAME, "noRows", {
      source: sheet ? sheet.getName() : sourceName || "<none>",
    });
    return [];
  }

  const idx = {
    recordType: findHeaderIndex_(headers, "Record_Type", "RecordType", "Type"),
    tabId: findHeaderIndex_(headers, "Tab_ID", "TabId", "TabID"),
    tabLabelEn: findHeaderIndex_(
      headers,
      "Tab_Label_EN",
      "Tab_Label",
      "Tab_Name_EN",
      "Tab_LabelEn",
      "Tab_Label_En"
    ),
    tabLabelAr: findHeaderIndex_(
      headers,
      "Tab_Label_AR",
      "Tab_LabelAr",
      "Tab_Label_ARABIC",
      "Tab_Name_AR"
    ),
    subId: findHeaderIndex_(headers, "Sub_ID", "SubId", "SubID"),
    subLabelEn: findHeaderIndex_(
      headers,
      "Sub_Label_EN",
      "Sub_Label",
      "Sub_LabelEn",
      "Sub_Label_En"
    ),
    subLabelAr: findHeaderIndex_(
      headers,
      "Sub_Label_AR",
      "Sub_LabelAr",
      "Sub_Label_ARABIC"
    ),
    route: findHeaderIndex_(headers, "Route", "Path", "Url", "URL"),
    sortOrder: findHeaderIndex_(
      headers,
      "Sort_Order",
      "SortOrder",
      "Sort",
      "Order"
    ),
    sourceSheet: findHeaderIndex_(
      headers,
      "Source_Sheet",
      "Source",
      "SourceSheet"
    ),
    permissions: findHeaderIndex_(
      headers,
      "Permissions",
      "Permission",
      "Permission_Key"
    ),
  };

  const readString = (row, index) => {
    if (index == null || index < 0) return "";
    const value = getValueAt_(row, index);
    if (value == null) return "";
    if (value instanceof Date) return value.toISOString();
    return String(value).trim();
  };

  const readNumber = (row, index) => {
    if (index == null || index < 0) return null;
    const raw = getValueAt_(row, index);
    if (raw == null || raw === "") return null;
    const num = Number(raw);
    return Number.isFinite(num) ? num : null;
  };

  const tabsMap = new Map();

  rows.forEach((row) => {
    const tabIdRaw = readString(row, idx.tabId);
    if (!tabIdRaw) return;
    const tabKey = tabIdRaw;
    const recordType = readString(row, idx.recordType).toUpperCase();
    const rowSortOrder = readNumber(row, idx.sortOrder);
    let tab = tabsMap.get(tabKey);
    if (!tab) {
      tab = {
        tabId: tabKey,
        tabLabelEn: readString(row, idx.tabLabelEn),
        tabLabelAr: readString(row, idx.tabLabelAr),
        route: readString(row, idx.route),
        sortOrder: rowSortOrder,
        sourceSheet: readString(row, idx.sourceSheet),
        permissions: readString(row, idx.permissions),
        subTabs: [],
        _subMap: new Map(),
      };
      tabsMap.set(tabKey, tab);
    } else {
      if (!tab.tabLabelEn) tab.tabLabelEn = readString(row, idx.tabLabelEn);
      if (!tab.tabLabelAr) tab.tabLabelAr = readString(row, idx.tabLabelAr);
      if (!tab.route) tab.route = readString(row, idx.route);
      if (!tab.sourceSheet) tab.sourceSheet = readString(row, idx.sourceSheet);
      if (!tab.permissions) tab.permissions = readString(row, idx.permissions);
      if (
        (tab.sortOrder == null || !Number.isFinite(tab.sortOrder)) &&
        rowSortOrder != null
      ) {
        tab.sortOrder = rowSortOrder;
      }
    }

    if (recordType && recordType !== "SUB" && recordType !== "SUBTAB") {
      return;
    }

    const subIdRaw = readString(row, idx.subId);
    if (!subIdRaw) return;
    const subKey = subIdRaw;
    const targetMap = tab._subMap;
    const payload = {
      subId: subIdRaw,
      subLabelEn: readString(row, idx.subLabelEn),
      subLabelAr: readString(row, idx.subLabelAr),
      route: readString(row, idx.route),
      sortOrder: rowSortOrder,
      sourceSheet: readString(row, idx.sourceSheet),
    };

    if (!targetMap.has(subKey)) {
      targetMap.set(subKey, payload);
      tab.subTabs.push(payload);
    } else {
      const existing = targetMap.get(subKey);
      if (!existing.subLabelEn) existing.subLabelEn = payload.subLabelEn;
      if (!existing.subLabelAr) existing.subLabelAr = payload.subLabelAr;
      if (!existing.route) existing.route = payload.route;
      if (!existing.sourceSheet) existing.sourceSheet = payload.sourceSheet;
      if (
        (existing.sortOrder == null || !Number.isFinite(existing.sortOrder)) &&
        payload.sortOrder != null
      ) {
        existing.sortOrder = payload.sortOrder;
      }
    }
  });

  const result = Array.from(tabsMap.values())
    .map((tab) => {
      tab.subTabs = tab.subTabs
        .map((sub) => ({
          subId: sub.subId,
          subLabelEn: sub.subLabelEn || "",
          subLabelAr: sub.subLabelAr || "",
          route: sub.route || "",
          sortOrder:
            sub.sortOrder != null && Number.isFinite(sub.sortOrder)
              ? sub.sortOrder
              : null,
          sourceSheet: sub.sourceSheet || "",
        }))
        .sort((a, b) => {
          const aOrder =
            a.sortOrder != null && Number.isFinite(a.sortOrder)
              ? a.sortOrder
              : Number.MAX_SAFE_INTEGER;
          const bOrder =
            b.sortOrder != null && Number.isFinite(b.sortOrder)
              ? b.sortOrder
              : Number.MAX_SAFE_INTEGER;
          if (aOrder !== bOrder) return aOrder - bOrder;
          return String(a.subId || "").localeCompare(String(b.subId || ""));
        });
      delete tab._subMap;
      if (tab.sortOrder == null || !Number.isFinite(Number(tab.sortOrder))) {
        tab.sortOrder = null;
      }
      return {
        tabId: tab.tabId,
        tabLabelEn: tab.tabLabelEn || "",
        tabLabelAr: tab.tabLabelAr || "",
        route: tab.route || "",
        sortOrder: tab.sortOrder,
        sourceSheet: tab.sourceSheet || "",
        permissions: tab.permissions || "",
        subTabs: tab.subTabs,
      };
    })
    .sort((a, b) => {
      const aOrder =
        a.sortOrder != null && Number.isFinite(a.sortOrder)
          ? a.sortOrder
          : Number.MAX_SAFE_INTEGER;
      const bOrder =
        b.sortOrder != null && Number.isFinite(b.sortOrder)
          ? b.sortOrder
          : Number.MAX_SAFE_INTEGER;
      if (aOrder !== bOrder) return aOrder - bOrder;
      return String(a.tabId || "").localeCompare(String(b.tabId || ""));
    });

  const merged = mergeTabRegisterFallbacks_(result);

  debugLog(FNAME, "resolved", {
    tabs: merged.length,
    subTabs: merged.reduce(
      (count, tab) =>
        count + (Array.isArray(tab.subTabs) ? tab.subTabs.length : 0),
      0
    ),
    source: sheet ? sheet.getName() : sourceName || "<unknown>",
  });

  return merged;
}

function mergeTabRegisterFallbacks_(tabs) {
  const parseSortOrder = (value) => {
    if (value == null || value === "") return null;
    const num = Number(value);
    return Number.isFinite(num) ? num : null;
  };

  const cloned = Array.isArray(tabs)
    ? tabs.map((tab) => ({
        tabId: tab.tabId,
        tabLabelEn: tab.tabLabelEn || "",
        tabLabelAr: tab.tabLabelAr || "",
        route: tab.route || "",
        sortOrder: parseSortOrder(tab.sortOrder),
        sourceSheet: tab.sourceSheet || "",
        permissions: tab.permissions || "",
        subTabs: Array.isArray(tab.subTabs)
          ? tab.subTabs.map((sub) => ({
              subId: sub.subId,
              subLabelEn: sub.subLabelEn || "",
              subLabelAr: sub.subLabelAr || "",
              route: sub.route || "",
              sortOrder: parseSortOrder(sub.sortOrder),
              sourceSheet: sub.sourceSheet || "",
            }))
          : [],
      }))
    : [];

  const tabMap = new Map();
  cloned.forEach((tab) => {
    const key = String(tab.tabId || "").toLowerCase();
    if (!key) return;
    tabMap.set(key, tab);
  });

  TAB_REGISTER_FALLBACKS.forEach((fallback) => {
    const normalizedFallback = {
      tabId: fallback.tabId,
      tabLabelEn: fallback.tabLabelEn || "",
      tabLabelAr: fallback.tabLabelAr || "",
      route: fallback.route || "",
      sortOrder: parseSortOrder(fallback.sortOrder),
      sourceSheet: fallback.sourceSheet || "",
      permissions: fallback.permissions || "",
      subTabs: Array.isArray(fallback.subTabs)
        ? fallback.subTabs.map((sub) => ({
            subId: sub.subId,
            subLabelEn: sub.subLabelEn || "",
            subLabelAr: sub.subLabelAr || "",
            route: sub.route || "",
            sortOrder: parseSortOrder(sub.sortOrder),
            sourceSheet: sub.sourceSheet || "",
          }))
        : [],
    };

    const key = String(normalizedFallback.tabId || "").toLowerCase();
    if (!key) return;

    if (!tabMap.has(key)) {
      tabMap.set(key, normalizedFallback);
      return;
    }

    const existing = tabMap.get(key);
    // Only supplement missing metadata; do not inject fallback sub-tabs when a tab already exists.
    if (!existing.tabLabelEn && normalizedFallback.tabLabelEn) {
      existing.tabLabelEn = normalizedFallback.tabLabelEn;
    }
    if (!existing.tabLabelAr && normalizedFallback.tabLabelAr) {
      existing.tabLabelAr = normalizedFallback.tabLabelAr;
    }
    if (
      (existing.sortOrder == null || !Number.isFinite(existing.sortOrder)) &&
      normalizedFallback.sortOrder != null
    ) {
      existing.sortOrder = normalizedFallback.sortOrder;
    }
    if (!existing.permissions && normalizedFallback.permissions) {
      existing.permissions = normalizedFallback.permissions;
    }

    if (
      Array.isArray(normalizedFallback.subTabs) &&
      normalizedFallback.subTabs.length
    ) {
      const seenSubIds = new Set(
        Array.isArray(existing.subTabs)
          ? existing.subTabs
              .map((sub) => String(sub?.subId || "").toLowerCase())
              .filter(Boolean)
          : []
      );

      normalizedFallback.subTabs.forEach((sub) => {
        const subKey = String(sub?.subId || "").toLowerCase();
        if (!subKey || seenSubIds.has(subKey)) return;
        seenSubIds.add(subKey);
        existing.subTabs = Array.isArray(existing.subTabs)
          ? existing.subTabs
          : [];
        existing.subTabs.push({
          subId: sub.subId,
          subLabelEn: sub.subLabelEn || "",
          subLabelAr: sub.subLabelAr || "",
          route: sub.route || "",
          sortOrder: parseSortOrder(sub.sortOrder),
          sourceSheet: sub.sourceSheet || "",
        });
      });
    }
  });

  const merged = Array.from(tabMap.values()).map((tab) => ({
    tabId: tab.tabId,
    tabLabelEn: tab.tabLabelEn || "",
    tabLabelAr: tab.tabLabelAr || "",
    route: tab.route || "",
    sortOrder: parseSortOrder(tab.sortOrder),
    sourceSheet: tab.sourceSheet || "",
    permissions: tab.permissions || "",
    subTabs: Array.isArray(tab.subTabs)
      ? tab.subTabs.map((sub) => ({
          subId: sub.subId,
          subLabelEn: sub.subLabelEn || "",
          subLabelAr: sub.subLabelAr || "",
          route: sub.route || "",
          sortOrder: parseSortOrder(sub.sortOrder),
          sourceSheet: sub.sourceSheet || "",
        }))
      : [],
  }));

  merged.sort((a, b) => {
    const aOrder =
      a.sortOrder != null && Number.isFinite(a.sortOrder)
        ? a.sortOrder
        : Number.MAX_SAFE_INTEGER;
    const bOrder =
      b.sortOrder != null && Number.isFinite(b.sortOrder)
        ? b.sortOrder
        : Number.MAX_SAFE_INTEGER;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return String(a.tabId || "").localeCompare(String(b.tabId || ""));
  });

  return merged;
}

function logAction(userId, actionType, entityType, recordId, details = {}) {
  const FNAME = "logAction";
  try {
    const sheet = getSheet_(CONFIG.SHEETS.AUDIT);
    if (!sheet) {
      debugLog(FNAME, "missingSheet", { entityType, actionType });
      return false;
    }

    const now = new Date();
    const actorEmail = getActorEmail_();
    let detailsText = "";
    if (details != null) {
      if (typeof details === "string") {
        detailsText = details;
      } else {
        detailsText = safeStringify_(sanitizeForLog(details));
      }
    }

    const scoped =
      details && typeof details === "object" && details !== null
        ? details.scope || details.Scope || ""
        : "";
    const sheetHint =
      details && typeof details === "object" && details !== null
        ? details.sheet || details.Sheet || entityType || ""
        : entityType || "";

    const payload = {
      Timestamp: now,
      User: actorEmail || userId || "",
      Action: actionType || "",
      Details: detailsText,
      Entity: entityType || "",
      Entity_Id: recordId || "",
      Scope: scoped || entityType || "",
      Sheet: sheetHint || entityType || "",
      Target_Id: recordId || "",
      Actor_Id: userId || "",
    };

    appendRow_(sheet, payload);
    return true;
  } catch (error) {
    debugError(FNAME, error, { entityType, actionType, recordId });
    return false;
  }
}

function normalizeHrKeyToken_(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/^sub_/, "")
    .replace(/^hr_/, "")
    .replace(/[^a-z0-9]/g, "");
}

function getHrSheetConfig_(key) {
  if (!key) return null;
  const normalized = normalizeHrKeyToken_(key);
  if (!normalized) return null;
  for (const [paneId, config] of Object.entries(HR_PANE_CONFIG)) {
    const paneToken = normalizeHrKeyToken_(paneId);
    if (paneToken === normalized) {
      return config;
    }
  }
  return null;
}

function getHrSheetContext_(config) {
  if (!config) throw new Error("HR configuration missing");
  const sheet = getSheet_(config.sheetName);
  if (!sheet) {
    throw new Error(`Sheet ${config.sheetName} not found`);
  }
  const lastCol = sheet.getLastColumn();
  const headers =
    lastCol > 0 ? sheet.getRange(1, 1, 1, lastCol).getValues().flat() : [];
  if (!headers.length) {
    throw new Error(`Sheet ${config.sheetName} is missing headers`);
  }
  const idIndex = headers.indexOf(config.idColumn);
  if (idIndex < 0) {
    throw new Error(`${config.idColumn} column missing in ${config.sheetName}`);
  }
  return { sheet, headers, idIndex };
}

function buildFlexibleLookup_(data) {
  const map = new Map();
  if (!data || typeof data !== "object") return map;
  Object.keys(data).forEach((key) => {
    const value = data[key];
    const original = String(key || "");
    const lower = original.toLowerCase();
    const compact = normalizeHrKeyToken_(original);
    map.set(original, value);
    map.set(lower, value);
    map.set(compact, value);
  });
  return map;
}

function generateHrRecordId_(config) {
  const prefix = String(
    config.idPrefix || config.idColumn || "HR"
  ).toUpperCase();
  const token = Utilities.getUuid().split("-")[0].toUpperCase();
  return `${prefix}-${token}`;
}

function getHrRecords_(key) {
  const config = getHrSheetConfig_(key);
  if (!config) {
    return sanitizeForClientResponse_({ headers: [], rows: [] });
  }
  const { headers, rows } = loadSheetData_(config.sheetName);
  return sanitizeForClientResponse_({ headers, rows });
}

function createHrRecord_(key, data = {}) {
  const FNAME = "createHrRecord_";
  try {
    const config = getHrSheetConfig_(key);
    if (!config) throw new Error("HR configuration not found");
    const { sheet, headers, idIndex } = getHrSheetContext_(config);
    const lookup = buildFlexibleLookup_(data);
    let recordId = lookup.get(config.idColumn);
    if (!recordId) {
      recordId = lookup.get(config.idColumn.toLowerCase());
    }
    if (!recordId) {
      recordId = lookup.get(normalizeHrKeyToken_(config.idColumn));
    }
    if (!recordId) {
      recordId = generateHrRecordId_(config);
    }

    const now = new Date();
    const actor = getActorEmail_();
    const currentUser = getCurrentUser();
    const rowValues = headers.map((header, index) => {
      if (index === idIndex) {
        return recordId;
      }
      const candidates = [
        header,
        String(header || "").toLowerCase(),
        normalizeHrKeyToken_(header),
      ];
      for (const candidate of candidates) {
        if (candidate && lookup.has(candidate)) {
          return lookup.get(candidate);
        }
      }
      return "";
    });

    const createdAtIdx = headers.indexOf("Created_At");
    if (createdAtIdx >= 0) rowValues[createdAtIdx] = now;
    const createdByIdx = headers.indexOf("Created_By");
    if (createdByIdx >= 0) rowValues[createdByIdx] = actor;
    const updatedAtIdx = headers.indexOf("Updated_At");
    if (updatedAtIdx >= 0) rowValues[updatedAtIdx] = now;
    const updatedByIdx = headers.indexOf("Updated_By");
    if (updatedByIdx >= 0) rowValues[updatedByIdx] = actor;

    sheet.appendRow(rowValues);

    const rowObject = headers.reduce((acc, header, idx) => {
      acc[header] = rowValues[idx];
      return acc;
    }, {});

    logAction(currentUser?.User_Id || "", "CREATE", config.entity, recordId, {
      sheet: config.sheetName,
      data: rowObject,
    });

    return sanitizeForClientResponse_({
      success: true,
      recordId,
      message: "تم إنشاء السجل بنجاح.",
    });
  } catch (error) {
    debugError(FNAME, error, { key });
    throw error;
  }
}

function updateHrRecord_(key, recordId, updates = {}) {
  const FNAME = "updateHrRecord_";
  try {
    const config = getHrSheetConfig_(key);
    if (!config) throw new Error("HR configuration not found");
    const { sheet, headers, idIndex } = getHrSheetContext_(config);
    const lookup = buildFlexibleLookup_(updates);
    const normalizedId = recordId || lookup.get(config.idColumn);
    if (!normalizedId) throw new Error("Record identifier is required");

    const lastRow = sheet.getLastRow();
    if (lastRow <= 1) {
      return sanitizeForClientResponse_({
        success: false,
        message: "لا توجد بيانات لتحديثها.",
      });
    }

    const dataRange = sheet.getRange(2, 1, lastRow - 1, headers.length);
    const rows = dataRange.getValues();
    const targetIndex = rows.findIndex((row) =>
      keysEqual_(row[idIndex], normalizedId)
    );

    if (targetIndex < 0) {
      return sanitizeForClientResponse_({
        success: false,
        message: "تعذر العثور على السجل المطلوب.",
      });
    }

    const rowNumber = targetIndex + 2;
    const currentRow = rows[targetIndex];
    const updatedRow = currentRow.slice();
    const applied = {};

    headers.forEach((header, index) => {
      if (index === idIndex) return;
      const candidates = [
        header,
        String(header || "").toLowerCase(),
        normalizeHrKeyToken_(header),
      ];
      for (const candidate of candidates) {
        if (candidate && lookup.has(candidate)) {
          const value = lookup.get(candidate);
          updatedRow[index] = value;
          applied[header] = value;
          return;
        }
      }
    });

    const now = new Date();
    const actor = getActorEmail_();
    const currentUser = getCurrentUser();
    const updatedAtIdx = headers.indexOf("Updated_At");
    if (updatedAtIdx >= 0) {
      updatedRow[updatedAtIdx] = now;
      applied[headers[updatedAtIdx]] = now;
    }
    const updatedByIdx = headers.indexOf("Updated_By");
    if (updatedByIdx >= 0) {
      updatedRow[updatedByIdx] = actor;
      applied[headers[updatedByIdx]] = actor;
    }

    sheet.getRange(rowNumber, 1, 1, headers.length).setValues([updatedRow]);

    logAction(
      currentUser?.User_Id || "",
      "UPDATE",
      config.entity,
      normalizedId,
      {
        sheet: config.sheetName,
        updates: applied,
      }
    );

    return sanitizeForClientResponse_({
      success: true,
      recordId: normalizedId,
      message: "تم تحديث السجل بنجاح.",
    });
  } catch (error) {
    debugError(FNAME, error, { key, recordId });
    throw error;
  }
}

function deleteHrRecord_(key, recordId) {
  const FNAME = "deleteHrRecord_";
  try {
    const config = getHrSheetConfig_(key);
    if (!config) throw new Error("HR configuration not found");
    const { sheet, headers, idIndex } = getHrSheetContext_(config);
    const normalizedId = String(recordId || "").trim();
    if (!normalizedId) throw new Error("Record identifier is required");

    const lastRow = sheet.getLastRow();
    if (lastRow <= 1) {
      return sanitizeForClientResponse_({
        success: false,
        message: "لا توجد بيانات لحذفها.",
      });
    }

    const dataRange = sheet.getRange(2, 1, lastRow - 1, headers.length);
    const rows = dataRange.getValues();
    const targetIndex = rows.findIndex((row) =>
      keysEqual_(row[idIndex], normalizedId)
    );

    if (targetIndex < 0) {
      return sanitizeForClientResponse_({
        success: false,
        message: "تعذر العثور على السجل المطلوب.",
      });
    }

    const rowNumber = targetIndex + 2;
    sheet.deleteRow(rowNumber);

    const currentUser = getCurrentUser();
    logAction(
      currentUser?.User_Id || "",
      "DELETE",
      config.entity,
      normalizedId,
      {
        sheet: config.sheetName,
      }
    );

    return sanitizeForClientResponse_({
      success: true,
      recordId: normalizedId,
      message: "تم حذف السجل بنجاح.",
    });
  } catch (error) {
    debugError(FNAME, error, { key, recordId });
    throw error;
  }
}

function getEmployees() {
  return getHrRecords_("Sub_HR_Employees");
}

function getAttendanceRecords() {
  return getHrRecords_("Sub_HR_Attendance");
}

function getLeaveRequests() {
  return getHrRecords_("Sub_HR_Leave_Requests");
}

function getLeaveRecords() {
  return getHrRecords_("Sub_HR_Leave");
}

function getAdvanceRecords() {
  return getHrRecords_("Sub_HR_Advances");
}

function getDeductionRecords() {
  return getHrRecords_("Sub_HR_Deductions");
}

function getPayrollRecords() {
  return getHrRecords_("Sub_HR_Payroll");
}

function saveEmployee(data) {
  return createHrRecord_("Sub_HR_Employees", data);
}

function saveAttendanceRecord(data) {
  return createHrRecord_("Sub_HR_Attendance", data);
}

function saveLeaveRequest(data) {
  return createHrRecord_("Sub_HR_Leave_Requests", data);
}

function saveLeaveRecord(data) {
  return createHrRecord_("Sub_HR_Leave", data);
}

function saveAdvanceRecord(data) {
  return createHrRecord_("Sub_HR_Advances", data);
}

function saveDeductionRecord(data) {
  return createHrRecord_("Sub_HR_Deductions", data);
}

function savePayrollRecord(data) {
  return createHrRecord_("Sub_HR_Payroll", data);
}

function updateEmployee(recordId, updates) {
  return updateHrRecord_("Sub_HR_Employees", recordId, updates);
}

function updateAttendanceRecord(recordId, updates) {
  return updateHrRecord_("Sub_HR_Attendance", recordId, updates);
}

function updateLeaveRequest(recordId, updates) {
  return updateHrRecord_("Sub_HR_Leave_Requests", recordId, updates);
}

function updateLeaveRecord(recordId, updates) {
  return updateHrRecord_("Sub_HR_Leave", recordId, updates);
}

function updateAdvanceRecord(recordId, updates) {
  return updateHrRecord_("Sub_HR_Advances", recordId, updates);
}

function updateDeductionRecord(recordId, updates) {
  return updateHrRecord_("Sub_HR_Deductions", recordId, updates);
}

function updatePayrollRecord(recordId, updates) {
  return updateHrRecord_("Sub_HR_Payroll", recordId, updates);
}

function deleteEmployee(recordId) {
  return deleteHrRecord_("Sub_HR_Employees", recordId);
}

function deleteAttendanceRecord(recordId) {
  return deleteHrRecord_("Sub_HR_Attendance", recordId);
}

function deleteLeaveRequest(recordId) {
  return deleteHrRecord_("Sub_HR_Leave_Requests", recordId);
}

function deleteLeaveRecord(recordId) {
  return deleteHrRecord_("Sub_HR_Leave", recordId);
}

function deleteAdvanceRecord(recordId) {
  return deleteHrRecord_("Sub_HR_Advances", recordId);
}

function deleteDeductionRecord(recordId) {
  return deleteHrRecord_("Sub_HR_Deductions", recordId);
}

function deletePayrollRecord(recordId) {
  return deleteHrRecord_("Sub_HR_Payroll", recordId);
}

function renderPaneHeader(paneElement, paneName) {
  if (!paneElement) return;

  const formsRegister =
    (bootstrapData && bootstrapData.forms) || Object.create(null);
  const formEntry = formsRegister?.[paneName];

  // Developer diagnostics
  if (window.console) {
    console.log(`[renderPaneHeader] lookup`, {
      paneName,
      hasForms: Boolean(formsRegister),
      availableForms: Object.keys(formsRegister),
      formEntry,
    });
  }

  const formId = formEntry?.formId;
  if (!formId) return;

  let header = paneElement.querySelector(".pane-header");
  if (!header) {
    header = document.createElement("div");
    header.className = "pane-header";
    paneElement.prepend(header);
  }

  header.dataset.formId = formId;
  header.innerHTML = "";

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.className = "accent-button";
  addButton.textContent = "إضافة جديد";

  // Flexible renderForm handler resolution
  const renderFormHandler =
    (typeof window !== "undefined" && window.renderForm) ||
    (typeof window !== "undefined" &&
      window.app &&
      typeof window.app.renderForm === "function" &&
      window.app.renderForm) ||
    (typeof window !== "undefined" &&
      window.forms &&
      typeof window.forms.renderForm === "function" &&
      window.forms.renderForm);

  if (typeof renderFormHandler === "function") {
    const context =
      (typeof window !== "undefined" && window.app) ||
      (typeof window !== "undefined" && window.forms) ||
      window;
    addButton.addEventListener("click", () =>
      renderFormHandler.call(context, formId, null)
    );
  } else {
    addButton.addEventListener("click", () => {
      console.warn("renderForm handler is not available", {
        formId,
        windowHasRenderForm:
          typeof window !== "undefined" &&
          typeof window.renderForm === "function",
      });
      showToast("ميزة النماذج غير متاحة حالياً.", "warning");
    });
  }

  header.appendChild(addButton);
}

function doGetTabRegister() {
  const FNAME = "doGetTabRegister";
  debugLog(FNAME, "start");
  try {
    const data = getTabRegister();
    debugLog(FNAME, "success", {
      count: Array.isArray(data) ? data.length : 0,
    });
    return sanitizeForClientResponse_(data);
  } catch (err) {
    debugError(FNAME, err);
    throw err;
  }
}

function listRoles() {
  const FNAME = "listRoles";
  debugLog(FNAME, "start");
  const { headers, rows, sheet, sourceName } = loadSheetData_(
    CONFIG.SHEETS.ROLES
  );
  if (!rows.length) {
    debugLog(FNAME, "noData", {
      source: sheet ? sheet.getName() : sourceName || "<none>",
      rows: rows.length,
    });
    return [];
  }
  try {
    debugLog(FNAME, "sheetInfo", {
      sheet: sheet ? sheet.getName() : sourceName || "<unknown>",
      rows: rows.length,
      columns: headers.length,
    });

    const idx = {
      id: findHeaderIndex_(headers, "Role_Id", "RoleID", "ID"),
      title: findHeaderIndex_(headers, "Role_Title", "Title", "Name"),
      desc: findHeaderIndex_(headers, "Description", "Desc"),
      isSystem: findHeaderIndex_(headers, "Is_System", "IsSystem"),
      updatedAt: findHeaderIndex_(headers, "Updated_At", "UpdatedAt"),
    };
    debugLog(FNAME, "headerIndices", idx);

    if (idx.id === -1) {
      debugLog(FNAME, "missingRequiredHeader", { header: "Role_Id" });
      return [];
    }

    const toBool = (value) => isTruthyFlag_(value);
    const roles = rows.map((row) => ({
      roleId: getValueAt_(row, idx.id),
      title: getValueAt_(row, idx.title),
      description: getValueAt_(row, idx.desc),
      isSystem: toBool(getValueAt_(row, idx.isSystem)),
      updatedAt: coerceDate_(getValueAt_(row, idx.updatedAt)),
    }));
    debugLog(FNAME, "loaded", { count: roles.length });
    return roles;
  } catch (err) {
    debugError(FNAME, err);
    throw err;
  }
}

function listPermissions() {
  const FNAME = "listPermissions";
  debugLog(FNAME, "start");
  const { headers, rows, sheet, sourceName } = loadSheetData_(
    CONFIG.SHEETS.PERMS
  );
  if (!rows.length) {
    debugLog(FNAME, "noData", {
      source: sheet ? sheet.getName() : sourceName || "<none>",
      rows: rows.length,
    });
    return [];
  }
  try {
    debugLog(FNAME, "sheetInfo", {
      sheet: sheet ? sheet.getName() : sourceName || "<unknown>",
      rows: rows.length,
      columns: headers.length,
    });

    const idx = {
      key: findHeaderIndex_(headers, "Permission_Key", "Key", "ID"),
      label: findHeaderIndex_(headers, "Permission_Label", "Label", "Name"),
      desc: findHeaderIndex_(headers, "Description", "Desc"),
      category: findHeaderIndex_(headers, "Category"),
      updatedAt: findHeaderIndex_(headers, "Updated_At", "UpdatedAt"),
    };
    debugLog(FNAME, "headerIndices", idx);

    if (idx.key === -1) {
      debugLog(FNAME, "missingRequiredHeader", { header: "Permission_Key" });
      return [];
    }

    const mapped = rows.map((row) => ({
      permissionKey: getValueAt_(row, idx.key),
      label: getValueAt_(row, idx.label),
      description: getValueAt_(row, idx.desc),
      category: getValueAt_(row, idx.category),
      updatedAt: coerceDate_(getValueAt_(row, idx.updatedAt)),
    }));
    debugLog(FNAME, "loaded", { count: mapped.length });
    return mapped;
  } catch (err) {
    debugError(FNAME, err);
    throw err;
  }
}

function listRolePermissions() {
  const FNAME = "listRolePermissions";
  debugLog(FNAME, "start");
  const { headers, rows, sheet, sourceName } = loadSheetData_(
    CONFIG.SHEETS.ROLE_PERMS
  );
  if (!rows.length) {
    debugLog(FNAME, "noData", {
      source: sheet ? sheet.getName() : sourceName || "<none>",
      rows: rows.length,
    });
    return [];
  }
  try {
    debugLog(FNAME, "sheetInfo", {
      sheet: sheet ? sheet.getName() : sourceName || "<unknown>",
      rows: rows.length,
      columns: headers.length,
    });

    const roleOptions = getRoleOptions_();
    const roleLabelMap = roleOptions.reduce((map, entry) => {
      if (entry && entry.value != null) {
        map[String(entry.value)] = entry.label || entry.value;
      }
      return map;
    }, {});
    const permLabelMap = getPermissionLabelMap_();
    const idx = {
      role: findHeaderIndex_(headers, "Role_Id", "Role", "RoleID"),
      permission: findHeaderIndex_(
        headers,
        "Permission_Key",
        "Permission",
        "PermissionID"
      ),
      scope: findHeaderIndex_(headers, "Scope", "Range"),
      allowed: findHeaderIndex_(headers, "Allowed", "IsAllowed", "Allow"),
      updatedAt: findHeaderIndex_(
        headers,
        "Updated_At",
        "UpdatedAt",
        "Modified_At"
      ),
    };
    debugLog(FNAME, "headerIndices", idx);
    if (idx.role === -1 || idx.permission === -1) {
      debugLog(FNAME, "missingRequiredHeader", {
        needed: ["Role_Id", "Permission_Key"],
      });
      return [];
    }

    const toBool = (value) => isTruthyFlag_(value);
    const mapped = rows.map((row) => ({
      roleId: getValueAt_(row, idx.role),
      roleTitle: roleLabelMap[String(getValueAt_(row, idx.role) || "")] || "",
      permissionKey: getValueAt_(row, idx.permission),
      permissionLabel:
        permLabelMap[String(getValueAt_(row, idx.permission) || "")] || "",
      scope: getValueAt_(row, idx.scope),
      allowed: idx.allowed >= 0 ? toBool(row[idx.allowed]) : false,
      updatedAt: coerceDate_(getValueAt_(row, idx.updatedAt)),
    }));
    debugLog(FNAME, "loaded", { count: mapped.length });
    return mapped;
  } catch (err) {
    debugError(FNAME, err);
    throw err;
  }
}

function listUserProperties() {
  const FNAME = "listUserProperties";
  debugLog(FNAME, "start");
  const { headers, rows, sheet, sourceName } = loadSheetData_(
    CONFIG.SHEETS.USER_PROPERTIES
  );
  if (!rows.length) {
    debugLog(FNAME, "noData", {
      source: sheet ? sheet.getName() : sourceName || "<none>",
      rows: rows.length,
    });
    return [];
  }
  try {
    debugLog(FNAME, "sheetInfo", {
      sheet: sheet ? sheet.getName() : sourceName || "<unknown>",
      rows: rows.length,
      columns: headers.length,
    });

    const idx = {
      user: findHeaderIndex_(headers, "User_Id", "UserID"),
      key: findHeaderIndex_(headers, "Property_Key", "Key"),
      value: findHeaderIndex_(headers, "Property_Value", "Value"),
      updatedAt: findHeaderIndex_(headers, "Updated_At", "UpdatedAt"),
      updatedBy: findHeaderIndex_(headers, "Updated_By", "UpdatedBy"),
    };
    debugLog(FNAME, "headerIndices", idx);

    if (idx.user === -1 || idx.key === -1) {
      debugLog(FNAME, "missingRequiredHeader", {
        needed: ["User_Id", "Property_Key"],
      });
      return [];
    }

    const mapped = rows.map((row) => ({
      userId: getValueAt_(row, idx.user),
      key: getValueAt_(row, idx.key),
      value: getValueAt_(row, idx.value),
      updatedAt: coerceDate_(getValueAt_(row, idx.updatedAt)),
      updatedBy: getValueAt_(row, idx.updatedBy),
    }));
    debugLog(FNAME, "loaded", { count: mapped.length });
    return mapped;
  } catch (err) {
    debugError(FNAME, err);
    throw err;
  }
}

function listSessions() {
  const FNAME = "listSessions";
  debugLog(FNAME, "start");
  const sheet = getSheet_(CONFIG.SHEETS.SESSIONS);
  if (!sheet) {
    debugLog(FNAME, "sheetNotFound", { name: CONFIG.SHEETS.SESSIONS });
    return [];
  }
  try {
    const data = sheet.getDataRange().getValues();
    if (!data || data.length < 2) {
      debugLog(FNAME, "noData", { sheet: sheet.getName(), rows: data.length });
      return [];
    }
    const headers = data[0];
    debugLog(FNAME, "sheetInfo", {
      sheet: sheet.getName(),
      rows: data.length,
      columns: headers.length,
    });

    const idx = {
      session: findHeaderIndex_(headers, "Session_Id", "SessionID", "Id"),
      user: findHeaderIndex_(headers, "User_Id", "UserID", "User"),
      actor: findHeaderIndex_(
        headers,
        "Actor_Email",
        "Actor",
        "Actor_User",
        "Created_By",
        "Initiated_By"
      ),
      type: findHeaderIndex_(headers, "Type", "Session_Type", "Category"),
      status: findHeaderIndex_(headers, "Status", "Session_Status", "State"),
      started: findHeaderIndex_(
        headers,
        "Started_At",
        "Start_At",
        "Created_At",
        "CreatedAt",
        "Issued_At"
      ),
      ended: findHeaderIndex_(
        headers,
        "Ended_At",
        "End_At",
        "Revoked_At",
        "Last_Seen",
        "Closed_At"
      ),
    };
    debugLog(FNAME, "headerIndices", idx);
    if (idx.session === -1) {
      debugLog(FNAME, "missingRequiredHeader", { header: "Session_Id" });
      return [];
    }

    const rows = data.slice(1).map((row) => ({
      sessionId: getValueAt_(row, idx.session),
      userId: getValueAt_(row, idx.user),
      actor: getValueAt_(row, idx.actor),
      type: getValueAt_(row, idx.type),
      status: getValueAt_(row, idx.status),
      startedAt: coerceDate_(getValueAt_(row, idx.started)),
      endedAt: coerceDate_(getValueAt_(row, idx.ended)),
    }));
    debugLog(FNAME, "loaded", { count: rows.length });
    return rows;
  } catch (err) {
    debugError(FNAME, err);
    throw err;
  }
}

function getFormWithOptions(formId = "FORM_SYS_AddUser") {
  debugLog("getFormWithOptions", "start", { formId });
  const fields = getDynamicFormStructure(formId);
  const enriched = fields.map((f) => {
    if (
      f.type === "dropdown" &&
      f.sourceSheet === "SYS_Dropdowns" &&
      f.sourceKey
    ) {
      return Object.assign({}, f, { options: getDropdownOptions(f.sourceKey) });
    }
    return f;
  });
  debugLog("getFormWithOptions", "complete", {
    formId,
    fieldCount: enriched.length,
  });
  return enriched;
}

function getAuditLog() {
  const FNAME = "getAuditLog";
  debugLog(FNAME, "start");
  const sheet = getSheet_(CONFIG.SHEETS.AUDIT);
  if (!sheet) {
    debugLog(FNAME, "sheetNotFound", { name: CONFIG.SHEETS.AUDIT });
    return [];
  }

  try {
    const data = sheet.getDataRange().getValues();
    if (!data || data.length < 2) {
      debugLog(FNAME, "noData", { sheet: sheet.getName(), rows: data.length });
      return [];
    }
    const headers = data[0];
    debugLog(FNAME, "sheetInfo", {
      sheet: sheet.getName(),
      rows: data.length,
      columns: headers.length,
    });
    const idx = {
      timestamp: findHeaderIndex_(
        headers,
        "Timestamp",
        "Created_At",
        "CreatedAt",
        "Date"
      ),
      user: findHeaderIndex_(
        headers,
        "User",
        "Actor",
        "Actor_Email",
        "Actor_Id",
        "Created_By"
      ),
      action: findHeaderIndex_(headers, "Action", "Event", "Activity"),
      details: findHeaderIndex_(
        headers,
        "Details",
        "Summary",
        "Message",
        "Payload"
      ),
    };
    debugLog(FNAME, "headerIndices", idx);

    if (idx.timestamp === -1 || idx.user === -1 || idx.action === -1) {
      debugLog(FNAME, "missingRequiredHeaders", {
        needed: ["Timestamp", "User", "Action"],
      });
      return [];
    }

    const rows = data
      .slice(1)
      .map(function (row) {
        const ts = coerceDate_(getValueAt_(row, idx.timestamp));
        return {
          timestamp: ts || null,
          user: getValueAt_(row, idx.user) || "",
          action: getValueAt_(row, idx.action) || "",
          details: getValueAt_(row, idx.details) || "",
        };
      })
      .sort(function (a, b) {
        const ta = a.timestamp ? a.timestamp.getTime() : 0;
        const tb = b.timestamp ? b.timestamp.getTime() : 0;
        return tb - ta;
      });
    debugLog(FNAME, "loaded", { count: rows.length });
    return rows;
  } catch (err) {
    debugError(FNAME, err);
    throw err;
  }
}

function createUser(userData) {
  debugLog("createUser", "start", {
    supplied: sanitizeForLog({
      Full_Name: userData?.Full_Name,
      Username: userData?.Username,
      Email: userData?.Email,
      Department: userData?.Department,
      Role_Id: userData?.Role_Id,
      IsActive: userData?.IsActive,
    }),
  });
  const sh = getSheet_(CONFIG.SHEETS.USERS);
  if (!sh) throw new Error("Users sheet not found");
  const headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  const getCol = (n) => headers.indexOf(n) + 1;

  const rawPassword =
    userData.password || userData.Password || userData.PASSWORD;
  const passwordHash = rawPassword
    ? hashPassword(rawPassword)
    : userData.Password_Hash || "";

  const normalizeBoolean = (value, truthyValues) => {
    if (value === true) return true;
    const text = String(value || "").toLowerCase();
    if (!text) return false;
    const truthy = truthyValues || [
      "true",
      "yes",
      "1",
      "enabled",
      "active",
      "نشط",
      "مفعل",
      "مُفعّل",
      "نعم",
    ];
    return truthy.includes(text);
  };

  const row = new Array(headers.length).fill("");
  const set = (key, val) => {
    const c = getCol(key);
    if (c > 0) row[c - 1] = val;
  };

  const actor = Session.getActiveUser()?.getEmail() || "SYSTEM";
  const now = new Date();

  set("User_Id", userData.User_Id || generateSequentialUserId_());
  set("Full_Name", userData.Full_Name || "");
  set("Username", userData.Username || "");
  set("Email", userData.Email || "");
  set("Job_Title", userData.Job_Title || "");
  set("Department", userData.Department || "");
  set("Role_Id", userData.Role_Id || "");
  set("IsActive", normalizeBoolean(userData.IsActive));
  set("Password_Hash", passwordHash);
  set(
    "MFA_Enabled",
    normalizeBoolean(userData.MFA_Enabled, [
      "true",
      "yes",
      "1",
      "enabled",
      "مفعل",
      "مُفعّل",
    ])
  );
  set("Notes", userData.Notes || "");
  set("Created_At", now);
  set("Created_By", actor);
  set("Updated_At", now);
  set("Updated_By", actor);

  sh.appendRow(row);
  const createdId = row[getCol("User_Id") - 1];
  debugLog("createUser", "success", { userId: createdId });
  logAuditEvent("CREATE_USER", { userId: createdId });
  return { success: true, userId: createdId };
}

function updateUserPassword(userId, newPassword) {
  debugLog("updateUserPassword", "start", { userId });
  if (!userId || !newPassword) throw new Error("Missing userId/password");
  const sh = getSheet_(CONFIG.SHEETS.USERS);
  if (!sh) throw new Error("Users sheet not found");

  const data = sh.getDataRange().getValues();
  const h = data[0];
  const iUser = h.indexOf("User_Id");
  const iHash = h.indexOf("Password_Hash");
  const iUpdAt = h.indexOf("Updated_At");
  const iUpdBy = h.indexOf("Updated_By");
  if (iUser < 0 || iHash < 0) throw new Error("Users headers mismatch");

  const rowIndex = data.slice(1).findIndex((r) => keysEqual_(r[iUser], userId));
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
  debugLog("updateUserPassword", "updated", { userId });
  return { success: true };
}

function toggleUserActive(userId) {
  debugLog("toggleUserActive", "start", { userId });
  if (!userId) throw new Error("Missing userId");
  const sh = getSheet_(CONFIG.SHEETS.USERS);
  if (!sh) throw new Error("Users sheet not found");

  const data = sh.getDataRange().getValues();
  const h = data[0];
  const iUser = h.indexOf("User_Id");
  const iAct = h.indexOf("IsActive");
  const iDisAt = h.indexOf("Disabled_At");
  const iDisBy = h.indexOf("Disabled_By");
  if (iUser < 0 || iAct < 0) throw new Error("Users headers mismatch");

  const idx = data.slice(1).findIndex((r) => keysEqual_(r[iUser], userId));
  if (idx < 0) throw new Error("User not found");

  const row = idx + 2;
  const currentRaw = data[idx + 1][iAct];
  const current =
    currentRaw === true || String(currentRaw).toLowerCase() === "true";
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
  debugLog("toggleUserActive", "updated", { userId, previous: current, next });
  return { success: true, isActive: next };
}

function bulkUpdateUserStatus(userIds = [], makeActive = true) {
  debugLog("bulkUpdateUserStatus", "start", {
    ids: userIds ? userIds.length : 0,
    makeActive,
  });
  if (!Array.isArray(userIds) || userIds.length === 0) {
    return { success: false, message: "No users supplied" };
  }

  const sh = getSheet_(CONFIG.SHEETS.USERS);
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
    const key = normalizeKeyValue_(id);
    if (key) byId.set(key, { row, index: i });
  });

  let updated = 0;
  userIds.forEach((rawId) => {
    const key = normalizeKeyValue_(rawId);
    if (!key || !byId.has(key)) return;
    const entry = byId.get(key);
    const prevRaw = entry.row[idx.isActive];
    const prev = prevRaw === true || String(prevRaw).toLowerCase() === "true";
    if (prev === makeActive) return;
    const rowNumber = entry.index + 2;
    sh.getRange(rowNumber, idx.isActive + 1).setValue(makeActive);
    if (idx.disabledAt >= 0)
      sh.getRange(rowNumber, idx.disabledAt + 1).setValue(
        makeActive ? "" : now
      );
    if (idx.disabledBy >= 0)
      sh.getRange(rowNumber, idx.disabledBy + 1).setValue(
        makeActive ? "" : actor
      );
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

  debugLog("bulkUpdateUserStatus", "complete", { updated, makeActive });
  return { success: true, updated };
}

function bulkAssignRole(userIds = [], roleId) {
  debugLog("bulkAssignRole", "start", {
    ids: userIds ? userIds.length : 0,
    roleId,
  });
  if (!Array.isArray(userIds) || userIds.length === 0) {
    return { success: false, message: "No users supplied" };
  }
  if (!roleId) {
    throw new Error("Role_Id is required");
  }

  const sh = getSheet_(CONFIG.SHEETS.USERS);
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
    const key = normalizeKeyValue_(id);
    if (key) byId.set(key, { row, index: i });
  });

  let updated = 0;
  userIds.forEach((rawId) => {
    const key = normalizeKeyValue_(rawId);
    if (!key || !byId.has(key)) return;
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

  debugLog("bulkAssignRole", "complete", { updated, roleId });
  return { success: true, updated };
}

function exportUsers(filters = {}, format = "csv") {
  debugLog("exportUsers", "start", { format, filters });
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
  const response = {
    format: format || "csv",
    filename,
    mimeType: "text/csv",
    content: csv,
  };
  debugLog("exportUsers", "complete", { rows: data.length, filename });
  return response;
}

function getCurrentUser() {
  debugLog("getCurrentUser", "start");
  const email = Session.getActiveUser().getEmail();
  const sheet = getSheet_(CONFIG.SHEETS.USERS);
  if (!sheet) {
    debugLog("getCurrentUser", "noSheet");
    return null;
  }

  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) {
    debugLog("getCurrentUser", "noRows");
    return null;
  }
  const headers = data[0];
  const emailCol = headers.indexOf("Email");
  if (emailCol === -1) {
    debugLog("getCurrentUser", "noEmailColumn");
    return null;
  }

  let row = data.slice(1).find(function (r) {
    return keysEqual_(r[emailCol], email);
  });
  let usedFallback = false;
  if (!row) {
    const activeIdx = findHeaderIndex_(headers, "IsActive", "Active");
    const roleIdx = findHeaderIndex_(headers, "Role_Id", "Role", "RoleID");
    row = data.slice(1).find(function (r) {
      const isActive = activeIdx < 0 || isTruthyFlag_(r[activeIdx]);
      if (!isActive) return false;
      if (roleIdx < 0) return true;
      return String(r[roleIdx] || "").toLowerCase() === "admin";
    });
    usedFallback = !!row;
  }
  if (!row) {
    debugLog("getCurrentUser", "notFound", { email });
    return null;
  }

  const u = headers.reduce(function (user, header, i) {
    user[header] = row[i];
    return user;
  }, {});
  if (usedFallback) {
    debugLog("getCurrentUser", "fallbackUsed", {
      userId: u.User_Id,
      role: u.Role_Id,
    });
  }
  debugLog("getCurrentUser", "resolved", {
    email,
    userId: u.User_Id,
    role: u.Role_Id,
  });
  return u;
}

function getRolePermissions(roleOrId) {
  const FNAME = "getRolePermissions";
  debugLog(FNAME, "start", { roleOrId });
  try {
    const sh = getSheet_(CONFIG.SHEETS.ROLE_PERMS);
    if (!sh) return [];

    const data = sh.getDataRange().getValues();
    if (!data || data.length < 2) return [];
    const h = data[0];
    const iRole =
      h.indexOf("Role_Id") >= 0 ? h.indexOf("Role_Id") : h.indexOf("Role");
    if (iRole < 0) return [];

    const rows = data
      .slice(1)
      .filter((r) => r[iRole] === roleOrId)
      .map((row) => h.reduce((o, k, i) => ((o[k] = row[i]), o), {}));
    debugLog(FNAME, "resolved", { count: rows.length });
    return rows;
  } catch (error) {
    console.error(
      `[${FNAME}] EXCEPTION: ${error.message} Stack: ${error.stack}`
    );
    debugError(FNAME, error, { roleOrId });
    return [];
  }
}

function getUserById(userId) {
  debugLog("getUserById", "start", { userId });
  const sh = getSheet_(CONFIG.SHEETS.USERS);
  if (!sh) return null;
  const data = sh.getDataRange().getValues();
  if (!data || data.length < 2) return null;
  const h = data[0];
  const i = h.indexOf("User_Id");
  if (i < 0) return null;
  const idx = data.slice(1).findIndex((r) => keysEqual_(r[i], userId));
  if (idx < 0) {
    debugLog("getUserById", "notFound", { userId });
    return null;
  }
  const row = data[idx + 1];
  const result = h.reduce((o, col, i2) => ((o[col] = row[i2]), o), {});
  debugLog("getUserById", "resolved", {
    userId: result.User_Id,
    role: result.Role_Id,
    isActive: result.IsActive,
  });
  return result;
}

function updateUser(userData) {
  debugLog("updateUser", "start", {
    userId: userData && userData.User_Id,
    fields: Object.keys(userData || {}),
  });
  if (!userData || !userData.User_Id) throw new Error("Missing User_Id");
  const sh = getSheet_(CONFIG.SHEETS.USERS);
  if (!sh) throw new Error("Users sheet not found");
  const data = sh.getDataRange().getValues();
  const h = data[0];
  const iId = h.indexOf("User_Id");
  const rIdx = data
    .slice(1)
    .findIndex((r) => keysEqual_(r[iId], userData.User_Id));
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
  debugLog("updateUser", "success", { userId: userData.User_Id });
  logAuditEvent("UPDATE_USER", { userId: userData.User_Id });
  return { success: true };
}

/** ---- UTILITIES ---- */
function generateUserId() {
  const id = generateSequentialUserId_();
  debugLog("generateUserId", "generated", { userId: id });
  return id;
}

function computePasswordHash_(password) {
  const digest = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    password,
    Utilities.Charset.UTF_8
  );
  const hex = digest
    .map(function (b) {
      return ("0" + (b & 0xff).toString(16)).slice(-2);
    })
    .join("");
  const base64 = Utilities.base64Encode(digest);
  return { hex, base64 };
}

function hashPassword(password) {
  if (!password && password !== 0) return "";
  const hashed = computePasswordHash_(String(password));
  return hashed.base64;
}

function verifyPassword_(storedHash, password) {
  // Return false immediately if password or stored hash are missing/invalid
  if (!password && password !== 0) return false;
  const candidate = String(storedHash || "").trim();
  if (!candidate) return false;

  // Compute both hex and base64 hashes for the provided password
  const hashed = computePasswordHash_(String(password));

  // Check if the stored hash matches EITHER the computed Base64 OR the computed Hex (case-insensitive for hex)
  if (candidate === hashed.base64) {
    debugLog("verifyPassword_", "match", { type: "base64" });
    return true; // Match found (Base64)
  }
  if (candidate.toLowerCase() === hashed.hex.toLowerCase()) {
    debugLog("verifyPassword_", "match", { type: "hex" });
    return true; // Match found (Hex)
  }

  // If neither matches, log the failure and return false
  debugLog("verifyPassword_", "noMatch", {
    stored: candidate.substring(0, 10) + "...", // Log only a prefix for security
    computedHex: hashed.hex.substring(0, 10) + "...",
    computedBase64: hashed.base64.substring(0, 10) + "...",
  });
  return false; // No match
}

function logAuditEvent(action, details) {
  const FNAME = "logAuditEvent";
  try {
    const sheet = getSheet_(CONFIG.SHEETS.AUDIT);
    if (!sheet) return false;
    const actor = getActorEmail_();
    const lastCol = sheet.getLastColumn();
    const headers =
      lastCol > 0 ? sheet.getRange(1, 1, 1, lastCol).getValues().flat() : [];
    if (!headers || !headers.length) {
      sheet.appendRow([
        new Date(),
        actor,
        action,
        JSON.stringify(details || {}),
      ]);
      return true;
    }
    const payloadObject =
      details && typeof details === "object"
        ? Object.assign({}, details)
        : null;
    const row = new Array(headers.length).fill("");
    const now = new Date(); // Use a Date object for consistent timestamping
    setRowValue_(
      headers,
      row,
      now,
      "Timestamp",
      "Created_At",
      "CreatedAt",
      "Date"
    );
    setRowValue_(
      headers,
      row,
      actor,
      "User",
      "Actor",
      "Actor_Email",
      "Created_By"
    );
    setRowValue_(headers, row, action, "Action", "Event", "Activity");
    const detailString = (() => {
      if (payloadObject) {
        try {
          return JSON.stringify(payloadObject);
        } catch (err) {
          return String(details);
        }
      }
      if (details == null) return "";
      if (typeof details === "string") return details;
      try {
        return JSON.stringify(details);
      } catch (err) {
        return String(details);
      }
    })();
    setRowValue_(
      headers,
      row,
      detailString,
      "Details",
      "Summary",
      "Message",
      "Payload"
    );
    const entitySource = payloadObject || {};
    setRowValue_(headers, row, entitySource.entity || "", "Entity");
    const entityId =
      entitySource.entityId ||
      entitySource.userId ||
      entitySource.targetId ||
      entitySource.entity_id ||
      "";
    setRowValue_(headers, row, entityId, "Entity_Id", "Target_Id", "EntityID");
    setRowValue_(headers, row, entitySource.scope || "", "Scope");
    setRowValue_(headers, row, entitySource.sheet || "", "Sheet");
    setRowValue_(headers, row, entitySource.userId || "", "User_Id", "UserID");
    setRowValue_(
      headers,
      row,
      entitySource.actorId || "",
      "Actor_Id",
      "ActorID"
    );
    sheet.appendRow(row);
    return true;
  } catch (error) {
    console.error(
      `[${FNAME}] EXCEPTION: ${error.message} Stack: ${error.stack}`
    );
    debugError(FNAME, error, { action });
    return false;
  }
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
  debugLog("upsertUserProperty_", "start", { userId, key });
  if (!userId || !key) return false;
  const sheet = getSheet_(CONFIG.SHEETS.USER_PROPERTIES);
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
    const userMatch = keysEqual_(row[idx.user], userId);
    const keyMatch =
      idx.key >= 0 && String(row[idx.key] || "").toLowerCase() === targetKey;
    return userMatch && keyMatch;
  });

  if (existingIndex >= 0) {
    const rowNumber = existingIndex + 2;
    if (idx.value >= 0)
      sheet.getRange(rowNumber, idx.value + 1).setValue(value);
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
  debugLog("upsertUserProperty_", "upserted", { userId, key });
  return true;
}

function generateSequentialUserId_() {
  debugLog("generateSequentialUserId_", "start");
  const sh = getSheet_(CONFIG.SHEETS.USERS);
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
  const generated = "USR_" + String(next).padStart(5, "0");
  debugLog("generateSequentialUserId_", "generated", { userId: generated });
  return generated;
}

function getNextUserId() {
  const next = generateSequentialUserId_();
  debugLog("getNextUserId", "resolved", { userId: next });
  return next;
}

/** ---- SMALL HELPERS FOR CLIENT FILTERS ---- */
function getDeptAndRoleFilters() {
  debugLog("getDeptAndRoleFilters", "start");
  const { sheet, headers, rows, sourceName } = loadSheetData_(
    CONFIG.SHEETS.USERS,
    CONFIG.SHEETS.USERS_VIEW,
    "PV_SYS_Users_Table"
  );
  if (!sheet && !rows.length) {
    return { departments: [], roles: [], roleOptions: [] };
  }
  if (!rows.length) {
    const fallback = {
      departments: [],
      roles: [],
      roleOptions: getRoleOptions_(),
    };
    debugLog("getDeptAndRoleFilters", "resolved", {
      departments: fallback.departments.length,
      roles: fallback.roles.length,
      roleOptions: fallback.roleOptions.length,
      source: sourceName || "<none>",
    });
    return fallback;
  }
  const h = headers;
  const iDept = findHeaderIndex_(
    h,
    "Department",
    "Dept",
    "Division",
    "القسم",
    "قسم"
  );
  const iRole = findHeaderIndex_(
    h,
    "Role_Id",
    "Role",
    "RoleID",
    "Role Id",
    "الدور",
    "الدور الوظيفي"
  );
  const depts = new Set();
  const roles = new Set();
  rows.forEach((r) => {
    if (iDept >= 0 && r[iDept] != null && r[iDept] !== "") {
      depts.add(String(r[iDept]).trim());
    }
    if (iRole >= 0 && r[iRole] != null && r[iRole] !== "") {
      roles.add(String(r[iRole]).trim());
    }
  });
  const payload = {
    departments: Array.from(depts).sort(),
    roles: Array.from(roles).sort(),
    roleOptions: getRoleOptions_(),
  };
  debugLog("getDeptAndRoleFilters", "resolved", {
    departments: payload.departments.length,
    roles: payload.roles.length,
    roleOptions: payload.roleOptions.length,
    source: sheet ? sheet.getName() : sourceName || "<unknown>",
  });
  return payload;
}

function getRoleOptions_() {
  debugLog("getRoleOptions_", "start");
  const { headers, rows, sheet, sourceName } = loadSheetData_(
    CONFIG.SHEETS.ROLES
  );
  if (!rows.length) {
    debugLog("getRoleOptions_", "noRows", {
      source: sheet ? sheet.getName() : sourceName || "<none>",
    });
    return [];
  }
  const idIdx = headers.indexOf("Role_Id");
  const titleIdx = headers.indexOf("Role_Title");
  const options = rows
    .map((row) => ({
      value: idIdx >= 0 ? row[idIdx] : "",
      label: titleIdx >= 0 ? row[titleIdx] || row[idIdx] : row[idIdx],
    }))
    .filter((opt) => opt.value != null && opt.value !== "");
  debugLog("getRoleOptions_", "resolved", { count: options.length });
  return options;
}

function getRoleOptions() {
  const options = getRoleOptions_();
  debugLog("getRoleOptions", "resolved", { count: options.length });
  return options;
}

function getPermissionLabelMap_() {
  debugLog("getPermissionLabelMap_", "start");
  const sh = getSheet_(CONFIG.SHEETS.PERMS);
  if (!sh) return {};
  const data = sh.getDataRange().getValues();
  if (!data || data.length < 2) return {};
  const headers = data[0];
  const keyIdx = findHeaderIndex_(headers, "Permission_Key", "Key");
  const labelIdx = findHeaderIndex_(
    headers,
    "Permission_Label",
    "Label",
    "Name"
  );
  const map = {};
  data.slice(1).forEach((row) => {
    const key = getValueAt_(row, keyIdx);
    if (!key) return;
    map[String(key)] = getValueAt_(row, labelIdx) || "";
  });
  debugLog("getPermissionLabelMap_", "resolved", {
    count: Object.keys(map).length,
  });
  return map;
}

function assignUserRole(userId, roleId) {
  debugLog("assignUserRole", "start", { userId, roleId });
  if (!userId) throw new Error("User_Id is required");
  if (!roleId) throw new Error("Role_Id is required");
  const result = bulkAssignRole([userId], roleId);
  debugLog("assignUserRole", "success", {
    userId,
    roleId,
    updated: result ? result.updated : 0,
  });
  return result;
}

function softDeleteUser(userId, reason) {
  debugLog("softDeleteUser", "start", { userId, reason });
  if (!userId) throw new Error("User_Id is required");
  const sh = getSheet_(CONFIG.SHEETS.USERS);
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
  const rowIndex = rows.findIndex((row) => keysEqual_(row[idx.id], userId));
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
  debugLog("softDeleteUser", "complete", { userId });
  return { success: true };
}

function startImpersonation(userId) {
  debugLog("startImpersonation", "start", { userId });
  if (!userId) throw new Error("User_Id is required");
  const sheet = getSheet_(CONFIG.SHEETS.SESSIONS);
  if (!sheet) throw new Error("Sessions sheet not found");

  const lastCol = sheet.getLastColumn();
  if (lastCol <= 0) throw new Error("Sessions sheet misconfigured");
  const headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  const row = new Array(headers.length).fill("");
  const sessionId = Utilities.getUuid();
  const actor = getActorEmail_();
  const now = new Date();

  setRowValue_(headers, row, sessionId, "Session_Id", "SessionID", "Id");
  setRowValue_(headers, row, actor, "Actor_Email", "Actor", "Created_By");
  const actorUser = getCurrentUser();
  if (actorUser && actorUser.User_Id) {
    setRowValue_(
      headers,
      row,
      actorUser.User_Id,
      "Actor_User_Id",
      "Actor_User",
      "Actor_Id"
    );
  }
  setRowValue_(headers, row, userId, "User_Id", "UserID", "User");
  setRowValue_(
    headers,
    row,
    "IMPERSONATION",
    "Type",
    "Session_Type",
    "Category"
  );
  setRowValue_(headers, row, "ACTIVE", "Status", "Session_Status", "State");
  setRowValue_(
    headers,
    row,
    now,
    "Started_At",
    "Start_At",
    "Created_At",
    "CreatedAt"
  );
  setRowValue_(headers, row, now, "Created_At", "CreatedAt");
  setRowValue_(headers, row, actor, "Created_By", "Initiated_By");

  sheet.appendRow(row);
  logAuditEvent("IMPERSONATE_START", { userId, sessionId });
  debugLog("startImpersonation", "started", { userId, sessionId });
  return { success: true, sessionId };
}

function getUserProfile(userId) {
  debugLog("getUserProfile", "start", { userId });
  if (!userId) throw new Error("User_Id is required");
  const payload = {
    user: getUserById(userId),
    properties: getUserProperties_(userId),
    documents: getUserDocuments_(userId),
    sessions: getUserSessions_(userId),
    audit: getUserAuditTrail_(userId),
  };
  debugLog("getUserProfile", "resolved", {
    hasUser: !!payload.user,
    propertyCount: payload.properties.length,
    documentCount: payload.documents.length,
    sessionCount: payload.sessions.length,
    auditCount: payload.audit.length,
  });
  return payload;
}

function getUserProperties_(userId) {
  debugLog("getUserProperties_", "start", { userId });
  if (!userId) return [];
  const sheet = getSheet_(CONFIG.SHEETS.USER_PROPERTIES);
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
  const rows = data
    .slice(1)
    .filter((row) => keysEqual_(row[idx.user], userId))
    .map((row) => ({
      key: idx.key >= 0 ? row[idx.key] : "",
      value: idx.value >= 0 ? row[idx.value] : "",
      updatedAt:
        idx.updatedAt >= 0 && row[idx.updatedAt]
          ? new Date(row[idx.updatedAt])
          : null,
      updatedBy: idx.updatedBy >= 0 ? row[idx.updatedBy] : "",
    }));
  debugLog("getUserProperties_", "resolved", { count: rows.length });
  return rows;
}

function getUserDocuments_(userId) {
  debugLog("getUserDocuments_", "start", { userId });
  if (!userId) return [];
  const sheet = getSheet_(CONFIG.SHEETS.DOCUMENTS);
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
  const rows = data
    .slice(1)
    .filter((row) => {
      const entityMatch = idx.entity < 0 || row[idx.entity] === "Users";
      const idMatch = idx.entityId < 0 || keysEqual_(row[idx.entityId], userId);
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
  debugLog("getUserDocuments_", "resolved", { count: rows.length });
  return rows;
}

function getUserSessions_(userId) {
  debugLog("getUserSessions_", "start", { userId });
  if (!userId) return [];
  const sheet = getSheet_(CONFIG.SHEETS.SESSIONS);
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return [];
  const headers = data[0];
  const idx = {
    user: findHeaderIndex_(headers, "User_Id", "UserID", "User"),
    actor: findHeaderIndex_(
      headers,
      "Actor_Email",
      "Actor",
      "Actor_User",
      "Created_By",
      "Initiated_By"
    ),
    sessionId: findHeaderIndex_(headers, "Session_Id", "SessionID", "Id"),
    type: findHeaderIndex_(headers, "Type", "Session_Type", "Category"),
    status: findHeaderIndex_(headers, "Status", "Session_Status", "State"),
    startedAt: findHeaderIndex_(
      headers,
      "Started_At",
      "Start_At",
      "Created_At",
      "CreatedAt",
      "Issued_At"
    ),
    endedAt: findHeaderIndex_(
      headers,
      "Ended_At",
      "End_At",
      "Revoked_At",
      "Last_Seen",
      "Closed_At"
    ),
  };
  if (idx.user < 0) return [];
  const rows = data
    .slice(1)
    .filter((row) => keysEqual_(row[idx.user], userId))
    .map((row) => ({
      sessionId: getValueAt_(row, idx.sessionId),
      actor: getValueAt_(row, idx.actor),
      type: getValueAt_(row, idx.type),
      status: getValueAt_(row, idx.status),
      startedAt: coerceDate_(getValueAt_(row, idx.startedAt)),
      endedAt: coerceDate_(getValueAt_(row, idx.endedAt)),
    }));
  debugLog("getUserSessions_", "resolved", { count: rows.length });
  return rows;
}

function getUserAuditTrail_(userId) {
  debugLog("getUserAuditTrail_", "start", { userId });
  if (!userId) return [];
  const primarySheet = getSheet_(CONFIG.SHEETS.AUDIT_REPORT);
  const sheet = primarySheet || getSheet_(CONFIG.SHEETS.AUDIT);
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
  const rows = data
    .slice(1)
    .filter((row) => {
      if (idx.userId < 0) return true;
      return keysEqual_(row[idx.userId], userId);
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
  debugLog("getUserAuditTrail_", "resolved", { count: rows.length });
  return rows;
}

function applyGlobalErrorHandling_() {
  const globalRef = typeof globalThis !== "undefined" ? globalThis : this;
  if (!globalRef) return;

  const skip = new Set([
    "applyGlobalErrorHandling_",
    "debugLog",
    "debugError",
    "sanitizeForLog",
    "extractSpreadsheetId_",
    "resolveSpreadsheetId_",
    "getSpreadsheet_",
    "getSheet_",
    "getSheetWithFallback_",
    "findHeaderIndex_",
    "getValueAt_",
    "coerceDate_",
    "isTruthyFlag_",
    "setRowValue_",
    "withErrorHandling",
    "safeStringify_",
    "wrapFunctionWithErrorHandling_",
    "getActorEmail_",
    "upsertUserProperty_",
    "generateSequentialUserId_",
    "hashPassword",
    "logAuditEvent",
    "include",
    "generateUserId",
    "doGet",
  ]);

  Object.keys(globalRef).forEach(function (key) {
    if (skip.has(key)) return;
    if (key.endsWith("_")) return;
    const value = globalRef[key];
    if (typeof value !== "function") return;
    if (value && value.__errorWrapped) return;
    const wrapped = wrapFunctionWithErrorHandling_(key, value);
    wrapped.__errorWrapped = true;
    globalRef[key] = wrapped;
  });
}

applyGlobalErrorHandling_();
