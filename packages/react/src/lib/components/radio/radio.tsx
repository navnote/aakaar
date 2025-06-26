import { RadioGroup as BaseRadioGroup, Radio } from "@base-ui-components/react";
import { IconCircle } from "@tabler/icons-react";
import * as React from "react";
import {
	cn,
	dimensions,
	flexBox,
	interactivity,
	shadows,
	shape,
	spacing,
} from "../../core/core";

const radioStyles = {
	group: cn(flexBox.column, spacing.medium),
	item: cn(
		shape.circle,
		dimensions.medium,
		shadows.focusRing.primary,
		interactivity.states.clickable,
		interactivity.states.disabled,
		"aspect-square",
		"text-primary",
	),
};

const RadioGroup = React.forwardRef<
	React.ElementRef<typeof BaseRadioGroup>,
	React.ComponentPropsWithoutRef<typeof BaseRadioGroup>
>(({ className, ...props }, ref) => (
	<BaseRadioGroup
		className={cn(radioStyles.group, className)}
		{...props}
		ref={ref}
	/>
));
RadioGroup.displayName = "RadioGroup";

const RadioGroupItem = React.forwardRef<
	React.ElementRef<typeof Radio.Root>,
	React.ComponentPropsWithoutRef<typeof Radio.Root>
>(({ className, children, ...props }, ref) => (
	<Radio.Root ref={ref} className={cn(radioStyles.item, className)} {...props}>
		<Radio.Indicator className="flex items-center justify-center">
			<IconCircle className="size-full p-[0.1rem] fill-current text-current" />
		</Radio.Indicator>
	</Radio.Root>
));
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
