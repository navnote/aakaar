import { RadioGroup as BaseRadioGroup, Radio } from "@base-ui-components/react";
import { IconCircle } from "@tabler/icons-react";
import * as React from "react";
import { coreClass } from "../../core/core";

const radioStyles = {
	group: coreClass.cn(coreClass.flexBox.column, coreClass.spacing.medium),
	item: coreClass.cn(
		coreClass.shape.circle,
		coreClass.dimensions.medium,
		coreClass.shadows.focusRing.primary,
		coreClass.interactivity.states.clickable,
		coreClass.interactivity.states.disabled,
		"aspect-square",
		"bg-transparent",
	),
};

const RadioGroup = React.forwardRef<
	React.ElementRef<typeof BaseRadioGroup>,
	React.ComponentPropsWithoutRef<typeof BaseRadioGroup>
>(({ className, ...props }, ref) => (
	<BaseRadioGroup
		className={coreClass.cn(radioStyles.group, className)}
		{...props}
		ref={ref}
	/>
));
RadioGroup.displayName = "RadioGroup";

const RadioGroupItem = React.forwardRef<
	React.ElementRef<typeof Radio.Root>,
	React.ComponentPropsWithoutRef<typeof Radio.Root>
>(({ className, children, ...props }, ref) => (
	<Radio.Root
		ref={ref}
		className={coreClass.cn(radioStyles.item, className)}
		{...props}
	>
		<Radio.Indicator className="flex items-center justify-center">
			<IconCircle className="size-full p-[0.02rem] fill-primary text-primary" />
		</Radio.Indicator>
	</Radio.Root>
));
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
