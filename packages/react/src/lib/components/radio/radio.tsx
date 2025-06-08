import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
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
	React.ElementRef<typeof RadioGroupPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
	<RadioGroupPrimitive.Root
		className={cn(radioStyles.group, className)}
		{...props}
		ref={ref}
	/>
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<RadioGroupPrimitive.Item
		ref={ref}
		className={cn(radioStyles.item, className)}
		{...props}
	>
		<RadioGroupPrimitive.Indicator className="flex items-center justify-center">
			<IconCircle className="size-full p-[0.1rem] fill-current text-current" />
		</RadioGroupPrimitive.Indicator>
	</RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
