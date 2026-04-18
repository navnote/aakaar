import * as React from "react";
import { cn } from "../../core/core";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("animate-pulse rounded-md bg-surface-variant", className)}
				{...props}
			/>
		);
	},
);
Skeleton.displayName = "Skeleton";

export { Skeleton };
export type { SkeletonProps };
