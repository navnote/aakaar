import {
	type Theme,
	argbFromHex,
	hexFromArgb,
	themeFromSourceColor,
} from "@material/material-color-utilities";
import Color from "colorjs.io";
import type {
	AakaarColorScheme,
	BlackAndWhiteScheme,
	DesignToken,
	PrimaryPalette,
} from "../../../types";
export const theme = (color: string) =>
	themeFromSourceColor(argbFromHex(color));

const transformHexToOkLch = (color: string) => {
	const oklchColor = new Color(color).to("oklch");
	return oklchColor.toString({ precision: 2 });
};

const transformColorToToken = (name: string, color: number): DesignToken => {
	return {
		name: `color-${name}`,
		value: transformHexToOkLch(hexFromArgb(color)),
	};
};

export const lightDarkTokens = (theme: Theme): AakaarColorScheme => {
	const light = Object.fromEntries(
		Object.entries(theme.schemes.light.toJSON()).map(([key, value]) => [
			key,
			transformHexToOkLch(hexFromArgb(value)),
		]),
	);
	const dark = Object.fromEntries(
		Object.entries(theme.schemes.dark.toJSON()).map(([key, value]) => [
			key,
			transformHexToOkLch(hexFromArgb(value)),
		]),
	);

	// return tokens like primary: light-dark(lightValue, darkValue)
	return Object.entries(light).reduce((acc, [colorName, lightToken]) => {
		const darkToken = dark[colorName as keyof typeof dark];
		if (darkToken) {
			acc[colorName as keyof AakaarColorScheme] = {
				name: `color-${colorName}`,
				value: `light-dark(${lightToken}, ${darkToken})`,
			};
		}
		return acc;
	}, {} as AakaarColorScheme);
};

export const primaryPaletteTokens = (theme: Theme): PrimaryPalette => {
	const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100];
	return Object.fromEntries(
		tones.map((tone) => [
			`primary${tone}`,
			transformColorToToken(
				`primary${tone}`,
				theme.palettes.primary.tone(tone),
			),
		]),
	) as PrimaryPalette;
};

export const blackAndWhiteTokens = (): BlackAndWhiteScheme => {
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
