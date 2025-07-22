#!/usr/bin/env node

import Color from "colorjs.io";
import type {
	AakaarColorScheme,
	BlackAndWhiteScheme,
	DesignToken,
	PrimaryPalette,
} from "../../../types";

export const theme = (color: string) => {
	const sourceColor = new Color(color);
	return sourceColor;
};

const transformHexToOkLch = (color: string) => {
	// If it's already a light-dark function, return as is
	if (color.startsWith("light-dark(")) {
		return color;
	}

	// Otherwise, convert to OKLCH
	const oklchColor = new Color(color).to("oklch");
	return oklchColor.toString({ precision: 2 });
};

const transformColorToToken = (name: string, color: string): DesignToken => {
	return {
		name: `color-${name}`,
		value: transformHexToOkLch(color),
	};
};

// Color harmony functions
const getComplementaryColor = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	// Ensure hue is a valid number
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue + 180, hsl.s, hsl.l]);
};

const getTriadicColor1 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	// Ensure hue is a valid number
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue + 120, hsl.s, hsl.l]);
};

const getTriadicColor2 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue + 240, hsl.s, hsl.l]);
};

const getAnalogousColor1 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue + 30, hsl.s, hsl.l]);
};

const getAnalogousColor2 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue - 30, hsl.s, hsl.l]);
};

const getSplitComplementary1 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue + 150, hsl.s, hsl.l]);
};

const getSplitComplementary2 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue + 210, hsl.s, hsl.l]);
};

const getTetradicColor1 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue + 90, hsl.s, hsl.l]);
};

const getTetradicColor2 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue + 180, hsl.s, hsl.l]);
};

const getTetradicColor3 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue + 270, hsl.s, hsl.l]);
};

// Generate surface colors by desaturating and adjusting lightness
const getSurfaceColor = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue, hsl.s * 0.05, 0.98]); // Very light, very low saturation
};

const getSurfaceVariantColor = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue, hsl.s * 0.08, 0.96]); // Light, very low saturation
};

const getBackgroundColor = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue, hsl.s * 0.02, 0.99]); // Almost white, minimal tint
};

// Generate error colors (high saturation red)
const getErrorColor = (): Color => {
	return new Color("hsl", [0, 0.8, 0.6]); // High saturation red
};

const getErrorContainerColor = (): Color => {
	return new Color("hsl", [0, 0.3, 0.9]); // Light red
};

// Generate inverse colors
const getInverseSurfaceColor = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue, hsl.s * 0.1, 0.1]); // Dark version
};

const getInverseOnSurfaceColor = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue, hsl.s * 0.1, 0.95]); // Light version
};

const getInversePrimaryColor = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	const hue = Number.isNaN(hsl.h) ? 0 : hsl.h;
	return new Color("hsl", [hue, hsl.s * 0.8, 0.9]); // Light, high saturation
};

// Calculate proper "on" colors based on contrast
const getOnColor = (backgroundColor: Color): string => {
	const hsl = backgroundColor.to("hsl");
	// If background is light, use dark text; if dark, use light text
	return hsl.l > 0.6 ? "#000000" : "#ffffff";
};

