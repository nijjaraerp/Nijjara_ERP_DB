━━━━━━━━━━━━━━━━━━━━━━━━━━
➊ ERP Schema (Tabs & Headers)
━━━━━━━━━━━━━━━━━━━━━━━━━━

➊.1 SYS_Audit_Report
 • Audit_Id
 • Entity
 • Entity_Id
 • Action
 • Actor_Id
 • Summary
 • Details
 • Scope
 • Created_At

➊.2 PV_FIN_InDirExpense_Repeated_View
 • معرف المصروف
 • اسم المصروف
 • الفئة
 • التكرار
 • تاريخ البدء
 • تاريخ الانتهاء
 • تاريخ الدفع التالي
 • المبلغ
 • تم الدفع بواسطة
 • حالة الدفع
 • طريقة الدفع
 • طريقة التخصيص
 • ملاحظات
 • تاريخ الإنشاء
 • تاريخ التحديث

➊.3 PV_FIN_InDirExpense_Once_View
 • معرف المصروف
 • اسم المصروف
 • الفئة
 • تاريخ المصروف
 • المبلغ
 • تم الدفع بواسطة
 • حالة الدفع
 • طريقة الدفع
 • طريقة التخصيص
 • العمر المفيد بالأشهر
 • تاريخ بدء الاستهلاك
 • ملاحظات
 • تاريخ الإنشاء
 • تاريخ التحديث

➊.4 PV_FIN_Project_Revenue_View
 • معرف الإيراد
 • معرف المشروع
 • اسم المشروع
 • تاريخ الإيراد
 • المبلغ
 • نوع الإيراد
 • المصدر
 • الوصف
 • طريقة الدفع
 • رقم الفاتورة
 • حالة الدفع
 • أنشئ بواسطة
 • تاريخ الإنشاء
 • تاريخ التحديث

➊.5 PV_FIN_Revenues_View
 • معرف الإيراد
 • تاريخ الإيراد
 • نوع الإيراد
 • المبلغ
 • المصدر
 • الوصف
 • طريقة الدفع
 • حالة الدفع
 • معرف العميل
 • اسم العميل
 • معرف المشروع
 • اسم المشروع
 • المرجع
 • ملاحظات
 • أنشئ بواسطة
 • تاريخ الإنشاء
 • تاريخ التحديث

➊.6 PV_FIN_Journal_View
 • معرف القيد
 • تاريخ القيد
 • الحساب
 • حساب الطرف المقابل
 • مبلغ الخصم
 • مبلغ الائتمان
 • معرف المشروع
 • الوصف
 • المرجع
 • أنشئ بواسطة
 • تاريخ الإنشاء
 • تاريخ التحديث

➊.7 PV_FIN_Custody_View
 • معرف العهدة
 • معرف الموظف
 • اسم الموظف
 • تاريخ الإصدار
 • تاريخ الاستحقاق للعودة
 • المبلغ
 • الغرض
 • الحالة
 • ملاحظات
 • أنشئ بواسطة
 • تاريخ الإنشاء
 • تاريخ التحديث

➊.8 PV_FIN_GL_Totals_View
 • الحساب
 • إجمالي الخصم
 • إجمالي الائتمان
 • الرصيد
 • آخر تحديث

➊.9 PV_PRJ_Dashboard
 • معرف المشروع
 • اسم المشروع
 • تاريخ البدء
 • تاريخ الانتهاء المخطط
 • الحالة
 • المصروف الفعلي للمواد
 • إجمالي المصروفات غير المباشرة
 • إجمالي المدفوعات المستلمة
 • ميزانية المشروع
 • الربح
 • علامة الجدولة
 • علامة التكلفة

➊.10 PV_PRJ_KPIs
 • المقياس
 • القيمة
 • ملاحظات

➊.11 PV_FIN_KPIs
 • المقياس
 • القيمة
 • ملاحظات

➊.12 PV_HR_Employees
 • معرف الموظف
 • الاسم الكامل بالإنجليزية
 • الاسم الكامل بالعربية
 • تاريخ الميلاد
 • النوع
 • الرقم القومي
 • الحالة الاجتماعية
 • الحالة العسكرية
 • رقم الجوال الرئيسي
 • رقم الجوال الفرعي
 • عنوان السكن
 • البريد الإلكتروني
 • جهة الاتصال للطوارئ
 • صلة القرابة
 • جوال جهة الطوارئ
 • المسمى الوظيفي
 • القسم
 • تاريخ التعيين
 • نوع العقد
 • الحالة
 • الراتب الأساسي
 • البدلات
 • الاستقطاعات
 • تاريخ الإنشاء
 • أنشئ بواسطة

➊.13 PV_HR_Departments
 • رمز القسم
 • اسم القسم بالإنجليزية
 • اسم القسم بالعربية
 • نشط
 • ترتيب العرض
 • تاريخ الإنشاء
 • أنشئ بواسطة

➊.14 PV_HR_Attendance
 • معرف الحضور
 • معرف الموظف
 • التاريخ
 • وقت الدخول
 • وقت الخروج
 • عدد الساعات
 • دقائق العمل الإضافي
 • قيمة العمل الإضافي
 • دقائق التأخير
 • دقائق الانصراف المبكر
 • دقائق العمل الإضافي الإجمالية
 • ملاحظات
 • الحالة
 • تاريخ الإنشاء
 • أنشئ بواسطة

➊.15 PV_HR_Leave
 • معرف الإجازة
 • معرف الموظف
 • نوع الإجازة
 • تاريخ البدء
 • تاريخ الانتهاء
 • عدد الأيام
 • الحالة
 • ملاحظات

➊.16 PV_HR_Leave_Requests
 • معرف الإجازة
 • معرف الموظف
 • نوع الإجازة
 • تاريخ البدء
 • تاريخ الانتهاء
 • عدد الأيام
 • الأيام
 • الموافق
 • السبب
 • ملاحظات
 • الحالة
 • تاريخ الإنشاء
 • أنشئ بواسطة

➊.17 PV_HR_Advances
 • معرف السلفة
 • معرف الموظف
 • تاريخ الإصدار
 • المبلغ
 • فترة التسوية
 • قسط السلفة
 • ملاحظات
 • الحالة
 • تاريخ الإنشاء

➊.18 PV_HR_Deductions
 • معرف الاستقطاع
 • معرف الجزاء
 • معرف الموظف
 • التاريخ
 • قيمة الاستقطاع
 • تاريخ الإنشاء

➊.19 PV_HR_Payroll
 • معرف كشف الرواتب
 • معرف الموظف
 • تاريخ البدء
 • تاريخ الانتهاء
 • الراتب الأساسي
 • إجمالي مبلغ العمل الإضافي
 • قسط السلفة
 • قيمة الاستقطاع
 • صافي الدفع
 • الحالة
 • تاريخ الإنشاء

➊.20 SYS_Documents
 • Doc_ID
 • Entity
 • Entity_ID
 • File_Name
 • Label
 • Drive_File_ID
 • Drive_URL
 • Uploaded_By
 • Created_At

➊.21 SYS_Profile_View
 • View_ID
 • Tab_ID
 • Tab_Name
 • Section_Header
 • Mode
 • Source_Sheet
 • Where_Column
 • Field_Column
 • Field_Label
 • Format
 • Sort
 • Role_ID

➊.22 SYS_Tab_Register
 • Record_Type
 • Tab_ID
 • Tab_Label_EN
 • Tab_Label_AR
 • Sub_ID
 • Sub_Label_EN
 • Sub_Label_AR
 • Route
 • Sort_Order
 • Source_Sheet
 • Render_Mode
 • Add_Form_ID
 • View_Label
 • Add_Label
 • Permissions
 • Search_Bar
 • Filter_Options

➊.23 SYS_Dropdowns
 • Key
 • English_Title
 • Arabic_Title
 • Is_Active
 • Sort_Order

➊.24 SYS_Dynamic_Forms
 • Form_ID
 • Form_Title
 • Tab_ID
 • Tab_Name
 • Section_Header
 • Field_ID
 • Field_Label
 • Field_Type
 • Source_Sheet
 • Source_Range
 • Mandatory
 • Default_Value
 • Dropdown_Key
 • Target_Sheet
 • Target_Column
 • Role_ID
 • Show
 • Quick_Actions

➊.25 SYS_Users
 • User_Id
 • Full_Name
 • Username
 • Email
 • Job_Title
 • Department
 • Role_Id
 • IsActive
 • Disabled_At
 • Disabled_By
 • Password_Hash
 • Last_Login
 • Created_At
 • Created_By
 • Updated_At
 • Updated_By
 • External_Id
 • MFA_Enabled
 • Notes

➊.26 SYS_Roles
 • Role_Id
 • Role_Title
 • Description
 • Is_System
 • Created_At
 • Created_By
 • Updated_At
 • Updated_By

➊.27 SYS_Permissions
 • Permission_Key
 • Permission_Label
 • Description
 • Category
 • Created_At
 • Created_By
 • Updated_At
 • Updated_By

➊.28 SYS_Role_Permissions
 • Role_Id
 • Permission_Key
 • Scope
 • Allowed
 • Constraints
 • Created_At
 • Created_By
 • Updated_At
 • Updated_By

➊.29 SYS_Settings
 • Setting_Key
 • Setting_Value
 • Description_EN
 • Updated_By
 • Updated_At
 • Created_At

➊.30 SYS_Audit_Log
 • Timestamp
 • User
 • Action
 • Details
 • Entity
 • Entity_Id
 • Scope
 • Sheet
 • Target_Id
 • Actor_Id

➊.31 SYS_Sessions
 • Session_Id
 • User_Id
 • Actor_Email
 • Actor_User_Id
 • Type
 • Status
 • Device
 • Ip_Address
 • Auth_Token
 • Started_At
 • Ended_At
 • Created_At
 • Created_By
 • Last_Seen
 • Revoked_At
 • Revoked_By
 • Metadata

➊.32 SYS_User_Properties
 • User_Id
 • Property_Key
 • Property_Value
 • Created_At
 • Created_By
 • Updated_At
 • Updated_By

➊.33 SYS_PubHolidays
 • Pub_Holiday_Date
 • Pub_Holiday_Name

➊.34 PV_SYS_Users_Table
 • User_Id
 • Full_Name
 • Username
 • Email
 • Department
 • Role_Id
 • IsActive
 • Job_Title
 • Last_Login
 • Updated_At

➊.35 HR_Departments
 • Dept_Code
 • Dept_Name_EN
 • Dept_Name_AR
 • Is_Active
 • Sort_Order
 • Created_At
 • Created_By

➊.36 HR_Employees
 • Employee_ID
 • Full_Name_EN
 • Full_Name_AR
 • Date_of_Birth
 • Gender
 • National_ID
 • Marital_Status
 • Military_Status
 • Mobile_Main
 • Mobile_Sub
 • Home_Address
 • Email
 • Emergency_Contact
 • Relation
 • EC_Mobile
 • Job_Title
 • Department
 • Hire_Date
 • Contract_Type
 • Status
 • Basic_Salary
 • Allowances
 • Deductions
 • Created_At
 • Created_By

➊.37 HR_Attendance
 • Attendance_ID
 • Employee_ID
 • Date
 • Check_In
 • Check_Out
 • Hours
 • OT_Minutes
 • OT_Amount
 • Late_Minutes
 • EarlyLeave_Minutes
 • Overtime_Minutes
 • Notes
 • Status
 • Created_At
 • Created_By

➊.38 HR_Leave_Requests
 • Leave_ID
 • Employee_ID
 • Leave_Type
 • Start_Date
 • End_Date
 • Days_Count
 • Days
 • Approver
 • Reason
 • Notes
 • Status
 • Created_At
 • Created_By

➊.39 HR_Absence_Deductions
 • Absence_ID
 • Employee_ID
 • Absence_Date
 • Absence_Type
 • Duration
 • Deduction_Amount
 • Reason
 • Status
 • Entry_Date
 • Entered_By

➊.40 HR_Leave
 • Leave_ID
 • Emp_ID
 • Leave_Type
 • Start_Date
 • End_Date
 • Days_Count
 • Status
 • Notes

➊.41 HR_Leave_Analysis
 • Employee_ID
 • Full_Name
 • Annual_Leave_Count
 • Sick_Leave_Count
 • Emergency_Leave_Count
 • Total_Leave_Days
 • _

➊.42 HR_Advances
 • Advance_ID
 • Employee_ID
 • Issue_Date
 • Amount
 • Settlement_Period
 • Advance_Installment
 • Notes
 • Status
 • Created_At

➊.43 HR_OverTime
 • OverTime_ID
 • Employee_ID
 • Date
 • OT_WorkDay
 • OT_WorkDay_Amount
 • OT_WeekEnd
 • OT_WeekEnd_Amount
 • OT_Public_Holiday
 • OT_Public_Holiday_Amount
 • Total_OT_Amount
 • Created_At

➊.44 HR_Penalties
 • Penalty_ID
 • Penalty_Name
 • Penalty_Rule
 • Notes
 • Created_At

➊.45 HR_Deductions
 • Deduction_ID
 • Penalty_ID
 • Employee_ID
 • Date
 • Deduction_Amount
 • Created_At

➊.46 HR_Payroll
 • Payroll_ID
 • Employee_ID
 • Start_Date
 • End_Date
 • Basic_Salary
 • Total_OT_Amount
 • Advance_Installment
 • Deduction_Amount
 • Net_Pay
 • Status
 • Created_At

➊.47 HR_KPIs
 • Metric
 • Value
 • Notes

➊.48 PRJ_Main
 • Project_ID
 • Project_Name
 • Client_ID
 • Client_Name
 • Contract_ID
 • Start_Date
 • Planned_Days
 • Planned_End_Date
 • End_Date
 • Status
 • Project_Type
 • Project_Priority
 • Notes
 • Proj_Budget
 • Budget
 • Total_Pay_Received
 • Total_Pay_Pending
 • Planned_Material_Expense
 • Actual_Material_Expense
 • Planned_Materials
 • Actual_Materials
 • Manager
 • Created_At
 • Created_By

➊.49 PRJ_Tasks
 • Task_ID
 • Project_ID
 • Task_Name
 • Task_Priority
 • Assignee_ID
 • Planned_Start
 • Planned_End
 • Actual_Start
 • Actual_End
 • Status
 • Created_At
 • Created_By

➊.50 PRJ_Costs
 • Cost_ID
 • Project_ID
 • Date
 • Category
 • Description
 • Amount
 • Created_At
 • Created_By

➊.51 PRJ_Clients
 • Client_ID
 • Client_Name
 • Client_Mobile_1
 • Client_Mobile_2
 • Client_Email
 • Created_At

➊.52 PV_PRJ_Main
 • معرّف المشروع
 • اسم المشروع
 • العميل
 • تاريخ البدء
 • الأيام المخططة
 • تاريخ الانتهاء المخطط
 • تاريخ الانتهاء الفعلي
 • حالة المشروع
 • نوع المشروع
 • أولوية المشروع
 • الميزانية
 • التكلفة الفعلية
 • الفرق عن الميزانية
 • نسبة التقدم
 • ملاحظات
 • مدير المشروع

➊.53 PV_PRJ_Tasks
 • معرف المهمة
 • معرف المشروع
 • اسم المهمة
 • أولوية المهمة
 • معرف المسؤول
 • تاريخ البدء المخطط
 • تاريخ الانتهاء المخطط
 • تاريخ البدء الفعلي
 • تاريخ الانتهاء الفعلي
 • الحالة
 • تاريخ الإنشاء
 • أنشئ بواسطة

➊.54 PV_PRJ_Costs
 • معرّف المشروع
 • اسم المشروع
 • تاريخ التكلفة
 • فئة التكلفة
 • الوصف
 • المبلغ
 • أنشئ بواسطة
 • تاريخ الإنشاء

➊.55 PV_PRJ_Clients
 • معرف العميل
 • اسم العميل
 • رقم جوال العميل 1
 • رقم جوال العميل 2
 • بريد العميل الإلكتروني
 • تاريخ الإنشاء

➊.56 PV_PRJ_InDirExp_Allocations
 • معرف التخصيص
 • معرف المصروفات غير المباشرة المتكررة
 • معرف المصروفات غير المباشرة الواحدة
 • معرف المشروع
 • طريقة التخصيص
 • نسبة التخصيص
 • قيمة التخصيص
 • تاريخ الإنشاء

➊.57 PV_PRJ_Schedule_Calc
 • معرف المشروع
 • اسم المشروع
 • تاريخ البدء
 • الأيام المخططة
 • تاريخ الانتهاء المخطط
 • علامة الجدولة

➊.58 PV_FIN_DirectExpenses_View
 • معرف المصروف
 • اسم المشروع
 • تاريخ المصروف
 • الصنف
 • الكمية
 • الوحدة
 • سعر الوحدة
 • الإجمالي مع الضريبة
 • حالة الدفع
 • طريقة الدفع
 • تاريخ تسجيل المعاملة

➊.59 PRJ_Materials
 • Material_ID
 • Name_AR
 • Name_EN
 • Category
 • Subcategory
 • Sub2
 • Default_Unit
 • Default_Price
 • VAT_Rate
 • Active
 • Updated_At
 • Updated_By

➊.60 PV_PRJ_Materials
 • Material_ID
 • Name_AR
 • Name_EN
 • Category
 • Subcategory
 • Default_Unit
 • Default_Price
 • VAT_Rate
 • Active
 • Updated_At
 • Updated_By

➊.61 PRJ_InDirExp_Allocations
 • Allocation_ID
 • InDirExpense_Repeated_ID
 • InDirExpense_Once_ID
 • Project_ID
 • Allocation_Method
 • Allocation_Percentage
 • Allocation_Amount
 • Created_At

➊.62 PRJ_Schedule_Calc
 • Project_ID
 • Project_Name
 • Start_Date
 • Planned_Days
 • Planned_End_Date
 • Schedule_Flag

➊.63 PRJ_Dashboard
 • Project_ID
 • Project_Name
 • Start_Date
 • Planned_End_Date
 • Status
 • Actual_Material_Expense
 • Total_Ind_Expense
 • Total_Pay_Received
 • Proj_Budget
 • Profit
 • Schedule_Flag
 • Cost_Flag

➊.64 PRJ_KPIs
 • Metric
 • Value
 • Notes

➊.65 FIN_DirectExpenses
 • Expense_ID
 • Project_ID
 • Date
 • Category
 • Level_1
 • Level_2
 • Unit
 • Qty
 • Unit_Price
 • Amount
 • VAT_Rate
 • VAT_Amount
 • Total_With_VAT
 • Material_ID
 • Material_Name
 • Pay_Status
 • Pay_Method
 • Notes
 • Created_At
 • Created_By
 • Updated_At
 • Updated_By

➊.66 FIN_InDirExpense_Repeated
 • InDirExpense_Repeated_ID
 • Expense_Name
 • Category
 • Frequency
 • Start_Date
 • End_Date
 • Next_Pay_Date
 • Amount
 • Paid_By
 • Pay_Status
 • Pay_Method
 • Allocation_Method
 • Notes
 • Created_At
 • Created_By
 • Updated_At

➊.67 FIN_InDirExpense_Once
 • InDirExpense_Once_ID
 • Expense_Name
 • Category
 • Expense_Date
 • Amount
 • Paid_By
 • Pay_Status
 • Pay_Method
 • Allocation_Method
 • Useful_Life_Months
 • Depreciation_Start_Date
 • Notes
 • Created_At
 • Created_By
 • Updated_At

➊.68 FIN_Project_Revenue
 • Revenue_ID
 • Project_ID
 • Revenue_Date
 • Amount
 • Revenue_Type
 • Source
 • Description
 • Pay_Method
 • Invoice_Number
 • Pay_Status
 • Created_At
 • Created_By
 • Updated_At

➊.69 FIN_Revenues
 • Revenue_ID
 • Revenue_Type
 • Revenue_Date
 • Amount
 • Source
 • Description
 • Pay_Method
 • Pay_Status
 • Client_ID
 • Project_ID
 • Reference
 • Notes
 • Created_At
 • Created_By
 • Updated_At

➊.70 FIN_Journal
 • Journal_ID
 • Journal_Date
 • Account
 • Counterparty_Account
 • Debit_Amount
 • Credit_Amount
 • Project_ID
 • Description
 • Reference
 • Created_At
 • Created_By
 • Updated_At

➊.71 FIN_Custody
 • Custody_ID
 • Employee_ID
 • Employee_Name
 • Issue_Date
 • Return_Due_Date
 • Amount
 • Purpose
 • Status
 • Notes
 • Created_At
 • Created_By
 • Updated_At

➊.72 FIN_GL_Totals
 • Account
 • Debit_Total
 • Credit_Total
 • Balance
 • Last_Updated

➊.73 FIN_KPIs
 • Metric
 • Value
 • Notes

━━━━━━━━━━━━━━━━━━━━━━━━━━
➋ ERP Data (All Sheets)
━━━━━━━━━━━━━━━━━━━━━━━━━━

➋.1 SYS_Audit_Report
 (no data rows)

➋.2 PV_FIN_InDirExpense_Repeated_View
 Headers:
  • معرف المصروف
  • اسم المصروف
  • الفئة
  • التكرار
  • تاريخ البدء
  • تاريخ الانتهاء
  • تاريخ الدفع التالي
  • المبلغ
  • تم الدفع بواسطة
  • حالة الدفع
  • طريقة الدفع
  • طريقة التخصيص
  • ملاحظات
  • تاريخ الإنشاء
  • تاريخ التحديث
 Rows:
  1) IREP-001 | إيجار | إيجار المصنع | Mon Feb 10 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Wed Feb 05 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Fri Mar 07 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | شيك | معلق | كاش | 6000 | مصروف شهري متكرر - تحميل على الإدارة العامة | مبلغ ثابت | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  2) IREP-002 | إيجار | إيجار المصنع | Tue Jan 21 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Jan 16 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sat Feb 15 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | كاش | 2800 | مصروف شهري متكرر - تحميل على الإدارة العامة | مبلغ ثابت | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  3) IREP-003 | مرافق | انترنت | Mon Jan 13 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Wed Jan 08 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Fri Feb 07 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | شيك | معلق | كاش | 3200 | مصروف شهري متكرر - تحميل على الإدارة العامة | لكل وحدة | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  4) IREP-004 | مرافق | مياه | Sat Mar 01 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Mon Feb 24 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Wed Mar 26 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | مدفوع | كاش | 8000 | مصروف شهري متكرر - تحميل على الإدارة العامة | لكل وحدة | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  5) IREP-005 | أمن | خدمة حراسة ليلية | Fri Feb 28 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sun Feb 23 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Tue Mar 25 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | فودافون كاش | 3200 | مصروف شهري متكرر - تحميل على الإدارة العامة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  6) IREP-006 | نقل | سولار سيارات النقل | Wed Feb 19 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Fri Feb 14 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sun Mar 16 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | معلق | كاش | 15000 | مصروف شهري متكرر - تحميل على الإدارة العامة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  7) IREP-007 | مرافق | مياه | Tue Feb 11 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Feb 06 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sat Mar 08 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | بنك | 22000 | مصروف شهري متكرر - تحميل على الإدارة العامة | لكل وحدة | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  8) IREP-008 | أمن | خدمة حراسة ليلية | Wed Feb 05 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Fri Jan 31 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sun Mar 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | شيك | مدفوع | بنك | 22000 | مصروف شهري متكرر - تحميل على الإدارة العامة | مبلغ ثابت | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  9) IREP-009 | إداري | عقد نظافة المكتب | Sun Feb 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Tue Jan 28 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Feb 27 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | مدفوع | كاش | 22000 | مصروف شهري متكرر - تحميل على الإدارة العامة | لكل وحدة | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  10) IREP-010 | نقل | سولار سيارات النقل | Tue Jan 28 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Jan 23 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sat Feb 22 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | مدفوع | فودافون كاش | 2800 | مصروف شهري متكرر - تحميل على الإدارة العامة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  11) IREP-011 | مرافق | انترنت | Thu Feb 13 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sat Feb 08 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Mon Mar 10 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | شيك | معلق | بنك | 15000 | مصروف شهري متكرر - تحميل على الإدارة العامة | مبلغ ثابت | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  12) IREP-012 | إداري | عقد نظافة المكتب | Tue Jan 28 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Jan 23 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sat Feb 22 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | معلق | فودافون كاش | 4500 | مصروف شهري متكرر - تحميل على الإدارة العامة | مبلغ ثابت | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  13) IREP-013 | إيجار | إيجار المصنع | Fri Feb 14 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sun Feb 09 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Tue Mar 11 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | مدفوع | فودافون كاش | 12500 | مصروف شهري متكرر - تحميل على الإدارة العامة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  14) IREP-014 | مرافق | انترنت | Wed Jan 22 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Fri Jan 17 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sun Feb 16 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | مدفوع | بنك | 3200 | مصروف شهري متكرر - تحميل على الإدارة العامة | مبلغ ثابت | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  15) IREP-015 | مرافق | كهرباء | Sun Mar 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Tue Feb 25 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Mar 27 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | فودافون كاش | 6000 | مصروف شهري متكرر - تحميل على الإدارة العامة | لكل وحدة | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅

➋.3 PV_FIN_InDirExpense_Once_View
 Headers:
  • معرف المصروف
  • اسم المصروف
  • الفئة
  • تاريخ المصروف
  • المبلغ
  • تم الدفع بواسطة
  • حالة الدفع
  • طريقة الدفع
  • طريقة التخصيص
  • العمر المفيد بالأشهر
  • تاريخ بدء الاستهلاك
  • ملاحظات
  • تاريخ الإنشاء
  • تاريخ التحديث
 Rows:
  1) IONC-001 | كمبيوتر / تكنولوجيا | لابتوب جديد لمدير المشروع | Sat Feb 15 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 36000 | 12 | Mon Mar 17 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | كارت مالك الشركة | مدفوع | كارت | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅
  2) IONC-002 | ماكينة | تغيير اسبيندل CNC | Tue Feb 18 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 8000 | 36 | Thu Mar 20 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | كارت | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅
  3) IONC-003 | ماكينة | تغيير اسبيندل CNC | Mon Mar 03 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 45000 | 48 | Wed Apr 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | كارت مالك الشركة | مدفوع | كارت | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅
  4) IONC-004 | كمبيوتر / تكنولوجيا | لابتوب جديد لمدير المشروع | Tue Apr 22 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 8000 | 60 | Thu May 22 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | تحويل بنكي | معلق | كاش | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅
  5) IONC-005 | عدة و أدوات | طقم دريل جديد | Fri Apr 18 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 15000 | 60 | Sun May 18 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | تحويل بنكي | مدفوع | كاش | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅
  6) IONC-006 | تطوير الورشة | كمبروسر هوا جديد | Tue Apr 15 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 9000 | 24 | Thu May 15 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | كارت مالك الشركة | معلق | بنك | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅
  7) IONC-007 | عدة و أدوات | طقم دريل جديد | Tue Jan 28 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 8000 | 60 | Thu Feb 27 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | بنك | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅
  8) IONC-008 | سلامة | إعادة تعبئة طفايات الحريق | Fri Mar 07 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 5000 | 60 | Sun Apr 06 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | معلق | كاش | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅
  9) IONC-009 | كمبيوتر / تكنولوجيا | لابتوب جديد لمدير المشروع | Sun Mar 16 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 5000 | 36 | Tue Apr 15 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | مدفوع | بنك | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅
  10) IONC-010 | تطوير الورشة | كمبروسر هوا جديد | Thu Mar 06 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 15000 | 48 | Sat Apr 05 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | مدفوع | بنك | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅
  11) IONC-011 | ماكينة | تغيير اسبيندل CNC | Sat Apr 12 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 8000 | 24 | Mon May 12 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | كارت مالك الشركة | مدفوع | كاش | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅
  12) IONC-012 | كمبيوتر / تكنولوجيا | لابتوب جديد لمدير المشروع | Fri Mar 14 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 9000 | 12 | Sun Apr 13 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | كارت مالك الشركة | مدفوع | كارت | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅
  13) IONC-013 | كمبيوتر / تكنولوجيا | لابتوب جديد لمدير المشروع | Wed Apr 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 45000 | 60 | Fri May 02 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | كارت مالك الشركة | مدفوع | كاش | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅
  14) IONC-014 | كمبيوتر / تكنولوجيا | لابتوب جديد لمدير المشروع | Sat Jan 11 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 8000 | 48 | Mon Feb 10 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | كاش | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅
  15) IONC-015 | كمبيوتر / تكنولوجيا | لابتوب جديد لمدير المشروع | Fri Feb 14 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 36000 | 24 | Sun Mar 16 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | كارت | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅

➋.4 PV_FIN_Project_Revenue_View
 Headers:
  • معرف الإيراد
  • معرف المشروع
  • اسم المشروع
  • تاريخ الإيراد
  • المبلغ
  • نوع الإيراد
  • المصدر
  • الوصف
  • طريقة الدفع
  • رقم الفاتورة
  • حالة الدفع
  • أنشئ بواسطة
  • تاريخ الإنشاء
  • تاريخ التحديث
 Rows:
  1) #VALUE! | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅

➋.5 PV_FIN_Revenues_View
 Headers:
  • معرف الإيراد
  • تاريخ الإيراد
  • نوع الإيراد
  • المبلغ
  • المصدر
  • الوصف
  • طريقة الدفع
  • حالة الدفع
  • معرف العميل
  • اسم العميل
  • معرف المشروع
  • اسم المشروع
  • المرجع
  • ملاحظات
  • أنشئ بواسطة
  • تاريخ الإنشاء
  • تاريخ التحديث
 Rows:
  1) #REF! | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅

➋.6 PV_FIN_Journal_View
 Headers:
  • معرف القيد
  • تاريخ القيد
  • الحساب
  • حساب الطرف المقابل
  • مبلغ الخصم
  • مبلغ الائتمان
  • معرف المشروع
  • الوصف
  • المرجع
  • أنشئ بواسطة
  • تاريخ الإنشاء
  • تاريخ التحديث
 Rows:
  1) #N/A | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅

➋.7 PV_FIN_Custody_View
 Headers:
  • معرف العهدة
  • معرف الموظف
  • اسم الموظف
  • تاريخ الإصدار
  • تاريخ الاستحقاق للعودة
  • المبلغ
  • الغرض
  • الحالة
  • ملاحظات
  • أنشئ بواسطة
  • تاريخ الإنشاء
  • تاريخ التحديث
 Rows:
  1) #N/A | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅

➋.8 PV_FIN_GL_Totals_View
 Headers:
  • الحساب
  • إجمالي الخصم
  • إجمالي الائتمان
  • الرصيد
  • آخر تحديث
 Rows:
  1) #N/A | ∅ | ∅ | ∅ | ∅

➋.9 PV_PRJ_Dashboard
 (no data rows)

➋.10 PV_PRJ_KPIs
 (no data rows)

➋.11 PV_FIN_KPIs
 (no data rows)

➋.12 PV_HR_Employees
 Headers:
  • معرف الموظف
  • الاسم الكامل بالإنجليزية
  • الاسم الكامل بالعربية
  • تاريخ الميلاد
  • النوع
  • الرقم القومي
  • الحالة الاجتماعية
  • الحالة العسكرية
  • رقم الجوال الرئيسي
  • رقم الجوال الفرعي
  • عنوان السكن
  • البريد الإلكتروني
  • جهة الاتصال للطوارئ
  • صلة القرابة
  • جوال جهة الطوارئ
  • المسمى الوظيفي
  • القسم
  • تاريخ التعيين
  • نوع العقد
  • الحالة
  • الراتب الأساسي
  • البدلات
  • الاستقطاعات
  • تاريخ الإنشاء
  • أنشئ بواسطة
 Rows:
  1) EMP-001 | Walid Mohamed Hassan | وليد محمد حسن | 36127 | ذكر | 296040946590819 | أعزب | مؤدى الخدمة | 1216821803 | 1017227719 | الزمالك - شارع ٢٦ يوليو | walid.mohamed.hassan@nijjara.local | أحمد محمد حسن | أم | 1116166365 | أمين مخزن | المخزن | 44987 | مؤقت | تحت التجربة | 12000 | 500 | 400 | 45958.560590277775 | النظام
  2) EMP-002 | Mohamed Ahmed Ibrahim | محمد أحمد إبراهيم | 33248 | ذكر | 295031264114870 | متزوج | مؤدى الخدمة | 1184245466 | 1167829271 | الشيخ زايد - الحي الرابع | mohamed.ahmed.ibrahim@nijjara.local | إسلام محمد فؤاد | أخ | 1237847456 | منسق طلبات مخزن | المشتريات | 45309 | عامل يومية | في إجازة | 12000 | 1000 | 400 | 45958.560590277775 | النظام
  3) EMP-003 | Mohamed Ahmed Ibrahim | محمد أحمد إبراهيم | 36355 | ذكر | 295071177171329 | أعزب | مؤجل | 1185503314 | 1270353521 | المعادي - زهراء المعادي | mohamed.ahmed.ibrahim@nijjara.local | باسم خالد يوسف | أم | 1099277071 | منسق طلبات مخزن | المشتريات | 44940 | عامل يومية | في إجازة | 12000 | 1000 | 0 | 45958.560590277775 | النظام
  4) EMP-004 | Hossam Khaled Mahmoud | حسام خالد محمود | 34820 | ذكر | 296030170982717 | أعزب | إعفاء نهائي | 1014126873 | 1291924795 | الزمالك - شارع ٢٦ يوليو | hossam.khaled.mahmoud@nijjara.local | شريف محمد سيد | ابن عم | 1222312217 | فني تقطيع خشب | ورشة النجارة | 45231 | دوام كامل | تحت التجربة | 8000 | 750 | 0 | 45958.560590277775 | النظام
  5) EMP-005 | Hossam Khaled Mahmoud | حسام خالد محمود | 34622 | ذكر | 298061975899244 | متزوج | مؤدى الخدمة | 1081172177 | 1149600086 | الشيخ زايد - الحي الرابع | hossam.khaled.mahmoud@nijjara.local | يوسف أحمد شريف | زوجة | 1037769586 | محاسب عام | الإدارة المالية | 45511 | مؤقت | تحت التجربة | 6500 | 750 | 400 | 45958.560590277775 | النظام
  6) EMP-006 | Sherif Mohamed Sayed | شريف محمد سيد | 32923 | ذكر | 291031927229287 | متزوج | إعفاء نهائي | 1027024530 | 1177651684 | المعادي - زهراء المعادي | sherif.mohamed.sayed@nijjara.local | جمال أحمد محمود | أخ | 1228452266 | مهندس موقع | مكتب المشاريع | 45355 | مؤقت | نشط | 7000 | 0 | 0 | 45958.560590277775 | النظام
  7) EMP-007 | Karim Mahmoud Fawzy | كريم محمود فوزي | 32593 | ذكر | 297111896307275 | أعزب | مؤدى الخدمة | 1070225401 | 1258662601 | العبور - الحي الخامس | karim.mahmoud.fawzy@nijjara.local | وليد محمد حسن | أب | 1052462607 | مدير مشروع | مكتب المشاريع | 45230 | عامل يومية | تحت التجربة | 9000 | 500 | 0 | 45958.560590277775 | النظام
  8) EMP-008 | Youssef Ahmed Sherif | يوسف أحمد شريف | 34294 | ذكر | 294092057703275 | متزوج | مؤدى الخدمة | 1026018508 | 1258963661 | الشيخ زايد - الحي الرابع | youssef.ahmed.sherif@nijjara.local | حسام خالد محمود | أخ | 1056156833 | لحام | الحدادة / المعدن | 45541 | مؤقت | تحت التجربة | 8000 | 750 | 0 | 45958.560590277775 | النظام
  9) EMP-009 | Bassem Khaled Youssef | باسم خالد يوسف | 33409 | ذكر | 297012282579987 | متزوج | إعفاء نهائي | 1098537448 | 1182770244 | هليوبوليس - شارع النزهة | bassem.khaled.youssef@nijjara.local | وليد محمد حسن | أب | 1031190026 | مشرف فريق موقع | فريق التركيب الموقعي | 45056 | مؤقت | نشط | 15000 | 1200 | 250 | 45958.560590277775 | النظام
  10) EMP-010 | Walid Mohamed Hassan | وليد محمد حسن | 32685 | ذكر | 290100447522532 | متزوج | إعفاء نهائي | 1293700702 | 1141619394 | العبور - الحي الخامس | walid.mohamed.hassan@nijjara.local | أحمد محمد حسن | أم | 1256833983 | مشغل CNC | قسم CNC | 45394 | دوام كامل | في إجازة | 8000 | 1000 | 0 | 45958.560590277775 | النظام
  11) EMP-011 | Tarek Ahmed Sami | طارق أحمد سامي | 36496 | ذكر | 290042529857315 | متزوج | مؤدى الخدمة | 1217354136 | 1165319667 | الشروق - كمبوند الشروق | tarek.ahmed.sami@nijjara.local | عبدالله محمد رمضان | زوجة | 1291206957 | محاسب تكاليف | الإدارة المالية | 45397 | عامل يومية | نشط | 5500 | 750 | 0 | 45958.560590277775 | النظام
  12) EMP-012 | Ahmed Mohamed Hassan | أحمد محمد حسن | 32722 | ذكر | 292121312104875 | متزوج | إعفاء نهائي | 1053091973 | 1243631042 | مدينة نصر - مكرم عبيد | ahmed.mohamed.hassan@nijjara.local | يوسف أحمد شريف | زوجة | 1181763984 | مسؤول مشتريات | المشتريات | 45375 | مؤقت | تحت التجربة | 15000 | 750 | 250 | 45958.560590277775 | النظام
  13) EMP-013 | Islam Mohamed Fouad | إسلام محمد فؤاد | 35446 | ذكر | 297021917063633 | متزوج | مؤجل | 1025551462 | 1118283085 | الزمالك - شارع ٢٦ يوليو | islam.mohamed.fouad@nijjara.local | جمال أحمد محمود | زوجة | 1226344229 | فني تشكيل معدن | الحدادة / المعدن | 44932 | مؤقت | نشط | 9000 | 500 | 400 | 45958.560590277775 | النظام
  14) EMP-014 | Karim Mahmoud Fawzy | كريم محمود فوزي | 33212 | ذكر | 292120615015625 | متزوج | مؤجل | 1293410347 | 1226138696 | مدينة نصر - مكرم عبيد | karim.mahmoud.fawzy@nijjara.local | عبدالله محمد رمضان | أخ | 1244881690 | مدير مشروع | مكتب المشاريع | 45173 | دوام كامل | تحت التجربة | 5500 | 500 | 0 | 45958.560590277775 | النظام
  15) EMP-015 | Sherif Mohamed Sayed | شريف محمد سيد | 35197 | ذكر | 290010388765922 | أعزب | مؤجل | 1179628871 | 1257568416 | العبور - الحي الخامس | sherif.mohamed.sayed@nijjara.local | إسلام محمد فؤاد | أم | 1170051007 | محاسب تكاليف | الإدارة المالية | 45545 | عامل يومية | تحت التجربة | 5500 | 0 | 250 | 45958.560590277775 | النظام

