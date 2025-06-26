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
	HTMLLabelElement,
	React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
	<label ref={ref} className={cn(labelStyles.base, className)} {...props} />
));
Label.displayName = "Label";

export { Label };
