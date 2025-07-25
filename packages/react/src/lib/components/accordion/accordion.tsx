import { Accordion as BaseAccordion } from "@base-ui-components/react";
import { IconChevronDown } from "@tabler/icons-react";
import { motion as framerMotion } from "framer-motion";
import * as React from "react";
import {
	alignment,
	cn,
	flexBox,
	interactivity,
	motion,
	padding,
	paddingY,
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
		"flex-1 hover:underline",
	),
	content: {
		base: cn(
			utilities.overflow.hidden,
			typography.size.small,
			interactivity.transitions.all,
		),
		inner: cn(paddingY.extraSmall, "pt-0"),
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
>(({ className, children, ...props }, ref) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<BaseAccordion.Header className="flex">
			<BaseAccordion.Trigger
				ref={ref}
				className={cn(accordionStyles.trigger, className)}
				onClick={() => setIsOpen(!isOpen)}
				{...props}
			>
				{children}
				<framerMotion.div
					animate={isOpen ? "open" : "closed"}
					variants={{
						open: { rotate: 180 },
						closed: { rotate: 0 },
					}}
					transition={motion.transitions.default}
					className="size-lg shrink-0"
				>
					<IconChevronDown className="size-lg" />
				</framerMotion.div>
			</BaseAccordion.Trigger>
		</BaseAccordion.Header>
	);
});
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
		<framerMotion.div
			variants={{
				open: {
					height: "auto",
					opacity: 1,
					transition: {
						height: motion.transitions.spring,
						opacity: motion.transitions.default,
					},
				},
				closed: {
					height: 0,
					opacity: 0,
					transition: {
						height: motion.transitions.default,
						opacity: motion.transitions.fast,
					},
				},
			}}
			className={cn(accordionStyles.content.inner, className)}
		>
			{children}
		</framerMotion.div>
	</BaseAccordion.Panel>
));

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
