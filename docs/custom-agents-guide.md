# GitHub Copilot Custom Agents Guide

## What are Custom Agents?

Custom agents are specialized AI assistants that you can create within your GitHub repository to handle specific tasks with domain expertise. They work alongside GitHub Copilot and are defined as YAML configuration files in the `.github/agents/` directory.

## Why Use Custom Agents?

### Benefits Beyond Standard Copilot

1. **Domain-Specific Expertise**: Custom agents can be trained with specific knowledge about your codebase, architecture patterns, and business logic.

2. **Consistent Code Patterns**: Ensure all team members follow the same conventions and patterns when making changes.

3. **Reduced Context Switching**: Agents can be specialized for specific areas (e.g., frontend, backend, database) without needing to understand the entire codebase.

4. **Automated Best Practices**: Embed your team's best practices directly into the agent's behavior.

5. **Task-Specific Optimization**: Create agents for specific workflows like:
   - Database schema migrations
   - API endpoint creation
   - UI component generation
   - Configuration management
   - Documentation generation

6. **Knowledge Retention**: Capture institutional knowledge that might otherwise be lost when team members leave.

7. **Faster Onboarding**: New developers can leverage agents that understand your specific patterns and conventions.

## Custom Agents vs Standard Copilot

| Feature | Standard Copilot | Custom Agents |
|---------|-----------------|---------------|
| General coding assistance | ✅ Excellent | ✅ Excellent |
| Project-specific patterns | ⚠️ Limited | ✅ Optimized |
| Domain expertise | ⚠️ General | ✅ Specialized |
| Consistent conventions | ⚠️ Variable | ✅ Enforced |
| Workflow automation | ⚠️ Manual | ✅ Automated |
| Team knowledge | ⚠️ External | ✅ Embedded |

## How to Create a Custom Agent

### Step 1: Create the Agents Directory

```bash
mkdir -p .github/agents
```

### Step 2: Create Agent Configuration File

Create a YAML file in `.github/agents/` (e.g., `apps-script-expert.yml`):

```yaml
name: Apps Script Expert
description: Specialized agent for Google Apps Script development in this ERP system
instructions: |
  You are an expert in Google Apps Script development for the Nijjara ERP system.
  
  Key responsibilities:
  - Understand the CONFIG-centric architecture in src/Code.js
  - Follow sheet naming conventions (SYS_ for system tables, PV_ for views)
  - Use existing debug utilities (debugLog, debugError, wrapFunctionWithErrorHandling_)
  - Maintain the monolithic Code.js structure
  - Ensure all changes respect the spreadsheet-based datastore pattern
  
  When making changes:
  1. Always check CONFIG.SHEETS for existing sheet names
  2. Use wrapFunctionWithErrorHandling_ for new server functions
  3. Keep edits minimal and localized
  4. Follow the patterns in existing code
  5. Test changes thoroughly in the Apps Script environment
  
  Never:
  - Change CONFIG.SPREADSHEET_ID without confirmation
  - Refactor Code.js into multiple files without approval
  - Introduce new dependencies without discussion

tools:
  - view
  - edit
  - bash
  - create

context_files:
  - src/Code.js
  - src/appsscript.json
  - .github/copilot-instructions.md
  - docs/ERP_Schema_and_Data_2025-11-04_06-56-51.md
```

### Step 3: Use Your Custom Agent

Once configured, you can invoke custom agents in your Copilot chat:

```
@apps-script-expert Add a new sheet configuration for tracking project milestones
```

Or in code comments:

```javascript
// @apps-script-expert: Implement a function to fetch all active employees with proper error handling
```

## Example Custom Agents for This Repository

### 1. Apps Script Expert

**Purpose**: Handle all Apps Script-specific development tasks

**Best for**:
- Adding new server-side functions
- Modifying CONFIG objects
- Implementing error handling
- Working with SpreadsheetApp APIs

### 2. Sheet Configuration Specialist

**Purpose**: Manage sheet configurations and dynamic forms

**Best for**:
- Adding new sheets to CONFIG.SHEETS
- Creating DYNAMIC_FORMS_FALLBACK entries
- Configuring pane layouts (HR_PANE_CONFIG, etc.)
- Managing sheet schemas

