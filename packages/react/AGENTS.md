# @aakaar/react

**Parent:** Root AGENTS.md

## OVERVIEW

React component library package. Exports UI components to consumers.

## STRUCTURE

```
packages/react/
├── src/
│   ├── index.ts         # Barrel exports
│   ├── button/        # Button component
│   └── sonner/        # Toast component
├── dist/              # Built output
└── package.json       # tsup build
```

## WHERE TO LOOK

| Task | Location |
|------|----------|
| Add new component | `packages/react/src/` |
| Export component | `packages/react/src/index.ts` |

## CONVENTIONS

- Component folder structure: `index.ts`, component file, CSS
- Uses cva (class-variance-authority) for variants
- Exports both JSX and props types

## ANTI-PATTERNS

- **NEVER edit src/design/components/** - source is packages/react/src
- Run build to sync to src/design/components