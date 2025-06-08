#!/usr/bin/env node

import {
	type Theme,
	argbFromHex,
	hexFromArgb,
	themeFromSourceColor,
} from "@material/material-color-utilities";
import Color from "colorjs.io";
import type { DesignToken } from "../types";
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

export const lightTokens = (theme: Theme) =>
	Object.entries(theme.schemes.light.toJSON()).map(([colorName, colorValue]) =>
		transformColorToToken(colorName, colorValue),
	);

export const darkTokens = (theme: Theme) =>
	Object.entries(theme.schemes.dark.toJSON()).map(([colorName, colorValue]) =>
		transformColorToToken(colorName, colorValue),
	);

export const lightDarkTokens = (theme: Theme) => {
	const light = lightTokens(theme);
	const dark = darkTokens(theme);
	// return tokens like primary: light-dark(lightValue, darkValue)
	return light.map((lightToken, index) => ({
		name: lightToken.name,
		value: `light-dark(${lightToken.value}, ${dark[index].value})`,
	}));
};

export const primaryPaletteTokens = (theme: Theme) => {
	const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100];
	return tones.map((tone) =>
		transformColorToToken(`primary${tone}`, theme.palettes.primary.tone(tone)),
	);
};
