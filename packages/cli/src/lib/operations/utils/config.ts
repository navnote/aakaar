import { existsSync, readFileSync, writeFileSync } from "node:fs";
import type { AakaarConfig } from "../types";

const CONFIG_FILE = "./aakaar.json";

const DEFAULT_CONFIG: AakaarConfig = {
	host: "http://aakaar.navnote.com",
	core: {
		path: "src/design",
		import: "../../core",
	},
	tokens: {
		color: "a42700",
		strategy: "harmony",
		output: "src/design/css",
	},
	react: {
		output: "src/design/components",
	},
};
export const config = existsSync(CONFIG_FILE)
	? JSON.parse(readFileSync(CONFIG_FILE, "utf-8"))
	: DEFAULT_CONFIG;

export const writeConfig = (config: AakaarConfig) => {
	writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
};

export const readConfig = (): AakaarConfig => {
	if (existsSync(CONFIG_FILE)) {
		return JSON.parse(readFileSync(CONFIG_FILE, "utf-8"));
	}
	writeConfig(DEFAULT_CONFIG);
	return DEFAULT_CONFIG;
};
