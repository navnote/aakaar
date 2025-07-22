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

export const harmonyLightDarkTokens = (
	sourceColor: Color,
): AakaarColorScheme => {
	// Start with the source color as our base
	const baseColor = sourceColor;
	const baseOklch = baseColor.to("oklch");
	const baseHue = Number.isNaN(baseOklch.h) ? 0 : baseOklch.h;
	const baseChroma = baseOklch.c;
	const baseLightness = baseOklch.l;

	// Generate a harmonious palette with strong guarantees for visibility
	// Primary: Create separate light and dark versions
	const primaryLightness = Math.min(baseLightness, 0.55); // Much stricter limit
	const primaryChroma = Math.max(baseChroma, 0.18); // Higher minimum saturation
	let lightPrimary = new Color("oklch", [
		primaryLightness,
		primaryChroma,
		baseHue,
	]);
	let darkPrimary = new Color("oklch", [
		Math.max(primaryLightness - 0.1, 0.45),
		primaryChroma,
		baseHue,
	]);

	// Fallback: If primary is still too light (close to white), use a default blue
	const lightPrimaryOklch = lightPrimary.to("oklch");
	if (lightPrimaryOklch.l > 0.8 || lightPrimaryOklch.c < 0.1) {
		console.warn("Primary color too light, using fallback blue");
		lightPrimary = new Color("oklch", [0.55, 0.18, 240]); // Default blue
		darkPrimary = new Color("oklch", [0.45, 0.18, 240]); // Darker blue
	}

	// Secondary: Analogous color (30° away) - separate light and dark
	const secondaryHue = (baseHue + 30) % 360;
	const lightSecondary = new Color("oklch", [
		primaryLightness,
		primaryChroma * 0.8,
		secondaryHue,
	]);
	const darkSecondary = new Color("oklch", [
		Math.max(primaryLightness - 0.1, 0.45),
		primaryChroma * 0.8,
		secondaryHue,
	]);

	// Tertiary: Closer analogous color (60° away) - separate light and dark
	const tertiaryHue = (baseHue + 60) % 360;
	const lightTertiary = new Color("oklch", [
		primaryLightness,
		primaryChroma * 0.7,
		tertiaryHue,
	]);
	const darkTertiary = new Color("oklch", [
		Math.max(primaryLightness - 0.1, 0.45),
		primaryChroma * 0.7,
		tertiaryHue,
	]);

	// Error: Always a red, but harmonized - separate light and dark
	const lightError = new Color("oklch", [
		0.6,
		Math.max(primaryChroma * 0.9, 0.15),
		25,
	]);
	const darkError = new Color("oklch", [
		0.5,
		Math.max(primaryChroma * 0.9, 0.15),
		25,
	]);

	// Background and Surface colors
	const lightBackground = new Color("oklch", [0.98, 0.005, baseHue]);
	const darkBackground = new Color("oklch", [0.12, 0.01, baseHue]);

	const lightSurface = new Color("oklch", [0.96, 0.01, baseHue]);
	const darkSurface = new Color("oklch", [0.15, 0.01, baseHue]);

	// Container colors - lighter versions of their base colors
	const lightPrimaryContainer = new Color("oklch", [
		0.9,
		primaryChroma * 0.4,
		baseHue,
	]);
	const darkPrimaryContainer = new Color("oklch", [
		0.25,
		primaryChroma * 0.6,
		baseHue,
	]);

	const lightSecondaryContainer = new Color("oklch", [
		0.89,
		primaryChroma * 0.35,
		secondaryHue,
	]);
	const darkSecondaryContainer = new Color("oklch", [
		0.23,
		primaryChroma * 0.55,
		secondaryHue,
	]);

	const lightTertiaryContainer = new Color("oklch", [
		0.88,
		primaryChroma * 0.3,
		tertiaryHue,
	]);
	const darkTertiaryContainer = new Color("oklch", [
		0.22,
		primaryChroma * 0.5,
		tertiaryHue,
	]);

	// Error container
	const lightErrorContainer = new Color("oklch", [0.95, 0.05, 25]);
	const darkErrorContainer = new Color("oklch", [0.25, 0.15, 25]);

	// Surface variant
	const lightSurfaceVariant = new Color("oklch", [0.93, 0.012, baseHue]);
	const darkSurfaceVariant = new Color("oklch", [0.25, 0.02, baseHue]);

	// Outline colors
	const lightOutline = new Color("oklch", [0.65, 0.03, baseHue]);
	const darkOutline = new Color("oklch", [0.75, 0.03, baseHue]);
	const lightOutlineVariant = new Color("oklch", [0.88, 0.015, baseHue]);
	const darkOutlineVariant = new Color("oklch", [0.4, 0.015, baseHue]);

	// Inverse colors
	const lightInverseSurface = new Color("oklch", [0.25, 0.02, baseHue]);
	const darkInverseSurface = new Color("oklch", [0.9, 0.02, baseHue]);
	const lightInversePrimary = new Color("oklch", [0.9, 0.1, baseHue]);
	const darkInversePrimary = new Color("oklch", [0.6, 0.15, baseHue]);

	// Helper function to calculate "on" colors with proper contrast for both light and dark
	function calculateOnColor(
		lightBackground: Color,
		darkBackground: Color,
	): string {
		const lightBgOklch = lightBackground.to("oklch");
		const darkBgOklch = darkBackground.to("oklch");

		// For light-dark function, we need to return a single value that works for both
		// Since we're using light-dark(), we'll use the light mode calculation as the base
		// and let the CSS light-dark() function handle the switching
		return lightBgOklch.l > 0.6 ? "#000000" : "#ffffff";
	}

	return {
		// Primary colors - the main brand color
		primary: transformColorToToken(
			"primary",
			`light-dark(${lightPrimary.toString({ format: "hex" })}, ${darkPrimary.toString({ format: "hex" })})`,
		),
		onPrimary: transformColorToToken(
			"onPrimary",
			"light-dark(#ffffff, #000000)",
		),
		primaryContainer: transformColorToToken(
			"primaryContainer",
			`light-dark(${lightPrimaryContainer.toString({ format: "hex" })}, ${darkPrimaryContainer.toString({ format: "hex" })})`,
		),
		onPrimaryContainer: transformColorToToken(
			"onPrimaryContainer",
			"light-dark(#000000, #ffffff)",
		),

		// Secondary colors - supporting accent
		secondary: transformColorToToken(
			"secondary",
			`light-dark(${lightSecondary.toString({ format: "hex" })}, ${darkSecondary.toString({ format: "hex" })})`,
		),
		onSecondary: transformColorToToken(
			"onSecondary",
			"light-dark(#ffffff, #000000)",
		),
		secondaryContainer: transformColorToToken(
			"secondaryContainer",
			`light-dark(${lightSecondaryContainer.toString({ format: "hex" })}, ${darkSecondaryContainer.toString({ format: "hex" })})`,
		),
		onSecondaryContainer: transformColorToToken(
			"onSecondaryContainer",
			"light-dark(#000000, #ffffff)",
		),

		// Tertiary colors - additional accent
		tertiary: transformColorToToken(
			"tertiary",
			`light-dark(${lightTertiary.toString({ format: "hex" })}, ${darkTertiary.toString({ format: "hex" })})`,
		),
		onTertiary: transformColorToToken(
			"onTertiary",
			"light-dark(#ffffff, #000000)",
		),
		tertiaryContainer: transformColorToToken(
			"tertiaryContainer",
			`light-dark(${lightTertiaryContainer.toString({ format: "hex" })}, ${darkTertiaryContainer.toString({ format: "hex" })})`,
		),
		onTertiaryContainer: transformColorToToken(
			"onTertiaryContainer",
			"light-dark(#000000, #ffffff)",
		),

		// Error colors - for error states
		error: transformColorToToken(
			"error",
			`light-dark(${lightError.toString({ format: "hex" })}, ${darkError.toString({ format: "hex" })})`,
		),
		onError: transformColorToToken("onError", "light-dark(#ffffff, #000000)"),
		errorContainer: transformColorToToken(
			"errorContainer",
			`light-dark(${lightErrorContainer.toString({ format: "hex" })}, ${darkErrorContainer.toString({ format: "hex" })})`,
		),
		onErrorContainer: transformColorToToken(
			"onErrorContainer",
			"light-dark(#000000, #ffffff)",
		),

		// Background and surface colors
		background: transformColorToToken(
			"background",
			`light-dark(${lightBackground.toString({ format: "hex" })}, ${darkBackground.toString({ format: "hex" })})`,
		),
		onBackground: transformColorToToken(
			"onBackground",
			"light-dark(#000000, #ffffff)",
		),
		surface: transformColorToToken(
			"surface",
			`light-dark(${lightSurface.toString({ format: "hex" })}, ${darkSurface.toString({ format: "hex" })})`,
		),
		onSurface: transformColorToToken(
			"onSurface",
			"light-dark(#000000, #ffffff)",
		),
		surfaceVariant: transformColorToToken(
			"surfaceVariant",
			`light-dark(${lightSurfaceVariant.toString({ format: "hex" })}, ${darkSurfaceVariant.toString({ format: "hex" })})`,
		),
		onSurfaceVariant: transformColorToToken(
			"onSurfaceVariant",
			"light-dark(#000000, #ffffff)",
		),

		// Outline colors
		outline: transformColorToToken(
			"outline",
			`light-dark(${lightOutline.toString({ format: "hex" })}, ${darkOutline.toString({ format: "hex" })})`,
		),
		outlineVariant: transformColorToToken(
			"outlineVariant",
			`light-dark(${lightOutlineVariant.toString({ format: "hex" })}, ${darkOutlineVariant.toString({ format: "hex" })})`,
		),

		// Shadow and scrim
		shadow: transformColorToToken("shadow", "#000000"),
		scrim: transformColorToToken("scrim", "#000000"),

		// Inverse colors
		inverseSurface: transformColorToToken(
			"inverseSurface",
			`light-dark(${lightInverseSurface.toString({ format: "hex" })}, ${darkInverseSurface.toString({ format: "hex" })})`,
		),
		inverseOnSurface: transformColorToToken(
			"inverseOnSurface",
			"light-dark(#ffffff, #000000)",
		),
		inversePrimary: transformColorToToken(
			"inversePrimary",
			`light-dark(${lightInversePrimary.toString({ format: "hex" })}, ${darkInversePrimary.toString({ format: "hex" })})`,
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
