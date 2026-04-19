import { Accordion as BaseAccordion } from "@base-ui-components/react";
import { IconChevronDown } from "@tabler/icons-react";
import { motion as framerMotion } from "framer-motion";
import * as React from "react";
import { coreClass } from "../../core/core";

const accordionStyles = {
	item: "",
	trigger: coreClass.cn(
		coreClass.alignment.spaceBetween,
		coreClass.flexBox.inlineCenter,
		coreClass.padding.extraSmall,
		coreClass.typography.weight.medium,
		coreClass.interactivity.transitions.all,
		"flex-1 hover:underline",
	),
	content: {
		base: coreClass.cn(
			coreClass.utilities.overflow.hidden,
			coreClass.typography.size.small,
			coreClass.interactivity.transitions.all,
		),
		inner: coreClass.cn(coreClass.paddingY.extraSmall, "pt-0"),
	},
};

const Accordion = BaseAccordion.Root;

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof BaseAccordion.Item>,
	React.ComponentPropsWithoutRef<typeof BaseAccordion.Item>
>(({ className, ...props }, ref) => (
	<BaseAccordion.Item
		ref={ref}
		className={coreClass.cn(accordionStyles.item, className)}
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
				className={coreClass.cn(accordionStyles.trigger, className)}
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
					transition={coreClass.motion.transitions.default}
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
		className={coreClass.cn(accordionStyles.content.base)}
		{...props}
	>
		<framerMotion.div
			variants={{
				open: {
					height: "auto",
					opacity: 1,
					transition: {
						height: coreClass.motion.transitions.spring,
						opacity: coreClass.motion.transitions.default,
					},
				},
				closed: {
					height: 0,
					opacity: 0,
					transition: {
						height: coreClass.motion.transitions.default,
						opacity: coreClass.motion.transitions.fast,
					},
				},
			}}
			className={coreClass.cn(accordionStyles.content.inner, className)}
		>
			{children}
		</framerMotion.div>
	</BaseAccordion.Panel>
));

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
