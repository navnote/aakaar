import * as React from "react";
import { cn } from "../../core/core";

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	orientation?: "horizontal" | "vertical";
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
	({ className, orientation = "horizontal", ...props }, ref) => (
		<div
			ref={ref}
			role="group"
			className={cn(
				"inline-flex",
				orientation === "horizontal" ? "flex-row" : "flex-col",
				// Horizontal: first has left radius, last has right radius
				orientation === "horizontal" &&
					"[&>button:first-child]:rounded-l-default [&>button:first-child]:rounded-r-none",
				orientation === "horizontal" &&
					"[&>button:last-child]:rounded-r-default [&>button:last-child]:rounded-l-none",
				orientation === "horizontal" &&
					"[&>button:not(:first-child):not(:last-child)]:rounded-none",
				orientation === "horizontal" && "[&>button:not(:first-child)]:-ml-px",
				// Vertical: first has top radius, last has bottom radius
				orientation === "vertical" &&
					"[&>button:first-child]:rounded-t-default [&>button:first-child]:rounded-b-none",
				orientation === "vertical" &&
					"[&>button:last-child]:rounded-b-default [&>button:last-child]:rounded-t-none",
				orientation === "vertical" &&
					"[&>button:not(:first-child):not(:last-child)]:rounded-none",
				orientation === "vertical" && "[&>button:not(:first-child)]:-mt-px",
				className,
			)}
			{...props}
		/>
	),
);
ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
