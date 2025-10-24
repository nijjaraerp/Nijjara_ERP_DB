/**
 * ============================================================================
 *  NIJJARA ERP - FULL SHEET SETUP SCRIPT
 *  This script creates all system, HR, project, and finance sheets with headers
 *  and seeds base SYS data.
 * ============================================================================
 */

const SYSTEM_USER = "SYSTEM";
const TARGET_SPREADSHEET_ID = "1Oj7So4c5vBDpvj0pIfDeXz6XxBrY011J4xZwKlSkDzo";
const TARGET_SPREADSHEET_URL =
  "https://docs.google.com/spreadsheets/d/1Oj7So4c5vBDpvj0pIfDeXz6XxBrY011J4xZwKlSkDzo/edit";

function getTargetSpreadsheet() {
  try {
    const active = SpreadsheetApp.getActiveSpreadsheet();
    if (active) {
      const activeId = typeof active.getId === "function" ? active.getId() : "";
      if (!TARGET_SPREADSHEET_ID || activeId === TARGET_SPREADSHEET_ID) {
        return active;
      }
    }
  } catch (err) {
    Logger.log(`getTargetSpreadsheet active lookup failed: ${err}`);
  }

  if (TARGET_SPREADSHEET_ID) {
    return SpreadsheetApp.openById(TARGET_SPREADSHEET_ID);
  }

  throw new Error(
    "Unable to resolve target spreadsheet. Set TARGET_SPREADSHEET_ID to the deployment workbook ID."
  );
}

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
    PV_FIN_DirectExpenses_View: [
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
      "Payment_Status",
      "Payment_Method",
      "Notes",
      "Created_By",
      "Created_At",
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

function seedSysTabRegister(ss) {
  const sh = ss.getSheetByName("SYS_Tab_Register");
  const rows = [
    [
      "TAB",
      "Tab_SYS_Management",
      "System's Management",
      "إدارة النظام",
      "",
      "",
      "",
      "",
      1,
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "System's Management",
      "إدارة النظام",
      "Sub_SYS_Overview",
      "Overview",
      "نظرة عامة",
      "/sys",
      1,
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "System's Management",
      "إدارة النظام",
      "Sub_SYS_Users",
      "Users",
      "المستخدمون",
      "/sys/users",
      2,
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "System's Management",
      "إدارة النظام",
      "Sub_SYS_Roles",
      "Roles",
      "الأدوار",
      "/sys/roles",
      3,
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "System's Management",
      "إدارة النظام",
      "Sub_SYS_Permissions",
      "Permissions",
      "الأذونات",
      "/sys/permissions",
      4,
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "System's Management",
      "إدارة النظام",
      "Sub_SYS_RolePerms",
      "Role Permissions",
      "تعيين أذونات الأدوار",
      "/sys/role-perms",
      5,
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "System's Management",
      "إدارة النظام",
      "Sub_SYS_Properties",
      "User Properties",
      "خصائص المستخدم",
      "/sys/properties",
      6,
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "System's Management",
      "إدارة النظام",
      "Sub_SYS_Sessions",
      "Sessions",
      "الجلسات",
      "/sys/sessions",
      7,
    ],
    [
      "SUB",
      "Tab_SYS_Management",
      "System's Management",
      "إدارة النظام",
      "Sub_SYS_Audit",
      "Audit",
      "التدقيق",
      "/sys/audit",
      8,
    ],
  ];
  appendRowsIfEmpty(sh, rows);
}

function seedSysProfileView(ss) {
  const sh = ss.getSheetByName("SYS_Profile_View");
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
  appendRowsIfEmpty(sh, rows);
}

function seedSysDynamicForms(ss) {
  const sh = ss.getSheetByName("SYS_Dynamic_Forms");
  const rows = [
    [
      "FORM_SYS_AddUser",
      "إضافة مستخدم جديد",
      "Sub_SYS_Users",
      "المستخدمون",
      "التعريف",
      "USR_User_Id",
      "معرّف المستخدم",
      "Auto",
      "",
      "",
      "No",
      "",
      "",
      "SYS_Users",
      "User_Id",
      "",
    ],
    [
      "FORM_SYS_AddUser",
      "إضافة مستخدم جديد",
      "Sub_SYS_Users",
      "المستخدمون",
      "بيانات المستخدم",
      "USR_Full_Name",
      "الاسم الكامل",
      "Text",
      "",
      "",
      "Yes",
      "",
      "",
      "SYS_Users",
      "Full_Name",
      "",
    ],
    [
      "FORM_SYS_AddUser",
      "إضافة مستخدم جديد",
      "Sub_SYS_Users",
      "المستخدمون",
      "بيانات المستخدم",
      "USR_Username",
      "اسم المستخدم",
      "Text",
      "",
      "",
      "Yes",
      "",
      "",
      "SYS_Users",
      "Username",
      "",
    ],
    [
      "FORM_SYS_AddUser",
      "إضافة مستخدم جديد",
      "Sub_SYS_Users",
      "المستخدمون",
      "بيانات المستخدم",
      "USR_Email",
      "البريد الإلكتروني",
      "Email",
      "",
      "",
      "Yes",
      "",
      "",
      "SYS_Users",
      "Email",
      "",
    ],
    [
      "FORM_SYS_AddUser",
      "إضافة مستخدم جديد",
      "Sub_SYS_Users",
      "المستخدمون",
      "العمل",
      "USR_Job_Title",
      "المسمى الوظيفي",
      "Text",
      "",
      "",
      "No",
      "",
      "",
      "SYS_Users",
      "Job_Title",
      "",
    ],
    [
      "FORM_SYS_AddUser",
      "إضافة مستخدم جديد",
      "Sub_SYS_Users",
      "المستخدمون",
      "العمل",
      "USR_Department",
      "القسم",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "",
      "DD_Departments",
      "SYS_Users",
      "Department",
      "",
    ],
    [
      "FORM_SYS_AddUser",
      "إضافة مستخدم جديد",
      "Sub_SYS_Users",
      "المستخدمون",
      "العمل",
      "USR_Role",
      "الدور",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "",
      "DD_Roles",
      "SYS_Users",
      "Role_Id",
      "",
    ],
    [
      "FORM_SYS_AddUser",
      "إضافة مستخدم جديد",
      "Sub_SYS_Users",
      "المستخدمون",
      "الإعدادات",
      "USR_IsActive",
      "نشط؟",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "No",
      "TRUE",
      "DD_YesNo",
      "SYS_Users",
      "IsActive",
      "",
    ],
    [
      "FORM_SYS_AddUser",
      "إضافة مستخدم جديد",
      "Sub_SYS_Users",
      "المستخدمون",
      "الإعدادات",
      "USR_Password",
      "كلمة المرور",
      "Password",
      "",
      "",
      "Yes",
      "",
      "",
      "SYS_Users",
      "password",
      "",
    ],
    [
      "FORM_SYS_AddUser",
      "إضافة مستخدم جديد",
      "Sub_SYS_Users",
      "المستخدمون",
      "الإعدادات",
      "USR_MFA",
      "تفعيل MFA",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "No",
      "Disabled",
      "DD_MFA_Status",
      "SYS_Users",
      "MFA_Enabled",
      "",
    ],
    [
      "FORM_SYS_AddUser",
      "إضافة مستخدم جديد",
      "Sub_SYS_Users",
      "المستخدمون",
      "الإعدادات",
      "USR_Notes",
      "ملاحظات",
      "Paragraph",
      "",
      "",
      "No",
      "",
      "",
      "SYS_Users",
      "Notes",
      "",
    ],
    [
      "FORM_SYS_EditUser",
      "تعديل مستخدم",
      "Sub_SYS_Users",
      "المستخدمون",
      "بيانات المستخدم",
      "USR_Full_Name",
      "الاسم الكامل",
      "Text",
      "",
      "",
      "Yes",
      "",
      "",
      "SYS_Users",
      "Full_Name",
      "",
    ],
    [
      "FORM_SYS_EditUser",
      "تعديل مستخدم",
      "Sub_SYS_Users",
      "المستخدمون",
      "بيانات المستخدم",
      "USR_Email",
      "البريد الإلكتروني",
      "Email",
      "",
      "",
      "Yes",
      "",
      "",
      "SYS_Users",
      "Email",
      "",
    ],
    [
      "FORM_SYS_EditUser",
      "تعديل مستخدم",
      "Sub_SYS_Users",
      "المستخدمون",
      "العمل",
      "USR_Department",
      "القسم",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "No",
      "",
      "DD_Departments",
      "SYS_Users",
      "Department",
      "",
    ],
    [
      "FORM_SYS_EditUser",
      "تعديل مستخدم",
      "Sub_SYS_Users",
      "المستخدمون",
      "العمل",
      "USR_Role",
      "الدور",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "No",
      "",
      "DD_Roles",
      "SYS_Users",
      "Role_Id",
      "",
    ],
    [
      "FORM_PRJ_AddMaterial",
      "إضافة مادة جديدة",
      "Sub_PRJ_Materials",
      "المواد",
      "البيانات الأساسية",
      "MAT_Material_ID",
      "معرّف المادة",
      "Text",
      "",
      "",
      "Yes",
      "",
      "",
      "PRJ_Materials",
      "Material_ID",
      "",
    ],
    [
      "FORM_PRJ_AddMaterial",
      "إضافة مادة جديدة",
      "Sub_PRJ_Materials",
      "المواد",
      "البيانات الأساسية",
      "MAT_Name_AR",
      "اسم المادة (عربي)",
      "Text",
      "",
      "",
      "Yes",
      "",
      "",
      "PRJ_Materials",
      "Name_AR",
      "",
    ],
    [
      "FORM_PRJ_AddMaterial",
      "إضافة مادة جديدة",
      "Sub_PRJ_Materials",
      "المواد",
      "البيانات الأساسية",
      "MAT_Name_EN",
      "اسم المادة (إنجليزي)",
      "Text",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Materials",
      "Name_EN",
      "",
    ],
    [
      "FORM_PRJ_AddMaterial",
      "إضافة مادة جديدة",
      "Sub_PRJ_Materials",
      "المواد",
      "التصنيفات",
      "MAT_Category",
      "التصنيف الرئيسي",
      "Text",
      "",
      "",
      "Yes",
      "",
      "",
      "PRJ_Materials",
      "Category",
      "",
    ],
    [
      "FORM_PRJ_AddMaterial",
      "إضافة مادة جديدة",
      "Sub_PRJ_Materials",
      "المواد",
      "التصنيفات",
      "MAT_Subcategory",
      "التصنيف الفرعي",
      "Text",
      "",
      "",
      "No",
      "",
      "",
      "PRJ_Materials",
      "Subcategory",
      "",
    ],
    [
      "FORM_PRJ_AddMaterial",
      "إضافة مادة جديدة",
      "Sub_PRJ_Materials",
      "المواد",
      "إعدادات الكمية",
      "MAT_Default_Unit",
      "الوحدة الافتراضية",
      "Text",
      "",
      "",
      "Yes",
      "",
      "",
      "PRJ_Materials",
      "Default_Unit",
      "",
    ],
    [
      "FORM_PRJ_AddMaterial",
      "إضافة مادة جديدة",
      "Sub_PRJ_Materials",
      "المواد",
      "إعدادات الكمية",
      "MAT_Default_Price",
      "السعر الافتراضي",
      "Number",
      "",
      "",
      "Yes",
      "0",
      "",
      "PRJ_Materials",
      "Default_Price",
      "",
    ],
    [
      "FORM_PRJ_AddMaterial",
      "إضافة مادة جديدة",
      "Sub_PRJ_Materials",
      "المواد",
      "إعدادات الكمية",
      "MAT_VAT_Rate",
      "نسبة ضريبة القيمة المضافة",
      "Number",
      "",
      "",
      "No",
      "0.14",
      "",
      "PRJ_Materials",
      "VAT_Rate",
      "",
    ],
    [
      "FORM_PRJ_AddMaterial",
      "إضافة مادة جديدة",
      "Sub_PRJ_Materials",
      "المواد",
      "إعدادات الحالة",
      "MAT_IsActive",
      "نشط؟",
      "Dropdown",
      "SYS_Dropdowns",
      "",
      "Yes",
      "TRUE",
      "DD_YesNo",
      "PRJ_Materials",
      "Active",
      "",
    ],
  ];
  appendRowsIfEmpty(sh, rows);
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
    [
      "DD_Attachment_Entities",
      "Role_Permissions",
      "أذونات_الأدوار",
      "TRUE",
      4,
    ],
    ["DD_Export_Formats", "CSV", "CSV", "TRUE", 1],
    ["DD_Export_Formats", "XLSX", "XLSX", "TRUE", 2],
    ["DD_Export_Formats", "JSON", "JSON", "TRUE", 3],
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
      rows.push([
        "DD_Roles",
        roleId,
        title,
        "TRUE",
        20 + index,
      ]);
    });
  }

  appendRowsIfEmpty(sh, rows);
}