➋.13 PV_HR_Departments
 Headers:
  • رمز القسم
  • اسم القسم بالإنجليزية
  • اسم القسم بالعربية
  • نشط
  • ترتيب العرض
  • تاريخ الإنشاء
  • أنشئ بواسطة
 Rows:
  1) MGMT | Management | الإدارة | true | 1 | 45946 | SYSTEM
  2) HR | Human Resources | الموارد البشرية | true | 2 | 45946 | SYSTEM
  3) FIN | Finance | المالية | true | 3 | 45946 | SYSTEM
  4) PRJ | Projects | المشروعات | true | 4 | 45946 | SYSTEM

➋.14 PV_HR_Attendance
 Headers:
  • معرف الحضور
  • معرف الموظف
  • التاريخ
  • وقت الدخول
  • وقت الخروج
  • عدد الساعات
  • دقائق العمل الإضافي
  • قيمة العمل الإضافي
  • دقائق التأخير
  • دقائق الانصراف المبكر
  • دقائق العمل الإضافي الإجمالية
  • ملاحظات
  • الحالة
  • تاريخ الإنشاء
  • أنشئ بواسطة
 Rows:

➋.15 PV_HR_Leave
 Headers:
  • معرف الإجازة
  • معرف الموظف
  • نوع الإجازة
  • تاريخ البدء
  • تاريخ الانتهاء
  • عدد الأيام
  • الحالة
  • ملاحظات
 Rows:

➋.16 PV_HR_Leave_Requests
 Headers:
  • معرف الإجازة
  • معرف الموظف
  • نوع الإجازة
  • تاريخ البدء
  • تاريخ الانتهاء
  • عدد الأيام
  • الأيام
  • الموافق
  • السبب
  • ملاحظات
  • الحالة
  • تاريخ الإنشاء
  • أنشئ بواسطة
 Rows:

➋.17 PV_HR_Advances
 Headers:
  • معرف السلفة
  • معرف الموظف
  • تاريخ الإصدار
  • المبلغ
  • فترة التسوية
  • قسط السلفة
  • ملاحظات
  • الحالة
  • تاريخ الإنشاء
 Rows:

➋.18 PV_HR_Deductions
 Headers:
  • معرف الاستقطاع
  • معرف الجزاء
  • معرف الموظف
  • التاريخ
  • قيمة الاستقطاع
  • تاريخ الإنشاء
 Rows:

➋.19 PV_HR_Payroll
 Headers:
  • معرف كشف الرواتب
  • معرف الموظف
  • تاريخ البدء
  • تاريخ الانتهاء
  • الراتب الأساسي
  • إجمالي مبلغ العمل الإضافي
  • قسط السلفة
  • قيمة الاستقطاع
  • صافي الدفع
  • الحالة
  • تاريخ الإنشاء
 Rows:

➋.20 SYS_Documents
 Headers:
  • Doc_ID
  • Entity
  • Entity_ID
  • File_Name
  • Label
  • Drive_File_ID
  • Drive_URL
  • Uploaded_By
  • Created_At
 Rows:
  1) DOC_00001 | Users | USR_00001 | Admin_Profile.pdf | Resume | drive-file-id-001 | https://drive.google.com/file/d/drive-file-id-001/view | SYSTEM | 2025-10-16T23:40:31.420Z

➋.21 SYS_Profile_View
 Headers:
  • View_ID
  • Tab_ID
  • Tab_Name
  • Section_Header
  • Mode
  • Source_Sheet
  • Where_Column
  • Field_Column
  • Field_Label
  • Format
  • Sort
  • Role_ID
 Rows:
  1) PV_SYS_Overview_TotalUsers | Sub_SYS_Overview | Overview | إحصائيات النظام | Number | SYS_Users | ∅ | User_Id | إجمالي المستخدمين | Number | 1 | ∅
  2) PV_SYS_Overview_Active | Sub_SYS_Overview | Overview | إحصائيات النظام | Number | SYS_Users | IsActive | IsActive | المستخدمون النشطون | Number | 2 | ∅
  3) PV_SYS_Overview_Roles | Sub_SYS_Overview | Overview | إحصائيات النظام | Number | SYS_Roles | ∅ | Role_Id | إجمالي الأدوار | Number | 3 | ∅
  4) PV_SYS_Users_Table | Sub_SYS_Users | Users | قائمة المستخدمين | Table | SYS_Users | ∅ | * | قائمة المستخدمين | Table | 1 | ∅
  5) PV_SYS_User_Documents | Sub_SYS_Users | Users | مستندات المستخدم | Table | SYS_Documents | Entity_ID | * | مستندات | Table | 2 | ∅

➋.22 SYS_Tab_Register
 Headers:
  • Record_Type
  • Tab_ID
  • Tab_Label_EN
  • Tab_Label_AR
  • Sub_ID
  • Sub_Label_EN
  • Sub_Label_AR
  • Route
  • Sort_Order
  • Source_Sheet
  • Render_Mode
  • Add_Form_ID
  • View_Label
  • Add_Label
  • Permissions
  • Search_Bar
  • Filter_Options
 Rows:
  1) TAB | Tab_SYS_Management | System Management | إدارة النظام | ∅ | ∅ | ∅ | system-management-view | 1 | SYS_Settings | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  2) SUB | Tab_SYS_Management | ∅ | ∅ | Sub_SYS_Overview | Overview | نظرة عامة | /sys/overview | 1 | SYS_Profile_View | Dashboard | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  3) SUB | Tab_SYS_Management | ∅ | ∅ | Sub_SYS_Users | Users | المستخدمون | /sys/users | 2 | PV_SYS_Users_Table | ViewAdd | FORM_SYS_AddUser | View Users | إضافة مستخدم جديد | ∅ | ∅ | ∅
  4) SUB | Tab_SYS_Management | ∅ | ∅ | Sub_SYS_Roles | Roles | الأدوار | /sys/roles | 3 | SYS_Roles | ViewAdd | ∅ | View Roles | Add Roles | ∅ | ∅ | ∅
  5) SUB | Tab_SYS_Management | ∅ | ∅ | Sub_SYS_Permissions | Permissions | الأذونات | /sys/permissions | 4 | SYS_Permissions | ViewAdd | ∅ | View Permissions | Add Permissions | ∅ | ∅ | ∅
  6) SUB | Tab_SYS_Management | ∅ | ∅ | Sub_SYS_RolePerms | Role Permissions | تعيين أذونات الأدوار | /sys/role-perms | 5 | SYS_Role_Permissions | ViewAdd | ∅ | View Role Permissions | Add Role Permissions | ∅ | ∅ | ∅
  7) SUB | Tab_SYS_Management | ∅ | ∅ | Sub_SYS_Properties | User Properties | خصائص المستخدم | /sys/properties | 6 | SYS_User_Properties | ViewAdd | ∅ | View User Properties | Add User Properties | ∅ | ∅ | ∅
  8) SUB | Tab_SYS_Management | ∅ | ∅ | Sub_SYS_Sessions | Sessions | الجلسات | /sys/sessions | 7 | SYS_Sessions | ViewAdd | ∅ | View Sessions | Add Sessions | ∅ | ∅ | ∅
  9) SUB | Tab_SYS_Management | ∅ | ∅ | Sub_SYS_Audit | Audit Logs | سجل التدقيق | /sys/audit | 8 | SYS_Audit_Log | ViewAdd | ∅ | View Audit Logs | Add Audit Logs | ∅ | ∅ | ∅
  10) SUB | Tab_SYS_Management | ∅ | ∅ | Sub_SYS_Settings | Settings | الإعدادات | /sys/settings | 9 | SYS_Settings | ViewAdd | ∅ | View Settings | Add Settings | ∅ | ∅ | ∅
  11) TAB | Tab_HR_Management | Human Resources (HR) | الموارد البشرية | ∅ | ∅ | ∅ | hr-workspace | 2 | HR_Employees | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  12) SUB | Tab_HR_Management | ∅ | ∅ | Sub_HR_KPIs | KPIs | مؤشرات الأداء | /hr/kpis | 1 | HR_KPIs | Dashboard | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  13) SUB | Tab_HR_Management | ∅ | ∅ | Sub_HR_Employees | Employees | الموظفون | /hr/employees | 2 | PV_HR_Employees | ViewAdd | FORM_HR_AddEmployee | View Employees | إضافة موظف | ∅ | ∅ | ∅
  14) SUB | Tab_HR_Management | ∅ | ∅ | Sub_HR_Attendance | Attendance | الحضور والانصراف | /hr/attendance | 3 | PV_HR_Attendance | ViewAdd | FORM_HR_AddAttendance | View Attendance | تسجيل الحضور | ∅ | ∅ | ∅
  15) SUB | Tab_HR_Management | ∅ | ∅ | Sub_HR_LeaveReqs | Leave Requests | طلبات الإجازة | /hr/leave-reqs | 4 | PV_HR_Leave_Requests | ViewAdd | ∅ | View Leave Requests | Add Leave Requests | ∅ | ∅ | ∅
  16) SUB | Tab_HR_Management | ∅ | ∅ | Sub_HR_Absence | Absence Deductions | خصومات الغياب | /hr/absence | 5 | PV_HR_Advances | ViewAdd | ∅ | View Absence Deductions | Add Absence Deductions | ∅ | ∅ | ∅
  17) SUB | Tab_HR_Management | ∅ | ∅ | Sub_HR_Payroll | Payroll | الرواتب | /hr/payroll | 6 | PV_HR_Payroll | ViewAdd | FORM_HR_AddPayroll | View Payroll | إنشاء بيان راتب | ∅ | ∅ | ∅
  18) SUB | Tab_HR_Management | ∅ | ∅ | Sub_HR_Advances | Advances | السلف | /hr/advances | 7 | PV_HR_Advances | ViewAdd | FORM_HR_AddAdvance | View Advances | تسجيل سلفة | ∅ | ∅ | ∅
  19) SUB | Tab_HR_Management | ∅ | ∅ | Sub_HR_Overtime | Overtime | الوقت الإضافي | /hr/overtime | 8 | HR_OverTime | ViewAdd | ∅ | View Overtime | Add Overtime | ∅ | ∅ | ∅
  20) SUB | Tab_HR_Management | ∅ | ∅ | Sub_HR_Penalties | Penalties & Deductions | الجزاءات والخصومات | /hr/penalties | 9 | HR_Deductions | ViewAdd | ∅ | View Penalties & Deductions | Add Penalties & Deductions | ∅ | ∅ | ∅
  21) SUB | Tab_HR_Management | ∅ | ∅ | Sub_HR_Depts | Departments | الأقسام | /hr/depts | 10 | PV_HR_Departments | ViewAdd | ∅ | View Departments | Add Departments | ∅ | ∅ | ∅
  22) SUB | Tab_HR_Management | ∅ | ∅ | Sub_HR_LeaveAnalysis | Leave Analysis | تحليل الإجازات | /hr/leave-analysis | 11 | HR_Leave_Analysis | ViewAdd | ∅ | View Leave Analysis | Add Leave Analysis | ∅ | ∅ | ∅
  23) SUB | Tab_HR_Management | ∅ | ∅ | Sub_HR_Holidays | Public Holidays | العطلات الرسمية | /hr/holidays | 12 | SYS_PubHolidays | ViewAdd | ∅ | View Public Holidays | Add Public Holidays | ∅ | ∅ | ∅
  24) TAB | Tab_PRJ_Management | Projects | المشاريع | ∅ | ∅ | ∅ | projects-workspace | 3 | PRJ_Main | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  25) SUB | Tab_PRJ_Management | ∅ | ∅ | Sub_PRJ_KPIs | KPIs | مؤشرات الأداء | /prj/kpis | 1 | PV_PRJ_KPIs | Dashboard | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  26) SUB | Tab_PRJ_Management | ∅ | ∅ | Sub_PRJ_List | Project List | قائمة المشاريع | /prj/list | 2 | PV_PRJ_Main | ViewAdd | ∅ | View Project List | Add Project List | ∅ | ∅ | ∅
  27) SUB | Tab_PRJ_Management | ∅ | ∅ | Sub_PRJ_Tasks | Tasks | المهام | /prj/tasks | 3 | PV_PRJ_Tasks | ViewAdd | ∅ | View Tasks | Add Tasks | ∅ | ∅ | ∅
  28) SUB | Tab_PRJ_Management | ∅ | ∅ | Sub_PRJ_Clients | Clients | العملاء | /prj/clients | 4 | PV_PRJ_Clients | ViewAdd | ∅ | View Clients | Add Clients | ∅ | ∅ | ∅
  29) SUB | Tab_PRJ_Management | ∅ | ∅ | Sub_PRJ_Materials | Materials | المواد | /prj/materials | 5 | PV_PRJ_Materials | ViewAdd | FORM_PRJ_AddMaterial | View Materials | إضافة مادة جديدة | ∅ | ∅ | ∅
  30) SUB | Tab_PRJ_Management | ∅ | ∅ | Sub_PRJ_Schedule | Schedule Calculation | حساب الجدول الزمني | /prj/schedule | 6 | PV_PRJ_Schedule_Calc | ViewAdd | ∅ | View Schedule Calculation | Add Schedule Calculation | ∅ | ∅ | ∅
  31) SUB | Tab_PRJ_Management | ∅ | ∅ | Sub_PRJ_Dashboard | Dashboard | لوحة المتابعة | /prj/dashboard | 7 | PV_PRJ_Dashboard | Dashboard | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  32) SUB | Tab_PRJ_Management | ∅ | ∅ | Sub_PRJ_Allocations | Indirect Expense Allocations | توزيع المصروفات غير المباشرة | /prj/allocations | 8 | PV_PRJ_InDirExp_Allocations | ViewAdd | ∅ | View Indirect Expense Allocations | Add Indirect Expense Allocations | ∅ | ∅ | ∅
  33) TAB | Tab_FIN_Management | Finance | المالية | ∅ | ∅ | ∅ | finance-workspace | 4 | FIN_Journal | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  34) SUB | Tab_FIN_Management | ∅ | ∅ | Sub_FIN_KPIs | KPIs | مؤشرات الأداء | /fin/kpis | 1 | FIN_KPIs | Dashboard | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  35) SUB | Tab_FIN_Management | ∅ | ∅ | Sub_FIN_Direct | Direct Expenses | المصروفات المباشرة | /fin/direct | 2 | PV_FIN_DirectExpenses_View | ViewAdd | FORM_FIN_AddDirectExpense | View Direct Expenses | تسجيل مصروف مباشر | ∅ | ∅ | ∅
  36) SUB | Tab_FIN_Management | ∅ | ∅ | Sub_FIN_Indirect_Rep | Indirect Expenses (Repeated) | مصروفات غير مباشرة (متكررة) | /fin/indirect-rep | 3 | PV_FIN_InDirExpense_Repeated_View | ViewAdd | FORM_FIN_AddIndirectExpenseRep | View Indirect Expenses (Repeated) | إضافة مصروف غير مباشر (متكرر) | ∅ | ∅ | ∅
  37) SUB | Tab_FIN_Management | ∅ | ∅ | Sub_FIN_Indirect_Once | Indirect Expenses (Once) | مصروفات غير مباشرة (مرة واحدة) | /fin/indirect-once | 4 | PV_FIN_InDirExpense_Once_View | ViewAdd | FORM_FIN_AddIndirectExpenseOnce | View Indirect Expenses (Once) | إضافة مصروف غير مباشر (مرة واحدة) | ∅ | ∅ | ∅
  38) SUB | Tab_FIN_Management | ∅ | ∅ | Sub_FIN_PrjRevenue | Project Revenue | إيرادات المشاريع | /fin/prj-revenue | 5 | PV_FIN_Project_Revenue_View | ViewAdd | FORM_FIN_AddProjectRevenue | View Project Revenue | تسجيل إيراد مشروع | ∅ | ∅ | ∅
  39) SUB | Tab_FIN_Management | ∅ | ∅ | Sub_FIN_GenRevenue | General Revenues | الإيرادات العامة | /fin/gen-revenue | 6 | PV_FIN_Revenues_View | ViewAdd | FORM_FIN_AddRevenue | View General Revenues | تسجيل إيراد عام | ∅ | ∅ | ∅
  40) SUB | Tab_FIN_Management | ∅ | ∅ | Sub_FIN_Journal | Journal | قيود اليومية | /fin/journal | 7 | PV_FIN_Journal_View | ViewAdd | FORM_FIN_AddJournalEntry | View Journal | تسجيل قيد يومية | ∅ | ∅ | ∅
  41) SUB | Tab_FIN_Management | ∅ | ∅ | Sub_FIN_Custody | Custody | العهد | /fin/custody | 8 | PV_FIN_Custody_View | ViewAdd | FORM_FIN_AddCustody | View Custody | تسجيل عهدة | ∅ | ∅ | ∅
  42) SUB | Tab_FIN_Management | ∅ | ∅ | Sub_FIN_GL | GL Totals | ملخص الأستاذ العام | /fin/gl | 9 | PV_FIN_GL_Totals_View | ViewAdd | ∅ | View GL Totals | Add GL Totals | ∅ | ∅ | ∅

➋.23 SYS_Dropdowns
 Headers:
  • Key
  • English_Title
  • Arabic_Title
  • Is_Active
  • Sort_Order
 Rows:
  1) DD_YesNo | Yes | نعم | true | 1
  2) DD_YesNo | No | لا | true | 2
  3) DD_Boolean | true | صحيح | true | 1
  4) DD_Boolean | false | خطأ | true | 2
  5) DD_User_Status | Active | نشط | true | 1
  6) DD_User_Status | Inactive | غير نشط | true | 2
  7) DD_MFA_Status | Enabled | مُفعّل | true | 1
  8) DD_MFA_Status | Disabled | غير مُفعّل | true | 2
  9) DD_Permission_Categories | USERS | المستخدمون | true | 1
  10) DD_Permission_Categories | SECURITY | الأمان | true | 2
  11) DD_Permission_Categories | AUDIT | التدقيق | true | 3
  12) DD_Scopes | GLOBAL | عالمي | true | 1
  13) DD_Scopes | DEPARTMENT | الإدارة | true | 2
  14) DD_Scopes | SELF | ذاتي | true | 3
  15) DD_Scopes | LIMITED | محدود | true | 4
  16) DD_Attachment_Entities | Users | المستخدمون | true | 1
  17) DD_Attachment_Entities | Roles | الأدوار | true | 2
  18) DD_Attachment_Entities | Permissions | الأذونات | true | 3
  19) DD_Attachment_Entities | Role_Permissions | أذونات_الأدوار | true | 4
  20) DD_Export_Formats | CSV | CSV | true | 1
  21) DD_Export_Formats | XLSX | XLSX | true | 2
  22) DD_Export_Formats | JSON | JSON | true | 3
  23) DD_Roles | Admin | أدمن | true | 1
  24) DD_Roles | HR_Manager | مستخدم عادي | true | 2
  25) DD_Material_Category | Raw Materials | مواد خام | true | 1
  26) DD_Material_Category | Accessories | اكسسوارات ومستلزمات | true | 2
  27) DD_Material_Category | Paints & Finishes | دهانات وتشطيبات | true | 3
  28) DD_Material_Category | Upholstery | مواد تنجيد وتشغيل | true | 4
  29) DD_Material_Unit | m³ | متر مكعب | true | 1
  30) DD_Material_Unit | m² | متر مربع | true | 2
  31) DD_Material_Unit | m | متر طولي | true | 3
  32) DD_Material_Unit | kg | كيلو | true | 4
  33) DD_Material_Unit | L | لتر | true | 5
  34) DD_Material_Unit | Unit | قطعة | true | 6
  35) DD_Material_Unit | Box | علبة | true | 7
  36) DD_Material_Unit | Sheet | لوح | true | 8
  37) DD_Material_Unit | Tube | انبوبة | true | 9
  38) DD_Cost_Category_PRJ | Labor | عمالة | true | 1
  39) DD_Cost_Category_PRJ | Subcontractor | مقاول باطن | true | 2
  40) DD_Cost_Category_PRJ | Site Expenses | مصروفات موقع | true | 3
  41) DD_Cost_Category_PRJ | Tools & Equipment | عدد ومعدات | true | 4
  42) DD_Cost_Category_PRJ | Other | أخرى | true | 5
  43) DD_Allocation_Method | Percentage | نسبة مئوية | true | 1
  44) DD_Allocation_Method | Fixed Amount | مبلغ ثابت | true | 2
  45) DD_Allocation_Method | Per Unit | لكل وحدة | true | 3
  46) DD_Contract_Types | Full_Time | دوام كامل | true | 1
  47) DD_Contract_Types | Part_Time | دوام جزئي | true | 2
  48) DD_Contract_Types | Contract | عقد | true | 3
  49) DD_Contract_Types | Temporary | مؤقت | true | 4
  50) DD_Contract_Types | Internship | تدريب | true | 5
  51) DD_Roles | Manager | Manager | true | 22
  52) DD_Roles | Basic_User | Basic User | true | 23
  53) DD_Roles | ROLE_Project_Manager | Project Manager | true | 24
  54) DD_Roles | ROLE_Finance | Finance | true | 25
  55) DD_Roles | ROLE_Accountant | Accountant | true | 26
  56) DD_Roles | ROLE_Purchasing | Purchasing | true | 27
  57) DD_Roles | ROLE_Sales | Sales | true | 28
  58) DD_Roles | ROLE_HR | HR | true | 29
  59) DD_Roles | ROLE_Payroll | Payroll | true | 30
  60) DD_Users | USR_00001 | Mohamed Sherif Elkhoraiby | true | 40
  61) DD_Users | USR_00002 | Abd ElRahman Sherif Elkhoraiby | true | 41
  62) DD_Boolean | true | صحيح | true | 1
  63) DD_Boolean | false | خطأ | true | 2
  64) DD_Project_Status | New | جديد | true | 1
  65) DD_Project_Status | In_Progress | قيد التنفيذ | true | 2
  66) DD_Project_Status | Completed | مكتمل | true | 3
  67) DD_Project_Status | On_Hold | معلق | true | 4
  68) DD_Project_Status | Cancelled | ملغى | true | 5
  69) DD_Project_Type | Internal | مشروع داخلي | true | 1
  70) DD_Project_Type | Client_Project | مشروع عميل | true | 2
  71) DD_Project_Type | Maintenance | صيانة | true | 3
  72) DD_Project_Priority | High | عالية | true | 1
  73) DD_Project_Priority | Medium | متوسطة | true | 2
  74) DD_Project_Priority | Low | منخفضة | true | 3
  75) DD_Task_Priority | Critical | حرجة | true | 1
  76) DD_Task_Priority | High | مرتفعة | true | 2
  77) DD_Task_Priority | Medium | متوسطة | true | 3
  78) DD_Task_Priority | Low | منخفضة | true | 4
  79) DD_Task_Status | Not_Started | لم يبدأ | true | 1
  80) DD_Task_Status | In_Progress | قيد التنفيذ | true | 2
  81) DD_Task_Status | Completed | مكتملة | true | 3
  82) DD_Task_Status | Blocked | معلقة | true | 4
  83) DD_Cost_Categories | Labor | تكاليف العمالة | true | 1
  84) DD_Cost_Categories | Materials | مواد | true | 2
  85) DD_Cost_Categories | Equipment | معدات | true | 3
  86) DD_Cost_Categories | Misc | أخرى | true | 4
  87) DD_Clients | CL-001 | مجموعة المصري للمقاولات | true | 1
  88) DD_Clients | CL-002 | قهوة البلد للمطاعم | true | 2
  89) DD_Clients | CL-003 | شركة النيل للتطوير | true | 3
  90) DD_Clients | CL-004 | الدكتورة منى الشاذلي | true | 4
  91) DD_Clients | CL-005 | مصانع حديد المصرية | true | 5
  92) DD_Clients | CL-006 | اتحاد ملاك بالم هيلز | true | 6
  93) DD_Clients | CL-007 | مركز زايد الطبي التخصصي | true | 7
  94) DD_Clients | CL-008 | مدارس النور الدولية | true | 8
  95) DD_Clients | CL-009 | إيليت للمطابخ الفاخرة | true | 9
  96) DD_Clients | CL-010 | سبا لوتس الأزرق | true | 10
  97) DD_Clients | CL-011 | داون تاون برجر | true | 11
  98) DD_Clients | CL-012 | إدارة كمبوند جرين هيلز | true | 12
  99) DD_Clients | CL-013 | عيادات كليوباترا التخصصية | true | 13
  100) DD_Clients | CL-014 | مكاتب سكاي لاين الإدارية | true | 14
  101) DD_Clients | CL-015 | ذا بيك لاب للمخبوزات | true | 15
  102) DD_Managers | USR_00001 | Mohamed Sherif Elkhoraiby | true | 1
  103) DD_Managers | USR_00002 | Abd ElRahman Sherif Elkhoraiby | true | 2
  104) DD_Project_Assignees | USR_00001 | Mohamed Sherif Elkhoraiby | true | 1
  105) DD_Project_Assignees | USR_00002 | Abd ElRahman Sherif Elkhoraiby | true | 2
  106) DD_Projects | PRJ_0001 | فيلا بالم هيلز - أعمال خشبية كاملة | true | 1
  107) DD_Projects | PRJ_0002 | تشطيب داخلي لمقهى وسط البلد | true | 2
  108) DD_Projects | PRJ_0003 | تجديد دور إداري في برج مكاتب | true | 3
  109) DD_Projects | PRJ_0004 | تشطيب شقة فاخرة بالزمالك | true | 4
  110) DD_Projects | PRJ_0005 | تجديد مصنع - مدينة السادس من أكتوبر | true | 5
  111) DD_Projects | PRJ_0006 | تطوير استقبال عيادة طبية وأبواب | true | 6
  112) DD_Projects | PRJ_0007 | تحديث مطبخ مطعم ستانلس | true | 7
  113) DD_Projects | PRJ_0008 | غرفة اجتماعات مجلس إدارة - تغطية خشبية | true | 8
  114) DD_Projects | PRJ_0009 | تجهيز معمل مدارس | true | 9
  115) DD_Projects | PRJ_0010 | كشك أمن للكمبوند | true | 10
  116) DD_Projects | PRJ_0011 | برجولة و دكة خشب لروف | true | 11
  117) DD_Projects | PRJ_0012 | كسوة حائط ديكورية لوبي فندق | true | 12
  118) DD_Projects | PRJ_0013 | وحدات عرض للمعرض باستخدام CNC | true | 13
  119) DD_Projects | PRJ_0014 | برجولة وحدات جلوس للحديقة | true | 14
  120) DD_Projects | PRJ_0015 | ترتيب أرفف و تخزين لمخزن | true | 15
  121) DD_Boolean | true | صحيح | true | 1
  122) DD_Boolean | false | خطأ | true | 2
  123) DD_Payment_Status | Pending | قيد الانتظار | true | 1
  124) DD_Payment_Status | Approved | مقبول | true | 2
  125) DD_Payment_Status | Rejected | مرفوض | true | 3
  126) DD_Payment_Status | Paid | مدفوع | true | 4
  127) DD_Payment_Status | Cancelled | ملغى | true | 5
  128) DD_Payment_Method | Cash | نقدي | true | 1
  129) DD_Payment_Method | Bank Transfer | تحويل بنكي | true | 2
  130) DD_Payment_Method | Credit Card | بطاقة ائتمان | true | 3
  131) DD_Payment_Method | Cheque | شيك | true | 4
  132) DD_Payment_Method | Mobile Payment | دفع عبر الجوال | true | 5
  133) DD_Expense_Category | Travel | سفر | true | 1
  134) DD_Expense_Category | Utilities | مرافق | true | 2
  135) DD_Expense_Category | Salaries | رواتب | true | 3
  136) DD_Expense_Category | Office Supplies | مستلزمات المكتب | true | 4
  137) DD_Expense_Category | Marketing | تسويق | true | 5
  138) DD_Expense_Category | Maintenance | صيانة | true | 6
  139) DD_Expense_Category | Rent | إيجار | true | 7
  140) DD_Expense_Category | Other | أخرى | true | 8
  141) DD_Indirect_Frequency | Monthly | شهري | true | 1
  142) DD_Indirect_Frequency | Quarterly | ربع سنوي | true | 2
  143) DD_Indirect_Frequency | Yearly | سنوي | true | 3
  144) DD_Indirect_Frequency | One-time | مرة واحدة | true | 4
  145) DD_Revenue_Type | Project | مشروع | true | 1
  146) DD_Revenue_Type | General | عام | true | 2
  147) DD_Account | Assets | الأصول | true | 1
  148) DD_Account | Liabilities | الخصوم | true | 2
  149) DD_Account | Equity | حقوق الملكية | true | 3
  150) DD_Account | Revenue | الإيرادات | true | 4
  151) DD_Account | Expenses | المصروفات | true | 5
  152) DD_Account | Cash | النقد | true | 6
  153) DD_Account | Bank | البنك | true | 7
  154) DD_Custody_Status | Open | مفتوحة | true | 1
  155) DD_Custody_Status | Closed | مغلقة | true | 2
  156) DD_Custody_Status | Overdue | متأخرة | true | 3
  157) DD_Boolean | true | صحيح | true | 1
  158) DD_Boolean | false | خطأ | true | 2
  159) DD_Gender | Male | ذكر | true | 1
  160) DD_Gender | Female | أنثى | true | 2
  161) DD_Marital_Status | Single | أعزب | true | 1
  162) DD_Marital_Status | Married | متزوج | true | 2
  163) DD_Marital_Status | Divorced | مطلق | true | 3
  164) DD_Marital_Status | Widowed | أرمل | true | 4
  165) DD_Military_Status | Completed | أنهى الخدمة | true | 1
  166) DD_Military_Status | Exempted | معفى | true | 2
  167) DD_Military_Status | In_Progress | يؤدي الخدمة | true | 3
  168) DD_Military_Status | Not_Applicable | غير مطلوب | true | 4
  169) DD_Job_Titles | HR Specialist | أخصائي موارد بشرية | true | 1
  170) DD_Job_Titles | Accountant | محاسب | true | 2
  171) DD_Job_Titles | Project Manager | مدير مشروع | true | 3
  172) DD_Job_Titles | Site Engineer | مهندس موقع | true | 4
  173) DD_Job_Titles | Procurement Officer | مسؤول مشتريات | true | 5
  174) DD_Job_Titles | Administrator | مسؤول إداري | true | 6
  175) DD_Employee_Status | Active | نشط | true | 1
  176) DD_Employee_Status | Probation | تحت التجربة | true | 2
  177) DD_Employee_Status | On_Leave | في إجازة | true | 3
  178) DD_Employee_Status | Terminated | منتهي الخدمة | true | 4
  179) DD_Attendance_Status | Present | حاضر | true | 1
  180) DD_Attendance_Status | Absent | غائب | true | 2
  181) DD_Attendance_Status | Late | متأخر | true | 3
  182) DD_Attendance_Status | On_Leave | في إجازة | true | 4
  183) DD_Attendance_Status | Remote | عمل عن بُعد | true | 5
  184) DD_Leave_Types | Annual | إجازة سنوية | true | 1
  185) DD_Leave_Types | Sick | إجازة مرضية | true | 2
  186) DD_Leave_Types | Emergency | إجازة طارئة | true | 3
  187) DD_Leave_Types | Unpaid | إجازة بدون راتب | true | 4
  188) DD_Leave_Types | Maternity | إجازة أمومة | true | 5
  189) DD_Leave_Status | Pending | قيد المراجعة | true | 1
  190) DD_Leave_Status | Approved | مقبولة | true | 2
  191) DD_Leave_Status | Rejected | مرفوضة | true | 3
  192) DD_Leave_Status | Cancelled | ملغاة | true | 4
  193) DD_Advance_Status | Pending | قيد الاعتماد | true | 1
  194) DD_Advance_Status | Approved | معتمدة | true | 2
  195) DD_Advance_Status | Disbursed | مصروفة | true | 3
  196) DD_Advance_Status | Settled | مقفلة | true | 4
  197) DD_Payroll_Status | Draft | مسودة | true | 1
  198) DD_Payroll_Status | Submitted | قيد المراجعة | true | 2
  199) DD_Payroll_Status | Approved | معتمد | true | 3
  200) DD_Payroll_Status | Paid | مدفوع | true | 4
  201) DD_Departments | Management | الإدارة | true | 10
  202) DD_Departments | Human Resources | الموارد البشرية | true | 11
  203) DD_Departments | Finance | المالية | true | 12
  204) DD_Departments | Projects | المشروعات | true | 13
  205) DD_Employees | EMP-001 | وليد محمد حسن | true | 30
  206) DD_Employees | EMP-002 | محمد أحمد إبراهيم | true | 31
  207) DD_Employees | EMP-003 | محمد أحمد إبراهيم | true | 32
  208) DD_Employees | EMP-004 | حسام خالد محمود | true | 33
  209) DD_Employees | EMP-005 | حسام خالد محمود | true | 34
  210) DD_Employees | EMP-006 | شريف محمد سيد | true | 35
  211) DD_Employees | EMP-007 | كريم محمود فوزي | true | 36
  212) DD_Employees | EMP-008 | يوسف أحمد شريف | true | 37
  213) DD_Employees | EMP-009 | باسم خالد يوسف | true | 38
  214) DD_Employees | EMP-010 | وليد محمد حسن | true | 39
  215) DD_Employees | EMP-011 | طارق أحمد سامي | true | 40
  216) DD_Employees | EMP-012 | أحمد محمد حسن | true | 41
  217) DD_Employees | EMP-013 | إسلام محمد فؤاد | true | 42
  218) DD_Employees | EMP-014 | كريم محمود فوزي | true | 43
  219) DD_Employees | EMP-015 | شريف محمد سيد | true | 44
  220) DD_Penalties | PEN-001 | تأخير عن العمل (+١٥ دقيقة) | true | 50
  221) DD_Penalties | PEN-002 | تأخير عن العمل (+١٥ دقيقة) | true | 51
  222) DD_Penalties | PEN-003 | ترك الموقع بدون إخطار | true | 52
  223) DD_Penalties | PEN-004 | زي غير مطابق / بدون يونيفورم | true | 53
  224) DD_Penalties | PEN-005 | غياب بدون إذن | true | 54
  225) DD_Penalties | PEN-006 | نوم أثناء الوردية | true | 55
  226) DD_Penalties | PEN-007 | التدخين داخل الورشة | true | 56
  227) DD_Penalties | PEN-008 | رفض ارتداء معدات السلامة | true | 57
  228) DD_Penalties | PEN-009 | مخالفة سلامة / معدات وقاية | true | 58
  229) DD_Penalties | PEN-010 | ترك الموقع بدون إخطار | true | 59
  230) DD_Penalties | PEN-011 | مخالفة سلامة / معدات وقاية | true | 60
  231) DD_Penalties | PEN-012 | التدخين داخل الورشة | true | 61
  232) DD_Penalties | PEN-013 | نوم أثناء الوردية | true | 62
  233) DD_Penalties | PEN-014 | التدخين داخل الورشة | true | 63
  234) DD_Penalties | PEN-015 | نوم أثناء الوردية | true | 64

