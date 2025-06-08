import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";
import {
	cn,
	colors,
	padding,
	shadows,
	shape,
	utilities,
} from "../../core/core";

const popoverStyles = {
	content: cn(
		shape.roundedWithBorder,
		colors.surface,
		padding.extraSmall,
		shadows.depth.medium,
		utilities.zIndex.modal,
		"outline-none",
	),
};

const Popover: typeof PopoverPrimitive.Root = PopoverPrimitive.Root;

const PopoverTrigger: typeof PopoverPrimitive.Trigger =
	PopoverPrimitive.Trigger;

const PopoverContent: typeof PopoverPrimitive.Content = React.forwardRef<
	React.ElementRef<typeof PopoverPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			ref={ref}
			align={align}
			sideOffset={sideOffset}
			className={cn(popoverStyles.content, className)}
			{...props}
		/>
	</PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverContent, PopoverTrigger };
