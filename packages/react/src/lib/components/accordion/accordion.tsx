import { Accordion as BaseAccordion } from "@base-ui-components/react";
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

const Accordion = BaseAccordion.Root;

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof BaseAccordion.Item>,
	React.ComponentPropsWithoutRef<typeof BaseAccordion.Item>
>(({ className, ...props }, ref) => (
	<BaseAccordion.Item
		ref={ref}
		className={cn(accordionStyles.item, className)}
		{...props}
	/>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof BaseAccordion.Trigger>,
	React.ComponentPropsWithoutRef<typeof BaseAccordion.Trigger>
>(({ className, children, ...props }, ref) => (
	<BaseAccordion.Header className="flex">
		<BaseAccordion.Trigger
			ref={ref}
			className={cn(accordionStyles.trigger, className)}
			{...props}
		>
			{children}
			<IconChevronDown className="size-lg shrink-0 transition-transform duration-200" />
		</BaseAccordion.Trigger>
	</BaseAccordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof BaseAccordion.Panel>,
	React.ComponentPropsWithoutRef<typeof BaseAccordion.Panel>
>(({ className, children, ...props }, ref) => (
	<BaseAccordion.Panel
		ref={ref}
		className={cn(accordionStyles.content.base)}
		{...props}
	>
		<div className={cn(accordionStyles.content.inner, className)}>
			{children}
		</div>
	</BaseAccordion.Panel>
));

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
