import { existsSync, readFileSync } from "node:fs";
import type { AakaarConfig } from "../types";

const CONFIG_FILE = "./aakaar.json";

export const config: AakaarConfig = existsSync(CONFIG_FILE)
	? JSON.parse(readFileSync(CONFIG_FILE, "utf-8"))
	: ({
			tokens: {
				color: "006875",
				output: "./css",
			},
			react: {
				output: "./react/components",
			},
		} as AakaarConfig);
