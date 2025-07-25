import { Switch as BaseSwitch } from "@base-ui-components/react";
import * as React from "react";
import {
	alignment,
	borders,
	cn,
	colors,
	interactivity,
	shadows,
	shape,
	utilities,
} from "../../core/core";

const switchStyles = {
	base: cn(
		shape.circlePrimary,
		alignment.center,
		interactivity.transitions.colors,
		interactivity.states.disabled,
		borders.variant,
		colors.backgrounds.surface,
		"peer w-[calc(var(--base)*2)] h-[calc(var(--base)*1.25)] shrink-0 relative",
	),
	thumb: cn(
		shape.circle,
		interactivity.transitions.transform,
		utilities.cursor.noEvents,
		"w-[calc(var(--base)*1.25)] h-[calc(var(--base)*1.25)]",
		colors.primary,
		interactivity.dataStates.checked,
		shadows.depth.medium,
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
		className={cn(switchStyles.base, className)}
		{...props}
		ref={ref}
	>
		<BaseSwitch.Thumb className={cn(switchStyles.thumb)} />
	</BaseSwitch.Root>
));
Switch.displayName = "Switch";

export { Switch };
