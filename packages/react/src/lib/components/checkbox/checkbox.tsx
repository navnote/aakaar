import { Checkbox as BaseCheckbox } from "@base-ui-components/react";
import * as React from "react";

import { IconCheck } from "@tabler/icons-react";
import { coreClass } from "../../core/core";

const checkboxStyles = {
	base: coreClass.cn(
		coreClass.shape.roundedXsWithBorder,
		coreClass.dimensions.medium,
		coreClass.shadows.focusRing.primary,
		coreClass.interactivity.states.clickable,
		coreClass.interactivity.dataStates.checked,
		coreClass.interactivity.states.disabled,
	),
	icon: coreClass.dimensions.icon,
	indicator: coreClass.cn(coreClass.alignment.center, coreClass.colors.primary),
};

const Checkbox = React.forwardRef<
	React.ElementRef<typeof BaseCheckbox.Root>,
	React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root>
>(({ className, ...props }, ref) => (
	<BaseCheckbox.Root
		ref={ref}
		className={coreClass.cn(checkboxStyles.base, className)}
		{...props}
	>
		<BaseCheckbox.Indicator className={checkboxStyles.indicator}>
			<IconCheck className={checkboxStyles.icon} />
		</BaseCheckbox.Indicator>
	</BaseCheckbox.Root>
));
Checkbox.displayName = "Checkbox";

export { Checkbox };
