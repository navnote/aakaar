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

const calculateContrastRatio = (color1: Color, color2: Color): number => {
	const lum1 = color1.luminance + 0.05;
	const lum2 = color2.luminance + 0.05;
	return Math.max(lum1, lum2) / Math.min(lum1, lum2);
};

const ensureWCAGContrast = (
	foreground: Color,
	background: Color,
	targetRatio = 4.5,
): Color => {
	const contrast = calculateContrastRatio(foreground, background);
	let adjustedForeground = foreground.clone();

	if (contrast < targetRatio) {
		const bgLuminance = background.luminance;
		const targetLuminance =
			bgLuminance > 0.5
				? Math.max(0, (bgLuminance + 0.05) / targetRatio - 0.05)
				: (bgLuminance + 0.05) * targetRatio - 0.05;

		const oklch = adjustedForeground.to("oklch");
		const targetL = Math.sqrt(targetLuminance);
		adjustedForeground = new Color("oklch", [
			Math.max(0, Math.min(1, targetL)),
			oklch.c,
			oklch.h || 0,
		]);
	}

	return adjustedForeground;
};

const transformHexToOkLch = (color: string) => {
	if (color.startsWith("light-dark(")) {
		return color;
	}

	const oklchColor = new Color(color).to("oklch");
	return oklchColor.toString({ precision: 3 });
};

const transformColorToToken = (name: string, color: string): DesignToken => {
	return {
		name: `color-${name}`,
		value: transformHexToOkLch(color),
	};
};

const generateHarmoniousHue = (
	baseHue: number,
	harmonyType:
		| "analogous"
		| "complementary"
		| "triadic"
		| "split-complementary",
	index = 0,
): number => {
	switch (harmonyType) {
		case "analogous":
			return (baseHue + index * 30 + 360) % 360;
		case "complementary":
			return (baseHue + 180) % 360;
		case "triadic":
			return (baseHue + index * 120) % 360;
		case "split-complementary":
			return index === 0 ? (baseHue + 150) % 360 : (baseHue + 210) % 360;
		default:
			return baseHue;
	}
};

const optimizeLightnessForContrast = (
	lightness: number,
	chroma: number,
	isLight: boolean,
): number => {
	if (isLight) {
		return Math.max(0.25, Math.min(0.65, lightness - chroma * 0.3));
	}
	return Math.max(0.35, Math.min(0.8, lightness + chroma * 0.4));
};

const generateOptimalChroma = (
	baseChroma: number,
	purpose: "primary" | "secondary" | "tertiary" | "neutral",
): number => {
	const chromaMap = {
		primary: Math.max(0.15, Math.min(0.37, baseChroma)),
		secondary: Math.max(0.12, Math.min(0.32, baseChroma * 0.85)),
		tertiary: Math.max(0.1, Math.min(0.28, baseChroma * 0.75)),
		neutral: Math.max(0.005, Math.min(0.04, baseChroma * 0.2)),
	};
	return chromaMap[purpose];
};

