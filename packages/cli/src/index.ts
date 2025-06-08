#!/usr/bin/env node

import { Command } from "commander";
import { add } from "./lib/operations/commands/add";
import { setup } from "./lib/operations/commands/setup";
import { token } from "./lib/operations/commands/token";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
	const program = new Command()
		.name("Aakaar UI")
		.description("Build design system for your project");
	program.addCommand(token);
	program.addCommand(add);
	program.addCommand(setup);
	program.parse();
}

main();
