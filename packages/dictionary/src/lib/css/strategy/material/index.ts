import type { ColorStrategyOutput } from "../../../types";
import {
	blackAndWhiteTokens,
	lightDarkTokens,
	primaryPaletteTokens,
	theme,
} from "./material-colors";

export const materialColorStrategy = (color: string): ColorStrategyOutput => {
	const generatedTheme = theme(color);

	return {
		primaryPalette: primaryPaletteTokens(generatedTheme),
		lightDark: lightDarkTokens(generatedTheme),
		blackAndWhite: blackAndWhiteTokens(),
	};
};

// Re-export individual functions for backward compatibility
export {
	blackAndWhiteTokens,
	lightDarkTokens,
	primaryPaletteTokens,
	theme,
} from "./material-colors";
