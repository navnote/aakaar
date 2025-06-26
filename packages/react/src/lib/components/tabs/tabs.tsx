import { Tabs as BaseTabs } from "@base-ui-components/react";
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
		"data-[selected]:text-tertiary data-[selected]:font-bold",
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

const Tabs = BaseTabs.Root;

const TabsList = React.forwardRef<
	React.ElementRef<typeof BaseTabs.List>,
	React.ComponentPropsWithoutRef<typeof BaseTabs.List>
>(({ className, ...props }, ref) => (
	<BaseTabs.List
		ref={ref}
		className={cn(tabsStyles.list, className)}
		{...props}
	/>
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof BaseTabs.Tab>,
	React.ComponentPropsWithoutRef<typeof BaseTabs.Tab> &
		VariantProps<typeof tabTriggerVariance>
>(({ className, variant, ...props }, ref) => (
	<BaseTabs.Tab
		ref={ref}
		className={cn(tabTriggerVariance({ variant }), className)}
		{...props}
	/>
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
	React.ElementRef<typeof BaseTabs.Panel>,
	React.ComponentPropsWithoutRef<typeof BaseTabs.Panel>
>(({ className, ...props }, ref) => (
	<BaseTabs.Panel
		ref={ref}
		className={cn(tabsStyles.content, className)}
		{...props}
	/>
));
TabsContent.displayName = "TabsContent";

export { Tabs, TabsContent, TabsList, TabsTrigger };
