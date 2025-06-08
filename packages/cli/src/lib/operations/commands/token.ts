import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { runCss } from "@aakaar/dictionary";
import { Command } from "commander";
import { config } from "../utils/config";
import { verify } from "../utils/verify";

export const token = new Command()
	.name("token")
	.description("build design tokens for your project")
	.option(
		"-c, --color <color>",
		"Hex code of the source color, example, 006875. If it is not provided, the default color is used i.e. 006875",
	)
	.option("-o, --output <output>", "Output path for generated tokens.")
	.action(async ({ color, output }) => {
		verify();
		const finalColor = color || config.tokens.color;
		const finalOutput = output || config.tokens.output;
		console.log(`Generating tokens for color: ${finalColor}`);
		const cssOutput = runCss(`#${finalColor}`);
		if (!existsSync(finalOutput)) {
			mkdirSync(finalOutput, {
				recursive: true,
			});
		}
		writeFileSync(`${finalOutput}/tokens.css`, cssOutput, {
			encoding: "utf8",
			flag: "w",
		});
		console.log(`Tokens generated at ${finalOutput}/tokens.css 🚀`);
		console.log(`Don't forget to include the generated CSS in your project!`);
		console.log(`@import './<path>/tokens.css';\n`);
	});
