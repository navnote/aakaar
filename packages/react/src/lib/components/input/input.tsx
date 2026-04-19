import * as React from "react";
import { coreClass } from "../../core/core";

const inputStyles = {
	base: coreClass.cn(
		coreClass.shape.roundedWithBorder,
		coreClass.dimensions.fullWidth,
		coreClass.colors.surface,
		coreClass.padding.small,
		coreClass.typography.size.small,
		coreClass.shadows.focusRing.primary,
		coreClass.interactivity.states.disabled,
		"h-xl",
		"file:border-0 file:bg-transparent",
		coreClass.cn("file:text-sm file:font-medium"),
	),
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<
	HTMLInputElement,
	React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
	<input
		type={type}
		className={coreClass.cn(inputStyles.base, className)}
		ref={ref}
		{...props}
	/>
));
Input.displayName = "Input";

export { Input };
