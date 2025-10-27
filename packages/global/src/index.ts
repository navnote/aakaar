export type PackageManager = "npm" | "yarn" | "pnpm" | "bun" | "deno";

// --------------------------------------------
// Sync with scripts/registry.mts
export type RegistryFile = {
	name: string;
	content: string;
};

export type ComponentRegistry = {
	name: string;
	dependencies?: string[];
	files: RegistryFile[];
};
// --------------------------------------------

export enum AakaarComponent {
	accordion = "accordion",
	avatar = "avatar",
	breadcrumb = "breadcrumb",
	button = "button",
	card = "card",
	checkbox = "checkbox",
	dialog = "dialog",
	input = "input",
	label = "label",
	popover = "popover",
	radio = "radio",
	select = "select",
	switch = "switch",
	tabs = "tabs",
	textarea = "textarea",
	tooltip = "tooltip",
}

export type AakaarComponentName = keyof typeof AakaarComponent;
