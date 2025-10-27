import { AlertDialog as BaseAlertDialog } from "@base-ui-components/react";
import * as React from "react";
import {
	alignment,
	cn,
	colors,
	flexBox,
	interactivity,
	padding,
	positioning,
	shadows,
	shape,
	spacing,
	transforms,
	typography,
	utilities,
} from "../../core/core";

const alertDialogStyles = {
	overlay: cn(
		colors.overlay,
		alignment.center,
		positioning.fixed,
		positioning.inset.full,
		utilities.zIndex.modal,
		interactivity.transitions.opacity,
	),
	content: cn(
		shape.roundedWithBorder,
		colors.surface,
		flexBox.column,
		spacing.medium,
		padding.medium,
		shadows.depth.medium,
		positioning.fixed,
		positioning.inset.center,
		transforms.center,
		utilities.zIndex.modal,
		interactivity.transitions.all,
	),
	header: cn(flexBox.column, spacing.medium, "text-center sm:text-left"),
	footer: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-xs",
	title: cn(typography.weight.semibold, "text-lg leading-none tracking-tight"),
	description: cn(typography.size.small, colors.surface),
};

const AlertDialog = BaseAlertDialog.Root;
const AlertDialogTrigger = BaseAlertDialog.Trigger;
const AlertDialogClose = BaseAlertDialog.Close;

const AlertDialogOverlay = React.forwardRef<
	React.ElementRef<typeof BaseAlertDialog.Backdrop>,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Backdrop>
>(({ className, ...props }, ref) => (
	<BaseAlertDialog.Backdrop
		ref={ref}
		className={cn(alertDialogStyles.overlay, className)}
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
			className={cn(alertDialogStyles.content, className)}
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
	<div className={cn(alertDialogStyles.header, className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(alertDialogStyles.footer, className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
	React.ElementRef<typeof BaseAlertDialog.Title>,
	React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Title>
>(({ className, ...props }, ref) => (
	<BaseAlertDialog.Title
		ref={ref}
		className={cn(alertDialogStyles.title, className)}
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
		className={cn(alertDialogStyles.description, className)}
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
