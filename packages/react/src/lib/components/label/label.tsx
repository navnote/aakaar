import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";
import { cn, typography } from "../../core/core";

const labelStyles = {
	base: cn(
		typography.size.medium,
		typography.weight.medium,
		"leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
	),
};

const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(labelStyles.base, className)}
		{...props}
	/>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
