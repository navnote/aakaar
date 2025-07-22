import type { ColorStrategy } from "@aakaar/dictionary";

export type AakaarConfig = {
	host: string; // The host of the aakaar server
	core: {
		path: string; // The path to the core files
		import: string; // The import path from where to import the core file
	};
	tokens: {
		color: string; // The source color of the tokens
		strategy: ColorStrategy; // The strategy to use for the tokens
		output: string; // The output path for the tokens
	};
	react: {
		output: string; // The output path for the react components
	};
};
