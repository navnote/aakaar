import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createInterface } from "node:readline";
import { Command } from "commander";
import type { AakaarConfig } from "../types";
import { readConfig } from "../utils/config";
import { verify } from "../utils/verify";
export const setup = new Command()
	.name("setup")
	.description("setup the aakaar ui")
	.action(async () => {
		await verify();
		const finalAakaarJson = readConfig();

		const proceed = await new Promise<string>((resolve) => {
			const readline = createInterface({
				input: process.stdin,
				output: process.stdout,
			});

			console.log("Current aakaar.json configuration:");
			console.log(
				`Host: ${finalAakaarJson.host} - The server URL where components are hosted`,
			);
			console.log(
				`Core path: ${finalAakaarJson.core.path} - Where core design system files will be created`,
			);
			console.log(
				`Core import: ${finalAakaarJson.core.import} - How components will import core design system files`,
			);
			console.log(
				`Token color: ${finalAakaarJson.tokens.color} - Primary brand color in hex format`,
			);
			console.log(
				`Token output: ${finalAakaarJson.tokens.output} - Where CSS design tokens will be generated`,
			);
			console.log(
				`React components output: ${finalAakaarJson.react.output} - Where React components will be created`,
			);

			readline.question(
				"Press y to proceed with the paths specified in aakaar.json or n to cancel and edit aakaar.json: ",
				(answer: string) => {
					readline.close();
					resolve(answer.toLowerCase());
				},
			);
		});

		if (proceed !== "y") {
			console.log(
				"Setup cancelled. Run the setup command again to configure the project. You can also edit the aakaar.json file to change the paths, it will not be overwritten.",
			);
			return;
		}

		// Create a core.ts file based on the location of the components.
		const hostUrl = finalAakaarJson.host;
		const coreFile = await fetch(`${hostUrl}/registry/core.json`);
		const coreFileJson = (await coreFile.json()) as {
			files: Array<{ name: string; content: string }>;
		};
		const firstCoreFile = coreFileJson.files[0];
		const corePath = `${finalAakaarJson.core.path}`;
		if (!existsSync(corePath)) {
			mkdirSync(corePath, { recursive: true });
		}
		writeFileSync(`${corePath}/${firstCoreFile.name}`, firstCoreFile.content, {
			encoding: "utf-8",
			flag: "w",
		});
		console.log("Core file created successfully");
		console.log("Setup completed successfully");
	});
