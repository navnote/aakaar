import * as React from "react";
import {
	cn,
	colors,
	dimensions,
	interactivity,
	padding,
	shadows,
	shape,
	typography,
} from "../../core/core";

const inputStyles = {
	base: cn(
		shape.roundedWithBorder,
		dimensions.fullWidth,
		colors.surface,
		padding.small,
		typography.size.small,
		shadows.focusRing.primary,
		interactivity.states.disabled,
		"h-10",
		"file:border-0 file:bg-transparent",
		"file:text-sm file:font-medium file:text-primary",
	),
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<
	HTMLInputElement,
	React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
	<input
		type={type}
		className={cn(inputStyles.base, className)}
		ref={ref}
		{...props}
	/>
));
Input.displayName = "Input";

export { Input };
