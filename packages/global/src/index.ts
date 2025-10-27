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
	alertDialog = "alert-dialog",
	avatar = "avatar",
	breadcrumb = "breadcrumb",
	button = "button",
	card = "card",
	checkbox = "checkbox",
	dialog = "dialog",
	input = "input",
	label = "label",
	menu = "menu",
	popover = "popover",
	radio = "radio",
	select = "select",
	slider = "slider",
	switch = "switch",
	tabs = "tabs",
	textarea = "textarea",
	tooltip = "tooltip",
}

export type AakaarComponentName = keyof typeof AakaarComponent;
