import { Checkbox as BaseCheckbox } from "@base-ui-components/react";
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
	React.ElementRef<typeof BaseCheckbox.Root>,
	React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root>
>(({ className, ...props }, ref) => (
	<BaseCheckbox.Root
		ref={ref}
		className={cn(checkboxStyles.base, className)}
		{...props}
	>
		<BaseCheckbox.Indicator className={checkboxStyles.indicator}>
			<IconCheck className={checkboxStyles.icon} />
		</BaseCheckbox.Indicator>
	</BaseCheckbox.Root>
));
Checkbox.displayName = "Checkbox";

export { Checkbox };
