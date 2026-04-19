import * as React from "react";
import { coreClass } from "../../core/core";

const cardStyles = {
	base: coreClass.cn(
		coreClass.colors.surface,
		coreClass.borders.variant,
		coreClass.shape.rounded,
	),
	header: coreClass.cn(coreClass.flexBox.column, coreClass.padding.medium),
	title: coreClass.cn(
		coreClass.typography.weight.semibold,
		coreClass.typography.noWrap,
		"tracking-tight mt-0",
	),
	description: coreClass.cn(
		coreClass.typography.size.small,
		coreClass.colors.surface,
	),
	content: coreClass.cn(coreClass.padding.medium, "pt-0"),
	footer: coreClass.cn(
		coreClass.alignment.start,
		coreClass.padding.medium,
		"pt-0",
	),
};

const Card = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={coreClass.cn(cardStyles.base, className)}
		{...props}
	/>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={coreClass.cn(cardStyles.header, className)}
		{...props}
	/>
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement> & { children: React.ReactNode }
>(({ className, children, ...props }, ref) => (
	<h3
		ref={ref}
		className={coreClass.cn(cardStyles.title, className)}
		{...props}
	>
		{children}
	</h3>
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={coreClass.cn(cardStyles.description, className)}
		{...props}
	/>
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={coreClass.cn(cardStyles.content, className)}
		{...props}
	/>
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={coreClass.cn(cardStyles.footer, className)}
		{...props}
	/>
));
CardFooter.displayName = "CardFooter";

export {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
};
