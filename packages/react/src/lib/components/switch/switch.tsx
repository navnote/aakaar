import * as SwitchPrimitives from "@radix-ui/react-switch";
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
		colors.backgrounds.inverseSurface,
		interactivity.dataStates.checked,
		shadows.depth.medium,
		"ring-0",
		"data-[state=checked]:translate-x-[0.8rem] data-[state=unchecked]:-translate-x-[0.8rem]",
	),
};

const Switch: typeof SwitchPrimitives.Root = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cn(switchStyles.base, className)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb className={cn(switchStyles.thumb, className)} />
	</SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