export const harmonyLightDarkTokens = (
	sourceColor: Color,
): AakaarColorScheme => {
	const baseColor = sourceColor;
	const baseOklch = baseColor.to("oklch");
	const baseHue = Number.isNaN(baseOklch.h) ? 240 : baseOklch.h;
	const baseChroma = Math.max(baseOklch.c, 0.1);
	const baseLightness = baseOklch.l;

	// Generate optimized primary colors
	const primaryChroma = generateOptimalChroma(baseChroma, "primary");
	const primaryLightLightness = optimizeLightnessForContrast(
		baseLightness,
		primaryChroma,
		true,
	);
	const primaryDarkLightness = optimizeLightnessForContrast(
		baseLightness,
		primaryChroma,
		false,
	);

	let lightPrimary = new Color("oklch", [
		primaryLightLightness,
		primaryChroma,
		baseHue,
	]);
	let darkPrimary = new Color("oklch", [
		primaryDarkLightness,
		primaryChroma,
		baseHue,
	]);

	// Fallback for edge cases
	if (lightPrimary.to("oklch").l > 0.8 || lightPrimary.to("oklch").c < 0.08) {
		lightPrimary = new Color("oklch", [0.5, 0.2, 240]);
		darkPrimary = new Color("oklch", [0.7, 0.2, 240]);
	}

	// Generate harmonious secondary colors using analogous harmony
	const secondaryHue = generateHarmoniousHue(baseHue, "analogous", 1);
	const secondaryChroma = generateOptimalChroma(baseChroma, "secondary");
	const lightSecondary = new Color("oklch", [
		optimizeLightnessForContrast(baseLightness, secondaryChroma, true),
		secondaryChroma,
		secondaryHue,
	]);
	const darkSecondary = new Color("oklch", [
		optimizeLightnessForContrast(baseLightness, secondaryChroma, false),
		secondaryChroma,
		secondaryHue,
	]);

	// Generate tertiary colors using analogous harmony (opposite direction from secondary)
	const tertiaryHue = generateHarmoniousHue(baseHue, "analogous", -1);
	const tertiaryChroma = generateOptimalChroma(baseChroma, "tertiary");
	const lightTertiary = new Color("oklch", [
		optimizeLightnessForContrast(baseLightness, tertiaryChroma, true),
		tertiaryChroma,
		tertiaryHue,
	]);
	const darkTertiary = new Color("oklch", [
		optimizeLightnessForContrast(baseLightness, tertiaryChroma, false),
		tertiaryChroma,
		tertiaryHue,
	]);

	// Optimized error colors with better accessibility
	const errorChroma = Math.max(0.18, Math.min(0.35, baseChroma));
	const lightError = new Color("oklch", [0.55, errorChroma, 25]);
	const darkError = new Color("oklch", [0.75, errorChroma, 25]);

	// Enhanced background and surface colors with subtle tinting
	const neutralChroma = generateOptimalChroma(baseChroma, "neutral");
	const lightBackground = new Color("oklch", [
		0.99,
		neutralChroma * 0.5,
		baseHue,
	]);
	const darkBackground = new Color("oklch", [
		0.08,
		neutralChroma * 1.5,
		baseHue,
	]);
	const lightSurface = new Color("oklch", [0.98, neutralChroma * 0.8, baseHue]);
	const darkSurface = new Color("oklch", [0.11, neutralChroma * 1.2, baseHue]);

	// Optimized container colors with better visual hierarchy
	const lightPrimaryContainer = new Color("oklch", [
		0.95,
		primaryChroma * 0.3,
		baseHue,
	]);
	const darkPrimaryContainer = new Color("oklch", [
		0.2,
		primaryChroma * 0.8,
		baseHue,
	]);

	const lightSecondaryContainer = new Color("oklch", [
		0.94,
		secondaryChroma * 0.25,
		secondaryHue,
	]);
	const darkSecondaryContainer = new Color("oklch", [
		0.18,
		secondaryChroma * 0.75,
		secondaryHue,
	]);

	const lightTertiaryContainer = new Color("oklch", [
		0.93,
		tertiaryChroma * 0.2,
		tertiaryHue,
	]);
	const darkTertiaryContainer = new Color("oklch", [
		0.16,
		tertiaryChroma * 0.7,
		tertiaryHue,
	]);

	// Enhanced error containers
	const lightErrorContainer = new Color("oklch", [
		0.96,
		errorChroma * 0.15,
		25,
	]);
	const darkErrorContainer = new Color("oklch", [0.22, errorChroma * 0.6, 25]);

	// Improved surface variants
	const lightSurfaceVariant = new Color("oklch", [
		0.96,
		neutralChroma * 1.2,
		baseHue,
	]);
	const darkSurfaceVariant = new Color("oklch", [
		0.18,
		neutralChroma * 2,
		baseHue,
	]);

	// Better outline colors with improved contrast
	const lightOutline = new Color("oklch", [0.72, neutralChroma * 3, baseHue]);
	const darkOutline = new Color("oklch", [0.68, neutralChroma * 3, baseHue]);
	const lightOutlineVariant = new Color("oklch", [
		0.88,
		neutralChroma * 2,
		baseHue,
	]);
	const darkOutlineVariant = new Color("oklch", [
		0.35,
		neutralChroma * 2,
		baseHue,
	]);

	// Enhanced inverse colors
	const lightInverseSurface = new Color("oklch", [
		0.15,
		neutralChroma * 1.5,
		baseHue,
	]);
	const darkInverseSurface = new Color("oklch", [
		0.92,
		neutralChroma * 0.8,
		baseHue,
	]);
	const lightInversePrimary = new Color("oklch", [
		0.85,
		primaryChroma * 0.6,
		baseHue,
	]);
	const darkInversePrimary = new Color("oklch", [
		0.45,
		primaryChroma * 0.9,
		baseHue,
	]);

	const generateContrastingOnColor = (
		lightBg: Color,
		darkBg: Color,
	): string => {
		const lightBgL = lightBg.to("oklch").l;
		const darkBgL = darkBg.to("oklch").l;

		const lightForeground = lightBgL > 0.6 ? "#000000" : "#ffffff";
		const darkForeground = darkBgL > 0.6 ? "#000000" : "#ffffff";

		return `light-dark(${lightForeground}, ${darkForeground})`;
	};

	return {
		// Primary colors - the main brand color with enhanced contrast
		primary: transformColorToToken(
			"primary",
			`light-dark(${lightPrimary.toString({ format: "hex" })}, ${darkPrimary.toString({ format: "hex" })})`,
		),
		onPrimary: transformColorToToken(
			"onPrimary",
			generateContrastingOnColor(lightPrimary, darkPrimary),
		),
		primaryContainer: transformColorToToken(
			"primaryContainer",
			`light-dark(${lightPrimaryContainer.toString({ format: "hex" })}, ${darkPrimaryContainer.toString({ format: "hex" })})`,
		),
		onPrimaryContainer: transformColorToToken(
			"onPrimaryContainer",
			generateContrastingOnColor(lightPrimaryContainer, darkPrimaryContainer),
		),

		// Secondary colors - harmonious supporting accent
		secondary: transformColorToToken(
			"secondary",
			`light-dark(${lightSecondary.toString({ format: "hex" })}, ${darkSecondary.toString({ format: "hex" })})`,
		),
		onSecondary: transformColorToToken(
			"onSecondary",
			generateContrastingOnColor(lightSecondary, darkSecondary),
		),
		secondaryContainer: transformColorToToken(
			"secondaryContainer",
			`light-dark(${lightSecondaryContainer.toString({ format: "hex" })}, ${darkSecondaryContainer.toString({ format: "hex" })})`,
		),
		onSecondaryContainer: transformColorToToken(
			"onSecondaryContainer",
			generateContrastingOnColor(
				lightSecondaryContainer,
				darkSecondaryContainer,
			),
		),

		// Tertiary colors - split-complementary accent
		tertiary: transformColorToToken(
			"tertiary",
			`light-dark(${lightTertiary.toString({ format: "hex" })}, ${darkTertiary.toString({ format: "hex" })})`,
		),
		onTertiary: transformColorToToken(
			"onTertiary",
			generateContrastingOnColor(lightTertiary, darkTertiary),
		),
		tertiaryContainer: transformColorToToken(
			"tertiaryContainer",
			`light-dark(${lightTertiaryContainer.toString({ format: "hex" })}, ${darkTertiaryContainer.toString({ format: "hex" })})`,
		),
		onTertiaryContainer: transformColorToToken(
			"onTertiaryContainer",
			generateContrastingOnColor(lightTertiaryContainer, darkTertiaryContainer),
		),

		// Error colors - accessibility optimized
		error: transformColorToToken(
			"error",
			`light-dark(${lightError.toString({ format: "hex" })}, ${darkError.toString({ format: "hex" })})`,
		),
		onError: transformColorToToken(
			"onError",
			generateContrastingOnColor(lightError, darkError),
		),
		errorContainer: transformColorToToken(
			"errorContainer",
			`light-dark(${lightErrorContainer.toString({ format: "hex" })}, ${darkErrorContainer.toString({ format: "hex" })})`,
		),
		onErrorContainer: transformColorToToken(
			"onErrorContainer",
			generateContrastingOnColor(lightErrorContainer, darkErrorContainer),
		),

		// Background and surface colors with subtle tinting
		background: transformColorToToken(
			"background",
			`light-dark(${lightBackground.toString({ format: "hex" })}, ${darkBackground.toString({ format: "hex" })})`,
		),
		onBackground: transformColorToToken(
			"onBackground",
			generateContrastingOnColor(lightBackground, darkBackground),
		),
		surface: transformColorToToken(
			"surface",
			`light-dark(${lightSurface.toString({ format: "hex" })}, ${darkSurface.toString({ format: "hex" })})`,
		),
		onSurface: transformColorToToken(
			"onSurface",
			generateContrastingOnColor(lightSurface, darkSurface),
		),
		surfaceVariant: transformColorToToken(
			"surfaceVariant",
			`light-dark(${lightSurfaceVariant.toString({ format: "hex" })}, ${darkSurfaceVariant.toString({ format: "hex" })})`,
		),
		onSurfaceVariant: transformColorToToken(
			"onSurfaceVariant",
			generateContrastingOnColor(lightSurfaceVariant, darkSurfaceVariant),
		),

		// Outline colors with enhanced visibility
		outline: transformColorToToken(
			"outline",
			`light-dark(${lightOutline.toString({ format: "hex" })}, ${darkOutline.toString({ format: "hex" })})`,
		),
		outlineVariant: transformColorToToken(
			"outlineVariant",
			`light-dark(${lightOutlineVariant.toString({ format: "hex" })}, ${darkOutlineVariant.toString({ format: "hex" })})`,
		),

		// Shadow and scrim - optimized for depth perception
		shadow: transformColorToToken(
			"shadow",
			"light-dark(oklch(0 0 0 / 0.2), oklch(0 0 0 / 0.4))",
		),
		scrim: transformColorToToken(
			"scrim",
			"light-dark(oklch(0 0 0 / 0.4), oklch(0 0 0 / 0.6))",
		),

		// Inverse colors with proper contrast
		inverseSurface: transformColorToToken(
			"inverseSurface",
			`light-dark(${lightInverseSurface.toString({ format: "hex" })}, ${darkInverseSurface.toString({ format: "hex" })})`,
		),
		inverseOnSurface: transformColorToToken(
			"inverseOnSurface",
			generateContrastingOnColor(lightInverseSurface, darkInverseSurface),
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
	const sourceOklch = sourceColor.to("oklch");
	const baseHue = Number.isNaN(sourceOklch.h) ? 240 : sourceOklch.h;
	const baseChroma = Math.max(sourceOklch.c, 0.1);

	// Create a more sophisticated tone mapping for better visual progression
	const generateToneColor = (tone: number): string => {
		let lightness: number;
		let chroma: number;

		if (tone === 0) {
			lightness = 0;
			chroma = 0;
		} else if (tone === 100) {
			lightness = 1;
			chroma = 0;
		} else {
			// Use a cubic easing function for more natural lightness progression
			lightness = (tone / 100) ** 0.8;

			// Adjust chroma based on tone for better color vibrancy
			// Peak chroma around 50-60 tone, reduce for very light/dark tones
			const chromaMultiplier =
				tone < 20 || tone > 90
					? 0.3 + 0.7 * Math.sin((tone / 100) * Math.PI)
					: 0.8 + 0.2 * Math.sin((tone / 100) * Math.PI);

			chroma = baseChroma * chromaMultiplier;
		}

		const color = new Color("oklch", [lightness, chroma, baseHue]);
		return color.toString({ format: "hex" });
	};

	return Object.fromEntries(
		tones.map((tone) => [
			`primary${tone}`,
			transformColorToToken(`primary${tone}`, generateToneColor(tone)),
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
