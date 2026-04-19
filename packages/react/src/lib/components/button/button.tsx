import { mergeProps } from "@base-ui-components/react";
import { type VariantProps, cva } from "class-variance-authority";
import { clsx } from "clsx";
import { motion as framerMotion } from "framer-motion";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import { coreClass } from "../../core/core";

const buttonStyles = {
	base: coreClass.cn(
		coreClass.shape.rounded,
		coreClass.colors.surface,
		coreClass.alignment.center,
		coreClass.flexBox.inlineCenter,
		coreClass.spacing.small,
		coreClass.typography.noWrap,
		coreClass.shadows.focusRing.primary,
		coreClass.interactivity.states.clickable,
		coreClass.interactivity.states.hover,
		coreClass.interactivity.states.disabled,
		coreClass.interactivity.transitions.opacity,
	),
};

export const buttonVariants = cva(`${buttonStyles.base}`, {
	variants: {
		variant: {
			...coreClass.colors.accent,
			outline: `${coreClass.colors.accent.justPrimary} ${coreClass.borders.variant}`,
			link: `${coreClass.colors.accent.justPrimary} hover:underline shadow-none`,
			ghost: `${coreClass.colors.accent.justPrimary} shadow-none`,
		},
		size: {
			sm: coreClass.cn(
				"h-sm",
				coreClass.paddingY.small,
				coreClass.paddingX.medium,
				coreClass.typography.size.small,
			),
			md: coreClass.cn(
				"h-md",
				coreClass.paddingY.medium,
				coreClass.paddingX.medium,
				coreClass.typography.size.medium,
			),
			lg: coreClass.cn(
				"h-lg",
				coreClass.paddingY.large,
				coreClass.paddingX.medium,
				coreClass.typography.size.large,
			),
			icon: coreClass.padding.extraSmall,
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});

type ButtonBaseProps = Omit<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	| "onDrag"
	| "onDragEnd"
	| "onDragEnter"
	| "onDragExit"
	| "onDragLeave"
	| "onDragOver"
	| "onDragStart"
	| "onDrop"
	| "onAnimationStart"
	| "onAnimationEnd"
	| "onAnimationIteration"
	| "onTransitionEnd"
>;

export interface ButtonProps
	extends ButtonBaseProps,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	animate?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant, size, asChild = false, animate = true, ...props },
		ref,
	) => {
		const mergedProps = asChild
			? mergeProps(props, { role: "button", tabIndex: 0 })
			: props;

		const motionProps = animate
			? {
					whileTap: coreClass.motion.tap.scale,
					transition: coreClass.motion.transitions.tap,
				}
			: {};

		return (
			<framerMotion.button
				className={twMerge(clsx(buttonVariants({ variant, size, className })))}
				ref={ref}
				{...motionProps}
				{...mergedProps}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button };
