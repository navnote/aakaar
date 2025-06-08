import { type DesignToken, Size } from "../types";

export const scaleToken: DesignToken = {
	name: "scale",
	value: "1",
};

export const baseToken: DesignToken = {
	name: "base",
	value: "1rem",
};

const transformSizeToToken = (
	name: string,
	size: Size,
	multiplier: number,
	disableBase = false,
): DesignToken => {
	if (multiplier === 0) {
		return {
			name: `${name}-${size}`,
			value: "0",
		};
	}
	const finalValue = disableBase
		? `${multiplier * 100}%`
		: `calc(var(--scale) * var(--base) * ${multiplier})`;
	return {
		name: `${name}-${size}`,
		value: finalValue,
	};
};

const spacingMultipliers: Record<Size, number> = {
	[Size.zero]: 0,
	[Size.xs]: 0.25,
	[Size.sm]: 0.5,
	[Size.md]: 1,
	[Size.lg]: 1.5,
	[Size.xl]: 2,
	[Size.full]: 1, // Will be converted to 100%
};

export const spacingTokens = [
	...Object.entries(spacingMultipliers).map(([size, multiplier]) =>
		transformSizeToToken(
			"spacing",
			size as Size,
			multiplier,
			multiplier === 1 && size === Size.full,
		),
	),
];

const transformSizeMultiplierToToken = (
	name: string,
	size: Size,
	multiplier: number,
): DesignToken => {
	if (multiplier === 0) {
		return {
			name: `${name}-${size}`,
			value: "0",
		};
	}
	return {
		name: `${name}-${size}`,
		value: `calc(var(--scale) * var(--base) * ${multiplier})`,
	};
};

const fontSizeMultipliers: Record<
	Exclude<keyof typeof Size, "full" | "zero">,
	number
> = {
	[Size.xs]: 0.75,
	[Size.sm]: 0.875,
	[Size.md]: 1,
	[Size.lg]: 1.25,
	[Size.xl]: 1.5,
};

export const fontSizeTokens = Object.entries(fontSizeMultipliers).map(
	([size, multiplier]) =>
		transformSizeMultiplierToToken("fontSize", size as Size, multiplier),
);

const radiusMultipliers: Record<Size, number> = {
	[Size.zero]: 0,
	[Size.xs]: 0.25,
	[Size.sm]: 0.375,
	[Size.md]: 0.5,
	[Size.lg]: 0.75,
	[Size.xl]: 1,
	[Size.full]: 999, // Large number to effectively create pill shape
};

export const radiusTokens = [
	...Object.entries(radiusMultipliers).map(([size, multiplier]) =>
		transformSizeMultiplierToToken("radius", size as Size, multiplier),
	),
	{
		name: "radiusDefault",
		value: "var(--radius-md)",
	},
];
