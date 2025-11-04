/**
 * ============================================================================
 * NIJJARA ERP - FULL SHEET SETUP SCRIPT
 * This script creates all system, HR, project, and finance sheets with headers
 * and seeds base SYS data. It also includes logic to update the tab register
 * for the dynamic render engine.
 * ============================================================================
 */

const SYSTEM_USER = "SYSTEM";
// !!! IMPORTANT: Set this ID to your actual Google Sheet ID before running !!!
const TARGET_SPREADSHEET_ID = "1Oj7So4c5vBDpvj0pIfDeXz6XxBrY011J4xZwKlSkDzo";
const TARGET_SPREADSHEET_URL = `https://docs.google.com/spreadsheets/d/${TARGET_SPREADSHEET_ID}/edit`;

function exportERPSchemaAndDataToMarkdown() {
  // Get active spreadsheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();

  // Build Markdown content
  var md = "";
  md += "━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
  md += "➊ ERP Schema (Tabs & Headers)\n";
  md += "━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

  // Section 1: Schema
  sheets.forEach(function (sheet, index) {
    var sheetName = sheet.getName();
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    md += "➊." + (index + 1) + " " + sheetName + "\n";
    headers.forEach(function (header) {
      md += " • " + header + "\n";
    });
    md += "\n";
  });

  // Divider
  md += "━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
  md += "➋ ERP Data (All Sheets)\n";
  md += "━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

  // Section 2: Data
  sheets.forEach(function (sheet, index) {
    var sheetName = sheet.getName();
    var data = sheet.getDataRange().getValues();

    md += "➋." + (index + 1) + " " + sheetName + "\n";

    if (data.length > 1) {
      // Print headers
      md += " Headers:\n";
      data[0].forEach(function (header) {
        md += "  • " + header + "\n";
      });

      // Print rows
      md += " Rows:\n";
      for (var r = 1; r < data.length; r++) {
        var rowStr = "  " + r + ") ";
        rowStr += data[r]
          .map(function (cell) {
            return cell !== "" ? cell : "∅"; // ∅ for empty
          })
          .join(" | ");
        md += rowStr + "\n";
      }
    } else {
      md += " (no data rows)\n";
    }

    md += "\n";
  });

  // Generate timestamp for unique filename
  var now = new Date();
  var timestamp = Utilities.formatDate(
    now,
    Session.getScriptTimeZone(),
    "yyyy-MM-dd_HH-mm-ss"
  );
  var fileName = "ERP_Schema_and_Data_" + timestamp + ".md";

  // Create Markdown file in Google Drive
  var file = DriveApp.createFile(fileName, md, MimeType.PLAIN_TEXT);

  Logger.log("ERP Schema & Data exported to Markdown: " + file.getUrl());
}
function getTargetSpreadsheet() {
  const FNAME = "getTargetSpreadsheet";
  try {
    const active = SpreadsheetApp.getActiveSpreadsheet();
    if (active) {
      const activeId = typeof active.getId === "function" ? active.getId() : "";
      debugLog(FNAME, "Active spreadsheet found", { activeId });
      if (!TARGET_SPREADSHEET_ID || activeId === TARGET_SPREADSHEET_ID) {
        debugLog(FNAME, "Using active spreadsheet.");
        return active;
      }
      debugLog(FNAME, "Active spreadsheet ID does not match target ID.", {
        activeId,
        targetId: TARGET_SPREADSHEET_ID,
      });
    }
  } catch (err) {
    debugLog(FNAME, `Active spreadsheet lookup failed: ${err.message || err}`, {
      error: err,
    });
  }

  if (
    TARGET_SPREADSHEET_ID &&
    TARGET_SPREADSHEET_ID !== "YOUR_SPREADSHEET_ID_HERE"
  ) {
    try {
      debugLog(FNAME, "Attempting to open spreadsheet by ID.", {
        targetId: TARGET_SPREADSHEET_ID,
      });
      const ssById = SpreadsheetApp.openById(TARGET_SPREADSHEET_ID);
      debugLog(FNAME, "Successfully opened spreadsheet by ID.");
      return ssById;
    } catch (err) {
      debugLog(
        FNAME,
        `Failed to open spreadsheet by ID: ${err.message || err}`,
        { targetId: TARGET_SPREADSHEET_ID, error: err }
      );
    }
  } else {
    debugLog(FNAME, "TARGET_SPREADSHEET_ID is not set or is placeholder.", {
      targetId: TARGET_SPREADSHEET_ID,
    });
  }

  throw new Error(
    "Unable to resolve target spreadsheet. Set TARGET_SPREADSHEET_ID in Setup.js to the deployment workbook ID."
  );
}

function ensureISODate(date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return new Date().toISOString().split("T")[0];
  }
  return date.toISOString().split("T")[0];
}

function appendRowsIfEmpty(sheet, rows) {
  const FNAME = "appendRowsIfEmpty";
  if (!sheet || !rows || rows.length === 0) {
    debugLog(FNAME, "Skipped: Invalid sheet or empty rows.", {
      sheetName: sheet ? sheet.getName() : "N/A",
      rowCount: rows ? rows.length : 0,
    });
    return;
  }

  try {
    const lastRow = sheet.getLastRow();
    debugLog(FNAME, "Checking sheet status.", {
      sheetName: sheet.getName(),
      lastRow,
    });
    if (lastRow <= 1) {
      sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
      debugLog(FNAME, "Append successful.", {
        sheetName: sheet.getName(),
        appended: rows.length,
      });
    } else {
      debugLog(FNAME, "Skipped: Sheet already has data beyond header.", {
        sheetName: sheet.getName(),
        lastRow,
      });
    }
  } catch (err) {
    debugLog(FNAME, `Error appending rows: ${err.message || err}`, {
      sheetName: sheet.getName(),
      error: err,
    });
  }
}

function appendRowsIfMissing(sheet, rows, keyIndexes) {
  const FNAME = "appendRowsIfMissing";
  if (!sheet || !Array.isArray(rows) || !rows.length) {
    debugLog(FNAME, "Skipped: Invalid sheet or empty rows.", {
      sheetName: sheet ? sheet.getName() : "N/A",
      rowCount: rows ? rows.length : 0,
    });
    return;
  }

  const keys =
    Array.isArray(keyIndexes) && keyIndexes.length ? keyIndexes : null;
  if (!keys) {
    debugLog(
      FNAME,
      "No keyIndexes provided, falling back to appendRowsIfEmpty logic.",
      {
        sheetName: sheet.getName(),
      }
    );
    appendRowsIfEmpty(sheet, rows);
    return;
  }

  try {
    const lastRow = sheet.getLastRow();
    if (lastRow <= 1) {
      debugLog(
        FNAME,
        "Sheet empty or only header, appending all rows via appendRowsIfEmpty.",
        {
          sheetName: sheet.getName(),
        }
      );
      appendRowsIfEmpty(sheet, rows);
      return;
    }

    const width = Math.max(sheet.getLastColumn(), rows[0].length);
    const existingData = sheet.getRange(2, 1, lastRow - 1, width).getValues();
    const existingKeys = new Set();
    debugLog(
      FNAME,
      `Fetched ${existingData.length} existing rows to build keys.`,
      {
        sheetName: sheet.getName(),
      }
    );

    existingData.forEach((row, index) => {
      try {
        const signature = keys
          .map((keyIndex) => String(row[keyIndex] ?? ""))
          .join("||");
        if (signature) {
          existingKeys.add(signature);
        } else {
          debugLog(
            FNAME,
            `Warning: Empty signature generated for existing row index ${index}`,
            {
              sheetName: sheet.getName(),
              rowIndex: index + 2,
            }
          );
        }
      } catch (keyError) {
        debugLog(
          FNAME,
          `Error generating signature for existing row index ${index}: ${
            keyError.message || keyError
          }`,
          {
            sheetName: sheet.getName(),
            rowIndex: index + 2,
            rowData: JSON.stringify(row),
            error: keyError,
          }
        );
      }
    });

    const newRows = [];
    rows.forEach((row, index) => {
      try {
        const signature = keys
          .map((keyIndex) => String(row[keyIndex] ?? ""))
          .join("||");
        if (!signature) {
          debugLog(
            FNAME,
            `Warning: Empty signature generated for input row index ${index}. Skipping.`,
            {
              sheetName: sheet.getName(),
              inputIndex: index,
            }
          );
          return;
        }
        if (!existingKeys.has(signature)) {
          newRows.push(row);
          existingKeys.add(signature);
        }
      } catch (keyError) {
        debugLog(
          FNAME,
          `Error generating signature for input row index ${index}: ${
            keyError.message || keyError
          }`,
          {
            sheetName: sheet.getName(),
            inputIndex: index,
            rowData: JSON.stringify(row),
            error: keyError,
          }
        );
      }
    });

    debugLog(
      FNAME,
      `Found ${newRows.length} new rows to append out of ${rows.length} input rows.`,
      {
        sheetName: sheet.getName(),
      }
    );

    if (!newRows.length) {
      debugLog(FNAME, "No new rows to append.", { sheetName: sheet.getName() });
      return;
    }

    sheet
      .getRange(lastRow + 1, 1, newRows.length, rows[0].length)
      .setValues(newRows);
    debugLog(FNAME, "Append successful.", {
      sheetName: sheet.getName(),
      appended: newRows.length,
      startRow: lastRow + 1,
    });
  } catch (err) {
    debugLog(FNAME, `Error processing rows: ${err.message || err}`, {
      sheetName: sheet.getName(),
      error: err,
    });
  }
}

function createOrClearSheet(ss, name, headers) {
  const FNAME = "createOrClearSheet";
  debugLog(FNAME, "Processing sheet.", { sheetName: name });
  let sh = ss.getSheetByName(name);
  try {
    if (!sh) {
      debugLog(FNAME, "Sheet not found, creating.", { sheetName: name });
      sh = ss.insertSheet(name);
      logSetupAction(
        "CREATE_SHEET",
        name,
        name,
        "Created missing sheet during setup."
      );
    } else {
      debugLog(FNAME, "Sheet found, clearing content.", { sheetName: name });
      sh.clearContents();
      logSetupAction(
        "CLEAR_SHEET",
        name,
        name,
        "Cleared sheet content during setup."
      );
    }

    if (headers && headers.length > 0) {
      debugLog(FNAME, `Setting ${headers.length} headers.`, {
        sheetName: name,
        headers,
      });
      sh.getRange(1, 1, 1, headers.length)
        .setValues([headers])
        .setFontWeight("bold")
        .setBackground("#E0E0E0");
    } else {
      debugLog(FNAME, "Warning: No headers provided.", { sheetName: name });
    }
    return sh;
  } catch (err) {
    debugLog(FNAME, `Error processing sheet: ${err.message || err}`, {
      sheetName: name,
      error: err,
    });
    throw err;
  }
}

function ensureSheetsAvailable(ss, sheetNames, contextLabel) {
  const FNAME = "ensureSheetsAvailable";
  if (!ss || !Array.isArray(sheetNames) || !sheetNames.length) {
    debugLog(FNAME, "Skipped: Invalid spreadsheet or sheetNames array.", {
      contextLabel,
    });
    return false;
  }

  const allSheetNames = new Set(ss.getSheets().map((sheet) => sheet.getName()));
  const missing = sheetNames.filter((name) => !allSheetNames.has(name));

  if (missing.length) {
    debugLog(
      FNAME,
      `⚠️ ${contextLabel} seeding/operation skipped; missing sheet(s): ${missing.join(
        ", "
      )}`,
      {
        missingSheets: missing,
      }
    );
    return false;
  }

  debugLog(FNAME, `All required sheets available for ${contextLabel}.`, {
    requiredSheets: sheetNames,
  });
  return true;
}

function columnToLetter(columnNumber) {
  let column = Number(columnNumber) || 0;
  if (column <= 0) return "A";
  let letter = "";
  while (column > 0) {
    const remainder = ((column - 1) % 26) + 65;
    letter = String.fromCharCode(remainder) + letter;
    column = Math.floor((column - 1) / 26);
  }
  return letter;
}

function applyFormulaToViewSheet(sheet, formula) {
  const FNAME = "applyFormulaToViewSheet";
  if (!sheet) {
    debugLog(FNAME, "Skipped: Invalid sheet object.", { formula });
    return;
  }
  const sheetName = sheet.getName();
  debugLog(FNAME, "Applying formula.", { sheetName, formula });
  try {
    const maxRows = sheet.getMaxRows();
    if (maxRows > 1) {
      debugLog(FNAME, "Clearing content from row 2 down.", {
        sheetName,
        maxRows,
      });
      sheet.getRange(2, 1, maxRows - 1, sheet.getMaxColumns()).clearContent();
    }
    sheet.getRange("A2").setFormula(formula);
    debugLog(FNAME, "Formula applied successfully.", { sheetName });
  } catch (err) {
    debugLog(FNAME, `Error applying formula: ${err.message || err}`, {
      sheetName,
      formula,
      error: err,
    });
  }
}

function debugLog(functionName, message, details = {}) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    function: functionName,
    message,
    ...details,
  };
  Logger.log(JSON.stringify(logEntry, null, 2));
}

