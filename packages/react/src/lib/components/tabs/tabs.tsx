import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import {
	alignment,
	cn,
	colors,
	flexBox,
	interactivity,
	padding,
	shadows,
	shape,
	typography,
} from "../../core/core";

const tabsStyles = {
	trigger: cn(
		"rounded-t-default",
		alignment.center,
		typography.noWrap,
		padding.medium,
		typography.size.small,
		interactivity.states.disabled,
		shadows.depth.low,
		padding.small,
		"data-[state=active]:text-tertiary data-[state=active]:font-bold",
	),
	variant: {
		primary: colors.backgrounds.surfaceVariant,
		secondary: colors.backgrounds.surface,
	},
	list: cn(shape.rounded, flexBox.inlineCenter, colors.surface, "h-auto"),
	content: cn(shape.rounded, "mt-sm"),
};
const tabTriggerVariance = cva(`${tabsStyles.trigger}`, {
	variants: {
		variant: {
			primary: `${tabsStyles.variant.primary}`,
			secondary: `${tabsStyles.variant.secondary}`,
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn(tabsStyles.list, className)}
		{...props}
	/>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
		VariantProps<typeof tabTriggerVariance>
>(({ className, variant, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={cn(tabTriggerVariance({ variant }), className)}
		{...props}
	/>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn(tabsStyles.content, className)}
		{...props}
	/>
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
