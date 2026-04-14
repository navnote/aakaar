# @aakaar/scripts

**Parent:** Root AGENTS.md

## OVERVIEW

Build and validation scripts. Runs on `pnpm token`.

## STRUCTURE

```
packages/scripts/
├── src/
│   └── token.ts    # Token generator
└── package.json   # token script
```

## WHERE TO LOOK

| Task | Location |
|------|----------|
| Token logic | packages/scripts/src/token.ts |
| Config read | aakaar.json |

## CONVENTIONS

- Reads aakaar.json tokens config
- Uses @ktibow/material-color-utilities for color conversion
- Outputs CSS to src/design/css/tokens.css