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
	[Size.xs]: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
	[Size.sm]: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
	[Size.md]:
		"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
	[Size.lg]:
		"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
	[Size.xl]: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
	[Size.full]: "0 0 0 100vh rgba(0, 0, 0, 0.5)",
};

export const shadowSizeTokens = Object.entries(shadowSize).map(
	([size, value]) => transformShadowToToken("shadow", size as Size, value),
);

const insetShadowSize: Record<Size, string> = {
	[Size.zero]: "none",
	[Size.xs]: "inset 0 1px 2px 0 rgb(0 0 0 / 0.05)",
	[Size.sm]:
		"inset 0 4px 6px -1px rgb(0 0 0 / 0.1), inset 0 2px 4px -2px rgb(0 0 0 / 0.1)",
	[Size.md]:
		"inset 0 10px 15px -3px rgb(0 0 0 / 0.1), inset 0 4px 6px -4px rgb(0 0 0 / 0.1)",
	[Size.lg]:
		"inset 0 20px 25px -5px rgb(0 0 0 / 0.1), inset 0 8px 10px -6px rgb(0 0 0 / 0.1)",
	[Size.xl]: "inset 0 25px 50px -12px rgb(0 0 0 / 0.25)",
	[Size.full]: "inset 0 0 0 100vh rgba(0, 0, 0, 0.5)",
};

export const insetShadowSizeTokens = Object.entries(insetShadowSize).map(
	([size, value]) => transformShadowToToken("insetShadow", size as Size, value),
);

const dropShadowSize: Record<Size, string> = {
	[Size.zero]: "none",
	[Size.xs]: "0 1px 1px rgb(0 0 0 / 0.05)",
	[Size.sm]: "0 1px 2px rgb(0 0 0 / 0.15)",
	[Size.md]: "0 3px 3px rgb(0 0 0 / 0.12)",
	[Size.lg]: "0 4px 4px rgb(0 0 0 / 0.15)",
	[Size.xl]: "0 9px 7px rgb(0 0 0 / 0.1)",
	[Size.full]: "0 25px 25px rgb(0 0 0 / 0.15)",
};

export const dropShadowSizeTokens = Object.entries(dropShadowSize).map(
	([size, value]) => transformShadowToToken("dropShadow", size as Size, value),
);
