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
	alert = "alert",
	alertDialog = "alert-dialog",
	aspectRatio = "aspect-ratio",
	avatar = "avatar",
	badge = "badge",
	breadcrumb = "breadcrumb",
	button = "button",
	buttonGroup = "button-group",
	calendar = "calendar",
	card = "card",
	checkbox = "checkbox",
	dialog = "dialog",
	input = "input",
	label = "label",
	menu = "menu",
	popover = "popover",
	progress = "progress",
	radio = "radio",
	select = "select",
	slider = "slider",
	switch = "switch",
	tabs = "tabs",
	textarea = "textarea",
	tooltip = "tooltip",
}

export type AakaarComponentName = keyof typeof AakaarComponent;
