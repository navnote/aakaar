import * as React from "react";
import { coreClass } from "../../core/core";

const labelStyles = {
	base: coreClass.cn(
		coreClass.typography.size.medium,
		coreClass.typography.weight.medium,
		coreClass.typography.noWrap,
		coreClass.interactivity.states.disabled,
	),
};

const Label = React.forwardRef<
	HTMLLabelElement,
	React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
	<label
		ref={ref}
		className={coreClass.cn(labelStyles.base, className)}
		{...props}
	/>
));
Label.displayName = "Label";

export { Label };
