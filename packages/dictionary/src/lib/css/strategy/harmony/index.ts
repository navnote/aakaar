import type { ColorStrategyOutput } from "../../../types";
import {
	harmonyBlackAndWhiteTokens,
	harmonyLightDarkTokens,
	harmonyPrimaryPaletteTokens,
	theme,
} from "./harmony-colors";

export const harmonyColorStrategy = (color: string): ColorStrategyOutput => {
	const sourceColor = theme(color);

	return {
		primaryPalette: harmonyPrimaryPaletteTokens(sourceColor),
		lightDark: harmonyLightDarkTokens(sourceColor),
		blackAndWhite: harmonyBlackAndWhiteTokens(sourceColor),
	};
};

// Re-export individual functions for backward compatibility
export {
	harmonyBlackAndWhiteTokens,
	harmonyLightDarkTokens,
	harmonyPrimaryPaletteTokens,
	theme,
} from "./harmony-colors";
