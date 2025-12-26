# Aakaar vs Shadcn: Key Differences

This document outlines the fundamental differences between Aakaar and Shadcn UI libraries.

## Similarities

Both libraries share a similar philosophy:
- ✅ **Copy-paste approach**: Components are copied into your project, not installed as npm dependencies
- ✅ **Full ownership**: You own the code and can modify it freely
- ✅ **Tailwind CSS**: Both use Tailwind CSS for styling
- ✅ **TypeScript**: Full TypeScript support
- ✅ **React**: Built for React applications
- ✅ **Accessibility**: Focus on accessible components

---

## Key Differences

### 1. **Token-Based Design System** 🎨

**Aakaar:**
- Uses a **comprehensive token-based design system** with Material Design 3 principles
- Generates design tokens from a single source color
- Tokens include: colors, spacing, typography, shadows, borders, etc.
- Tokens are generated as CSS variables in `tokens.css`
- Supports multiple color generation strategies: `harmony` and `material`
- All components use these tokens via the `core.ts` utility system

**Shadcn:**
- Uses Tailwind's default color system and configuration
- Relies on Tailwind's `tailwind.config.js` for customization
- No automatic token generation from source colors
- More manual configuration required for theming

**Example:**
```bash
# Aakaar: Generate tokens from a single color
pnpx @aakaar/cli token --color a42700 --strategy harmony

# This generates a complete tokens.css with:
# - Primary color palette (0-100 tones)
# - Material Design 3 color system
# - Spacing, typography, shadows, etc.
```

---

### 2. **Core Utility System** 🛠️

**Aakaar:**
- Provides a `core.ts` file with organized utility functions
- Components use semantic tokens like `colors.surface`, `spacing.medium`, `shape.rounded`
- Consistent design language across all components
- Tokens are centralized and easily customizable

**Shadcn:**
- Components use Tailwind classes directly
- More flexibility but less consistency
- Requires manual coordination for design system consistency

**Example:**
```typescript
// Aakaar component styling
const buttonStyles = {
  base: cn(
    shape.rounded,           // Uses token: --radius-default
    colors.surface,          // Uses token: --color-surface
    spacing.small,           // Uses token: --spacing-sm
    typography.size.medium,   // Uses token: --font-size-md
  ),
};

// Shadcn component styling (typical)
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium"
);
```

---

### 3. **Base UI Components** 🧩

**Aakaar:**
- Built on top of **Base UI Components** (`@base-ui-components/react`)
- Base UI provides headless, unstyled primitives
- Aakaar adds the styling layer using tokens
- Separation of concerns: logic vs. styling

**Shadcn:**
- Uses **Radix UI** primitives
- Radix UI provides both logic and some default styling
- Different underlying architecture

**Impact:**
- Aakaar components have a different API structure (Base UI patterns)
- Shadcn components follow Radix UI patterns
- Both are accessible, but use different primitives

---

### 4. **Color System** 🌈

**Aakaar:**
- **Material Design 3** color system
- Automatic generation of complete color palettes from one source color
- Supports light/dark mode via CSS `light-dark()` function
- Color tokens include: primary, secondary, tertiary, error, surface, etc.
- Each color has semantic variants (container, on-color, etc.)

**Shadcn:**
- Uses Tailwind's default color palette
- Manual configuration for custom colors
- Typically uses CSS variables for theming
- Less structured color system

**Example:**
```css
/* Aakaar tokens.css (auto-generated) */
--color-primary: light-dark(oklch(50% 0.17 35), oklch(84% 0.09 35));
--color-on-primary: light-dark(oklch(100% 0 none), oklch(32% 0.11 35));
--color-primary-container: light-dark(oklch(92% 0.04 36), oklch(41% 0.14 35));
--color-on-primary-container: light-dark(oklch(23% 0.08 35), oklch(92% 0.04 36));
```

---

### 5. **Setup and Configuration** ⚙️

**Aakaar:**
```bash
# 1. Setup project structure
pnpx @aakaar/cli setup

# 2. Generate design tokens
pnpx @aakaar/cli token

# 3. Add components
pnpx @aakaar/cli add button
```

**Configuration file (`aakaar.json`):**
```json
{
  "tokens": {
    "color": "a42700",
    "strategy": "harmony",
    "output": "src/design/css"
  },
  "react": {
    "output": "src/design/components"
  }
}
```

**Shadcn:**
```bash
# 1. Initialize (creates components.json)
npx shadcn@latest init

# 2. Add components
npx shadcn@latest add button
```