// Generate light theme colors
const generateLightTheme = (sourceColor: Color) => {
	// Use the source color directly as primary (no modification)
	const primary = sourceColor;
	const secondary = getComplementaryColor(sourceColor);
	const tertiary = getTriadicColor1(sourceColor);
	const error = getErrorColor();

	// Light theme: proper contrast ratios for accessibility
	const sourceHsl = sourceColor.to("hsl");
	const sourceHue = Number.isNaN(sourceHsl.h) ? 0 : sourceHsl.h;
	const background = new Color("hsl", [sourceHue, 0.02, 0.98]); // Very light tint
	const surface = new Color("hsl", [sourceHue, 0.02, 0.98]); // Very light tint
	const surfaceVariant = new Color("hsl", [sourceHue, 0.05, 0.94]); // Light tint
	const outline = new Color("hsl", [sourceHue, 0.08, 0.6]); // Medium contrast
	const outlineVariant = new Color("hsl", [sourceHue, 0.05, 0.85]); // Light contrast
	const inverseSurface = new Color("hsl", [sourceHue, 0.05, 0.25]); // Dark for inverse
	const inversePrimary = new Color("hsl", [sourceHue, 0.15, 0.9]); // Light inverse primary

	// Generate container colors with proper contrast
	const primaryHsl = primary.to("hsl");
	const secondaryHsl = secondary.to("hsl");
	const tertiaryHsl = tertiary.to("hsl");

	// Container colors should be lighter versions of primary colors
	const primaryContainer = new Color("hsl", [
		primaryHsl.h,
		Math.min(primaryHsl.s * 0.4, 0.3),
		Math.min(primaryHsl.l + 0.25, 0.92),
	]);
	const secondaryContainer = new Color("hsl", [
		secondaryHsl.h,
		Math.min(secondaryHsl.s * 0.4, 0.3),
		Math.min(secondaryHsl.l + 0.25, 0.92),
	]);
	const tertiaryContainer = new Color("hsl", [
		tertiaryHsl.h,
		Math.min(tertiaryHsl.s * 0.4, 0.3),
		Math.min(tertiaryHsl.l + 0.25, 0.92),
	]);

	// On colors should have good contrast with their containers
	const onPrimaryContainer = new Color("hsl", [
		primaryHsl.h,
		Math.min(primaryHsl.s * 0.9, 0.8),
		Math.max(primaryHsl.l - 0.4, 0.15),
	]);
	const onSecondaryContainer = new Color("hsl", [
		secondaryHsl.h,
		Math.min(secondaryHsl.s * 0.9, 0.8),
		Math.max(secondaryHsl.l - 0.4, 0.15),
	]);
	const onTertiaryContainer = new Color("hsl", [
		tertiaryHsl.h,
		Math.min(tertiaryHsl.s * 0.9, 0.8),
		Math.max(tertiaryHsl.l - 0.4, 0.15),
	]);

	return {
		primary: primary.to("srgb").toString({ format: "hex" }),
		onPrimary: "#ffffff",
		primaryContainer: primaryContainer.to("srgb").toString({ format: "hex" }),
		onPrimaryContainer: onPrimaryContainer
			.to("srgb")
			.toString({ format: "hex" }),
		secondary: secondary.to("srgb").toString({ format: "hex" }),
		onSecondary: "#ffffff",
		secondaryContainer: secondaryContainer
			.to("srgb")
			.toString({ format: "hex" }),
		onSecondaryContainer: onSecondaryContainer
			.to("srgb")
			.toString({ format: "hex" }),
		tertiary: tertiary.to("srgb").toString({ format: "hex" }),
		onTertiary: "#ffffff",
		tertiaryContainer: tertiaryContainer.to("srgb").toString({ format: "hex" }),
		onTertiaryContainer: onTertiaryContainer
			.to("srgb")
			.toString({ format: "hex" }),
		error: error.toString({ format: "hex" }),
		onError: "#ffffff",
		errorContainer: new Color("hsl", [0, 0.25, 0.95]).toString({
			format: "hex",
		}),
		onErrorContainer: new Color("hsl", [0, 0.85, 0.25]).toString({
			format: "hex",
		}),
		background: background.toString({ format: "hex" }),
		onBackground: "#000000",
		surface: surface.toString({ format: "hex" }),
		onSurface: "#000000",
		surfaceVariant: surfaceVariant.toString({ format: "hex" }),
		onSurfaceVariant: "#000000",
		outline: outline.toString({ format: "hex" }),
		outlineVariant: outlineVariant.toString({ format: "hex" }),
		shadow: "#000000",
		scrim: "#000000",
		inverseSurface: inverseSurface.toString({ format: "hex" }),
		inverseOnSurface: "#ffffff",
		inversePrimary: inversePrimary.toString({ format: "hex" }),
		inverseOnPrimary: "#000000",
	};
};

