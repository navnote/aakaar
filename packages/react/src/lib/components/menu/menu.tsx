import { Menu as BaseMenu } from "@base-ui-components/react";
import * as React from "react";
import { coreClass } from "../../core/core";

const menuStyles = {
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
	label: coreClass.cn(
		coreClass.paddingY.small,
		coreClass.paddingX.medium,
		coreClass.typography.size.small,
		coreClass.typography.weight.semibold,
	),
	separator: coreClass.cn("h-px", coreClass.colors.surface),
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
				className={coreClass.cn(menuStyles.content, className)}
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
		className={coreClass.cn(menuStyles.item, inset && "pl-lg", className)}
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
		className={coreClass.cn(menuStyles.label, className)}
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
		className={coreClass.cn(menuStyles.separator, className)}
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
		className={coreClass.cn(menuStyles.item, className)}
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
	<BaseMenu.RadioGroup
		ref={ref}
		className={coreClass.cn("p-xs", className)}
		{...props}
	/>
));
MenuRadioGroup.displayName = "MenuRadioGroup";

const MenuRadioItem = React.forwardRef<
	React.ElementRef<typeof BaseMenu.RadioItem>,
	React.ComponentPropsWithoutRef<typeof BaseMenu.RadioItem>
>(({ className, children, ...props }, ref) => (
	<BaseMenu.RadioItem
		ref={ref}
		className={coreClass.cn(menuStyles.item, className)}
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
	return (
		<span className={coreClass.cn(menuStyles.shortcut, className)} {...props} />
	);
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
