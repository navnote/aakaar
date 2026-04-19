import { Tooltip as BaseTooltip } from "@base-ui-components/react";
import * as React from "react";
import { coreClass } from "../../core/core";

const tooltipStyles = {
	content: coreClass.cn(
		coreClass.shape.rounded,
		"bg-inverse-surface text-inverse-on-surface",
		coreClass.padding.small,
		coreClass.typography.size.small,
		coreClass.utilities.zIndex.modal,
		coreClass.shadows.depth.medium,
	),
	arrow: coreClass.cn("bg-inverse-surface"),
};

const Tooltip = BaseTooltip.Root;
const TooltipTrigger = BaseTooltip.Trigger;
const TooltipProvider = BaseTooltip.Provider;

const TooltipContent = React.forwardRef<
	React.ElementRef<typeof BaseTooltip.Popup>,
	React.ComponentPropsWithoutRef<typeof BaseTooltip.Popup>
>(({ className, children, ...props }, ref) => (
	<BaseTooltip.Portal>
		<BaseTooltip.Positioner>
			<BaseTooltip.Popup
				ref={ref}
				className={coreClass.cn(tooltipStyles.content, className)}
				{...props}
			>
				{children}
				<BaseTooltip.Arrow className={tooltipStyles.arrow} />
			</BaseTooltip.Popup>
		</BaseTooltip.Positioner>
	</BaseTooltip.Portal>
));
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
