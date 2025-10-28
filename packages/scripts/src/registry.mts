import { promises as fs, existsSync, mkdirSync, readFileSync } from "node:fs";

const REACT_COMPONENT_DIR = `${process.cwd()}/../../packages/react/src/lib/components`;
const SERVER_DIR = `${process.cwd()}/../../apps/docs/public/registry`;
const CORE_FILE = `${process.cwd()}/../../packages/react/src/lib/core/core.ts`;

type RegistryFile = {
	name: string;
	content: string;
};

type ComponentRegistry = {
	name: string;
	dependencies?: string[];
	files: RegistryFile[];
};

const COMPONENTS = [
	"accordion",
	"avatar",
	"breadcrumb",
	"button",
	"card",
	"checkbox",
	"dialog",
	"input",
	"label",
	"menu",
	"popover",
	"progress",
	"radio",
	"select",
	"slider",
	"switch",
	"tabs",
	"textarea",
];

const buildComponentRegistry = async (
	componentName: string,
): Promise<ComponentRegistry> => {
	console.log(`Building registry for ${componentName}`);
	const files: RegistryFile[] = [];
	const dependencies: { dependencies?: string[] } = {};
	const componentDir = `${REACT_COMPONENT_DIR}/${componentName}`;

	// React components
	const reactComponentFiles = await fs.readdir(componentDir);
	const componentJs = reactComponentFiles.filter((file) =>
		file.endsWith(".tsx"),
	);

	await Promise.all(
		componentJs.map(async (file) => {
			const content = await fs.readFile(`${componentDir}/${file}`, "utf-8");
			files.push({ name: file, content: content });
		}),
	);

	// Deps.json file
	const componentDependencyFile = reactComponentFiles.find((file) =>
		file.endsWith(".deps.json"),
	);
	if (componentDependencyFile) {
		await fs
			.readFile(`${componentDir}/${componentDependencyFile}`, "utf-8")
			.then((content) => {
				const result = JSON.parse(content);
				if (result.dependencies) {
					dependencies.dependencies = result.dependencies;
				}
			});
	}

	return {
		name: componentName,
		...dependencies,
		files,
	};
};

const componentRegistry = await Promise.all(
	COMPONENTS.map(buildComponentRegistry),
);

if (!existsSync(SERVER_DIR)) {
	mkdirSync(SERVER_DIR, {
		recursive: true,
	});
}

for (const component of componentRegistry) {
	fs.writeFile(
		`${SERVER_DIR}/${component.name}.json`,
		JSON.stringify(component, null, 2),
	);
}

// Write core.ts file
fs.writeFile(
	`${SERVER_DIR}/core.json`,
	JSON.stringify(
		{
			name: "core",
			files: [
				{
					name: "core.ts",
					content: readFileSync(CORE_FILE, "utf-8"),
				},
			],
		},
		null,
		2,
	),
);