➋.24 SYS_Dynamic_Forms
 Headers:
  • Form_ID
  • Form_Title
  • Tab_ID
  • Tab_Name
  • Section_Header
  • Field_ID
  • Field_Label
  • Field_Type
  • Source_Sheet
  • Source_Range
  • Mandatory
  • Default_Value
  • Dropdown_Key
  • Target_Sheet
  • Target_Column
  • Role_ID
  • Show
  • Quick_Actions
 Rows:
  1) FORM_SYS_AddUser | إضافة مستخدم جديد | Sub_SYS_Users | المستخدمون | التعريف | USR_User_Id | معرّف المستخدم | Auto | ∅ | ∅ | No | ∅ | ∅ | SYS_Users | User_Id | ∅ | ∅ | ∅
  2) FORM_SYS_AddUser | إضافة مستخدم جديد | Sub_SYS_Users_Tab1 | بيانات المستخدم | بيانات المستخدم | USR_Full_Name | الاسم الكامل | Text | ∅ | ∅ | Yes | ∅ | ∅ | SYS_Users | Full_Name | ∅ | ∅ | ∅
  3) FORM_SYS_AddUser | إضافة مستخدم جديد | Sub_SYS_Users_Tab1 | بيانات المستخدم | بيانات المستخدم | USR_Username | اسم المستخدم | Text | ∅ | ∅ | Yes | ∅ | ∅ | SYS_Users | Username | ∅ | ∅ | ∅
  4) FORM_SYS_AddUser | إضافة مستخدم جديد | Sub_SYS_Users_Tab1 | بيانات المستخدم | بيانات المستخدم | USR_Email | البريد الإلكتروني | Email | ∅ | ∅ | Yes | ∅ | ∅ | SYS_Users | Email | ∅ | ∅ | ∅
  5) FORM_SYS_AddUser | إضافة مستخدم جديد | Sub_SYS_Users_Tab2 | العمل | العمل | USR_Job_Title | المسمى الوظيفي | Text | ∅ | ∅ | No | ∅ | ∅ | SYS_Users | Job_Title | ∅ | ∅ | ∅
  6) FORM_SYS_AddUser | إضافة مستخدم جديد | Sub_SYS_Users_Tab2 | العمل | العمل | USR_Department | القسم | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Departments | SYS_Users | Department | ∅ | ∅ | ∅
  7) FORM_SYS_AddUser | إضافة مستخدم جديد | Sub_SYS_Users_Tab2 | العمل | العمل | USR_Role | الدور | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Roles | SYS_Users | Role_Id | ∅ | ∅ | ∅
  8) FORM_SYS_AddUser | إضافة مستخدم جديد | Sub_SYS_Users_Tab3 | الإعدادات | الإعدادات | USR_IsActive | نشط؟ | Dropdown | SYS_Dropdowns | ∅ | No | true | DD_YesNo | SYS_Users | IsActive | ∅ | ∅ | ∅
  9) FORM_SYS_AddUser | إضافة مستخدم جديد | Sub_SYS_Users_Tab3 | الإعدادات | الإعدادات | USR_Password | كلمة المرور | Password | ∅ | ∅ | Yes | ∅ | ∅ | SYS_Users | password | ∅ | ∅ | ∅
  10) FORM_SYS_AddUser | إضافة مستخدم جديد | Sub_SYS_Users_Tab3 | الإعدادات | الإعدادات | USR_MFA | تفعيل MFA | Dropdown | SYS_Dropdowns | ∅ | No | Disabled | DD_MFA_Status | SYS_Users | MFA_Enabled | ∅ | ∅ | ∅
  11) FORM_SYS_AddUser | إضافة مستخدم جديد | Sub_SYS_Users_Tab3 | الإعدادات | الإعدادات | USR_Notes | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | SYS_Users | Notes | ∅ | ∅ | ∅
  12) FORM_SYS_EditUser | تعديل مستخدم | Sub_SYS_Users | المستخدمون | بيانات المستخدم | USR_Full_Name | الاسم الكامل | Text | ∅ | ∅ | Yes | ∅ | ∅ | SYS_Users | Full_Name | ∅ | ∅ | ∅
  13) FORM_SYS_EditUser | تعديل مستخدم | Sub_SYS_Users | المستخدمون | بيانات المستخدم | USR_Email | البريد الإلكتروني | Email | ∅ | ∅ | Yes | ∅ | ∅ | SYS_Users | Email | ∅ | ∅ | ∅
  14) FORM_SYS_EditUser | تعديل مستخدم | Sub_SYS_Users | المستخدمون | العمل | USR_Department | القسم | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Departments | SYS_Users | Department | ∅ | ∅ | ∅
  15) FORM_SYS_EditUser | تعديل مستخدم | Sub_SYS_Users | المستخدمون | العمل | USR_Role | الدور | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Roles | SYS_Users | Role_Id | ∅ | ∅ | ∅
  16) FORM_PRJ_AddMaterial | إضافة مادة جديدة | Sub_PRJ_Materials | المواد | التعريف | MAT_Material_ID | معرّف المادة | Auto | ∅ | ∅ | No | ∅ | ∅ | PRJ_Materials | Material_ID | ∅ | ∅ | ∅
  17) FORM_PRJ_AddMaterial | إضافة مادة جديدة | Sub_PRJ_Materials | المواد | تفاصيل المادة | MAT_Name_AR | الاسم (عربي) | Text | ∅ | ∅ | Yes | ∅ | ∅ | PRJ_Materials | Name_AR | ∅ | ∅ | ∅
  18) FORM_PRJ_AddMaterial | إضافة مادة جديدة | Sub_PRJ_Materials | المواد | تفاصيل المادة | MAT_Name_EN | الاسم (إنجليزي) | Text | ∅ | ∅ | No | ∅ | ∅ | PRJ_Materials | Name_EN | ∅ | ∅ | ∅
  19) FORM_PRJ_AddMaterial | إضافة مادة جديدة | Sub_PRJ_Materials | المواد | التصنيف | MAT_Category | الفئة الرئيسية | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Material_Category | PRJ_Materials | Category | ∅ | ∅ | ∅
  20) FORM_PRJ_AddMaterial | إضافة مادة جديدة | Sub_PRJ_Materials | المواد | التصنيف | MAT_Subcategory | الفئة الفرعية 1 | Text | ∅ | ∅ | No | ∅ | ∅ | PRJ_Materials | Subcategory | ∅ | ∅ | ∅
  21) FORM_PRJ_AddMaterial | إضافة مادة جديدة | Sub_PRJ_Materials | المواد | التصنيف | MAT_Sub2 | الفئة الفرعية 2 | Text | ∅ | ∅ | No | ∅ | ∅ | PRJ_Materials | Sub2 | ∅ | ∅ | ∅
  22) FORM_PRJ_AddMaterial | إضافة مادة جديدة | Sub_PRJ_Materials | المواد | الإعدادات الافتراضية | MAT_Default_Unit | الوحدة الافتراضية | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Material_Unit | PRJ_Materials | Default_Unit | ∅ | ∅ | ∅
  23) FORM_PRJ_AddMaterial | إضافة مادة جديدة | Sub_PRJ_Materials | المواد | الإعدادات الافتراضية | MAT_Default_Price | السعر الافتراضي | Number | ∅ | ∅ | Yes | 0 | ∅ | PRJ_Materials | Default_Price | ∅ | ∅ | ∅
  24) FORM_PRJ_AddMaterial | إضافة مادة جديدة | Sub_PRJ_Materials | المواد | الإعدادات الافتراضية | MAT_Active | نشط؟ | Checkbox | ∅ | ∅ | Yes | true | ∅ | PRJ_Materials | Active | ∅ | ∅ | ∅
  25) FORM_PRJ_AddClient | إضافة عميل جديد | Sub_PRJ_Clients | العملاء | بيانات العميل | CL_Client_ID | معرف العميل | Auto | ∅ | ∅ | No | CL- | ∅ | PRJ_Clients | Client_ID | ∅ | ∅ | ∅
  26) FORM_PRJ_AddClient | إضافة عميل جديد | Sub_PRJ_Clients | العملاء | بيانات العميل | CL_Client_Name | اسم العميل | Text | ∅ | ∅ | Yes | ∅ | ∅ | PRJ_Clients | Client_Name | ∅ | ∅ | ∅
  27) FORM_PRJ_AddClient | إضافة عميل جديد | Sub_PRJ_Clients | العملاء | بيانات الاتصال | CL_Mobile_1 | الهاتف الأساسي | Text | ∅ | ∅ | Yes | ∅ | ∅ | PRJ_Clients | Client_Mobile_1 | ∅ | ∅ | ∅
  28) FORM_PRJ_AddClient | إضافة عميل جديد | Sub_PRJ_Clients | العملاء | بيانات الاتصال | CL_Mobile_2 | الهاتف الفرعي | Text | ∅ | ∅ | No | ∅ | ∅ | PRJ_Clients | Client_Mobile_2 | ∅ | ∅ | ∅
  29) FORM_PRJ_AddClient | إضافة عميل جديد | Sub_PRJ_Clients | العملاء | بيانات الاتصال | CL_Email | البريد الإلكتروني | Email | ∅ | ∅ | No | ∅ | ∅ | PRJ_Clients | Client_Email | ∅ | ∅ | ∅
  30) FORM_PRJ_AddAllocation | توزيع مصروف غير مباشر | Sub_PRJ_Allocations | توزيع المصروفات | بيانات التوزيع | ALLOC_Allocation_ID | م. | Auto | ∅ | ∅ | No | ALLOC- | ∅ | PRJ_InDirExp_Allocations | Allocation_ID | ∅ | ∅ | ∅
  31) FORM_PRJ_AddAllocation | توزيع مصروف غير مباشر | Sub_PRJ_Allocations | توزيع المصروفات | بيانات التوزيع | ALLOC_InDirExpense_Rep_ID | المصروف المتكرر | Dropdown | FIN_InDirExpense_Repeated | A2:B | No | ∅ | ∅ | PRJ_InDirExp_Allocations | InDirExpense_Repeated_ID | ∅ | ∅ | ∅
  32) FORM_PRJ_AddAllocation | توزيع مصروف غير مباشر | Sub_PRJ_Allocations | توزيع المصروفات | بيانات التوزيع | ALLOC_InDirExpense_Once_ID | المصروف (مرة واحدة) | Dropdown | FIN_InDirExpense_Once | A2:B | No | ∅ | ∅ | PRJ_InDirExp_Allocations | InDirExpense_Once_ID | ∅ | ∅ | ∅
  33) FORM_PRJ_AddAllocation | توزيع مصروف غير مباشر | Sub_PRJ_Allocations | توزيع المصروفات | بيانات التوزيع | ALLOC_Project_ID | المشروع | Dropdown | PRJ_Main | A2:B | Yes | ∅ | ∅ | PRJ_InInDirExp_Allocations | Project_ID | ∅ | ∅ | ∅
  34) FORM_PRJ_AddAllocation | توزيع مصروف غير مباشر | Sub_PRJ_Allocations | توزيع المصروفات | بيانات التوزيع | ALLOC_Allocation_Method | طريقة التوزيع | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Allocation_Method | PRJ_InDirExp_Allocations | Allocation_Method | ∅ | ∅ | ∅
  35) FORM_PRJ_AddAllocation | توزيع مصروف غير مباشر | Sub_PRJ_Allocations | توزيع المصروفات | بيانات التوزيع | ALLOC_Allocation_Percentage | النسبة % | Number | ∅ | ∅ | No | ∅ | ∅ | PRJ_InDirExp_Allocations | Allocation_Percentage | ∅ | ∅ | ∅
  36) FORM_PRJ_AddAllocation | توزيع مصروف غير مباشر | Sub_PRJ_Allocations | توزيع المصروفات | بيانات التكلفة | ALLOC_Allocation_Amount | المبلغ | Number | ∅ | ∅ | No | ∅ | ∅ | PRJ_InDirExp_Allocations | Allocation_Amount | ∅ | ∅ | ∅
  37) FORM_PRJ_AddMaterial | إضافة مادة جديدة | Sub_PRJ_Materials | المواد | إعدادات الكمية | MAT_VAT_Rate | نسبة ضريبة القيمة المضافة | Number | ∅ | ∅ | No | 0.14 | ∅ | PRJ_Materials | VAT_Rate | ∅ | ∅ | ∅
  38) FORM_PRJ_AddMaterial | إضافة مادة جديدة | Sub_PRJ_Materials | المواد | إعدادات الحالة | MAT_IsActive | نشط؟ | Dropdown | SYS_Dropdowns | ∅ | Yes | true | DD_YesNo | PRJ_Materials | Active | ∅ | ∅ | ∅
  39) FORM_PRJ_AddProject | إضافة مشروع جديد | Sub_PRJ_Main | المشاريع | بيانات المشروع الأساسية | PRJ_Project_ID | معرّف المشروع | Auto | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Project_ID | ∅ | ∅ | ∅
  40) FORM_PRJ_AddProject | إضافة مشروع جديد | Sub_PRJ_Main | المشاريع | بيانات المشروع الأساسية | PRJ_Project_Name | اسم المشروع | Text | ∅ | ∅ | Yes | ∅ | ∅ | PRJ_Main | Project_Name | ∅ | ∅ | ∅
  41) FORM_PRJ_AddProject | إضافة مشروع جديد | Sub_PRJ_Main | المشاريع | بيانات المشروع الأساسية | PRJ_Client_ID | العميل | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Clients | PRJ_Main | Client_ID | ∅ | ∅ | ∅
  42) FORM_PRJ_AddProject | إضافة مشروع جديد | Sub_PRJ_Main | المشاريع | بيانات المشروع الأساسية | PRJ_Contract_ID | معرّف العقد | Text | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Contract_ID | ∅ | ∅ | ∅
  43) FORM_PRJ_AddProject | إضافة مشروع جديد | Sub_PRJ_Main | المشاريع | بيانات المشروع الأساسية | PRJ_Status | حالة المشروع | Dropdown | SYS_Dropdowns | ∅ | Yes | New | DD_Project_Status | PRJ_Main | Status | ∅ | ∅ | ∅
  44) FORM_PRJ_AddProject | إضافة مشروع جديد | Sub_PRJ_Main | المشاريع | تصنيف المشروع | PRJ_Project_Type | نوع المشروع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Project_Type | PRJ_Main | Project_Type | ∅ | ∅ | ∅
  45) FORM_PRJ_AddProject | إضافة مشروع جديد | Sub_PRJ_Main | المشاريع | تصنيف المشروع | PRJ_Project_Priority | أولوية المشروع | Dropdown | SYS_Dropdowns | ∅ | No | Medium | DD_Project_Priority | PRJ_Main | Project_Priority | ∅ | ∅ | ∅
  46) FORM_PRJ_AddProject | إضافة مشروع جديد | Sub_PRJ_Main | المشاريع | التواريخ | PRJ_Start_Date | تاريخ البدء | Date | ∅ | ∅ | Yes | ∅ | ∅ | PRJ_Main | Start_Date | ∅ | ∅ | ∅
  47) FORM_PRJ_AddProject | إضافة مشروع جديد | Sub_PRJ_Main | المشاريع | التواريخ | PRJ_Planned_Days | الأيام المخططة | Number | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Planned_Days | ∅ | ∅ | ∅
  48) FORM_PRJ_AddProject | إضافة مشروع جديد | Sub_PRJ_Main | المشاريع | التواريخ | PRJ_Planned_End_Date | تاريخ الانتهاء المخطط | Date | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Planned_End_Date | ∅ | ∅ | ∅
  49) FORM_PRJ_AddProject | إضافة مشروع جديد | Sub_PRJ_Main | المشاريع | البيانات المالية | PRJ_Budget | الميزانية | Number | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Budget | ∅ | ∅ | ∅
  50) FORM_PRJ_AddProject | إضافة مشروع جديد | Sub_PRJ_Main | المشاريع | البيانات المالية | PRJ_Planned_Material_Expense | تكلفة المواد المخططة | Number | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Planned_Material_Expense | ∅ | ∅ | ∅
  51) FORM_PRJ_AddProject | إضافة مشروع جديد | Sub_PRJ_Main | المشاريع | الإدارة والملاحظات | PRJ_Manager | مدير المشروع | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Managers | PRJ_Main | Manager | ∅ | ∅ | ∅
  52) FORM_PRJ_AddProject | إضافة مشروع جديد | Sub_PRJ_Main | المشاريع | الإدارة والملاحظات | PRJ_Notes | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Notes | ∅ | ∅ | ∅
  53) FORM_PRJ_AddTask | إضافة مهمة مشروع | Sub_PRJ_Tasks | المهام | البيانات الأساسية | PRJ_Task_ID | معرّف المهمة | Auto | ∅ | ∅ | No | ∅ | ∅ | PRJ_Tasks | Task_ID | ∅ | ∅ | ∅
  54) FORM_PRJ_AddTask | إضافة مهمة مشروع | Sub_PRJ_Tasks | المهام | البيانات الأساسية | PRJ_Task_Project | المشروع | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Projects | PRJ_Tasks | Project_ID | ∅ | ∅ | ∅
  55) FORM_PRJ_AddTask | إضافة مهمة مشروع | Sub_PRJ_Tasks | المهام | البيانات الأساسية | PRJ_Task_Name | اسم المهمة | Text | ∅ | ∅ | Yes | ∅ | ∅ | PRJ_Tasks | Task_Name | ∅ | ∅ | ∅
  56) FORM_PRJ_AddTask | إضافة مهمة مشروع | Sub_PRJ_Tasks | المهام | التعيينات | PRJ_Task_Assignee | المسؤول | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Project_Assignees | PRJ_Tasks | Assignee_ID | ∅ | ∅ | ∅
  57) FORM_PRJ_AddTask | إضافة مهمة مشروع | Sub_PRJ_Tasks | المهام | تصنيف المهمة | PRJ_Task_Priority | أولوية المهمة | Dropdown | SYS_Dropdowns | ∅ | No | Medium | DD_Task_Priority | PRJ_Tasks | Task_Priority | ∅ | ∅ | ∅
  58) FORM_PRJ_AddTask | إضافة مهمة مشروع | Sub_PRJ_Tasks | المهام | التواريخ | PRJ_Task_PStart | تاريخ البدء المخطط | Date | ∅ | ∅ | No | ∅ | ∅ | PRJ_Tasks | Planned_Start | ∅ | ∅ | ∅
  59) FORM_PRJ_AddTask | إضافة مهمة مشروع | Sub_PRJ_Tasks | المهام | التواريخ | PRJ_Task_PEnd | تاريخ الانتهاء المخطط | Date | ∅ | ∅ | No | ∅ | ∅ | PRJ_Tasks | Planned_End | ∅ | ∅ | ∅
  60) FORM_PRJ_AddTask | إضافة مهمة مشروع | Sub_PRJ_Tasks | المهام | الحالة | PRJ_Task_Status | حالة المهمة | Dropdown | SYS_Dropdowns | ∅ | Yes | Not_Started | DD_Task_Status | PRJ_Tasks | Status | ∅ | ∅ | ∅
  61) FORM_PRJ_EditProject | تعديل مشروع | Sub_PRJ_Main | المشاريع | بيانات المشروع الأساسية | PRJ_Project_Name | اسم المشروع | Text | ∅ | ∅ | Yes | ∅ | ∅ | PRJ_Main | Project_Name | ∅ | ∅ | ∅
  62) FORM_PRJ_EditProject | تعديل مشروع | Sub_PRJ_Main | المشاريع | بيانات المشروع الأساسية | PRJ_Client_ID | العميل | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Clients | PRJ_Main | Client_ID | ∅ | ∅ | ∅
  63) FORM_PRJ_EditProject | تعديل مشروع | Sub_PRJ_Main | المشاريع | بيانات المشروع الأساسية | PRJ_Contract_ID | معرّف العقد | Text | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Contract_ID | ∅ | ∅ | ∅
  64) FORM_PRJ_EditProject | تعديل مشروع | Sub_PRJ_Main | المشاريع | الحالة والتصنيف | PRJ_Status | حالة المشروع | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Project_Status | PRJ_Main | Status | ∅ | ∅ | ∅
  65) FORM_PRJ_EditProject | تعديل مشروع | Sub_PRJ_Main | المشاريع | الحالة والتصنيف | PRJ_Project_Type | نوع المشروع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Project_Type | PRJ_Main | Project_Type | ∅ | ∅ | ∅
  66) FORM_PRJ_EditProject | تعديل مشروع | Sub_PRJ_Main | المشاريع | الحالة والتصنيف | PRJ_Project_Priority | أولوية المشروع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Project_Priority | PRJ_Main | Project_Priority | ∅ | ∅ | ∅
  67) FORM_PRJ_EditProject | تعديل مشروع | Sub_PRJ_Main | المشاريع | التواريخ | PRJ_Start_Date | تاريخ البدء | Date | ∅ | ∅ | Yes | ∅ | ∅ | PRJ_Main | Start_Date | ∅ | ∅ | ∅
  68) FORM_PRJ_EditProject | تعديل مشروع | Sub_PRJ_Main | المشاريع | التواريخ | PRJ_Planned_Days | الأيام المخططة | Number | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Planned_Days | ∅ | ∅ | ∅
  69) FORM_PRJ_EditProject | تعديل مشروع | Sub_PRJ_Main | المشاريع | التواريخ | PRJ_Planned_End_Date | تاريخ الانتهاء المخطط | Date | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Planned_End_Date | ∅ | ∅ | ∅
  70) FORM_PRJ_EditProject | تعديل مشروع | Sub_PRJ_Main | المشاريع | البيانات المالية | PRJ_Budget | الميزانية | Number | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Budget | ∅ | ∅ | ∅
  71) FORM_PRJ_EditProject | تعديل مشروع | Sub_PRJ_Main | المشاريع | البيانات المالية | PRJ_Planned_Material_Expense | تكلفة المواد المخططة | Number | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Planned_Material_Expense | ∅ | ∅ | ∅
  72) FORM_PRJ_EditProject | تعديل مشروع | Sub_PRJ_Main | المشاريع | الإدارة والملاحظات | PRJ_Manager | مدير المشروع | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Managers | PRJ_Main | Manager | ∅ | ∅ | ∅
  73) FORM_PRJ_EditProject | تعديل مشروع | Sub_PRJ_Main | المشاريع | الإدارة والملاحظات | PRJ_Notes | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Notes | ∅ | ∅ | ∅
  74) FORM_PRJ_ViewProject | عرض تفاصيل المشروع | Sub_PRJ_Main | المشاريع | بيانات المشروع الأساسية | PRJ_Project_Name | اسم المشروع | Display | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Project_Name | ∅ | ∅ | ∅
  75) FORM_PRJ_ViewProject | عرض تفاصيل المشروع | Sub_PRJ_Main | المشاريع | بيانات المشروع الأساسية | PRJ_Client_ID | العميل | Display | ∅ | ∅ | No | ∅ | DD_Clients | PRJ_Main | Client_ID | ∅ | ∅ | ∅
  76) FORM_PRJ_ViewProject | عرض تفاصيل المشروع | Sub_PRJ_Main | المشاريع | بيانات المشروع الأساسية | PRJ_Contract_ID | معرّف العقد | Display | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Contract_ID | ∅ | ∅ | ∅
  77) FORM_PRJ_ViewProject | عرض تفاصيل المشروع | Sub_PRJ_Main | المشاريع | الحالة والتصنيف | PRJ_Status | حالة المشروع | Display | ∅ | ∅ | No | ∅ | DD_Project_Status | PRJ_Main | Status | ∅ | ∅ | ∅
  78) FORM_PRJ_ViewProject | عرض تفاصيل المشروع | Sub_PRJ_Main | المشاريع | الحالة والتصنيف | PRJ_Project_Type | نوع المشروع | Display | ∅ | ∅ | No | ∅ | DD_Project_Type | PRJ_Main | Project_Type | ∅ | ∅ | ∅
  79) FORM_PRJ_ViewProject | عرض تفاصيل المشروع | Sub_PRJ_Main | المشاريع | الحالة والتصنيف | PRJ_Project_Priority | أولوية المشروع | Display | ∅ | ∅ | No | ∅ | DD_Project_Priority | PRJ_Main | Project_Priority | ∅ | ∅ | ∅
  80) FORM_PRJ_ViewProject | عرض تفاصيل المشروع | Sub_PRJ_Main | المشاريع | التواريخ | PRJ_Start_Date | تاريخ البدء | Display | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Start_Date | ∅ | ∅ | ∅
  81) FORM_PRJ_ViewProject | عرض تفاصيل المشروع | Sub_PRJ_Main | المشاريع | التواريخ | PRJ_Planned_Days | الأيام المخططة | Display | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Planned_Days | ∅ | ∅ | ∅
  82) FORM_PRJ_ViewProject | عرض تفاصيل المشروع | Sub_PRJ_Main | المشاريع | التواريخ | PRJ_Planned_End_Date | تاريخ الانتهاء المخطط | Display | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Planned_End_Date | ∅ | ∅ | ∅
  83) FORM_PRJ_ViewProject | عرض تفاصيل المشروع | Sub_PRJ_Main | المشاريع | البيانات المالية | PRJ_Budget | الميزانية | Display | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Budget | ∅ | ∅ | ∅
  84) FORM_PRJ_ViewProject | عرض تفاصيل المشروع | Sub_PRJ_Main | المشاريع | البيانات المالية | PRJ_Planned_Material_Expense | تكلفة المواد المخططة | Display | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Planned_Material_Expense | ∅ | ∅ | ∅
  85) FORM_PRJ_ViewProject | عرض تفاصيل المشروع | Sub_PRJ_Main | المشاريع | الإدارة والملاحظات | PRJ_Manager | مدير المشروع | Display | ∅ | ∅ | No | ∅ | DD_Managers | PRJ_Main | Manager | ∅ | ∅ | ∅
  86) FORM_PRJ_ViewProject | عرض تفاصيل المشروع | Sub_PRJ_Main | المشاريع | الإدارة والملاحظات | PRJ_Notes | ملاحظات | Display | ∅ | ∅ | No | ∅ | ∅ | PRJ_Main | Notes | ∅ | ∅ | ∅
  87) FORM_PRJ_EditTask | تعديل مهمة مشروع | Sub_PRJ_Tasks | المهام | البيانات الأساسية | PRJ_Task_Name | اسم المهمة | Text | ∅ | ∅ | Yes | ∅ | ∅ | PRJ_Tasks | Task_Name | ∅ | ∅ | ∅
  88) FORM_PRJ_EditTask | تعديل مهمة مشروع | Sub_PRJ_Tasks | المهام | البيانات الأساسية | PRJ_Task_Project | المشروع | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Projects | PRJ_Tasks | Project_ID | ∅ | ∅ | ∅
  89) FORM_PRJ_EditTask | تعديل مهمة مشروع | Sub_PRJ_Tasks | المهام | تصنيف المهمة | PRJ_Task_Priority | أولوية المهمة | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Task_Priority | PRJ_Tasks | Task_Priority | ∅ | ∅ | ∅
  90) FORM_PRJ_EditTask | تعديل مهمة مشروع | Sub_PRJ_Tasks | المهام | التعيينات | PRJ_Task_Assignee | المسؤول | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Project_Assignees | PRJ_Tasks | Assignee_ID | ∅ | ∅ | ∅
  91) FORM_PRJ_EditTask | تعديل مهمة مشروع | Sub_PRJ_Tasks | المهام | التواريخ | PRJ_Task_PStart | تاريخ البدء المخطط | Date | ∅ | ∅ | No | ∅ | ∅ | PRJ_Tasks | Planned_Start | ∅ | ∅ | ∅
  92) FORM_PRJ_EditTask | تعديل مهمة مشروع | Sub_PRJ_Tasks | المهام | التواريخ | PRJ_Task_PEnd | تاريخ الانتهاء المخطط | Date | ∅ | ∅ | No | ∅ | ∅ | PRJ_Tasks | Planned_End | ∅ | ∅ | ∅
  93) FORM_PRJ_EditTask | تعديل مهمة مشروع | Sub_PRJ_Tasks | المهام | التواريخ | PRJ_Task_AStart | تاريخ البدء الفعلي | Date | ∅ | ∅ | No | ∅ | ∅ | PRJ_Tasks | Actual_Start | ∅ | ∅ | ∅
  94) FORM_PRJ_EditTask | تعديل مهمة مشروع | Sub_PRJ_Tasks | المهام | التواريخ | PRJ_Task_AEnd | تاريخ الانتهاء الفعلي | Date | ∅ | ∅ | No | ∅ | ∅ | PRJ_Tasks | Actual_End | ∅ | ∅ | ∅
  95) FORM_PRJ_EditTask | تعديل مهمة مشروع | Sub_PRJ_Tasks | المهام | الحالة | PRJ_Task_Status | حالة المهمة | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Task_Status | PRJ_Tasks | Status | ∅ | ∅ | ∅
  96) FORM_PRJ_ViewTask | عرض تفاصيل المهمة | Sub_PRJ_Tasks | المهام | البيانات الأساسية | PRJ_Task_Name | اسم المهمة | Display | ∅ | ∅ | No | ∅ | ∅ | PRJ_Tasks | Task_Name | ∅ | ∅ | ∅
  97) FORM_PRJ_ViewTask | عرض تفاصيل المهمة | Sub_PRJ_Tasks | المهام | البيانات الأساسية | PRJ_Task_Project | المشروع | Display | ∅ | ∅ | No | ∅ | DD_Projects | PRJ_Tasks | Project_ID | ∅ | ∅ | ∅
  98) FORM_PRJ_ViewTask | عرض تفاصيل المهمة | Sub_PRJ_Tasks | المهام | تصنيف المهمة | PRJ_Task_Priority | أولوية المهمة | Display | ∅ | ∅ | No | ∅ | DD_Task_Priority | PRJ_Tasks | Task_Priority | ∅ | ∅ | ∅
  99) FORM_PRJ_ViewTask | عرض تفاصيل المهمة | Sub_PRJ_Tasks | المهام | التعيينات | PRJ_Task_Assignee | المسؤول | Display | ∅ | ∅ | No | ∅ | DD_Project_Assignees | PRJ_Tasks | Assignee_ID | ∅ | ∅ | ∅
  100) FORM_PRJ_ViewTask | عرض تفاصيل المهمة | Sub_PRJ_Tasks | المهام | التواريخ | PRJ_Task_PStart | تاريخ البدء المخطط | Display | ∅ | ∅ | No | ∅ | ∅ | PRJ_Tasks | Planned_Start | ∅ | ∅ | ∅
  101) FORM_PRJ_ViewTask | عرض تفاصيل المهمة | Sub_PRJ_Tasks | المهام | التواريخ | PRJ_Task_PEnd | تاريخ الانتهاء المخطط | Display | ∅ | ∅ | No | ∅ | ∅ | PRJ_Tasks | Planned_End | ∅ | ∅ | ∅
  102) FORM_PRJ_ViewTask | عرض تفاصيل المهمة | Sub_PRJ_Tasks | المهام | التواريخ | PRJ_Task_AStart | تاريخ البدء الفعلي | Display | ∅ | ∅ | No | ∅ | ∅ | PRJ_Tasks | Actual_Start | ∅ | ∅ | ∅
  103) FORM_PRJ_ViewTask | عرض تفاصيل المهمة | Sub_PRJ_Tasks | المهام | التواريخ | PRJ_Task_AEnd | تاريخ الانتهاء الفعلي | Display | ∅ | ∅ | No | ∅ | ∅ | PRJ_Tasks | Actual_End | ∅ | ∅ | ∅
  104) FORM_PRJ_ViewTask | عرض تفاصيل المهمة | Sub_PRJ_Tasks | المهام | الحالة | PRJ_Task_Status | حالة المهمة | Display | ∅ | ∅ | No | ∅ | DD_Task_Status | PRJ_Tasks | Status | ∅ | ∅ | ∅
  105) FORM_PRJ_AddCost | تسجيل تكلفة مشروع | Sub_PRJ_Costs | التكاليف | البيانات الأساسية | PRJ_Cost_ID | معرّف التكلفة | Auto | ∅ | ∅ | No | ∅ | ∅ | PRJ_Costs | Cost_ID | ∅ | ∅ | ∅
  106) FORM_PRJ_AddCost | تسجيل تكلفة مشروع | Sub_PRJ_Costs | التكاليف | البيانات الأساسية | PRJ_Cost_Project | المشروع | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Projects | PRJ_Costs | Project_ID | ∅ | ∅ | ∅
  107) FORM_PRJ_AddCost | تسجيل تكلفة مشروع | Sub_PRJ_Costs | التكاليف | البيانات الأساسية | PRJ_Cost_Date | تاريخ التكلفة | Date | ∅ | ∅ | Yes | ∅ | ∅ | PRJ_Costs | Date | ∅ | ∅ | ∅
  108) FORM_PRJ_AddCost | تسجيل تكلفة مشروع | Sub_PRJ_Costs | التكاليف | التصنيف | PRJ_Cost_Category | فئة التكلفة | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Cost_Categories | PRJ_Costs | Category | ∅ | ∅ | ∅
  109) FORM_PRJ_AddCost | تسجيل تكلفة مشروع | Sub_PRJ_Costs | التكاليف | التفاصيل | PRJ_Cost_Desc | وصف التكلفة | Paragraph | ∅ | ∅ | No | ∅ | ∅ | PRJ_Costs | Description | ∅ | ∅ | ∅
  110) FORM_PRJ_AddCost | تسجيل تكلفة مشروع | Sub_PRJ_Costs | التكاليف | القيم | PRJ_Cost_Amount | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | PRJ_Costs | Amount | ∅ | ∅ | ∅
  111) FORM_PRJ_AddRevenue | تسجيل إيراد مشروع | Sub_PRJ_Revenue | الإيرادات | البيانات الأساسية | PRJ_Revenue_ID | معرّف الإيراد | Auto | ∅ | ∅ | No | ∅ | ∅ | FIN_Project_Revenue | Revenue_ID | ∅ | ∅ | ∅
  112) FORM_PRJ_AddRevenue | تسجيل إيراد مشروع | Sub_PRJ_Revenue | الإيرادات | البيانات الأساسية | PRJ_Revenue_Project | المشروع | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Projects | FIN_Project_Revenue | Project_ID | ∅ | ∅ | ∅
  113) FORM_PRJ_AddRevenue | تسجيل إيراد مشروع | Sub_PRJ_Revenue | الإيرادات | البيانات الأساسية | PRJ_Revenue_Date | تاريخ الإيراد | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Project_Revenue | Revenue_Date | ∅ | ∅ | ∅
  114) FORM_PRJ_AddRevenue | تسجيل إيراد مشروع | Sub_PRJ_Revenue | الإيرادات | القيم | PRJ_Revenue_Amount | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Project_Revenue | Amount | ∅ | ∅ | ∅
  115) FORM_PRJ_AddRevenue | تسجيل إيراد مشروع | Sub_PRJ_Revenue | الإيرادات | المصدر | PRJ_Revenue_Source | مصدر الإيراد | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_Project_Revenue | Source | ∅ | ∅ | ∅
  116) FORM_PRJ_AddRevenue | تسجيل إيراد مشروع | Sub_PRJ_Revenue | الإيرادات | الحالة | PRJ_Revenue_Status | حالة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | Pending | DD_Payment_Status | FIN_Project_Revenue | Pay_Status | ∅ | ∅ | ∅
  117) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | المعرّف | FIN_Direct_ID | معرّف المصروف | Auto | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Expense_ID | ∅ | ∅ | ∅
  118) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | التفاصيل الأساسية | FIN_Direct_Project | المشروع | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Projects | FIN_DirectExpenses | Project_ID | ∅ | ∅ | ∅
  119) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | التفاصيل الأساسية | FIN_Direct_Date | تاريخ المصروف | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_DirectExpenses | Date | ∅ | ∅ | ∅
  120) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | التفاصيل الأساسية | FIN_Direct_Category | التصنيف | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Expense_Category | FIN_DirectExpenses | Category | ∅ | ∅ | ∅
  121) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | التفاصيل | FIN_Direct_Level1 | المستوى 1 | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Level_1 | ∅ | ∅ | ∅
  122) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | التفاصيل | FIN_Direct_Level2 | المستوى 2 | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Level_2 | ∅ | ∅ | ∅
  123) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | الكميات | FIN_Direct_Unit | الوحدة | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Unit | ∅ | ∅ | ∅
  124) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | الكميات | FIN_Direct_Qty | الكمية | Number | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Qty | ∅ | ∅ | ∅
  125) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | الكميات | FIN_Direct_UnitPrice | سعر الوحدة | Number | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Unit_Price | ∅ | ∅ | ∅
  126) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | القيم | FIN_Direct_Amount | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_DirectExpenses | Amount | ∅ | ∅ | ∅
  127) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | القيم | FIN_Direct_VATRate | نسبة الضريبة | Number | ∅ | ∅ | No | 0 | ∅ | FIN_DirectExpenses | VAT_Rate | ∅ | ∅ | ∅
  128) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | القيم | FIN_Direct_VATAmount | قيمة الضريبة | Number | ∅ | ∅ | No | 0 | ∅ | FIN_DirectExpenses | VAT_Amount | ∅ | ∅ | ∅
  129) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | القيم | FIN_Direct_TotalVAT | الإجمالي مع الضريبة | Number | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Total_With_VAT | ∅ | ∅ | ∅
  130) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | المواد | FIN_Direct_MaterialID | معرّف المادة | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Material_ID | ∅ | ∅ | ∅
  131) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | المواد | FIN_Direct_MaterialName | اسم المادة | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Material_Name | ∅ | ∅ | ∅
  132) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | الدفع | FIN_Direct_PayStatus | حالة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | Pending | DD_Payment_Status | FIN_DirectExpenses | Pay_Status | ∅ | ∅ | ∅
  133) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | الدفع | FIN_Direct_PayMethod | طريقة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Method | FIN_DirectExpenses | Pay_Method | ∅ | ∅ | ∅
  134) FORM_FIN_AddDirectExpense | تسجيل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | ملاحظات | FIN_Direct_Notes | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Notes | ∅ | ∅ | ∅
  135) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | المعرّف | FIN_Direct_ID_View | معرّف المصروف | Display | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Expense_ID | ∅ | ∅ | ∅
  136) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | التفاصيل الأساسية | FIN_Direct_Project_Edit | المشروع | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Projects | FIN_DirectExpenses | Project_ID | ∅ | ∅ | ∅
  137) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | التفاصيل الأساسية | FIN_Direct_Date_Edit | تاريخ المصروف | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_DirectExpenses | Date | ∅ | ∅ | ∅
  138) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | التفاصيل الأساسية | FIN_Direct_Category_Edit | التصنيف | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Expense_Category | FIN_DirectExpenses | Category | ∅ | ∅ | ∅
  139) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | التفاصيل | FIN_Direct_Level1_Edit | المستوى 1 | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Level_1 | ∅ | ∅ | ∅
  140) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | التفاصيل | FIN_Direct_Level2_Edit | المستوى 2 | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Level_2 | ∅ | ∅ | ∅
  141) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | الكميات | FIN_Direct_Unit_Edit | الوحدة | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Unit | ∅ | ∅ | ∅
  142) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | الكميات | FIN_Direct_Qty_Edit | الكمية | Number | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Qty | ∅ | ∅ | ∅
  143) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | الكميات | FIN_Direct_UnitPrice_Edit | سعر الوحدة | Number | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Unit_Price | ∅ | ∅ | ∅
  144) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | القيم | FIN_Direct_Amount_Edit | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_DirectExpenses | Amount | ∅ | ∅ | ∅
  145) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | القيم | FIN_Direct_VATRate_Edit | نسبة الضريبة | Number | ∅ | ∅ | No | 0 | ∅ | FIN_DirectExpenses | VAT_Rate | ∅ | ∅ | ∅
  146) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | القيم | FIN_Direct_VATAmount_Edit | قيمة الضريبة | Number | ∅ | ∅ | No | 0 | ∅ | FIN_DirectExpenses | VAT_Amount | ∅ | ∅ | ∅
  147) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | القيم | FIN_Direct_TotalVAT_Edit | الإجمالي مع الضريبة | Number | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Total_With_VAT | ∅ | ∅ | ∅
  148) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | المواد | FIN_Direct_MaterialID_Edit | معرّف المادة | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Material_ID | ∅ | ∅ | ∅
  149) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | المواد | FIN_Direct_MaterialName_Edit | اسم المادة | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Material_Name | ∅ | ∅ | ∅
  150) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | الدفع | FIN_Direct_PayStatus_Edit | حالة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Status | FIN_DirectExpenses | Pay_Status | ∅ | ∅ | ∅
  151) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | الدفع | FIN_Direct_PayMethod_Edit | طريقة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Method | FIN_DirectExpenses | Pay_Method | ∅ | ∅ | ∅
  152) FORM_FIN_EditDirectExpense | تعديل مصروف مباشر | Sub_FIN_Direct | المصاريف المباشرة | ملاحظات | FIN_Direct_Notes_Edit | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_DirectExpenses | Notes | ∅ | ∅ | ∅
  153) FORM_FIN_AddIndirectExpenseRep | إضافة مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | المعرّف | FIN_Rep_ID | معرّف المصروف | Auto | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Repeated | InDirExpense_Repeated_ID | ∅ | ∅ | ∅
  154) FORM_FIN_AddIndirectExpenseRep | إضافة مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | التفاصيل | FIN_Rep_Name | اسم المصروف | Text | ∅ | ∅ | Yes | ∅ | ∅ | FIN_InDirExpense_Repeated | Expense_Name | ∅ | ∅ | ∅
  155) FORM_FIN_AddIndirectExpenseRep | إضافة مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | التفاصيل | FIN_Rep_Category | التصنيف | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Expense_Category | FIN_InDirExpense_Repeated | Category | ∅ | ∅ | ∅
  156) FORM_FIN_AddIndirectExpenseRep | إضافة مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | الدورات | FIN_Rep_Frequency | التكرار | Dropdown | SYS_Dropdowns | ∅ | Yes | Monthly | DD_Indirect_Frequency | FIN_InDirExpense_Repeated | Frequency | ∅ | ∅ | ∅
  157) FORM_FIN_AddIndirectExpenseRep | إضافة مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | التواريخ | FIN_Rep_Start | تاريخ البدء | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_InDirExpense_Repeated | Start_Date | ∅ | ∅ | ∅
  158) FORM_FIN_AddIndirectExpenseRep | إضافة مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | التواريخ | FIN_Rep_End | تاريخ الانتهاء | Date | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Repeated | End_Date | ∅ | ∅ | ∅
  159) FORM_FIN_AddIndirectExpenseRep | إضافة مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | التواريخ | FIN_Rep_NextPay | تاريخ السداد | Date | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Repeated | Next_Pay_Date | ∅ | ∅ | ∅
  160) FORM_FIN_AddIndirectExpenseRep | إضافة مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | القيم | FIN_Rep_Amount | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_InDirExpense_Repeated | Amount | ∅ | ∅ | ∅
  161) FORM_FIN_AddIndirectExpenseRep | إضافة مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | القيم | FIN_Rep_PaidBy | مدفوع بواسطة | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Repeated | Paid_By | ∅ | ∅ | ∅
  162) FORM_FIN_AddIndirectExpenseRep | إضافة مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | الدفع | FIN_Rep_PayStatus | حالة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | Pending | DD_Payment_Status | FIN_InDirExpense_Repeated | Pay_Status | ∅ | ∅ | ∅
  163) FORM_FIN_AddIndirectExpenseRep | إضافة مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | الدفع | FIN_Rep_PayMethod | طريقة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Method | FIN_InDirExpense_Repeated | Pay_Method | ∅ | ∅ | ∅
  164) FORM_FIN_AddIndirectExpenseRep | إضافة مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | التوزيع | FIN_Rep_Allocation | أساس التوزيع | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Repeated | Allocation_Method | ∅ | ∅ | ∅
  165) FORM_FIN_AddIndirectExpenseRep | إضافة مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | ملاحظات | FIN_Rep_Notes | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Repeated | Notes | ∅ | ∅ | ∅
  166) FORM_FIN_EditIndirectExpenseRep | تعديل مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | المعرّف | FIN_Rep_ID_View | معرّف المصروف | Display | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Repeated | InDirExpense_Repeated_ID | ∅ | ∅ | ∅
  167) FORM_FIN_EditIndirectExpenseRep | تعديل مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | التفاصيل | FIN_Rep_Name_Edit | اسم المصروف | Text | ∅ | ∅ | Yes | ∅ | ∅ | FIN_InDirExpense_Repeated | Expense_Name | ∅ | ∅ | ∅
  168) FORM_FIN_EditIndirectExpenseRep | تعديل مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | التفاصيل | FIN_Rep_Category_Edit | التصنيف | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Expense_Category | FIN_InDirExpense_Repeated | Category | ∅ | ∅ | ∅
  169) FORM_FIN_EditIndirectExpenseRep | تعديل مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | الدورات | FIN_Rep_Frequency_Edit | التكرار | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Indirect_Frequency | FIN_InDirExpense_Repeated | Frequency | ∅ | ∅ | ∅
  170) FORM_FIN_EditIndirectExpenseRep | تعديل مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | التواريخ | FIN_Rep_Start_Edit | تاريخ البدء | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_InDirExpense_Repeated | Start_Date | ∅ | ∅ | ∅
  171) FORM_FIN_EditIndirectExpenseRep | تعديل مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | التواريخ | FIN_Rep_End_Edit | تاريخ الانتهاء | Date | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Repeated | End_Date | ∅ | ∅ | ∅
  172) FORM_FIN_EditIndirectExpenseRep | تعديل مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | التواريخ | FIN_Rep_NextPay_Edit | تاريخ السداد | Date | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Repeated | Next_Pay_Date | ∅ | ∅ | ∅
  173) FORM_FIN_EditIndirectExpenseRep | تعديل مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | القيم | FIN_Rep_Amount_Edit | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_InDirExpense_Repeated | Amount | ∅ | ∅ | ∅
  174) FORM_FIN_EditIndirectExpenseRep | تعديل مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | القيم | FIN_Rep_PaidBy_Edit | مدفوع بواسطة | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Repeated | Paid_By | ∅ | ∅ | ∅
  175) FORM_FIN_EditIndirectExpenseRep | تعديل مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | الدفع | FIN_Rep_PayStatus_Edit | حالة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Status | FIN_InDirExpense_Repeated | Pay_Status | ∅ | ∅ | ∅
  176) FORM_FIN_EditIndirectExpenseRep | تعديل مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | الدفع | FIN_Rep_PayMethod_Edit | طريقة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Method | FIN_InDirExpense_Repeated | Pay_Method | ∅ | ∅ | ∅
  177) FORM_FIN_EditIndirectExpenseRep | تعديل مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | التوزيع | FIN_Rep_Allocation_Edit | أساس التوزيع | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Repeated | Allocation_Method | ∅ | ∅ | ∅
  178) FORM_FIN_EditIndirectExpenseRep | تعديل مصروف غير مباشر (متكرر) | Sub_FIN_Indirect_Rep | المصاريف غير المباشرة (متكررة) | ملاحظات | FIN_Rep_Notes_Edit | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Repeated | Notes | ∅ | ∅ | ∅
  179) FORM_FIN_AddIndirectExpenseOnce | إضافة مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | المعرّف | FIN_Once_ID | معرّف المصروف | Auto | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Once | InDirExpense_Once_ID | ∅ | ∅ | ∅
  180) FORM_FIN_AddIndirectExpenseOnce | إضافة مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | التفاصيل | FIN_Once_Name | اسم المصروف | Text | ∅ | ∅ | Yes | ∅ | ∅ | FIN_InDirExpense_Once | Expense_Name | ∅ | ∅ | ∅
  181) FORM_FIN_AddIndirectExpenseOnce | إضافة مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | التفاصيل | FIN_Once_Category | التصنيف | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Expense_Category | FIN_InDirExpense_Once | Category | ∅ | ∅ | ∅
  182) FORM_FIN_AddIndirectExpenseOnce | إضافة مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | التواريخ | FIN_Once_Date | تاريخ المصروف | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_InDirExpense_Once | Expense_Date | ∅ | ∅ | ∅
  183) FORM_FIN_AddIndirectExpenseOnce | إضافة مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | القيم | FIN_Once_Amount | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_InDirExpense_Once | Amount | ∅ | ∅ | ∅
  184) FORM_FIN_AddIndirectExpenseOnce | إضافة مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | القيم | FIN_Once_PaidBy | مدفوع بواسطة | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Once | Paid_By | ∅ | ∅ | ∅
  185) FORM_FIN_AddIndirectExpenseOnce | إضافة مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | الدفع | FIN_Once_PayStatus | حالة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | Pending | DD_Payment_Status | FIN_InDirExpense_Once | Pay_Status | ∅ | ∅ | ∅
  186) FORM_FIN_AddIndirectExpenseOnce | إضافة مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | الدفع | FIN_Once_PayMethod | طريقة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Method | FIN_InDirExpense_Once | Pay_Method | ∅ | ∅ | ∅
  187) FORM_FIN_AddIndirectExpenseOnce | إضافة مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | التوزيع | FIN_Once_Allocation | أساس التوزيع | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Once | Allocation_Method | ∅ | ∅ | ∅
  188) FORM_FIN_AddIndirectExpenseOnce | إضافة مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | الإهلاك | FIN_Once_UsefulLife | العمر الإنتاجي (أشهر) | Number | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Once | Useful_Life_Months | ∅ | ∅ | ∅
  189) FORM_FIN_AddIndirectExpenseOnce | إضافة مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | الإهلاك | FIN_Once_DepStart | تاريخ بدء الإهلاك | Date | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Once | Depreciation_Start_Date | ∅ | ∅ | ∅
  190) FORM_FIN_AddIndirectExpenseOnce | إضافة مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | ملاحظات | FIN_Once_Notes | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Once | Notes | ∅ | ∅ | ∅
  191) FORM_FIN_EditIndirectExpenseOnce | تعديل مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | المعرّف | FIN_Once_ID_View | معرّف المصروف | Display | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Once | InDirExpense_Once_ID | ∅ | ∅ | ∅
  192) FORM_FIN_EditIndirectExpenseOnce | تعديل مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | التفاصيل | FIN_Once_Name_Edit | اسم المصروف | Text | ∅ | ∅ | Yes | ∅ | ∅ | FIN_InDirExpense_Once | Expense_Name | ∅ | ∅ | ∅
  193) FORM_FIN_EditIndirectExpenseOnce | تعديل مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | التفاصيل | FIN_Once_Category_Edit | التصنيف | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Expense_Category | FIN_InDirExpense_Once | Category | ∅ | ∅ | ∅
  194) FORM_FIN_EditIndirectExpenseOnce | تعديل مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | التواريخ | FIN_Once_Date_Edit | تاريخ المصروف | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_InDirExpense_Once | Expense_Date | ∅ | ∅ | ∅
  195) FORM_FIN_EditIndirectExpenseOnce | تعديل مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | القيم | FIN_Once_Amount_Edit | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_InDirExpense_Once | Amount | ∅ | ∅ | ∅
  196) FORM_FIN_EditIndirectExpenseOnce | تعديل مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | القيم | FIN_Once_PaidBy_Edit | مدفوع بواسطة | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Once | Paid_By | ∅ | ∅ | ∅
  197) FORM_FIN_EditIndirectExpenseOnce | تعديل مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | الدفع | FIN_Once_PayStatus_Edit | حالة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Status | FIN_InDirExpense_Once | Pay_Status | ∅ | ∅ | ∅
  198) FORM_FIN_EditIndirectExpenseOnce | تعديل مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | الدفع | FIN_Once_PayMethod_Edit | طريقة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Method | FIN_InDirExpense_Once | Pay_Method | ∅ | ∅ | ∅
  199) FORM_FIN_EditIndirectExpenseOnce | تعديل مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | التوزيع | FIN_Once_Allocation_Edit | أساس التوزيع | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Once | Allocation_Method | ∅ | ∅ | ∅
  200) FORM_FIN_EditIndirectExpenseOnce | تعديل مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | الإهلاك | FIN_Once_UsefulLife_Edit | العمر الإنتاجي (أشهر) | Number | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Once | Useful_Life_Months | ∅ | ∅ | ∅
  201) FORM_FIN_EditIndirectExpenseOnce | تعديل مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | الإهلاك | FIN_Once_DepStart_Edit | تاريخ بدء الإهلاك | Date | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Once | Depreciation_Start_Date | ∅ | ∅ | ∅
  202) FORM_FIN_EditIndirectExpenseOnce | تعديل مصروف غير مباشر (مرة واحدة) | Sub_FIN_Indirect_Once | المصاريف غير المباشرة (مرة واحدة) | ملاحظات | FIN_Once_Notes_Edit | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_InDirExpense_Once | Notes | ∅ | ∅ | ∅
  203) FORM_FIN_AddProjectRevenue | تسجيل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | المعرّف | FIN_PrjRev_ID | معرّف الإيراد | Auto | ∅ | ∅ | No | ∅ | ∅ | FIN_Project_Revenue | Revenue_ID | ∅ | ∅ | ∅
  204) FORM_FIN_AddProjectRevenue | تسجيل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | التفاصيل | FIN_PrjRev_Project | المشروع | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Projects | FIN_Project_Revenue | Project_ID | ∅ | ∅ | ∅
  205) FORM_FIN_AddProjectRevenue | تسجيل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | التواريخ | FIN_PrjRev_Date | تاريخ الإيراد | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Project_Revenue | Revenue_Date | ∅ | ∅ | ∅
  206) FORM_FIN_AddProjectRevenue | تسجيل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | القيم | FIN_PrjRev_Amount | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Project_Revenue | Amount | ∅ | ∅ | ∅
  207) FORM_FIN_AddProjectRevenue | تسجيل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | التفاصيل | FIN_PrjRev_Type | نوع الإيراد | Dropdown | SYS_Dropdowns | ∅ | Yes | Project | DD_Revenue_Type | FIN_Project_Revenue | Revenue_Type | ∅ | ∅ | ∅
  208) FORM_FIN_AddProjectRevenue | تسجيل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | التفاصيل | FIN_PrjRev_Source | المصدر | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_Project_Revenue | Source | ∅ | ∅ | ∅
  209) FORM_FIN_AddProjectRevenue | تسجيل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | التفاصيل | FIN_PrjRev_Description | الوصف | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_Project_Revenue | Description | ∅ | ∅ | ∅
  210) FORM_FIN_AddProjectRevenue | تسجيل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | الدفع | FIN_PrjRev_PayMethod | طريقة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Method | FIN_Project_Revenue | Pay_Method | ∅ | ∅ | ∅
  211) FORM_FIN_AddProjectRevenue | تسجيل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | الدفع | FIN_PrjRev_PayStatus | حالة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | Pending | DD_Payment_Status | FIN_Project_Revenue | Pay_Status | ∅ | ∅ | ∅
  212) FORM_FIN_AddProjectRevenue | تسجيل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | التفاصيل | FIN_PrjRev_Invoice | رقم الفاتورة | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_Project_Revenue | Invoice_Number | ∅ | ∅ | ∅
  213) FORM_FIN_EditProjectRevenue | تعديل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | المعرّف | FIN_PrjRev_ID_View | معرّف الإيراد | Display | ∅ | ∅ | No | ∅ | ∅ | FIN_Project_Revenue | Revenue_ID | ∅ | ∅ | ∅
  214) FORM_FIN_EditProjectRevenue | تعديل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | التفاصيل | FIN_PrjRev_Project_Edit | المشروع | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Projects | FIN_Project_Revenue | Project_ID | ∅ | ∅ | ∅
  215) FORM_FIN_EditProjectRevenue | تعديل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | التواريخ | FIN_PrjRev_Date_Edit | تاريخ الإيراد | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Project_Revenue | Revenue_Date | ∅ | ∅ | ∅
  216) FORM_FIN_EditProjectRevenue | تعديل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | القيم | FIN_PrjRev_Amount_Edit | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Project_Revenue | Amount | ∅ | ∅ | ∅
  217) FORM_FIN_EditProjectRevenue | تعديل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | التفاصيل | FIN_PrjRev_Type_Edit | نوع الإيراد | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Revenue_Type | FIN_Project_Revenue | Revenue_Type | ∅ | ∅ | ∅
  218) FORM_FIN_EditProjectRevenue | تعديل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | التفاصيل | FIN_PrjRev_Source_Edit | المصدر | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_Project_Revenue | Source | ∅ | ∅ | ∅
  219) FORM_FIN_EditProjectRevenue | تعديل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | التفاصيل | FIN_PrjRev_Description_Edit | الوصف | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_Project_Revenue | Description | ∅ | ∅ | ∅
  220) FORM_FIN_EditProjectRevenue | تعديل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | الدفع | FIN_PrjRev_PayMethod_Edit | طريقة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Method | FIN_Project_Revenue | Pay_Method | ∅ | ∅ | ∅
  221) FORM_FIN_EditProjectRevenue | تعديل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | الدفع | FIN_PrjRev_PayStatus_Edit | حالة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Status | FIN_Project_Revenue | Pay_Status | ∅ | ∅ | ∅
  222) FORM_FIN_EditProjectRevenue | تعديل إيراد مشروع | Sub_FIN_PrjRevenue | إيرادات المشاريع | التفاصيل | FIN_PrjRev_Invoice_Edit | رقم الفاتورة | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_Project_Revenue | Invoice_Number | ∅ | ∅ | ∅
  223) FORM_FIN_AddRevenue | تسجيل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | المعرّف | FIN_Rev_ID | معرّف الإيراد | Auto | ∅ | ∅ | No | ∅ | ∅ | FIN_Revenues | Revenue_ID | ∅ | ∅ | ∅
  224) FORM_FIN_AddRevenue | تسجيل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | التفاصيل | FIN_Rev_Type | نوع الإيراد | Dropdown | SYS_Dropdowns | ∅ | Yes | General | DD_Revenue_Type | FIN_Revenues | Revenue_Type | ∅ | ∅ | ∅
  225) FORM_FIN_AddRevenue | تسجيل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | التواريخ | FIN_Rev_Date | تاريخ الإيراد | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Revenues | Revenue_Date | ∅ | ∅ | ∅
  226) FORM_FIN_AddRevenue | تسجيل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | القيم | FIN_Rev_Amount | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Revenues | Amount | ∅ | ∅ | ∅
  227) FORM_FIN_AddRevenue | تسجيل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | التفاصيل | FIN_Rev_Source | المصدر | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_Revenues | Source | ∅ | ∅ | ∅
  228) FORM_FIN_AddRevenue | تسجيل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | التفاصيل | FIN_Rev_Description | الوصف | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_Revenues | Description | ∅ | ∅ | ∅
  229) FORM_FIN_AddRevenue | تسجيل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | الدفع | FIN_Rev_PayMethod | طريقة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Method | FIN_Revenues | Pay_Method | ∅ | ∅ | ∅
  230) FORM_FIN_AddRevenue | تسجيل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | الدفع | FIN_Rev_PayStatus | حالة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | Pending | DD_Payment_Status | FIN_Revenues | Pay_Status | ∅ | ∅ | ∅
  231) FORM_FIN_AddRevenue | تسجيل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | التفاصيل | FIN_Rev_Client | العميل | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Clients | FIN_Revenues | Client_ID | ∅ | ∅ | ∅
  232) FORM_FIN_AddRevenue | تسجيل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | التفاصيل | FIN_Rev_Project | المشروع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Projects | FIN_Revenues | Project_ID | ∅ | ∅ | ∅
  233) FORM_FIN_AddRevenue | تسجيل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | التفاصيل | FIN_Rev_Reference | المرجع | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_Revenues | Reference | ∅ | ∅ | ∅
  234) FORM_FIN_AddRevenue | تسجيل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | ملاحظات | FIN_Rev_Notes | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_Revenues | Notes | ∅ | ∅ | ∅
  235) FORM_FIN_EditRevenue | تعديل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | المعرّف | FIN_Rev_ID_View | معرّف الإيراد | Display | ∅ | ∅ | No | ∅ | ∅ | FIN_Revenues | Revenue_ID | ∅ | ∅ | ∅
  236) FORM_FIN_EditRevenue | تعديل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | التفاصيل | FIN_Rev_Type_Edit | نوع الإيراد | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Revenue_Type | FIN_Revenues | Revenue_Type | ∅ | ∅ | ∅
  237) FORM_FIN_EditRevenue | تعديل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | التواريخ | FIN_Rev_Date_Edit | تاريخ الإيراد | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Revenues | Revenue_Date | ∅ | ∅ | ∅
  238) FORM_FIN_EditRevenue | تعديل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | القيم | FIN_Rev_Amount_Edit | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Revenues | Amount | ∅ | ∅ | ∅
  239) FORM_FIN_EditRevenue | تعديل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | التفاصيل | FIN_Rev_Source_Edit | المصدر | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_Revenues | Source | ∅ | ∅ | ∅
  240) FORM_FIN_EditRevenue | تعديل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | التفاصيل | FIN_Rev_Description_Edit | الوصف | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_Revenues | Description | ∅ | ∅ | ∅
  241) FORM_FIN_EditRevenue | تعديل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | الدفع | FIN_Rev_PayMethod_Edit | طريقة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Method | FIN_Revenues | Pay_Method | ∅ | ∅ | ∅
  242) FORM_FIN_EditRevenue | تعديل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | الدفع | FIN_Rev_PayStatus_Edit | حالة الدفع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Payment_Status | FIN_Revenues | Pay_Status | ∅ | ∅ | ∅
  243) FORM_FIN_EditRevenue | تعديل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | التفاصيل | FIN_Rev_Client_Edit | العميل | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Clients | FIN_Revenues | Client_ID | ∅ | ∅ | ∅
  244) FORM_FIN_EditRevenue | تعديل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | التفاصيل | FIN_Rev_Project_Edit | المشروع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Projects | FIN_Revenues | Project_ID | ∅ | ∅ | ∅
  245) FORM_FIN_EditRevenue | تعديل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | التفاصيل | FIN_Rev_Reference_Edit | المرجع | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_Revenues | Reference | ∅ | ∅ | ∅
  246) FORM_FIN_EditRevenue | تعديل إيراد عام | Sub_FIN_GenRevenue | الإيرادات العامة | ملاحظات | FIN_Rev_Notes_Edit | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_Revenues | Notes | ∅ | ∅ | ∅
  247) FORM_FIN_AddJournalEntry | تسجيل قيد يومية | Sub_FIN_Journal | دفتر اليومية | المعرّف | FIN_Journal_ID | معرّف القيد | Auto | ∅ | ∅ | No | ∅ | ∅ | FIN_Journal | Journal_ID | ∅ | ∅ | ∅
  248) FORM_FIN_AddJournalEntry | تسجيل قيد يومية | Sub_FIN_Journal | دفتر اليومية | التواريخ | FIN_Journal_Date | تاريخ القيد | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Journal | Journal_Date | ∅ | ∅ | ∅
  249) FORM_FIN_AddJournalEntry | تسجيل قيد يومية | Sub_FIN_Journal | دفتر اليومية | الحسابات | FIN_Journal_Account | الحساب | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Account | FIN_Journal | Account | ∅ | ∅ | ∅
  250) FORM_FIN_AddJournalEntry | تسجيل قيد يومية | Sub_FIN_Journal | دفتر اليومية | الحسابات | FIN_Journal_Counter | الحساب المقابل | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Account | FIN_Journal | Counterparty_Account | ∅ | ∅ | ∅
  251) FORM_FIN_AddJournalEntry | تسجيل قيد يومية | Sub_FIN_Journal | دفتر اليومية | القيم | FIN_Journal_Debit | المبلغ مدين | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Journal | Debit_Amount | ∅ | ∅ | ∅
  252) FORM_FIN_AddJournalEntry | تسجيل قيد يومية | Sub_FIN_Journal | دفتر اليومية | القيم | FIN_Journal_Credit | المبلغ دائن | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Journal | Credit_Amount | ∅ | ∅ | ∅
  253) FORM_FIN_AddJournalEntry | تسجيل قيد يومية | Sub_FIN_Journal | دفتر اليومية | التفاصيل | FIN_Journal_Project | المشروع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Projects | FIN_Journal | Project_ID | ∅ | ∅ | ∅
  254) FORM_FIN_AddJournalEntry | تسجيل قيد يومية | Sub_FIN_Journal | دفتر اليومية | التفاصيل | FIN_Journal_Description | الوصف | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_Journal | Description | ∅ | ∅ | ∅
  255) FORM_FIN_AddJournalEntry | تسجيل قيد يومية | Sub_FIN_Journal | دفتر اليومية | التفاصيل | FIN_Journal_Reference | المرجع | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_Journal | Reference | ∅ | ∅ | ∅
  256) FORM_FIN_EditJournalEntry | تعديل قيد يومية | Sub_FIN_Journal | دفتر اليومية | المعرّف | FIN_Journal_ID_View | معرّف القيد | Display | ∅ | ∅ | No | ∅ | ∅ | FIN_Journal | Journal_ID | ∅ | ∅ | ∅
  257) FORM_FIN_EditJournalEntry | تعديل قيد يومية | Sub_FIN_Journal | دفتر اليومية | التواريخ | FIN_Journal_Date_Edit | تاريخ القيد | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Journal | Journal_Date | ∅ | ∅ | ∅
  258) FORM_FIN_EditJournalEntry | تعديل قيد يومية | Sub_FIN_Journal | دفتر اليومية | الحسابات | FIN_Journal_Account_Edit | الحساب | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Account | FIN_Journal | Account | ∅ | ∅ | ∅
  259) FORM_FIN_EditJournalEntry | تعديل قيد يومية | Sub_FIN_Journal | دفتر اليومية | الحسابات | FIN_Journal_Counter_Edit | الحساب المقابل | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Account | FIN_Journal | Counterparty_Account | ∅ | ∅ | ∅
  260) FORM_FIN_EditJournalEntry | تعديل قيد يومية | Sub_FIN_Journal | دفتر اليومية | القيم | FIN_Journal_Debit_Edit | المبلغ مدين | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Journal | Debit_Amount | ∅ | ∅ | ∅
  261) FORM_FIN_EditJournalEntry | تعديل قيد يومية | Sub_FIN_Journal | دفتر اليومية | القيم | FIN_Journal_Credit_Edit | المبلغ دائن | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Journal | Credit_Amount | ∅ | ∅ | ∅
  262) FORM_FIN_EditJournalEntry | تعديل قيد يومية | Sub_FIN_Journal | دفتر اليومية | التفاصيل | FIN_Journal_Project_Edit | المشروع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Projects | FIN_Journal | Project_ID | ∅ | ∅ | ∅
  263) FORM_FIN_EditJournalEntry | تعديل قيد يومية | Sub_FIN_Journal | دفتر اليومية | التفاصيل | FIN_Journal_Description_Edit | الوصف | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_Journal | Description | ∅ | ∅ | ∅
  264) FORM_FIN_EditJournalEntry | تعديل قيد يومية | Sub_FIN_Journal | دفتر اليومية | التفاصيل | FIN_Journal_Reference_Edit | المرجع | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_Journal | Reference | ∅ | ∅ | ∅
  265) FORM_FIN_AddCustody | تسجيل عهدة | Sub_FIN_Custody | العهد | المعرّف | FIN_Custody_ID | معرّف العهدة | Auto | ∅ | ∅ | No | ∅ | ∅ | FIN_Custody | Custody_ID | ∅ | ∅ | ∅
  266) FORM_FIN_AddCustody | تسجيل عهدة | Sub_FIN_Custody | العهد | الموظف | FIN_Custody_Employee | الموظف | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Employees | FIN_Custody | Employee_ID | ∅ | ∅ | ∅
  267) FORM_FIN_AddCustody | تسجيل عهدة | Sub_FIN_Custody | العهد | الموظف | FIN_Custody_EmployeeName | اسم الموظف | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_Custody | Employee_Name | ∅ | ∅ | ∅
  268) FORM_FIN_AddCustody | تسجيل عهدة | Sub_FIN_Custody | العهد | التواريخ | FIN_Custody_IssueDate | تاريخ التسليم | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Custody | Issue_Date | ∅ | ∅ | ∅
  269) FORM_FIN_AddCustody | تسجيل عهدة | Sub_FIN_Custody | العهد | التواريخ | FIN_Custody_ReturnDue | تاريخ الاستحقاق | Date | ∅ | ∅ | No | ∅ | ∅ | FIN_Custody | Return_Due_Date | ∅ | ∅ | ∅
  270) FORM_FIN_AddCustody | تسجيل عهدة | Sub_FIN_Custody | العهد | القيم | FIN_Custody_Amount | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Custody | Amount | ∅ | ∅ | ∅
  271) FORM_FIN_AddCustody | تسجيل عهدة | Sub_FIN_Custody | العهد | التفاصيل | FIN_Custody_Purpose | الغرض | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_Custody | Purpose | ∅ | ∅ | ∅
  272) FORM_FIN_AddCustody | تسجيل عهدة | Sub_FIN_Custody | العهد | الحالة | FIN_Custody_Status | الحالة | Dropdown | SYS_Dropdowns | ∅ | Yes | Open | DD_Custody_Status | FIN_Custody | Status | ∅ | ∅ | ∅
  273) FORM_FIN_AddCustody | تسجيل عهدة | Sub_FIN_Custody | العهد | ملاحظات | FIN_Custody_Notes | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_Custody | Notes | ∅ | ∅ | ∅
  274) FORM_FIN_EditCustody | تعديل عهدة | Sub_FIN_Custody | العهد | المعرّف | FIN_Custody_ID_View | معرّف العهدة | Display | ∅ | ∅ | No | ∅ | ∅ | FIN_Custody | Custody_ID | ∅ | ∅ | ∅
  275) FORM_FIN_EditCustody | تعديل عهدة | Sub_FIN_Custody | العهد | الموظف | FIN_Custody_Employee_Edit | الموظف | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Employees | FIN_Custody | Employee_ID | ∅ | ∅ | ∅
  276) FORM_FIN_EditCustody | تعديل عهدة | Sub_FIN_Custody | العهد | الموظف | FIN_Custody_EmployeeName_Edit | اسم الموظف | Text | ∅ | ∅ | No | ∅ | ∅ | FIN_Custody | Employee_Name | ∅ | ∅ | ∅
  277) FORM_FIN_EditCustody | تعديل عهدة | Sub_FIN_Custody | العهد | التواريخ | FIN_Custody_IssueDate_Edit | تاريخ التسليم | Date | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Custody | Issue_Date | ∅ | ∅ | ∅
  278) FORM_FIN_EditCustody | تعديل عهدة | Sub_FIN_Custody | العهد | التواريخ | FIN_Custody_ReturnDue_Edit | تاريخ الاستحقاق | Date | ∅ | ∅ | No | ∅ 