/** ---------- SCHEMA ---------- **/
function getSheetSchemas() {
  const schemas = {
    // ================== SYSTEM ==================
    SYS_Settings: [
      "Setting_Key",
      "Setting_Value",
      "Description_EN",
      "Updated_By",
      "Updated_At",
      "Created_At",
      "Filter_Options",
    ],
    SYS_Audit_Report: [
      "Audit_Id",
      "Entity",
      "Entity_Id",
      "Action",
      "Actor_Id",
      "Summary",
      "Details",
      "Scope",
      "Created_At",
    ],
    SYS_Documents: [
      "Doc_ID",
      "Entity",
      "Entity_ID",
      "File_Name",
      "Label",
      "Drive_File_ID",
      "Drive_URL",
      "Uploaded_By",
      "Created_At",
    ],
    SYS_Profile_View: [
      "View_ID",
      "Tab_ID",
      "Tab_Name",
      "Section_Header",
      "Mode",
      "Source_Sheet",
      "Where_Column",
      "Field_Column",
      "Field_Label",
      "Format",
      "Sort",
      "Role_ID",
    ],
    SYS_Tab_Register: [
      "Record_Type",
      "Tab_ID",
      "Tab_Label_EN",
      "Tab_Label_AR",
      "Sub_ID",
      "Sub_Label_EN",
      "Sub_Label_AR",
      "Route",
      "Sort_Order",
      "Source_Sheet",
      "Render_Mode",
      "Add_Form_ID",
      "View_Label",
      "Add_Label",
      "Permissions",
      "Tab_Color",
      "Search_Bar",
      "Filter_Options",
      "Edit_Form_ID",
    ],
    SYS_Dropdowns: [
      "Key",
      "English_Title",
      "Arabic_Title",
      "Is_Active",
      "Sort_Order",
    ],
    SYS_Dynamic_Forms: [
      "Form_ID",
      "Form_Title",
      "Tab_ID",
      "Tab_Name",
      "Section_Header",
      "Field_ID",
      "Field_Label",
      "Field_Type",
      "Source_Sheet",
      "Source_Range",
      "Mandatory",
      "Default_Value",
      "Dropdown_Key",
      "Target_Sheet",
      "Target_Column",
      "Role_ID",
      "Show",
      "Quick_Actions",
    ],
    SYS_Users: [
      "User_Id",
      "Full_Name",
      "Username",
      "Email",
      "Job_Title",
      "Department",
      "Role_Id",
      "IsActive",
      "Disabled_At",
      "Disabled_By",
      "Password_Hash",
      "Last_Login",
      "Created_At",
      "Created_By",
      "Updated_At",
      "Updated_By",
      "External_Id",
      "MFA_Enabled",
      "Notes",
    ],
    SYS_Roles: [
      "Role_Id",
      "Role_Title",
      "Description",
      "Is_System",
      "Created_At",
      "Created_By",
      "Updated_At",
      "Updated_By",
    ],
    SYS_Permissions: [
      "Permission_Key",
      "Permission_Label",
      "Description",
      "Category",
      "Created_At",
      "Created_By",
      "Updated_At",
      "Updated_By",
    ],
    SYS_Role_Permissions: [
      "Role_Id",
      "Permission_Key",
      "Scope",
      "Allowed",
      "Constraints",
      "Created_At",
      "Created_By",
      "Updated_At",
      "Updated_By",
    ],
    SYS_Audit_Log: [
      "Timestamp",
      "User",
      "Action",
      "Details",
      "Entity",
      "Entity_Id",
      "Scope",
      "Sheet",
      "Target_Id",
      "Actor_Id",
    ],
    SYS_Sessions: [
      "Session_Id",
      "User_Id",
      "Actor_Email",
      "Actor_User_Id",
      "Type",
      "Status",
      "Device",
      "Ip_Address",
      "Auth_Token",
      "Started_At",
      "Ended_At",
      "Created_At",
      "Created_By",
      "Last_Seen",
      "Revoked_At",
      "Revoked_By",
      "Metadata",
    ],
    SYS_User_Properties: [
      "User_Id",
      "Property_Key",
      "Property_Value",
      "Created_At",
      "Created_By",
      "Updated_At",
      "Updated_By",
    ],
    PV_SYS_Users_Table: [
      "User_Id",
      "Full_Name",
      "Username",
      "Email",
      "Department",
      "Role_Id",
      "IsActive",
      "Job_Title",
      "Last_Login",
      "Updated_At",
    ],
    SYS_PubHolidays: ["Pub_Holiday_Date", "Pub_Holiday_Name"],

    // ================== HR MODULE ==================
    HR_Departments: [
      "Dept_Code",
      "Dept_Name_EN",
      "Dept_Name_AR",
      "Is_Active",
      "Sort_Order",
      "Created_At",
      "Created_By",
    ],
    HR_Employees: [
      "Employee_ID",
      "Full_Name_EN",
      "Full_Name_AR",
      "Date_of_Birth",
      "Gender",
      "National_ID",
      "Marital_Status",
      "Military_Status",
      "Mobile_Main",
      "Mobile_Sub",
      "Home_Address",
      "Email",
      "Emergency_Contact",
      "Relation",
      "EC_Mobile",
      "Job_Title",
      "Department",
      "Hire_Date",
      "Contract_Type",
      "Status",
      "Basic_Salary",
      "Allowances",
      "Deductions",
      "Created_At",
      "Created_By",
    ],
    HR_Attendance: [
      "Attendance_ID",
      "Employee_ID",
      "Date",
      "Check_In",
      "Check_Out",
      "Hours",
      "OT_Minutes",
      "OT_Amount",
      "Late_Minutes",
      "EarlyLeave_Minutes",
      "Overtime_Minutes",
      "Notes",
      "Status",
      "Created_At",
      "Created_By",
    ],
    HR_Leave_Requests: [
      "Leave_ID",
      "Employee_ID",
      "Leave_Type",
      "Start_Date",
      "End_Date",
      "Days_Count",
      "Days",
      "Approver",
      "Reason",
      "Notes",
      "Status",
      "Created_At",
      "Created_By",
    ],
    HR_Absence_Deductions: [
      "Absence_ID",
      "Employee_ID",
      "Absence_Date",
      "Absence_Type",
      "Duration",
      "Deduction_Amount",
      "Reason",
      "Status",
      "Entry_Date",
      "Entered_By",
    ],
    HR_Leave: [
      "Leave_ID",
      "Emp_ID",
      "Leave_Type",
      "Start_Date",
      "End_Date",
      "Days_Count",
      "Status",
      "Notes",
    ],
    HR_Leave_Analysis: [
      "Employee_ID",
      "Full_Name",
      "Annual_Leave_Count",
      "Sick_Leave_Count",
      "Emergency_Leave_Count",
      "Total_Leave_Days",
      "_",
    ],
    HR_Advances: [
      "Advance_ID",
      "Employee_ID",
      "Issue_Date",
      "Amount",
      "Settlement_Period",
      "Advance_Installment",
      "Notes",
      "Status",
      "Created_At",
    ],
    HR_OverTime: [
      "OverTime_ID",
      "Employee_ID",
      "Date",
      "OT_WorkDay",
      "OT_WorkDay_Amount",
      "OT_WeekEnd",
      "OT_WeekEnd_Amount",
      "OT_Public_Holiday",
      "OT_Public_Holiday_Amount",
      "Total_OT_Amount",
      "Created_At",
    ],
    HR_Penalties: [
      "Penalty_ID",
      "Penalty_Name",
      "Penalty_Rule",
      "Notes",
      "Created_At",
    ],
    HR_Deductions: [
      "Deduction_ID",
      "Penalty_ID",
      "Employee_ID",
      "Date",
      "Deduction_Amount",
      "Created_At",
    ],
    HR_Payroll: [
      "Payroll_ID",
      "Employee_ID",
      "Start_Date",
      "End_Date",
      "Basic_Salary",
      "Total_OT_Amount",
      "Advance_Installment",
      "Deduction_Amount",
      "Net_Pay",
      "Status",
      "Created_At",
    ],
    HR_KPIs: ["Metric", "Value", "Notes"],

    // ================== PROJECTS ==================
    PRJ_Main: [
      "Project_ID",
      "Project_Name",
      "Client_ID",
      "Client_Name",
      "Contract_ID",
      "Start_Date",
      "Planned_Days",
      "Planned_End_Date",
      "End_Date",
      "Status",
      "Project_Type",
      "Project_Priority",
      "Notes",
      "Proj_Budget",
      "Budget",
      "Total_Pay_Received",
      "Total_Pay_Pending",
      "Planned_Material_Expense",
      "Actual_Material_Expense",
      "Planned_Materials",
      "Actual_Materials",
      "Manager",
      "Created_At",
      "Created_By",
    ],
    PRJ_Tasks: [
      "Task_ID",
      "Project_ID",
      "Task_Name",
      "Task_Priority",
      "Assignee_ID",
      "Planned_Start",
      "Planned_End",
      "Actual_Start",
      "Actual_End",
      "Status",
      "Created_At",
      "Created_By",
    ],
    PRJ_Costs: [
      "Cost_ID",
      "Project_ID",
      "Date",
      "Category",
      "Description",
      "Amount",
      "Created_At",
      "Created_By",
    ],
    PRJ_Clients: [
      "Client_ID",
      "Client_Name",
      "Client_Mobile_1",
      "Client_Mobile_2",
      "Client_Email",
      "Created_At",
    ],
    PRJ_Materials: [
      "Material_ID",
      "Name_AR",
      "Name_EN",
      "Category",
      "Subcategory",
      "Sub2",
      "Default_Unit",
      "Default_Price",
      "VAT_Rate",
      "Active",
      "Updated_At",
      "Updated_By",
    ],
    PV_PRJ_Materials: [
      "Material_ID",
      "Name_AR",
      "Name_EN",
      "Category",
      "Subcategory",
      "Default_Unit",
      "Default_Price",
      "VAT_Rate",
      "Active",
      "Updated_At",
      "Updated_By",
    ],
    PV_PRJ_Main: [
      "معرّف المشروع",
      "اسم المشروع",
      "العميل",
      "تاريخ البدء",
      "الأيام المخططة",
      "تاريخ الانتهاء المخطط",
      "تاريخ الانتهاء الفعلي",
      "حالة المشروع",
      "نوع المشروع",
      "أولوية المشروع",
      "الميزانية",
      "التكلفة الفعلية",
      "الفرق عن الميزانية",
      "نسبة التقدم",
      "ملاحظات",
      "مدير المشروع",
    ],
    PV_PRJ_Costs: [
      "معرّف المشروع",
      "اسم المشروع",
      "تاريخ التكلفة",
      "فئة التكلفة",
      "الوصف",
      "المبلغ",
      "أنشئ بواسطة",
      "تاريخ الإنشاء",
    ],
    PRJ_InDirExp_Allocations: [
      "Allocation_ID",
      "InDirExpense_Repeated_ID",
      "InDirExpense_Once_ID",
      "Project_ID",
      "Allocation_Method",
      "Allocation_Percentage",
      "Allocation_Amount",
      "Created_At",
    ],
    PRJ_Schedule_Calc: [
      "Project_ID",
      "Project_Name",
      "Start_Date",
      "Planned_Days",
      "Planned_End_Date",
      "Schedule_Flag",
    ],
    PRJ_Dashboard: [
      "Project_ID",
      "Project_Name",
      "Start_Date",
      "Planned_End_Date",
      "Status",
      "Actual_Material_Expense",
      "Total_Ind_Expense",
      "Total_Pay_Received",
      "Proj_Budget",
      "Profit",
      "Schedule_Flag",
      "Cost_Flag",
    ],
    PRJ_KPIs: ["Metric", "Value", "Notes"],

    // ================== FINANCE ==================
    FIN_DirectExpenses: [
      "Expense_ID",
      "Project_ID",
      "Date",
      "Category",
      "Level_1",
      "Level_2",
      "Unit",
      "Qty",
      "Unit_Price",
      "Amount",
      "VAT_Rate",
      "VAT_Amount",
      "Total_With_VAT",
      "Material_ID",
      "Material_Name",
      "Pay_Status",
      "Pay_Method",
      "Notes",
      "Created_At",
      "Created_By",
      "Updated_At",
      "Updated_By",
    ],
    PV_FIN_DirectExpenses_View: [
      "Expense_ID",
      "Expense_Date",
      "Project_ID",
      "Project_Name",
      "Category",
      "Level_1",
      "Level_2",
      "Material_ID",
      "Material_Name",
      "Quantity",
      "Unit",
      "Unit_Price",
      "Amount",
      "VAT_Rate",
      "VAT_Amount",
      "Total_With_VAT",
      "Payment_Status",
      "Payment_Method",
      "Notes",
      "Created_By",
      "Created_At",
      "Updated_By",
      "Updated_At",
    ],
    PV_FIN_InDirExpense_Repeated_View: [
      "Expense_ID",
      "Expense_Name",
      "Category",
      "Frequency",
      "Start_Date",
      "End_Date",
      "Next_Pay_Date",
      "Amount",
      "Paid_By",
      "Payment_Status",
      "Payment_Method",
      "Allocation_Method",
      "Notes",
      "Created_At",
      "Updated_At",
    ],
    PV_FIN_InDirExpense_Once_View: [
      "Expense_ID",
      "Expense_Name",
      "Category",
      "Expense_Date",
      "Amount",
      "Paid_By",
      "Payment_Status",
      "Payment_Method",
      "Allocation_Method",
      "Useful_Life_Months",
      "Depreciation_Start_Date",
      "Notes",
      "Created_At",
      "Updated_At",
    ],
    FIN_InDirExpense_Repeated: [
      "InDirExpense_Repeated_ID",
      "Expense_Name",
      "Category",
      "Frequency",
      "Start_Date",
      "End_Date",
      "Next_Pay_Date",
      "Amount",
      "Paid_By",
      "Pay_Status",
      "Pay_Method",
      "Allocation_Method",
      "Notes",
      "Created_At",
      "Created_By",
      "Updated_At",
    ],
    FIN_InDirExpense_Once: [
      "InDirExpense_Once_ID",
      "Expense_Name",
      "Category",
      "Expense_Date",
      "Amount",
      "Paid_By",
      "Pay_Status",
      "Pay_Method",
      "Allocation_Method",
      "Useful_Life_Months",
      "Depreciation_Start_Date",
      "Notes",
      "Created_At",
      "Created_By",
      "Updated_At",
    ],
    FIN_Project_Revenue: [
      "Revenue_ID",
      "Project_ID",
      "Revenue_Date",
      "Amount",
      "Revenue_Type",
      "Source",
      "Description",
      "Pay_Method",
      "Invoice_Number",
      "Pay_Status",
      "Created_At",
      "Created_By",
      "Updated_At",
    ],
    PV_FIN_Project_Revenue_View: [
      "Revenue_ID",
      "Project_ID",
      "Project_Name",
      "Revenue_Date",
      "Amount",
      "Revenue_Type",
      "Source",
      "Description",
      "Payment_Method",
      "Invoice_Number",
      "Payment_Status",
      "Created_By",
      "Created_At",
      "Updated_At",
    ],
    FIN_Revenues: [
      "Revenue_ID",
      "Revenue_Type",
      "Revenue_Date",
      "Amount",
      "Source",
      "Description",
      "Pay_Method",
      "Pay_Status",
      "Client_ID",
      "Project_ID",
      "Reference",
      "Notes",
      "Created_At",
      "Created_By",
      "Updated_At",
    ],
    PV_FIN_Revenues_View: [
      "Revenue_ID",
      "Revenue_Date",
      "Revenue_Type",
      "Amount",
      "Source",
      "Description",
      "Payment_Method",
      "Payment_Status",
      "Client_ID",
      "Client_Name",
      "Project_ID",
      "Project_Name",
      "Reference",
      "Notes",
      "Created_By",
      "Created_At",
      "Updated_At",
    ],
    FIN_Journal: [
      "Journal_ID",
      "Journal_Date",
      "Account",
      "Counterparty_Account",
      "Debit_Amount",
      "Credit_Amount",
      "Project_ID",
      "Description",
      "Reference",
      "Created_At",
      "Created_By",
      "Updated_At",
    ],
    PV_FIN_Journal_View: [
      "Journal_ID",
      "Journal_Date",
      "Account",
      "Counterparty_Account",
      "Debit_Amount",
      "Credit_Amount",
      "Project_ID",
      "Description",
      "Reference",
      "Created_By",
      "Created_At",
      "Updated_At",
    ],
    FIN_Custody: [
      "Custody_ID",
      "Employee_ID",
      "Employee_Name",
      "Issue_Date",
      "Return_Due_Date",
      "Amount",
      "Purpose",
      "Status",
      "Notes",
      "Created_At",
      "Created_By",
      "Updated_At",
    ],
    PV_FIN_Custody_View: [
      "Custody_ID",
      "Employee_ID",
      "Employee_Name",
      "Issue_Date",
      "Return_Due_Date",
      "Amount",
      "Purpose",
      "Status",
      "Notes",
      "Created_By",
      "Created_At",
      "Updated_At",
    ],
    FIN_GL_Totals: [
      "Account",
      "Debit_Total",
      "Credit_Total",
      "Balance",
      "Last_Updated",
    ],
    PV_FIN_GL_Totals_View: [
      "Account",
      "Debit_Total",
      "Credit_Total",
      "Balance",
      "Last_Updated",
    ],
    FIN_KPIs: ["Metric", "Value", "Notes"],
  };
  const baseToPvMap = {
    PRJ_Main: "PV_PRJ_Main",
    PRJ_Tasks: "PV_PRJ_Tasks",
    PRJ_Costs: "PV_PRJ_Costs",
    PRJ_Clients: "PV_PRJ_Clients",
    PRJ_Schedule_Calc: "PV_PRJ_Schedule_Calc",
    PRJ_Dashboard: "PV_PRJ_Dashboard",
    PRJ_KPIs: "PV_PRJ_KPIs",
    PRJ_InDirExp_Allocations: "PV_PRJ_InDirExp_Allocations",
    PRJ_Materials: "PV_PRJ_Materials",
    FIN_DirectExpenses: "PV_FIN_DirectExpenses_View",
    FIN_InDirExpense_Repeated: "PV_FIN_InDirExpense_Repeated_View",
    FIN_InDirExpense_Once: "PV_FIN_InDirExpense_Once_View",
    FIN_Project_Revenue: "PV_FIN_Project_Revenue_View",
    FIN_Revenues: "PV_FIN_Revenues_View",
    FIN_Journal: "PV_FIN_Journal_View",
    FIN_Custody: "PV_FIN_Custody_View",
    FIN_GL_Totals: "PV_FIN_GL_Totals_View",
    FIN_KPIs: "PV_FIN_KPIs",
    HR_Employees: "PV_HR_Employees",
    HR_Departments: "PV_HR_Departments",
    HR_Attendance: "PV_HR_Attendance",
    HR_Leave: "PV_HR_Leave",
    HR_Leave_Requests: "PV_HR_Leave_Requests",
    HR_Advances: "PV_HR_Advances",
    HR_Deductions: "PV_HR_Deductions",
    HR_Payroll: "PV_HR_Payroll",
    SYS_Users: "PV_SYS_Users_Table",
    FIN_InDirExpense_Repeated_View: "PV_FIN_InDirExpense_Repeated_View",
    FIN_InDirExpense_Once_View: "PV_FIN_InDirExpense_Once_View",
    FIN_Project_Revenue_View: "PV_FIN_Project_Revenue_View",
    FIN_Revenues_View: "PV_FIN_Revenues_View",
    FIN_Journal_View: "PV_FIN_Journal_View",
    FIN_Custody_View: "PV_FIN_Custody_View",
    FIN_GL_Totals_View: "PV_FIN_GL_Totals_View",
    FIN_DirectExpenses_View: "PV_FIN_DirectExpenses_View",
  };

  for (const baseName in baseToPvMap) {
    const pvName = baseToPvMap[baseName];
    if (!schemas[pvName] && schemas[baseName]) {
      schemas[pvName] = Array.isArray(schemas[baseName])
        ? schemas[baseName].slice()
        : [];
      debugLog(
        "getSheetSchemas",
        `Copied schema from ${baseName} to ${pvName} as it was missing.`
      );
    } else if (!schemas[pvName] && !schemas[baseName]) {
      debugLog(
        "getSheetSchemas",
        `Warning: Both ${baseName} and ${pvName} schemas are missing.`
      );
    }
  }

  return schemas;
}

/** ---------- SEED DATA ---------- **/
function seedSysSettings(ss) {
  const FNAME = "seedSysSettings";
  const sh = ss.getSheetByName("SYS_Settings");
  if (!sh) {
    debugLog(FNAME, "Skipped: Sheet SYS_Settings not found.");
    return;
  }
  const now = new Date();
  const rows = [
    ["APP_NAME", "Nijjara_ERP", "Application name", SYSTEM_USER, now, now],
    ["DEFAULT_CURRENCY", "EGP", "Default currency", SYSTEM_USER, now, now],
    [
      "BOOTSTRAP_TIMESTAMP",
      now.toISOString(),
      "Boot timestamp",
      SYSTEM_USER,
      now,
      now,
    ],
  ];
  debugLog(FNAME, "Attempting to seed settings.");
  appendRowsIfEmpty(sh, rows);
}

