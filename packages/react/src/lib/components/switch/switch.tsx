import { Switch as BaseSwitch } from "@base-ui-components/react";
import * as React from "react";
import {
	alignment,
	borders,
	cn,
	colors,
	dimensions,
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
		"peer h-lg w-[3rem] shrink-0",
	),
	thumb: cn(
		shape.circle,
		interactivity.transitions.transform,
		utilities.cursor.noEvents,
		dimensions.large,
		colors.primary,
		interactivity.dataStates.checked,
		shadows.depth.medium,
		"ring-0",
		"-translate-x-sm data-[checked]:translate-x-sm",
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
		<BaseSwitch.Thumb className={cn(switchStyles.thumb, className)} />
	</BaseSwitch.Root>
));
Switch.displayName = "Switch";

export { Switch };
