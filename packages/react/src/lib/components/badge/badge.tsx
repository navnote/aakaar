import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { coreClass } from "../../core/core";

const badgeVariants = cva(
	coreClass.cn(
		coreClass.flexBox.inlineCenter,
		coreClass.shape.rounded,
		coreClass.paddingX.small,
		coreClass.paddingY.extraSmall,
		coreClass.typography.size.small,
		coreClass.typography.weight.medium,
		coreClass.typography.noWrap,
	),
	{
		variants: {
			variant: {
				default: coreClass.colors.surface,
				secondary: coreClass.colors.containers.secondary,
				destructive: coreClass.colors.status.errorContainer,
				outline: coreClass.cn(
					coreClass.colors.transparent,
					"border border-outline-variant",
				),
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
	({ className, variant, ...props }, ref) => (
		<div
			ref={ref}
			className={coreClass.cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	),
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