function seedSysTabRegister(ss) {
  const FNAME = "seedSysTabRegister";
  const sh = ss.getSheetByName("SYS_Tab_Register");
  if (!sh) {
    debugLog(FNAME, "Skipped: Sheet SYS_Tab_Register not found.");
    return;
  }
  const rows = [
    [
      "TAB",
      "Tab_SYS_Management",
      "System Management",
      "إدارة النظام",
      "",
      "",
      "",
      "/sys",
      1,
      "SYS_Settings",
      "",
      "",
      "",
      "",
      "SYS_VIEW_USERS",
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "",
      "",
      "Sub_SYS_Overview",
      "Overview",
      "نظرة عامة",
      "/sys/overview",
      1,
      "SYS_Profile_View",
      "",
      "",
      "",
      "",
      "SYS_VIEW_USERS",
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "",
      "",
      "Sub_SYS_Users",
      "Users",
      "المستخدمون",
      "/sys/users",
      2,
      "PV_SYS_Users_Table",
      "",
      "",
      "",
      "",
      "SYS_VIEW_USERS",
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "",
      "",
      "Sub_SYS_Roles",
      "Roles",
      "الأدوار",
      "/sys/roles",
      3,
      "SYS_Roles",
      "",
      "",
      "",
      "",
      "SYS_VIEW_USERS",
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "",
      "",
      "Sub_SYS_Permissions",
      "Permissions",
      "الأذونات",
      "/sys/permissions",
      4,
      "SYS_Permissions",
      "",
      "",
      "",
      "",
      "SYS_VIEW_USERS",
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "",
      "",
      "Sub_SYS_RolePerms",
      "Role Permissions",
      "تعيين أذونات الأدوار",
      "/sys/role-perms",
      5,
      "SYS_Role_Permissions",
      "",
      "",
      "",
      "",
      "SYS_VIEW_USERS",
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "",
      "",
      "Sub_SYS_Properties",
      "User Properties",
      "خصائص المستخدم",
      "/sys/properties",
      6,
      "SYS_User_Properties",
      "",
      "",
      "",
      "",
      "SYS_VIEW_USERS",
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "",
      "",
      "Sub_SYS_Sessions",
      "Sessions",
      "الجلسات",
      "/sys/sessions",
      7,
      "SYS_Sessions",
      "",
      "",
      "",
      "",
      "SYS_VIEW_USERS",
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "",
      "",
      "Sub_SYS_Audit",
      "Audit Logs",
      "سجل التدقيق",
      "/sys/audit",
      8,
      "SYS_Audit_Log",
      "",
      "",
      "",
      "",
      "SYS_VIEW_USERS",
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "",
      "",
      "Sub_SYS_Settings",
      "Settings",
      "الإعدادات",
      "/sys/settings",
      9,
      "SYS_Settings",
      "",
      "",
      "",
      "",
      "SYS_VIEW_USERS",
    ],

    [
      "TAB",
      "Tab_HR_Management",
      "Human Resources (HR)",
      "الموارد البشرية",
      "",
      "",
      "",
      "/hr",
      20,
      "HR_Employees",
      "",
      "",
      "",
      "",
      "HR_VIEW_EMPLOYEES",
    ],
    [
      "SUB",
      "Tab_HR_Management",
      "",
      "",
      "Sub_HR_KPIs",
      "KPIs",
      "مؤشرات الأداء",
      "/hr/kpis",
      1,
      "HR_KPIs",
      "",
      "",
      "",
      "",
      "HR_VIEW_EMPLOYEES",
    ],
    [
      "SUB",
      "Tab_HR_Management",
      "",
      "",
      "Sub_HR_Employees",
      "Employees",
      "الموظفون",
      "/hr/employees",
      2,
      "PV_HR_Employees",
      "",
      "",
      "",
      "",
      "HR_VIEW_EMPLOYEES",
    ],
    [
      "SUB",
      "Tab_HR_Management",
      "",
      "",
      "Sub_HR_Attendance",
      "Attendance",
      "الحضور والانصراف",
      "/hr/attendance",
      3,
      "HR_Attendance",
      "",
      "",
      "",
      "",
      "HR_VIEW_EMPLOYEES",
    ],
    [
      "SUB",
      "Tab_HR_Management",
      "",
      "",
      "Sub_HR_LeaveReqs",
      "Leave Requests",
      "طلبات الإجازة",
      "/hr/leave-reqs",
      4,
      "HR_Leave_Requests",
      "",
      "",
      "",
      "",
      "HR_VIEW_EMPLOYEES",
    ],
    [
      "SUB",
      "Tab_HR_Management",
      "",
      "",
      "Sub_HR_Absence",
      "Absence Deductions",
      "خصومات الغياب",
      "/hr/absence",
      5,
      "HR_Absence_Deductions",
      "",
      "",
      "",
      "",
      "HR_VIEW_EMPLOYEES",
    ],
    [
      "SUB",
      "Tab_HR_Management",
      "",
      "",
      "Sub_HR_Payroll",
      "Payroll",
      "الرواتب",
      "/hr/payroll",
      6,
      "HR_Payroll",
      "",
      "",
      "",
      "",
      "HR_VIEW_EMPLOYEES",
    ],
    [
      "SUB",
      "Tab_HR_Management",
      "",
      "",
      "Sub_HR_Advances",
      "Advances",
      "السلف",
      "/hr/advances",
      7,
      "HR_Advances",
      "",
      "",
      "",
      "",
      "HR_VIEW_EMPLOYEES",
    ],
    [
      "SUB",
      "Tab_HR_Management",
      "",
      "",
      "Sub_HR_Overtime",
      "Overtime",
      "الوقت الإضافي",
      "/hr/overtime",
      8,
      "HR_OverTime",
      "",
      "",
      "",
      "",
      "HR_VIEW_EMPLOYEES",
    ],
    [
      "SUB",
      "Tab_HR_Management",
      "",
      "",
      "Sub_HR_Penalties",
      "Penalties & Deductions",
      "الجزاءات والخصومات",
      "/hr/penalties",
      9,
      "HR_Deductions",
      "",
      "",
      "",
      "",
      "HR_VIEW_EMPLOYEES",
    ],
    [
      "SUB",
      "Tab_HR_Management",
      "",
      "",
      "Sub_HR_Depts",
      "Departments",
      "الأقسام",
      "/hr/depts",
      10,
      "HR_Departments",
      "",
      "",
      "",
      "",
      "HR_VIEW_EMPLOYEES",
    ],
    [
      "SUB",
      "Tab_HR_Management",
      "",
      "",
      "Sub_HR_LeaveAnalysis",
      "Leave Analysis",
      "تحليل الإجازات",
      "/hr/leave-analysis",
      11,
      "HR_Leave_Analysis",
      "",
      "",
      "",
      "",
      "HR_VIEW_EMPLOYEES",
    ],
    [
      "SUB",
      "Tab_HR_Management",
      "",
      "",
      "Sub_HR_Holidays",
      "Public Holidays",
      "العطلات الرسمية",
      "/hr/holidays",
      12,
      "SYS_PubHolidays",
      "",
      "",
      "",
      "",
      "HR_VIEW_EMPLOYEES",
    ],

    [
      "TAB",
      "Tab_PRJ_Management",
      "Projects",
      "المشاريع",
      "",
      "",
      "",
      "/prj",
      30,
      "PRJ_Main",
      "",
      "",
      "",
      "",
      "PRJ_VIEW_PROJECTS",
    ],
    [
      "SUB",
      "Tab_PRJ_Management",
      "",
      "",
      "Sub_PRJ_KPIs",
      "KPIs",
      "مؤشرات الأداء",
      "/prj/kpis",
      1,
      "PRJ_KPIs",
      "",
      "",
      "",
      "",
      "PRJ_VIEW_PROJECTS",
    ],
    [
      "SUB",
      "Tab_PRJ_Management",
      "",
      "",
      "Sub_PRJ_List",
      "Project List",
      "قائمة المشاريع",
      "/prj/list",
      2,
      "PV_PRJ_Main",
      "",
      "",
      "",
      "",
      "PRJ_VIEW_PROJECTS",
    ],
    [
      "SUB",
      "Tab_PRJ_Management",
      "",
      "",
      "Sub_PRJ_Tasks",
      "Tasks",
      "المهام",
      "/prj/tasks",
      3,
      "PV_PRJ_Tasks",
      "",
      "",
      "",
      "",
      "PRJ_VIEW_PROJECTS",
    ],
    [
      "SUB",
      "Tab_PRJ_Management",
      "",
      "",
      "Sub_PRJ_Clients",
      "Clients",
      "العملاء",
      "/prj/clients",
      4,
      "PV_PRJ_Clients",
      "",
      "",
      "",
      "",
      "PRJ_VIEW_PROJECTS",
    ],
    [
      "SUB",
      "Tab_PRJ_Management",
      "",
      "",
      "Sub_PRJ_Materials",
      "Materials",
      "المواد",
      "/prj/materials",
      5,
      "PV_PRJ_Materials",
      "",
      "",
      "",
      "",
      "PRJ_VIEW_PROJECTS",
    ],
    [
      "SUB",
      "Tab_PRJ_Management",
      "",
      "",
      "Sub_PRJ_Schedule",
      "Schedule Calculation",
      "حساب الجدول الزمني",
      "/prj/schedule",
      6,
      "PV_PRJ_Schedule_Calc",
      "",
      "",
      "",
      "",
      "PRJ_VIEW_PROJECTS",
    ],
    [
      "SUB",
      "Tab_PRJ_Management",
      "",
      "",
      "Sub_PRJ_Dashboard",
      "Dashboard",
      "لوحة المتابعة",
      "/prj/dashboard",
      7,
      "PRJ_Dashboard",
      "",
      "",
      "",
      "",
      "PRJ_VIEW_PROJECTS",
    ],
    [
      "SUB",
      "Tab_PRJ_Management",
      "",
      "",
      "Sub_PRJ_Allocations",
      "Indirect Expense Allocations",
      "توزيع المصروفات غير المباشرة",
      "/prj/allocations",
      8,
      "PV_PRJ_InDirExp_Allocations",
      "",
      "",
      "",
      "",
      "PRJ_VIEW_PROJECTS",
    ],

    [
      "TAB",
      "Tab_FIN_Management",
      "Finance",
      "المالية",
      "",
      "",
      "",
      "/fin",
      40,
      "FIN_Journal",
      "",
      "",
      "",
      "",
      "FIN_VIEW_REPORTS",
    ],
    [
      "SUB",
      "Tab_FIN_Management",
      "",
      "",
      "Sub_FIN_KPIs",
      "KPIs",
      "مؤشرات الأداء",
      "/fin/kpis",
      1,
      "FIN_KPIs",
      "",
      "",
      "",
      "",
      "FIN_VIEW_REPORTS",
    ],
    [
      "SUB",
      "Tab_FIN_Management",
      "",
      "",
      "Sub_FIN_Direct",
      "Direct Expenses",
      "المصروفات المباشرة",
      "/fin/direct",
      2,
      "PV_FIN_DirectExpenses_View",
      "",
      "",
      "",
      "",
      "FIN_VIEW_REPORTS",
    ],
    [
      "SUB",
      "Tab_FIN_Management",
      "",
      "",
      "Sub_FIN_Indirect_Rep",
      "Indirect Expenses (Repeated)",
      "مصروفات غير مباشرة (متكررة)",
      "/fin/indirect-rep",
      3,
      "FIN_InDirExpense_Repeated",
      "",
      "",
      "",
      "",
      "FIN_VIEW_REPORTS",
    ],
    [
      "SUB",
      "Tab_FIN_Management",
      "",
      "",
      "Sub_FIN_Indirect_Once",
      "Indirect Expenses (Once)",
      "مصروفات غير مباشرة (مرة واحدة)",
      "/fin/indirect-once",
      4,
      "FIN_InDirExpense_Once",
      "",
      "",
      "",
      "",
      "FIN_VIEW_REPORTS",
    ],
    [
      "SUB",
      "Tab_FIN_Management",
      "",
      "",
      "Sub_FIN_PrjRevenue",
      "Project Revenue",
      "إيرادات المشاريع",
      "/fin/prj-revenue",
      5,
      "FIN_Project_Revenue",
      "",
      "",
      "",
      "",
      "FIN_VIEW_REPORTS",
    ],
    [
      "SUB",
      "Tab_FIN_Management",
      "",
      "",
      "Sub_FIN_GenRevenue",
      "General Revenues",
      "الإيرادات العامة",
      "/fin/gen-revenue",
      6,
      "FIN_Revenues",
      "",
      "",
      "",
      "",
      "FIN_VIEW_REPORTS",
    ],
    [
      "SUB",
      "Tab_FIN_Management",
      "",
      "",
      "Sub_FIN_Journal",
      "Journal",
      "قيود اليومية",
      "/fin/journal",
      7,
      "FIN_Journal",
      "",
      "",
      "",
      "",
      "FIN_VIEW_REPORTS",
    ],
    [
      "SUB",
      "Tab_FIN_Management",
      "",
      "",
      "Sub_FIN_Custody",
      "Custody",
      "العهد",
      "/fin/custody",
      8,
      "FIN_Custody",
      "",
      "",
      "",
      "",
      "FIN_VIEW_REPORTS",
    ],
    [
      "SUB",
      "Tab_FIN_Management",
      "",
      "",
      "Sub_FIN_GL",
      "GL Totals",
      "ملخص الأستاذ العام",
      "/fin/gl",
      9,
      "FIN_GL_Totals",
      "",
      "",
      "",
      "",
      "FIN_VIEW_REPORTS",
    ],
  ];
  debugLog(FNAME, "Attempting to seed initial tab register data.");
  appendRowsIfMissing(sh, rows, [0, 1, 4]);
}

function updateTabRegisterRenderLogic(ss) {
  const FNAME = "updateTabRegisterRenderLogic";
  debugLog(
    FNAME,
    "Starting update process for SYS_Tab_Register render logic columns."
  );
  const tabSheet = ss.getSheetByName("SYS_Tab_Register");
  const formSheet = ss.getSheetByName("SYS_Dynamic_Forms");

  if (!tabSheet) {
    debugLog(FNAME, "FAILED: SYS_Tab_Register sheet not found.");
    return;
  }
  if (!formSheet) {
    debugLog(
      FNAME,
      "FAILED: SYS_Dynamic_Forms sheet not found (needed for Add_Form_ID lookup)."
    );
    return;
  }

  try {
    const tabData = tabSheet.getDataRange().getValues();
    const headers = tabData[0];
    const updatedData = [headers];

    const colIdx = {
      recordType: headers.indexOf("Record_Type"),
      subId: headers.indexOf("Sub_ID"),
      subLabelEn: headers.indexOf("Sub_Label_EN"),
      renderMode: headers.indexOf("Render_Mode"),
      addFormId: headers.indexOf("Add_Form_ID"),
      viewLabel: headers.indexOf("View_Label"),
      addLabel: headers.indexOf("Add_Label"),
    };

    for (const key in colIdx) {
      if (colIdx[key] === -1) {
        debugLog(
          FNAME,
          `FAILED: Missing required column in SYS_Tab_Register: ${key}`
        );
        return;
      }
    }
    debugLog(FNAME, "Found required column indices", colIdx);

    const formDefinitions = getDynamicFormDefinitions();
    const formIdLookup = new Map();
    formDefinitions.forEach((formRow) => {
      const formId = formRow[0];
      const associatedSubId = formRow[2];
      if (
        formId &&
        associatedSubId &&
        formId.startsWith("FORM_") &&
        formId.includes("_Add")
      ) {
        if (!formIdLookup.has(associatedSubId)) {
          formIdLookup.set(associatedSubId, formId);
        }
      }
    });
    debugLog(
      FNAME,
      `Built Add_Form_ID lookup map with ${formIdLookup.size} entries.`
    );

    for (let i = 1; i < tabData.length; i++) {
      const row = tabData[i].slice();
      const recordType = row[colIdx.recordType];
      const subId = row[colIdx.subId];
      const subLabelEn = row[colIdx.subLabelEn];

      if (recordType === "SUB") {
        let renderMode = "ViewAdd";
        let addFormId = "";
        let viewLabel = `View ${subLabelEn || "Items"}`;
        let addLabel = `Add ${subLabelEn || "Item"}`;

        if (
          subId.includes("_Overview") ||
          subId.endsWith("_KPIs") ||
          subId.endsWith("_Dashboard")
        ) {
          renderMode = "Dashboard";
          viewLabel = "";
          addLabel = "";
        } else {
          if (formIdLookup.has(subId)) {
            addFormId = formIdLookup.get(subId);
            const matchingFormDef = formDefinitions.find(
              (def) => def[0] === addFormId
            );
            if (matchingFormDef && matchingFormDef[1]) {
              addLabel = matchingFormDef[1];
            }
          } else {
            debugLog(
              FNAME,
              `Warning: Could not find matching 'Add' Form_ID for Sub_ID: ${subId}. Add_Form_ID will be empty.`,
              {
                rowIndex: i + 1,
              }
            );
          }
        }

        row[colIdx.renderMode] = renderMode;
        row[colIdx.addFormId] = addFormId;
        row[colIdx.viewLabel] = viewLabel;
        row[colIdx.addLabel] = addLabel;
      } else {
        row[colIdx.renderMode] = "";
        row[colIdx.addFormId] = "";
        row[colIdx.viewLabel] = "";
        row[colIdx.addLabel] = "";
      }

      updatedData.push(row);
    }

    debugLog(FNAME, "Clearing existing data (keeping header format).");
    if (tabSheet.getLastRow() > 1) {
      tabSheet
        .getRange(2, 1, tabSheet.getLastRow() - 1, headers.length)
        .clearContent();
    }

    if (updatedData.length > 1) {
      const dataToWrite = updatedData.slice(1);
      debugLog(
        FNAME,
        `Writing ${dataToWrite.length} updated rows back to sheet.`
      );
      tabSheet
        .getRange(2, 1, dataToWrite.length, headers.length)
        .setValues(dataToWrite);
    } else {
      debugLog(FNAME, "No data rows to write back after update.");
    }

    logSetupAction(
      "UPDATE_RENDER_LOGIC",
      "SYS_Tab_Register",
      "SYS_Tab_Register",
      `Updated ${updatedData.length - 1} rows with render engine columns.`
    );
    debugLog(FNAME, "Successfully updated SYS_Tab_Register with render logic.");
  } catch (err) {
    debugLog(FNAME, `ERROR during update: ${err.message || err}`, {
      error: err,
      stack: err.stack,
    });
    Logger.log(`ERROR in updateTabRegisterRenderLogic: ${err}`);
  }
}

function seedSysProfileView(ss) {
  const FNAME = "seedSysProfileView";
  const sh = ss.getSheetByName("SYS_Profile_View");
  if (!sh) {
    debugLog(FNAME, "Skipped: Sheet SYS_Profile_View not found.");
    return;
  }
  const rows = [
    [
      "PV_SYS_Overview_TotalUsers",
      "Sub_SYS_Overview",
      "Overview",
      "إحصائيات النظام",
      "Number",
      "SYS_Users",
      "",
      "User_Id",
      "إجمالي المستخدمين",
      "Number",
      1,
      "",
    ],
    [
      "PV_SYS_Overview_Active",
      "Sub_SYS_Overview",
      "Overview",
      "إحصائيات النظام",
      "Number",
      "SYS_Users",
      "IsActive",
      "IsActive",
      "المستخدمون النشطون",
      "Number",
      2,
      "",
    ],
    [
      "PV_SYS_Overview_Roles",
      "Sub_SYS_Overview",
      "Overview",
      "إحصائيات النظام",
      "Number",
      "SYS_Roles",
      "",
      "Role_Id",
      "إجمالي الأدوار",
      "Number",
      3,
      "",
    ],
    [
      "PV_SYS_Users_Table",
      "Sub_SYS_Users",
      "Users",
      "قائمة المستخدمين",
      "Table",
      "SYS_Users",
      "",
      "*",
      "قائمة المستخدمين",
      "Table",
      1,
      "",
    ],
    [
      "PV_SYS_User_Documents",
      "Sub_SYS_Users",
      "Users",
      "مستندات المستخدم",
      "Table",
      "SYS_Documents",
      "Entity_ID",
      "*",
      "مستندات",
      "Table",
      2,
      "",
    ],
  ];
  debugLog(
    FNAME,
    `Attempting to seed ${rows.length} profile view definitions.`
  );
  appendRowsIfMissing(sh, rows, [0]);
}

