# Custom Agents for Nijjara ERP

This directory contains custom GitHub Copilot agents specialized for different aspects of the Nijjara ERP system.

## Available Agents

### 1. Apps Script Expert (`apps-script-expert.yml`)
**Use when**: Working on server-side Google Apps Script code
- Adding new server functions
- Modifying CONFIG objects
- Implementing error handling
- Working with SpreadsheetApp APIs

**Example invocation**:
```
@apps-script-expert Implement a function to fetch all active projects with proper error handling
```

### 2. Sheet Configuration Specialist (`sheet-config-specialist.yml`)
**Use when**: Managing sheet configurations and data structures
- Adding new sheets to CONFIG.SHEETS
- Creating DYNAMIC_FORMS_FALLBACK entries
- Configuring pane layouts
- Managing sheet schemas

**Example invocation**:
```
@sheet-config-specialist Add a new sheet configuration for tracking customer feedback
```

### 3. Frontend UI Expert (`frontend-ui-expert.yml`)
**Use when**: Working on the web interface
- Modifying Dashboard.html
- Updating ViewTab.js.html or FormModal.js.html
- Implementing UI components
- Adding client-side functionality

**Example invocation**:
```
@frontend-ui-expert Add a filter dropdown to the dashboard for department selection
```

### 4. Documentation Specialist (`documentation-specialist.yml`)
**Use when**: Creating or updating documentation
- Documenting new features
- Updating schema documentation
- Writing user guides
- Maintaining architecture docs

**Example invocation**:
```
@documentation-specialist Document the new project milestones feature in the schema docs
```

## How to Use Custom Agents

### In Copilot Chat

Simply mention the agent with @ followed by your request:
```
@apps-script-expert Add error handling to the getEmployees function
```

### In Code Comments

You can also invoke agents via code comments:
```javascript
// @sheet-config-specialist: Add a configuration for tracking project budgets
```

### In Pull Request Comments

Agents can help review or implement PR feedback:
```
@frontend-ui-expert Please implement the suggested UI improvements in this PR
```

## Benefits of Using Custom Agents

1. **Specialized Knowledge**: Each agent understands specific aspects of the codebase
2. **Consistent Patterns**: Agents follow established conventions automatically
3. **Faster Development**: Less time explaining context and conventions
4. **Quality Assurance**: Agents enforce best practices and patterns
5. **Knowledge Retention**: Institutional knowledge is embedded in agent configs

## Creating New Agents

See the main documentation at `docs/custom-agents-guide.md` for detailed instructions on creating additional agents.

### Quick Start for New Agents

1. Create a new `.yml` file in this directory
2. Define the agent's name, description, and instructions
3. Specify which tools and context files the agent should have access to
4. Test the agent with simple tasks
5. Iterate based on results

Example minimal agent:
```yaml
name: Testing Specialist
description: Expert in creating and maintaining tests

instructions: |
  You are a testing expert for the Nijjara ERP system.
  Focus on creating comprehensive test cases and validation scripts.

tools:
  - view
  - edit
  - create
  - bash

context_files:
  - test_files/
  - src/Code.js
```

## Best Practices

1. **Use the Right Agent**: Choose the agent that best matches your task
2. **Be Specific**: Provide clear, specific instructions to agents
3. **Review Output**: Always review agent-generated code
4. **Iterate**: Refine requests if the first attempt isn't perfect
5. **Combine Agents**: Different agents can work on different parts of a feature

## Agent Selection Guide

| Task | Recommended Agent |
|------|------------------|
| Add server function | Apps Script Expert |
| Create new sheet | Sheet Configuration Specialist |
| Modify dashboard | Frontend UI Expert |
| Update documentation | Documentation Specialist |
| Add form fields | Sheet Configuration Specialist |
| Fix UI bug | Frontend UI Expert |
| Add error handling | Apps Script Expert |
| Write user guide | Documentation Specialist |

## Troubleshooting

### Agent Not Responding
- Check that the YAML file is valid
- Ensure the agent name matches your invocation
- Try rephrasing your request

### Unexpected Results
- Review the agent's instructions in the .yml file
- Be more specific in your request
- Provide more context if needed

### Multiple Agents Needed
- You can use multiple agents for different parts of a task
- Example: Use Sheet Config Specialist for data structure, then Apps Script Expert for server functions

## Contributing

To improve an existing agent:
1. Edit the corresponding `.yml` file
2. Update the instructions, tools, or context files
3. Test the changes
4. Document what you changed and why

## Support

For questions or issues with custom agents:
- See `docs/custom-agents-guide.md` for detailed documentation
- Check `.github/copilot-instructions.md` for general Copilot guidance
- Review this README for agent-specific information
