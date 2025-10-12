/**
 * ============================================================================
 *  NIJJARA ERP - FULL SHEET SETUP SCRIPT
 *  This script creates all system, HR, project, and finance sheets with headers
 *  and seeds base SYS data.
 * ============================================================================
 */

const SYSTEM_USER = "SYSTEM";

function ensureISODate(date) {
  if (!(date instanceof Date)) return new Date().toISOString().split("T")[0];
  return date.toISOString().split("T")[0];
}

function appendRowsIfEmpty(sheet, rows) {
  if (sheet.getLastRow() <= 1)
    sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
}

function createOrClearSheet(ss, name, headers) {
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  else sh.clear();

  sh.getRange(1, 1, 1, headers.length).setValues([headers]);
  sh.getRange(1, 1, 1, headers.length)
    .setFontWeight("bold")
    .setBackground("#E0E0E0");
  return sh;
}

/** ---------- SCHEMA ---------- **/
function getSheetSchemas() {
  return {
    // ================== SYSTEM ==================
    SYS_Settings: [
      "Setting_Key",
      "Setting_Value",
      "Description_EN",
      "Updated_By",
      "Updated_At",
      "Created_At",
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
      "Audit_Id",
      "User_Id",
      "Sheet",
      "Action",
      "Target_Id",
      "Details",
      "Created_At",
    ],
    SYS_Sessions: [
      "Session_Id",
      "User_Id",
      "Device",
      "Ip_Address",
      "Auth_Token",
      "Created_At",
      "Last_Seen",
      "Revoked_At",
      "Revoked_By",
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
    SYS_PubHolidays: ["Pub_Holiday_Date", "Pub_Holiday_Name"],

    // ================== HR MODULE ==================
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
      "Active",
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
    FIN_InDirExpense_Repeated: [
      "InDirExpense_Repeated_ID",
      "Category",
      "Sub_Category",
      "Pay_Date",
      "Start_Date",
      "End_Date",
      "Paid_By",
      "Pay_Status",
      "Pay_Method",
      "Amount",
      "Notes",
      "Allocation_Method",
      "Created_At",
    ],
    FIN_InDirExpense_Once: [
      "InDirExpense_Once_ID",
      "Category",
      "Sub_Category",
      "Pay_Date",
      "Yearly_Worth",
      "Useful_Life_Months",
      "Depreciation_Start_Date",
      "Paid_By",
      "Pay_Status",
      "Pay_Method",
      "Notes",
      "Allocation_Method",
      "Created_At",
    ],
    FIN_Project_Revenue: [
      "Revenue_ID",
      "Project_ID",
      "Revenue_Date",
      "Amount",
      "Source",
      "Pay_Method",
      "Invoice_Number",
      "Pay_Status",
      "Created_At",
    ],
    FIN_Revenues: [
      "Revenue_ID",
      "Date",
      "Client_ID",
      "Project_ID",
      "Amount",
      "Method",
      "Reference",
      "Notes",
      "Created_At",
      "Created_By",
    ],
    FIN_Journal: [
      "Journal_ID",
      "Date",
      "Account_Dr",
      "Account_Cr",
      "Amount",
      "Project_ID",
      "Memo",
      "Created_At",
      "Created_By",
    ],
    FIN_Custody: [
      "Custody_ID",
      "Employee_ID",
      "Employee_Name",
      "Issue_Date",
      "Custody_Amount",
      "Status",
      "Notes",
      "Created_At",
    ],
    FIN_GL_Totals: [
      "Date",
      "DirectExpense_ID",
      "InDirExpense_Repeated_ID",
      "InDirExpense_Once_ID",
      "Revenue_ID",
      "Net",
      "Month",
      "Created_At",
    ],
    FIN_KPIs: ["Metric", "Value", "Notes"],
  };
}

/** ---------- SEED DATA ---------- **/
function seedSysSettings(ss) {
  const sh = ss.getSheetByName("SYS_Settings");
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
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const schemas = getSheetSchemas();
  Object.keys(schemas).forEach((name) =>
    createOrClearSheet(ss, name, schemas[name])
  );
  seedSysSettings(ss);
  seedSysRoles(ss);
  Logger.log("✅ Full ERP Setup Completed.");
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
function seedCoreData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  seedSysSettings(ss);
  seedSysRoles(ss);
  seedSysPermissions(ss);
  seedSysRolePermissions(ss);
  seedAdminUser(ss);
  Logger.log("✅ Core SYS + Admin seeding completed.");
}
