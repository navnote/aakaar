import { Menu as BaseMenu } from "@base-ui-components/react";
import * as React from "react";
import {
	alignment,
	cn,
	colors,
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

const menuStyles = {
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
	label: cn(
		paddingY.small,
		paddingX.medium,
		typography.size.small,
		typography.weight.semibold,
	),
	separator: cn("h-px", colors.surface),
	shortcut: "ml-auto text-xs tracking-widest opacity-60",
};

const Menu = BaseMenu.Root;
const MenuTrigger = BaseMenu.Trigger;
const MenuGroup = BaseMenu.Group;
const MenuGroupLabel = BaseMenu.GroupLabel;

const MenuContent = React.forwardRef<
	React.ElementRef<typeof BaseMenu.Popup>,
	React.ComponentPropsWithoutRef<typeof BaseMenu.Popup>
>(({ className, ...props }, ref) => (
	<BaseMenu.Portal>
		<BaseMenu.Positioner>
			<BaseMenu.Popup
				ref={ref}
				className={cn(menuStyles.content, className)}
				{...props}
			/>
		</BaseMenu.Positioner>
	</BaseMenu.Portal>
));
MenuContent.displayName = "MenuContent";

const MenuItem = React.forwardRef<
	React.ElementRef<typeof BaseMenu.Item>,
	React.ComponentPropsWithoutRef<typeof BaseMenu.Item> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<BaseMenu.Item
		ref={ref}
		className={cn(menuStyles.item, inset && "pl-lg", className)}
		{...props}
	/>
));
MenuItem.displayName = "MenuItem";

const MenuLabel = React.forwardRef<
	React.ElementRef<typeof BaseMenu.GroupLabel>,
	React.ComponentPropsWithoutRef<typeof BaseMenu.GroupLabel>
>(({ className, ...props }, ref) => (
	<BaseMenu.GroupLabel
		ref={ref}
		className={cn(menuStyles.label, className)}
		{...props}
	/>
));
MenuLabel.displayName = "MenuLabel";

const MenuSeparator = React.forwardRef<
	React.ElementRef<typeof BaseMenu.Separator>,
	React.ComponentPropsWithoutRef<typeof BaseMenu.Separator>
>(({ className, ...props }, ref) => (
	<BaseMenu.Separator
		ref={ref}
		className={cn(menuStyles.separator, className)}
		{...props}
	/>
));
MenuSeparator.displayName = "MenuSeparator";

const MenuCheckboxItem = React.forwardRef<
	React.ElementRef<typeof BaseMenu.CheckboxItem>,
	React.ComponentPropsWithoutRef<typeof BaseMenu.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
	<BaseMenu.CheckboxItem
		ref={ref}
		className={cn(menuStyles.item, className)}
		checked={checked}
		{...props}
	>
		{children}
		<BaseMenu.CheckboxItemIndicator className="ml-auto" />
	</BaseMenu.CheckboxItem>
));
MenuCheckboxItem.displayName = "MenuCheckboxItem";

const MenuRadioGroup = React.forwardRef<
	React.ElementRef<typeof BaseMenu.RadioGroup>,
	React.ComponentPropsWithoutRef<typeof BaseMenu.RadioGroup>
>(({ className, ...props }, ref) => (
	<BaseMenu.RadioGroup ref={ref} className={cn("p-xs", className)} {...props} />
));
MenuRadioGroup.displayName = "MenuRadioGroup";

const MenuRadioItem = React.forwardRef<
	React.ElementRef<typeof BaseMenu.RadioItem>,
	React.ComponentPropsWithoutRef<typeof BaseMenu.RadioItem>
>(({ className, children, ...props }, ref) => (
	<BaseMenu.RadioItem
		ref={ref}
		className={cn(menuStyles.item, className)}
		{...props}
	>
		{children}
		<BaseMenu.RadioItemIndicator className="ml-auto" />
	</BaseMenu.RadioItem>
));
MenuRadioItem.displayName = "MenuRadioItem";

const MenuShortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return <span className={cn(menuStyles.shortcut, className)} {...props} />;
};
MenuShortcut.displayName = "MenuShortcut";

export {
	Menu,
	MenuCheckboxItem,
	MenuContent,
	MenuGroup,
	MenuGroupLabel,
	MenuItem,
	MenuLabel,
	MenuRadioGroup,
	MenuRadioItem,
	MenuSeparator,
	MenuShortcut,
	MenuTrigger,
};
