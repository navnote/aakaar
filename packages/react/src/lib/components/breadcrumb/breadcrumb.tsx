import { mergeProps } from "@base-ui-components/react";
import { IconChevronRight, IconDots } from "@tabler/icons-react";
import * as React from "react";
import { coreClass } from "../../core/core";

const breadcrumbStyles = {
	nav: "",
	list: coreClass.cn(
		coreClass.flexBox.row,
		coreClass.alignment.center,
		coreClass.typography.size.small,
		"flex-wrap break-words list-none",
		coreClass.spacing.small,
		coreClass.colors.surface,
		"sm:gap-md",
	),
	item: coreClass.cn(coreClass.flexBox.inlineCenter, coreClass.spacing.small),
	link: coreClass.cn(
		coreClass.interactivity.transitions.colors,
		"hover:text-primary",
	),
	page: coreClass.cn(coreClass.typography.weight.regular),
	separator: "[&>svg]:size-md",
	ellipsis: coreClass.cn(
		coreClass.alignment.center,
		coreClass.dimensions.medium,
	),
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
	<ol
		ref={ref}
		className={coreClass.cn(breadcrumbStyles.list, className)}
		{...props}
	/>
));
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<
	HTMLLIElement,
	React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
	<li
		ref={ref}
		className={coreClass.cn(breadcrumbStyles.item, className)}
		{...props}
	/>
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
			className={coreClass.cn(breadcrumbStyles.link, className)}
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
		className={coreClass.cn(breadcrumbStyles.page, className)}
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
		className={coreClass.cn(breadcrumbStyles.separator, className)}
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
		className={coreClass.cn(breadcrumbStyles.ellipsis, className)}
		{...props}
	>
		<IconDots className={coreClass.dimensions.medium} />
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
