import type { ColorStrategyOutput } from "../../types";
import { materialColorStrategy } from "./material";

export type ColorStrategy = "material";

export const colorStrategy = (
	strategy: ColorStrategy,
	color: string,
): ColorStrategyOutput => {
	switch (strategy) {
		case "material": {
			return materialColorStrategy(color);
		}
		default:
			throw new Error(`Unknown color strategy: ${strategy}`);
	}
};
