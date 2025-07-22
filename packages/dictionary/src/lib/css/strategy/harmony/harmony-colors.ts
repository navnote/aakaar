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
	return new Color("hsl", [hsl.h + 180, hsl.s, hsl.l]);
};

const getTriadicColor1 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	return new Color("hsl", [hsl.h + 120, hsl.s, hsl.l]);
};

const getTriadicColor2 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	return new Color("hsl", [hsl.h + 240, hsl.s, hsl.l]);
};

const getAnalogousColor1 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	return new Color("hsl", [hsl.h + 30, hsl.s, hsl.l]);
};

const getAnalogousColor2 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	return new Color("hsl", [hsl.h - 30, hsl.s, hsl.l]);
};

const getSplitComplementary1 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	return new Color("hsl", [hsl.h + 150, hsl.s, hsl.l]);
};

const getSplitComplementary2 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	return new Color("hsl", [hsl.h + 210, hsl.s, hsl.l]);
};

const getTetradicColor1 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	return new Color("hsl", [hsl.h + 90, hsl.s, hsl.l]);
};

const getTetradicColor2 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	return new Color("hsl", [hsl.h + 180, hsl.s, hsl.l]);
};

const getTetradicColor3 = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	return new Color("hsl", [hsl.h + 270, hsl.s, hsl.l]);
};

// Generate surface colors by desaturating and adjusting lightness
const getSurfaceColor = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	return new Color("hsl", [hsl.h, hsl.s * 0.05, 0.98]); // Very light, very low saturation
};

const getSurfaceVariantColor = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	return new Color("hsl", [hsl.h, hsl.s * 0.08, 0.96]); // Light, very low saturation
};

const getBackgroundColor = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	return new Color("hsl", [hsl.h, hsl.s * 0.02, 0.99]); // Almost white, minimal tint
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
	return new Color("hsl", [hsl.h, hsl.s * 0.1, 0.1]); // Dark version
};

const getInverseOnSurfaceColor = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	return new Color("hsl", [hsl.h, hsl.s * 0.1, 0.95]); // Light version
};

const getInversePrimaryColor = (sourceColor: Color): Color => {
	const hsl = sourceColor.to("hsl");
	return new Color("hsl", [hsl.h, hsl.s * 0.8, 0.9]); // Light, high saturation
};

// Calculate proper "on" colors based on contrast
const getOnColor = (backgroundColor: Color): string => {
	const hsl = backgroundColor.to("hsl");
	// If background is light, use dark text; if dark, use light text
	return hsl.l > 0.6 ? "#000000" : "#ffffff";
};

// Generate light theme colors
const generateLightTheme = (sourceColor: Color) => {
	const primary = sourceColor;
	const secondary = getComplementaryColor(sourceColor);
	const tertiary = getTriadicColor1(sourceColor);
	const error = getErrorColor();

	// Light theme: very light backgrounds (like Material Design)
	const background = new Color("hsl", [sourceColor.to("hsl").h, 0.01, 0.99]); // Almost white
	const surface = new Color("hsl", [sourceColor.to("hsl").h, 0.01, 0.99]); // Almost white
	const surfaceVariant = new Color("hsl", [
		sourceColor.to("hsl").h,
		0.03,
		0.92,
	]); // Very light tint
	const outline = new Color("hsl", [sourceColor.to("hsl").h, 0.02, 0.57]); // Medium gray
	const outlineVariant = new Color("hsl", [
		sourceColor.to("hsl").h,
		0.03,
		0.83,
	]); // Light gray
	const inverseSurface = new Color("hsl", [
		sourceColor.to("hsl").h,
		0.01,
		0.31,
	]); // Dark gray
	const inversePrimary = new Color("hsl", [
		sourceColor.to("hsl").h,
		0.09,
		0.84,
	]); // Light primary

	return {
		primary: primary.toString(),
		onPrimary: "#ffffff",
		primaryContainer: primary.lighten(0.15).toString(),
		onPrimaryContainer: primary.darken(0.1).toString(),
		secondary: secondary.toString(),
		onSecondary: "#ffffff",
		secondaryContainer: secondary.lighten(0.15).toString(),
		onSecondaryContainer: secondary.darken(0.1).toString(),
		tertiary: tertiary.toString(),
		onTertiary: "#ffffff",
		tertiaryContainer: tertiary.lighten(0.15).toString(),
		onTertiaryContainer: tertiary.darken(0.1).toString(),
		error: error.toString(),
		onError: "#ffffff",
		errorContainer: error.lighten(0.15).toString(),
		onErrorContainer: error.darken(0.1).toString(),
		background: background.toString(),
		onBackground: "#000000",
		surface: surface.toString(),
		onSurface: "#000000",
		surfaceVariant: surfaceVariant.toString(),
		onSurfaceVariant: "#000000",
		outline: outline.toString(),
		outlineVariant: outlineVariant.toString(),
		shadow: "#000000",
		scrim: "#000000",
		inverseSurface: inverseSurface.toString(),
		inverseOnSurface: "#ffffff",
		inversePrimary: inversePrimary.toString(),
		inverseOnPrimary: "#000000",
	};
};