let dynamicFormCache = null;
function getDynamicFormDefinitions() {
  const FNAME = "getDynamicFormDefinitions";
  if (dynamicFormCache) {
    debugLog(FNAME, "Returning cached form definitions.");
    return dynamicFormCache;
  }
  debugLog(FNAME, "Reading form definitions from SYS_Dynamic_Forms sheet.");

  try {
    const ss = getTargetSpreadsheet();
    const sh = ss.getSheetByName("SYS_Dynamic_Forms");
    if (!sh) {
      debugLog(
        FNAME,
        "SYS_Dynamic_Forms sheet not found, returning empty array."
      );
      return [];
    }

    const data = sh.getDataRange().getValues();
    if (data.length <= 1) {
      debugLog(FNAME, "SYS_Dynamic_Forms sheet has no data rows.");
      return [];
    }

    // Convert sheet data to the expected format
    // Skip header row, return all data rows as arrays
    dynamicFormCache = data.slice(1);
    debugLog(
      FNAME,
      `Read ${dynamicFormCache.length} form definition rows from sheet.`
    );
    return dynamicFormCache;
  } catch (err) {
    debugLog(FNAME, "Error reading from SYS_Dynamic_Forms sheet", err);
    return [];
  }
  return dynamicFormCache;
}

function seedSysDynamicForms(ss) {
  const FNAME = "seedSysDynamicForms";
  const sh = ss.getSheetByName("SYS_Dynamic_Forms");
  if (!sh) {
    debugLog(FNAME, "Skipped: Sheet SYS_Dynamic_Forms not found.");
    return;
  }
  const rows = getDynamicFormDefinitions();
  debugLog(FNAME, `Attempting to seed/update ${rows.length} form definitions.`);
  appendRowsIfMissing(sh, rows, [0, 5]);
}

function seedSysDropdowns(ss) {
  const sh = ss.getSheetByName("SYS_Dropdowns");
  const rows = [
    ["DD_YesNo", "Yes", "نعم", "TRUE", 1],
    ["DD_YesNo", "No", "لا", "TRUE", 2],
    ["DD_Boolean", "True", "صحيح", "TRUE", 1],
    ["DD_Boolean", "False", "خطأ", "TRUE", 2],
    ["DD_User_Status", "Active", "نشط", "TRUE", 1],
    ["DD_User_Status", "Inactive", "غير نشط", "TRUE", 2],
    ["DD_MFA_Status", "Enabled", "مُفعّل", "TRUE", 1],
    ["DD_MFA_Status", "Disabled", "غير مُفعّل", "TRUE", 2],
    ["DD_Permission_Categories", "USERS", "المستخدمون", "TRUE", 1],
    ["DD_Permission_Categories", "SECURITY", "الأمان", "TRUE", 2],
    ["DD_Permission_Categories", "AUDIT", "التدقيق", "TRUE", 3],
    ["DD_Scopes", "GLOBAL", "عالمي", "TRUE", 1],
    ["DD_Scopes", "DEPARTMENT", "الإدارة", "TRUE", 2],
    ["DD_Scopes", "SELF", "ذاتي", "TRUE", 3],
    ["DD_Scopes", "LIMITED", "محدود", "TRUE", 4],
    ["DD_Attachment_Entities", "Users", "المستخدمون", "TRUE", 1],
    ["DD_Attachment_Entities", "Roles", "الأدوار", "TRUE", 2],
    ["DD_Attachment_Entities", "Permissions", "الأذونات", "TRUE", 3],
    ["DD_Attachment_Entities", "Role_Permissions", "أذونات_الأدوار", "TRUE", 4],
    ["DD_Export_Formats", "CSV", "CSV", "TRUE", 1],
    ["DD_Export_Formats", "XLSX", "XLSX", "TRUE", 2],
    ["DD_Export_Formats", "JSON", "JSON", "TRUE", 3],
    ["DD_Payment_Status", "Pending", "قيد الانتظار", "TRUE", 1],
    ["DD_Payment_Status", "Approved", "مقبول", "TRUE", 2],
    ["DD_Payment_Status", "Rejected", "مرفوض", "TRUE", 3],
    ["DD_Payment_Status", "Paid", "مدفوع", "TRUE", 4],
    ["DD_Payment_Status", "Cancelled", "ملغى", "TRUE", 5],
    ["DD_Payment_Method", "Cash", "نقدي", "TRUE", 1],
    ["DD_Payment_Method", "Bank Transfer", "تحويل بنكي", "TRUE", 2],
    ["DD_Payment_Method", "Credit Card", "بطاقة ائتمان", "TRUE", 3],
    ["DD_Payment_Method", "Cheque", "شيك", "TRUE", 4],
    ["DD_Payment_Method", "Mobile Payment", "دفع عبر الجوال", "TRUE", 5],
    ["DD_Expense_Category", "Travel", "سفر", "TRUE", 1],
    ["DD_Expense_Category", "Utilities", "مرافق", "TRUE", 2],
    ["DD_Expense_Category", "Salaries", "رواتب", "TRUE", 3],
    ["DD_Expense_Category", "Office Supplies", "مستلزمات المكتب", "TRUE", 4],
    ["DD_Expense_Category", "Marketing", "تسويق", "TRUE", 5],
    ["DD_Expense_Category", "Maintenance", "صيانة", "TRUE", 6],
    ["DD_Expense_Category", "Rent", "إيجار", "TRUE", 7],
    ["DD_Expense_Category", "Other", "أخرى", "TRUE", 8],
    ["DD_Indirect_Frequency", "Monthly", "شهري", "TRUE", 1],
    ["DD_Indirect_Frequency", "Quarterly", "ربع سنوي", "TRUE", 2],
    ["DD_Indirect_Frequency", "Yearly", "سنوي", "TRUE", 3],
    ["DD_Indirect_Frequency", "One-time", "مرة واحدة", "TRUE", 4],
    ["DD_Revenue_Type", "Project", "مشروع", "TRUE", 1],
    ["DD_Revenue_Type", "General", "عام", "TRUE", 2],
    ["DD_Account", "Assets", "الأصول", "TRUE", 1],
    ["DD_Account", "Liabilities", "الخصوم", "TRUE", 2],
    ["DD_Account", "Equity", "حقوق الملكية", "TRUE", 3],
    ["DD_Account", "Revenue", "الإيرادات", "TRUE", 4],
    ["DD_Account", "Expenses", "المصروفات", "TRUE", 5],
    ["DD_Account", "Cash", "النقد", "TRUE", 6],
    ["DD_Account", "Bank", "البنك", "TRUE", 7],
    ["DD_Custody_Status", "Open", "مفتوحة", "TRUE", 1],
    ["DD_Custody_Status", "Closed", "مغلقة", "TRUE", 2],
    ["DD_Custody_Status", "Overdue", "متأخرة", "TRUE", 3],
    ["DD_Gender", "Male", "ذكر", "TRUE", 1],
    ["DD_Gender", "Female", "أنثى", "TRUE", 2],
    ["DD_Marital_Status", "Single", "أعزب", "TRUE", 1],
    ["DD_Marital_Status", "Married", "متزوج", "TRUE", 2],
    ["DD_Marital_Status", "Divorced", "مطلق", "TRUE", 3],
    ["DD_Marital_Status", "Widowed", "أرمل", "TRUE", 4],
    ["DD_Military_Status", "Completed", "أنهى الخدمة", "TRUE", 1],
    ["DD_Military_Status", "Exempted", "معفى", "TRUE", 2],
    ["DD_Military_Status", "In_Progress", "يؤدي الخدمة", "TRUE", 3],
    ["DD_Military_Status", "Not_Applicable", "غير مطلوب", "TRUE", 4],
    ["DD_Job_Titles", "HR Specialist", "أخصائي موارد بشرية", "TRUE", 1],
    ["DD_Job_Titles", "Accountant", "محاسب", "TRUE", 2],
    ["DD_Job_Titles", "Project Manager", "مدير مشروع", "TRUE", 3],
    ["DD_Job_Titles", "Site Engineer", "مهندس موقع", "TRUE", 4],
    ["DD_Job_Titles", "Procurement Officer", "مسؤول مشتريات", "TRUE", 5],
    ["DD_Job_Titles", "Administrator", "مسؤول إداري", "TRUE", 6],
    ["DD_Contract_Types", "Full_Time", "دوام كامل", "TRUE", 1],
    ["DD_Contract_Types", "Part_Time", "دوام جزئي", "TRUE", 2],
    ["DD_Contract_Types", "Contract", "عقد", "TRUE", 3],
    ["DD_Contract_Types", "Temporary", "مؤقت", "TRUE", 4],
    ["DD_Contract_Types", "Internship", "تدريب", "TRUE", 5],
    ["DD_Employee_Status", "Active", "نشط", "TRUE", 1],
    ["DD_Employee_Status", "Probation", "تحت التجربة", "TRUE", 2],
    ["DD_Employee_Status", "On_Leave", "في إجازة", "TRUE", 3],
    ["DD_Employee_Status", "Terminated", "منتهي الخدمة", "TRUE", 4],
    ["DD_Attendance_Status", "Present", "حاضر", "TRUE", 1],
    ["DD_Attendance_Status", "Absent", "غائب", "TRUE", 2],
    ["DD_Attendance_Status", "Late", "متأخر", "TRUE", 3],
    ["DD_Attendance_Status", "On_Leave", "في إجازة", "TRUE", 4],
    ["DD_Attendance_Status", "Remote", "عمل عن بُعد", "TRUE", 5],
    ["DD_Leave_Types", "Annual", "إجازة سنوية", "TRUE", 1],
    ["DD_Leave_Types", "Sick", "إجازة مرضية", "TRUE", 2],
    ["DD_Leave_Types", "Emergency", "إجازة طارئة", "TRUE", 3],
    ["DD_Leave_Types", "Unpaid", "إجازة بدون راتب", "TRUE", 4],
    ["DD_Leave_Types", "Maternity", "إجازة أمومة", "TRUE", 5],
    ["DD_Leave_Status", "Pending", "قيد المراجعة", "TRUE", 1],
    ["DD_Leave_Status", "Approved", "مقبولة", "TRUE", 2],
    ["DD_Leave_Status", "Rejected", "مرفوضة", "TRUE", 3],
    ["DD_Leave_Status", "Cancelled", "ملغاة", "TRUE", 4],
    ["DD_Advance_Status", "Pending", "قيد الاعتماد", "TRUE", 1],
    ["DD_Advance_Status", "Approved", "معتمدة", "TRUE", 2],
    ["DD_Advance_Status", "Disbursed", "مصروفة", "TRUE", 3],
    ["DD_Advance_Status", "Settled", "مقفلة", "TRUE", 4],
    ["DD_Payroll_Status", "Draft", "مسودة", "TRUE", 1],
    ["DD_Payroll_Status", "Submitted", "قيد المراجعة", "TRUE", 2],
    ["DD_Payroll_Status", "Approved", "معتمد", "TRUE", 3],
    ["DD_Payroll_Status", "Paid", "مدفوع", "TRUE", 4],
  ];

  const deptSheet = ss.getSheetByName("HR_Departments");
  if (deptSheet && deptSheet.getLastRow() > 1) {
    const deptData = deptSheet.getDataRange().getValues();
    const headers = deptData[0];
    const codeIdx = headers.indexOf("Dept_Code");
    const nameEnIdx = headers.indexOf("Dept_Name_EN");
    const nameArIdx = headers.indexOf("Dept_Name_AR");
    deptData.slice(1).forEach((row, index) => {
      const value =
        codeIdx >= 0 && row[codeIdx]
          ? row[codeIdx]
          : nameEnIdx >= 0
          ? row[nameEnIdx]
          : "";
      const labelAr = nameArIdx >= 0 ? row[nameArIdx] : "";
      const labelEn = nameEnIdx >= 0 ? row[nameEnIdx] : value;
      if (value) {
        rows.push([
          "DD_Departments",
          labelEn,
          labelAr || labelEn,
          "TRUE",
          10 + index,
        ]);
      }
    });
  }

  const rolesSheet = ss.getSheetByName("SYS_Roles");
  if (rolesSheet && rolesSheet.getLastRow() > 1) {
    const rolesData = rolesSheet.getDataRange().getValues();
    const headers = rolesData[0];
    const idIdx = headers.indexOf("Role_Id");
    const titleIdx = headers.indexOf("Role_Title");
    rolesData.slice(1).forEach((row, index) => {
      const roleId = idIdx >= 0 ? row[idIdx] : "";
      if (!roleId) return;
      const title = titleIdx >= 0 ? row[titleIdx] : roleId;
      rows.push(["DD_Roles", roleId, title, "TRUE", 20 + index]);
    });
  }

  const employeesSheet = ss.getSheetByName("HR_Employees");
  if (employeesSheet && employeesSheet.getLastRow() > 1) {
    const employeeData = employeesSheet.getDataRange().getValues();
    const headers = employeeData[0];
    const idIdx = headers.indexOf("Employee_ID");
    const nameEnIdx = headers.indexOf("Full_Name_EN");
    const nameArIdx = headers.indexOf("Full_Name_AR");
    employeeData.slice(1).forEach((row, index) => {
      const empId = idIdx >= 0 ? row[idIdx] : "";
      if (!empId) return;
      const nameEn = nameEnIdx >= 0 ? row[nameEnIdx] : empId;
      const nameAr = nameArIdx >= 0 ? row[nameArIdx] : nameEn;
      rows.push(["DD_Employees", empId, nameAr || nameEn, "TRUE", 30 + index]);
    });
  }

  const usersSheet = ss.getSheetByName("SYS_Users");
  if (usersSheet && usersSheet.getLastRow() > 1) {
    const userData = usersSheet.getDataRange().getValues();
    const headers = userData[0];
    const idIdx = headers.indexOf("User_Id");
    const nameIdx = headers.indexOf("Full_Name");
    userData.slice(1).forEach((row, index) => {
      const userId = idIdx >= 0 ? row[idIdx] : "";
      if (!userId) return;
      const label = nameIdx >= 0 ? row[nameIdx] : userId;
      rows.push(["DD_Users", userId, label || userId, "TRUE", 40 + index]);
    });
  }

  const penaltiesSheet = ss.getSheetByName("HR_Penalties");
  if (penaltiesSheet && penaltiesSheet.getLastRow() > 1) {
    const penaltyData = penaltiesSheet.getDataRange().getValues();
    const headers = penaltyData[0];
    const idIdx = headers.indexOf("Penalty_ID");
    const nameIdx = headers.indexOf("Penalty_Name");
    penaltyData.slice(1).forEach((row, index) => {
      const penaltyId = idIdx >= 0 ? row[idIdx] : "";
      if (!penaltyId) return;
      const penaltyName = nameIdx >= 0 ? row[nameIdx] : penaltyId;
      rows.push([
        "DD_Penalties",
        penaltyId,
        penaltyName || penaltyId,
        "TRUE",
        50 + index,
      ]);
    });
  }

  appendRowsIfMissing(sh, rows, [0, 1]);
}

function seedHrDepartments(ss) {
  const sh = ss.getSheetByName("HR_Departments");
  const nowIso = ensureISODate(new Date());
  const rows = [
    ["MGMT", "Management", "الإدارة", "TRUE", 1, nowIso, SYSTEM_USER],
    [
      "HR",
      "Human Resources",
      "الموارد البشرية",
      "TRUE",
      2,
      nowIso,
      SYSTEM_USER,
    ],
    ["FIN", "Finance", "المالية", "TRUE", 3, nowIso, SYSTEM_USER],
    ["PRJ", "Projects", "المشروعات", "TRUE", 4, nowIso, SYSTEM_USER],
  ];
  appendRowsIfEmpty(sh, rows);
}

