import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { coreClass } from "../../core/core";

const alertStyles = {
	base: coreClass.cn(
		coreClass.shape.rounded,
		"border",
		coreClass.flexBox.column,
		coreClass.spacing.small,
		coreClass.padding.medium,
	),
};

const alertVariants = cva(`${alertStyles.base}`, {
	variants: {
		variant: {
			default: coreClass.cn(
				coreClass.colors.accent.primary,
				"border-outline-variant",
			),
			secondary: coreClass.cn(
				coreClass.colors.accent.secondary,
				"border-outline-variant",
			),
			tertiary: coreClass.cn(
				coreClass.colors.accent.tertiary,
				"border-outline-variant",
			),
			destructive: coreClass.cn(
				coreClass.colors.status.errorContainer,
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
			className={coreClass.cn(alertVariants({ variant }), className)}
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
		className={coreClass.cn(
			coreClass.typography.weight.semibold,
			coreClass.typography.size.medium,
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
		className={coreClass.cn(
			coreClass.typography.size.small,
			"leading-relaxed",
			className,
		)}
		{...props}
	/>
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
