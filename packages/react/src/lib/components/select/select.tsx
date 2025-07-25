import { Select as BaseSelect } from "@base-ui-components/react";
import { IconCheck, IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import * as React from "react";
import {
	alignment,
	cn,
	colors,
	dimensions,
	interactivity,
	measurements,
	padding,
	paddingX,
	paddingY,
	positioning,
	shadows,
	shape,
	typography,
	utilities,
} from "../../core/core";

const selectStyles = {
	trigger: cn(
		shape.roundedWithBorder,
		dimensions.fullWidth,
		colors.surface,
		alignment.spaceBetween,
		padding.small,
		typography.size.small,
		interactivity.states.clickable,
		interactivity.states.disabled,
		"h-xl",
		typography.noWrap,
	),
	content: cn(
		shape.roundedWithBorder,
		colors.surface,
		positioning.relative,
		utilities.zIndex.modal,
		utilities.overflow.hidden,
		shadows.depth.low,
		measurements.height.full,
		"max-h-[15rem] overflow-y-auto",
	),
	viewport: cn(measurements.width.minimum, "max-h-[15rem]"),
	item: cn(
		shape.rounded,
		alignment.start,
		padding.small,
		typography.size.small,
		interactivity.states.clickable,
		interactivity.dataStates.selected,
		interactivity.states.hover,
		measurements.width.full,
		paddingX.large,
		positioning.relative,
	),
	scrollButton: cn(utilities.cursor.default, alignment.center),
	label: cn(
		paddingY.small,
		paddingX.medium,
		typography.size.small,
		typography.weight.semibold,
	),
	icon: dimensions.icon,
	separator: cn("h-px", colors.surface),
};

const Select = BaseSelect.Root;
const SelectGroup = BaseSelect.Group;

const SelectValue = BaseSelect.Value;

const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof BaseSelect.Trigger>,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Trigger>
>(({ className, children, ...props }, ref) => (
	<BaseSelect.Trigger
		ref={ref}
		className={cn(selectStyles.trigger, className)}
		{...props}
	>
		{children}
		<BaseSelect.Icon>
			<IconChevronDown className={selectStyles.icon} />
		</BaseSelect.Icon>
	</BaseSelect.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

const SelectScrollUpButton = React.forwardRef<
	React.ElementRef<typeof BaseSelect.ScrollUpArrow>,
	React.ComponentPropsWithoutRef<typeof BaseSelect.ScrollUpArrow>
>(({ className, ...props }, ref) => (
	<BaseSelect.ScrollUpArrow
		ref={ref}
		className={cn(selectStyles.scrollButton, className)}
		{...props}
	>
		<IconChevronUp className={selectStyles.icon} />
	</BaseSelect.ScrollUpArrow>
));
SelectScrollUpButton.displayName = "SelectScrollUpButton";

const SelectScrollDownButton = React.forwardRef<
	React.ElementRef<typeof BaseSelect.ScrollDownArrow>,
	React.ComponentPropsWithoutRef<typeof BaseSelect.ScrollDownArrow>
>(({ className, ...props }, ref) => (
	<BaseSelect.ScrollDownArrow
		ref={ref}
		className={cn(selectStyles.scrollButton, className)}
		{...props}
	>
		<IconChevronDown className={selectStyles.icon} />
	</BaseSelect.ScrollDownArrow>
));
SelectScrollDownButton.displayName = "SelectScrollDownButton";

const SelectContent = React.forwardRef<
	React.ElementRef<typeof BaseSelect.Popup>,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Popup>
>(({ className, children, ...props }, ref) => (
	<BaseSelect.Portal>
		<BaseSelect.Positioner>
			<SelectScrollUpButton />
			<BaseSelect.Popup
				ref={ref}
				className={cn(selectStyles.content, className)}
				{...props}
			>
				<BaseSelect.Arrow />
				{children}
			</BaseSelect.Popup>
			<SelectScrollDownButton />
		</BaseSelect.Positioner>
	</BaseSelect.Portal>
));
SelectContent.displayName = "SelectContent";

const SelectLabel = React.forwardRef<
	React.ElementRef<typeof BaseSelect.GroupLabel>,
	React.ComponentPropsWithoutRef<typeof BaseSelect.GroupLabel>
>(({ className, ...props }, ref) => (
	<BaseSelect.GroupLabel
		ref={ref}
		className={cn(selectStyles.label, className)}
		{...props}
	/>
));
SelectLabel.displayName = "SelectLabel";

const SelectItem = React.forwardRef<
	React.ElementRef<typeof BaseSelect.Item>,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Item>
>(({ className, children, ...props }, ref) => (
	<BaseSelect.Item
		ref={ref}
		className={cn(selectStyles.item, className)}
		{...props}
	>
		<BaseSelect.ItemText>{children}</BaseSelect.ItemText>
		<BaseSelect.ItemIndicator className={selectStyles.icon}>
			<IconCheck className={selectStyles.icon} />
		</BaseSelect.ItemIndicator>
	</BaseSelect.Item>
));
SelectItem.displayName = "SelectItem";

const SelectSeparator = React.forwardRef<
	React.ElementRef<typeof BaseSelect.Separator>,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Separator>
>(({ className, ...props }, ref) => (
	<BaseSelect.Separator
		ref={ref}
		className={cn(selectStyles.separator, className)}
		{...props}
	/>
));
SelectSeparator.displayName = "SelectSeparator";

export {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectScrollDownButton,
	SelectScrollUpButton,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
};
