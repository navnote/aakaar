# PROJECT KNOWLEDGE BASE

**Generated:** 2026-04-14
**Commit:** 698f702
**Branch:** main

## OVERVIEW

Aakaar: a modern, customizable UI component library built on Tailwind CSS. React monorepo with shadcn-like DX. Packages: @aakaar/cli, @aakaar/react, @aakaar/dictionary, @aakaar/global. Uses Material Design 3 tokens.

## STRUCTURE

```
aakaar/
├── packages/          # Publishable packages
│   ├── cli/          # @aakaar/cli - setup/token/add commands
│   ├── react/        # @aakaar/react - React components
│   ├── dictionary/  # Word data for CLI
│   ├── global/      # Global tokens export
│   └── scripts/     # Build scripts
├── src/design/components/  # Component source (button, sonner)
├── apps/docs/        # Documentation site
├── turbo.json       # Turborepo config
├── biome.json       # Biome lint config
└── aakaar.json      # Aakaar config (color theme)
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add new component | `packages/react/src/` + `src/design/components/` | Dual locations - sync required |
| CLI commands | `packages/cli/src/` | Commander-based |
| Token generation | `packages/scripts/` | Runs on `pnpm token` |
| Theme config | `aakaar.json` | color, strategy, output paths |
| Docs | `apps/docs/` | Vite + React |

## CONVENTIONS

- **Component pattern**: Each component has its own folder with `index.ts`, component file, CSS
- **Import path**: Components imported via `aakaar.json` `react.output` path
- **Tokens**: Generated to `src/design/css/tokens.css` from `aakaar.json` config
- **Package naming**: `@aakaar/*` - scoped to npm
- **Build**: tsup for packages, vite for docs

## ANTI-PATTERNS (THIS PROJECT)

- **NEVER** edit `src/design/components/` directly — edit `packages/react/src/` instead, then copy/sync
- **NEVER** commit `dist/` folders — gitignored
- **DON'T** add new packages without updating `pnpm-workspace.yaml`

## COMMANDS

```bash
pnpm build           # Build all packages
pnpm dev             # Dev all packages
pnpm check           # Biome lint
pnpm check:fix       # Biome fix
pnpm cli add <name>  # Add component
pnpm cli token       # Generate tokens
```

## NOTES

- Components exist in TWO places: `packages/react/src/` (source) AND `src/design/components/` (consumed)
- CLI adds to both when running `add` command
- Dictionary package is large (280 directories) - avoid full scans