function seedSysRoles(ss) {
  const sh = ss.getSheetByName("SYS_Roles");
  const nowIso = ensureISODate(new Date());
  const roles = [
    [
      "Admin",
      "Administrator",
      "Full system administrator",
      true,
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "HR_Manager",
      "HR Manager",
      "Manages human resources data",
      false,
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "Manager",
      "Manager",
      "Department manager",
      false,
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "Basic_User",
      "Basic User",
      "General access",
      false,
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "ROLE_Project_Manager",
      "Project Manager",
      "Manage projects",
      false,
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "ROLE_Finance",
      "Finance",
      "Finance operations",
      false,
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "ROLE_Accountant",
      "Accountant",
      "Journal posting",
      false,
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "ROLE_Purchasing",
      "Purchasing",
      "Materials procurement",
      false,
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "ROLE_Sales",
      "Sales",
      "Clients & contracts",
      false,
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "ROLE_HR",
      "HR",
      "Human resources",
      false,
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "ROLE_Payroll",
      "Payroll",
      "Payroll ops",
      false,
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
  ];
  appendRowsIfEmpty(sh, roles);
}

/** ---------- MAIN RUNNER ---------- **/
function setupERPAllSheets() {
  const FNAME = "setupERPAllSheets";
  debugLog(FNAME, "Starting full ERP sheet setup (CREATE/CLEAR).");
  try {
    const ss = getTargetSpreadsheet();
    const schemas = getSheetSchemas();
    Object.keys(schemas).forEach((name) => {
      debugLog(FNAME, `Ensuring sheet: ${name}`);
      createOrClearSheet(ss, name, schemas[name]);
    });
    debugLog(FNAME, "All sheets created/cleared. Seeding core data...");
    seedCoreData(ss);
    debugLog(FNAME, "Applying initial render logic to SYS_Tab_Register...");
    updateTabRegisterRenderLogic(ss);
    Logger.log(
      "✅ Full ERP Setup Completed (Sheets Created/Cleared & Seeded)."
    );
    debugLog(FNAME, "✅ Full ERP Setup Completed.");
  } catch (err) {
    debugLog(FNAME, `ERROR during full setup: ${err.message || err}`, {
      error: err,
      stack: err.stack,
    });
    Logger.log(`ERROR during setupERPAllSheets: ${err}`);
  }
}

/**
 * Audit and seed missing sheets and data in the target spreadsheet.
 * Scans the workbook for every sheet defined in getSheetSchemas() and creates it if missing.
 * Ensures the header row matches the schema definition.
 * After structural audit, calls seedCoreData() and other seeding helpers to populate
 * baseline data (SYS_Tab_Register, SYS_Dynamic_Forms, SYS_Dropdowns, etc.).
 * All create/seed operations are logged via logSetupAction for auditability.
 */
function logSetupAction(action, entity, targetSheet, details) {
  try {
    const ss = getTargetSpreadsheet();
    const logSheet = ss.getSheetByName("SYS_Audit_Log");
    const nowIso = new Date().toISOString();
    // [Timestamp, User, Action, Details, Entity, Entity_Id, Scope, Sheet, Target_Id, Actor_Id]
    logSheet.appendRow([
      nowIso,
      SYSTEM_USER,
      action,
      details,
      entity,
      "",
      "SYSTEM",
      targetSheet,
      "",
      SYSTEM_USER,
    ]);
  } catch (err) {
    Logger.log(`logSetupAction failed: ${err}`);
  }
}

function auditAndSeedERP() {
  const FNAME = "auditAndSeedERP";
  debugLog(FNAME, "Starting ERP Audit & Seed process.");
  try {
    const ss = getTargetSpreadsheet();
    const schemas = getSheetSchemas();
    const created = [];
    const updatedHeaders = [];

    Object.keys(schemas).forEach(function (name) {
      let sheet = ss.getSheetByName(name);
      const headers = schemas[name];
      const headerLength = headers ? headers.length : 0;
      debugLog(FNAME, `Auditing sheet: ${name}`, {
        expectedHeaders: headerLength,
      });

      if (!sheet) {
        debugLog(FNAME, `Sheet missing, creating: ${name}`);
        sheet = ss.insertSheet(name);
        if (headerLength > 0) {
          sheet
            .getRange(1, 1, 1, headerLength)
            .setValues([headers])
            .setFontWeight("bold")
            .setBackground("#E0E0E0");
          debugLog(FNAME, `Set headers for new sheet: ${name}`);
        }
        created.push(name);
        logSetupAction(
          "CREATE_SHEET",
          name,
          name,
          "Created missing sheet during audit."
        );
      } else {
        if (headerLength > 0) {
          const currentHeadersRange = sheet.getRange(
            1,
            1,
            1,
            sheet.getMaxColumns()
          );
          const currentHeaders = currentHeadersRange
            .getValues()[0]
            .filter(String);
          let mismatch = currentHeaders.length !== headerLength;
          if (!mismatch) {
            for (let i = 0; i < headerLength; i++) {
              if (currentHeaders[i] !== headers[i]) {
                mismatch = true;
                break;
              }
            }
          }

          if (mismatch) {
            debugLog(
              FNAME,
              `Header mismatch found for: ${name}. Updating headers.`,
              { expected: headers, actual: currentHeaders }
            );
            sheet.getRange(1, 1, 1, sheet.getMaxColumns()).clearContent();
            sheet
              .getRange(1, 1, 1, headerLength)
              .setValues([headers])
              .setFontWeight("bold")
              .setBackground("#E0E0E0");
            updatedHeaders.push(name);
            logSetupAction(
              "UPDATE_HEADERS",
              name,
              name,
              "Updated header row to match schema during audit."
            );
          } else {
            debugLog(FNAME, `Headers match for: ${name}.`);
          }
        } else {
          debugLog(
            FNAME,
            `No headers defined in schema for: ${name}, skipping header check.`
          );
        }
      }
    });

    debugLog(FNAME, "Auditing complete. Seeding core data if missing...");
    seedCoreData(ss);
    debugLog(FNAME, "Applying render logic update to SYS_Tab_Register...");
    updateTabRegisterRenderLogic(ss);

    Logger.log(
      `✅ Audit and seeding complete. Created: ${
        created.join(", ") || "None"
      }. Updated Headers: ${updatedHeaders.join(", ") || "None"}.`
    );
    debugLog(FNAME, "✅ Audit & Seed process finished.", {
      createdSheets: created,
      updatedHeaders,
    });
    return { created, updatedHeaders };
  } catch (err) {
    debugLog(FNAME, `ERROR during audit & seed: ${err.message || err}`, {
      error: err,
      stack: err.stack,
    });
    Logger.log(`ERROR during auditAndSeedERP: ${err}`);
  }
}

function runFullSystemUpdate() {
  const FNAME = "runFullSystemUpdate";
  Logger.log(`Starting Full System Update via ${FNAME}...`);
  debugLog(FNAME, "Initiating system update sequence.");
  try {
    auditAndSeedERP();
    Logger.log("✅✅✅ Full System Update Completed Successfully! ✅✅✅");
    debugLog(FNAME, "✅ Full System Update sequence finished successfully.");
    SpreadsheetApp.flush();
  } catch (err) {
    Logger.log(`❌❌❌ ERROR during Full System Update: ${err.message || err}`);
    debugLog(FNAME, `❌ Update sequence failed: ${err.message || err}`, {
      error: err,
      stack: err.stack,
    });
  }
}

/** ---------- Seed Admin User ---------- **/
function seedAdminUser(ss) {
  const sh = ss.getSheetByName("SYS_Users");
  const now = new Date();
  const nowIso = ensureISODate(now);

  const username = "mkhoraiby";
  const password = "210388";
  const hashedPassword = Utilities.base64Encode(
    Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, password)
  );

  const adminUser = [
    "USR_00001", // ID
    "Mohamed Sherif Elkhoraiby", // Full_Name
    username, // Username
    "m.elkhoraiby@gmail.com", // Email
    "System Administrator", // Job_Title
    "Management", // Department
    "Admin", // Role_Id
    true, // IsActive
    "",
    "", // Disabled_At, Disabled_By
    hashedPassword, // Password_Hash
    "", // Last_Login
    nowIso, // Created_At
    SYSTEM_USER, // Created_By
    nowIso, // Updated_At
    SYSTEM_USER, // Updated_By
    "", // External_Id
    false, // MFA_Enabled
    "System seeded admin account", // Notes
  ];

  appendRowsIfEmpty(sh, [adminUser]);
  Logger.log("✅ Admin user seeded successfully.");
}

function seedSysUsersView(ss) {
  const src = ss.getSheetByName("SYS_Users");
  const view = ss.getSheetByName("PV_SYS_Users_Table");
  if (!src || !view) return;
  const data = src.getDataRange().getValues();
  if (!data || data.length < 2) return;
  const headers = data[0];
  const idx = {
    id: headers.indexOf("User_Id"),
    fullName: headers.indexOf("Full_Name"),
    username: headers.indexOf("Username"),
    email: headers.indexOf("Email"),
    dept: headers.indexOf("Department"),
    role: headers.indexOf("Role_Id"),
    active: headers.indexOf("IsActive"),
    jobTitle: headers.indexOf("Job_Title"),
    lastLogin: headers.indexOf("Last_Login"),
    updatedAt: headers.indexOf("Updated_At"),
  };
  const rows = data
    .slice(1)
    .map((row) => [
      row[idx.id] || "",
      row[idx.fullName] || "",
      row[idx.username] || "",
      row[idx.email] || "",
      row[idx.dept] || "",
      row[idx.role] || "",
      row[idx.active] || "",
      row[idx.jobTitle] || "",
      row[idx.lastLogin] || "",
      row[idx.updatedAt] || "",
    ]);
  if (!rows.length) return;
  appendRowsIfEmpty(view, rows);
  Logger.log("✅ PV_SYS_Users_Table seeded successfully.");
}
function seedViewFromSource(ss, sourceName, viewName, fieldOrder) {
  const workbook = ss || getTargetSpreadsheet();
  if (!workbook) return;

  const source = workbook.getSheetByName(sourceName);
  const view = workbook.getSheetByName(viewName);
  if (!source || !view) return;
  const data = source.getDataRange().getValues();
  if (!data || data.length < 2) return;
  const headers = data[0];
  let rows = data.slice(1);
  if (Array.isArray(fieldOrder) && fieldOrder.length) {
    const indexes = fieldOrder.map((field) => headers.indexOf(field));
    rows = rows.map((row) => indexes.map((idx) => (idx >= 0 ? row[idx] : "")));
  }
  appendRowsIfEmpty(view, rows);
  Logger.log("✅ " + viewName + " view synced from " + sourceName + ".");
}

function seedProjectViews(ss) {
  seedViewFromSource(ss, "PRJ_Main", "PV_PRJ_Main");
  seedViewFromSource(ss, "PRJ_Tasks", "PV_PRJ_Tasks");
  seedViewFromSource(ss, "PRJ_Costs", "PV_PRJ_Costs");
  seedViewFromSource(ss, "PRJ_Clients", "PV_PRJ_Clients");
  seedViewFromSource(ss, "PRJ_Schedule_Calc", "PV_PRJ_Schedule_Calc");
  seedViewFromSource(ss, "PRJ_Dashboard", "PV_PRJ_Dashboard");
  seedViewFromSource(ss, "PRJ_KPIs", "PV_PRJ_KPIs");
  seedViewFromSource(
    ss,
    "PRJ_InDirExp_Allocations",
    "PV_PRJ_InDirExp_Allocations"
  );
  seedViewFromSource(ss, "FIN_Project_Revenue", "PV_FIN_Project_Revenue");
  seedViewFromSource(ss, "PRJ_Materials", "PV_PRJ_Materials");
}

function seedFinanceViews(ss) {
  seedViewFromSource(ss, "FIN_DirectExpenses", "PV_FIN_DirectExpenses_View", [
    "Expense_ID",
    "Project_ID",
    "Project_Name",
    "Date",
    "Category",
    "Material_ID",
    "Material_Name",
    "Qty",
    "Unit",
    "Unit_Price",
    "Amount",
    "VAT_Rate",
    "VAT_Amount",
    "Total_With_VAT",
    "Pay_Status",
    "Pay_Method",
    "Notes",
    "Created_By",
    "Created_At",
  ]);
  seedViewFromSource(ss, "FIN_Revenues", "PV_FIN_Revenues");
  seedViewFromSource(ss, "FIN_Project_Revenue", "PV_FIN_Project_Revenue");
  seedViewFromSource(ss, "FIN_Journal", "PV_FIN_Journal");
  seedViewFromSource(ss, "FIN_Custody", "PV_FIN_Custody");
  seedViewFromSource(ss, "FIN_GL_Totals", "PV_FIN_GL_Totals");
  seedViewFromSource(ss, "FIN_KPIs", "PV_FIN_KPIs");
  seedViewFromSource(ss, "FIN_InDirExpense_Once", "PV_FIN_InDirExpense_Once");
  seedViewFromSource(
    ss,
    "FIN_InDirExpense_Repeated",
    "PV_FIN_InDirExpense_Repeated"
  );
}

// Internal helper invoked by seedAllModules to refresh PV_HR_* sheets.
function seedHrViews(ss) {
  seedViewFromSource(ss, "HR_Employees", "PV_HR_Employees");
  seedViewFromSource(ss, "HR_Departments", "PV_HR_Departments");
  seedViewFromSource(ss, "HR_Attendance", "PV_HR_Attendance");
  seedViewFromSource(ss, "HR_Leave", "PV_HR_Leave");
  seedViewFromSource(ss, "HR_Leave_Requests", "PV_HR_Leave_Requests");
  seedViewFromSource(ss, "HR_Advances", "PV_HR_Advances");
  seedViewFromSource(ss, "HR_Deductions", "PV_HR_Deductions");
  seedViewFromSource(ss, "HR_Payroll", "PV_HR_Payroll");
}

