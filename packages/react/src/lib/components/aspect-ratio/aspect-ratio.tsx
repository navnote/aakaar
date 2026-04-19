import * as React from "react";
import { coreClass } from "../../core/core";

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
	ratio?: number;
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
	({ className, ratio = 16 / 9, ...props }, ref) => (
		<div
			ref={ref}
			className={coreClass.cn("relative w-full", className)}
			style={{
				aspectRatio: ratio.toString(),
			}}
			{...props}
		/>
	),
);
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
