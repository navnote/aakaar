import { mergeProps } from "@base-ui-components/react";
import { IconChevronRight, IconDots } from "@tabler/icons-react";
import * as React from "react";
import {
	alignment,
	cn,
	flexBox,
	interactivity,
	typography,
} from "../../core/core";

const breadcrumbStyles = {
	nav: "",
	list: cn(
		flexBox.row,
		alignment.center,
		typography.size.small,
		"flex-wrap gap-xs break-words text-on-background sm:gap-md list-none",
	),
	item: cn(flexBox.inlineCenter, "gap-xs"),
	link: cn(interactivity.transitions.colors, "hover:text-primary"),
	page: cn(typography.weight.regular, "text-primary"),
	separator: "[&>svg]:size-md",
	ellipsis: cn(alignment.center, "size-md"),
};
const Breadcrumb = React.forwardRef<
	HTMLElement,
	React.HTMLAttributes<HTMLElement>
>(({ ...props }, ref) => (
	<nav
		ref={ref}
		aria-label="breadcrumb"
		className={breadcrumbStyles.nav}
		{...props}
	/>
));
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
	HTMLOListElement,
	React.OlHTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
	<ol ref={ref} className={cn(breadcrumbStyles.list, className)} {...props} />
));
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<
	HTMLLIElement,
	React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
	<li ref={ref} className={cn(breadcrumbStyles.item, className)} {...props} />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentPropsWithoutRef<"a"> & {
		asChild?: boolean;
	}
>(({ asChild, className, ...props }, ref) => {
	const Comp = asChild ? "span" : "a";
	const mergedProps = asChild
		? mergeProps(props, { role: "link", tabIndex: 0 })
		: props;

	return (
		<Comp
			ref={ref}
			className={cn(breadcrumbStyles.link, className)}
			{...mergedProps}
		/>
	);
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		role="link"
		aria-current="page"
		className={cn(breadcrumbStyles.page, className)}
		{...props}
	/>
));
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
	children,
	className,
	...props
}: React.ComponentProps<"li">) => (
	<li
		role="presentation"
		aria-hidden="true"
		className={cn(breadcrumbStyles.separator, className)}
		{...props}
	>
		{children ?? <IconChevronRight />}
	</li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({
	className,
	...props
}: React.ComponentProps<"span">) => (
	<span
		role="presentation"
		aria-hidden="true"
		className={cn(breadcrumbStyles.ellipsis, className)}
		{...props}
	>
		<IconDots className="size-md" />
		<span className="sr-only">More</span>
	</span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
};
