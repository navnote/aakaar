import { Switch as BaseSwitch } from "@base-ui-components/react";
import * as React from "react";
import { coreClass } from "../../core/core";

const switchStyles = {
	base: coreClass.cn(
		coreClass.shape.circlePrimary,
		coreClass.alignment.center,
		coreClass.interactivity.transitions.colors,
		coreClass.interactivity.states.disabled,
		coreClass.borders.variant,
		coreClass.colors.backgrounds.surface,
		"peer w-[calc(var(--base)*2)] h-[calc(var(--base)*1.25)] shrink-0 relative",
	),
	thumb: coreClass.cn(
		coreClass.shape.circle,
		coreClass.interactivity.transitions.transform,
		coreClass.utilities.cursor.noEvents,
		"w-[calc(var(--base)*1.25)] h-[calc(var(--base)*1.25)]",
		coreClass.colors.primary,
		coreClass.interactivity.dataStates.checked,
		coreClass.shadows.depth.medium,
		"ring-0 absolute left-0 top-0",
		"data-[checked]:translate-x-[calc(var(--base)*0.75)]",
		"transition-transform duration-200 ease-in-out",
	),
};

const Switch = React.forwardRef<
	React.ElementRef<typeof BaseSwitch.Root>,
	React.ComponentPropsWithoutRef<typeof BaseSwitch.Root>
>(({ className, ...props }, ref) => (
	<BaseSwitch.Root
		className={coreClass.cn(switchStyles.base, className)}
		{...props}
		ref={ref}
	>
		<BaseSwitch.Thumb className={coreClass.cn(switchStyles.thumb)} />
	</BaseSwitch.Root>
));
Switch.displayName = "Switch";

export { Switch };
