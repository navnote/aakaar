# Files to Change When Adding a New Component

This document outlines all files that need to be modified when adding a new component to the aakaar library, and explains why each change is necessary.

## Summary

When adding a new component (e.g., `badge`), you need to modify **8 files** across 4 packages/apps:

1. **Component Implementation** (1 file)
2. **Type Definitions** (1 file)
3. **Package Exports** (1 file)
4. **Registry Script** (1 file)
5. **Navigation Constants** (1 file)
6. **App Routes** (1 file)
7. **Documentation Route** (1 file)
8. **Registry JSON** (auto-generated, but needs component files)

---

## Detailed File Changes

### 1. Component Implementation Files

**Location:** `packages/react/src/lib/components/{component-name}/`

**Files to create:**
- `{component-name}.tsx` - The actual component implementation
- `{component-name}.deps.json` - Component dependencies (optional, only if component requires external npm packages)

**Why:** This is the core component code that users will install. The `.deps.json` file tells the CLI which npm packages need to be installed when adding this component. Only create this file if your component uses external npm packages that aren't already project dependencies (e.g., `@base-ui-components/react`, `@tabler/icons-react`). Components that only use utilities from `core.ts` don't need a deps.json file.

**Example structure:**
```
packages/react/src/lib/components/badge/
  ├── badge.tsx
  └── badge.deps.json (optional)
```

---

### 2. Type Definitions

**File:** `packages/global/src/index.ts`

**Change:** Add the component to the `AakaarComponent` enum

**Why:** This enum is used throughout the codebase for type safety and to ensure components are properly registered. It's referenced by:
- Navigation constants (for routing)
- Installation component (for CLI commands)
- Type checking across packages

**Example:**
```typescript
export enum AakaarComponent {
  // ... existing components
  badge = "badge",  // ADD THIS
}
```

---

### 3. Package Exports

**File:** `packages/react/src/index.ts`

**Change:** Add export statement for the new component

**Why:** This makes the component available when users import from `@aakaar/react`. Without this, the component won't be accessible even if the files exist.

**Example:**
```typescript
export * from "./lib/components/badge/badge";  // ADD THIS
```

---

### 4. Registry Script

**File:** `packages/scripts/src/registry.mts`

**Change:** Add component name to the `COMPONENTS` array

**Why:** This script generates the registry JSON files that the CLI uses to fetch and install components. The script reads from this array to know which components to process and generate registry files for.

**Example:**
```typescript
const COMPONENTS = [
  // ... existing components
  "badge",  // ADD THIS
];
```

---

### 5. Navigation Constants

**File:** `apps/docs/src/core/navigation/constants.ts`

**Change:** Add entry to `COMPONENTS_NAVIGATION_MAP`

**Why:** This map provides routing information and display titles for the documentation sidebar. It's used to:
- Generate navigation items in the sidebar
- Create proper routes for component documentation
- Display component names in the UI

**Example:**
```typescript
const COMPONENTS_NAVIGATION_MAP: Record<AakaarComponent, AakaarNavigation> = {
  // ... existing components
  badge: {  // ADD THIS
    path: "/docs/components/badge",
    title: "Badge",
  },
};
```

---

### 6. App Routes

**File:** `apps/docs/src/App.tsx`

**Changes needed:**
1. Add import statement for the component route
2. Add `<Route>` element in the components section

**Why:** This registers the React Router route so the documentation page is accessible. Without this, navigating to `/docs/components/badge` will result in a 404.

**Example:**
```typescript
// ADD IMPORT
import Badge from "./routes/docs/components/badge";

// ADD ROUTE (inside <Route path="components">)
<Route path="badge" element={<Badge />} />
```

---

### 7. Documentation Route Component

**File:** `apps/docs/src/routes/docs/components/{component-name}.tsx`

**Change:** Create a new file with the component documentation

**Why:** This is the actual documentation page that users see. It includes:
- Component description
- Live demo
- Installation instructions (uses registry JSON)
- Code examples

**Example structure:**
```typescript
import { Badge } from "@aakaar/react";
import BadgeRegistry from "../../../../public/registry/badge.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
  const demo = (
    <div>
      <Badge>Example</Badge>
    </div>
  );
  
  return (
    <article>
      <h1>Badge</h1>
      <p>Component description...</p>
      <h2>Demo</h2>
      <Demo code={`...`}>{demo}</Demo>
      <Installation registry={BadgeRegistry} componentName="badge" />
    </article>
  );
};
```

---

### 8. Registry JSON (Auto-generated)

**Location:** `apps/docs/public/registry/{component-name}.json`

**Change:** This file is auto-generated when you run the registry script

**Why:** The CLI fetches this JSON file from the registry to:
- Get component file contents
- Get dependency information
- Install the component into user projects

**How to generate:** Run `pnpm run registry` from the root directory after adding the component to `packages/scripts/src/registry.mts`. This generates the JSON file in `apps/docs/public/registry/`.

---

## Step-by-Step Checklist

When adding a new component (e.g., `badge`):

- [ ] **1. Create component files**
  - [ ] `packages/react/src/lib/components/badge/badge.tsx`
  - [ ] `packages/react/src/lib/components/badge/badge.deps.json` (only if component uses external npm packages like @base-ui-components/react)

- [ ] **2. Update type definitions**
  - [ ] Add to `AakaarComponent` enum in `packages/global/src/index.ts`

- [ ] **3. Export component**
  - [ ] Add export in `packages/react/src/index.ts`

- [ ] **4. Register in registry script**
  - [ ] Add to `COMPONENTS` array in `packages/scripts/src/registry.mts`

- [ ] **5. Add navigation**
  - [ ] Add entry to `COMPONENTS_NAVIGATION_MAP` in `apps/docs/src/core/navigation/constants.ts`

- [ ] **6. Add route**
  - [ ] Add import in `apps/docs/src/App.tsx`
  - [ ] Add `<Route>` in `apps/docs/src/App.tsx`

- [ ] **7. Create documentation**
  - [ ] Create `apps/docs/src/routes/docs/components/badge.tsx`

- [ ] **8. Generate registry**
  - [ ] Run registry script to generate `apps/docs/public/registry/badge.json`

---

## Notes

- **Component naming:** Use kebab-case for file/directory names (e.g., `alert-dialog`), but camelCase for enum keys (e.g., `alertDialog = "alert-dialog"`)
- **Registry generation:** The registry script must be run after adding a component to generate the JSON file that the CLI uses
- **Type safety:** The `AakaarComponent` enum ensures type safety - TypeScript will catch missing entries in navigation maps and other places
- **Documentation:** The documentation route file must import the registry JSON from `public/registry/` to show installation instructions