// Generate dark theme colors
const generateDarkTheme = (sourceColor: Color) => {
	const primary = sourceColor;
	const secondary = getComplementaryColor(sourceColor);
	const tertiary = getTriadicColor1(sourceColor);
	const error = getErrorColor();

	// Dark theme: very dark backgrounds (like Material Design)
	const background = new Color("hsl", [sourceColor.to("hsl").h, 0.01, 0.22]); // Very dark
	const surface = new Color("hsl", [sourceColor.to("hsl").h, 0.01, 0.22]); // Very dark
	const surfaceVariant = new Color("hsl", [sourceColor.to("hsl").h, 0.02, 0.4]); // Dark tint
	const outline = new Color("hsl", [sourceColor.to("hsl").h, 0.02, 0.66]); // Light gray
	const outlineVariant = new Color("hsl", [sourceColor.to("hsl").h, 0.02, 0.4]); // Dark gray
	const inverseSurface = new Color("hsl", [
		sourceColor.to("hsl").h,
		0.01,
		0.92,
	]); // Light gray
	const inversePrimary = new Color("hsl", [sourceColor.to("hsl").h, 0.17, 0.5]); // Dark primary

	return {
		primary: primary.toString(),
		onPrimary: "#000000",
		primaryContainer: primary.darken(0.1).toString(),
		onPrimaryContainer: primary.lighten(0.15).toString(),
		secondary: secondary.toString(),
		onSecondary: "#000000",
		secondaryContainer: secondary.darken(0.1).toString(),
		onSecondaryContainer: secondary.lighten(0.15).toString(),
		tertiary: tertiary.toString(),
		onTertiary: "#000000",
		tertiaryContainer: tertiary.darken(0.1).toString(),
		onTertiaryContainer: tertiary.lighten(0.15).toString(),
		error: error.toString(),
		onError: "#000000",
		errorContainer: error.darken(0.1).toString(),
		onErrorContainer: error.lighten(0.15).toString(),
		background: background.toString(),
		onBackground: "#ffffff",
		surface: surface.toString(),
		onSurface: "#ffffff",
		surfaceVariant: surfaceVariant.toString(),
		onSurfaceVariant: "#ffffff",
		outline: outline.toString(),
		outlineVariant: outlineVariant.toString(),
		shadow: "#000000",
		scrim: "#000000",
		inverseSurface: inverseSurface.toString(),
		inverseOnSurface: "#000000",
		inversePrimary: inversePrimary.toString(),
		inverseOnPrimary: "#ffffff",
	};
};

