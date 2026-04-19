import * as React from "react";
import { coreClass } from "../../core/core";

const textareaStyles = {
	base: coreClass.cn(
		coreClass.flexBox.row,
		coreClass.shape.roundedWithBorder,
		coreClass.measurements.width.full,
		coreClass.colors.surface,
		coreClass.padding.small,
		coreClass.typography.size.small,
		coreClass.interactivity.states.disabled,
		"min-h-lg",
		coreClass.shadows.focusRing.primary,
		"placeholder:text-muted-foreground",
	),
};

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={coreClass.cn(textareaStyles.base, className)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Textarea.displayName = "Textarea";

export { Textarea };
