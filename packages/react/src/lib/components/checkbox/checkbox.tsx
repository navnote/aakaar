import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { IconCheck } from "@tabler/icons-react";
import {
	alignment,
	cn,
	dimensions,
	interactivity,
	shadows,
	shape,
} from "../../core/core";

const checkboxStyles = {
	base: cn(
		shape.roundedXsWithBorder,
		dimensions.medium,
		shadows.focusRing.primary,
		interactivity.states.clickable,
		interactivity.dataStates.checked,
		interactivity.states.disabled,
	),
	icon: dimensions.medium,
	indicator: cn(alignment.center, "text-current"),
};

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(checkboxStyles.base, className)}
		{...props}
	>
		<CheckboxPrimitive.Indicator className={checkboxStyles.indicator}>
			<IconCheck className={checkboxStyles.icon} />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
