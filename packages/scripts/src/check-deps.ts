#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

// Get the root directory by going up from the current file location
const rootDir = path.resolve(__dirname, "../../..");

interface PackageJson {
	name?: string;
	version?: string;
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
}

interface DependencyVersion {
	version: string;
	files: string[];
}

interface Inconsistency {
	dependency: string;
	versions: string;
}

function findPackageJsonFiles(dir: string): string[] {
	const files: string[] = [];

	function scan(currentDir: string): void {
		const items = fs.readdirSync(currentDir);

		for (const item of items) {
			const fullPath = path.join(currentDir, item);
			const stat = fs.statSync(fullPath);

			if (
				stat.isDirectory() &&
				!item.startsWith(".") &&
				item !== "node_modules"
			) {
				if (fs.existsSync(path.join(fullPath, "package.json"))) {
					files.push(path.join(fullPath, "package.json"));
				}
				scan(fullPath);
			}
		}
	}

	scan(dir);
	return files;
}

function parsePackageJson(filePath: string): PackageJson | null {
	try {
		const content = fs.readFileSync(filePath, "utf8");
		return JSON.parse(content);
	} catch (error) {
		console.error(`Error parsing ${filePath}:`, (error as Error).message);
		return null;
	}
}

function getAllDependencies(pkg: PackageJson): Record<string, string> {
	const deps: Record<string, string> = {};

	if (pkg.dependencies) {
		Object.assign(deps, pkg.dependencies);
	}

	if (pkg.devDependencies) {
		Object.assign(deps, pkg.devDependencies);
	}

	return deps;
}

function checkDependencyVersions(): Inconsistency[] {
	const packageFiles = findPackageJsonFiles(rootDir);
	const dependencyVersions = new Map<string, Map<string, string[]>>();
	const inconsistencies: Inconsistency[] = [];

	// Collect all dependency versions
	for (const file of packageFiles) {
		const pkg = parsePackageJson(file);
		if (!pkg) continue;

		const relativePath = path.relative(rootDir, file);
		const deps = getAllDependencies(pkg);

		for (const [name, version] of Object.entries(deps)) {
			if (!dependencyVersions.has(name)) {
				dependencyVersions.set(name, new Map());
			}

			const versions = dependencyVersions.get(name);
			if (!versions) continue;

			if (!versions.has(version)) {
				versions.set(version, []);
			}
			const files = versions.get(version);
			if (files) {
				files.push(relativePath);
			}
		}
	}

	// Check for inconsistencies
	for (const [depName, versions] of dependencyVersions) {
		if (versions.size > 1) {
			const versionInfo = Array.from(versions.entries())
				.map(([version, files]) => `${version} (${files.join(", ")})`)
				.join(" | ");

			inconsistencies.push({
				dependency: depName,
				versions: versionInfo,
			});
		}
	}

	return inconsistencies;
}

function main(): number {
	console.log("🔍 Checking for dependency version inconsistencies...\n");

	const inconsistencies = checkDependencyVersions();

	if (inconsistencies.length === 0) {
		console.log(
			"✅ All dependencies have consistent versions across the monorepo!",
		);
		return 0;
	}

	console.log("❌ Found dependency version inconsistencies:\n");

	for (const inconsistency of inconsistencies) {
		console.log(`📦 ${inconsistency.dependency}:`);
		console.log(`   ${inconsistency.versions}\n`);
	}

	console.log("💡 To fix these inconsistencies:");
	console.log("   1. Update the root package.json with the desired versions");
	console.log(
		"   2. Remove the dependencies from individual package.json files",
	);
	console.log('   3. Run "pnpm install" to update the lockfile');

	return 1;
}

// Only run if this file is executed directly
if (process.argv[1]?.endsWith("check-deps.ts")) {
	process.exit(main());
}
