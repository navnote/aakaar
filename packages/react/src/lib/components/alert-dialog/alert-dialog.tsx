import {
	AlertDialog as BaseAlertDialog,
	mergeProps,
} from "@base-ui-components/react";
import * as React from "react";
import { coreClass } from "../../core/core";

const alertDialogStyles = {
	overlay: coreClass.cn(
		coreClass.colors.overlay,
		coreClass.alignment.center,
		coreClass.positioning.fixed,
		coreClass.positioning.inset.full,
		coreClass.utilities.zIndex.modal,
		coreClass.interactivity.transitions.opacity,
	),
	content: coreClass.cn(
		coreClass.shape.roundedWithBorder,
		coreClass.colors.surface,
		coreClass.flexBox.column,
		coreClass.spacing.medium,
		coreClass.padding.medium,
		coreClass.shadows.depth.medium,
		coreClass.positioning.fixed,
		coreClass.positioning.inset.center,
		coreClass.transforms.center,
		coreClass.utilities.zIndex.modal,
		coreClass.interactivity.transitions.all,
	),
	header: coreClass.cn(
		coreClass.flexBox.column,
		coreClass.spacing.medium,
		"text-center sm:text-left",
	),
	footer: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-xs",
	title: coreClass.cn(
		coreClass.typography.weight.semibold,
		"text-lg leading-none tracking-tight",
	),
	description: coreClass.cn(
		coreClass.typography.size.small,
		coreClass.colors.surface,
	),
};

const AlertDialog = BaseAlertDialog.Root;
const AlertDialogTrigger = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Trigger> & {
		asChild?: boolean;
	}
>(({ asChild, children, ...props }, ref) => {
	if (asChild && React.isValidElement(children)) {
		return (
			<BaseAlertDialog.Trigger
				{...props}
				ref={ref}
				render={(triggerProps) => {
					return React.cloneElement(
						children as React.ReactElement,
						mergeProps(
							triggerProps as React.ComponentProps<"button">,
							children.props as React.ComponentProps<"button">,
						),
					);
				}}
			/>
		);
	}
	return (
		<BaseAlertDialog.Trigger {...props} ref={ref}>
			{children}
		</BaseAlertDialog.Trigger>
	);
});
AlertDialogTrigger.displayName = "AlertDialogTrigger";
const AlertDialogClose = BaseAlertDialog.Close;

const AlertDialogOverlay = React.forwardRef<
	React.ElementRef<typeof BaseAlertDialog.Backdrop>,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Backdrop>
>(({ className, ...props }, ref) => (
	<BaseAlertDialog.Backdrop
		ref={ref}
		className={coreClass.cn(alertDialogStyles.overlay, className)}
		{...props}
	/>
));
AlertDialogOverlay.displayName = "AlertDialogOverlay";

const AlertDialogContent = React.forwardRef<
	React.ElementRef<typeof BaseAlertDialog.Popup>,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Popup>
>(({ className, children, ...props }, ref) => (
	<BaseAlertDialog.Portal>
		<AlertDialogOverlay />
		<BaseAlertDialog.Popup
			ref={ref}
			className={coreClass.cn(alertDialogStyles.content, className)}
			{...props}
		>
			{children}
		</BaseAlertDialog.Popup>
	</BaseAlertDialog.Portal>
));
AlertDialogContent.displayName = "AlertDialogContent";

const AlertDialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={coreClass.cn(alertDialogStyles.header, className)}
		{...props}
	/>
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={coreClass.cn(alertDialogStyles.footer, className)}
		{...props}
	/>
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
	React.ElementRef<typeof BaseAlertDialog.Title>,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Title>
>(({ className, ...props }, ref) => (
	<BaseAlertDialog.Title
		ref={ref}
		className={coreClass.cn(alertDialogStyles.title, className)}
		{...props}
	/>
));
AlertDialogTitle.displayName = "AlertDialogTitle";

const AlertDialogDescription = React.forwardRef<
	React.ElementRef<typeof BaseAlertDialog.Description>,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Description>
>(({ className, ...props }, ref) => (
	<BaseAlertDialog.Description
		ref={ref}
		className={coreClass.cn(alertDialogStyles.description, className)}
		{...props}
	/>
));
AlertDialogDescription.displayName = "AlertDialogDescription";

export {
	AlertDialog,
	AlertDialogClose,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	AlertDialogTitle,
	AlertDialogTrigger,
};
