import * as SelectPrimitive from "@radix-ui/react-select";
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
		"h-xl [&>span]:line-clamp-1",
	),
	content: cn(
		shape.roundedWithBorder,
		colors.surface,
		positioning.relative,
		utilities.zIndex.modal,
		utilities.overflow.hidden,
		shadows.depth.low,
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
		"pl-lg relative",
	),
	scrollButton: cn(utilities.cursor.default, alignment.center),
	label: cn(
		paddingY.small,
		paddingX.medium,
		typography.size.small,
		typography.weight.semibold,
	),
	icon: "size-md",
	separator: "h-px bg-outline-variant",
};

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={cn(selectStyles.trigger, className)}
		{...props}
	>
		{children}
		<SelectPrimitive.Icon asChild>
			<IconChevronDown className={selectStyles.icon} />
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollUpButton
		ref={ref}
		className={cn(selectStyles.scrollButton, className)}
		{...props}
	>
		<IconChevronUp className={selectStyles.icon} />
	</SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollDownButton
		ref={ref}
		className={cn(selectStyles.scrollButton, className)}
		{...props}
	>
		<IconChevronDown className={selectStyles.icon} />
	</SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
	SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			className={cn(selectStyles.content, className)}
			position={position}
			{...props}
		>
			<SelectScrollUpButton />
			<SelectPrimitive.Viewport className={selectStyles.viewport}>
				{children}
			</SelectPrimitive.Viewport>
			<SelectScrollDownButton />
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label
		ref={ref}
		className={cn(selectStyles.label, className)}
		{...props}
	/>
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={cn(selectStyles.item, className)}
		{...props}
	>
		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		<SelectPrimitive.ItemIndicator>
			<IconCheck className={selectStyles.icon} />
		</SelectPrimitive.ItemIndicator>
	</SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={cn(selectStyles.separator, className)}
		{...props}
	/>
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

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
