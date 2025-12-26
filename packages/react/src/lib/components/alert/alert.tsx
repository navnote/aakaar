import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import {
	cn,
	colors,
	flexBox,
	padding,
	shape,
	spacing,
	typography,
} from "../../core/core";

const alertStyles = {
	base: cn(
		shape.rounded,
		"border",
		flexBox.column,
		spacing.small,
		padding.medium,
	),
};

const alertVariants = cva(`${alertStyles.base}`, {
	variants: {
		variant: {
			default: cn(colors.accent.primary, "border-outline-variant"),
			secondary: cn(colors.accent.secondary, "border-outline-variant"),
			tertiary: cn(colors.accent.tertiary, "border-outline-variant"),
			destructive: cn(
				colors.status.errorContainer,
				"border-[color:var(--color-error)]",
			),
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export interface AlertProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
	({ className, variant, ...props }, ref) => (
		<div
			ref={ref}
			role="alert"
			className={cn(alertVariants({ variant }), className)}
			{...props}
		/>
	),
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h5
		ref={ref}
		className={cn(
			typography.weight.semibold,
			typography.size.medium,
			"leading-none tracking-tight",
			className,
		)}
		{...props}
	/>
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(typography.size.small, "leading-relaxed", className)}
		{...props}
	/>
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
