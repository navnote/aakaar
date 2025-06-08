import { readFileSync } from "node:fs";
import { REQUIRED_PACKAGES } from "../constants";
import { getPackageManager } from "../utils/pm";

export const verify = async () => {
	console.log("Verifying the required packages");
	const cwd = process.cwd();
	const packageManager = await getPackageManager(cwd);
	console.log(`Using package manager: ${packageManager}`);
	const packageJson = JSON.parse(readFileSync("./package.json", "utf8"));
	const dependencies = packageJson.dependencies;
	const devDependencies = packageJson.devDependencies;
	const allDependencies = { ...dependencies, ...devDependencies };
	const missingDependencies = REQUIRED_PACKAGES.filter(
		(dependency) => !allDependencies[dependency],
	);
	if (missingDependencies.length > 0) {
		console.log("Missing dependencies:");
		console.log(missingDependencies);
	} else {
		console.log("All required packages are installed");
	}
};
