import type { PackageManager } from "@aakaar/global";

export type CodeArguments = {
	code: string;
	lang?: string;
	isCli?: boolean;
	jsScript?: {
		isInstall?: boolean;
		isBinary?: boolean;
	};
	pm?: PackageManager;
};