### 3. Frontend UI Expert

**Purpose**: Handle Dashboard and HTML template modifications

**Best for**:
- Modifying Dashboard.html
- Updating ViewTab.js.html
- Implementing FormModal.js.html changes
- CSS and JavaScript optimizations

### 4. Testing & Validation Specialist

**Purpose**: Create and maintain tests

**Best for**:
- Writing test cases
- Validating data integrity
- Creating mock data
- Running validation scripts

### 5. Documentation Specialist

**Purpose**: Keep documentation up-to-date

**Best for**:
- Updating schema documentation
- Maintaining architecture docs
- Creating user guides
- Documenting API endpoints

## Advanced Configuration Options

### Context Files

Specify files that the agent should always have access to:

```yaml
context_files:
  - src/Code.js
  - src/appsscript.json
  - docs/*.md
```

### Tool Access

Limit or expand tools available to the agent:

```yaml
tools:
  - view      # Read files
  - edit      # Modify files
  - create    # Create new files
  - bash      # Run commands
  - search    # Search codebase
```

### Conversation Style

Define how the agent communicates:

```yaml
conversation_style:
  tone: professional
  verbosity: concise
  code_comments: minimal
```

### Examples

Provide specific examples of desired behavior:

```yaml
examples:
  - input: "Add a new employee field"
    output: |
      1. Update CONFIG.SHEETS if needed
      2. Add field to DYNAMIC_FORMS_FALLBACK
      3. Update relevant pane configs
      4. Document in schema
```

## Best Practices

### 1. Start Small
Begin with one specialized agent and expand as you understand the patterns.

### 2. Clear Boundaries
Define clear responsibilities for each agent to avoid overlap.

### 3. Include Context
Reference key files and patterns in the instructions.

### 4. Iterate
Refine agent instructions based on actual usage and outcomes.

### 5. Document Usage
Keep examples of how to invoke and use each agent.

### 6. Version Control
Treat agent configurations as code - review changes carefully.

### 7. Team Collaboration
Involve the team in defining agent behaviors and patterns.

## Common Use Cases for This Repository

### Scenario 1: Adding a New Data Entity

```
@sheet-config-specialist Create a new sheet configuration for "PRJ_Tasks" 
with fields: task_id, task_name, assignee, due_date, status
```

### Scenario 2: Implementing a New Feature

```
@apps-script-expert Implement a function to calculate employee tenure 
with proper error handling and logging
```

### Scenario 3: UI Modifications

```
@frontend-ui-expert Add a filter dropdown to Dashboard.html for 
filtering by department
```

### Scenario 4: Documentation Updates

```
@documentation-specialist Update the schema documentation to reflect 
the new PRJ_Tasks sheet structure
```

## Troubleshooting

### Agent Not Responding

1. Check YAML syntax is valid
2. Ensure file is in `.github/agents/` directory
3. Verify agent name matches invocation
4. Check for conflicts with other agents

### Agent Producing Unexpected Results

1. Review and refine instructions
2. Add more specific examples
3. Limit or expand tool access
4. Check context files are correct

### Performance Issues

1. Reduce context_files if too many
2. Be more specific in instructions
3. Use targeted agents instead of general ones

## Migration Guide

### From General Copilot to Custom Agents

1. **Identify Patterns**: Look for repeated tasks or questions
2. **Create Specialist**: Define an agent for that domain
3. **Test**: Use the agent for similar tasks
4. **Refine**: Update based on results
5. **Expand**: Create additional agents as needed

## Security Considerations

1. **Don't Include Secrets**: Never put API keys or passwords in agent configs
2. **Limit Tool Access**: Only grant necessary permissions
3. **Review Changes**: Always review agent-generated code
4. **Access Control**: Use GitHub's access controls for .github directory

## Further Resources

- GitHub Copilot Documentation: https://docs.github.com/copilot
- Apps Script Best Practices: https://developers.google.com/apps-script/guides/best-practices
- Project Copilot Instructions: `.github/copilot-instructions.md`

## Next Steps

1. Create your first custom agent (see examples below)
2. Test it with simple tasks
3. Iterate based on results
4. Create additional specialized agents
5. Share learnings with your team
