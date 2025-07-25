import { Popover as BasePopover } from "@base-ui-components/react";
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
		utilities.cursor.default,
	),
};

const Popover = BasePopover.Root;

const PopoverTrigger = BasePopover.Trigger;

const PopoverContent = React.forwardRef<
	React.ElementRef<typeof BasePopover.Popup>,
	React.ComponentPropsWithoutRef<typeof BasePopover.Popup>
>(({ className, ...props }, ref) => (
	<BasePopover.Portal>
		<BasePopover.Positioner>
			<BasePopover.Popup
				ref={ref}
				className={cn(popoverStyles.content, className)}
				{...props}
			/>
		</BasePopover.Positioner>
	</BasePopover.Portal>
));
PopoverContent.displayName = "PopoverContent";

export { Popover, PopoverContent, PopoverTrigger };