| ∅ | FIN_Custody | Return_Due_Date | ∅ | ∅ | ∅
  279) FORM_FIN_EditCustody | تعديل عهدة | Sub_FIN_Custody | العهد | القيم | FIN_Custody_Amount_Edit | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | FIN_Custody | Amount | ∅ | ∅ | ∅
  280) FORM_FIN_EditCustody | تعديل عهدة | Sub_FIN_Custody | العهد | التفاصيل | FIN_Custody_Purpose_Edit | الغرض | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_Custody | Purpose | ∅ | ∅ | ∅
  281) FORM_FIN_EditCustody | تعديل عهدة | Sub_FIN_Custody | العهد | الحالة | FIN_Custody_Status_Edit | الحالة | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Custody_Status | FIN_Custody | Status | ∅ | ∅ | ∅
  282) FORM_FIN_EditCustody | تعديل عهدة | Sub_FIN_Custody | العهد | ملاحظات | FIN_Custody_Notes_Edit | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | FIN_Custody | Notes | ∅ | ∅ | ∅
  283) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees | الموظفون | التعريف | HR_Emp_ID | معرّف الموظف | Auto | ∅ | ∅ | No | ∅ | ∅ | HR_Employees | Employee_ID | ∅ | ∅ | ∅
  284) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab1 | البيانات الأساسية | البيانات الأساسية | HR_Emp_FullNameEN | الاسم (إنجليزي) | Text | ∅ | ∅ | Yes | ∅ | ∅ | HR_Employees | Full_Name_EN | ∅ | ∅ | ∅
  285) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab1 | البيانات الأساسية | البيانات الأساسية | HR_Emp_FullNameAR | الاسم (عربي) | Text | ∅ | ∅ | Yes | ∅ | ∅ | HR_Employees | Full_Name_AR | ∅ | ∅ | ∅
  286) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab1 | البيانات الأساسية | البيانات الأساسية | HR_Emp_DOB | تاريخ الميلاد | Date | ∅ | ∅ | No | ∅ | ∅ | HR_Employees | Date_of_Birth | ∅ | ∅ | ∅
  287) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab1 | البيانات الأساسية | البيانات الأساسية | HR_Emp_Gender | النوع | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Gender | HR_Employees | Gender | ∅ | ∅ | ∅
  288) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab1 | البيانات الأساسية | البيانات الأساسية | HR_Emp_NationalID | الرقم القومي | Text | ∅ | ∅ | No | ∅ | ∅ | HR_Employees | National_ID | ∅ | ∅ | ∅
  289) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab1 | البيانات الأساسية | البيانات الأساسية | HR_Emp_Marital | الحالة الاجتماعية | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Marital_Status | HR_Employees | Marital_Status | ∅ | ∅ | ∅
  290) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab1 | البيانات الأساسية | البيانات الأساسية | HR_Emp_Military | الموقف من الخدمة | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Military_Status | HR_Employees | Military_Status | ∅ | ∅ | ∅
  291) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab2 | بيانات التواصل | بيانات التواصل | HR_Emp_MobileMain | رقم الجوال الرئيسي | Text | ∅ | ∅ | No | ∅ | ∅ | HR_Employees | Mobile_Main | ∅ | ∅ | ∅
  292) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab2 | بيانات التواصل | بيانات التواصل | HR_Emp_MobileSub | رقم جوال بديل | Text | ∅ | ∅ | No | ∅ | ∅ | HR_Employees | Mobile_Sub | ∅ | ∅ | ∅
  293) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab2 | بيانات التواصل | بيانات التواصل | HR_Emp_Email | البريد الإلكتروني | Email | ∅ | ∅ | No | ∅ | ∅ | HR_Employees | Email | ∅ | ∅ | ∅
  294) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab2 | بيانات التواصل | بيانات التواصل | HR_Emp_Address | العنوان | Paragraph | ∅ | ∅ | No | ∅ | ∅ | HR_Employees | Home_Address | ∅ | ∅ | ∅
  295) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab3 | جهات الطوارئ | جهات الطوارئ | HR_Emp_EmergencyContact | جهة الاتصال للطوارئ | Text | ∅ | ∅ | No | ∅ | ∅ | HR_Employees | Emergency_Contact | ∅ | ∅ | ∅
  296) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab3 | جهات الطوارئ | جهات الطوارئ | HR_Emp_Relation | صلة القرابة | Text | ∅ | ∅ | No | ∅ | ∅ | HR_Employees | Relation | ∅ | ∅ | ∅
  297) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab3 | جهات الطوارئ | جهات الطوارئ | HR_Emp_ECMobile | رقم الطوارئ | Text | ∅ | ∅ | No | ∅ | ∅ | HR_Employees | EC_Mobile | ∅ | ∅ | ∅
  298) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab4 | بيانات العمل | بيانات العمل | HR_Emp_JobTitle | المسمى الوظيفي | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Job_Titles | HR_Employees | Job_Title | ∅ | ∅ | ∅
  299) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab4 | بيانات العمل | بيانات العمل | HR_Emp_Department | القسم | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Departments | HR_Employees | Department | ∅ | ∅ | ∅
  300) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab4 | بيانات العمل | بيانات العمل | HR_Emp_HireDate | تاريخ التعيين | Date | ∅ | ∅ | Yes | ∅ | ∅ | HR_Employees | Hire_Date | ∅ | ∅ | ∅
  301) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab4 | بيانات العمل | بيانات العمل | HR_Emp_ContractType | نوع التعاقد | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Contract_Types | HR_Employees | Contract_Type | ∅ | ∅ | ∅
  302) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab5 | البيانات المالية | البيانات المالية | HR_Emp_Status | حالة الموظف | Dropdown | SYS_Dropdowns | ∅ | Yes | Active | DD_Employee_Status | HR_Employees | Status | ∅ | ∅ | ∅
  303) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab5 | البيانات المالية | البيانات المالية | HR_Emp_BasicSalary | الراتب الأساسي | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Employees | Basic_Salary | ∅ | ∅ | ∅
  304) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab5 | البيانات المالية | البيانات المالية | HR_Emp_Allowances | البدلات | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Employees | Allowances | ∅ | ∅ | ∅
  305) FORM_HR_AddEmployee | إضافة موظف | Sub_HR_Employees_Tab5 | البيانات المالية | البيانات المالية | HR_Emp_Deductions | الخصومات | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Employees | Deductions | ∅ | ∅ | ∅
  306) FORM_HR_AddAttendance | تسجيل الحضور | Sub_HR_Attendance | الحضور | التعريف | HR_Att_ID | معرّف الحضور | Auto | ∅ | ∅ | No | ∅ | ∅ | HR_Attendance | Attendance_ID | ∅ | ∅ | ∅
  307) FORM_HR_AddAttendance | تسجيل الحضور | Sub_HR_Attendance | الحضور | التعريف | HR_Att_Employee | الموظف | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Employees | HR_Attendance | Employee_ID | ∅ | ∅ | ∅
  308) FORM_HR_AddAttendance | تسجيل الحضور | Sub_HR_Attendance | الحضور | التوقيت | HR_Att_Date | التاريخ | Date | ∅ | ∅ | Yes | ∅ | ∅ | HR_Attendance | Date | ∅ | ∅ | ∅
  309) FORM_HR_AddAttendance | تسجيل الحضور | Sub_HR_Attendance | الحضور | التوقيت | HR_Att_CheckIn | وقت الحضور | Text | ∅ | ∅ | No | ∅ | ∅ | HR_Attendance | Check_In | ∅ | ∅ | ∅
  310) FORM_HR_AddAttendance | تسجيل الحضور | Sub_HR_Attendance | الحضور | التوقيت | HR_Att_CheckOut | وقت الانصراف | Text | ∅ | ∅ | No | ∅ | ∅ | HR_Attendance | Check_Out | ∅ | ∅ | ∅
  311) FORM_HR_AddAttendance | تسجيل الحضور | Sub_HR_Attendance | الحضور | التقييم | HR_Att_Hours | ساعات العمل | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Attendance | Hours | ∅ | ∅ | ∅
  312) FORM_HR_AddAttendance | تسجيل الحضور | Sub_HR_Attendance | الحضور | التقييم | HR_Att_OTMinutes | دقائق إضافية | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Attendance | OT_Minutes | ∅ | ∅ | ∅
  313) FORM_HR_AddAttendance | تسجيل الحضور | Sub_HR_Attendance | الحضور | التقييم | HR_Att_OTAmount | قيمة الإضافي | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Attendance | OT_Amount | ∅ | ∅ | ∅
  314) FORM_HR_AddAttendance | تسجيل الحضور | Sub_HR_Attendance | الحضور | التقييم | HR_Att_Late | دقائق التأخير | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Attendance | Late_Minutes | ∅ | ∅ | ∅
  315) FORM_HR_AddAttendance | تسجيل الحضور | Sub_HR_Attendance | الحضور | التقييم | HR_Att_Early | مغادرة مبكرة | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Attendance | EarlyLeave_Minutes | ∅ | ∅ | ∅
  316) FORM_HR_AddAttendance | تسجيل الحضور | Sub_HR_Attendance | الحضور | التقييم | HR_Att_Overtime | إجمالي الإضافي | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Attendance | Overtime_Minutes | ∅ | ∅ | ∅
  317) FORM_HR_AddAttendance | تسجيل الحضور | Sub_HR_Attendance | الحضور | التقييم | HR_Att_Status | الحالة | Dropdown | SYS_Dropdowns | ∅ | No | Present | DD_Attendance_Status | HR_Attendance | Status | ∅ | ∅ | ∅
  318) FORM_HR_AddAttendance | تسجيل الحضور | Sub_HR_Attendance | الحضور | الملاحظات | HR_Att_Notes | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | HR_Attendance | Notes | ∅ | ∅ | ∅
  319) FORM_HR_AddLeaveRequest | تقديم طلب إجازة | Sub_HR_Leave_Requests | طلبات الإجازة | التعريف | HR_LR_ID | معرّف الطلب | Auto | ∅ | ∅ | No | ∅ | ∅ | HR_Leave_Requests | Leave_ID | ∅ | ∅ | ∅
  320) FORM_HR_AddLeaveRequest | تقديم طلب إجازة | Sub_HR_Leave_Requests | طلبات الإجازة | التعريف | HR_LR_Employee | الموظف | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Employees | HR_Leave_Requests | Employee_ID | ∅ | ∅ | ∅
  321) FORM_HR_AddLeaveRequest | تقديم طلب إجازة | Sub_HR_Leave_Requests | طلبات الإجازة | الفترة | HR_LR_Type | نوع الإجازة | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Leave_Types | HR_Leave_Requests | Leave_Type | ∅ | ∅ | ∅
  322) FORM_HR_AddLeaveRequest | تقديم طلب إجازة | Sub_HR_Leave_Requests | طلبات الإجازة | الفترة | HR_LR_Start | تاريخ البداية | Date | ∅ | ∅ | Yes | ∅ | ∅ | HR_Leave_Requests | Start_Date | ∅ | ∅ | ∅
  323) FORM_HR_AddLeaveRequest | تقديم طلب إجازة | Sub_HR_Leave_Requests | طلبات الإجازة | الفترة | HR_LR_End | تاريخ النهاية | Date | ∅ | ∅ | Yes | ∅ | ∅ | HR_Leave_Requests | End_Date | ∅ | ∅ | ∅
  324) FORM_HR_AddLeaveRequest | تقديم طلب إجازة | Sub_HR_Leave_Requests | طلبات الإجازة | التفاصيل | HR_LR_DaysCount | عدد الأيام | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Leave_Requests | Days_Count | ∅ | ∅ | ∅
  325) FORM_HR_AddLeaveRequest | تقديم طلب إجازة | Sub_HR_Leave_Requests | طلبات الإجازة | التفاصيل | HR_LR_Days | أيام الإجازة | Paragraph | ∅ | ∅ | No | ∅ | ∅ | HR_Leave_Requests | Days | ∅ | ∅ | ∅
  326) FORM_HR_AddLeaveRequest | تقديم طلب إجازة | Sub_HR_Leave_Requests | طلبات الإجازة | التفاصيل | HR_LR_Approver | المعتمد | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Users | HR_Leave_Requests | Approver | ∅ | ∅ | ∅
  327) FORM_HR_AddLeaveRequest | تقديم طلب إجازة | Sub_HR_Leave_Requests | طلبات الإجازة | التفاصيل | HR_LR_Reason | سبب الإجازة | Paragraph | ∅ | ∅ | No | ∅ | ∅ | HR_Leave_Requests | Reason | ∅ | ∅ | ∅
  328) FORM_HR_AddLeaveRequest | تقديم طلب إجازة | Sub_HR_Leave_Requests | طلبات الإجازة | الحالة | HR_LR_Status | حالة الطلب | Dropdown | SYS_Dropdowns | ∅ | Yes | Pending | DD_Leave_Status | HR_Leave_Requests | Status | ∅ | ∅ | ∅
  329) FORM_HR_AddLeaveRequest | تقديم طلب إجازة | Sub_HR_Leave_Requests | طلبات الإجازة | الملاحظات | HR_LR_Notes | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | HR_Leave_Requests | Notes | ∅ | ∅ | ∅
  330) FORM_HR_AddLeave | تسجيل إجازة | Sub_HR_Leave | سجلات الإجازة | التعريف | HR_Leave_ID | معرّف الإجازة | Auto | ∅ | ∅ | No | ∅ | ∅ | HR_Leave | Leave_ID | ∅ | ∅ | ∅
  331) FORM_HR_AddLeave | تسجيل إجازة | Sub_HR_Leave | سجلات الإجازة | التعريف | HR_Leave_Emp | الموظف | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Employees | HR_Leave | Emp_ID | ∅ | ∅ | ∅
  332) FORM_HR_AddLeave | تسجيل إجازة | Sub_HR_Leave | سجلات الإجازة | الفترة | HR_Leave_Type | نوع الإجازة | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Leave_Types | HR_Leave | Leave_Type | ∅ | ∅ | ∅
  333) FORM_HR_AddLeave | تسجيل إجازة | Sub_HR_Leave | سجلات الإجازة | الفترة | HR_Leave_Start | تاريخ البداية | Date | ∅ | ∅ | Yes | ∅ | ∅ | HR_Leave | Start_Date | ∅ | ∅ | ∅
  334) FORM_HR_AddLeave | تسجيل إجازة | Sub_HR_Leave | سجلات الإجازة | الفترة | HR_Leave_End | تاريخ النهاية | Date | ∅ | ∅ | Yes | ∅ | ∅ | HR_Leave | End_Date | ∅ | ∅ | ∅
  335) FORM_HR_AddLeave | تسجيل إجازة | Sub_HR_Leave | سجلات الإجازة | التفاصيل | HR_Leave_DaysCount | عدد الأيام | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Leave | Days_Count | ∅ | ∅ | ∅
  336) FORM_HR_AddLeave | تسجيل إجازة | Sub_HR_Leave | سجلات الإجازة | الحالة | HR_Leave_Status | الحالة | Dropdown | SYS_Dropdowns | ∅ | Yes | Approved | DD_Leave_Status | HR_Leave | Status | ∅ | ∅ | ∅
  337) FORM_HR_AddLeave | تسجيل إجازة | Sub_HR_Leave | سجلات الإجازة | الملاحظات | HR_Leave_Notes | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | HR_Leave | Notes | ∅ | ∅ | ∅
  338) FORM_HR_AddAdvance | تسجيل سلفة | Sub_HR_Advances | السلف | التعريف | HR_Adv_ID | معرّف السلفة | Auto | ∅ | ∅ | No | ∅ | ∅ | HR_Advances | Advance_ID | ∅ | ∅ | ∅
  339) FORM_HR_AddAdvance | تسجيل سلفة | Sub_HR_Advances | السلف | التعريف | HR_Adv_Employee | الموظف | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Employees | HR_Advances | Employee_ID | ∅ | ∅ | ∅
  340) FORM_HR_AddAdvance | تسجيل سلفة | Sub_HR_Advances | السلف | التفاصيل | HR_Adv_IssueDate | تاريخ الإصدار | Date | ∅ | ∅ | Yes | ∅ | ∅ | HR_Advances | Issue_Date | ∅ | ∅ | ∅
  341) FORM_HR_AddAdvance | تسجيل سلفة | Sub_HR_Advances | السلف | التفاصيل | HR_Adv_Amount | المبلغ | Number | ∅ | ∅ | Yes | ∅ | ∅ | HR_Advances | Amount | ∅ | ∅ | ∅
  342) FORM_HR_AddAdvance | تسجيل سلفة | Sub_HR_Advances | السلف | التفاصيل | HR_Adv_Settlement | فترة السداد | Text | ∅ | ∅ | No | ∅ | ∅ | HR_Advances | Settlement_Period | ∅ | ∅ | ∅
  343) FORM_HR_AddAdvance | تسجيل سلفة | Sub_HR_Advances | السلف | التفاصيل | HR_Adv_Installment | قسط السلفة | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Advances | Advance_Installment | ∅ | ∅ | ∅
  344) FORM_HR_AddAdvance | تسجيل سلفة | Sub_HR_Advances | السلف | الحالة | HR_Adv_Status | حالة السلفة | Dropdown | SYS_Dropdowns | ∅ | Yes | Pending | DD_Advance_Status | HR_Advances | Status | ∅ | ∅ | ∅
  345) FORM_HR_AddAdvance | تسجيل سلفة | Sub_HR_Advances | السلف | الملاحظات | HR_Adv_Notes | ملاحظات | Paragraph | ∅ | ∅ | No | ∅ | ∅ | HR_Advances | Notes | ∅ | ∅ | ∅
  346) FORM_HR_AddDeduction | تسجيل خصم | Sub_HR_Deductions | الخصومات | التعريف | HR_Ded_ID | معرّف الخصم | Auto | ∅ | ∅ | No | ∅ | ∅ | HR_Deductions | Deduction_ID | ∅ | ∅ | ∅
  347) FORM_HR_AddDeduction | تسجيل خصم | Sub_HR_Deductions | الخصومات | التفاصيل | HR_Ded_Penalty | نوع المخالفة | Dropdown | SYS_Dropdowns | ∅ | No | ∅ | DD_Penalties | HR_Deductions | Penalty_ID | ∅ | ∅ | ∅
  348) FORM_HR_AddDeduction | تسجيل خصم | Sub_HR_Deductions | الخصومات | التفاصيل | HR_Ded_Employee | الموظف | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Employees | HR_Deductions | Employee_ID | ∅ | ∅ | ∅
  349) FORM_HR_AddDeduction | تسجيل خصم | Sub_HR_Deductions | الخصومات | التفاصيل | HR_Ded_Date | تاريخ الخصم | Date | ∅ | ∅ | Yes | ∅ | ∅ | HR_Deductions | Date | ∅ | ∅ | ∅
  350) FORM_HR_AddDeduction | تسجيل خصم | Sub_HR_Deductions | الخصومات | التفاصيل | HR_Ded_Amount | قيمة الخصم | Number | ∅ | ∅ | Yes | ∅ | ∅ | HR_Deductions | Deduction_Amount | ∅ | ∅ | ∅
  351) FORM_HR_AddPayroll | إنشاء بيان راتب | Sub_HR_Payroll | الرواتب | التعريف | HR_Payroll_ID | معرّف البيان | Auto | ∅ | ∅ | No | ∅ | ∅ | HR_Payroll | Payroll_ID | ∅ | ∅ | ∅
  352) FORM_HR_AddPayroll | إنشاء بيان راتب | Sub_HR_Payroll | الرواتب | التعريف | HR_Payroll_Employee | الموظف | Dropdown | SYS_Dropdowns | ∅ | Yes | ∅ | DD_Employees | HR_Payroll | Employee_ID | ∅ | ∅ | ∅
  353) FORM_HR_AddPayroll | إنشاء بيان راتب | Sub_HR_Payroll | الرواتب | الفترة | HR_Payroll_Start | تاريخ البداية | Date | ∅ | ∅ | Yes | ∅ | ∅ | HR_Payroll | Start_Date | ∅ | ∅ | ∅
  354) FORM_HR_AddPayroll | إنشاء بيان راتب | Sub_HR_Payroll | الرواتب | الفترة | HR_Payroll_End | تاريخ النهاية | Date | ∅ | ∅ | Yes | ∅ | ∅ | HR_Payroll | End_Date | ∅ | ∅ | ∅
  355) FORM_HR_AddPayroll | إنشاء بيان راتب | Sub_HR_Payroll | الرواتب | القيم | HR_Payroll_Basic | الراتب الأساسي | Number | ∅ | ∅ | Yes | ∅ | ∅ | HR_Payroll | Basic_Salary | ∅ | ∅ | ∅
  356) FORM_HR_AddPayroll | إنشاء بيان راتب | Sub_HR_Payroll | الرواتب | القيم | HR_Payroll_OT | إجمالي الإضافي | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Payroll | Total_OT_Amount | ∅ | ∅ | ∅
  357) FORM_HR_AddPayroll | إنشاء بيان راتب | Sub_HR_Payroll | الرواتب | القيم | HR_Payroll_Advance | قسط السلفة | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Payroll | Advance_Installment | ∅ | ∅ | ∅
  358) FORM_HR_AddPayroll | إنشاء بيان راتب | Sub_HR_Payroll | الرواتب | القيم | HR_Payroll_Deductions | الخصومات | Number | ∅ | ∅ | No | ∅ | ∅ | HR_Payroll | Deduction_Amount | ∅ | ∅ | ∅
  359) FORM_HR_AddPayroll | إنشاء بيان راتب | Sub_HR_Payroll | الرواتب | القيم | HR_Payroll_Net | صافي الراتب | Number | ∅ | ∅ | Yes | ∅ | ∅ | HR_Payroll | Net_Pay | ∅ | ∅ | ∅
  360) FORM_HR_AddPayroll | إنشاء بيان راتب | Sub_HR_Payroll | الرواتب | الحالة | HR_Payroll_Status | حالة البيان | Dropdown | SYS_Dropdowns | ∅ | Yes | Draft | DD_Payroll_Status | HR_Payroll | Status | ∅ | ∅ | ∅

