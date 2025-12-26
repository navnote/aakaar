import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import {
	cn,
	colors,
	flexBox,
	paddingX,
	paddingY,
	shape,
	typography,
} from "../../core/core";

const badgeVariants = cva(
	cn(
		flexBox.inlineCenter,
		shape.rounded,
		paddingX.small,
		paddingY.extraSmall,
		typography.size.small,
		typography.weight.medium,
		typography.noWrap,
	),
	{
		variants: {
			variant: {
				default: colors.surface,
				secondary: colors.containers.secondary,
				destructive: colors.status.errorContainer,
				outline: cn(colors.transparent, "border border-outline-variant"),
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
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	),
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
