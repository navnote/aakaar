# @aakaar/cli

**Parent:** Root AGENTS.md

## OVERVIEW

CLI tool for project setup, token generation, and component scaffolding.

## STRUCTURE

```
packages/cli/
├── src/
│   ├── index.ts      # CLI entry
│   ├── commands/    # setup, token, add
│   └── utils/       # helpers
└── package.json    # bin: aakaar
```

## WHERE TO LOOK

| Task | Location |
|------|----------|
| Add CLI command | `packages/cli/src/` |
| Modify setup | commands/setup.ts |
| Modify add | commands/add.ts |

## CONVENTIONS

- Commander.js for CLI parsing
- Color: colorette for terminal output
- Template files in lib/templates/

## COMMANDS

```bash
bun run cli setup        # Initialize aakaar in project
bun run cli token       # Generate tokens.css
bun run cli add <name> # Add component
```