➋.25 SYS_Users
 Headers:
  • User_Id
  • Full_Name
  • Username
  • Email
  • Job_Title
  • Department
  • Role_Id
  • IsActive
  • Disabled_At
  • Disabled_By
  • Password_Hash
  • Last_Login
  • Created_At
  • Created_By
  • Updated_At
  • Updated_By
  • External_Id
  • MFA_Enabled
  • Notes
 Rows:
  1) USR_00001 | Mohamed Sherif Elkhoraiby | mkhoraiby | m.elkhoraiby@gmail.com | System Administrator | Management | Admin | true | ∅ | ∅ | pk8F0I2YqNQqVd5sg/ejWai/fwuEDvyVgj5IZL1fJFc= | Sat Nov 01 2025 18:14:19 GMT+0200 (Eastern European Standard Time) | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | ∅ | false | System seeded admin account
  2) USR_00002 | Abd ElRahman Sherif Elkhoraiby | akhoraiby | abdo@gmail.com | Owner | Management | Admin | true | ∅ | ∅ | 5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5 | Mon Oct 20 2025 09:08:19 GMT+0300 (Eastern European Summer Time) | Fri Oct 17 2025 11:10:08 GMT+0300 (Eastern European Summer Time) | nijjaraerp@gmail.com | Fri Oct 17 2025 11:19:58 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | true | ∅

➋.26 SYS_Roles
 Headers:
  • Role_Id
  • Role_Title
  • Description
  • Is_System
  • Created_At
  • Created_By
  • Updated_At
  • Updated_By
 Rows:
  1) Admin | Administrator | Full system administrator | true | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  2) HR_Manager | HR Manager | Manages human resources data | false | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  3) Manager | Manager | Department manager | false | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  4) Basic_User | Basic User | General access | false | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  5) ROLE_Project_Manager | Project Manager | Manage projects | false | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  6) ROLE_Finance | Finance | Finance operations | false | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  7) ROLE_Accountant | Accountant | Journal posting | false | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  8) ROLE_Purchasing | Purchasing | Materials procurement | false | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  9) ROLE_Sales | Sales | Clients & contracts | false | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  10) ROLE_HR | HR | Human resources | false | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  11) ROLE_Payroll | Payroll | Payroll ops | false | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM

➋.27 SYS_Permissions
 Headers:
  • Permission_Key
  • Permission_Label
  • Description
  • Category
  • Created_At
  • Created_By
  • Updated_At
  • Updated_By
 Rows:
  1) SYS_VIEW_USERS | View Users | Allows viewing user list | System | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  2) SYS_EDIT_USERS | Edit Users | Allows editing user info | System | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  3) SYS_MANAGE_ROLES | Manage Roles | Allows managing roles and permissions | System | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  4) SYS_VIEW_AUDIT | View Audit Logs | Allows viewing audit log records | System | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  5) HR_VIEW_EMPLOYEES | View Employees | Allows viewing employee data | HR | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  6) HR_EDIT_EMPLOYEES | Edit Employees | Allows modifying employee data | HR | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  7) PRJ_VIEW_PROJECTS | View Projects | Allows viewing project data | Projects | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  8) PRJ_EDIT_PROJECTS | Edit Projects | Allows editing project records | Projects | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  9) FIN_VIEW_REPORTS | View Finance Reports | Allows viewing finance dashboards and reports | Finance | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  10) FIN_EDIT_TRANSACTIONS | Edit Transactions | Allows recording and modifying transactions | Finance | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM

➋.28 SYS_Role_Permissions
 Headers:
  • Role_Id
  • Permission_Key
  • Scope
  • Allowed
  • Constraints
  • Created_At
  • Created_By
  • Updated_At
  • Updated_By
 Rows:
  1) Admin | SYS_VIEW_USERS | GLOBAL | true | ∅ | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  2) Admin | SYS_EDIT_USERS | GLOBAL | true | ∅ | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  3) Admin | SYS_MANAGE_ROLES | GLOBAL | true | ∅ | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  4) Admin | SYS_VIEW_AUDIT | GLOBAL | true | ∅ | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  5) Admin | HR_VIEW_EMPLOYEES | GLOBAL | true | ∅ | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  6) Admin | HR_EDIT_EMPLOYEES | GLOBAL | true | ∅ | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  7) Admin | PRJ_VIEW_PROJECTS | GLOBAL | true | ∅ | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  8) Admin | PRJ_EDIT_PROJECTS | GLOBAL | true | ∅ | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  9) Admin | FIN_VIEW_REPORTS | GLOBAL | true | ∅ | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  10) Admin | FIN_EDIT_TRANSACTIONS | GLOBAL | true | ∅ | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM

➋.29 SYS_Settings
 Headers:
  • Setting_Key
  • Setting_Value
  • Description_EN
  • Updated_By
  • Updated_At
  • Created_At
 Rows:
  1) APP_NAME | Nijjara_ERP | Application name | SYSTEM | Fri Oct 17 2025 02:40:27 GMT+0300 (Eastern European Summer Time) | Fri Oct 17 2025 02:40:27 GMT+0300 (Eastern European Summer Time)
  2) DEFAULT_CURRENCY | EGP | Default currency | SYSTEM | Fri Oct 17 2025 02:40:27 GMT+0300 (Eastern European Summer Time) | Fri Oct 17 2025 02:40:27 GMT+0300 (Eastern European Summer Time)
  3) BOOTSTRAP_TIMESTAMP | 2025-10-16T23:40:27.549Z | Boot timestamp | SYSTEM | Fri Oct 17 2025 02:40:27 GMT+0300 (Eastern European Summer Time) | Fri Oct 17 2025 02:40:27 GMT+0300 (Eastern European Summer Time)
  4) Quick_Actions | Active/Inactive | ∅ | ∅ | ∅ | ∅
  5) Quick_Actions | Enable/Disable | ∅ | ∅ | ∅ | ∅
  6) Quick_Actions | Delete/Archieve | ∅ | ∅ | ∅ | ∅
  7) Filter_Options | ∅ | ∅ | ∅ | ∅ | ∅

➋.30 SYS_Audit_Log
 Headers:
  • Timestamp
  • User
  • Action
  • Details
  • Entity
  • Entity_Id
  • Scope
  • Sheet
  • Target_Id
  • Actor_Id
 Rows:
  1) 2025-10-16T23:40:31.675Z | mkhoraiby | LOGIN | User authenticated via demo portal. | User | USR_00001 | SYSTEM | SYS_Users | USR_00001 | SYSTEM
  2) 2025-10-16T23:40:31.675Z | mkhoraiby | VIEW | Viewed system management dashboard. | Dashboard | SYSTEM_OVERVIEW | SYSTEM | Portal | DASHBOARD | SYSTEM
  3) Fri Oct 17 2025 11:10:08 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | CREATE_USER | {"userId":"USR_00002"} | ∅ | USR_00002 | ∅ | ∅ | ∅ | ∅
  4) Fri Oct 17 2025 11:19:40 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | RESET_PASSWORD | {"userId":"USR_00002"} | ∅ | USR_00002 | ∅ | ∅ | ∅ | ∅
  5) Fri Oct 17 2025 11:19:50 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | TOGGLE_ACTIVE | {"userId":"USR_00002","previous":true,"next":false} | ∅ | USR_00002 | ∅ | ∅ | ∅ | ∅
  6) Fri Oct 17 2025 11:19:59 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | TOGGLE_ACTIVE | {"userId":"USR_00002","previous":false,"next":true} | ∅ | USR_00002 | ∅ | ∅ | ∅ | ∅
  7) Sat Oct 18 2025 08:27:33 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00002","username":"akhoraiby","role":"Admin"} | ∅ | USR_00002 | ∅ | ∅ | ∅ | ∅
  8) Sat Oct 18 2025 08:27:44 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_FAILURE | {"username":"akhoraiby","reason":"BAD_PASSWORD"} | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  9) Sat Oct 18 2025 08:27:59 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  10) Sat Oct 18 2025 08:29:57 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  11) Sat Oct 18 2025 08:33:16 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00002","username":"akhoraiby","role":"Admin"} | ∅ | USR_00002 | ∅ | ∅ | ∅ | ∅
  12) Sat Oct 18 2025 08:33:23 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_FAILURE | {"username":"akhoraiby","reason":"BAD_PASSWORD"} | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  13) Sat Oct 18 2025 21:53:54 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  14) Sun Oct 19 2025 02:00:56 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_FAILURE | {"username":"nijjaraerp@gmail.com","reason":"NOT_FOUND"} | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  15) Sun Oct 19 2025 02:01:12 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_FAILURE | {"username":"akhoraiby","reason":"BAD_PASSWORD"} | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  16) Sun Oct 19 2025 02:01:20 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00002","username":"akhoraiby","role":"Admin"} | ∅ | USR_00002 | ∅ | ∅ | ∅ | ∅
  17) Sun Oct 19 2025 02:01:43 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  18) Sun Oct 19 2025 02:05:25 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  19) Sun Oct 19 2025 02:05:59 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_FAILURE | {"username":"mkhoraiby","reason":"BAD_PASSWORD"} | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  20) Sun Oct 19 2025 03:34:02 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00002","username":"akhoraiby","role":"Admin"} | ∅ | USR_00002 | ∅ | ∅ | ∅ | ∅
  21) Sun Oct 19 2025 03:34:13 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_FAILURE | {"username":"akhoraiby","reason":"BAD_PASSWORD"} | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  22) Sun Oct 19 2025 03:34:35 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  23) Sun Oct 19 2025 03:41:02 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  24) Sun Oct 19 2025 03:41:12 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_FAILURE | {"username":"mkhoraiby","reason":"BAD_PASSWORD"} | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  25) Mon Oct 20 2025 07:21:17 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  26) Mon Oct 20 2025 07:22:21 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00002","username":"akhoraiby","role":"Admin"} | ∅ | USR_00002 | ∅ | ∅ | ∅ | ∅
  27) Mon Oct 20 2025 07:23:02 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_FAILURE | {"username":"akhoraiby","reason":"BAD_PASSWORD"} | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  28) Mon Oct 20 2025 09:08:21 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00002","username":"akhoraiby","role":"Admin"} | ∅ | USR_00002 | ∅ | ∅ | ∅ | ∅
  29) Mon Oct 20 2025 11:01:47 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  30) Mon Oct 20 2025 14:51:47 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  31) Mon Oct 20 2025 15:27:25 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  32) Mon Oct 20 2025 18:34:57 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  33) Tue Oct 21 2025 03:49:48 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  34) Tue Oct 21 2025 06:53:17 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  35) Tue Oct 21 2025 09:22:46 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin"} | ∅ | USR_00001 | ∅ | ∅ | ∅ | ∅
  36) Wed Oct 22 2025 15:10:29 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"9db16393-889f-4c40-bcad-d6ab0f2870d5","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  37) Wed Oct 22 2025 15:47:07 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"2a7d2185-17c7-429a-a467-623a95899d46","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  38) Wed Oct 22 2025 16:18:53 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"72fd80ba-9e2c-4bec-9042-5de06765e5bd","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  39) Wed Oct 22 2025 16:43:20 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"9bfc8d80-b924-488d-8883-5c80291438b6","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  40) Wed Oct 22 2025 17:44:34 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"6987a784-fde1-4218-9fc6-bb1e1b9559d7","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  41) Wed Oct 22 2025 19:17:52 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"1e9cd590-ee94-43d3-b816-afd837e7ca70","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  42) Wed Oct 22 2025 19:40:33 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"cea96eb9-aa17-4280-85f4-44a1500c0662","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  43) Wed Oct 22 2025 21:18:07 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"40da8950-e42a-4eb7-b12c-678c2653efa3","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  44) Thu Oct 23 2025 12:00:10 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"c562f1fd-dff0-45e8-92b2-3550f5598ef9","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  45) Thu Oct 23 2025 14:55:48 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"0992953f-3587-462a-86d5-0f666b9dd832","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  46) Thu Oct 23 2025 16:19:16 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"05468d1b-ba81-4ff3-9dd8-482dd35dc37b","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  47) Thu Oct 23 2025 16:26:01 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"18457d31-5ca3-4e5a-8d54-15c8b9e96b83","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  48) Thu Oct 23 2025 17:29:10 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"8a256049-ee9e-4f4e-a509-25d833a6f39e","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  49) Thu Oct 23 2025 18:22:58 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"9d20d022-04f6-42d4-a91c-9b84b4205455","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  50) Fri Oct 24 2025 08:28:48 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"48b9b42f-5392-4623-98d1-e227f8ecf0e1","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  51) Fri Oct 24 2025 08:37:10 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"a0d461f7-a6bd-438e-83d0-c153d57096c4","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  52) Fri Oct 24 2025 11:26:56 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"e2b4d72c-d8d7-4604-af8e-421a506e5861","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  53) Sat Oct 25 2025 01:31:52 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"5293ee91-a0c7-4960-9dd8-84f0c840c800","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  54) Sat Oct 25 2025 04:35:59 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"31407012-2342-4c14-9d83-c3dbe01b2d65","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  55) Sat Oct 25 2025 04:38:53 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"c8f5c36f-867d-49b3-b7b5-c127f18a33ee","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  56) Sat Oct 25 2025 04:39:18 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"8d2db118-f961-485c-a532-3dcc342f7ca9","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  57) Sat Oct 25 2025 04:42:05 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"aedc61d6-4257-4474-8ee7-572552e5a6e6","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  58) Sat Oct 25 2025 04:44:10 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"0525af52-d1ff-4b1b-acbd-45aa96ce6396","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  59) Sat Oct 25 2025 04:49:48 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"f2adf1aa-1976-4f18-b553-a2ade49db768","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  60) Sat Oct 25 2025 05:00:07 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"b8375eae-a184-49bd-b8a2-c80b65b34852","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  61) Sat Oct 25 2025 05:01:16 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"c8c7c365-7925-493a-aae4-092ea4bcf1a1","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  62) Sat Oct 25 2025 07:41:57 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"07d57eb1-b9c8-428e-bbb4-935396318cc9","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  63) Sat Oct 25 2025 07:49:21 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"bb2ebbce-495a-44ba-89c2-d3554131f17f","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  64) Sat Oct 25 2025 07:50:05 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"2ed7f72a-c4f8-4ea4-a599-5867c5122437","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  65) Sat Oct 25 2025 11:58:08 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"dd9ccbc8-0fab-4f8d-b49a-4a4b0b661000","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  66) Sat Oct 25 2025 11:58:48 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"7ae842a4-706e-4be4-8bf9-476a08df8d3b","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  67) Sat Oct 25 2025 15:52:11 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"3bae849c-02a9-440f-b576-cb7cb4e4b96a","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  68) Sat Oct 25 2025 16:47:04 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"85bb2d07-6335-4f34-86f0-1d2e64560a0c","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  69) Sat Oct 25 2025 18:29:05 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_FAILURE | {"username":"mkhoraiby","reason":"BAD_PASSWORD"} | ∅ | ∅ | ∅ | ∅ | ∅ | ∅
  70) Sat Oct 25 2025 18:29:19 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"6d2eb046-3b9b-4538-bcff-a72460f34a27","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  71) Sat Oct 25 2025 18:33:29 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"da734cc1-6249-4960-a3e2-7644b329d6bf","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  72) Sat Oct 25 2025 21:25:19 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"11554e6a-f8a9-47d3-a071-60d0b23d577a","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  73) Sun Oct 26 2025 08:50:21 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"cfbd998f-7fc8-4c23-901b-bf805a13aa72","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  74) Sun Oct 26 2025 11:32:40 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"d6283ee4-5a25-42ff-89ff-1c7486881931","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  75) Sun Oct 26 2025 12:11:09 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"6ae74c4f-457f-441f-83c6-0b50b515a9d3","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  76) Sun Oct 26 2025 17:55:45 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"350af76d-e6cf-45e8-982b-eeb1f2213176","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  77) Sun Oct 26 2025 18:30:22 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"97425a52-a666-4395-8fad-a95e81685651","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  78) Sun Oct 26 2025 18:45:53 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"3b794437-c22b-40f0-89e2-acbfb359cab5","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  79) Mon Oct 27 2025 00:04:35 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"aab9aec0-c7e2-4026-8201-80957f9fcb50","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  80) Mon Oct 27 2025 00:37:07 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"2009bc03-aa8d-4cc6-9aab-42c40f7a4c74","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  81) Mon Oct 27 2025 09:04:07 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"472a243c-68b2-4339-9cfa-387a6762c653","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  82) Mon Oct 27 2025 09:04:09 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"8afb5b96-ed3c-4fb1-bece-b33f8222cfb0","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  83) Mon Oct 27 2025 09:21:04 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"30324e62-7a6b-4f8b-9764-f31cc2f7ca4d","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  84) Mon Oct 27 2025 09:21:10 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"dbca0fb4-5c24-476c-8ce8-01b505ea66b4","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  85) Mon Oct 27 2025 09:24:33 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"3dc3158d-1175-4641-a467-f9f40f2f98d4","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  86) Mon Oct 27 2025 11:07:49 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"49b70de6-7ac2-4289-87da-0ad30b97a7bf","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  87) Mon Oct 27 2025 11:07:56 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"b0b0a314-70c0-4a41-ad5f-8c3e1c72457b","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  88) Mon Oct 27 2025 12:11:03 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"40e7e153-5132-497a-855e-74f12849e06b","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  89) Mon Oct 27 2025 13:48:41 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"38bc4b70-0de7-4345-a53c-41eb0f2921c1","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  90) Mon Oct 27 2025 14:11:23 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"b6bd7d13-46ad-4fd8-8c83-02e22063f632","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  91) Mon Oct 27 2025 15:18:22 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"7681ed91-04f7-4079-a674-d50fefb5f933","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  92) Mon Oct 27 2025 15:37:55 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"99ffd2f9-625f-41f6-affd-18f07b2dd013","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  93) Mon Oct 27 2025 18:37:52 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"8e9ccf23-798f-44cd-84ae-48960e91fc2b","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  94) Mon Oct 27 2025 20:45:56 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"25b92a21-4a07-43ff-85cc-3a3c589f20d9","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  95) Tue Oct 28 2025 05:11:41 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"5aa51c76-efae-42cd-bbcb-36f3f9286565","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  96) Tue Oct 28 2025 05:11:46 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"e5098db6-e6c2-4af1-9b6b-6444eb27c96a","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  97) Tue Oct 28 2025 14:59:23 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"da5a4df3-060b-438f-a428-516ea9e2f031","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  98) Tue Oct 28 2025 20:20:39 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"442389b7-affb-4a37-ab1f-243ade8a50e6","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  99) Tue Oct 28 2025 20:27:58 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"073aacaf-4df8-4b74-a23f-dad29c00a9d3","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  100) Tue Oct 28 2025 21:43:15 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"5870efd3-2711-4372-b4b9-f67ce1818acd","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  101) Tue Oct 28 2025 21:44:39 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"a49d4bf7-7a7a-479e-97fa-426e4dfe7dec","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  102) Wed Oct 29 2025 00:55:56 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"766dbd11-04b0-4cca-ab1d-02496e434df7","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  103) Wed Oct 29 2025 09:56:24 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"0e9f4ec0-7ca7-4b03-bd90-2f5fba159332","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  104) Wed Oct 29 2025 11:21:07 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"57063843-4c09-4752-91b8-f98af927ab57","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  105) Wed Oct 29 2025 11:21:08 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"a2b182a6-0127-4fb6-a6a1-4c2fe7222973","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  106) Wed Oct 29 2025 13:13:44 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"d6529c2e-4585-46a4-9a82-d018e014713e","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  107) 2025-10-29T13:45:05.683Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | SYS_Tab_Register | ∅ | SYSTEM | SYS_Tab_Register | ∅ | SYSTEM
  108) 2025-10-29T13:45:07.942Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | PRJ_Main | ∅ | SYSTEM | PRJ_Main | ∅ | SYSTEM
  109) 2025-10-29T13:45:08.241Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | PRJ_Tasks | ∅ | SYSTEM | PRJ_Tasks | ∅ | SYSTEM
  110) 2025-10-29T13:45:10.162Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | PRJ_Materials | ∅ | SYSTEM | PRJ_Materials | ∅ | SYSTEM
  111) 2025-10-29T13:45:10.451Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | PV_PRJ_Materials | ∅ | SYSTEM | PV_PRJ_Materials | ∅ | SYSTEM
  112) 2025-10-29T13:45:10.720Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | PV_PRJ_Main | ∅ | SYSTEM | PV_PRJ_Main | ∅ | SYSTEM
  113) 2025-10-29T13:45:11.010Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | PV_PRJ_Costs | ∅ | SYSTEM | PV_PRJ_Costs | ∅ | SYSTEM
  114) 2025-10-29T13:45:11.733Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | FIN_DirectExpenses | ∅ | SYSTEM | FIN_DirectExpenses | ∅ | SYSTEM
  115) 2025-10-29T13:45:12.666Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | PV_FIN_DirectExpenses_View | ∅ | SYSTEM | PV_FIN_DirectExpenses_View | ∅ | SYSTEM
  116) 2025-10-29T13:45:14.351Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_FIN_InDirExpense_Repeated_View | ∅ | SYSTEM | PV_FIN_InDirExpense_Repeated_View | ∅ | SYSTEM
  117) 2025-10-29T13:45:15.344Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_FIN_InDirExpense_Once_View | ∅ | SYSTEM | PV_FIN_InDirExpense_Once_View | ∅ | SYSTEM
  118) 2025-10-29T13:45:15.622Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | FIN_InDirExpense_Repeated | ∅ | SYSTEM | FIN_InDirExpense_Repeated | ∅ | SYSTEM
  119) 2025-10-29T13:45:15.909Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | FIN_InDirExpense_Once | ∅ | SYSTEM | FIN_InDirExpense_Once | ∅ | SYSTEM
  120) 2025-10-29T13:45:16.193Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | FIN_Project_Revenue | ∅ | SYSTEM | FIN_Project_Revenue | ∅ | SYSTEM
  121) 2025-10-29T13:45:17.365Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_FIN_Project_Revenue_View | ∅ | SYSTEM | PV_FIN_Project_Revenue_View | ∅ | SYSTEM
  122) 2025-10-29T13:45:17.627Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | FIN_Revenues | ∅ | SYSTEM | FIN_Revenues | ∅ | SYSTEM
  123) 2025-10-29T13:45:18.556Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_FIN_Revenues_View | ∅ | SYSTEM | PV_FIN_Revenues_View | ∅ | SYSTEM
  124) 2025-10-29T13:45:18.842Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | FIN_Journal | ∅ | SYSTEM | FIN_Journal | ∅ | SYSTEM
  125) 2025-10-29T13:45:20.232Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_FIN_Journal_View | ∅ | SYSTEM | PV_FIN_Journal_View | ∅ | SYSTEM
  126) 2025-10-29T13:45:20.499Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | FIN_Custody | ∅ | SYSTEM | FIN_Custody | ∅ | SYSTEM
  127) 2025-10-29T13:45:21.369Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_FIN_Custody_View | ∅ | SYSTEM | PV_FIN_Custody_View | ∅ | SYSTEM
  128) 2025-10-29T13:45:22.160Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | FIN_GL_Totals | ∅ | SYSTEM | FIN_GL_Totals | ∅ | SYSTEM
  129) 2025-10-29T13:45:23.038Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_FIN_GL_Totals_View | ∅ | SYSTEM | PV_FIN_GL_Totals_View | ∅ | SYSTEM
  130) 2025-10-29T13:45:24.732Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | PV_PRJ_Tasks | ∅ | SYSTEM | PV_PRJ_Tasks | ∅ | SYSTEM
  131) 2025-10-29T13:45:26.134Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | PV_PRJ_Clients | ∅ | SYSTEM | PV_PRJ_Clients | ∅ | SYSTEM
  132) 2025-10-29T13:45:26.408Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | PV_PRJ_Schedule_Calc | ∅ | SYSTEM | PV_PRJ_Schedule_Calc | ∅ | SYSTEM
  133) 2025-10-29T13:45:27.345Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_PRJ_Dashboard | ∅ | SYSTEM | PV_PRJ_Dashboard | ∅ | SYSTEM
  134) 2025-10-29T13:45:28.273Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_PRJ_KPIs | ∅ | SYSTEM | PV_PRJ_KPIs | ∅ | SYSTEM
  135) 2025-10-29T13:45:28.552Z | SYSTEM | UPDATE_HEADERS | Updated header row to match schema during audit. | PV_PRJ_InDirExp_Allocations | ∅ | SYSTEM | PV_PRJ_InDirExp_Allocations | ∅ | SYSTEM
  136) 2025-10-29T13:45:29.454Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_FIN_KPIs | ∅ | SYSTEM | PV_FIN_KPIs | ∅ | SYSTEM
  137) 2025-10-29T13:45:30.391Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_HR_Employees | ∅ | SYSTEM | PV_HR_Employees | ∅ | SYSTEM
  138) 2025-10-29T13:45:31.663Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_HR_Departments | ∅ | SYSTEM | PV_HR_Departments | ∅ | SYSTEM
  139) 2025-10-29T13:45:32.657Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_HR_Attendance | ∅ | SYSTEM | PV_HR_Attendance | ∅ | SYSTEM
  140) 2025-10-29T13:45:34.286Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_HR_Leave | ∅ | SYSTEM | PV_HR_Leave | ∅ | SYSTEM
  141) 2025-10-29T13:45:35.332Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_HR_Leave_Requests | ∅ | SYSTEM | PV_HR_Leave_Requests | ∅ | SYSTEM
  142) 2025-10-29T13:45:37.374Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_HR_Advances | ∅ | SYSTEM | PV_HR_Advances | ∅ | SYSTEM
  143) 2025-10-29T13:45:38.232Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_HR_Deductions | ∅ | SYSTEM | PV_HR_Deductions | ∅ | SYSTEM
  144) 2025-10-29T13:45:39.030Z | SYSTEM | CREATE_SHEET | Created missing sheet during audit. | PV_HR_Payroll | ∅ | SYSTEM | PV_HR_Payroll | ∅ | SYSTEM
  145) 2025-10-29T13:46:46.952Z | SYSTEM | UPDATE_RENDER_LOGIC | Updated 42 rows with render engine columns. | SYS_Tab_Register | ∅ | SYSTEM | SYS_Tab_Register | ∅ | SYSTEM
  146) Wed Oct 29 2025 18:18:44 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"4523b1a9-9e71-44ee-a01b-40e1672c5563","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  147) Wed Oct 29 2025 18:48:14 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"f15d3b80-763d-430d-94fe-6192aa966c93","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  148) Wed Oct 29 2025 19:53:37 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"9599fcd0-6c5b-49de-a481-63d5467953d9","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  149) Thu Oct 30 2025 01:30:54 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"b95ebca9-e85a-4c8d-806c-52182cadcfc4","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  150) Thu Oct 30 2025 03:11:51 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"8578ca70-3a52-4daa-822a-88090183d295","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  151) Thu Oct 30 2025 13:02:29 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"939836dd-db02-49d9-b2d6-e9d99c4a526c","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  152) Thu Oct 30 2025 13:02:37 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"e9cabe25-65b2-4c8a-b5a4-bb7831faafe8","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  153) Thu Oct 30 2025 13:47:12 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"a681840c-aa35-4d36-96f7-9fddee918b8d","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  154) Fri Oct 31 2025 03:47:48 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"c7f842a1-5e31-48e3-88ad-62bd2c77a9df","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  155) Fri Oct 31 2025 11:14:04 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"c8eb174c-23f8-4fe6-a3d8-6d53a01711f7","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  156) Fri Oct 31 2025 14:33:52 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"5201cd5a-b946-4735-ae98-fe24b2d56bc1","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  157) Fri Oct 31 2025 15:15:47 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"96455167-0c15-404b-8ba2-4aa53ee31da2","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  158) Fri Oct 31 2025 15:16:00 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"3cb5ffc4-6c8e-4439-afba-d3534af5241a","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  159) Fri Oct 31 2025 15:54:08 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"230adf0c-3566-4132-89ef-5eb9a3998c87","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  160) Fri Oct 31 2025 16:33:42 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"aad0d700-aaf9-417c-8953-95c9242c5ec3","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  161) Fri Oct 31 2025 16:37:11 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"aca9e85e-058c-4203-a924-d27fe7b755a8","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  162) Fri Oct 31 2025 19:05:36 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"fa14a83b-3696-40dc-b0ac-e74321b5bcbc","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  163) Sat Nov 01 2025 18:14:14 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"743c4a7b-4f0f-42f1-a93b-dc186e536b08","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅
  164) Sat Nov 01 2025 18:14:22 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | LOGIN_SUCCESS | {"userId":"USR_00001","username":"mkhoraiby","role":"Admin","sessionId":"e0e4932b-e0b4-4aa0-964c-bfbef8d2d1af","message":"User mkhoraiby logged in.","entity":"Users","entityId":"USR_00001"} | Users | USR_00001 | ∅ | ∅ | ∅ | ∅