// Generate dark theme colors
const generateDarkTheme = (sourceColor: Color) => {
	// Use the source color directly as primary (no modification)
	const primary = sourceColor;
	const secondary = getComplementaryColor(sourceColor);
	const tertiary = getTriadicColor1(sourceColor);
	const error = getErrorColor();

	// Dark theme: proper contrast ratios for accessibility
	const sourceHsl = sourceColor.to("hsl");
	const sourceHue = Number.isNaN(sourceHsl.h) ? 0 : sourceHsl.h;
	const background = new Color("hsl", [sourceHue, 0.03, 0.12]); // Very dark tint
	const surface = new Color("hsl", [sourceHue, 0.03, 0.12]); // Very dark tint
	const surfaceVariant = new Color("hsl", [sourceHue, 0.05, 0.22]); // Dark tint
	const outline = new Color("hsl", [sourceHue, 0.08, 0.7]); // Light contrast
	const outlineVariant = new Color("hsl", [sourceHue, 0.05, 0.35]); // Dark contrast
	const inverseSurface = new Color("hsl", [sourceHue, 0.05, 0.9]); // Light for inverse
	const inversePrimary = new Color("hsl", [sourceHue, 0.2, 0.6]); // Dark inverse primary

	// Generate container colors with proper contrast for dark theme
	const primaryHsl = primary.to("hsl");
	const secondaryHsl = secondary.to("hsl");
	const tertiaryHsl = tertiary.to("hsl");

	// Container colors should be darker versions of primary colors
	const primaryContainer = new Color("hsl", [
		primaryHsl.h,
		Math.min(primaryHsl.s * 0.6, 0.4),
		Math.max(primaryHsl.l - 0.2, 0.15),
	]);
	const secondaryContainer = new Color("hsl", [
		secondaryHsl.h,
		Math.min(secondaryHsl.s * 0.6, 0.4),
		Math.max(secondaryHsl.l - 0.2, 0.15),
	]);
	const tertiaryContainer = new Color("hsl", [
		tertiaryHsl.h,
		Math.min(tertiaryHsl.s * 0.6, 0.4),
		Math.max(tertiaryHsl.l - 0.2, 0.15),
	]);

	// On colors should have good contrast with their containers
	const onPrimaryContainer = new Color("hsl", [
		primaryHsl.h,
		Math.min(primaryHsl.s * 0.3, 0.2),
		Math.min(primaryHsl.l + 0.3, 0.9),
	]);
	const onSecondaryContainer = new Color("hsl", [
		secondaryHsl.h,
		Math.min(secondaryHsl.s * 0.3, 0.2),
		Math.min(secondaryHsl.l + 0.3, 0.9),
	]);
	const onTertiaryContainer = new Color("hsl", [
		tertiaryHsl.h,
		Math.min(tertiaryHsl.s * 0.3, 0.2),
		Math.min(tertiaryHsl.l + 0.3, 0.9),
	]);

	return {
		primary: primary.toString({ format: "hex" }),
		onPrimary: "#000000",
		primaryContainer: primaryContainer.toString({ format: "hex" }),
		onPrimaryContainer: onPrimaryContainer.toString({ format: "hex" }),
		secondary: secondary.toString({ format: "hex" }),
		onSecondary: "#000000",
		secondaryContainer: secondaryContainer.toString({ format: "hex" }),
		onSecondaryContainer: onSecondaryContainer.toString({ format: "hex" }),
		tertiary: tertiary.toString({ format: "hex" }),
		onTertiary: "#000000",
		tertiaryContainer: tertiaryContainer.toString({ format: "hex" }),
		onTertiaryContainer: onTertiaryContainer.toString({ format: "hex" }),
		error: error.toString({ format: "hex" }),
		onError: "#000000",
		errorContainer: new Color("hsl", [0, 0.85, 0.25]).toString({
			format: "hex",
		}),
		onErrorContainer: new Color("hsl", [0, 0.25, 0.95]).toString({
			format: "hex",
		}),
		background: background.toString({ format: "hex" }),
		onBackground: "#ffffff",
		surface: surface.toString({ format: "hex" }),
		onSurface: "#ffffff",
		surfaceVariant: surfaceVariant.toString({ format: "hex" }),
		onSurfaceVariant: "#ffffff",
		outline: outline.toString({ format: "hex" }),
		outlineVariant: outlineVariant.toString({ format: "hex" }),
		shadow: "#000000",
		scrim: "#000000",
		inverseSurface: inverseSurface.toString({ format: "hex" }),
		inverseOnSurface: "#000000",
		inversePrimary: inversePrimary.toString({ format: "hex" }),
		inverseOnPrimary: "#ffffff",
	};
};