**Configuration file (`components.json`):**
```json
{
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css"
  }
}
```

---

### 6. **Customization Approach** 🎭

**Aakaar:**
- **Token-based customization**: Change tokens, all components update automatically
- Modify `aakaar.json` and regenerate tokens
- Components use tokens, so changes propagate consistently
- Less need to modify individual component files

**Shadcn:**
- **Component-level customization**: Modify each component file directly
- More granular control per component
- Requires manual updates across components for consistency
- More flexibility but more work for system-wide changes

**Example - Changing primary color:**

**Aakaar:**
```bash
# 1. Update aakaar.json
{ "tokens": { "color": "006875" } }

# 2. Regenerate tokens
pnpx @aakaar/cli token

# 3. All components automatically use new color
```

**Shadcn:**
```typescript
// Need to update CSS variables in globals.css
:root {
  --primary: 0 108 117;  // Update manually
}
// Or update tailwind.config.ts
```

---

### 7. **Component Structure** 📦

**Aakaar:**
- Components use Base UI primitives
- Styling via token-based utilities from `core.ts`
- Consistent structure across all components
- Components reference `../../core/core` for utilities

**Shadcn:**
- Components use Radix UI primitives
- Direct Tailwind classes
- More variation in component structure
- Components are more self-contained

---

### 8. **Design Philosophy** 🎯

**Aakaar:**
- **Design system first**: Tokens define the system, components follow
- **Consistency**: All components share the same design language
- **Scalability**: Easy to maintain consistency across large projects
- **Material Design 3**: Follows MD3 principles for colors and spacing

**Shadcn:**
- **Component first**: Each component is independent
- **Flexibility**: More freedom to customize individual components
- **Pragmatism**: Focus on getting components working quickly
- **Tailwind defaults**: Uses Tailwind's design decisions

---

### 9. **File Organization** 📁

**Aakaar:**
```
src/
  design/
    css/
      tokens.css        # Generated design tokens
    components/
      button/
        button.tsx
    core.ts            # Core utilities
```

**Shadcn:**
```
src/
  components/
    ui/
      button.tsx
  app/
    globals.css        # CSS variables
```

---

### 10. **CLI Features** 🚀

**Aakaar CLI:**
- `setup` - Initialize project structure
- `token` - Generate design tokens from color
- `add <component>` - Add component to project

**Shadcn CLI:**
- `init` - Initialize shadcn in project
- `add <component>` - Add component to project
- `diff` - Show differences between installed and latest versions

---

## When to Choose Aakaar

✅ You want a **token-based design system**  
✅ You need **automatic color palette generation**  
✅ You prefer **Material Design 3** principles  
✅ You want **consistent theming** across all components  
✅ You're building a **large-scale application** with design system requirements  
✅ You want **easy color strategy switching** (harmony vs material)  

## When to Choose Shadcn

✅ You want **maximum flexibility** per component  
✅ You prefer **Radix UI** primitives  
✅ You want **quick setup** without token generation  
✅ You prefer **Tailwind's default** design decisions  
✅ You're building **smaller projects** or prototypes  
✅ You want **more components** (34 more than Aakaar currently)  

---

## Summary Table

| Feature | Aakaar | Shadcn |
|---------|--------|--------|
| **Design System** | Token-based (Material Design 3) | Tailwind-based |
| **Color Generation** | Automatic from source color | Manual configuration |
| **Base Primitives** | Base UI Components | Radix UI |
| **Customization** | Token-level (system-wide) | Component-level |
| **Setup Complexity** | Medium (requires token generation) | Low (quick init) |
| **Consistency** | High (token-driven) | Medium (manual coordination) |
| **Component Count** | 23 components | 54 components |
| **Theming** | Token regeneration | CSS variables / Tailwind config |
| **CLI Commands** | `setup`, `token`, `add` | `init`, `add`, `diff` |
| **File Structure** | `design/` directory | `components/ui/` directory |

---

## Conclusion

**Aakaar** is ideal for teams that want:
- A structured, token-based design system
- Automatic color palette generation
- Material Design 3 principles
- System-wide consistency with minimal effort

**Shadcn** is ideal for teams that want:
- Maximum flexibility and control
- Quick setup and prototyping
- More component options
- Radix UI primitives

Both are excellent choices, but serve different needs. Aakaar prioritizes **design system consistency**, while Shadcn prioritizes **component flexibility**.