➋.31 SYS_Sessions
 Headers:
  • Session_Id
  • User_Id
  • Actor_Email
  • Actor_User_Id
  • Type
  • Status
  • Device
  • Ip_Address
  • Auth_Token
  • Started_At
  • Ended_At
  • Created_At
  • Created_By
  • Last_Seen
  • Revoked_At
  • Revoked_By
  • Metadata
 Rows:
  1) SESS-0001 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | Chrome on Windows | 102.45.12.1 | ∅ | 2025-10-16T23:40:31.545Z | ∅ | 2025-10-16T23:40:31.545Z | SYSTEM | 2025-10-16T23:40:31.545Z | ∅ | ∅ | {"ipGeolocation":"Cairo, EG"}
  2) 9db16393-889f-4c40-bcad-d6ab0f2870d5 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 22 2025 15:10:28 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 22 2025 15:10:28 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  3) 2a7d2185-17c7-429a-a467-623a95899d46 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 22 2025 15:47:05 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 22 2025 15:47:05 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  4) 72fd80ba-9e2c-4bec-9042-5de06765e5bd | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 22 2025 16:18:52 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 22 2025 16:18:52 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  5) 9bfc8d80-b924-488d-8883-5c80291438b6 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 22 2025 16:43:18 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 22 2025 16:43:18 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  6) 6987a784-fde1-4218-9fc6-bb1e1b9559d7 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 22 2025 17:44:31 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 22 2025 17:44:31 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  7) 1e9cd590-ee94-43d3-b816-afd837e7ca70 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 22 2025 19:17:50 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 22 2025 19:17:50 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  8) cea96eb9-aa17-4280-85f4-44a1500c0662 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 22 2025 19:40:31 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 22 2025 19:40:31 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  9) 40da8950-e42a-4eb7-b12c-678c2653efa3 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 22 2025 21:18:06 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 22 2025 21:18:06 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  10) c562f1fd-dff0-45e8-92b2-3550f5598ef9 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Thu Oct 23 2025 12:00:09 GMT+0300 (Eastern European Summer Time) | ∅ | Thu Oct 23 2025 12:00:09 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  11) 0992953f-3587-462a-86d5-0f666b9dd832 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Thu Oct 23 2025 14:55:47 GMT+0300 (Eastern European Summer Time) | ∅ | Thu Oct 23 2025 14:55:47 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  12) 05468d1b-ba81-4ff3-9dd8-482dd35dc37b | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Thu Oct 23 2025 16:19:13 GMT+0300 (Eastern European Summer Time) | ∅ | Thu Oct 23 2025 16:19:13 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  13) 18457d31-5ca3-4e5a-8d54-15c8b9e96b83 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Thu Oct 23 2025 16:26:00 GMT+0300 (Eastern European Summer Time) | ∅ | Thu Oct 23 2025 16:26:00 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  14) 8a256049-ee9e-4f4e-a509-25d833a6f39e | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Thu Oct 23 2025 17:29:08 GMT+0300 (Eastern European Summer Time) | ∅ | Thu Oct 23 2025 17:29:08 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  15) 9d20d022-04f6-42d4-a91c-9b84b4205455 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Thu Oct 23 2025 18:22:57 GMT+0300 (Eastern European Summer Time) | ∅ | Thu Oct 23 2025 18:22:57 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  16) 48b9b42f-5392-4623-98d1-e227f8ecf0e1 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Fri Oct 24 2025 08:28:47 GMT+0300 (Eastern European Summer Time) | ∅ | Fri Oct 24 2025 08:28:47 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  17) a0d461f7-a6bd-438e-83d0-c153d57096c4 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Fri Oct 24 2025 08:37:08 GMT+0300 (Eastern European Summer Time) | ∅ | Fri Oct 24 2025 08:37:08 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  18) e2b4d72c-d8d7-4604-af8e-421a506e5861 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Fri Oct 24 2025 11:26:55 GMT+0300 (Eastern European Summer Time) | ∅ | Fri Oct 24 2025 11:26:55 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  19) 5293ee91-a0c7-4960-9dd8-84f0c840c800 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 01:31:51 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 01:31:51 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  20) 31407012-2342-4c14-9d83-c3dbe01b2d65 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 04:35:59 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 04:35:59 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  21) c8f5c36f-867d-49b3-b7b5-c127f18a33ee | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 04:38:51 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 04:38:51 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  22) 8d2db118-f961-485c-a532-3dcc342f7ca9 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 04:39:17 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 04:39:17 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  23) aedc61d6-4257-4474-8ee7-572552e5a6e6 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 04:42:04 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 04:42:04 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  24) 0525af52-d1ff-4b1b-acbd-45aa96ce6396 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 04:44:09 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 04:44:09 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  25) f2adf1aa-1976-4f18-b553-a2ade49db768 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 04:49:47 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 04:49:47 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  26) b8375eae-a184-49bd-b8a2-c80b65b34852 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 05:00:06 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 05:00:06 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  27) c8c7c365-7925-493a-aae4-092ea4bcf1a1 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 05:01:15 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 05:01:15 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  28) 07d57eb1-b9c8-428e-bbb4-935396318cc9 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 07:41:56 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 07:41:56 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  29) bb2ebbce-495a-44ba-89c2-d3554131f17f | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 07:49:20 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 07:49:20 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  30) 2ed7f72a-c4f8-4ea4-a599-5867c5122437 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 07:50:05 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 07:50:05 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  31) dd9ccbc8-0fab-4f8d-b49a-4a4b0b661000 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 11:58:07 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 11:58:07 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  32) 7ae842a4-706e-4be4-8bf9-476a08df8d3b | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 11:58:46 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 11:58:46 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  33) 3bae849c-02a9-440f-b576-cb7cb4e4b96a | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 15:52:07 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 15:52:07 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  34) 85bb2d07-6335-4f34-86f0-1d2e64560a0c | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 16:47:03 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 16:47:03 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  35) 6d2eb046-3b9b-4538-bcff-a72460f34a27 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 18:29:18 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 18:29:18 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  36) da734cc1-6249-4960-a3e2-7644b329d6bf | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 18:33:28 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 18:33:28 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  37) 11554e6a-f8a9-47d3-a071-60d0b23d577a | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Oct 25 2025 21:25:18 GMT+0300 (Eastern European Summer Time) | ∅ | Sat Oct 25 2025 21:25:18 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  38) cfbd998f-7fc8-4c23-901b-bf805a13aa72 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sun Oct 26 2025 08:50:20 GMT+0300 (Eastern European Summer Time) | ∅ | Sun Oct 26 2025 08:50:20 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  39) d6283ee4-5a25-42ff-89ff-1c7486881931 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sun Oct 26 2025 11:32:39 GMT+0300 (Eastern European Summer Time) | ∅ | Sun Oct 26 2025 11:32:39 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  40) 6ae74c4f-457f-441f-83c6-0b50b515a9d3 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sun Oct 26 2025 12:11:07 GMT+0300 (Eastern European Summer Time) | ∅ | Sun Oct 26 2025 12:11:07 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  41) 350af76d-e6cf-45e8-982b-eeb1f2213176 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sun Oct 26 2025 17:55:44 GMT+0300 (Eastern European Summer Time) | ∅ | Sun Oct 26 2025 17:55:44 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  42) 97425a52-a666-4395-8fad-a95e81685651 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sun Oct 26 2025 18:30:21 GMT+0300 (Eastern European Summer Time) | ∅ | Sun Oct 26 2025 18:30:21 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  43) 3b794437-c22b-40f0-89e2-acbfb359cab5 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sun Oct 26 2025 18:45:52 GMT+0300 (Eastern European Summer Time) | ∅ | Sun Oct 26 2025 18:45:52 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  44) aab9aec0-c7e2-4026-8201-80957f9fcb50 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 00:04:33 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 00:04:33 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  45) 2009bc03-aa8d-4cc6-9aab-42c40f7a4c74 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 00:37:06 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 00:37:06 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  46) 472a243c-68b2-4339-9cfa-387a6762c653 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 09:04:06 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 09:04:06 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  47) 8afb5b96-ed3c-4fb1-bece-b33f8222cfb0 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 09:04:09 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 09:04:09 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  48) 30324e62-7a6b-4f8b-9764-f31cc2f7ca4d | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 09:21:02 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 09:21:02 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  49) dbca0fb4-5c24-476c-8ce8-01b505ea66b4 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 09:21:09 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 09:21:09 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  50) 3dc3158d-1175-4641-a467-f9f40f2f98d4 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 09:24:32 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 09:24:32 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  51) 49b70de6-7ac2-4289-87da-0ad30b97a7bf | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 11:07:48 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 11:07:48 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  52) b0b0a314-70c0-4a41-ad5f-8c3e1c72457b | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 11:07:55 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 11:07:55 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  53) 40e7e153-5132-497a-855e-74f12849e06b | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 12:11:01 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 12:11:01 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  54) 38bc4b70-0de7-4345-a53c-41eb0f2921c1 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 13:48:38 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 13:48:38 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  55) b6bd7d13-46ad-4fd8-8c83-02e22063f632 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 14:11:22 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 14:11:22 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  56) 7681ed91-04f7-4079-a674-d50fefb5f933 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 15:18:21 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 15:18:21 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  57) 99ffd2f9-625f-41f6-affd-18f07b2dd013 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 15:37:54 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 15:37:54 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  58) 8e9ccf23-798f-44cd-84ae-48960e91fc2b | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 18:37:49 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 18:37:49 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  59) 25b92a21-4a07-43ff-85cc-3a3c589f20d9 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Mon Oct 27 2025 20:45:56 GMT+0300 (Eastern European Summer Time) | ∅ | Mon Oct 27 2025 20:45:56 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  60) 5aa51c76-efae-42cd-bbcb-36f3f9286565 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Tue Oct 28 2025 05:11:40 GMT+0300 (Eastern European Summer Time) | ∅ | Tue Oct 28 2025 05:11:40 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  61) e5098db6-e6c2-4af1-9b6b-6444eb27c96a | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Tue Oct 28 2025 05:11:45 GMT+0300 (Eastern European Summer Time) | ∅ | Tue Oct 28 2025 05:11:45 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  62) da5a4df3-060b-438f-a428-516ea9e2f031 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Tue Oct 28 2025 14:59:23 GMT+0300 (Eastern European Summer Time) | ∅ | Tue Oct 28 2025 14:59:23 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  63) 442389b7-affb-4a37-ab1f-243ade8a50e6 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Tue Oct 28 2025 20:20:38 GMT+0300 (Eastern European Summer Time) | ∅ | Tue Oct 28 2025 20:20:38 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  64) 073aacaf-4df8-4b74-a23f-dad29c00a9d3 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Tue Oct 28 2025 20:27:57 GMT+0300 (Eastern European Summer Time) | ∅ | Tue Oct 28 2025 20:27:57 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  65) 5870efd3-2711-4372-b4b9-f67ce1818acd | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Tue Oct 28 2025 21:43:13 GMT+0300 (Eastern European Summer Time) | ∅ | Tue Oct 28 2025 21:43:13 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  66) a49d4bf7-7a7a-479e-97fa-426e4dfe7dec | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Tue Oct 28 2025 21:44:38 GMT+0300 (Eastern European Summer Time) | ∅ | Tue Oct 28 2025 21:44:38 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  67) 766dbd11-04b0-4cca-ab1d-02496e434df7 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 29 2025 00:55:56 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 29 2025 00:55:56 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  68) 0e9f4ec0-7ca7-4b03-bd90-2f5fba159332 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 29 2025 09:56:23 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 29 2025 09:56:23 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  69) 57063843-4c09-4752-91b8-f98af927ab57 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 29 2025 11:21:06 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 29 2025 11:21:06 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  70) a2b182a6-0127-4fb6-a6a1-4c2fe7222973 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 29 2025 11:21:07 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 29 2025 11:21:07 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  71) d6529c2e-4585-46a4-9a82-d018e014713e | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 29 2025 13:13:43 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 29 2025 13:13:43 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  72) 4523b1a9-9e71-44ee-a01b-40e1672c5563 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 29 2025 18:18:42 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 29 2025 18:18:42 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  73) f15d3b80-763d-430d-94fe-6192aa966c93 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 29 2025 18:48:13 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 29 2025 18:48:13 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  74) 9599fcd0-6c5b-49de-a481-63d5467953d9 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Wed Oct 29 2025 19:53:36 GMT+0300 (Eastern European Summer Time) | ∅ | Wed Oct 29 2025 19:53:36 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  75) b95ebca9-e85a-4c8d-806c-52182cadcfc4 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Thu Oct 30 2025 01:30:54 GMT+0300 (Eastern European Summer Time) | ∅ | Thu Oct 30 2025 01:30:54 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  76) 8578ca70-3a52-4daa-822a-88090183d295 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Thu Oct 30 2025 03:11:49 GMT+0300 (Eastern European Summer Time) | ∅ | Thu Oct 30 2025 03:11:49 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  77) 939836dd-db02-49d9-b2d6-e9d99c4a526c | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Thu Oct 30 2025 13:02:28 GMT+0300 (Eastern European Summer Time) | ∅ | Thu Oct 30 2025 13:02:28 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  78) e9cabe25-65b2-4c8a-b5a4-bb7831faafe8 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Thu Oct 30 2025 13:02:36 GMT+0300 (Eastern European Summer Time) | ∅ | Thu Oct 30 2025 13:02:36 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  79) a681840c-aa35-4d36-96f7-9fddee918b8d | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Thu Oct 30 2025 13:47:11 GMT+0300 (Eastern European Summer Time) | ∅ | Thu Oct 30 2025 13:47:11 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  80) c7f842a1-5e31-48e3-88ad-62bd2c77a9df | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Fri Oct 31 2025 03:47:47 GMT+0200 (Eastern European Standard Time) | ∅ | Fri Oct 31 2025 03:47:47 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  81) c8eb174c-23f8-4fe6-a3d8-6d53a01711f7 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Fri Oct 31 2025 11:14:03 GMT+0200 (Eastern European Standard Time) | ∅ | Fri Oct 31 2025 11:14:03 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  82) 5201cd5a-b946-4735-ae98-fe24b2d56bc1 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Fri Oct 31 2025 14:33:51 GMT+0200 (Eastern European Standard Time) | ∅ | Fri Oct 31 2025 14:33:51 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  83) 96455167-0c15-404b-8ba2-4aa53ee31da2 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Fri Oct 31 2025 15:15:45 GMT+0200 (Eastern European Standard Time) | ∅ | Fri Oct 31 2025 15:15:45 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  84) 3cb5ffc4-6c8e-4439-afba-d3534af5241a | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Fri Oct 31 2025 15:15:59 GMT+0200 (Eastern European Standard Time) | ∅ | Fri Oct 31 2025 15:15:59 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  85) 230adf0c-3566-4132-89ef-5eb9a3998c87 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Fri Oct 31 2025 15:54:06 GMT+0200 (Eastern European Standard Time) | ∅ | Fri Oct 31 2025 15:54:06 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  86) aad0d700-aaf9-417c-8953-95c9242c5ec3 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Fri Oct 31 2025 16:33:40 GMT+0200 (Eastern European Standard Time) | ∅ | Fri Oct 31 2025 16:33:40 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  87) aca9e85e-058c-4203-a924-d27fe7b755a8 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Fri Oct 31 2025 16:37:10 GMT+0200 (Eastern European Standard Time) | ∅ | Fri Oct 31 2025 16:37:10 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  88) fa14a83b-3696-40dc-b0ac-e74321b5bcbc | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Fri Oct 31 2025 19:05:33 GMT+0200 (Eastern European Standard Time) | ∅ | Fri Oct 31 2025 19:05:33 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  89) 743c4a7b-4f0f-42f1-a93b-dc186e536b08 | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Nov 01 2025 18:14:13 GMT+0200 (Eastern European Standard Time) | ∅ | Sat Nov 01 2025 18:14:13 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅
  90) e0e4932b-e0b4-4aa0-964c-bfbef8d2d1af | USR_00001 | m.elkhoraiby@gmail.com | USR_00001 | LOGIN | ACTIVE | ∅ | ∅ | ∅ | Sat Nov 01 2025 18:14:20 GMT+0200 (Eastern European Standard Time) | ∅ | Sat Nov 01 2025 18:14:20 GMT+0200 (Eastern European Standard Time) | m.elkhoraiby@gmail.com | ∅ | ∅ | ∅ | ∅

➋.32 SYS_User_Properties
 Headers:
  • User_Id
  • Property_Key
  • Property_Value
  • Created_At
  • Created_By
  • Updated_At
  • Updated_By
 Rows:
  1) USR_00001 | Preferred_Language | ar-EG | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  2) USR_00001 | Timezone | Africa/Cairo | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  3) USR_00002 | Must_Change | true | ∅ | ∅ | Fri Oct 17 2025 11:19:40 GMT+0300 (Eastern European Summer Time) | m.elkhoraiby@gmail.com

➋.33 SYS_PubHolidays
 (no data rows)

➋.34 PV_SYS_Users_Table
 Headers:
  • User_Id
  • Full_Name
  • Username
  • Email
  • Department
  • Role_Id
  • IsActive
  • Job_Title
  • Last_Login
  • Updated_At
 Rows:
  1) USR_00001 | Mohamed Sherif Elkhoraiby | mkhoraiby | m.elkhoraiby@gmail.com | Management | Admin | true | System Administrator | ∅ | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time)

➋.35 HR_Departments
 Headers:
  • Dept_Code
  • Dept_Name_EN
  • Dept_Name_AR
  • Is_Active
  • Sort_Order
  • Created_At
  • Created_By
 Rows:
  1) MGMT | Management | الإدارة | true | 1 | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  2) HR | Human Resources | الموارد البشرية | true | 2 | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  3) FIN | Finance | المالية | true | 3 | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM
  4) PRJ | Projects | المشروعات | true | 4 | Thu Oct 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | SYSTEM

➋.36 HR_Employees
 Headers:
  • Employee_ID
  • Full_Name_EN
  • Full_Name_AR
  • Date_of_Birth
  • Gender
  • National_ID
  • Marital_Status
  • Military_Status
  • Mobile_Main
  • Mobile_Sub
  • Home_Address
  • Email
  • Emergency_Contact
  • Relation
  • EC_Mobile
  • Job_Title
  • Department
  • Hire_Date
  • Contract_Type
  • Status
  • Basic_Salary
  • Allowances
  • Deductions
  • Created_At
  • Created_By
 Rows:
  1) EMP-001 | Walid Mohamed Hassan | وليد محمد حسن | Sat Nov 28 1998 00:00:00 GMT+0200 (Eastern European Standard Time) | ذكر | 296040946590819 | أعزب | مؤدى الخدمة | 1216821803 | 1017227719 | الزمالك - شارع ٢٦ يوليو | walid.mohamed.hassan@nijjara.local | أحمد محمد حسن | أم | 1116166365 | أمين مخزن | المخزن | Thu Mar 02 2023 00:00:00 GMT+0200 (Eastern European Standard Time) | مؤقت | تحت التجربة | 12000 | 500 | 400 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام
  2) EMP-002 | Mohamed Ahmed Ibrahim | محمد أحمد إبراهيم | Thu Jan 10 1991 00:00:00 GMT+0200 (Eastern European Standard Time) | ذكر | 295031264114870 | متزوج | مؤدى الخدمة | 1184245466 | 1167829271 | الشيخ زايد - الحي الرابع | mohamed.ahmed.ibrahim@nijjara.local | إسلام محمد فؤاد | أخ | 1237847456 | منسق طلبات مخزن | المشتريات | Thu Jan 18 2024 00:00:00 GMT+0200 (Eastern European Standard Time) | عامل يومية | في إجازة | 12000 | 1000 | 400 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام
  3) EMP-003 | Mohamed Ahmed Ibrahim | محمد أحمد إبراهيم | Wed Jul 14 1999 00:00:00 GMT+0300 (Eastern European Summer Time) | ذكر | 295071177171329 | أعزب | مؤجل | 1185503314 | 1270353521 | المعادي - زهراء المعادي | mohamed.ahmed.ibrahim@nijjara.local | باسم خالد يوسف | أم | 1099277071 | منسق طلبات مخزن | المشتريات | Sat Jan 14 2023 00:00:00 GMT+0200 (Eastern European Standard Time) | عامل يومية | في إجازة | 12000 | 1000 | 0 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام
  4) EMP-004 | Hossam Khaled Mahmoud | حسام خالد محمود | Mon May 01 1995 00:00:00 GMT+0300 (Eastern European Summer Time) | ذكر | 296030170982717 | أعزب | إعفاء نهائي | 1014126873 | 1291924795 | الزمالك - شارع ٢٦ يوليو | hossam.khaled.mahmoud@nijjara.local | شريف محمد سيد | ابن عم | 1222312217 | فني تقطيع خشب | ورشة النجارة | Wed Nov 01 2023 00:00:00 GMT+0200 (Eastern European Standard Time) | دوام كامل | تحت التجربة | 8000 | 750 | 0 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام
  5) EMP-005 | Hossam Khaled Mahmoud | حسام خالد محمود | Sat Oct 15 1994 00:00:00 GMT+0200 (Eastern European Standard Time) | ذكر | 298061975899244 | متزوج | مؤدى الخدمة | 1081172177 | 1149600086 | الشيخ زايد - الحي الرابع | hossam.khaled.mahmoud@nijjara.local | يوسف أحمد شريف | زوجة | 1037769586 | محاسب عام | الإدارة المالية | Wed Aug 07 2024 00:00:00 GMT+0300 (Eastern European Summer Time) | مؤقت | تحت التجربة | 6500 | 750 | 400 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام
  6) EMP-006 | Sherif Mohamed Sayed | شريف محمد سيد | Mon Feb 19 1990 00:00:00 GMT+0200 (Eastern European Standard Time) | ذكر | 291031927229287 | متزوج | إعفاء نهائي | 1027024530 | 1177651684 | المعادي - زهراء المعادي | sherif.mohamed.sayed@nijjara.local | جمال أحمد محمود | أخ | 1228452266 | مهندس موقع | مكتب المشاريع | Mon Mar 04 2024 00:00:00 GMT+0200 (Eastern European Standard Time) | مؤقت | نشط | 7000 | 0 | 0 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام
  7) EMP-007 | Karim Mahmoud Fawzy | كريم محمود فوزي | Sun Mar 26 1989 00:00:00 GMT+0200 (Eastern European Standard Time) | ذكر | 297111896307275 | أعزب | مؤدى الخدمة | 1070225401 | 1258662601 | العبور - الحي الخامس | karim.mahmoud.fawzy@nijjara.local | وليد محمد حسن | أب | 1052462607 | مدير مشروع | مكتب المشاريع | Tue Oct 31 2023 00:00:00 GMT+0200 (Eastern European Standard Time) | عامل يومية | تحت التجربة | 9000 | 500 | 0 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام
  8) EMP-008 | Youssef Ahmed Sherif | يوسف أحمد شريف | Sun Nov 21 1993 00:00:00 GMT+0200 (Eastern European Standard Time) | ذكر | 294092057703275 | متزوج | مؤدى الخدمة | 1026018508 | 1258963661 | الشيخ زايد - الحي الرابع | youssef.ahmed.sherif@nijjara.local | حسام خالد محمود | أخ | 1056156833 | لحام | الحدادة / المعدن | Fri Sep 06 2024 00:00:00 GMT+0300 (Eastern European Summer Time) | مؤقت | تحت التجربة | 8000 | 750 | 0 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام
  9) EMP-009 | Bassem Khaled Youssef | باسم خالد يوسف | Thu Jun 20 1991 00:00:00 GMT+0300 (Eastern European Summer Time) | ذكر | 297012282579987 | متزوج | إعفاء نهائي | 1098537448 | 1182770244 | هليوبوليس - شارع النزهة | bassem.khaled.youssef@nijjara.local | وليد محمد حسن | أب | 1031190026 | مشرف فريق موقع | فريق التركيب الموقعي | Wed May 10 2023 00:00:00 GMT+0300 (Eastern European Summer Time) | مؤقت | نشط | 15000 | 1200 | 250 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام
  10) EMP-010 | Walid Mohamed Hassan | وليد محمد حسن | Mon Jun 26 1989 00:00:00 GMT+0300 (Eastern European Summer Time) | ذكر | 290100447522532 | متزوج | إعفاء نهائي | 1293700702 | 1141619394 | العبور - الحي الخامس | walid.mohamed.hassan@nijjara.local | أحمد محمد حسن | أم | 1256833983 | مشغل CNC | قسم CNC | Fri Apr 12 2024 00:00:00 GMT+0200 (Eastern European Standard Time) | دوام كامل | في إجازة | 8000 | 1000 | 0 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام
  11) EMP-011 | Tarek Ahmed Sami | طارق أحمد سامي | Thu Dec 02 1999 00:00:00 GMT+0200 (Eastern European Standard Time) | ذكر | 290042529857315 | متزوج | مؤدى الخدمة | 1217354136 | 1165319667 | الشروق - كمبوند الشروق | tarek.ahmed.sami@nijjara.local | عبدالله محمد رمضان | زوجة | 1291206957 | محاسب تكاليف | الإدارة المالية | Mon Apr 15 2024 00:00:00 GMT+0200 (Eastern European Standard Time) | عامل يومية | نشط | 5500 | 750 | 0 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام
  12) EMP-012 | Ahmed Mohamed Hassan | أحمد محمد حسن | Wed Aug 02 1989 00:00:00 GMT+0300 (Eastern European Summer Time) | ذكر | 292121312104875 | متزوج | إعفاء نهائي | 1053091973 | 1243631042 | مدينة نصر - مكرم عبيد | ahmed.mohamed.hassan@nijjara.local | يوسف أحمد شريف | زوجة | 1181763984 | مسؤول مشتريات | المشتريات | Sun Mar 24 2024 00:00:00 GMT+0200 (Eastern European Standard Time) | مؤقت | تحت التجربة | 15000 | 750 | 250 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام
  13) EMP-013 | Islam Mohamed Fouad | إسلام محمد فؤاد | Thu Jan 16 1997 00:00:00 GMT+0200 (Eastern European Standard Time) | ذكر | 297021917063633 | متزوج | مؤجل | 1025551462 | 1118283085 | الزمالك - شارع ٢٦ يوليو | islam.mohamed.fouad@nijjara.local | جمال أحمد محمود | زوجة | 1226344229 | فني تشكيل معدن | الحدادة / المعدن | Fri Jan 06 2023 00:00:00 GMT+0200 (Eastern European Standard Time) | مؤقت | نشط | 9000 | 500 | 400 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام
  14) EMP-014 | Karim Mahmoud Fawzy | كريم محمود فوزي | Wed Dec 05 1990 00:00:00 GMT+0200 (Eastern European Standard Time) | ذكر | 292120615015625 | متزوج | مؤجل | 1293410347 | 1226138696 | مدينة نصر - مكرم عبيد | karim.mahmoud.fawzy@nijjara.local | عبدالله محمد رمضان | أخ | 1244881690 | مدير مشروع | مكتب المشاريع | Mon Sep 04 2023 00:00:00 GMT+0300 (Eastern European Summer Time) | دوام كامل | تحت التجربة | 5500 | 500 | 0 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام
  15) EMP-015 | Sherif Mohamed Sayed | شريف محمد سيد | Sun May 12 1996 00:00:00 GMT+0300 (Eastern European Summer Time) | ذكر | 290010388765922 | أعزب | مؤجل | 1179628871 | 1257568416 | العبور - الحي الخامس | sherif.mohamed.sayed@nijjara.local | إسلام محمد فؤاد | أم | 1170051007 | محاسب تكاليف | الإدارة المالية | Tue Sep 10 2024 00:00:00 GMT+0300 (Eastern European Summer Time) | عامل يومية | تحت التجربة | 5500 | 0 | 250 | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام

