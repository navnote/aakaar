import { mergeProps } from "@base-ui-components/react";
import { type VariantProps, cva } from "class-variance-authority";
import { clsx } from "clsx";
import { motion as framerMotion } from "framer-motion";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import {
	alignment,
	borders,
	cn,
	colors,
	flexBox,
	interactivity,
	motion,
	padding,
	paddingX,
	paddingY,
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
			sm: cn("h-sm", paddingY.small, paddingX.medium, typography.size.small),
			md: cn("h-md", paddingY.medium, paddingX.medium, typography.size.medium),
			lg: cn("h-lg", paddingY.large, paddingX.medium, typography.size.large),
			icon: padding.extraSmall,
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
					whileTap: motion.tap.scale,
					transition: motion.transitions.tap,
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
