import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { Command } from "commander";
import { execa } from "execa";
import { config } from "../utils/config";
import { getPackageManager } from "../utils/pm";
import type { ComponentRegistry } from "@aakaar/global";
const hostUrl = config.host ?? "https://aakaar.navnote.com";
const baseUrl = `${hostUrl}/registry`;

export const add = new Command()
	.name("add")
	.description("add component to your project")
	.argument("<component>", "Component name to add. Example button, card, etc.")
	.option("-o, --output <output>", "Output path for generated tokens.")
	.action(async (component: string, { output }: { output: string }) => {
		const cwd = process.cwd();
		const packageManager = await getPackageManager(cwd);
		console.log(`Using package manager: ${packageManager}`);
		const finalOutput = output || config.react.output;
		const finalComponentOutput = `${finalOutput}/${component}`;
		if (!existsSync(finalComponentOutput)) {
			console.log("Creating directory: ", finalComponentOutput);
			mkdirSync(finalComponentOutput, {
				recursive: true,
			});
		}
		const componentUrl = `${baseUrl}/${component}.json`;
		console.log(`Fetching component from ${componentUrl}`);
		const response = await fetch(componentUrl);
		const componentConfig = (await response.json()) as ComponentRegistry;

		if (componentConfig.dependencies) {
			await execa(
				packageManager,
				[
					packageManager === "npm" ? "install" : "add",
					...componentConfig.dependencies,
				],
				{
					cwd,
				},
			);
		}

		if (componentConfig.files.length > 0) {
			for (const file of componentConfig.files) {
				const filePath = `${finalComponentOutput}/${file.name}`;
				console.log(`Writing file: ${filePath}`);
				file.content = file.content.replace(
					"../../core/core",
					`${config.core.import}`,
				);
				writeFileSync(filePath, file.content, {
					encoding: "utf8",
					flag: "w",
				});
			}
		}
	});