➋.37 HR_Attendance
 (no data rows)

➋.38 HR_Leave_Requests
 (no data rows)

➋.39 HR_Absence_Deductions
 (no data rows)

➋.40 HR_Leave
 (no data rows)

➋.41 HR_Leave_Analysis
 (no data rows)

➋.42 HR_Advances
 (no data rows)

➋.43 HR_OverTime
 (no data rows)

➋.44 HR_Penalties
 Headers:
  • Penalty_ID
  • Penalty_Name
  • Penalty_Rule
  • Notes
  • Created_At
 Rows:
  1) PEN-001 | تأخير عن العمل (+١٥ دقيقة) | بعد تكرار ٣ مرات في نفس الشهر يتم خصم ساعة من الراتب. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  2) PEN-002 | تأخير عن العمل (+١٥ دقيقة) | بعد تكرار ٣ مرات في نفس الشهر يتم خصم ساعة من الراتب. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  3) PEN-003 | ترك الموقع بدون إخطار | يتم حسابها نصف يوم غياب وخصمه. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  4) PEN-004 | زي غير مطابق / بدون يونيفورم | إنذار شفهي أول مرة ثم خصم ٥٠ جنيه. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  5) PEN-005 | غياب بدون إذن | يتم خصم يوم كامل من أساسي المرتب بدون إذن مسبق. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  6) PEN-006 | نوم أثناء الوردية | خصم يوم كامل وإنذار نهائي. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  7) PEN-007 | التدخين داخل الورشة | خصم ١٠٠ جنيه. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  8) PEN-008 | رفض ارتداء معدات السلامة | استبعاد فوري من الموقع + إنذار مكتوب. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  9) PEN-009 | مخالفة سلامة / معدات وقاية | إنذار كتابي + خصم ٢٠٠ جنيه. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  10) PEN-010 | ترك الموقع بدون إخطار | يتم حسابها نصف يوم غياب وخصمه. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  11) PEN-011 | مخالفة سلامة / معدات وقاية | إنذار كتابي + خصم ٢٠٠ جنيه. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  12) PEN-012 | التدخين داخل الورشة | خصم ١٠٠ جنيه. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  13) PEN-013 | نوم أثناء الوردية | خصم يوم كامل وإنذار نهائي. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  14) PEN-014 | التدخين داخل الورشة | خصم ١٠٠ جنيه. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  15) PEN-015 | نوم أثناء الوردية | خصم يوم كامل وإنذار نهائي. | ∅ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)

➋.45 HR_Deductions
 (no data rows)

➋.46 HR_Payroll
 (no data rows)

➋.47 HR_KPIs
 (no data rows)

➋.48 PRJ_Main
 Headers:
  • Project_ID
  • Project_Name
  • Client_ID
  • Client_Name
  • Contract_ID
  • Start_Date
  • Planned_Days
  • Planned_End_Date
  • End_Date
  • Status
  • Project_Type
  • Project_Priority
  • Notes
  • Proj_Budget
  • Budget
  • Total_Pay_Received
  • Total_Pay_Pending
  • Planned_Material_Expense
  • Actual_Material_Expense
  • Planned_Materials
  • Actual_Materials
  • Manager
  • Created_At
  • Created_By
 Rows:
  1) PRJ_0001 | فيلا بالم هيلز - أعمال خشبية كاملة | CL-001 | مجموعة المصري للمقاولات | CTR-001 | Mon Mar 03 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 53 | Fri Apr 25 2025 01:00:00 GMT+0300 (Eastern European Summer Time) | ∅ | معلق | ∅ | 180000 | 180000 | 65220 | 114780 | 60000 | 67629 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅
  2) PRJ_0002 | تشطيب داخلي لمقهى وسط البلد | CL-002 | قهوة البلد للمطاعم | CTR-002 | Wed Apr 30 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | 60 | Sun Jun 29 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | ∅ | مكتمل | ∅ | 180000 | 180000 | 72825 | 107175 | 60000 | 68555 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅
  3) PRJ_0003 | تجديد دور إداري في برج مكاتب | CL-003 | شركة النيل للتطوير | CTR-003 | Fri Feb 21 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 39 | Tue Apr 01 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Mon Apr 14 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | معلق | ∅ | 320000 | 320000 | 147904 | 172096 | 12000 | 11603 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅
  4) PRJ_0004 | تشطيب شقة فاخرة بالزمالك | CL-004 | الدكتورة منى الشاذلي | CTR-004 | Tue Jan 07 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 77 | Tue Mar 25 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Mar 27 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | قيد التنفيذ | ∅ | 45000 | 45000 | 18273 | 26727 | 12000 | 12688 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅
  5) PRJ_0005 | تجديد مصنع - مدينة السادس من أكتوبر | CL-005 | مصانع حديد المصرية | CTR-005 | Thu Jan 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 58 | Sat Mar 01 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Mar 13 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | مكتمل | ∅ | 600000 | 600000 | 374083 | 225917 | 80000 | 83491 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅
  6) PRJ_0006 | تطوير استقبال عيادة طبية وأبواب | CL-006 | اتحاد ملاك بالم هيلز | CTR-006 | Fri Jan 17 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 85 | Sat Apr 12 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Mon Apr 07 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | مكتمل | ∅ | 180000 | 180000 | 112734 | 67266 | 12000 | 13591 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅
  7) PRJ_0007 | تحديث مطبخ مطعم ستانلس | CL-007 | مركز زايد الطبي التخصصي | CTR-007 | Fri Apr 18 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 89 | Wed Jul 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | Thu Jul 17 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | معلق | ∅ | 45000 | 45000 | 23868 | 21132 | 80000 | 88735 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅
  8) PRJ_0008 | غرفة اجتماعات مجلس إدارة - تغطية خشبية | CL-008 | مدارس النور الدولية | CTR-008 | Sun Jan 19 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 80 | Wed Apr 09 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | ∅ | قيد التنفيذ | ∅ | 120000 | 120000 | 75231 | 44769 | 45000 | 41228 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅
  9) PRJ_0009 | تجهيز معمل مدارس | CL-009 | إيليت للمطابخ الفاخرة | CTR-009 | Wed Apr 16 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 21 | Wed May 07 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | Sun May 04 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | معلق | ∅ | 120000 | 120000 | 78200 | 41800 | 80000 | 95997 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅
  10) PRJ_0010 | كشك أمن للكمبوند | CL-010 | سبا لوتس الأزرق | CTR-010 | Mon Jan 20 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 44 | Wed Mar 05 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Mar 13 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | مكتمل | ∅ | 120000 | 120000 | 86385 | 33615 | 25000 | 25661 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅
  11) PRJ_0011 | برجولة و دكة خشب لروف | CL-011 | داون تاون برجر | CTR-011 | Thu Apr 17 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 48 | Wed Jun 04 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | Wed Jun 11 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | معلق | ∅ | 320000 | 320000 | 206346 | 113654 | 80000 | 94032 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅
  12) PRJ_0012 | كسوة حائط ديكورية لوبي فندق | CL-012 | إدارة كمبوند جرين هيلز | CTR-012 | Mon Apr 07 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 84 | Mon Jun 30 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | Fri Jun 27 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | قيد التنفيذ | ∅ | 320000 | 320000 | 156372 | 163628 | 60000 | 66719 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅
  13) PRJ_0013 | وحدات عرض للمعرض باستخدام CNC | CL-013 | عيادات كليوباترا التخصصية | CTR-013 | Sat Jan 11 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 77 | Sat Mar 29 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | ∅ | معلق | ∅ | 45000 | 45000 | 24360 | 20640 | 25000 | 23466 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅
  14) PRJ_0014 | برجولة وحدات جلوس للحديقة | CL-014 | مكاتب سكاي لاين الإدارية | CTR-014 | Mon Apr 14 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 84 | Mon Jul 07 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | ∅ | معلق | ∅ | 120000 | 120000 | 85727 | 34273 | 60000 | 59883 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅
  15) PRJ_0015 | ترتيب أرفف و تخزين لمخزن | CL-015 | ذا بيك لاب للمخبوزات | CTR-015 | Thu Jan 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 59 | Sun Mar 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | ∅ | مكتمل | ∅ | 180000 | 180000 | 93242 | 86758 | 60000 | 54088 | راجع حصر الخامات | قيد التنفيذ | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | النظام | ∅ | ∅ | ∅

➋.49 PRJ_Tasks
 (no data rows)

➋.50 PRJ_Costs
 (no data rows)

➋.51 PRJ_Clients
 Headers:
  • Client_ID
  • Client_Name
  • Client_Mobile_1
  • Client_Mobile_2
  • Client_Email
  • Created_At
 Rows:
  1) CL-001 | مجموعة المصري للمقاولات | 01047790513 | 01056887773 | client1@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  2) CL-002 | قهوة البلد للمطاعم | 01076665707 | 01121277690 | client2@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  3) CL-003 | شركة النيل للتطوير | 01226986770 | 01115212477 | client3@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  4) CL-004 | الدكتورة منى الشاذلي | 01195838075 | 01191374172 | client4@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  5) CL-005 | مصانع حديد المصرية | 01264799870 | 01297409042 | client5@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  6) CL-006 | اتحاد ملاك بالم هيلز | 01175836622 | 01174741265 | client6@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  7) CL-007 | مركز زايد الطبي التخصصي | 01269865880 | 01072841225 | client7@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  8) CL-008 | مدارس النور الدولية | 01183027295 | 01186086194 | client8@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  9) CL-009 | إيليت للمطابخ الفاخرة | 01262463673 | 01254063147 | client9@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  10) CL-010 | سبا لوتس الأزرق | 01031345097 | 01119017705 | client10@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  11) CL-011 | داون تاون برجر | 01243199161 | 01231809276 | client11@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  12) CL-012 | إدارة كمبوند جرين هيلز | 01080283357 | 01198881096 | client12@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  13) CL-013 | عيادات كليوباترا التخصصية | 01260320241 | 01115684474 | client13@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  14) CL-014 | مكاتب سكاي لاين الإدارية | 01090038719 | 01273175188 | client14@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)
  15) CL-015 | ذا بيك لاب للمخبوزات | 01019712760 | 01094095472 | client15@client.eg | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time)

➋.52 PV_PRJ_Main
 Headers:
  • معرّف المشروع
  • اسم المشروع
  • العميل
  • تاريخ البدء
  • الأيام المخططة
  • تاريخ الانتهاء المخطط
  • تاريخ الانتهاء الفعلي
  • حالة المشروع
  • نوع المشروع
  • أولوية المشروع
  • الميزانية
  • التكلفة الفعلية
  • الفرق عن الميزانية
  • نسبة التقدم
  • ملاحظات
  • مدير المشروع
 Rows:
  1) PRJ_0001 | فيلا بالم هيلز - أعمال خشبية كاملة | مجموعة المصري للمقاولات | Mon Mar 03 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 53 | Fri Apr 25 2025 01:00:00 GMT+0300 (Eastern European Summer Time) | ∅ | معلق | ∅ | 180000 | 114780 | 0 | 114780 | 85.7 | 180000 | ∅
  2) PRJ_0002 | تشطيب داخلي لمقهى وسط البلد | قهوة البلد للمطاعم | Wed Apr 30 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | 60 | Sun Jun 29 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | ∅ | مكتمل | ∅ | 180000 | 107175 | 0 | 107175 | 85.7 | 180000 | ∅
  3) PRJ_0003 | تجديد دور إداري في برج مكاتب | شركة النيل للتطوير | Fri Feb 21 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 39 | Tue Apr 01 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Mon Apr 14 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | معلق | ∅ | 320000 | 172096 | 0 | 172096 | 85.7 | 320000 | ∅
  4) PRJ_0004 | تشطيب شقة فاخرة بالزمالك | الدكتورة منى الشاذلي | Tue Jan 07 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 77 | Tue Mar 25 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Mar 27 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | قيد التنفيذ | ∅ | 45000 | 26727 | 0 | 26727 | 85.7 | 45000 | ∅
  5) PRJ_0005 | تجديد مصنع - مدينة السادس من أكتوبر | مصانع حديد المصرية | Thu Jan 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 58 | Sat Mar 01 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Mar 13 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | مكتمل | ∅ | 600000 | 225917 | 0 | 225917 | 85.7 | 600000 | ∅
  6) PRJ_0006 | تطوير استقبال عيادة طبية وأبواب | اتحاد ملاك بالم هيلز | Fri Jan 17 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 85 | Sat Apr 12 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Mon Apr 07 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | مكتمل | ∅ | 180000 | 67266 | 0 | 67266 | 85.7 | 180000 | ∅
  7) PRJ_0007 | تحديث مطبخ مطعم ستانلس | مركز زايد الطبي التخصصي | Fri Apr 18 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 89 | Wed Jul 16 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | Thu Jul 17 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | معلق | ∅ | 45000 | 21132 | 0 | 21132 | 85.7 | 45000 | ∅
  8) PRJ_0008 | غرفة اجتماعات مجلس إدارة - تغطية خشبية | مدارس النور الدولية | Sun Jan 19 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 80 | Wed Apr 09 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | ∅ | قيد التنفيذ | ∅ | 120000 | 44769 | 0 | 44769 | 85.7 | 120000 | ∅
  9) PRJ_0009 | تجهيز معمل مدارس | إيليت للمطابخ الفاخرة | Wed Apr 16 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 21 | Wed May 07 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | Sun May 04 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | معلق | ∅ | 120000 | 41800 | 0 | 41800 | 85.7 | 120000 | ∅
  10) PRJ_0010 | كشك أمن للكمبوند | سبا لوتس الأزرق | Mon Jan 20 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 44 | Wed Mar 05 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Mar 13 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | مكتمل | ∅ | 120000 | 33615 | 0 | 33615 | 85.7 | 120000 | ∅
  11) PRJ_0011 | برجولة و دكة خشب لروف | داون تاون برجر | Thu Apr 17 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 48 | Wed Jun 04 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | Wed Jun 11 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | معلق | ∅ | 320000 | 113654 | 0 | 113654 | 85.7 | 320000 | ∅
  12) PRJ_0012 | كسوة حائط ديكورية لوبي فندق | إدارة كمبوند جرين هيلز | Mon Apr 07 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 84 | Mon Jun 30 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | Fri Jun 27 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | قيد التنفيذ | ∅ | 320000 | 163628 | 0 | 163628 | 85.7 | 320000 | ∅
  13) PRJ_0013 | وحدات عرض للمعرض باستخدام CNC | عيادات كليوباترا التخصصية | Sat Jan 11 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 77 | Sat Mar 29 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | ∅ | معلق | ∅ | 45000 | 20640 | 0 | 20640 | 85.7 | 45000 | ∅
  14) PRJ_0014 | برجولة وحدات جلوس للحديقة | مكاتب سكاي لاين الإدارية | Mon Apr 14 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 84 | Mon Jul 07 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | ∅ | معلق | ∅ | 120000 | 34273 | 0 | 34273 | 85.7 | 120000 | ∅
  15) PRJ_0015 | ترتيب أرفف و تخزين لمخزن | ذا بيك لاب للمخبوزات | Thu Jan 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 59 | Sun Mar 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | ∅ | مكتمل | ∅ | 180000 | 86758 | 0 | 86758 | 85.7 | 180000 | ∅

➋.53 PV_PRJ_Tasks
 Headers:
  • معرف المهمة
  • معرف المشروع
  • اسم المهمة
  • أولوية المهمة
  • معرف المسؤول
  • تاريخ البدء المخطط
  • تاريخ الانتهاء المخطط
  • تاريخ البدء الفعلي
  • تاريخ الانتهاء الفعلي
  • الحالة
  • تاريخ الإنشاء
  • أنشئ بواسطة
 Rows:
  1) ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅

➋.54 PV_PRJ_Costs
 (no data rows)

➋.55 PV_PRJ_Clients
 Headers:
  • معرف العميل
  • اسم العميل
  • رقم جوال العميل 1
  • رقم جوال العميل 2
  • بريد العميل الإلكتروني
  • تاريخ الإنشاء
 Rows:
  1) CL-015 | ذا بيك لاب للمخبوزات | 01019712760 | 01094095472 | client15@client.eg | ∅
  2) CL-014 | مكاتب سكاي لاين الإدارية | 01090038719 | 01273175188 | client14@client.eg | ∅
  3) CL-013 | عيادات كليوباترا التخصصية | 01260320241 | 01115684474 | client13@client.eg | ∅
  4) CL-012 | إدارة كمبوند جرين هيلز | 01080283357 | 01198881096 | client12@client.eg | ∅
  5) CL-011 | داون تاون برجر | 01243199161 | 01231809276 | client11@client.eg | ∅
  6) CL-010 | سبا لوتس الأزرق | 01031345097 | 01119017705 | client10@client.eg | ∅
  7) CL-009 | إيليت للمطابخ الفاخرة | 01262463673 | 01254063147 | client9@client.eg | ∅
  8) CL-008 | مدارس النور الدولية | 01183027295 | 01186086194 | client8@client.eg | ∅
  9) CL-007 | مركز زايد الطبي التخصصي | 01269865880 | 01072841225 | client7@client.eg | ∅
  10) CL-006 | اتحاد ملاك بالم هيلز | 01175836622 | 01174741265 | client6@client.eg | ∅
  11) CL-005 | مصانع حديد المصرية | 01264799870 | 01297409042 | client5@client.eg | ∅
  12) CL-004 | الدكتورة منى الشاذلي | 01195838075 | 01191374172 | client4@client.eg | ∅
  13) CL-003 | شركة النيل للتطوير | 01226986770 | 01115212477 | client3@client.eg | ∅
  14) CL-002 | قهوة البلد للمطاعم | 01076665707 | 01121277690 | client2@client.eg | ∅
  15) CL-001 | مجموعة المصري للمقاولات | 01047790513 | 01056887773 | client1@client.eg | ∅

➋.56 PV_PRJ_InDirExp_Allocations
 Headers:
  • معرف التخصيص
  • معرف المصروفات غير المباشرة المتكررة
  • معرف المصروفات غير المباشرة الواحدة
  • معرف المشروع
  • طريقة التخصيص
  • نسبة التخصيص
  • قيمة التخصيص
  • تاريخ الإنشاء
 Rows:
  1) ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅ | ∅

➋.57 PV_PRJ_Schedule_Calc
 Headers:
  • معرف المشروع
  • اسم المشروع
  • تاريخ البدء
  • الأيام المخططة
  • تاريخ الانتهاء المخطط
  • علامة الجدولة
 Rows:
  1) ∅ | ∅ | ∅ | ∅ | ∅ | ∅

➋.58 PV_FIN_DirectExpenses_View
 Headers:
  • معرف المصروف
  • اسم المشروع
  • تاريخ المصروف
  • الصنف
  • الكمية
  • الوحدة
  • سعر الوحدة
  • الإجمالي مع الضريبة
  • حالة الدفع
  • طريقة الدفع
  • تاريخ تسجيل المعاملة
 Rows:
  1) ∅ | تحديث مطبخ مطعم ستانلس | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | خشب أرو أمريكي | 4 | متر مكعب | 31000 | 124000 | Paid | Bank Transfer | ∅
  2) ∅ | تحديث مطبخ مطعم ستانلس | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | نقلة خارجية (ربع نقل) | 2 | نقلة | 800 | 1600 | Paid | Bank Transfer | ∅
  3) ∅ | تحديث مطبخ مطعم ستانلس | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | سيلر أخشاب نيتروسيليلوز | 15 | كيلو | 165 | 2475 | Paid | Bank Transfer | ∅
  4) ∅ | تحديث مطبخ مطعم ستانلس | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | سيلر أخشاب بولي يوريثان | 1 | كيلو | 190 | 190 | Paid | Bank Transfer | ∅
  5) ∅ | تحديث مطبخ مطعم ستانلس | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | لاكيه أبيض لامع | 1 | لتر | 100 | 100 | Paid | Bank Transfer | ∅
  6) ∅ | تحديث مطبخ مطعم ستانلس | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | مفصلة سكينة بحلية | 1 | قطعة | 37 | 37 | Paid | Bank Transfer | ∅
  7) ∅ | تحديث مطبخ مطعم ستانلس | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | مفصلة مطبخ (كبشة) عادية | 1 | قطعة | 25 | 25 | Paid | Bank Transfer | ∅
  8) ∅ | تحديث مطبخ مطعم ستانلس | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | مفصلة مطبخ (كبشة) سوفت كلوز | 1 | قطعة | 60 | 60 | Paid | Bank Transfer | ∅
  9) ∅ | تحديث مطبخ مطعم ستانلس | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | مفصلة أرو 5 بوصة | 1 | قطعة | 58 | 58 | Paid | Bank Transfer | ∅
  10) ∅ | تحديث مطبخ مطعم ستانلس | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | مفصلة سكينة سادة | 1 | قطعة | 30 | 30 | Paid | Bank Transfer | ∅
  11) ∅ | برجولة و دكة خشب لروف | Wed Oct 01 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | خشب زان أحمر شجر | 2 | متر مكعب | 6800 | 13600 | Paid | Cash | ∅
  12) ∅ | برجولة و دكة خشب لروف | Wed Oct 01 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | خشب موسكي (سويدي) | 1 | متر مكعب | 6200 | 6200 | Paid | Cash | ∅
  13) ∅ | برجولة و دكة خشب لروف | Wed Oct 01 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | خشب عزيزي (صنوبر) | 1 | متر مكعب | 12000 | 12000 | Paid | Cash | ∅
  14) ∅ | برجولة و دكة خشب لروف | Wed Oct 01 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | خشب تيك | 1 | متر مكعب | 24000 | 24000 | Paid | Cash | ∅

➋.59 PRJ_Materials
 Headers:
  • Material_ID
  • Name_AR
  • Name_EN
  • Category
  • Subcategory
  • Sub2
  • Default_Unit
  • Default_Price
  • VAT_Rate
  • Active
  • Updated_At
  • Updated_By
 Rows:
  1) RAW-WNP-001 | خشب زان أبيض | Beech Wood - White | مواد خام | أخشاب وألواح طبيعية | خشب زان | متر مكعب | 5200 | true | ∅ | ∅ | ∅
  2) RAW-WNP-002 | خشب زان أحمر شجر | Beech Wood - Red (Tree) | مواد خام | أخشاب وألواح طبيعية | خشب زان | متر مكعب | 6800 | true | ∅ | ∅ | ∅
  3) RAW-WNP-003 | خشب زان أحمر روماني | Beech Wood - Red Romanian | مواد خام | أخشاب وألواح طبيعية | خشب زان | متر مكعب | 10000 | true | ∅ | ∅ | ∅
  4) RAW-WNP-004 | خشب أرو أمريكي | Oak Wood - American | مواد خام | أخشاب وألواح طبيعية | خشب أرو | متر مكعب | 31000 | true | ∅ | ∅ | ∅
  5) RAW-WNP-005 | خشب أرو إنجليزي | Oak Wood - English | مواد خام | أخشاب وألواح طبيعية | خشب أرو | متر مكعب | 29000 | true | ∅ | ∅ | ∅
  6) RAW-WNP-006 | خشب أرو يوغسلافي | Oak Wood - Yugoslavian | مواد خام | أخشاب وألواح طبيعية | خشب أرو | متر مكعب | 28000 | true | ∅ | ∅ | ∅
  7) RAW-WNP-007 | خشب موسكي (سويدي) | Muski (Swedish) Wood | مواد خام | أخشاب وألواح طبيعية | خشب موسكي | متر مكعب | 6200 | true | ∅ | ∅ | ∅
  8) RAW-WNP-008 | خشب عزيزي (صنوبر) | Azizi (Pine) Wood | مواد خام | أخشاب وألواح طبيعية | خشب عزيزي | متر مكعب | 12000 | true | ∅ | ∅ | ∅
  9) RAW-WNP-009 | خشب ماهوجني مستورد | Mahogany Wood - Imported | مواد خام | أخشاب وألواح طبيعية | أخشاب خاصة | متر مكعب | 24250 | true | ∅ | ∅ | ∅
  10) RAW-WNP-010 | خشب تيك | Teak Wood | مواد خام | أخشاب وألواح طبيعية | أخشاب خاصة | متر مكعب | 24000 | true | ∅ | ∅ | ∅
  11) RAW-WNP-011 | خشب بلوط | Oak Wood (General) | مواد خام | أخشاب وألواح طبيعية | خشب بلوط | متر مكعب | 25750 | false | ∅ | ∅ | ∅
  12) RAW-WNP-012 | خشب بياض درجة أولى | Bayad Wood (Grade 1) | مواد خام | أخشاب وألواح طبيعية | خشب بياض | متر مكعب | 8400 | true | ∅ | ∅ | ∅
  13) RAW-WBP-001 | لوح كونتر محلي (بتولا) 18 مم | Blockboard - Local (Birch) 18 mm | مواد خام | أخشاب وألواح مصنعة | كونتر | لوح | 250 | true | ∅ | ∅ | ∅
  14) RAW-WBP-002 | لوح كونتر إندونيسي 18 مم | Blockboard - Indonesian 18 mm | مواد خام | أخشاب وألواح مصنعة | كونتر | لوح | 300 | true | ∅ | ∅ | ∅
  15) RAW-WBP-003 | لوح كونتر صيني 18 مم | Blockboard - Chinese 18 mm | مواد خام | أخشاب وألواح مصنعة | كونتر | لوح | 300 | true | ∅ | ∅ | ∅
  16) RAW-WBP-004 | لوح كونتر فنلندي | Blockboard - Finnish | مواد خام | أخشاب وألواح مصنعة | كونتر | متر طولي | 450 | true | ∅ | ∅ | ∅
  17) RAW-WBP-005 | لوح كونتر ميلامين أبلكاش طبقات 17 مم | Melamine Faced Plywood Blockboard 17 mm | مواد خام | أخشاب وألواح مصنعة | كونتر | لوح | 2300 | true | ∅ | ∅ | ∅
  18) RAW-WBP-006 | لوح كونتر سندوتش | Sandwich Blockboard | مواد خام | أخشاب وألواح مصنعة | كونتر | لوح | 800 | true | ∅ | ∅ | ∅
  19) RAW-WBP-007 | لوح أبلكاش كوري 3 مم | Plywood - Korean 3 mm | مواد خام | أخشاب وألواح مصنعة | أبلكاش | لوح | 95 | true | ∅ | ∅ | ∅
  20) RAW-WBP-008 | لوح أبلكاش كوري 6 مم | Plywood - Korean 6 mm | مواد خام | أخشاب وألواح مصنعة | أبلكاش | لوح | 130 | true | ∅ | ∅ | ∅
  21) RAW-WBP-009 | لوح أبلكاش بحري (مقاوم للمياه) | Marine Plywood (WBP) | مواد خام | أخشاب وألواح مصنعة | أبلكاش | لوح | 750 | true | ∅ | ∅ | ∅
  22) RAW-WBP-010 | لوح فيبر (MDF) عادي 3 مم | MDF - Standard 3 mm | مواد خام | أخشاب وألواح مصنعة | فيبر (MDF) | لوح | 140 | true | ∅ | ∅ | ∅
  23) RAW-WBP-011 | لوح فيبر (MDF) عادي 18 مم | MDF - Standard 18 mm | مواد خام | أخشاب وألواح مصنعة | فيبر (MDF) | لوح | 1000 | true | ∅ | ∅ | ∅
  24) RAW-WBP-012 | لوح فيبر ميلامين (MDF) 18 مم | Melamine Faced MDF 18 mm | مواد خام | أخشاب وألواح مصنعة | فيبر (MDF) | لوح | 1400 | true | ∅ | ∅ | ∅
  25) RAW-WBP-013 | لوح خشب حبيبي (شيبورد) | Chipboard | مواد خام | أخشاب وألواح مصنعة | خشب حبيبي | لوح | 450 | true | ∅ | ∅ | ∅
  26) RAW-WBP-014 | لوح هاردبورد | Hardboard | مواد خام | أخشاب وألواح مصنعة | هاردبورد | لوح | 120 | true | ∅ | ∅ | ∅
  27) RAW-WBP-015 | لوح HPL (كومباكت) | HPL (High-Pressure Laminate) | مواد خام | أخشاب وألواح مصنعة | HPL | متر مربع | 2850 | true | ∅ | ∅ | ∅
  28) RAW-VNR-001 | قشرة خشب أرو | Oak Veneer | مواد خام | قشرة خشب | طبيعي | متر مربع | 150 | true | ∅ | ∅ | ∅
  29) RAW-VNR-002 | قشرة خشب زان | Beech Veneer | مواد خام | قشرة خشب | طبيعي | متر مربع | 120 | true | ∅ | ∅ | ∅
  30) RAW-VNR-003 | قشرة خشب ماهوجني | Mahogany Veneer | مواد خام | قشرة خشب | طبيعي | متر مربع | 180 | true | ∅ | ∅ | ∅
  31) RAW-VNR-004 | قشرة خشب جوز | Walnut Veneer | مواد خام | قشرة خشب | طبيعي | متر مربع | 200 | true | ∅ | ∅ | ∅
  32) RAW-VNR-005 | شريط قشرة PVC | PVC Edge Banding | مواد خام | قشرة خشب | صناعي | متر طولي | 5 | true | ∅ | ∅ | ∅
  33) RAW-STM-001 | رخام جلالة | Galala Marble | مواد خام | رخام وجرانيت | رخام مصري | متر مربع | 400 | true | ∅ | ∅ | ∅
  34) RAW-STM-002 | رخام صني منيا | Sunny Menia Marble | مواد خام | رخام وجرانيت | رخام مصري | متر مربع | 200 | true | ∅ | ∅ | ∅
  35) RAW-STM-003 | رخام أخضر هندي | Indian Green Marble | مواد خام | رخام وجرانيت | رخام مستورد | متر مربع | 1200 | true | ∅ | ∅ | ∅
  36) RAW-STM-004 | رخام كرارة أبيض | Carrara White Marble | مواد خام | رخام وجرانيت | رخام مستورد | متر مربع | 1100 | true | ∅ | ∅ | ∅
  37) RAW-STM-005 | جرانيت أسود أسواني | Aswan Black Granite | مواد خام | رخام وجرانيت | جرانيت مصري | متر مربع | 900 | true | ∅ | ∅ | ∅
  38) RAW-STM-006 | جرانيت جلاكسي أسود | Black Galaxy Granite | مواد خام | رخام وجرانيت | جرانيت مستورد | متر مربع | 2500 | true | ∅ | ∅ | ∅
  39) RAW-STM-007 | جرانيت أحمر فرسان | Forsan Red Granite | مواد خام | رخام وجرانيت | جرانيت مصري | متر مربع | 700 | true | ∅ | ∅ | ∅
  40) RAW-GLS-001 | زجاج شفاف 4 مم | Clear Glass 4 mm | مواد خام | زجاج ومرايا | زجاج شفاف | متر مربع | 250 | true | ∅ | ∅ | ∅
  41) RAW-GLS-002 | زجاج شفاف 6 مم | Clear Glass 6 mm | مواد خام | زجاج ومرايا | زجاج شفاف | متر مربع | 425 | true | ∅ | ∅ | ∅
  42) RAW-GLS-003 | زجاج شفاف 10 مم | Clear Glass 10 mm | مواد خام | زجاج ومرايا | زجاج شفاف | متر مربع | 950 | true | ∅ | ∅ | ∅
  43) RAW-GLS-004 | زجاج مصنفر 6 مم | Frosted Glass 6 mm | مواد خام | زجاج ومرايا | زجاج مصنفر | متر مربع | 475 | true | ∅ | ∅ | ∅
  44) RAW-GLS-005 | زجاج سيكوريت شفاف 10 مم | Tempered Clear Glass 10 mm | مواد خام | زجاج ومرايا | زجاج سيكوريت | متر مربع | 2000 | true | ∅ | ∅ | ∅
  45) RAW-GLS-006 | زجاج عاكس 6 مم | Reflective Glass 6 mm | مواد خام | زجاج ومرايا | زجاج عاكس | متر مربع | 775 | true | ∅ | ∅ | ∅
  46) RAW-GLS-007 | مرايا 4 مم | Mirror 4 mm | مواد خام | زجاج ومرايا | مرايا | متر مربع | 350 | true | ∅ | ∅ | ∅
  47) ACC-HNG-001 | مفصلة سكينة بحلية | Ornate Knife Hinge | اكسسوارات ومستلزمات | مفصلات | مفصلات أبواب | قطعة | 37 | true | ∅ | ∅ | ∅
  48) ACC-HNG-002 | مفصلة سكينة سادة | Plain Knife Hinge | اكسسوارات ومستلزمات | مفصلات | مفصلات أبواب | قطعة | 30 | true | ∅ | ∅ | ∅
  49) ACC-HNG-003 | مفصلة أرو 5 بوصة | Oak Style Hinge 5" | اكسسوارات ومستلزمات | مفصلات | مفصلات أبواب | قطعة | 58 | true | ∅ | ∅ | ∅
  50) ACC-HNG-004 | مفصلة دفتر 5 بوصة | Book Hinge 5" | اكسسوارات ومستلزمات | مفصلات | مفصلات أبواب | قطعة | 55 | true | ∅ | ∅ | ∅
  51) ACC-HNG-005 | مفصلة مطبخ (كبشة) عادية | Cabinet Hinge (Cup) - Standard | اكسسوارات ومستلزمات | مفصلات | مفصلات مطابخ | قطعة | 25 | true | ∅ | ∅ | ∅
  52) ACC-HNG-006 | مفصلة مطبخ (كبشة) سوفت كلوز | Cabinet Hinge (Cup) - Soft Close | اكسسوارات ومستلزمات | مفصلات | مفصلات مطابخ | قطعة | 60 | true | ∅ | ∅ | ∅
  53) ACC-DSL-001 | مجرى درج رولمان بلي عادي | Drawer Slide - Ball Bearing Standard | اكسسوارات ومستلزمات | مجرى درج | رولمان بلي | طقم | 80 | true | ∅ | ∅ | ∅
  54) ACC-DSL-002 | مجرى درج رولمان بلي سوفت كلوز | Drawer Slide - Ball Bearing Soft Close | اكسسوارات ومستلزمات | مجرى درج | رولمان بلي | طقم | 282 | true | ∅ | ∅ | ∅
  55) ACC-DSL-003 | مجرى درج مرحلتين سوفت كلوز | Drawer Slide - 2-Stage Soft Close | اكسسوارات ومستلزمات | مجرى درج | سوفت كلوز | طقم | 1129 | true | ∅ | ∅ | ∅
  56) ACC-DSL-004 | مجرى درج تاتش (Push-to-Open) | Drawer Slide - Push-to-Open | اكسسوارات ومستلزمات | مجرى درج | تاتش | طقم | 1200 | true | ∅ | ∅ | ∅
  57) ACC-HND-001 | أوكرة باب حجرة (طقم) | Room Door Handle Set | اكسسوارات ومستلزمات | مقابض وأوكر | أوكر أبواب | طقم | 288 | true | ∅ | ∅ | ∅
  58) ACC-HND-002 | مقبض باب شقة (كوبشة) | Apartment Door Handle (Large Knob) | اكسسوارات ومستلزمات | مقابض وأوكر | أوكر أبواب | طقم | 2588 | true | ∅ | ∅ | ∅
  59) ACC-HND-003 | مقبض دولاب/مطبخ ماسورة | Cabinet/Kitchen Handle - Tube | اكسسوارات ومستلزمات | مقابض وأوكر | مقابض موبيليا | قطعة | 31 | true | ∅ | ∅ | ∅
  60) ACC-HND-004 | مقبض دولاب/مطبخ مودرن | Cabinet/Kitchen Handle - Modern | اكسسوارات ومستلزمات | مقابض وأوكر | مقابض موبيليا | قطعة | 105 | true | ∅ | ∅ | ∅
  61) ACC-LCK-001 | كالون باب حجرة | Room Door Lock | اكسسوارات ومستلزمات | كوالين وأقفال | كوالين أبواب | قطعة | 122 | true | ∅ | ∅ | ∅
  62) ACC-LCK-002 | كالون باب حمام (بإشارة) | Bathroom Door Lock (with indicator) | اكسسوارات ومستلزمات | كوالين وأقفال | كوالين أبواب | قطعة | 122 | true | ∅ | ∅ | ∅
  63) ACC-LCK-003 | كالون باب شقة سلندر كمبيوتر | Apartment Door Lock - Cylinder Computer Key | اكسسوارات ومستلزمات | كوالين وأقفال | كوالين أبواب | طقم | 503 | true | ∅ | ∅ | ∅
  64) ACC-LCK-004 | كالون لطش | Latch Lock | اكسسوارات ومستلزمات | كوالين وأقفال | كوالين أبواب | قطعة | 599 | true | ∅ | ∅ | ∅
  65) ACC-FAS-001 | مسمار خشابي 5 سم | Wood Nail 5 cm | اكسسوارات ومستلزمات | مسامير وبراغي | مسامير | كيلو | 172 | true | ∅ | ∅ | ∅
  66) ACC-FAS-002 | مسمار خشابي 8 سم | Wood Nail 8 cm | اكسسوارات ومستلزمات | مسامير وبراغي | مسامير | كيلو | 60 | true | ∅ | ∅ | ∅
  67) ACC-FAS-003 | مسمار صلب 3 سم | Steel Nail 3 cm | اكسسوارات ومستلزمات | مسامير وبراغي | مسامير | كيلو | 254 | true | ∅ | ∅ | ∅
  68) ACC-FAS-004 | مسمار شيشة 3 سم | Shisha Nail 3 cm | اكسسوارات ومستلزمات | مسامير وبراغي | مسامير | علبة 200 جرام | 76 | true | ∅ | ∅ | ∅
  69) ACC-FAS-005 | برغي (مسمار سن صاج) 3 سم | Wood Screw 3 cm | اكسسوارات ومستلزمات | مسامير وبراغي | براغي | علبة | 56 | true | ∅ | ∅ | ∅
  70) ACC-FAS-006 | خابور كاوتش | Rubber Dowel | اكسسوارات ومستلزمات | مسامير وبراغي | خوابير | قطعة | 75 | true | ∅ | ∅ | ∅
  71) FIN-PNT-001 | سيلر أخشاب نيتروسيليلوز | Nitrocellulose Wood Sealer | دهانات وتشطيبات | سيلر وورنيش | سيلر | كيلو | 165 | true | ∅ | ∅ | ∅
  72) FIN-PNT-002 | سيلر أخشاب بولي يوريثان | Polyurethane Wood Sealer | دهانات وتشطيبات | سيلر وورنيش | سيلر | كيلو | 190 | true | ∅ | ∅ | ∅
  73) FIN-PNT-003 | ورنيش زجاجي لامع | Glossy Varnish | دهانات وتشطيبات | سيلر وورنيش | ورنيش | لتر | 140 | true | ∅ | ∅ | ∅
  74) FIN-PNT-004 | ورنيش دوكو لامع | Duco Gloss Varnish | دهانات وتشطيبات | سيلر وورنيش | ورنيش | لتر | 195 | true | ∅ | ∅ | ∅
  75) FIN-PNT-005 | ورنيش دوكو مط | Duco Matt Varnish | دهانات وتشطيبات | سيلر وورنيش | ورنيش | لتر | 195 | true | ∅ | ∅ | ∅
  76) FIN-PNT-006 | لاكيه أبيض لامع | White Gloss Lacquer | دهانات وتشطيبات | دهانات | لاكيه | لتر | 100 | true | ∅ | ∅ | ∅
  77) FIN-PNT-007 | دهان دوكو أبيض | White Duco Paint | دهانات وتشطيبات | دهانات | دوكو | كيلو | 150 | true | ∅ | ∅ | ∅
  78) FIN-PNT-008 | صبغة أخشاب | Wood Stain | دهانات وتشطيبات | دهانات | صبغة | عبوة | 85 | true | ∅ | ∅ | ∅
  79) FIN-PNT-009 | معجون أخشاب | Wood Putty | دهانات وتشطيبات | معجون | معجون | كيلو | 65 | true | ∅ | ∅ | ∅
  80) FIN-PNT-010 | تنر دوكو | Duco Thinner | دهانات وتشطيبات | مذيبات | تنر | لتر | 50 | true | ∅ | ∅ | ∅
  81) ADH-GLU-001 | غراء أبيض (بولي بوند) | White Glue (Polybond) | مواد لاصقة وسيليكون | غراء | غراء أبيض | كيلو | 80 | true | ∅ | ∅ | ∅
  82) ADH-GLU-002 | غراء سريع (باتكس) | Fast Glue (Pattex) | مواد لاصقة وسيليكون | غراء | غراء سريع | عبوة | 200 | true | ∅ | ∅ | ∅
  83) ADH-GLU-003 | سيليكون عضم شفاف | Clear Silicone Sealant | مواد لاصقة وسيليكون | سيليكون | سيليكون عضم | انبوبة | 66 | true | ∅ | ∅ | ∅
  84) ADH-GLU-004 | سيليكون عضم أبيض | White Silicone Sealant | مواد لاصقة وسيليكون | سيليكون | سيليكون عضم | انبوبة | 61 | true | ∅ | ∅ | ∅
  85) UPH-FAB-001 | قماش تنجيد قطيفة سادة | Upholstery Fabric - Plain Velvet | مواد تنجيد وتشغيل | أقمشة وجلود | قماش | متر طولي | 50 | true | ∅ | ∅ | ∅
  86) UPH-FAB-002 | قماش تنجيد جاكوار | Upholstery Fabric - Jaguar | مواد تنجيد وتشغيل | أقمشة وجلود | قماش | متر طولي | 60 | true | ∅ | ∅ | ∅
  87) UPH-FAB-003 | قماش جلد مقلوب | Suede Upholstery Fabric | مواد تنجيد وتشغيل | أقمشة وجلود | قماش | متر طولي | 180 | true | ∅ | ∅ | ∅
  88) UPH-SPG-001 | فرخ اسفنج كثافة 20 (120*200 سم) | Sponge Sheet Density 20 (120*200 cm) | مواد تنجيد وتشغيل | اسفنج وفايبر | اسفنج | فرخ | 150 | true | ∅ | ∅ | ∅
  89) UPH-SPG-002 | فرخ اسفنج كثافة 30 (120*200 سم) | Sponge Sheet Density 30 (120*200 cm) | مواد تنجيد وتشغيل | اسفنج وفايبر | اسفنج | فرخ | 200 | true | ∅ | ∅ | ∅
  90) UPH-SPG-003 | اسفنج مضغوط كثافة 80 | Pressed Sponge Density 80 | مواد تنجيد وتشغيل | اسفنج وفايبر | اسفنج | فرخ | 900 | true | ∅ | ∅ | ∅
  91) UPH-SPG-004 | فايبر سوبر سوفت | Fiber - Super Soft | مواد تنجيد وتشغيل | اسفنج وفايبر | فايبر | كيلو | 230 | true | ∅ | ∅ | ∅
  92) CNS-ABR-001 | فرخ صنفرة خشب | Wood Sandpaper Sheet | مستهلكات | صنفرة | صنفرة ورق | فرخ | 8 | true | ∅ | ∅ | ∅
  93) CNS-ABR-002 | صنفرة دوكو | Duco Sandpaper Sheet | مستهلكات | صنفرة | صنفرة ورق | فرخ | 7 | true | ∅ | ∅ | ∅
  94) SRV-CNC-001 | شغل راوتر / CNC | CNC Cutting Service | مصنعية خارجية | خدمات تصنيع | - | ساعة | 300 | true | ∅ | ∅ | ∅
  95) LOG-TRN-001 | نقلة داخلية (ربع نقل) | Internal Transport (Quarter Truck) | النقل واللوجستيات | نقل وتوصيل | نقل داخلي | نقلة | 400 | true | ∅ | ∅ | ∅
  96) LOG-TRN-002 | نقلة خارجية (ربع نقل) | External Transport (Quarter Truck) | النقل واللوجستيات | نقل وتوصيل | نقل خارجي | نقلة | 800 | true | ∅ | ∅ | ∅
  97) LOG-FUL-001 | سولار | Diesel | وقود وتشغيل سيارات | وقود | - | لتر | 15.5 | true | ∅ | ∅ | ∅
  98) LOG-FUL-002 | بنزين 92 | Benzene 92 | وقود وتشغيل سيارات | وقود | - | لتر | 17.25 | true | ∅ | ∅ | ∅