function seedHrDepartments(ss) {
  const sh = ss.getSheetByName("HR_Departments");
  const nowIso = ensureISODate(new Date());
  const rows = [
    ["MGMT", "Management", "الإدارة", "TRUE", 1, nowIso, SYSTEM_USER],
    ["HR", "Human Resources", "الموارد البشرية", "TRUE", 2, nowIso, SYSTEM_USER],
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
  const ss = getTargetSpreadsheet();
  const schemas = getSheetSchemas();
  Object.keys(schemas).forEach((name) =>
    createOrClearSheet(ss, name, schemas[name])
  );
  seedCoreData();
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
  const rows = data.slice(1).map((row) => [
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
function seedCoreData() {
  const ss = getTargetSpreadsheet();
  seedSysSettings(ss);
  seedSysRoles(ss);
  seedSysDropdowns(ss);
  seedSysTabRegister(ss);
  seedSysProfileView(ss);
  seedSysDynamicForms(ss);
  seedSysPermissions(ss);
  seedSysRolePermissions(ss);
  seedAdminUser(ss);
  seedSysUsersView(ss);
  seedSysUserProperties(ss);
  seedSysDocuments(ss);
  seedSysSessions(ss);
  seedSysAuditLog(ss);
  seedHrDepartments(ss);
  Logger.log("✅ Core SYS + Admin seeding completed.");
}
/**
 * Main seeder function to populate the 'New Project' form definition
 * and all required dropdowns.
 * * This function is idempotent: it will clear old data before adding
 * new data to prevent duplicates.
 *
 * (FIXED: Now safely handles empty 'PRJ_Clients' and 'SYS_Users' sheets)
 */
function seedProjectFormAndDropdowns() {
  const ss = getTargetSpreadsheet();
  
  // Get all required sheets
  const formsSheet = ss.getSheetByName('SYS_Dynamic_Forms');
  const dropsSheet = ss.getSheetByName('SYS_Dropdowns');
  const clientsSheet = ss.getSheetByName('PRJ_Clients');
  const usersSheet = ss.getSheetByName('SYS_Users');

  // Safety check to ensure all sheets exist
  if (!formsSheet || !dropsSheet || !clientsSheet || !usersSheet) {
    let missing = [
      !formsSheet ? 'SYS_Dynamic_Forms' : null,
      !dropsSheet ? 'SYS_Dropdowns' : null,
      !clientsSheet ? 'PRJ_Clients' : null,
      !usersSheet ? 'SYS_Users' : null
    ].filter(Boolean).join(', ');
    
    Logger.log(`Error: Missing one or more required sheets: ${missing}.`);
    SpreadsheetApp.getUi().alert(`Error: Missing required sheets: ${missing}`);
    return;
  }

  Logger.log('All sheets found. Starting seeding process...');

  // --- 1. Clear existing data to prevent duplicates ---
  Logger.log('Clearing old data...');
  // Clear old form definition
  clearOldData(formsSheet, 'FORM_PRJ_AddProject', 0); // 0 is the column index for 'Form_ID'
  
  // Clear old dropdowns
  clearOldData(dropsSheet, 'DD_Project_Status', 0); // 0 is the column index for 'Key'
  clearOldData(dropsSheet, 'DD_Clients', 0);
  clearOldData(dropsSheet, 'DD_Managers', 0);

  // --- 2. Define New Form Data for 'FORM_PRJ_AddProject' ---
  // Based on the schema of 'SYS_Dynamic_Forms'
  const newFormData = [
    // [Form_ID, Form_Title, Tab_ID, Tab_Name, Section_Header, Field_ID, Field_Label, Field_Type, Source_Sheet, Source_Range, Mandatory, Default_Value, Dropdown_Key, Target_Sheet, Target_Column, Role_ID]
    ['FORM_PRJ_AddProject', 'إضافة مشروع جديد', 'Sub_PRJ_Main', 'المشاريع', 'بيانات المشروع الأساسية', 'PRJ_Project_ID', 'معرّف المشروع', 'Auto', '', '', 'No', '', '', 'PRJ_Main', 'Project_ID', ''],
    ['FORM_PRJ_AddProject', 'إضافة مشروع جديد', 'Sub_PRJ_Main', 'المشاريع', 'بيانات المشروع الأساسية', 'PRJ_Project_Name', 'اسم المشروع', 'Text', '', '', 'Yes', '', '', 'PRJ_Main', 'Project_Name', ''],
    ['FORM_PRJ_AddProject', 'إضافة مشروع جديد', 'Sub_PRJ_Main', 'المشاريع', 'بيانات المشروع الأساسية', 'PRJ_Client_ID', 'العميل', 'Dropdown', 'SYS_Dropdowns', '', 'Yes', '', 'DD_Clients', 'PRJ_Main', 'Client_ID', ''],
    ['FORM_PRJ_AddProject', 'إضافة مشروع جديد', 'Sub_PRJ_Main', 'المشاريع', 'بيانات المشروع الأساسية', 'PRJ_Contract_ID', 'معرّف العقد', 'Text', '', '', 'No', '', '', 'PRJ_Main', 'Contract_ID', ''],
    ['FORM_PRJ_AddProject', 'إضافة مشروع جديد', 'Sub_PRJ_Main', 'المشاريع', 'بيانات المشروع الأساسية', 'PRJ_Status', 'حالة المشروع', 'Dropdown', 'SYS_Dropdowns', '', 'Yes', 'New', 'DD_Project_Status', 'PRJ_Main', 'Status', ''],
    ['FORM_PRJ_AddProject', 'إضافة مشروع جديد', 'Sub_PRJ_Main', 'المشاريع', 'التواريخ', 'PRJ_Start_Date', 'تاريخ البدء', 'Date', '', '', 'Yes', '', '', 'PRJ_Main', 'Start_Date', ''],
    ['FORM_PRJ_AddProject', 'إضافة مشروع جديد', 'Sub_PRJ_Main', 'المشاريع', 'التواريخ', 'PRJ_Planned_Days', 'الأيام المخططة', 'Number', '', '', 'No', '', '', 'PRJ_Main', 'Planned_Days', ''],
    ['FORM_PRJ_AddProject', 'إضافة مشروع جديد', 'Sub_PRJ_Main', 'المشاريع', 'التواريخ', 'PRJ_Planned_End_Date', 'تاريخ الانتهاء المخطط', 'Date', '', '', 'No', '', '', 'PRJ_Main', 'Planned_End_Date', ''],
    ['FORM_PRJ_AddProject', 'إضافة مشروع جديد', 'Sub_PRJ_Main', 'المشاريع', 'البيانات المالية', 'PRJ_Budget', 'الميزانية', 'Number', '', '', 'No', '', '', 'PRJ_Main', 'Budget', ''],
    ['FORM_PRJ_AddProject', 'إضافة مشروع جديد', 'Sub_PRJ_Main', 'المشاريع', 'البيانات المالية', 'PRJ_Planned_Material_Expense', 'تكلفة المواد المخططة', 'Number', '', '', 'No', '', '', 'PRJ_Main', 'Planned_Material_Expense', ''],
    ['FORM_PRJ_AddProject', 'إضافة مشروع جديد', 'Sub_PRJ_Main', 'المشاريع', 'الإدارة والملاحظات', 'PRJ_Manager', 'مدير المشروع', 'Dropdown', 'SYS_Dropdowns', '', 'Yes', '', 'DD_Managers', 'PRJ_Main', 'Manager', ''],
    ['FORM_PRJ_AddProject', 'إضافة مشروع جديد', 'Sub_PRJ_Main', 'المشاريع', 'الإدارة والملاحظات', 'PRJ_Notes', 'ملاحظات', 'Paragraph', '', '', 'No', '', '', 'PRJ_Main', 'Notes', '']
  ];

  // --- 3. Define New Static Dropdown Data ---
  // Based on the schema of 'SYS_Dropdowns'
  const newStaticDropdowns = [
    // [Key, English_Title, Arabic_Title, Is_Active, Sort_Order]
    ['DD_Project_Status', 'New', 'جديد', 'TRUE', 1],
    ['DD_Project_Status', 'In_Progress', 'قيد التنفيذ', 'TRUE', 2],
    ['DD_Project_Status', 'Completed', 'مكتمل', 'TRUE', 3],
    ['DD_Project_Status', 'On_Hold', 'معلق', 'TRUE', 4],
    ['DD_Project_Status', 'Cancelled', 'ملغى', 'TRUE', 5]
  ];

  // --- 4. Prepare Dynamic Client Dropdowns (from PRJ_Clients) ---
  // Assumes Client_ID is in Col A, Client_Name is in Col B
  let clientDropdowns = []; // Default to empty array
  const clientLastRow = clientsSheet.getLastRow();
  
  if (clientLastRow > 1) { // ***FIX***: Only run if there is data beyond the header
    const clientDataValues = clientsSheet.getRange(2, 1, clientLastRow - 1, 2).getValues();
    clientDropdowns = clientDataValues
      .filter(row => row[0] && row[1]) // Ensure Client_ID (row[0]) and Client_Name (row[1]) exist
      .map((row, index) => ['DD_Clients', row[0], row[1], 'TRUE', index + 1]); // [Key, English_Title(Value), Arabic_Title(Display), Active, Sort]
  }
  Logger.log(`Found ${clientDropdowns.length} clients to seed.`);


  // --- 5. Prepare Dynamic Manager Dropdowns (from SYS_Users) ---
  // Assumes User_Id is in Col A, Full_Name is in Col B
  let managerDropdowns = []; // Default to empty array
  const usersLastRow = usersSheet.getLastRow();

  if (usersLastRow > 1) { // ***FIX***: Only run if there is data beyond the header
    const usersDataValues = usersSheet.getRange(2, 1, usersLastRow - 1, 2).getValues();
    managerDropdowns = usersDataValues
      .filter(row => row[0] && row[1]) // Ensure User_Id (row[0]) and Full_Name (row[1]) exist
      .map((row, index) => ['DD_Managers', row[0], row[1], 'TRUE', index + 1]); // [Key, English_Title(Value), Arabic_Title(Display), Active, Sort]
  }
  Logger.log(`Found ${managerDropdowns.length} managers to seed.`);

  // --- 6. Write all new data to the sheets ---
  Logger.log('Writing new data to sheets...');
  
  // Append form data
  if (newFormData.length > 0) {
    formsSheet.getRange(formsSheet.getLastRow() + 1, 1, newFormData.length, newFormData[0].length).setValues(newFormData);
    Logger.log(`Wrote ${newFormData.length} rows to SYS_Dynamic_Forms.`);
  }

  // Combine all new dropdowns and append
  const allNewDropdowns = newStaticDropdowns.concat(clientDropdowns).concat(managerDropdowns);
  
  if (allNewDropdowns.length > 0) {
    dropsSheet.getRange(dropsSheet.getLastRow() + 1, 1, allNewDropdowns.length, allNewDropdowns[0].length).setValues(allNewDropdowns);
    Logger.log(`Wrote ${allNewDropdowns.length} rows to SYS_Dropdowns.`);
  }

  Logger.log('Seeding complete.');
  SpreadsheetApp.getUi().alert('Success! The Project Form and all required dropdowns have been seeded.');
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
  const newData = data.filter(row => row[colIndex] !== key);

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
