━━━━━━━━━━━━━━━━━━━━━━━━━━
➊ Here's What Each Key File Does
━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Code.js — Main backend file.
• Handles all data requests.
• Manages user authentication.
• Executes server-side logic.
▸ Dashboard.html — SPA shell.
• Contains core layout (sidebar, content area).
• Still includes legacy JavaScript blocks.
▸ ViewTab.js.html and FormModal.js.html — New core engines.
• ViewTab.js.html: Builds data tables and search bars.
• FormModal.js.html: Dynamically renders popup forms.
▸ Setup.js — Developer utility.
• Populates the database using hardcoded arrays.
• Contains definitions for all tabs and forms.
━━━━━━━━━━━━━━━━━━━━━━━━━━
➋ How I Designed the System (The “Engine” Logic)
━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ The system is data-driven, not hardcoded.
• Every tab, form, and button is built dynamically.
• Structure is read directly from Google Sheets.
▸ The three “Engine Sheets” are:
• SYS_Tab_Register — Master map.
– Defines modules (e.g., “Projects”) and sub-tabs (e.g., “Clients”).
– Specifies Render_Mode, Source_Sheet, and UI controls like Search_Bar.
• SYS_Dynamic_Forms — Form builder.
– Defines every field for “Add” and “Edit” popups.
– Includes “Quick Actions” like “Activate” and “Archive”.
• SYS_Dropdowns — Dropdown menu source.
– Populates all dropdowns used in forms.
▸ Execution Flow:
• Code.js reads SYS_Tab_Register via getSubTabViewData.
• ViewTab.js.html builds the data table and search bar.
• FormModal.js.html builds the popup form using Form_ID.
▸ Result:
• To add a new module (e.g., HR), just add rows to the sheets.
• No new JavaScript should be needed.
━━━━━━━━━━━━━━━━━━━━━━━━━━
➌ The Problem: Legacy Code vs. The New Engine
━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Large parts of the app were built before the new engine.
▸ Legacy code still exists and overrides the new logic.
▸ This breaks the “single source of truth” principle.
━━━━━━━━━━━━━━━━━━━━━━━━━━
➍ Conflict Zones
━━━━━━━━━━━━━━━━━━━━━━━━━━
╭─ ➊ The Root Problem: Setup.js Is the Actual Source of Truth
│
│ ▸ The “engine sheets” are just copies of hardcoded data in Setup.js.
│ ▸ Conflict:
│  • dynamicFormCache defines all forms inside getDynamicFormDefinitions.
│  • seedSysTabRegister defines all tabs.
│ ▸ Why It’s a Problem:
│  • Running seed functions overwrites the Google Sheets.
│  • To change a form, you must edit Setup.js, not SYS_Dynamic_Forms.
│  • This violates the data-driven design.
╰─────────────────────────
╭─ ➋ Competing Engines in Dashboard.html
│
│ ▸ Legacy <script> blocks act as separate rendering engines.
│ ▸ System Admin Module:
│  • Sidebar built from hardcoded DEFAULT_SYS_SUB_TABS.
│  • renderSysNav merges hardcoded list with sheet.
│  • Sheet is not the single source of truth.
│ ▸ System Admin UI:
│  • setActiveSysPane uses hardcoded sysPaneLoaders.
│  • Calls old functions like loadUsers, loadRoles.
│  • Creates a separate engine for System module.
│ ▸ Materials & Finance Modules:
│  • renderMaterialsModule and renderDirectExpenseShell are massive custom renderers.
│  • Manually build HTML for tabs, tables, buttons.
│  • Completely bypass ViewTab.js.html.
╰─────────────────────────
╭─ ➌ Backend Fallbacks in Code.js
│
│ ▸ Hardcoded logic conflicts with engine sheets.
│ ▸ Record Detail Fallback:
│  • DETAIL_CONFIGS defines layout for “Record Detail” popup.
│  • Should be driven by SYS_Dynamic_Forms, not backend.
│ ▸ Quick Action Fallback:
│  • handleBulkAction should read from SYS_Dynamic_Forms.
│  • If not found, calls executeDefaultBulkAction_.
│  • Hardcoded logic for “activate” and “deactivate”.
│  • Prevents SYS_Dynamic_Forms from being the only source.
╰─────────────────────────
━━━━━━━━━━━━━━━━━━━━━━━━━━
➎ Summary
━━━━━━━━━━━━━━━━━━━━━━━━━━
✔ I’ve built the engine.
✘ But legacy code in Dashboard.html and Code.js still overrides it.
✘ Setup.js remains the real database, not the Google Sheets.
✔ To fix this, the engine sheets must become the only source of truth.
