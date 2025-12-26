# Using Design Tokens & Tailwind Classes

Aakaar uses a comprehensive token-based design system built on **Tailwind CSS v4**. This document explains how design tokens in `tokens.css` map to Tailwind utility classes and how to use them in your components.

## Overview

The design system is defined in `apps/docs/src/styles/tokens.css` (or your project's equivalent CSS file) using the Tailwind v4 `@theme` directive.

1. **Tokens are defined in CSS variables**: e.g., `--color-primary`, `--spacing-md`.
2. **Tailwind automatically generates classes**: e.g., `bg-primary`, `gap-md`.
3. **Core utilities group these classes**: e.g., `colors.primary` in `core.ts`.

## Token Definition

Tokens are defined in the `@theme` block in your CSS. This makes them available as native Tailwind utilities.

```css
@theme {
  /* Colors */
  --color-primary: light-dark(oklch(55% 0.18 34.884), oklch(45% 0.18 34.884));
  --color-surface: light-dark(oklch(96% 0.01 34.884), oklch(15% 0.01 34.884));

  /* Spacing */
  --spacing-md: 1rem;

  /* Radius */
  --radius-default: 0.5rem;
}
```

## How to Use Tokens

You have two ways to use these tokens: via the **Core Utility System** (recommended for consistency) or **Direct Tailwind Classes**.

### Method 1: Core Utilities (Recommended)

Aakaar provides a `core.ts` file that groups related Tailwind classes into semantic objects. This ensures consistency (e.g., always pairing the correct text color with a background color).

```typescript
import { cn, colors, spacing, shape, typography } from "../../core/core";

export const MyComponent = () => {
  return (
    <div className={cn(
      colors.surface,         // Applies: "bg-surface text-on-surface"
      shape.rounded,          // Applies: "rounded-default"
      spacing.medium,         // Applies: "gap-md"
      "flex flex-col"
    )}>
      <h1 className={typography.size.large}>Hello</h1>
    </div>
  );
};
```

**Common Utilities:**
- `colors.primary`: Background primary, text on-primary
- `colors.surface`: Background surface, text on-surface
- `spacing.small` / `medium` / `large`: Gaps
- `padding.medium`: Padding
- `shape.rounded`: Default border radius

### Method 2: Direct Tailwind Classes

Since tokens are native Tailwind utilities, you can use them directly in `className`. This is useful for one-off styles or layout adjustments.

**Important**: The numeric spacing scale (e.g., `p-1`, `m-4`, `w-4`, `gap-2`) is **disabled** because this system resets the spacing tokens (`--spacing-*: initial`).

However, utilities that are **not** based on the spacing scale (like percentages or keywords) **still work**:
- ✅ `w-full`, `w-1/2`, `w-auto`, `h-screen` (Width/Height specific values)
- ✅ `flex`, `block`, `absolute` (Layout)
- ✅ `text-center`, `font-bold` (Typography modifiers)

**Syntax Rule:**
- **Colors**: `--color-{name}` → `bg-{name}`, `text-{name}`, `border-{name}`
- **Spacing**: `--spacing-{size}` → `p-{size}`, `m-{size}`, `gap-{size}`, `w-{size}`, `h-{size}`
- **Radius**: `--radius-{size}` → `rounded-{size}`
- **Font Size**: `--font-size-{size}` → `text-{size}`
- **Shadows**: `--shadow-{size}` → `shadow-{size}`

**Example:**
```typescript
// Using direct classes based on tokens
<div className="bg-primary text-on-primary p-md rounded-default shadow-md">
  Custom Box
</div>
```

## Token Reference

### Colors
Available colors (light/dark mode aware):
- `primary`, `on-primary`
- `secondary`, `on-secondary`
- `tertiary`, `on-tertiary`
- `error`, `on-error`
- `surface`, `on-surface`, `surface-variant`
- `background`, `on-background`
- `outline`, `outline-variant`

**Usage:**
- `bg-primary`
- `text-error`
- `border-outline`

### Spacing & Sizing
Scale based on `--base` (1rem):
- `xs` (0.25x)
- `sm` (0.5x)
- `md` (1x)
- `lg` (1.5x)
- `xl` (2x)

**Usage:**
- `p-md` (padding)
- `m-sm` (margin)
- `gap-lg` (gap)
- `w-xl` (width)

### Typography
Font sizes:
- `text-xs`
- `text-sm`
- `text-md` (base size)
- `text-lg`
- `text-xl`

### Border Radius
- `rounded-xs`
- `rounded-sm`
- `rounded-md`
- `rounded-lg`
- `rounded-xl`
- `rounded-full`
- `rounded-default` (aliased to `md`)

### Shadows
- `shadow-xs`
- `shadow-sm`
- `shadow-md`
- `shadow-lg`
- `shadow-xl`

## Extending the Theme

To add your own tokens, edit `tokens.css` inside the `@theme` block.

```css
@theme {
  /* ... existing tokens ... */
  
  /* Add custom token */
  --color-brand: #ff00ff;
  --spacing-custom: 3rem;
}
```

Now you can use `bg-brand` and `p-custom` immediately.

