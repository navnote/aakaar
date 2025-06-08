import { detect } from "@antfu/ni";
import type { PackageManager } from "@aakaar/global";

export async function getPackageManager(
	targetDir: string,
): Promise<PackageManager> {
	const packageManager = await detect({ programmatic: true, cwd: targetDir });

	if (packageManager === "yarn@berry") return "yarn";
	if (packageManager === "pnpm@6") return "pnpm";
	if (packageManager === "bun") return "bun";

	return packageManager ?? "npm";
}