➋.60 PV_PRJ_Materials
 Headers:
  • Material_ID
  • Name_AR
  • Name_EN
  • Category
  • Subcategory
  • Default_Unit
  • Default_Price
  • VAT_Rate
  • Active
  • Updated_At
  • Updated_By
 Rows:
  1) ∅ | RAW-WNP-001 | خشب زان أبيض | 5200 | متر مكعب | true | ∅ | ∅ | ∅ | ∅ | ∅
  2) 2 | RAW-WNP-002 | خشب زان أحمر شجر | 6800 | متر مكعب | true | ∅ | ∅ | ∅ | ∅ | ∅
  3) 3 | RAW-WNP-003 | خشب زان أحمر روماني | 10000 | متر مكعب | true | ∅ | ∅ | ∅ | ∅ | ∅
  4) 4 | RAW-WNP-004 | خشب أرو أمريكي | 31000 | متر مكعب | true | ∅ | ∅ | ∅ | ∅ | ∅
  5) 5 | RAW-WNP-005 | خشب أرو إنجليزي | 29000 | متر مكعب | true | ∅ | ∅ | ∅ | ∅ | ∅
  6) 6 | RAW-WNP-006 | خشب أرو يوغسلافي | 28000 | متر مكعب | true | ∅ | ∅ | ∅ | ∅ | ∅
  7) 7 | RAW-WNP-007 | خشب موسكي (سويدي) | 6200 | متر مكعب | true | ∅ | ∅ | ∅ | ∅ | ∅
  8) 8 | RAW-WNP-008 | خشب عزيزي (صنوبر) | 12000 | متر مكعب | true | ∅ | ∅ | ∅ | ∅ | ∅
  9) 9 | RAW-WNP-009 | خشب ماهوجني مستورد | 24250 | متر مكعب | true | ∅ | ∅ | ∅ | ∅ | ∅
  10) 10 | RAW-WNP-010 | خشب تيك | 24000 | متر مكعب | true | ∅ | ∅ | ∅ | ∅ | ∅
  11) 11 | RAW-WNP-011 | خشب بلوط | 25750 | متر مكعب | false | ∅ | ∅ | ∅ | ∅ | ∅
  12) 12 | RAW-WNP-012 | خشب بياض درجة أولى | 8400 | متر مكعب | true | ∅ | ∅ | ∅ | ∅ | ∅
  13) 13 | RAW-WBP-001 | لوح كونتر محلي (بتولا) 18 مم | 250 | لوح | true | ∅ | ∅ | ∅ | ∅ | ∅
  14) 14 | RAW-WBP-002 | لوح كونتر إندونيسي 18 مم | 300 | لوح | true | ∅ | ∅ | ∅ | ∅ | ∅
  15) 15 | RAW-WBP-003 | لوح كونتر صيني 18 مم | 300 | لوح | true | ∅ | ∅ | ∅ | ∅ | ∅
  16) 16 | RAW-WBP-004 | لوح كونتر فنلندي | 450 | متر طولي | true | ∅ | ∅ | ∅ | ∅ | ∅
  17) 17 | RAW-WBP-005 | لوح كونتر ميلامين أبلكاش طبقات 17 مم | 2300 | لوح | true | ∅ | ∅ | ∅ | ∅ | ∅
  18) 18 | RAW-WBP-006 | لوح كونتر سندوتش | 800 | لوح | true | ∅ | ∅ | ∅ | ∅ | ∅
  19) 19 | RAW-WBP-007 | لوح أبلكاش كوري 3 مم | 95 | لوح | true | ∅ | ∅ | ∅ | ∅ | ∅
  20) 20 | RAW-WBP-008 | لوح أبلكاش كوري 6 مم | 130 | لوح | true | ∅ | ∅ | ∅ | ∅ | ∅
  21) 21 | RAW-WBP-009 | لوح أبلكاش بحري (مقاوم للمياه) | 750 | لوح | true | ∅ | ∅ | ∅ | ∅ | ∅
  22) 22 | RAW-WBP-010 | لوح فيبر (MDF) عادي 3 مم | 140 | لوح | true | ∅ | ∅ | ∅ | ∅ | ∅
  23) 23 | RAW-WBP-011 | لوح فيبر (MDF) عادي 18 مم | 1000 | لوح | true | ∅ | ∅ | ∅ | ∅ | ∅
  24) 24 | RAW-WBP-012 | لوح فيبر ميلامين (MDF) 18 مم | 1400 | لوح | true | ∅ | ∅ | ∅ | ∅ | ∅
  25) 25 | RAW-WBP-013 | لوح خشب حبيبي (شيبورد) | 450 | لوح | true | ∅ | ∅ | ∅ | ∅ | ∅
  26) 26 | RAW-WBP-014 | لوح هاردبورد | 120 | لوح | true | ∅ | ∅ | ∅ | ∅ | ∅
  27) 27 | RAW-WBP-015 | لوح HPL (كومباكت) | 2850 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  28) 28 | RAW-VNR-001 | قشرة خشب أرو | 150 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  29) 29 | RAW-VNR-002 | قشرة خشب زان | 120 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  30) 30 | RAW-VNR-003 | قشرة خشب ماهوجني | 180 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  31) 31 | RAW-VNR-004 | قشرة خشب جوز | 200 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  32) 32 | RAW-VNR-005 | شريط قشرة PVC | 5 | متر طولي | true | ∅ | ∅ | ∅ | ∅ | ∅
  33) 33 | RAW-STM-001 | رخام جلالة | 400 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  34) 34 | RAW-STM-002 | رخام صني منيا | 200 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  35) 35 | RAW-STM-003 | رخام أخضر هندي | 1200 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  36) 36 | RAW-STM-004 | رخام كرارة أبيض | 1100 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  37) 37 | RAW-STM-005 | جرانيت أسود أسواني | 900 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  38) 38 | RAW-STM-006 | جرانيت جلاكسي أسود | 2500 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  39) 39 | RAW-STM-007 | جرانيت أحمر فرسان | 700 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  40) 40 | RAW-GLS-001 | زجاج شفاف 4 مم | 250 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  41) 41 | RAW-GLS-002 | زجاج شفاف 6 مم | 425 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  42) 42 | RAW-GLS-003 | زجاج شفاف 10 مم | 950 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  43) 43 | RAW-GLS-004 | زجاج مصنفر 6 مم | 475 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  44) 44 | RAW-GLS-005 | زجاج سيكوريت شفاف 10 مم | 2000 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  45) 45 | RAW-GLS-006 | زجاج عاكس 6 مم | 775 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  46) 46 | RAW-GLS-007 | مرايا 4 مم | 350 | متر مربع | true | ∅ | ∅ | ∅ | ∅ | ∅
  47) 47 | ACC-HNG-001 | مفصلة سكينة بحلية | 37 | قطعة | true | ∅ | ∅ | ∅ | ∅ | ∅
  48) 48 | ACC-HNG-002 | مفصلة سكينة سادة | 30 | قطعة | true | ∅ | ∅ | ∅ | ∅ | ∅
  49) 49 | ACC-HNG-003 | مفصلة أرو 5 بوصة | 58 | قطعة | true | ∅ | ∅ | ∅ | ∅ | ∅
  50) 50 | ACC-HNG-004 | مفصلة دفتر 5 بوصة | 55 | قطعة | true | ∅ | ∅ | ∅ | ∅ | ∅
  51) 51 | ACC-HNG-005 | مفصلة مطبخ (كبشة) عادية | 25 | قطعة | true | ∅ | ∅ | ∅ | ∅ | ∅
  52) 52 | ACC-HNG-006 | مفصلة مطبخ (كبشة) سوفت كلوز | 60 | قطعة | true | ∅ | ∅ | ∅ | ∅ | ∅
  53) 53 | ACC-DSL-001 | مجرى درج رولمان بلي عادي | 80 | طقم | true | ∅ | ∅ | ∅ | ∅ | ∅
  54) 54 | ACC-DSL-002 | مجرى درج رولمان بلي سوفت كلوز | 282 | طقم | true | ∅ | ∅ | ∅ | ∅ | ∅
  55) 55 | ACC-DSL-003 | مجرى درج مرحلتين سوفت كلوز | 1129 | طقم | true | ∅ | ∅ | ∅ | ∅ | ∅
  56) 56 | ACC-DSL-004 | مجرى درج تاتش (Push-to-Open) | 1200 | طقم | true | ∅ | ∅ | ∅ | ∅ | ∅
  57) 57 | ACC-HND-001 | أوكرة باب حجرة (طقم) | 288 | طقم | true | ∅ | ∅ | ∅ | ∅ | ∅
  58) 58 | ACC-HND-002 | مقبض باب شقة (كوبشة) | 2588 | طقم | true | ∅ | ∅ | ∅ | ∅ | ∅
  59) 59 | ACC-HND-003 | مقبض دولاب/مطبخ ماسورة | 31 | قطعة | true | ∅ | ∅ | ∅ | ∅ | ∅
  60) 60 | ACC-HND-004 | مقبض دولاب/مطبخ مودرن | 105 | قطعة | true | ∅ | ∅ | ∅ | ∅ | ∅
  61) 61 | ACC-LCK-001 | كالون باب حجرة | 122 | قطعة | true | ∅ | ∅ | ∅ | ∅ | ∅
  62) 62 | ACC-LCK-002 | كالون باب حمام (بإشارة) | 122 | قطعة | true | ∅ | ∅ | ∅ | ∅ | ∅
  63) 63 | ACC-LCK-003 | كالون باب شقة سلندر كمبيوتر | 503 | طقم | true | ∅ | ∅ | ∅ | ∅ | ∅
  64) 64 | ACC-LCK-004 | كالون لطش | 599 | قطعة | true | ∅ | ∅ | ∅ | ∅ | ∅
  65) 65 | ACC-FAS-001 | مسمار خشابي 5 سم | 172 | كيلو | true | ∅ | ∅ | ∅ | ∅ | ∅
  66) 66 | ACC-FAS-002 | مسمار خشابي 8 سم | 60 | كيلو | true | ∅ | ∅ | ∅ | ∅ | ∅
  67) 67 | ACC-FAS-003 | مسمار صلب 3 سم | 254 | كيلو | true | ∅ | ∅ | ∅ | ∅ | ∅
  68) 68 | ACC-FAS-004 | مسمار شيشة 3 سم | 76 | علبة 200 جرام | true | ∅ | ∅ | ∅ | ∅ | ∅
  69) 69 | ACC-FAS-005 | برغي (مسمار سن صاج) 3 سم | 56 | علبة | true | ∅ | ∅ | ∅ | ∅ | ∅
  70) 70 | ACC-FAS-006 | خابور كاوتش | 75 | قطعة | true | ∅ | ∅ | ∅ | ∅ | ∅
  71) 71 | FIN-PNT-001 | سيلر أخشاب نيتروسيليلوز | 165 | كيلو | true | ∅ | ∅ | ∅ | ∅ | ∅
  72) 72 | FIN-PNT-002 | سيلر أخشاب بولي يوريثان | 190 | كيلو | true | ∅ | ∅ | ∅ | ∅ | ∅
  73) 73 | FIN-PNT-003 | ورنيش زجاجي لامع | 140 | لتر | true | ∅ | ∅ | ∅ | ∅ | ∅
  74) 74 | FIN-PNT-004 | ورنيش دوكو لامع | 195 | لتر | true | ∅ | ∅ | ∅ | ∅ | ∅
  75) 75 | FIN-PNT-005 | ورنيش دوكو مط | 195 | لتر | true | ∅ | ∅ | ∅ | ∅ | ∅
  76) 76 | FIN-PNT-006 | لاكيه أبيض لامع | 100 | لتر | true | ∅ | ∅ | ∅ | ∅ | ∅
  77) 77 | FIN-PNT-007 | دهان دوكو أبيض | 150 | كيلو | true | ∅ | ∅ | ∅ | ∅ | ∅
  78) 78 | FIN-PNT-008 | صبغة أخشاب | 85 | عبوة | true | ∅ | ∅ | ∅ | ∅ | ∅
  79) 79 | FIN-PNT-009 | معجون أخشاب | 65 | كيلو | true | ∅ | ∅ | ∅ | ∅ | ∅
  80) 80 | FIN-PNT-010 | تنر دوكو | 50 | لتر | true | ∅ | ∅ | ∅ | ∅ | ∅
  81) 81 | ADH-GLU-001 | غراء أبيض (بولي بوند) | 80 | كيلو | true | ∅ | ∅ | ∅ | ∅ | ∅
  82) 82 | ADH-GLU-002 | غراء سريع (باتكس) | 200 | عبوة | true | ∅ | ∅ | ∅ | ∅ | ∅
  83) 83 | ADH-GLU-003 | سيليكون عضم شفاف | 66 | انبوبة | true | ∅ | ∅ | ∅ | ∅ | ∅
  84) 84 | ADH-GLU-004 | سيليكون عضم أبيض | 61 | انبوبة | true | ∅ | ∅ | ∅ | ∅ | ∅
  85) 85 | UPH-FAB-001 | قماش تنجيد قطيفة سادة | 50 | متر طولي | true | ∅ | ∅ | ∅ | ∅ | ∅
  86) 86 | UPH-FAB-002 | قماش تنجيد جاكوار | 60 | متر طولي | true | ∅ | ∅ | ∅ | ∅ | ∅
  87) 87 | UPH-FAB-003 | قماش جلد مقلوب | 180 | متر طولي | true | ∅ | ∅ | ∅ | ∅ | ∅
  88) 88 | UPH-SPG-001 | فرخ اسفنج كثافة 20 (120*200 سم) | 150 | فرخ | true | ∅ | ∅ | ∅ | ∅ | ∅
  89) 89 | UPH-SPG-002 | فرخ اسفنج كثافة 30 (120*200 سم) | 200 | فرخ | true | ∅ | ∅ | ∅ | ∅ | ∅
  90) 90 | UPH-SPG-003 | اسفنج مضغوط كثافة 80 | 900 | فرخ | true | ∅ | ∅ | ∅ | ∅ | ∅
  91) 91 | UPH-SPG-004 | فايبر سوبر سوفت | 230 | كيلو | true | ∅ | ∅ | ∅ | ∅ | ∅
  92) 92 | CNS-ABR-001 | فرخ صنفرة خشب | 8 | فرخ | true | ∅ | ∅ | ∅ | ∅ | ∅
  93) 93 | CNS-ABR-002 | صنفرة دوكو | 7 | فرخ | true | ∅ | ∅ | ∅ | ∅ | ∅
  94) 94 | SRV-CNC-001 | شغل راوتر / CNC | 300 | ساعة | true | ∅ | ∅ | ∅ | ∅ | ∅
  95) 95 | LOG-TRN-001 | نقلة داخلية (ربع نقل) | 400 | نقلة | true | ∅ | ∅ | ∅ | ∅ | ∅
  96) 96 | LOG-TRN-002 | نقلة خارجية (ربع نقل) | 800 | نقلة | true | ∅ | ∅ | ∅ | ∅ | ∅
  97) 97 | LOG-FUL-001 | سولار | 15.5 | لتر | true | ∅ | ∅ | ∅ | ∅ | ∅
  98) 98 | LOG-FUL-002 | بنزين 92 | 17.25 | لتر | true | ∅ | ∅ | ∅ | ∅ | ∅

➋.61 PRJ_InDirExp_Allocations
 (no data rows)

➋.62 PRJ_Schedule_Calc
 Headers:
  • Project_ID
  • Project_Name
  • Start_Date
  • Planned_Days
  • Planned_End_Date
  • Schedule_Flag

➋.63 PRJ_Dashboard
 (no data rows)

➋.64 PRJ_KPIs
 (no data rows)

➋.65 FIN_DirectExpenses
 Headers:
  • Expense_ID
  • Project_ID
  • Date
  • Category
  • Level_1
  • Level_2
  • Unit
  • Qty
  • Unit_Price
  • Amount
  • VAT_Rate
  • VAT_Amount
  • Total_With_VAT
  • Material_ID
  • Material_Name
  • Pay_Status
  • Pay_Method
  • Notes
  • Created_At
  • Created_By
  • Updated_At
  • Updated_By
 Rows:
  1) ∅ | PRJ_0007 | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | مواد خام | ∅ | ∅ | متر مكعب | 4 | 31000 | 124000 | 0 | 0 | 124000 | RAW-WNP-004 | خشب أرو أمريكي | Paid | Bank Transfer | ∅ | ∅ | ∅ | ∅ | ∅
  2) ∅ | PRJ_0007 | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | النقل واللوجستيات | ∅ | ∅ | نقلة | 2 | 800 | 1600 | 0 | 0 | 1600 | LOG-TRN-002 | نقلة خارجية (ربع نقل) | Paid | Bank Transfer | ∅ | ∅ | ∅ | ∅ | ∅
  3) ∅ | PRJ_0007 | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | دهانات وتشطيبات | ∅ | ∅ | كيلو | 15 | 165 | 2475 | 0 | 0 | 2475 | FIN-PNT-001 | سيلر أخشاب نيتروسيليلوز | Paid | Bank Transfer | ∅ | ∅ | ∅ | ∅ | ∅
  4) ∅ | PRJ_0007 | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | دهانات وتشطيبات | ∅ | ∅ | كيلو | 1 | 190 | 190 | 0 | 0 | 190 | FIN-PNT-002 | سيلر أخشاب بولي يوريثان | Paid | Bank Transfer | ∅ | ∅ | ∅ | ∅ | ∅
  5) ∅ | PRJ_0007 | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | دهانات وتشطيبات | ∅ | ∅ | لتر | 1 | 100 | 100 | 0 | 0 | 100 | FIN-PNT-006 | لاكيه أبيض لامع | Paid | Bank Transfer | ∅ | ∅ | ∅ | ∅ | ∅
  6) ∅ | PRJ_0007 | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | اكسسوارات ومستلزمات | ∅ | ∅ | قطعة | 1 | 37 | 37 | 0 | 0 | 37 | ACC-HNG-001 | مفصلة سكينة بحلية | Paid | Bank Transfer | ∅ | ∅ | ∅ | ∅ | ∅
  7) ∅ | PRJ_0007 | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | اكسسوارات ومستلزمات | ∅ | ∅ | قطعة | 1 | 25 | 25 | 0 | 0 | 25 | ACC-HNG-005 | مفصلة مطبخ (كبشة) عادية | Paid | Bank Transfer | ∅ | ∅ | ∅ | ∅ | ∅
  8) ∅ | PRJ_0007 | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | اكسسوارات ومستلزمات | ∅ | ∅ | قطعة | 1 | 60 | 60 | 0 | 0 | 60 | ACC-HNG-006 | مفصلة مطبخ (كبشة) سوفت كلوز | Paid | Bank Transfer | ∅ | ∅ | ∅ | ∅ | ∅
  9) ∅ | PRJ_0007 | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | اكسسوارات ومستلزمات | ∅ | ∅ | قطعة | 1 | 58 | 58 | 0 | 0 | 58 | ACC-HNG-003 | مفصلة أرو 5 بوصة | Paid | Bank Transfer | ∅ | ∅ | ∅ | ∅ | ∅
  10) ∅ | PRJ_0007 | Thu Oct 02 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | اكسسوارات ومستلزمات | ∅ | ∅ | قطعة | 1 | 30 | 30 | 0 | 0 | 30 | ACC-HNG-002 | مفصلة سكينة سادة | Paid | Bank Transfer | ∅ | ∅ | ∅ | ∅ | ∅
  11) ∅ | PRJ_0011 | Wed Oct 01 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | مواد خام | ∅ | ∅ | متر مكعب | 2 | 6800 | 13600 | 0 | 0 | 13600 | RAW-WNP-002 | خشب زان أحمر شجر | Paid | Cash | ∅ | ∅ | ∅ | ∅ | ∅
  12) ∅ | PRJ_0011 | Wed Oct 01 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | مواد خام | ∅ | ∅ | متر مكعب | 1 | 6200 | 6200 | 0 | 0 | 6200 | RAW-WNP-007 | خشب موسكي (سويدي) | Paid | Cash | ∅ | ∅ | ∅ | ∅ | ∅
  13) ∅ | PRJ_0011 | Wed Oct 01 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | مواد خام | ∅ | ∅ | متر مكعب | 1 | 12000 | 12000 | 0 | 0 | 12000 | RAW-WNP-008 | خشب عزيزي (صنوبر) | Paid | Cash | ∅ | ∅ | ∅ | ∅ | ∅
  14) ∅ | PRJ_0011 | Wed Oct 01 2025 03:00:00 GMT+0300 (Eastern European Summer Time) | مواد خام | ∅ | ∅ | متر مكعب | 1 | 24000 | 24000 | 0 | 0 | 24000 | RAW-WNP-010 | خشب تيك | Paid | Cash | ∅ | ∅ | ∅ | ∅ | ∅

➋.66 FIN_InDirExpense_Repeated
 Headers:
  • InDirExpense_Repeated_ID
  • Expense_Name
  • Category
  • Frequency
  • Start_Date
  • End_Date
  • Next_Pay_Date
  • Amount
  • Paid_By
  • Pay_Status
  • Pay_Method
  • Allocation_Method
  • Notes
  • Created_At
  • Created_By
  • Updated_At
 Rows:
  1) IREP-001 | إيجار | إيجار المصنع | Mon Feb 10 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Wed Feb 05 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Fri Mar 07 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | شيك | معلق | كاش | 6000 | مصروف شهري متكرر - تحميل على الإدارة العامة | مبلغ ثابت | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅
  2) IREP-002 | إيجار | إيجار المصنع | Tue Jan 21 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Jan 16 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sat Feb 15 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | كاش | 2800 | مصروف شهري متكرر - تحميل على الإدارة العامة | مبلغ ثابت | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅
  3) IREP-003 | مرافق | انترنت | Mon Jan 13 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Wed Jan 08 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Fri Feb 07 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | شيك | معلق | كاش | 3200 | مصروف شهري متكرر - تحميل على الإدارة العامة | لكل وحدة | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅
  4) IREP-004 | مرافق | مياه | Sat Mar 01 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Mon Feb 24 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Wed Mar 26 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | مدفوع | كاش | 8000 | مصروف شهري متكرر - تحميل على الإدارة العامة | لكل وحدة | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅
  5) IREP-005 | أمن | خدمة حراسة ليلية | Fri Feb 28 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sun Feb 23 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Tue Mar 25 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | فودافون كاش | 3200 | مصروف شهري متكرر - تحميل على الإدارة العامة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅
  6) IREP-006 | نقل | سولار سيارات النقل | Wed Feb 19 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Fri Feb 14 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sun Mar 16 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | معلق | كاش | 15000 | مصروف شهري متكرر - تحميل على الإدارة العامة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅
  7) IREP-007 | مرافق | مياه | Tue Feb 11 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Feb 06 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sat Mar 08 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | بنك | 22000 | مصروف شهري متكرر - تحميل على الإدارة العامة | لكل وحدة | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅
  8) IREP-008 | أمن | خدمة حراسة ليلية | Wed Feb 05 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Fri Jan 31 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sun Mar 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | شيك | مدفوع | بنك | 22000 | مصروف شهري متكرر - تحميل على الإدارة العامة | مبلغ ثابت | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅
  9) IREP-009 | إداري | عقد نظافة المكتب | Sun Feb 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Tue Jan 28 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Feb 27 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | مدفوع | كاش | 22000 | مصروف شهري متكرر - تحميل على الإدارة العامة | لكل وحدة | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅
  10) IREP-010 | نقل | سولار سيارات النقل | Tue Jan 28 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Jan 23 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sat Feb 22 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | مدفوع | فودافون كاش | 2800 | مصروف شهري متكرر - تحميل على الإدارة العامة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅
  11) IREP-011 | مرافق | انترنت | Thu Feb 13 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sat Feb 08 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Mon Mar 10 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | شيك | معلق | بنك | 15000 | مصروف شهري متكرر - تحميل على الإدارة العامة | مبلغ ثابت | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅
  12) IREP-012 | إداري | عقد نظافة المكتب | Tue Jan 28 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Jan 23 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sat Feb 22 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | معلق | فودافون كاش | 4500 | مصروف شهري متكرر - تحميل على الإدارة العامة | مبلغ ثابت | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅
  13) IREP-013 | إيجار | إيجار المصنع | Fri Feb 14 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sun Feb 09 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Tue Mar 11 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | مدفوع | فود
افون كاش | 12500 | مصروف شهري متكرر - تحميل على الإدارة العامة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅
  14) IREP-014 | مرافق | انترنت | Wed Jan 22 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Fri Jan 17 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Sun Feb 16 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | مدفوع | بنك | 3200 | مصروف شهري متكرر - تحميل على الإدارة العامة | مبلغ ثابت | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅
  15) IREP-015 | مرافق | كهرباء | Sun Mar 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Tue Feb 25 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | Thu Mar 27 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | فودافون كاش | 6000 | مصروف شهري متكرر - تحميل على الإدارة العامة | لكل وحدة | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅ | ∅

➋.67 FIN_InDirExpense_Once
 Headers:
  • InDirExpense_Once_ID
  • Expense_Name
  • Category
  • Expense_Date
  • Amount
  • Paid_By
  • Pay_Status
  • Pay_Method
  • Allocation_Method
  • Useful_Life_Months
  • Depreciation_Start_Date
  • Notes
  • Created_At
  • Created_By
  • Updated_At
 Rows:
  1) IONC-001 | كمبيوتر / تكنولوجيا | لابتوب جديد لمدير المشروع | Sat Feb 15 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 36000 | 12 | Mon Mar 17 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | كارت مالك الشركة | مدفوع | كارت | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  2) IONC-002 | ماكينة | تغيير اسبيندل CNC | Tue Feb 18 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 8000 | 36 | Thu Mar 20 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | كارت | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  3) IONC-003 | ماكينة | تغيير اسبيندل CNC | Mon Mar 03 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 45000 | 48 | Wed Apr 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | كارت مالك الشركة | مدفوع | كارت | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  4) IONC-004 | كمبيوتر / تكنولوجيا | لابتوب جديد لمدير المشروع | Tue Apr 22 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 8000 | 60 | Thu May 22 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | تحويل بنكي | معلق | كاش | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  5) IONC-005 | عدة و أدوات | طقم دريل جديد | Fri Apr 18 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 15000 | 60 | Sun May 18 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | تحويل بنكي | مدفوع | كاش | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  6) IONC-006 | تطوير الورشة | كمبروسر هوا جديد | Tue Apr 15 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 9000 | 24 | Thu May 15 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | كارت مالك الشركة | معلق | بنك | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  7) IONC-007 | عدة و أدوات | طقم دريل جديد | Tue Jan 28 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 8000 | 60 | Thu Feb 27 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | بنك | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  8) IONC-008 | سلامة | إعادة تعبئة طفايات الحريق | Fri Mar 07 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 5000 | 60 | Sun Apr 06 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | معلق | كاش | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  9) IONC-009 | كمبيوتر / تكنولوجيا | لابتوب جديد لمدير المشروع | Sun Mar 16 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 5000 | 36 | Tue Apr 15 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | مدفوع | بنك | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  10) IONC-010 | تطوير الورشة | كمبروسر هوا جديد | Thu Mar 06 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 15000 | 48 | Sat Apr 05 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | نقدي | مدفوع | بنك | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  11) IONC-011 | ماكينة | تغيير اسبيندل CNC | Sat Apr 12 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 8000 | 24 | Mon May 12 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | كارت مالك الشركة | مدفوع | كاش | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  12) IONC-012 | كمبيوتر / تكنولوجيا | لابتوب جديد لمدير المشروع | Fri Mar 14 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 9000 | 12 | Sun Apr 13 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | كارت مالك الشركة | مدفوع | كارت | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  13) IONC-013 | كمبيوتر / تكنولوجيا | لابتوب جديد لمدير المشروع | Wed Apr 02 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 45000 | 60 | Fri May 02 2025 00:00:00 GMT+0300 (Eastern European Summer Time) | كارت مالك الشركة | مدفوع | كاش | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  14) IONC-014 | كمبيوتر / تكنولوجيا | لابتوب جديد لمدير المشروع | Sat Jan 11 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 8000 | 48 | Mon Feb 10 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | كاش | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅
  15) IONC-015 | كمبيوتر / تكنولوجيا | لابتوب جديد لمدير المشروع | Fri Feb 14 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | 36000 | 24 | Sun Mar 16 2025 00:00:00 GMT+0200 (Eastern European Standard Time) | تحويل بنكي | مدفوع | كارت | مصروف رأسمالي لمرة واحدة | نسبة مئوية | Tue Oct 28 2025 13:27:15 GMT+0300 (Eastern European Summer Time) | ∅ | ∅

➋.68 FIN_Project_Revenue
 (no data rows)

➋.69 FIN_Revenues
 (no data rows)

➋.70 FIN_Journal
 (no data rows)

➋.71 FIN_Custody
 (no data rows)

➋.72 FIN_GL_Totals
 (no data rows)

➋.73 FIN_KPIs
 (no data rows)

ERP_Schema_and_Data_2025-11-04_06-56-51.md
Displaying ERP_Schema_and_Data_2025-11-04_06-56-51.md.