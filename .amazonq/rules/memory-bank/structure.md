# Project Structure

## Directory Organization

```
Nijjara_ERP_DB/
├── src/                      # Source code (deployed to Google Apps Script)
│   ├── Code.js              # Backend server-side logic and API endpoints
│   ├── Setup.js             # Configuration and initialization scripts
│   ├── Dashboard.html       # Main application interface
│   ├── FormModal.js.html    # Form handling JavaScript
│   ├── FormModal.css.html   # Form styling
│   ├── ViewTab.js.html      # Data table view logic
│   ├── ViewTab.css.html     # Data table styling
│   └── appsscript.json      # Apps Script project configuration
├── test_files/              # Testing and development files
│   ├── Code.test.js         # Backend logic tests
│   ├── Setup.test.js        # Setup function tests
│   ├── Dashboard.test.html  # UI testing file
│   └── Dashboard.patched.html # Modified dashboard for testing
├── docs/                    # Documentation
│   └── github-update-guide.md
├── .amazonq/                # Amazon Q AI configuration
│   └── rules/memory-bank/   # Project memory bank
├── .clasp.json              # Google clasp deployment configuration
├── .gitignore               # Git ignore rules
└── package.json             # Node.js dependencies
```

## Core Components and Relationships

### Backend Layer (Code.js)
- **Purpose**: Server-side Google Apps Script functions
- **Responsibilities**:
  - Google Sheets data access and manipulation
  - Business logic processing
  - API endpoints for frontend communication
  - Data validation and transformation
- **Key Functions**: doGet(), doPost(), data CRUD operations

### Configuration Layer (Setup.js)
- **Purpose**: System initialization and configuration
- **Responsibilities**:
  - Bootstrap data structure definition
  - Tab and view configurations
  - Form field definitions
  - System-wide settings
- **Exports**: Configuration objects for tabs, forms, and filters

### Frontend Layer (Dashboard.html)
- **Purpose**: Main user interface container
- **Responsibilities**:
  - Application shell and layout
  - Tab navigation system
  - Component orchestration
  - Initial page load and rendering
- **Dependencies**: Includes FormModal and ViewTab components

### Form Component (FormModal.js.html + FormModal.css.html)
- **Purpose**: Data entry and editing interface
- **Responsibilities**:
  - Dynamic form generation from configuration
  - Input validation and sanitization
  - Modal dialog management
  - Form submission handling
- **Features**: Create/edit modes, field type support, Arabic labels

### View Component (ViewTab.js.html + ViewTab.css.html)
- **Purpose**: Data display and interaction
- **Responsibilities**:
  - Dynamic table generation
  - Search and filter implementation
  - Bulk action handling
  - Row selection and editing
- **Features**: Date filtering, column filters, checkbox selection

## Architectural Patterns

### Client-Server Architecture
- **Frontend**: HTML/CSS/JavaScript running in browser
- **Backend**: Google Apps Script functions on Google servers
- **Communication**: google.script.run API for async function calls
- **Data Store**: Google Sheets as database

### Component-Based Design
- Modular HTML components (FormModal, ViewTab)
- Separation of concerns (JS logic, CSS styling)
- Reusable UI elements across different views

### Configuration-Driven UI
- Bootstrap data defines application structure
- Declarative tab and form configurations
- Dynamic rendering based on configuration objects
- No hardcoded UI elements

### Event-Driven Interaction
- User actions trigger event handlers
- Asynchronous backend communication
- Callback-based data updates
- Real-time UI updates without page refresh

## Data Flow

1. **Initialization**: Dashboard loads → Setup.js provides bootstrap data → UI renders
2. **Data Display**: ViewTab requests data → Code.js queries Sheets → Table populates
3. **Data Entry**: User opens form → FormModal renders → Submission → Code.js writes to Sheets
4. **Search/Filter**: User input → Client-side filtering → Table updates
5. **Bulk Actions**: Select rows → Trigger action → Code.js processes → UI refreshes

## Deployment Architecture

- **Development**: Local editing with IDE
- **Build**: clasp push to Google Apps Script
- **Deployment**: Web app published on Google infrastructure
- **Access**: HTTPS URL with anonymous access enabled
- **Runtime**: V8 JavaScript engine on Google servers
