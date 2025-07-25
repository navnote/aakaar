import * as React from "react";
import { cn, interactivity, typography } from "../../core/core";

const labelStyles = {
	base: cn(
		typography.size.medium,
		typography.weight.medium,
		typography.noWrap,
		interactivity.states.disabled,
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
