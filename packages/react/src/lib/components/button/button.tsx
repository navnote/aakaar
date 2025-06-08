import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { clsx } from "clsx";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import {
	alignment,
	borders,
	cn,
	colors,
	flexBox,
	interactivity,
	shadows,
	shape,
	spacing,
	typography,
} from "../../core/core";

const buttonStyles = {
	base: cn(
		shape.rounded,
		colors.surface,
		alignment.center,
		flexBox.inlineCenter,
		spacing.small,
		typography.noWrap,
		shadows.focusRing.primary,
		interactivity.states.clickable,
		interactivity.states.hover,
		interactivity.states.disabled,
		interactivity.transitions.opacity,
	),
};

const buttonVariants = cva(`${buttonStyles.base}`, {
	variants: {
		variant: {
			...colors.accent,
			outline: `${colors.accent.justPrimary} ${borders.variant}`,
			link: `${colors.accent.justPrimary} hover:underline shadow-none`,
			ghost: `${colors.accent.justPrimary} shadow-none`,
		},
		size: {
			sm: "h-sm py-sm px-md text-sm",
			md: "h-md py-md px-md text-md",
			lg: "h-lg py-lg px-md text-lg",
			icon: "p-xs",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={twMerge(clsx(buttonVariants({ variant, size, className })))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button };
