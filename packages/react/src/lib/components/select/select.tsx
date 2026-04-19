import { Select as BaseSelect } from "@base-ui-components/react";
import { IconCheck, IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import * as React from "react";
import { coreClass } from "../../core/core";

const selectStyles = {
	trigger: coreClass.cn(
		coreClass.shape.roundedWithBorder,
		coreClass.dimensions.fullWidth,
		coreClass.colors.surface,
		coreClass.alignment.spaceBetween,
		coreClass.padding.small,
		coreClass.typography.size.small,
		coreClass.interactivity.states.clickable,
		coreClass.interactivity.states.disabled,
		"h-xl",
		coreClass.typography.noWrap,
	),
	content: coreClass.cn(
		coreClass.shape.roundedWithBorder,
		coreClass.colors.surface,
		coreClass.positioning.relative,
		coreClass.utilities.zIndex.modal,
		coreClass.utilities.overflow.hidden,
		coreClass.shadows.depth.low,
		coreClass.measurements.height.full,
		"max-h-[15rem] overflow-y-auto",
	),
	viewport: coreClass.cn(coreClass.measurements.width.minimum, "max-h-[15rem]"),
	item: coreClass.cn(
		coreClass.shape.rounded,
		coreClass.alignment.start,
		coreClass.padding.small,
		coreClass.typography.size.small,
		coreClass.interactivity.states.clickable,
		coreClass.interactivity.dataStates.selected,
		coreClass.interactivity.states.hover,
		coreClass.measurements.width.full,
		coreClass.paddingX.large,
		coreClass.positioning.relative,
	),
	scrollButton: coreClass.cn(
		coreClass.utilities.cursor.default,
		coreClass.alignment.center,
	),
	label: coreClass.cn(
		coreClass.paddingY.small,
		coreClass.paddingX.medium,
		coreClass.typography.size.small,
		coreClass.typography.weight.semibold,
	),
	icon: coreClass.dimensions.icon,
	separator: coreClass.cn("h-px", coreClass.colors.surface),
};

const Select = BaseSelect.Root;
const SelectGroup = BaseSelect.Group;

const SelectValue = React.forwardRef<
	React.ElementRef<typeof BaseSelect.Value>,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Value>
>(({ className, ...props }, ref) => (
	<BaseSelect.Value ref={ref} className={className} {...props} />
));
SelectValue.displayName = "SelectValue";

const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof BaseSelect.Trigger>,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Trigger>
>(({ className, children, ...props }, ref) => (
	<BaseSelect.Trigger
		ref={ref}
		className={coreClass.cn(selectStyles.trigger, className)}
		{...props}
	>
		{children}
		<BaseSelect.Icon>
			<IconChevronDown className={coreClass.cn(selectStyles.icon)} />
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
		className={coreClass.cn(selectStyles.scrollButton, className)}
		{...props}
	>
		<IconChevronUp className={coreClass.cn(selectStyles.icon)} />
	</BaseSelect.ScrollUpArrow>
));
SelectScrollUpButton.displayName = "SelectScrollUpButton";

const SelectScrollDownButton = React.forwardRef<
	React.ElementRef<typeof BaseSelect.ScrollDownArrow>,
	React.ComponentPropsWithoutRef<typeof BaseSelect.ScrollDownArrow>
>(({ className, ...props }, ref) => (
	<BaseSelect.ScrollDownArrow
		ref={ref}
		className={coreClass.cn(selectStyles.scrollButton, className)}
		{...props}
	>
		<IconChevronDown className={coreClass.cn(selectStyles.icon)} />
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
				className={coreClass.cn(selectStyles.content, className)}
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
		className={coreClass.cn(selectStyles.label, className)}
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
		className={coreClass.cn(selectStyles.item, className)}
		{...props}
	>
		<BaseSelect.ItemText>{children}</BaseSelect.ItemText>
		<BaseSelect.ItemIndicator className={coreClass.cn(selectStyles.icon)}>
			<IconCheck className={coreClass.cn(selectStyles.icon)} />
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
		className={coreClass.cn(selectStyles.separator, className)}
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
