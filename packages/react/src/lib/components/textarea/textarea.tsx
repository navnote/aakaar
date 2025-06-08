import * as React from "react";
import {
	cn,
	colors,
	flexBox,
	interactivity,
	measurements,
	padding,
	shadows,
	shape,
	typography,
} from "../../core/core";

const textareaStyles = {
	base: cn(
		flexBox.row,
		shape.roundedWithBorder,
		measurements.width.full,
		colors.surface,
		padding.small,
		typography.size.small,
		interactivity.states.disabled,
		"min-h-lg",
		shadows.focusRing.primary,
		"placeholder:text-muted-foreground",
	),
};

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(textareaStyles.base, className)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Textarea.displayName = "Textarea";

export { Textarea };