function seedSysUserProperties(ss) {
  const sh = ss.getSheetByName("SYS_User_Properties");
  if (!sh) return;
  const nowIso = ensureISODate(new Date());
  const rows = [
    [
      "USR_00001",
      "Preferred_Language",
      "ar-EG",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "USR_00001",
      "Timezone",
      "Africa/Cairo",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
  ];
  appendRowsIfEmpty(sh, rows);
  Logger.log("✅ SYS_User_Properties seeded successfully.");
}

function seedSysDocuments(ss) {
  const sh = ss.getSheetByName("SYS_Documents");
  if (!sh) return;
  const nowIso = new Date().toISOString();
  const rows = [
    [
      "DOC_00001",
      "Users",
      "USR_00001",
      "Admin_Profile.pdf",
      "Resume",
      "drive-file-id-001",
      "https://drive.google.com/file/d/drive-file-id-001/view",
      "SYSTEM",
      nowIso,
    ],
  ];
  appendRowsIfEmpty(sh, rows);
  Logger.log("✅ SYS_Documents seeded successfully.");
}

function seedSysSessions(ss) {
  const sh = ss.getSheetByName("SYS_Sessions");
  if (!sh) return;
  const now = new Date();
  const nowIso = now.toISOString();
  const rows = [
    [
      "SESS-0001",
      "USR_00001",
      "m.elkhoraiby@gmail.com",
      "USR_00001",
      "LOGIN",
      "ACTIVE",
      "Chrome on Windows",
      "102.45.12.1",
      "",
      nowIso,
      "",
      nowIso,
      SYSTEM_USER,
      nowIso,
      "",
      "",
      JSON.stringify({ ipGeolocation: "Cairo, EG" }),
    ],
  ];
  appendRowsIfEmpty(sh, rows);
  Logger.log("✅ SYS_Sessions seeded successfully.");
}

function seedSysAuditLog(ss) {
  const sh = ss.getSheetByName("SYS_Audit_Log");
  if (!sh) return;
  const nowIso = new Date().toISOString();
  const rows = [
    [
      nowIso,
      "mkhoraiby",
      "LOGIN",
      "User authenticated via demo portal.",
      "User",
      "USR_00001",
      "SYSTEM",
      "SYS_Users",
      "USR_00001",
      "SYSTEM",
    ],
    [
      nowIso,
      "mkhoraiby",
      "VIEW",
      "Viewed system management dashboard.",
      "Dashboard",
      "SYSTEM_OVERVIEW",
      "SYSTEM",
      "Portal",
      "DASHBOARD",
      "SYSTEM",
    ],
  ];
  appendRowsIfEmpty(sh, rows);
  Logger.log("✅ SYS_Audit_Log seeded successfully.");
}

/** ---------- Seed System Permissions ---------- **/
function seedSysPermissions(ss) {
  const sh = ss.getSheetByName("SYS_Permissions");
  const nowIso = ensureISODate(new Date());

  const permissions = [
    [
      "SYS_VIEW_USERS",
      "View Users",
      "Allows viewing user list",
      "System",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "SYS_EDIT_USERS",
      "Edit Users",
      "Allows editing user info",
      "System",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "SYS_MANAGE_ROLES",
      "Manage Roles",
      "Allows managing roles and permissions",
      "System",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "SYS_VIEW_AUDIT",
      "View Audit Logs",
      "Allows viewing audit log records",
      "System",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "HR_VIEW_EMPLOYEES",
      "View Employees",
      "Allows viewing employee data",
      "HR",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "HR_EDIT_EMPLOYEES",
      "Edit Employees",
      "Allows modifying employee data",
      "HR",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "PRJ_VIEW_PROJECTS",
      "View Projects",
      "Allows viewing project data",
      "Projects",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "PRJ_EDIT_PROJECTS",
      "Edit Projects",
      "Allows editing project records",
      "Projects",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "FIN_VIEW_REPORTS",
      "View Finance Reports",
      "Allows viewing finance dashboards and reports",
      "Finance",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "FIN_EDIT_TRANSACTIONS",
      "Edit Transactions",
      "Allows recording and modifying transactions",
      "Finance",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
  ];

  appendRowsIfEmpty(sh, permissions);
  Logger.log("✅ SYS_Permissions seeded successfully.");
}
/** ---------- Seed Role Permissions ---------- **/
function seedSysRolePermissions(ss) {
  const sh = ss.getSheetByName("SYS_Role_Permissions");
  const nowIso = ensureISODate(new Date());

  const rolePermissions = [
    [
      "Admin",
      "SYS_VIEW_USERS",
      "GLOBAL",
      true,
      "",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "Admin",
      "SYS_EDIT_USERS",
      "GLOBAL",
      true,
      "",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "Admin",
      "SYS_MANAGE_ROLES",
      "GLOBAL",
      true,
      "",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "Admin",
      "SYS_VIEW_AUDIT",
      "GLOBAL",
      true,
      "",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "Admin",
      "HR_VIEW_EMPLOYEES",
      "GLOBAL",
      true,
      "",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "Admin",
      "HR_EDIT_EMPLOYEES",
      "GLOBAL",
      true,
      "",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "Admin",
      "PRJ_VIEW_PROJECTS",
      "GLOBAL",
      true,
      "",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "Admin",
      "PRJ_EDIT_PROJECTS",
      "GLOBAL",
      true,
      "",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "Admin",
      "FIN_VIEW_REPORTS",
      "GLOBAL",
      true,
      "",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
    [
      "Admin",
      "FIN_EDIT_TRANSACTIONS",
      "GLOBAL",
      true,
      "",
      nowIso,
      SYSTEM_USER,
      nowIso,
      SYSTEM_USER,
    ],
  ];

  appendRowsIfEmpty(sh, rolePermissions);
  Logger.log("✅ SYS_Role_Permissions seeded successfully.");
}
function seedCoreData(ss) {
  const FNAME = "seedCoreData";
  debugLog(FNAME, "Starting core data seeding.");
  try {
    const targetSS = ss || getTargetSpreadsheet();

    // DISABLED: These seed functions overwrite the Google Sheets data
    // The sheets now contain the correct data and should be the source of truth
    // seedSysSettings(targetSS);
    // seedSysRoles(targetSS);
    // seedSysPermissions(targetSS);
    // seedSysRolePermissions(targetSS);
    // seedSysDropdowns(targetSS);
    // seedSysTabRegister(targetSS);
    // seedSysDynamicForms(targetSS);
    // seedAdminUser(targetSS);

    // seedSysProfileView(targetSS);
    // seedSysUsersView(targetSS);
    // seedSysUserProperties(targetSS);
    // seedSysDocuments(targetSS);
    // seedSysSessions(targetSS);
    // seedSysAuditLog(targetSS);

    // seedAllModules(targetSS);

    debugLog(
      FNAME,
      "✅ Core data seeding SKIPPED - using sheet-based configuration."
    );
    Logger.log(
      "✅ Core data seeding SKIPPED - sheets are now the source of truth."
    );
  } catch (err) {
    debugLog(FNAME, `ERROR during core data seeding: ${err.message || err}`, {
      error: err,
      stack: err.stack,
    });
    Logger.log(`ERROR in seedCoreData: ${err}`);
  }
}
/**
 * Main seeder function to populate the 'New Project' form definition
 * and all required dropdowns.
 * * This function is idempotent: it will clear old data before adding
 * new data to prevent duplicates.
 *
 * (FIXED: Now safely handles empty 'PRJ_Clients' and 'SYS_Users' sheets)
 */
function seedProjectFormAndDropdowns(ss) {
  const workbook = ss || getTargetSpreadsheet();

  // Get all required sheets
  const formsSheet = workbook.getSheetByName("SYS_Dynamic_Forms");
  const dropsSheet = workbook.getSheetByName("SYS_Dropdowns");
  const clientsSheet = workbook.getSheetByName("PRJ_Clients");
  const usersSheet = workbook.getSheetByName("SYS_Users");
  const projectsSheet = workbook.getSheetByName("PRJ_Main");

  // Safety check to ensure all sheets exist
  if (!formsSheet || !dropsSheet || !clientsSheet || !usersSheet) {
    let missing = [
      !formsSheet ? "SYS_Dynamic_Forms" : null,
      !dropsSheet ? "SYS_Dropdowns" : null,
      !clientsSheet ? "PRJ_Clients" : null,
      !usersSheet ? "SYS_Users" : null,
      !projectsSheet ? "PRJ_Main" : null,
    ]
      .filter(Boolean)
      .join(", ");

    Logger.log(`Error: Missing one or more required sheets: ${missing}.`);
    return;
  }

  Logger.log("All sheets found. Starting seeding process...");

  // --- 1. Clear existing data to prevent duplicates ---
  Logger.log("Clearing old data...");
  // Clear old form definition
  clearOldData(formsSheet, "FORM_PRJ_AddProject", 0); // 0 is the column index for 'Form_ID'
  clearOldData(formsSheet, "FORM_PRJ_AddTask", 0);
  clearOldData(formsSheet, "FORM_PRJ_AddCost", 0);
  clearOldData(formsSheet, "FORM_PRJ_AddRevenue", 0);
  clearOldData(formsSheet, "FORM_PRJ_EditProject", 0);
  clearOldData(formsSheet, "FORM_PRJ_ViewProject", 0);
  clearOldData(formsSheet, "FORM_PRJ_EditTask", 0);
  clearOldData(formsSheet, "FORM_PRJ_ViewTask", 0);

  // Clear old dropdowns
  clearOldData(dropsSheet, "DD_Project_Status", 0); // 0 is the column index for 'Key'
  clearOldData(dropsSheet, "DD_Clients", 0);
  clearOldData(dropsSheet, "DD_Managers", 0);
  clearOldData(dropsSheet, "DD_Projects", 0);
  clearOldData(dropsSheet, "DD_Project_Assignees", 0);
  clearOldData(dropsSheet, "DD_Project_Type", 0);
  clearOldData(dropsSheet, "DD_Project_Priority", 0);
  clearOldData(dropsSheet, "DD_Task_Priority", 0);
  clearOldData(dropsSheet, "DD_Task_Status", 0);
  clearOldData(dropsSheet, "DD_Cost_Categories", 0);

  // --- 2. Define New Form Data for 'FORM_PRJ_AddProject' ---
  // Based on the schema of 'SYS_Dynamic_Forms'
  const newFormData = [
    // [Form_ID, Form_Title, Tab_ID, Tab_Name, Section_Header, Field_ID, Field_Label, Field_Type, Source_Sheet, Source_Range, Mandatory, Default_Value, Dropdown_Key, Target_Sheet, Target_Column, Role_ID]
    [
      "FORM_PRJ_AddProject",
      "إضافة مشروع جديد",
      "Sub_PRJ_Main",
      "المشاريع",
      "بيانات المشروع الأساسية",
      "PRJ_Project_ID",
      "معرّف المشروع",
      "Auto",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Project_ID",
      "",
    ],
    [
      "FORM_PRJ_AddProject",
      "إضافة مشروع جديد",
      "Sub_PRJ_Main",
      "المشاريع",
      "بيانات المشروع الأساسية",
      "PRJ_Project_Name",
      "اسم المشروع",
      "Text",
      "",
      "",
      "Yes",
      "",
      "",
      "PRJ_Main",
      "Project_Name",
      "",
    ],
    [
      "FORM_PRJ_AddProject",
      "إضافة مشروع جديد",
      "Sub_PRJ_Main",
      "المشاريع",
      "بيانات المشروع الأساسية",
      "PRJ_Client_ID",
      "العميل",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "",
      "DD_Clients",
      "PRJ_Main",
      "Client_ID",
      "",
    ],
    [
      "FORM_PRJ_AddProject",
      "إضافة مشروع جديد",
      "Sub_PRJ_Main",
      "المشاريع",
      "بيانات المشروع الأساسية",
      "PRJ_Contract_ID",
      "معرّف العقد",
      "Text",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Contract_ID",
      "",
    ],
    [
      "FORM_PRJ_AddProject",
      "إضافة مشروع جديد",
      "Sub_PRJ_Main",
      "المشاريع",
      "بيانات المشروع الأساسية",
      "PRJ_Status",
      "حالة المشروع",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "New",
      "DD_Project_Status",
      "PRJ_Main",
      "Status",
      "",
    ],
    [
      "FORM_PRJ_AddProject",
      "إضافة مشروع جديد",
      "Sub_PRJ_Main",
      "المشاريع",
      "تصنيف المشروع",
      "PRJ_Project_Type",
      "نوع المشروع",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "No",
      "",
      "DD_Project_Type",
      "PRJ_Main",
      "Project_Type",
      "",
    ],
    [
      "FORM_PRJ_AddProject",
      "إضافة مشروع جديد",
      "Sub_PRJ_Main",
      "المشاريع",
      "تصنيف المشروع",
      "PRJ_Project_Priority",
      "أولوية المشروع",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "No",
      "Medium",
      "DD_Project_Priority",
      "PRJ_Main",
      "Project_Priority",
      "",
    ],
    [
      "FORM_PRJ_AddProject",
      "إضافة مشروع جديد",
      "Sub_PRJ_Main",
      "المشاريع",
      "التواريخ",
      "PRJ_Start_Date",
      "تاريخ البدء",
      "Date",
      "",
      "",
      "Yes",
      "",
      "",
      "PRJ_Main",
      "Start_Date",
      "",
    ],
    [
      "FORM_PRJ_AddProject",
      "إضافة مشروع جديد",
      "Sub_PRJ_Main",
      "المشاريع",
      "التواريخ",
      "PRJ_Planned_Days",
      "الأيام المخططة",
      "Number",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Planned_Days",
      "",
    ],
    [
      "FORM_PRJ_AddProject",
      "إضافة مشروع جديد",
      "Sub_PRJ_Main",
      "المشاريع",
      "التواريخ",
      "PRJ_Planned_End_Date",
      "تاريخ الانتهاء المخطط",
      "Date",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Planned_End_Date",
      "",
    ],
    [
      "FORM_PRJ_AddProject",
      "إضافة مشروع جديد",
      "Sub_PRJ_Main",
      "المشاريع",
      "البيانات المالية",
      "PRJ_Budget",
      "الميزانية",
      "Number",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Budget",
      "",
    ],
    [
      "FORM_PRJ_AddProject",
      "إضافة مشروع جديد",
      "Sub_PRJ_Main",
      "المشاريع",
      "البيانات المالية",
      "PRJ_Planned_Material_Expense",
      "تكلفة المواد المخططة",
      "Number",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Planned_Material_Expense",
      "",
    ],
    [
      "FORM_PRJ_AddProject",
      "إضافة مشروع جديد",
      "Sub_PRJ_Main",
      "المشاريع",
      "الإدارة والملاحظات",
      "PRJ_Manager",
      "مدير المشروع",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "",
      "DD_Managers",
      "PRJ_Main",
      "Manager",
      "",
    ],
    [
      "FORM_PRJ_AddProject",
      "إضافة مشروع جديد",
      "Sub_PRJ_Main",
      "المشاريع",
      "الإدارة والملاحظات",
      "PRJ_Notes",
      "ملاحظات",
      "Paragraph",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Notes",
      "",
    ],
    [
      "FORM_PRJ_AddTask",
      "إضافة مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "البيانات الأساسية",
      "PRJ_Task_ID",
      "معرّف المهمة",
      "Auto",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Tasks",
      "Task_ID",
      "",
    ],
    [
      "FORM_PRJ_AddTask",
      "إضافة مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "البيانات الأساسية",
      "PRJ_Task_Project",
      "المشروع",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "",
      "DD_Projects",
      "PRJ_Tasks",
      "Project_ID",
      "",
    ],
    [
      "FORM_PRJ_AddTask",
      "إضافة مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "البيانات الأساسية",
      "PRJ_Task_Name",
      "اسم المهمة",
      "Text",
      "",
      "",
      "Yes",
      "",
      "",
      "PRJ_Tasks",
      "Task_Name",
      "",
    ],
    [
      "FORM_PRJ_AddTask",
      "إضافة مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "التعيينات",
      "PRJ_Task_Assignee",
      "المسؤول",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "No",
      "",
      "DD_Project_Assignees",
      "PRJ_Tasks",
      "Assignee_ID",
      "",
    ],
    [
      "FORM_PRJ_AddTask",
      "إضافة مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "تصنيف المهمة",
      "PRJ_Task_Priority",
      "أولوية المهمة",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "No",
      "Medium",
      "DD_Task_Priority",
      "PRJ_Tasks",
      "Task_Priority",
      "",
    ],
    [
      "FORM_PRJ_AddTask",
      "إضافة مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "التواريخ",
      "PRJ_Task_PStart",
      "تاريخ البدء المخطط",
      "Date",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Tasks",
      "Planned_Start",
      "",
    ],
    [
      "FORM_PRJ_AddTask",
      "إضافة مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "التواريخ",
      "PRJ_Task_PEnd",
      "تاريخ الانتهاء المخطط",
      "Date",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Tasks",
      "Planned_End",
      "",
    ],
    [
      "FORM_PRJ_AddTask",
      "إضافة مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "الحالة",
      "PRJ_Task_Status",
      "حالة المهمة",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "Not_Started",
      "DD_Task_Status",
      "PRJ_Tasks",
      "Status",
      "",
    ],
    [
      "FORM_PRJ_EditProject",
      "تعديل مشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "بيانات المشروع الأساسية",
      "PRJ_Project_Name",
      "اسم المشروع",
      "Text",
      "",
      "",
      "Yes",
      "",
      "",
      "PRJ_Main",
      "Project_Name",
      "",
    ],
    [
      "FORM_PRJ_EditProject",
      "تعديل مشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "بيانات المشروع الأساسية",
      "PRJ_Client_ID",
      "العميل",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "",
      "DD_Clients",
      "PRJ_Main",
      "Client_ID",
      "",
    ],
    [
      "FORM_PRJ_EditProject",
      "تعديل مشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "بيانات المشروع الأساسية",
      "PRJ_Contract_ID",
      "معرّف العقد",
      "Text",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Contract_ID",
      "",
    ],
    [
      "FORM_PRJ_EditProject",
      "تعديل مشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "الحالة والتصنيف",
      "PRJ_Status",
      "حالة المشروع",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "",
      "DD_Project_Status",
      "PRJ_Main",
      "Status",
      "",
    ],
    [
      "FORM_PRJ_EditProject",
      "تعديل مشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "الحالة والتصنيف",
      "PRJ_Project_Type",
      "نوع المشروع",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "No",
      "",
      "DD_Project_Type",
      "PRJ_Main",
      "Project_Type",
      "",
    ],
    [
      "FORM_PRJ_EditProject",
      "تعديل مشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "الحالة والتصنيف",
      "PRJ_Project_Priority",
      "أولوية المشروع",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "No",
      "",
      "DD_Project_Priority",
      "PRJ_Main",
      "Project_Priority",
      "",
    ],
    [
      "FORM_PRJ_EditProject",
      "تعديل مشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "التواريخ",
      "PRJ_Start_Date",
      "تاريخ البدء",
      "Date",
      "",
      "",
      "Yes",
      "",
      "",
      "PRJ_Main",
      "Start_Date",
      "",
    ],
    [
      "FORM_PRJ_EditProject",
      "تعديل مشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "التواريخ",
      "PRJ_Planned_Days",
      "الأيام المخططة",
      "Number",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Planned_Days",
      "",
    ],
    [
      "FORM_PRJ_EditProject",
      "تعديل مشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "التواريخ",
      "PRJ_Planned_End_Date",
      "تاريخ الانتهاء المخطط",
      "Date",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Planned_End_Date",
      "",
    ],
    [
      "FORM_PRJ_EditProject",
      "تعديل مشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "البيانات المالية",
      "PRJ_Budget",
      "الميزانية",
      "Number",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Budget",
      "",
    ],
    [
      "FORM_PRJ_EditProject",
      "تعديل مشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "البيانات المالية",
      "PRJ_Planned_Material_Expense",
      "تكلفة المواد المخططة",
      "Number",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Planned_Material_Expense",
      "",
    ],
    [
      "FORM_PRJ_EditProject",
      "تعديل مشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "الإدارة والملاحظات",
      "PRJ_Manager",
      "مدير المشروع",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "",
      "DD_Managers",
      "PRJ_Main",
      "Manager",
      "",
    ],
    [
      "FORM_PRJ_EditProject",
      "تعديل مشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "الإدارة والملاحظات",
      "PRJ_Notes",
      "ملاحظات",
      "Paragraph",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Notes",
      "",
    ],
    [
      "FORM_PRJ_ViewProject",
      "عرض تفاصيل المشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "بيانات المشروع الأساسية",
      "PRJ_Project_Name",
      "اسم المشروع",
      "Display",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Project_Name",
      "",
    ],
    [
      "FORM_PRJ_ViewProject",
      "عرض تفاصيل المشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "بيانات المشروع الأساسية",
      "PRJ_Client_ID",
      "العميل",
      "Display",
      "",
      "",
      "No",
      "",
      "DD_Clients",
      "PRJ_Main",
      "Client_ID",
      "",
    ],
    [
      "FORM_PRJ_ViewProject",
      "عرض تفاصيل المشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "بيانات المشروع الأساسية",
      "PRJ_Contract_ID",
      "معرّف العقد",
      "Display",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Contract_ID",
      "",
    ],
    [
      "FORM_PRJ_ViewProject",
      "عرض تفاصيل المشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "الحالة والتصنيف",
      "PRJ_Status",
      "حالة المشروع",
      "Display",
      "",
      "",
      "No",
      "",
      "DD_Project_Status",
      "PRJ_Main",
      "Status",
      "",
    ],
    [
      "FORM_PRJ_ViewProject",
      "عرض تفاصيل المشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "الحالة والتصنيف",
      "PRJ_Project_Type",
      "نوع المشروع",
      "Display",
      "",
      "",
      "No",
      "",
      "DD_Project_Type",
      "PRJ_Main",
      "Project_Type",
      "",
    ],
    [
      "FORM_PRJ_ViewProject",
      "عرض تفاصيل المشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "الحالة والتصنيف",
      "PRJ_Project_Priority",
      "أولوية المشروع",
      "Display",
      "",
      "",
      "No",
      "",
      "DD_Project_Priority",
      "PRJ_Main",
      "Project_Priority",
      "",
    ],
    [
      "FORM_PRJ_ViewProject",
      "عرض تفاصيل المشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "التواريخ",
      "PRJ_Start_Date",
      "تاريخ البدء",
      "Display",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Start_Date",
      "",
    ],
    [
      "FORM_PRJ_ViewProject",
      "عرض تفاصيل المشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "التواريخ",
      "PRJ_Planned_Days",
      "الأيام المخططة",
      "Display",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Planned_Days",
      "",
    ],
    [
      "FORM_PRJ_ViewProject",
      "عرض تفاصيل المشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "التواريخ",
      "PRJ_Planned_End_Date",
      "تاريخ الانتهاء المخطط",
      "Display",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Planned_End_Date",
      "",
    ],
    [
      "FORM_PRJ_ViewProject",
      "عرض تفاصيل المشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "البيانات المالية",
      "PRJ_Budget",
      "الميزانية",
      "Display",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Budget",
      "",
    ],
    [
      "FORM_PRJ_ViewProject",
      "عرض تفاصيل المشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "البيانات المالية",
      "PRJ_Planned_Material_Expense",
      "تكلفة المواد المخططة",
      "Display",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Planned_Material_Expense",
      "",
    ],
    [
      "FORM_PRJ_ViewProject",
      "عرض تفاصيل المشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "الإدارة والملاحظات",
      "PRJ_Manager",
      "مدير المشروع",
      "Display",
      "",
      "",
      "No",
      "",
      "DD_Managers",
      "PRJ_Main",
      "Manager",
      "",
    ],
    [
      "FORM_PRJ_ViewProject",
      "عرض تفاصيل المشروع",
      "Sub_PRJ_Main",
      "المشاريع",
      "الإدارة والملاحظات",
      "PRJ_Notes",
      "ملاحظات",
      "Display",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Main",
      "Notes",
      "",
    ],
    [
      "FORM_PRJ_EditTask",
      "تعديل مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "البيانات الأساسية",
      "PRJ_Task_Name",
      "اسم المهمة",
      "Text",
      "",
      "",
      "Yes",
      "",
      "",
      "PRJ_Tasks",
      "Task_Name",
      "",
    ],
    [
      "FORM_PRJ_EditTask",
      "تعديل مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "البيانات الأساسية",
      "PRJ_Task_Project",
      "المشروع",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "",
      "DD_Projects",
      "PRJ_Tasks",
      "Project_ID",
      "",
    ],
    [
      "FORM_PRJ_EditTask",
      "تعديل مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "تصنيف المهمة",
      "PRJ_Task_Priority",
      "أولوية المهمة",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "No",
      "",
      "DD_Task_Priority",
      "PRJ_Tasks",
      "Task_Priority",
      "",
    ],
    [
      "FORM_PRJ_EditTask",
      "تعديل مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "التعيينات",
      "PRJ_Task_Assignee",
      "المسؤول",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "No",
      "",
      "DD_Project_Assignees",
      "PRJ_Tasks",
      "Assignee_ID",
      "",
    ],
    [
      "FORM_PRJ_EditTask",
      "تعديل مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "التواريخ",
      "PRJ_Task_PStart",
      "تاريخ البدء المخطط",
      "Date",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Tasks",
      "Planned_Start",
      "",
    ],
    [
      "FORM_PRJ_EditTask",
      "تعديل مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "التواريخ",
      "PRJ_Task_PEnd",
      "تاريخ الانتهاء المخطط",
      "Date",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Tasks",
      "Planned_End",
      "",
    ],
    [
      "FORM_PRJ_EditTask",
      "تعديل مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "التواريخ",
      "PRJ_Task_AStart",
      "تاريخ البدء الفعلي",
      "Date",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Tasks",
      "Actual_Start",
      "",
    ],
    [
      "FORM_PRJ_EditTask",
      "تعديل مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "التواريخ",
      "PRJ_Task_AEnd",
      "تاريخ الانتهاء الفعلي",
      "Date",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Tasks",
      "Actual_End",
      "",
    ],
    [
      "FORM_PRJ_EditTask",
      "تعديل مهمة مشروع",
      "Sub_PRJ_Tasks",
      "المهام",
      "الحالة",
      "PRJ_Task_Status",
      "حالة المهمة",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "",
      "DD_Task_Status",
      "PRJ_Tasks",
      "Status",
      "",
    ],
    [
      "FORM_PRJ_ViewTask",
      "عرض تفاصيل المهمة",
      "Sub_PRJ_Tasks",
      "المهام",
      "البيانات الأساسية",
      "PRJ_Task_Name",
      "اسم المهمة",
      "Display",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Tasks",
      "Task_Name",
      "",
    ],
    [
      "FORM_PRJ_ViewTask",
      "عرض تفاصيل المهمة",
      "Sub_PRJ_Tasks",
      "المهام",
      "البيانات الأساسية",
      "PRJ_Task_Project",
      "المشروع",
      "Display",
      "",
      "",
      "No",
      "",
      "DD_Projects",
      "PRJ_Tasks",
      "Project_ID",
      "",
    ],
    [
      "FORM_PRJ_ViewTask",
      "عرض تفاصيل المهمة",
      "Sub_PRJ_Tasks",
      "المهام",
      "تصنيف المهمة",
      "PRJ_Task_Priority",
      "أولوية المهمة",
      "Display",
      "",
      "",
      "No",
      "",
      "DD_Task_Priority",
      "PRJ_Tasks",
      "Task_Priority",
      "",
    ],
    [
      "FORM_PRJ_ViewTask",
      "عرض تفاصيل المهمة",
      "Sub_PRJ_Tasks",
      "المهام",
      "التعيينات",
      "PRJ_Task_Assignee",
      "المسؤول",
      "Display",
      "",
      "",
      "No",
      "",
      "DD_Project_Assignees",
      "PRJ_Tasks",
      "Assignee_ID",
      "",
    ],
    [
      "FORM_PRJ_ViewTask",
      "عرض تفاصيل المهمة",
      "Sub_PRJ_Tasks",
      "المهام",
      "التواريخ",
      "PRJ_Task_PStart",
      "تاريخ البدء المخطط",
      "Display",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Tasks",
      "Planned_Start",
      "",
    ],
    [
      "FORM_PRJ_ViewTask",
      "عرض تفاصيل المهمة",
      "Sub_PRJ_Tasks",
      "المهام",
      "التواريخ",
      "PRJ_Task_PEnd",
      "تاريخ الانتهاء المخطط",
      "Display",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Tasks",
      "Planned_End",
      "",
    ],
    [
      "FORM_PRJ_ViewTask",
      "عرض تفاصيل المهمة",
      "Sub_PRJ_Tasks",
      "المهام",
      "التواريخ",
      "PRJ_Task_AStart",
      "تاريخ البدء الفعلي",
      "Display",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Tasks",
      "Actual_Start",
      "",
    ],
    [
      "FORM_PRJ_ViewTask",
      "عرض تفاصيل المهمة",
      "Sub_PRJ_Tasks",
      "المهام",
      "التواريخ",
      "PRJ_Task_AEnd",
      "تاريخ الانتهاء الفعلي",
      "Display",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Tasks",
      "Actual_End",
      "",
    ],
    [
      "FORM_PRJ_ViewTask",
      "عرض تفاصيل المهمة",
      "Sub_PRJ_Tasks",
      "المهام",
      "الحالة",
      "PRJ_Task_Status",
      "حالة المهمة",
      "Display",
      "",
      "",
      "No",
      "",
      "DD_Task_Status",
      "PRJ_Tasks",
      "Status",
      "",
    ],
    [
      "FORM_PRJ_AddCost",
      "تسجيل تكلفة مشروع",
      "Sub_PRJ_Costs",
      "التكاليف",
      "البيانات الأساسية",
      "PRJ_Cost_ID",
      "معرّف التكلفة",
      "Auto",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Costs",
      "Cost_ID",
      "",
    ],
    [
      "FORM_PRJ_AddCost",
      "تسجيل تكلفة مشروع",
      "Sub_PRJ_Costs",
      "التكاليف",
      "البيانات الأساسية",
      "PRJ_Cost_Project",
      "المشروع",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "",
      "DD_Projects",
      "PRJ_Costs",
      "Project_ID",
      "",
    ],
    [
      "FORM_PRJ_AddCost",
      "تسجيل تكلفة مشروع",
      "Sub_PRJ_Costs",
      "التكاليف",
      "البيانات الأساسية",
      "PRJ_Cost_Date",
      "تاريخ التكلفة",
      "Date",
      "",
      "",
      "Yes",
      "",
      "",
      "PRJ_Costs",
      "Date",
      "",
    ],
    [
      "FORM_PRJ_AddCost",
      "تسجيل تكلفة مشروع",
      "Sub_PRJ_Costs",
      "التكاليف",
      "التصنيف",
      "PRJ_Cost_Category",
      "فئة التكلفة",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "No",
      "",
      "DD_Cost_Categories",
      "PRJ_Costs",
      "Category",
      "",
    ],
    [
      "FORM_PRJ_AddCost",
      "تسجيل تكلفة مشروع",
      "Sub_PRJ_Costs",
      "التكاليف",
      "التفاصيل",
      "PRJ_Cost_Desc",
      "وصف التكلفة",
      "Paragraph",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Costs",
      "Description",
      "",
    ],
    [
      "FORM_PRJ_AddCost",
      "تسجيل تكلفة مشروع",
      "Sub_PRJ_Costs",
      "التكاليف",
      "القيم",
      "PRJ_Cost_Amount",
      "المبلغ",
      "Number",
      "",
      "",
      "Yes",
      "",
      "",
      "PRJ_Costs",
      "Amount",
      "",
    ],
    [
      "FORM_PRJ_AddRevenue",
      "تسجيل إيراد مشروع",
      "Sub_PRJ_Revenue",
      "الإيرادات",
      "البيانات الأساسية",
      "PRJ_Revenue_ID",
      "معرّف الإيراد",
      "Auto",
      "",
      "",
      "No",
      "",
      "",
      "FIN_Project_Revenue",
      "Revenue_ID",
      "",
    ],
    [
      "FORM_PRJ_AddRevenue",
      "تسجيل إيراد مشروع",
      "Sub_PRJ_Revenue",
      "الإيرادات",
      "البيانات الأساسية",
      "PRJ_Revenue_Project",
      "المشروع",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "",
      "DD_Projects",
      "FIN_Project_Revenue",
      "Project_ID",
      "",
    ],
    [
      "FORM_PRJ_AddRevenue",
      "تسجيل إيراد مشروع",
      "Sub_PRJ_Revenue",
      "الإيرادات",
      "البيانات الأساسية",
      "PRJ_Revenue_Date",
      "تاريخ الإيراد",
      "Date",
      "",
      "",
      "Yes",
      "",
      "",
      "FIN_Project_Revenue",
      "Revenue_Date",
      "",
    ],
    [
      "FORM_PRJ_AddRevenue",
      "تسجيل إيراد مشروع",
      "Sub_PRJ_Revenue",
      "الإيرادات",
      "القيم",
      "PRJ_Revenue_Amount",
      "المبلغ",
      "Number",
      "",
      "",
      "Yes",
      "",
      "",
      "FIN_Project_Revenue",
      "Amount",
      "",
    ],
    [
      "FORM_PRJ_AddRevenue",
      "تسجيل إيراد مشروع",
      "Sub_PRJ_Revenue",
      "الإيرادات",
      "المصدر",
      "PRJ_Revenue_Source",
      "مصدر الإيراد",
      "Text",
      "",
      "",
      "No",
      "",
      "",
      "FIN_Project_Revenue",
      "Source",
      "",
    ],
    [
      "FORM_PRJ_AddRevenue",
      "تسجيل إيراد مشروع",
      "Sub_PRJ_Revenue",
      "الإيرادات",
      "الحالة",
      "PRJ_Revenue_Status",
      "حالة الدفع",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "No",
      "Pending",
      "DD_Payment_Status",
      "FIN_Project_Revenue",
      "Pay_Status",
      "",
    ],
  ];

  // --- 3. Define New Static Dropdown Data ---
  // Based on the schema of 'SYS_Dropdowns'
  const newStaticDropdowns = [
    // [Key, English_Title, Arabic_Title, Is_Active, Sort_Order]
    ["DD_Project_Status", "New", "جديد", "TRUE", 1],
    ["DD_Project_Status", "In_Progress", "قيد التنفيذ", "TRUE", 2],
    ["DD_Project_Status", "Completed", "مكتمل", "TRUE", 3],
    ["DD_Project_Status", "On_Hold", "معلق", "TRUE", 4],
    ["DD_Project_Status", "Cancelled", "ملغى", "TRUE", 5],
    ["DD_Project_Type", "Internal", "مشروع داخلي", "TRUE", 1],
    ["DD_Project_Type", "Client_Project", "مشروع عميل", "TRUE", 2],
    ["DD_Project_Type", "Maintenance", "صيانة", "TRUE", 3],
    ["DD_Project_Priority", "High", "عالية", "TRUE", 1],
    ["DD_Project_Priority", "Medium", "متوسطة", "TRUE", 2],
    ["DD_Project_Priority", "Low", "منخفضة", "TRUE", 3],
    ["DD_Task_Priority", "Critical", "حرجة", "TRUE", 1],
    ["DD_Task_Priority", "High", "مرتفعة", "TRUE", 2],
    ["DD_Task_Priority", "Medium", "متوسطة", "TRUE", 3],
    ["DD_Task_Priority", "Low", "منخفضة", "TRUE", 4],
    ["DD_Task_Status", "Not_Started", "لم يبدأ", "TRUE", 1],
    ["DD_Task_Status", "In_Progress", "قيد التنفيذ", "TRUE", 2],
    ["DD_Task_Status", "Completed", "مكتملة", "TRUE", 3],
    ["DD_Task_Status", "Blocked", "معلقة", "TRUE", 4],
    ["DD_Cost_Categories", "Labor", "تكاليف العمالة", "TRUE", 1],
    ["DD_Cost_Categories", "Materials", "مواد", "TRUE", 2],
    ["DD_Cost_Categories", "Equipment", "معدات", "TRUE", 3],
    ["DD_Cost_Categories", "Misc", "أخرى", "TRUE", 4],
  ];

  // --- 4. Prepare Dynamic Client Dropdowns (from PRJ_Clients) ---
  // Assumes Client_ID is in Col A, Client_Name is in Col B
  let clientDropdowns = []; // Default to empty array
  const clientLastRow = clientsSheet.getLastRow();

  if (clientLastRow > 1) {
    // ***FIX***: Only run if there is data beyond the header
    const clientDataValues = clientsSheet
      .getRange(2, 1, clientLastRow - 1, 2)
      .getValues();
    clientDropdowns = clientDataValues
      .filter((row) => row[0] && row[1]) // Ensure Client_ID (row[0]) and Client_Name (row[1]) exist
      .map((row, index) => ["DD_Clients", row[0], row[1], "TRUE", index + 1]); // [Key, English_Title(Value), Arabic_Title(Display), Active, Sort]
  }
  Logger.log(`Found ${clientDropdowns.length} clients to seed.`);

  // --- 5. Prepare Dynamic Manager & Assignee Dropdowns (from SYS_Users) ---
  // Assumes User_Id is in Col A, Full_Name is in Col B
  let managerDropdowns = [];
  let assigneeDropdowns = [];
  const usersLastRow = usersSheet.getLastRow();

  if (usersLastRow > 1) {
    const usersDataValues = usersSheet
      .getRange(2, 1, usersLastRow - 1, 2)
      .getValues();
    const filteredUsers = usersDataValues.filter((row) => row[0] && row[1]);
    managerDropdowns = filteredUsers.map((row, index) => [
      "DD_Managers",
      row[0],
      row[1],
      "TRUE",
      index + 1,
    ]);
    assigneeDropdowns = filteredUsers.map((row, index) => [
      "DD_Project_Assignees",
      row[0],
      row[1],
      "TRUE",
      index + 1,
    ]);
  }
  Logger.log(`Found ${managerDropdowns.length} managers to seed.`);
  Logger.log(`Found ${assigneeDropdowns.length} assignees to seed.`);

  // --- 6. Prepare Dynamic Projects Dropdowns (from PRJ_Main) ---
  let projectDropdowns = [];
  if (projectsSheet) {
    const projectsLastRow = projectsSheet.getLastRow();
    if (projectsLastRow > 1) {
      const projectValues = projectsSheet
        .getRange(2, 1, projectsLastRow - 1, 2)
        .getValues();
      projectDropdowns = projectValues
        .filter((row) => row[0])
        .map((row, index) => [
          "DD_Projects",
          row[0],
          row[1] || row[0],
          "TRUE",
          index + 1,
        ]);
    }
  }
  Logger.log(`Found ${projectDropdowns.length} projects to seed.`);

  // --- 7. Write all new data to the sheets ---
  Logger.log("Writing new data to sheets...");

  // Append form data
  if (newFormData.length > 0) {
    formsSheet
      .getRange(
        formsSheet.getLastRow() + 1,
        1,
        newFormData.length,
        newFormData[0].length
      )
      .setValues(newFormData);
    Logger.log(`Wrote ${newFormData.length} rows to SYS_Dynamic_Forms.`);
  }

  // Combine all new dropdowns and append
  const allNewDropdowns = newStaticDropdowns
    .concat(clientDropdowns)
    .concat(managerDropdowns)
    .concat(assigneeDropdowns)
    .concat(projectDropdowns);

  if (allNewDropdowns.length > 0) {
    dropsSheet
      .getRange(
        dropsSheet.getLastRow() + 1,
        1,
        allNewDropdowns.length,
        allNewDropdowns[0].length
      )
      .setValues(allNewDropdowns);
    Logger.log(`Wrote ${allNewDropdowns.length} rows to SYS_Dropdowns.`);
  }

  Logger.log("Seeding complete.");
  Logger.log("✅ Project forms and dropdowns seeded successfully.");
}

// Internal helper invoked by seedAllModules to refresh PV_PRJ_* sheets.
function seedProjectViewSheets(ss) {
  try {
    const workbook = ss || getTargetSpreadsheet();
    if (!workbook) {
      Logger.log("seedProjectViewSheets skipped: workbook unavailable.");
      return;
    }
    const pvMain = workbook.getSheetByName("PV_PRJ_Main");
    if (pvMain) {
      const maxRows = pvMain.getMaxRows();
      if (maxRows > 1) {
        pvMain
          .getRange(2, 1, maxRows - 1, pvMain.getMaxColumns())
          .clearContent();
      }
      const pvMainFormula = `=ARRAYFORMULA(
  LET(
    ids, PRJ_Main!A2:A,
    names, PRJ_Main!B2:B,
    clients, PRJ_Main!D2:D,
    startDates, PRJ_Main!F2:F,
    plannedDays, PRJ_Main!G2:G,
    plannedEnd, PRJ_Main!H2:H,
    actualEnd, PRJ_Main!I2:I,
    status, PRJ_Main!J2:J,
    types, PRJ_Main!K2:K,
    priority, PRJ_Main!L2:L,
    notes, PRJ_Main!M2:M,
    budget, PRJ_Main!O2:O,
    manager, PRJ_Main!V2:V,
    actualCost, IF(ids="",,IFERROR(SUMIF(PRJ_Costs!B:B, ids, PRJ_Costs!F:F), 0)),
    computedPlanEnd, IF(LEN(plannedEnd), plannedEnd, IF((startDates<>"")*(plannedDays<>""), startDates + plannedDays, "")),
    budgetDiff, IF((budget="")*(actualCost=0),"", IF(budget="", -actualCost, budget - actualCost)),
    progressRaw, IF((plannedDays>0)*(startDates<>""), (IF(actualEnd<>"", actualEnd, TODAY()) - startDates)/plannedDays, ""),
    progressPct, IF(progressRaw="", "", ROUND(100*MAX(0, MIN(progressRaw, 1)), 1)),
    output, {ids, names, clients, startDates, plannedDays, computedPlanEnd, actualEnd, status, types, priority, budget, actualCost, budgetDiff, progressPct, notes, manager}
  ,
    IF(ids="",,output)
  )
)`;
      pvMain.getRange(2, 1).setFormula(pvMainFormula);
      Logger.log("✅ PV_PRJ_Main formulas seeded.");
    }

    const pvCosts = workbook.getSheetByName("PV_PRJ_Costs");
    if (pvCosts) {
      const maxRows = pvCosts.getMaxRows();
      if (maxRows > 1) {
        pvCosts
          .getRange(2, 1, maxRows - 1, pvCosts.getMaxColumns())
          .clearContent();
      }
      const pvCostsFormula = `=ARRAYFORMULA(
  LET(
    projectIds, PRJ_Costs!B2:B,
    projectNames, IF(projectIds="", "", IFERROR(VLOOKUP(projectIds, PRJ_Main!A:B, 2, FALSE), "")),
    data, {projectIds, projectNames, PRJ_Costs!C2:C, PRJ_Costs!D2:D, PRJ_Costs!E2:E, PRJ_Costs!F2:F, PRJ_Costs!H2:H, PRJ_Costs!G2:G}
  ,
    IF(projectIds="",,data)
  )
)`;
      pvCosts.getRange(2, 1).setFormula(pvCostsFormula);
      Logger.log("✅ PV_PRJ_Costs query seeded.");
    }
  } catch (err) {
    Logger.log(`seedProjectViewSheets error: ${err}`);
  }
}

function collectDynamicFormRows(formIds) {
  const definitions = getDynamicFormDefinitions();
  const targetIds = new Set(formIds);
  return definitions.filter((row) => targetIds.has(row[0]));
}

const FINANCE_FORM_IDS = [
  "FORM_FIN_AddDirectExpense",
  "FORM_FIN_EditDirectExpense",
  "FORM_FIN_AddIndirectExpenseRep",
  "FORM_FIN_EditIndirectExpenseRep",
  "FORM_FIN_AddIndirectExpenseOnce",
  "FORM_FIN_EditIndirectExpenseOnce",
  "FORM_FIN_AddProjectRevenue",
  "FORM_FIN_EditProjectRevenue",
  "FORM_FIN_AddRevenue",
  "FORM_FIN_EditRevenue",
  "FORM_FIN_AddJournalEntry",
  "FORM_FIN_EditJournalEntry",
  "FORM_FIN_AddCustody",
  "FORM_FIN_EditCustody",
];

const FINANCE_DROPDOWN_KEYS = [
  "DD_Expense_Category",
  "DD_Payment_Status",
  "DD_Payment_Method",
  "DD_Indirect_Frequency",
  "DD_Revenue_Type",
  "DD_Account",
  "DD_Custody_Status",
];

function seedFinanceFormAndDropdowns(ss) {
  const workbook = ss || getTargetSpreadsheet();
  const formsSheet = workbook.getSheetByName("SYS_Dynamic_Forms");
  const dropdownSheet = workbook.getSheetByName("SYS_Dropdowns");

  if (!formsSheet || !dropdownSheet) {
    Logger.log("seedFinanceFormAndDropdowns skipped: required sheets missing.");
    return;
  }

  FINANCE_FORM_IDS.forEach((formId) => clearOldData(formsSheet, formId, 0));

  const financeRows = collectDynamicFormRows(FINANCE_FORM_IDS);
  if (financeRows.length) {
    formsSheet
      .getRange(
        formsSheet.getLastRow() + 1,
        1,
        financeRows.length,
        financeRows[0].length
      )
      .setValues(financeRows);
  }

  FINANCE_DROPDOWN_KEYS.forEach((key) => clearOldData(dropdownSheet, key, 0));
  seedSysDropdowns(workbook);

  Logger.log("✅ Finance forms and dropdowns seeded successfully.");
}

const HR_FORM_IDS = [
  "FORM_HR_AddEmployee",
  "FORM_HR_AddAttendance",
  "FORM_HR_AddLeaveRequest",
  "FORM_HR_AddLeave",
  "FORM_HR_AddAdvance",
  "FORM_HR_AddDeduction",
  "FORM_HR_AddPayroll",
];

const HR_DROPDOWN_KEYS = [
  "DD_Departments",
  "DD_Job_Titles",
  "DD_Gender",
  "DD_Marital_Status",
  "DD_Military_Status",
  "DD_Employee_Status",
  "DD_Attendance_Status",
  "DD_Leave_Types",
  "DD_Leave_Status",
  "DD_Advance_Status",
  "DD_Payroll_Status",
  "DD_Penalties",
  "DD_Employees",
];

function seedHrFormAndDropdowns(ss) {
  const workbook = ss || getTargetSpreadsheet();
  const formsSheet = workbook.getSheetByName("SYS_Dynamic_Forms");
  const dropdownSheet = workbook.getSheetByName("SYS_Dropdowns");

  if (!formsSheet || !dropdownSheet) {
    Logger.log("seedHrFormAndDropdowns skipped: required sheets missing.");
    return;
  }

  HR_FORM_IDS.forEach((formId) => clearOldData(formsSheet, formId, 0));

  const hrRows = collectDynamicFormRows(HR_FORM_IDS);
  if (hrRows.length) {
    formsSheet
      .getRange(formsSheet.getLastRow() + 1, 1, hrRows.length, hrRows[0].length)
      .setValues(hrRows);
  }

  HR_DROPDOWN_KEYS.forEach((key) => clearOldData(dropdownSheet, key, 0));
  seedSysDropdowns(workbook);

  Logger.log("✅ HR forms and dropdowns seeded successfully.");
}

/**
 * High-level orchestrator for provisioning Projects, Finance, and HR modules.
 * Prefer calling this instead of invoking the individual seed helpers directly.
 */
function seedAllModules(ss) {
  const workbook = ss || getTargetSpreadsheet();

  seedProjectFormAndDropdowns(workbook);
  seedProjectViewSheets(workbook);
  seedProjectViews(workbook);

  seedFinanceFormAndDropdowns(workbook);
  seedFinanceViewSheets(workbook);
  seedFinanceViews(workbook);

  seedHrDepartments(workbook);
  seedHrFormAndDropdowns(workbook);
  seedHrViewSheets(workbook);
  seedHrViews(workbook);

  Logger.log("✅ All modules seeded successfully.");
}

// Internal helper invoked by seedAllModules to refresh PV_FIN_* sheets.
function seedFinanceViewSheets(ss) {
  try {
    const workbook = ss || getTargetSpreadsheet();
    if (!workbook) {
      Logger.log("seedFinanceViewSheets skipped: workbook unavailable.");
      return;
    }

    const financeViewConfigs = [
      {
        sheetName: "PV_FIN_DirectExpenses_View",
        dependencies: ["FIN_DirectExpenses", "PRJ_Main"],
        formula: `=QUERY({
  FIN_DirectExpenses!A2:A,
  FIN_DirectExpenses!C2:C,
  FIN_DirectExpenses!B2:B,
  IFERROR(VLOOKUP(FIN_DirectExpenses!B2:B, PRJ_Main!A:B, 2, FALSE), ""),
  FIN_DirectExpenses!D2:D,
  FIN_DirectExpenses!E2:E,
  FIN_DirectExpenses!F2:F,
  FIN_DirectExpenses!N2:N,
  FIN_DirectExpenses!O2:O,
  FIN_DirectExpenses!H2:H,
  FIN_DirectExpenses!G2:G,
  FIN_DirectExpenses!I2:I,
  FIN_DirectExpenses!J2:J,
  FIN_DirectExpenses!K2:K,
  FIN_DirectExpenses!L2:L,
  FIN_DirectExpenses!M2:M,
  FIN_DirectExpenses!P2:P,
  FIN_DirectExpenses!Q2:Q,
  FIN_DirectExpenses!R2:R,
  FIN_DirectExpenses!T2:T,
  FIN_DirectExpenses!S2:S,
  FIN_DirectExpenses!V2:V,
  FIN_DirectExpenses!U2:U
},
"select Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9,Col10,Col11,Col12,Col13,Col14,Col15,Col16,Col17,Col18,Col19,Col20,Col21,Col22,Col23 where Col1 is not null label Col1 '', Col2 '', Col3 '', Col4 '', Col5 '', Col6 '', Col7 '', Col8 '', Col9 '', Col10 '', Col11 '', Col12 '', Col13 '', Col14 '', Col15 '', Col16 '', Col17 '', Col18 '', Col19 '', Col20 '', Col21 '', Col22 '', Col23 ''",
0)`,
      },
      {
        sheetName: "PV_FIN_InDirExpense_Repeated_View",
        dependencies: ["FIN_InDirExpense_Repeated"],
        formula: `=QUERY({
  FIN_InDirExpense_Repeated!A2:A,
  FIN_InDirExpense_Repeated!B2:B,
  FIN_InDirExpense_Repeated!C2:C,
  FIN_InDirExpense_Repeated!D2:D,
  FIN_InDirExpense_Repeated!E2:E,
  FIN_InDirExpense_Repeated!F2:F,
  FIN_InDirExpense_Repeated!G2:G,
  FIN_InDirExpense_Repeated!H2:H,
  FIN_InDirExpense_Repeated!I2:I,
  FIN_InDirExpense_Repeated!J2:J,
  FIN_InDirExpense_Repeated!K2:K,
  FIN_InDirExpense_Repeated!L2:L,
  FIN_InDirExpense_Repeated!M2:M,
  FIN_InDirExpense_Repeated!N2:N,
  FIN_InDirExpense_Repeated!P2:P
},
"select Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9,Col10,Col11,Col12,Col13,Col14,Col15 where Col1 is not null label Col1 '', Col2 '', Col3 '', Col4 '', Col5 '', Col6 '', Col7 '', Col8 '', Col9 '', Col10 '', Col11 '', Col12 '', Col13 '', Col14 '', Col15 ''",
0)`,
      },
      {
        sheetName: "PV_FIN_InDirExpense_Once_View",
        dependencies: ["FIN_InDirExpense_Once"],
        formula: `=QUERY({
  FIN_InDirExpense_Once!A2:A,
  FIN_InDirExpense_Once!B2:B,
  FIN_InDirExpense_Once!C2:C,
  FIN_InDirExpense_Once!D2:D,
  FIN_InDirExpense_Once!E2:E,
  FIN_InDirExpense_Once!F2:F,
  FIN_InDirExpense_Once!G2:G,
  FIN_InDirExpense_Once!H2:H,
  FIN_InDirExpense_Once!I2:I,
  FIN_InDirExpense_Once!J2:J,
  FIN_InDirExpense_Once!K2:K,
  FIN_InDirExpense_Once!L2:L,
  FIN_InDirExpense_Once!M2:M,
  FIN_InDirExpense_Once!O2:O
},
"select Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9,Col10,Col11,Col12,Col13,Col14 where Col1 is not null label Col1 '', Col2 '', Col3 '', Col4 '', Col5 '', Col6 '', Col7 '', Col8 '', Col9 '', Col10 '', Col11 '', Col12 '', Col13 '', Col14 ''",
0)`,
      },
      {
        sheetName: "PV_FIN_Project_Revenue_View",
        dependencies: ["FIN_Project_Revenue", "PRJ_Main"],
        formula: `=QUERY({
  FIN_Project_Revenue!A2:A,
  FIN_Project_Revenue!B2:B,
  FIN_Project_Revenue!C2:C,
  FIN_Project_Revenue!D2:D,
  FIN_Project_Revenue!E2:E,
  FIN_Project_Revenue!F2:F,
  FIN_Project_Revenue!G2:G,
  FIN_Project_Revenue!H2:H,
  FIN_Project_Revenue!I2:I,
  FIN_Project_Revenue!J2:J,
  FIN_Project_Revenue!L2:L,
  FIN_Project_Revenue!K2:K,
  FIN_Project_Revenue!M2:M
},
"select Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9,Col10,Col11,Col12,Col13,Col14 where Col1 is not null label Col1 '', Col2 '', Col3 '', Col4 '', Col5 '', Col6 '', Col7 '', Col8 '', Col9 '', Col10 '', Col11 '', Col12 '', Col13 '', Col14 ''",
0)`,
      },
      {
        sheetName: "PV_FIN_Revenues_View",
        dependencies: ["FIN_Revenues", "PRJ_Clients", "PRJ_Main"],
        formula: `=QUERY({
  FIN_Revenues!A2:A,
  FIN_Revenues!C2:C,
  FIN_Revenues!B2:B,
  FIN_Revenues!D2:D,
  FIN_Revenues!E2:E,
  FIN_Revenues!F2:F,
  FIN_Revenues!G2:G,
  FIN_Revenues!H2:H,
  FIN_Revenues!I2:I,
  IFERROR(VLOOKUP(FIN_Revenues!I2:I, PRJ_Clients!A:B, 2, FALSE), ""),
  FIN_Revenues!J2:J,
  IFERROR(VLOOKUP(FIN_Revenues!J2:J, PRJ_Main!A:B, 2, FALSE), ""),
  FIN_Revenues!K2:K,
  FIN_Revenues!L2:L,
  FIN_Revenues!N2:N,
  FIN_Revenues!M2:M,
  FIN_Revenues!O2:O
},
"select Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9,Col10,Col11,Col12,Col13,Col14,Col15,Col16,Col17 where Col1 is not null label Col1 '', Col2 '', Col3 '', Col4 '', Col5 '', Col6 '', Col7 '', Col8 '', Col9 '', Col10 '', Col11 '', Col12 '', Col13 '', Col14 '', Col15 '', Col16 '', Col17 ''",
0)`,
      },
      {
        sheetName: "PV_FIN_Journal_View",
        dependencies: ["FIN_Journal"],
        formula: `=QUERY({
  FIN_Journal!A2:A,
  FIN_Journal!B2:B,
  FIN_Journal!C2:C,
  FIN_Journal!D2:D,
  FIN_Journal!E2:E,
  FIN_Journal!F2:F,
  FIN_Journal!G2:G,
  FIN_Journal!H2:H,
  FIN_Journal!I2:I,
  FIN_Journal!K2:K,
  FIN_Journal!J2:J,
  FIN_Journal!L2:L
},
"select Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9,Col10,Col11,Col12 where Col1 is not null label Col1 '', Col2 '', Col3 '', Col4 '', Col5 '', Col6 '', Col7 '', Col8 '', Col9 '', Col10 '', Col11 '', Col12 ''",
0)`,
      },
      {
        sheetName: "PV_FIN_Custody_View",
        dependencies: ["FIN_Custody"],
        formula: `=QUERY({
  FIN_Custody!A2:A,
  FIN_Custody!B2:B,
  FIN_Custody!C2:C,
  FIN_Custody!D2:D,
  FIN_Custody!E2:E,
  FIN_Custody!F2:F,
  FIN_Custody!G2:G,
  FIN_Custody!H2:H,
  FIN_Custody!I2:I,
  FIN_Custody!K2:K,
  FIN_Custody!J2:J,
  FIN_Custody!L2:L
},
"select Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9,Col10,Col11,Col12 where Col1 is not null label Col1 '', Col2 '', Col3 '', Col4 '', Col5 '', Col6 '', Col7 '', Col8 '', Col9 '', Col10 '', Col11 '', Col12 ''",
0)`,
      },
      {
        sheetName: "PV_FIN_GL_Totals_View",
        dependencies: ["FIN_GL_Totals"],
        formula: `=QUERY(FIN_GL_Totals!A2:E,
"select Col1,Col2,Col3,Col4,Col5 where Col1 is not null label Col1 '', Col2 '', Col3 '', Col4 '', Col5 ''",
0)`,
      },
    ];

    financeViewConfigs.forEach(({ sheetName, dependencies, formula }) => {
      const sheet = workbook.getSheetByName(sheetName);
      if (!sheet) return;
      if (!ensureSheetsAvailable(workbook, dependencies, sheetName)) return;
      applyFormulaToViewSheet(sheet, formula);
      Logger.log(`✅ ${sheetName} query seeded.`);
    });
  } catch (err) {
    Logger.log(`seedFinanceViewSheets error: ${err}`);
  }
}

function seedHrViewSheets(ss) {
  try {
    const workbook = ss || getTargetSpreadsheet();
    if (!workbook) {
      Logger.log("seedHrViewSheets skipped: workbook unavailable.");
      return;
    }

    const hrViewConfigs = [
      { sheetName: "PV_HR_Employees", source: "HR_Employees" },
      { sheetName: "PV_HR_Departments", source: "HR_Departments" },
      { sheetName: "PV_HR_Attendance", source: "HR_Attendance" },
      { sheetName: "PV_HR_Leave", source: "HR_Leave" },
      { sheetName: "PV_HR_Leave_Requests", source: "HR_Leave_Requests" },
      { sheetName: "PV_HR_Advances", source: "HR_Advances" },
      { sheetName: "PV_HR_Deductions", source: "HR_Deductions" },
      { sheetName: "PV_HR_Payroll", source: "HR_Payroll" },
    ];

    hrViewConfigs.forEach(({ sheetName, source }) => {
      const sheet = workbook.getSheetByName(sheetName);
      if (!sheet) return;
      if (!ensureSheetsAvailable(workbook, [source], sheetName)) return;

      const sourceSheet = workbook.getSheetByName(source);
      if (!sourceSheet) return;
      const lastColumnLetter = columnToLetter(sourceSheet.getLastColumn());
      const formula = `=ARRAYFORMULA(IF(LEN(${source}!A2:A)=0,"",${source}!A2:${lastColumnLetter}))`;
      applyFormulaToViewSheet(sheet, formula);
      Logger.log(`✅ ${sheetName} mirror seeded.`);
    });
  } catch (err) {
    Logger.log(`seedHrViewSheets error: ${err}`);
  }
}

/**
 * Helper function to clear existing data from a sheet based on a key
 * in a specific column, preserving the header row.
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet The sheet to clear data from.
 * @param {string} key The key to look for (e.g., 'FORM_PRJ_AddProject').
 * @param {number} colIndex The 0-based index of the column to check for the key.
 */
function clearOldData(sheet, key, colIndex) {
  // Get all data, including headers
  const data = sheet.getDataRange().getValues();

  // If sheet is empty or only has a header, do nothing
  if (data.length <= 1) {
    // Handle edge case where sheet has 1 empty row [[""]]
    if (data.length == 1 && data[0].length == 1 && data[0][0] == "") {
      // This is a truly empty sheet, do nothing.
      return;
    }
    // Otherwise, it's just a header, so also do nothing.
    return;
  }

  // Keep the header row
  const header = data.shift();

  // Filter the data, keeping only rows that DO NOT match the key
  const newData = data.filter((row) => row[colIndex] !== key);

  // Add the header back to the top
  newData.unshift(header);

  // Clear the entire sheet's content
  sheet.clearContents(); // Preserves formatting

  // Write the filtered data (header + non-matching rows) back to the sheet
  // ***FIX***: Added check for newData[0] to prevent error on empty header
  if (newData.length > 0 && newData[0] && newData[0].length > 0) {
    sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
  }
}