export const harmonyLightDarkTokens = (
	sourceColor: Color,
): AakaarColorScheme => {
	// Use the source color directly as primary
	const primary = sourceColor.to("oklch").toString({ precision: 2 });

	// Generate complementary and triadic colors using OKLCH
	const primaryOklch = sourceColor.to("oklch");
	const secondary = new Color("oklch", [
		primaryOklch.l,
		primaryOklch.c,
		(primaryOklch.h + 180) % 360,
	]).toString({ precision: 2 });
	const tertiary = new Color("oklch", [
		primaryOklch.l,
		primaryOklch.c,
		(primaryOklch.h + 120) % 360,
	]).toString({ precision: 2 });

	// Generate light and dark theme colors
	const lightBackground = new Color("oklch", [
		0.98,
		0.01,
		primaryOklch.h,
	]).toString({ precision: 2 });
	const darkBackground = new Color("oklch", [
		0.12,
		0.02,
		primaryOklch.h,
	]).toString({ precision: 2 });

	const lightSurface = new Color("oklch", [
		0.98,
		0.01,
		primaryOklch.h,
	]).toString({ precision: 2 });
	const darkSurface = new Color("oklch", [0.12, 0.02, primaryOklch.h]).toString(
		{ precision: 2 },
	);

	const lightPrimaryContainer = new Color("oklch", [
		0.92,
		primaryOklch.c * 0.4,
		primaryOklch.h,
	]).toString({ precision: 2 });
	const darkPrimaryContainer = new Color("oklch", [
		0.25,
		primaryOklch.c * 0.6,
		primaryOklch.h,
	]).toString({ precision: 2 });

	const lightSecondaryContainer = new Color("oklch", [
		0.92,
		primaryOklch.c * 0.3,
		(primaryOklch.h + 180) % 360,
	]).toString({ precision: 2 });
	const darkSecondaryContainer = new Color("oklch", [
		0.25,
		primaryOklch.c * 0.5,
		(primaryOklch.h + 180) % 360,
	]).toString({ precision: 2 });

	const lightTertiaryContainer = new Color("oklch", [
		0.92,
		primaryOklch.c * 0.3,
		(primaryOklch.h + 120) % 360,
	]).toString({ precision: 2 });
	const darkTertiaryContainer = new Color("oklch", [
		0.25,
		primaryOklch.c * 0.5,
		(primaryOklch.h + 120) % 360,
	]).toString({ precision: 2 });

	// Error colors
	const error = new Color("oklch", [0.55, 0.15, 25]).toString({ precision: 2 });
	const lightErrorContainer = new Color("oklch", [0.95, 0.05, 25]).toString({
		precision: 2,
	});
	const darkErrorContainer = new Color("oklch", [0.25, 0.15, 25]).toString({
		precision: 2,
	});

	return {
		// Primary colors
		primary: transformColorToToken(
			"primary",
			`light-dark(${primary}, ${primary})`,
		),
		onPrimary: transformColorToToken(
			"onPrimary",
			"light-dark(oklch(100% 0 none), oklch(0% 0 none))",
		),
		primaryContainer: transformColorToToken(
			"primaryContainer",
			`light-dark(${lightPrimaryContainer}, ${darkPrimaryContainer})`,
		),
		onPrimaryContainer: transformColorToToken(
			"onPrimaryContainer",
			"light-dark(oklch(25% 0.1 0), oklch(90% 0.05 0))",
		),

		// Secondary colors
		secondary: transformColorToToken(
			"secondary",
			`light-dark(${secondary}, ${secondary})`,
		),
		onSecondary: transformColorToToken(
			"onSecondary",
			"light-dark(oklch(100% 0 none), oklch(0% 0 none))",
		),
		secondaryContainer: transformColorToToken(
			"secondaryContainer",
			`light-dark(${lightSecondaryContainer}, ${darkSecondaryContainer})`,
		),
		onSecondaryContainer: transformColorToToken(
			"onSecondaryContainer",
			"light-dark(oklch(25% 0.1 180), oklch(90% 0.05 180))",
		),

		// Tertiary colors
		tertiary: transformColorToToken(
			"tertiary",
			`light-dark(${tertiary}, ${tertiary})`,
		),
		onTertiary: transformColorToToken(
			"onTertiary",
			"light-dark(oklch(100% 0 none), oklch(0% 0 none))",
		),
		tertiaryContainer: transformColorToToken(
			"tertiaryContainer",
			`light-dark(${lightTertiaryContainer}, ${darkTertiaryContainer})`,
		),
		onTertiaryContainer: transformColorToToken(
			"onTertiaryContainer",
			"light-dark(oklch(25% 0.1 120), oklch(90% 0.05 120))",
		),

		// Error colors
		error: transformColorToToken("error", `light-dark(${error}, ${error})`),
		onError: transformColorToToken(
			"onError",
			"light-dark(oklch(100% 0 none), oklch(0% 0 none))",
		),
		errorContainer: transformColorToToken(
			"errorContainer",
			`light-dark(${lightErrorContainer}, ${darkErrorContainer})`,
		),
		onErrorContainer: transformColorToToken(
			"onErrorContainer",
			"light-dark(oklch(25% 0.1 25), oklch(90% 0.05 25))",
		),

		// Background and surface
		background: transformColorToToken(
			"background",
			`light-dark(${lightBackground}, ${darkBackground})`,
		),
		onBackground: transformColorToToken(
			"onBackground",
			"light-dark(oklch(0% 0 none), oklch(100% 0 none))",
		),
		surface: transformColorToToken(
			"surface",
			`light-dark(${lightSurface}, ${darkSurface})`,
		),
		onSurface: transformColorToToken(
			"onSurface",
			"light-dark(oklch(0% 0 none), oklch(100% 0 none))",
		),
		surfaceVariant: transformColorToToken(
			"surfaceVariant",
			`light-dark(oklch(94% 0.02 ${primaryOklch.h}), oklch(22% 0.02 ${primaryOklch.h})`,
		),
		onSurfaceVariant: transformColorToToken(
			"onSurfaceVariant",
			"light-dark(oklch(0% 0 none), oklch(100% 0 none))",
		),

		// Outline colors
		outline: transformColorToToken(
			"outline",
			`light-dark(oklch(60% 0.02 ${primaryOklch.h}), oklch(70% 0.02 ${primaryOklch.h})`,
		),
		outlineVariant: transformColorToToken(
			"outlineVariant",
			`light-dark(oklch(85% 0.02 ${primaryOklch.h}), oklch(35% 0.02 ${primaryOklch.h})`,
		),

		// Shadow and scrim
		shadow: transformColorToToken(
			"shadow",
			"light-dark(oklch(0% 0 none), oklch(0% 0 none))",
		),
		scrim: transformColorToToken(
			"scrim",
			"light-dark(oklch(0% 0 none), oklch(0% 0 none))",
		),

		// Inverse colors
		inverseSurface: transformColorToToken(
			"inverseSurface",
			`light-dark(oklch(25% 0.02 ${primaryOklch.h}), oklch(90% 0.02 ${primaryOklch.h})`,
		),
		inverseOnSurface: transformColorToToken(
			"inverseOnSurface",
			"light-dark(oklch(100% 0 none), oklch(0% 0 none))",
		),
		inversePrimary: transformColorToToken(
			"inversePrimary",
			`light-dark(oklch(90% 0.1 ${primaryOklch.h}), oklch(60% 0.15 ${primaryOklch.h})`,
		),
	};
};

export const harmonyPrimaryPaletteTokens = (
	sourceColor: Color,
): PrimaryPalette => {
	const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100];

	return Object.fromEntries(
		tones.map((tone) => [
			`primary${tone}`,
			transformColorToToken(
				`primary${tone}`,
				sourceColor.lighten(tone / 100).toString(),
			),
		]),
	) as PrimaryPalette;
};

export const harmonyBlackAndWhiteTokens = (): BlackAndWhiteScheme => {
	return {
		white: {
			name: "white",
			value: "#fff",
		},
		black: {
			name: "black",
			value: "#000",
		},
	};
};
