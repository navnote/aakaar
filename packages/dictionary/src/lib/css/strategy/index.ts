import type { ColorStrategyOutput } from "../../types";
import { harmonyColorStrategy } from "./harmony";
import { materialColorStrategy } from "./material";

export type ColorStrategy = "material" | "harmony";

export const colorStrategy = (
	strategy: ColorStrategy,
	color: string,
): ColorStrategyOutput => {
	switch (strategy) {
		case "material": {
			return materialColorStrategy(color);
		}
		case "harmony": {
			return harmonyColorStrategy(color);
		}
		default:
			throw new Error(`Unknown color strategy: ${strategy}`);
	}
};
