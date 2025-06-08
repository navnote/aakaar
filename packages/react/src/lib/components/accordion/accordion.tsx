import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { IconChevronDown } from "@tabler/icons-react";
import * as React from "react";
import {
	alignment,
	cn,
	flexBox,
	interactivity,
	padding,
	typography,
	utilities,
} from "../../core/core";

const accordionStyles = {
	item: "",
	trigger: cn(
		alignment.spaceBetween,
		flexBox.inlineCenter,
		padding.extraSmall,
		typography.weight.medium,
		interactivity.transitions.all,
		"flex-1 hover:underline [&[data-state=open]>svg]:rotate-180",
	),
	content: {
		base: cn(
			utilities.overflow.hidden,
			typography.size.small,
			interactivity.transitions.all,
		),
		inner: "pb-xs pt-0",
	},
};

const Accordion: typeof AccordionPrimitive.Root = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn(accordionStyles.item, className)}
		{...props}
	/>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(accordionStyles.trigger, className)}
			{...props}
		>
			{children}
			<IconChevronDown className="size-lg shrink-0 transition-transform duration-200" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn(accordionStyles.content.base)}
		{...props}
	>
		<div className={cn(accordionStyles.content.inner, className)}>
			{children}
		</div>
	</AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
