import { type DesignToken, Size } from "../types";

const transformShadowToToken = (
	name: string,
	size: Size,
	value: string,
): DesignToken => {
	return {
		name: `${name}-${size}`,
		value,
	};
};

const shadowSize: Record<Size, string> = {
	[Size.zero]: "none",
	[Size.xs]:
		"0 calc(0.0625rem * var(--scale)) calc(0.1875rem * var(--scale)) rgba(0, 0, 0, 0.05), 0 calc(0.0625rem * var(--scale)) calc(0.125rem * var(--scale)) rgba(0, 0, 0, 0.1)",
	[Size.sm]:
		"0 calc(0.0625rem * var(--scale)) calc(0.1875rem * var(--scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(0.625rem * var(--scale)) calc(0.9375rem * var(--scale)) calc(-0.3125rem * var(--scale)), rgba(0, 0, 0, 0.04) 0 calc(0.4375rem * var(--scale)) calc(0.4375rem * var(--scale)) calc(-0.3125rem * var(--scale))",
	[Size.md]:
		"0 calc(0.0625rem * var(--scale)) calc(0.1875rem * var(--scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.25rem * var(--scale)) calc(1.5625rem * var(--scale)) calc(-0.3125rem * var(--scale)), rgba(0, 0, 0, 0.04) 0 calc(0.625rem * var(--scale)) calc(0.625rem * var(--scale)) calc(-0.3125rem * var(--scale))",
	[Size.lg]:
		"0 calc(0.0625rem * var(--scale)) calc(0.1875rem * var(--scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.75rem * var(--scale)) calc(1.4375rem * var(--scale)) calc(-0.4375rem * var(--scale)), rgba(0, 0, 0, 0.04) 0 calc(0.75rem * var(--scale)) calc(0.75rem * var(--scale)) calc(-0.4375rem * var(--scale))",
	[Size.xl]:
		"0 calc(0.0625rem * var(--scale)) calc(0.1875rem * var(--scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(2.25rem * var(--scale)) calc(1.75rem * var(--scale)) calc(-0.4375rem * var(--scale)), rgba(0, 0, 0, 0.04) 0 calc(1.0625rem * var(--scale)) calc(1.0625rem * var(--scale)) calc(-0.4375rem * var(--scale))",
	[Size.full]: "0 0 0 100vh rgba(0, 0, 0, 0.5)",
};

export const shadowSizeTokens = Object.entries(shadowSize).map(
	([size, value]) => transformShadowToToken("shadow", size as Size, value),
);

const insetShadowSize: Record<Size, string> = {
	[Size.zero]: "none",
	[Size.xs]:
		"inset 0 calc(0.0625rem * var(--scale)) calc(0.1875rem * var(--scale)) rgba(0, 0, 0, 0.05), inset 0 calc(0.0625rem * var(--scale)) calc(0.125rem * var(--scale)) rgba(0, 0, 0, 0.1)",
	[Size.sm]:
		"inset 0 calc(0.0625rem * var(--scale)) calc(0.1875rem * var(--scale)) rgba(0, 0, 0, 0.05), inset rgba(0, 0, 0, 0.05) 0 calc(0.625rem * var(--scale)) calc(0.9375rem * var(--scale)) calc(-0.3125rem * var(--scale)), inset rgba(0, 0, 0, 0.04) 0 calc(0.4375rem * var(--scale)) calc(0.4375rem * var(--scale)) calc(-0.3125rem * var(--scale))",
	[Size.md]:
		"inset 0 calc(0.0625rem * var(--scale)) calc(0.1875rem * var(--scale)) rgba(0, 0, 0, 0.05), inset rgba(0, 0, 0, 0.05) 0 calc(1.25rem * var(--scale)) calc(1.5625rem * var(--scale)) calc(-0.3125rem * var(--scale)), inset rgba(0, 0, 0, 0.04) 0 calc(0.625rem * var(--scale)) calc(0.625rem * var(--scale)) calc(-0.3125rem * var(--scale))",
	[Size.lg]:
		"inset 0 calc(0.0625rem * var(--scale)) calc(0.1875rem * var(--scale)) rgba(0, 0, 0, 0.05), inset rgba(0, 0, 0, 0.05) 0 calc(1.75rem * var(--scale)) calc(1.4375rem * var(--scale)) calc(-0.4375rem * var(--scale)), inset rgba(0, 0, 0, 0.04) 0 calc(0.75rem * var(--scale)) calc(0.75rem * var(--scale)) calc(-0.4375rem * var(--scale))",
	[Size.xl]:
		"inset 0 calc(0.0625rem * var(--scale)) calc(0.1875rem * var(--scale)) rgba(0, 0, 0, 0.05), inset rgba(0, 0, 0, 0.05) 0 calc(2.25rem * var(--scale)) calc(1.75rem * var(--scale)) calc(-0.4375rem * var(--scale)), inset rgba(0, 0, 0, 0.04) 0 calc(1.0625rem * var(--scale)) calc(1.0625rem * var(--scale)) calc(-0.4375rem * var(--scale))",
	[Size.full]: "inset 0 0 0 100vh rgba(0, 0, 0, 0.5)",
};

export const insetShadowSizeTokens = Object.entries(insetShadowSize).map(
	([size, value]) => transformShadowToToken("insetShadow", size as Size, value),
);

const dropShadowSize: Record<Size, string> = {
	[Size.zero]: "none",
	[Size.xs]:
		"0 calc(0.0625rem * var(--scale)) calc(0.125rem * var(--scale)) rgba(0, 0, 0, 0.1)",
	[Size.sm]:
		"0 calc(0.25rem * var(--scale)) calc(0.5rem * var(--scale)) rgba(0, 0, 0, 0.15)",
	[Size.md]:
		"0 calc(0.5rem * var(--scale)) calc(0.75rem * var(--scale)) rgba(0, 0, 0, 0.12)",
	[Size.lg]:
		"0 calc(0.75rem * var(--scale)) calc(1rem * var(--scale)) rgba(0, 0, 0, 0.15)",
	[Size.xl]:
		"0 calc(1.5rem * var(--scale)) calc(1.25rem * var(--scale)) rgba(0, 0, 0, 0.1)",
	[Size.full]:
		"0 calc(2.5rem * var(--scale)) calc(2.5rem * var(--scale)) rgba(0, 0, 0, 0.15)",
};

export const dropShadowSizeTokens = Object.entries(dropShadowSize).map(
	([size, value]) => transformShadowToToken("dropShadow", size as Size, value),
);
