import * as React from "react";
import { cn } from "../../core/core";

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
	ratio?: number;
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
	({ className, ratio = 16 / 9, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("relative w-full", className)}
			style={{
				aspectRatio: ratio.toString(),
			}}
			{...props}
		/>
	),
);
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
