# PROJECT KNOWLEDGE BASE

**Generated:** 2026-04-14
**Commit:** e456615
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
├── src/design/      # Generated component output (gitignored source)
├── apps/docs/       # Documentation site (Vite + React)
├── turbo.json       # Turborepo config
├── biome.json       # Biome lint config
├── aakaar.json      # Aakaar config (color theme)
├── bunfig.toml      # Bun workspace config
└── bun.lock         # Bun lockfile
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add new component | `packages/react/src/` + `src/design/components/` | Dual locations - sync required |
| CLI commands | `packages/cli/src/` | Commander-based |
| Token generation | `packages/scripts/` | Runs on `bun run registry` |
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
- **NEVER** commit `dist/` or `node_modules/` — gitignored
- **NEVER** use hardcoded Tailwind spacing (h-10, w-10, p-4, etc.) — they override the design tokens. Use semantic tokens from core.ts (dimensions.medium, padding.small, etc.) or h-md/w-md which map to --spacing-* variables

## TOKEN SYSTEM

This project uses a custom token system that overrides Tailwind's default spacing. The tokens are generated in `apps/docs/src/styles/tokens.css`:

| Token Type | Example | Maps to |
|------------|---------|---------|
| Size (dimensions) | `size-md`, `h-md`, `w-md` | `--spacing-md` (0.25rem base) |
| Padding | `p-xs`, `p-sm`, `p-md` | `--spacing-*` |
| Margin | `m-xs`, `m-sm`, `m-md` | `--spacing-*` |
| Gap | `gap-xs`, `gap-sm`, `gap-md` | `--spacing-*` |

**Why this matters**: Standard Tailwind classes like `h-10`, `p-4`, `w-20` won't work as expected because the spacing scale is redefined. Always use:
- `dimensions.small/medium/large` for height/width
- `padding.*` and `spacing.*` from core.ts
- Or use the semantic tokens: `h-md` (not `h-10`), `p-md` (not `p-4`)

## COMMANDS (BUN)

```bash
bun run build:all     # Build all packages
bun run dev          # Dev all packages
bun run check        # Biome lint
bun run check:fix    # Biome fix
bun run cli add <name>  # Add component
bun run registry     # Generate component registry
bun run ts           # Type check all packages
```

## NOTES

- Components exist in TWO places: `packages/react/src/` (source) AND `src/design/components/` (consumed)
- CLI adds to both when running `add` command
- Dictionary package is large (280 directories) - avoid full scans
- Use `bun` as package manager (not pnpm/yarn/npm)