export const harmonyLightDarkTokens = (
	sourceColor: Color,
): AakaarColorScheme => {
	const lightTheme = generateLightTheme(sourceColor);
	const darkTheme = generateDarkTheme(sourceColor);

	// Convert colors to OKLCH format for consistency with Material Design
	const convertToOkLch = (colorStr: string) => {
		if (colorStr.startsWith("#")) {
			return new Color(colorStr).to("oklch").toString({ precision: 2 });
		}
		return colorStr;
	};

	return {
		// Primary colors
		primary: transformColorToToken(
			"primary",
			`light-dark(${convertToOkLch(lightTheme.primary)}, ${convertToOkLch(darkTheme.primary)})`,
		),
		onPrimary: transformColorToToken(
			"onPrimary",
			`light-dark(${convertToOkLch(lightTheme.onPrimary)}, ${convertToOkLch(darkTheme.onPrimary)})`,
		),
		primaryContainer: transformColorToToken(
			"primaryContainer",
			`light-dark(${convertToOkLch(lightTheme.primaryContainer)}, ${convertToOkLch(darkTheme.primaryContainer)})`,
		),
		onPrimaryContainer: transformColorToToken(
			"onPrimaryContainer",
			`light-dark(${convertToOkLch(lightTheme.onPrimaryContainer)}, ${convertToOkLch(darkTheme.onPrimaryContainer)})`,
		),

		// Secondary colors
		secondary: transformColorToToken(
			"secondary",
			`light-dark(${convertToOkLch(lightTheme.secondary)}, ${convertToOkLch(darkTheme.secondary)})`,
		),
		onSecondary: transformColorToToken(
			"onSecondary",
			`light-dark(${convertToOkLch(lightTheme.onSecondary)}, ${convertToOkLch(darkTheme.onSecondary)})`,
		),
		secondaryContainer: transformColorToToken(
			"secondaryContainer",
			`light-dark(${convertToOkLch(lightTheme.secondaryContainer)}, ${convertToOkLch(darkTheme.secondaryContainer)})`,
		),
		onSecondaryContainer: transformColorToToken(
			"onSecondaryContainer",
			`light-dark(${convertToOkLch(lightTheme.onSecondaryContainer)}, ${convertToOkLch(darkTheme.onSecondaryContainer)})`,
		),

		// Tertiary colors
		tertiary: transformColorToToken(
			"tertiary",
			`light-dark(${convertToOkLch(lightTheme.tertiary)}, ${convertToOkLch(darkTheme.tertiary)})`,
		),
		onTertiary: transformColorToToken(
			"onTertiary",
			`light-dark(${convertToOkLch(lightTheme.onTertiary)}, ${convertToOkLch(darkTheme.onTertiary)})`,
		),
		tertiaryContainer: transformColorToToken(
			"tertiaryContainer",
			`light-dark(${convertToOkLch(lightTheme.tertiaryContainer)}, ${convertToOkLch(darkTheme.tertiaryContainer)})`,
		),
		onTertiaryContainer: transformColorToToken(
			"onTertiaryContainer",
			`light-dark(${convertToOkLch(lightTheme.onTertiaryContainer)}, ${convertToOkLch(darkTheme.onTertiaryContainer)})`,
		),

		// Error colors
		error: transformColorToToken(
			"error",
			`light-dark(${convertToOkLch(lightTheme.error)}, ${convertToOkLch(darkTheme.error)})`,
		),
		onError: transformColorToToken(
			"onError",
			`light-dark(${convertToOkLch(lightTheme.onError)}, ${convertToOkLch(darkTheme.onError)})`,
		),
		errorContainer: transformColorToToken(
			"errorContainer",
			`light-dark(${convertToOkLch(lightTheme.errorContainer)}, ${convertToOkLch(darkTheme.errorContainer)})`,
		),
		onErrorContainer: transformColorToToken(
			"onErrorContainer",
			`light-dark(${convertToOkLch(lightTheme.onErrorContainer)}, ${convertToOkLch(darkTheme.onErrorContainer)})`,
		),

		// Background and surface
		background: transformColorToToken(
			"background",
			`light-dark(${convertToOkLch(lightTheme.background)}, ${convertToOkLch(darkTheme.background)})`,
		),
		onBackground: transformColorToToken(
			"onBackground",
			`light-dark(${convertToOkLch(lightTheme.onBackground)}, ${convertToOkLch(darkTheme.onBackground)})`,
		),
		surface: transformColorToToken(
			"surface",
			`light-dark(${convertToOkLch(lightTheme.surface)}, ${convertToOkLch(darkTheme.surface)})`,
		),
		onSurface: transformColorToToken(
			"onSurface",
			`light-dark(${convertToOkLch(lightTheme.onSurface)}, ${convertToOkLch(darkTheme.onSurface)})`,
		),
		surfaceVariant: transformColorToToken(
			"surfaceVariant",
			`light-dark(${convertToOkLch(lightTheme.surfaceVariant)}, ${convertToOkLch(darkTheme.surfaceVariant)})`,
		),
		onSurfaceVariant: transformColorToToken(
			"onSurfaceVariant",
			`light-dark(${convertToOkLch(lightTheme.onSurfaceVariant)}, ${convertToOkLch(darkTheme.onSurfaceVariant)})`,
		),

		// Outline colors
		outline: transformColorToToken(
			"outline",
			`light-dark(${convertToOkLch(lightTheme.outline)}, ${convertToOkLch(darkTheme.outline)})`,
		),
		outlineVariant: transformColorToToken(
			"outlineVariant",
			`light-dark(${convertToOkLch(lightTheme.outlineVariant)}, ${convertToOkLch(darkTheme.outlineVariant)})`,
		),

		// Shadow and scrim
		shadow: transformColorToToken(
			"shadow",
			`light-dark(${convertToOkLch(lightTheme.shadow)}, ${convertToOkLch(darkTheme.shadow)})`,
		),
		scrim: transformColorToToken(
			"scrim",
			`light-dark(${convertToOkLch(lightTheme.scrim)}, ${convertToOkLch(darkTheme.scrim)})`,
		),

		// Inverse colors
		inverseSurface: transformColorToToken(
			"inverseSurface",
			`light-dark(${convertToOkLch(lightTheme.inverseSurface)}, ${convertToOkLch(darkTheme.inverseSurface)})`,
		),
		inverseOnSurface: transformColorToToken(
			"inverseOnSurface",
			`light-dark(${convertToOkLch(lightTheme.inverseOnSurface)}, ${convertToOkLch(darkTheme.inverseOnSurface)})`,
		),
		inversePrimary: transformColorToToken(
			"inversePrimary",
			`light-dark(${convertToOkLch(lightTheme.inversePrimary)}, ${convertToOkLch(darkTheme.inversePrimary)})`,
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
