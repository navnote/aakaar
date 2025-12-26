import type { AakaarComponent } from "@aakaar/global";
import type { AakaarNavigation } from "./types";

const NAVIGATION_HOME: AakaarNavigation = {
	path: "/",
	title: "Aakaar - Build the form of your design system",
};

const NAVIGATION_INTRODUCTION: AakaarNavigation = {
	path: "/docs/introduction",
	title: "Introduction",
};
const NAVIGATION_INSTALLATION: AakaarNavigation = {
	path: "/docs/installation",
	title: "Installation",
};
// const NAVIGATION_CONFIGURATION: AakaarNavigation = {
// 	path: "/docs/aakaar-json",
// 	title: "aakaar.json",
// };
// const NAVIGATION_THEMES: AakaarNavigation = {
// 	path: "/docs/themes",
// 	title: "Themes",
// };
// const NAVIGATION_TYPOGRAPHY: AakaarNavigation = {
// 	path: "/docs/typography",
// 	title: "Typography",
// };
// const NAVIGATION_CLI: AakaarNavigation = {
// 	path: "/docs/cli",
// 	title: "CLI",
// };

const COMPONENTS_NAVIGATION_MAP: Record<AakaarComponent, AakaarNavigation> = {
	accordion: {
		path: "/docs/components/accordion",
		title: "Accordion",
	},
	alert: {
		path: "/docs/components/alert",
		title: "Alert",
	},
	"alert-dialog": {
		path: "/docs/components/alert-dialog",
		title: "Alert Dialog",
	},
	"aspect-ratio": {
		path: "/docs/components/aspect-ratio",
		title: "Aspect Ratio",
	},
	avatar: {
		path: "/docs/components/avatar",
		title: "Avatar",
	},
	badge: {
		path: "/docs/components/badge",
		title: "Badge",
	},
	breadcrumb: {
		path: "/docs/components/breadcrumb",
		title: "Breadcrumb",
	},
	button: {
		path: "/docs/components/button",
		title: "Button",
	},
	"button-group": {
		path: "/docs/components/button-group",
		title: "Button Group",
	},
	card: {
		path: "/docs/components/card",
		title: "Card",
	},
	checkbox: {
		path: "/docs/components/checkbox",
		title: "Checkbox",
	},
	dialog: {
		path: "/docs/components/dialog",
		title: "Dialog",
	},
	input: {
		path: "/docs/components/input",
		title: "Input",
	},
	label: {
		path: "/docs/components/label",
		title: "Label",
	},
	menu: {
		path: "/docs/components/menu",
		title: "Menu",
	},
	popover: {
		path: "/docs/components/popover",
		title: "Popover",
	},
	progress: {
		path: "/docs/components/progress",
		title: "Progress",
	},
	radio: {
		path: "/docs/components/radio",
		title: "Radio",
	},
	select: {
		path: "/docs/components/select",
		title: "Select",
	},
	slider: {
		path: "/docs/components/slider",
		title: "Slider",
	},
	switch: {
		path: "/docs/components/switch",
		title: "Switch",
	},
	tabs: {
		path: "/docs/components/tabs",
		title: "Tabs",
	},
	textarea: {
		path: "/docs/components/textarea",
		title: "Textarea",
	},
	tooltip: {
		path: "/docs/components/tooltip",
		title: "Tooltip",
	},
};

export const COMPONENTS_NAVIGATION_ITEMS: AakaarNavigation[] = Object.entries(
	COMPONENTS_NAVIGATION_MAP,
)
	.sort(([a], [b]) => a.localeCompare(b))
	.map(([, value]) => value);

export const INTRO_NAVIGATION_ITEMS: AakaarNavigation[] = [
	NAVIGATION_INTRODUCTION,
	NAVIGATION_INSTALLATION,
	// NAVIGATION_CONFIGURATION,
	// NAVIGATION_THEMES,
	// NAVIGATION_TYPOGRAPHY,
	// NAVIGATION_CLI,
];

export const HEADER_NAVIGATION_ITEMS: AakaarNavigation[] = [
	INTRO_NAVIGATION_ITEMS[0],
	{ ...COMPONENTS_NAVIGATION_ITEMS[0], title: "Components" },
];

export const ALL_NAVIGATION_ITEMS: AakaarNavigation[] = [
	NAVIGATION_HOME,
	...INTRO_NAVIGATION_ITEMS,
	...COMPONENTS_NAVIGATION_ITEMS,
];
