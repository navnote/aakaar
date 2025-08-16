import { type ClassValue, clsx } from "clsx";
import { easeIn, easeInOut, easeOut } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const colors = {
	accent: {
		justPrimary: "bg-transparent text-primary",
		primary: "bg-primary text-on-primary",
		secondary: "bg-secondary text-on-secondary",
		tertiary: "bg-tertiary text-on-tertiary",
		inversePrimary: "bg-inverse-primary text-inverse-on-surface",
	},
	containers: {
		primary: "bg-primary-container text-on-primary-container",
		secondary: "bg-secondary-container text-on-secondary-container",
		tertiary: "bg-tertiary-container text-on-tertiary-container",
	},
	status: {
		error: "bg-error text-on-error",
		errorContainer: "bg-error-container text-on-error-container",
	},
	backgrounds: {
		main: "bg-background text-on-background",
		surface: "bg-surface text-on-surface",
		surfaceVariant: "bg-surface-variant text-on-surface-variant",
		inverseSurface: "bg-inverse-surface text-inverse-on-surface",
	},
	surface: "bg-surface text-on-surface",
	primary: "bg-primary text-on-primary",
	transparent: "bg-transparent",
	disabled: "disabled:opacity-50 disabled:cursor-not-allowed",
	overlay: "bg-scrim/80",
};

export const borders = {
	standard: "border border-outline",
	variant: "border border-outline-variant",
};

export const shape = {
	rounded: "rounded-default",
	roundedWithBorder:
		"rounded-default border-[0.0625rem] border-outline-variant",
	roundedXsWithBorder: "rounded-xs border-[0.0625rem] border-outline-variant",
	circle: "rounded-full border border-outline-variant",
	circlePrimary: "rounded-full border border-primary",
};

export const dimensions = {
	small: "size-sm",
	medium: "size-md",
	large: "size-lg",
	extraLarge: "size-xl",
	fullWidth: "w-full",
	icon: "size-[calc(var(--scale)*var(--base)*0.75)]",
};

export const alignment = {
	center: "flex items-center justify-center",
	spaceBetween: "flex items-center justify-between",
	start: "flex items-center justify-start",
	end: "flex items-center justify-end",
};

export const flexBox = {
	row: "flex flex-row",
	column: "flex flex-col",
	inlineCenter: "inline-flex items-center",
};

export const spacing = {
	small: "gap-sm",
	medium: "gap-md",
	large: "gap-lg",
};

export const padding = {
	extraSmall: "p-xs",
	small: "p-sm",
	medium: "p-md",
	large: "p-lg",
};

export const paddingX = {
	extraSmall: "px-xs",
	small: "px-sm",
	medium: "px-md",
	large: "px-lg",
};

export const paddingY = {
	extraSmall: "py-xs",
	small: "py-sm",
	medium: "py-md",
	large: "py-lg",
};

export const typography = {
	size: {
		extraSmall: "text-xs",
		small: "text-sm",
		medium: "text-md",
		large: "text-lg",
	},
	weight: {
		regular: "font-normal",
		medium: "font-medium",
		semibold: "font-semibold",
	},
	truncate: "truncate",
	noWrap: "whitespace-nowrap",
};

export const shadows = {
	depth: {
		none: "shadow-none",
		low: "shadow-sm",
		medium: "shadow-md",
	},
	focusRing: {
		primary:
			"focus:outline-none focus:ring-2 focus:ring-outline-variant focus:ring-offset",
		none: "focus:outline-none",
	},
};

export const interactivity = {
	states: {
		clickable: "select-none",
		hover: "hover:opacity-70",
		active: "active:opacity-100",
		disabled: "disabled:cursor-not-allowed disabled:opacity-50",
	},
	transitions: {
		default: "duration-200 ease-in-out",
		opacity: "transition-opacity",
		colors: "transition-colors",
		transform: "transition-transform",
		all: "transition-all",
	},
	dataStates: {
		checked: "data-[checked]:bg-primary data-[checked]:text-on-primary",
		open: "data-[state=open]:bg-primary data-[state=open]:text-on-primary",
		active: "data-[active]:bg-primary data-[active]:text-on-primary",
		selected: "data-[selected]:bg-primary data-[selected]:text-on-primary",
		disabled: "data-[disabled]:bg-primary data-[disabled]:text-on-primary",
	},
};

export const positioning = {
	fixed: "fixed",
	relative: "relative",
	absolute: "absolute",
	inset: {
		full: "inset-0",
		center: "left-[50%] top-[50%]",
	},
	corners: {
		topRight: "right-xs top-xs",
	},
};

export const transforms = {
	center: "translate-x-[-50%] translate-y-[-50%]",
};

export const measurements = {
	width: {
		full: "w-full",
		minimum: "min-w-[8rem]",
		maximum: "max-w-lg",
	},
	height: {
		full: "h-full",
	},
};

export const utilities = {
	overflow: {
		hidden: "overflow-hidden",
	},
	aspectRatio: {
		square: "aspect-square",
	},
	cursor: {
		default: "cursor-default",
		noEvents: "pointer-events-none",
	},
	objectFit: {
		cover: "object-cover",
	},
	flexShrink: {
		none: "shrink-0",
	},
	zIndex: {
		modal: "z-50",
	},
};

// Motion patterns and animations
export const motion = {
	variants: {
		fade: {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
		},
		slideUp: {
			initial: { opacity: 0, y: 20 },
			animate: { opacity: 1, y: 0 },
			exit: { opacity: 0, y: -20 },
		},
		slideDown: {
			initial: { opacity: 0, y: -20 },
			animate: { opacity: 1, y: 0 },
			exit: { opacity: 0, y: 20 },
		},
		scale: {
			initial: { opacity: 0, scale: 0.95 },
			animate: { opacity: 1, scale: 1 },
			exit: { opacity: 0, scale: 0.95 },
		},
		spring: {
			initial: { opacity: 0, y: 30 },
			animate: {
				opacity: 1,
				y: 0,
				transition: {
					type: "spring",
					damping: 20,
					stiffness: 100,
				},
			},
			exit: { opacity: 0, y: 30 },
		},
	},
	transitions: {
		default: {
			duration: 0.2,
			ease: easeInOut,
		},
		fast: {
			duration: 0.15,
			ease: easeInOut,
		},
		slow: {
			duration: 0.4,
			ease: easeInOut,
		},
		spring: {
			type: "spring",
			damping: 20,
			stiffness: 100,
		},
		hover: {
			duration: 0.15,
			ease: easeOut,
		},
		hoverLift: {
			duration: 0.2,
			ease: easeOut,
		},
		tap: {
			duration: 0.1,
			ease: easeIn,
		},
	},
	hover: {
		scale: {
			scale: 1.02,
		},
		lift: {
			y: -2,
		},
	},
	tap: {
		scale: {
			scale: 0.98,
		},
	},
};
