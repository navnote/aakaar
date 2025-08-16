import * as React from "react";
import {
	alignment,
	cn,
	colors,
	flexBox,
	padding,
	shadows,
	typography,
} from "../../core/core";

const cardStyles = {
	base: cn(colors.surface, shadows.depth.low),
	header: cn(flexBox.column, padding.medium),
	title: cn(
		typography.weight.semibold,
		typography.noWrap,
		"tracking-tight mt-0",
	),
	description: cn(typography.size.small, colors.surface),
	content: cn(padding.medium, "pt-0"),
	footer: cn(alignment.start, padding.medium, "pt-0"),
};

const Card = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(cardStyles.base, className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(cardStyles.header, className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement> & { children: React.ReactNode }
>(({ className, children, ...props }, ref) => (
	<h3 ref={ref} className={cn(cardStyles.title, className)} {...props}>
		{children}
	</h3>
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn(cardStyles.description, className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(cardStyles.content, className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(cardStyles.footer, className)} {...props} />
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
