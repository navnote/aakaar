import { Dialog as BaseDialog } from "@base-ui-components/react";
import { IconX } from "@tabler/icons-react";
import * as React from "react";
import {
	alignment,
	cn,
	colors,
	dimensions,
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

const dialogStyles = {
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
	close: cn(
		positioning.absolute,
		positioning.corners.topRight,
		shape.roundedWithBorder,
		interactivity.transitions.opacity,
		interactivity.states.clickable,
		interactivity.states.disabled,
		interactivity.dataStates.open,
		interactivity.dataStates.checked,
		interactivity.dataStates.selected,
	),
	header: cn(flexBox.column, spacing.medium, "text-center sm:text-left"),
	footer: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-xs",
	title: cn(typography.weight.semibold, "text-lg leading-none tracking-tight"),
	description: cn(typography.size.small, colors.surface),
	closeIcon: cn(dimensions.medium),
};

const Dialog = BaseDialog.Root;

const DialogTrigger = BaseDialog.Trigger;

const DialogPortal = BaseDialog.Portal;

const DialogClose = BaseDialog.Close;

const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Backdrop>,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>
>(({ className, ...props }, ref) => (
	<BaseDialog.Backdrop
		ref={ref}
		className={cn(dialogStyles.overlay, className)}
		{...props}
	/>
));
DialogOverlay.displayName = "DialogOverlay";

const DialogContent = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Popup>,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Popup>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<BaseDialog.Popup
			ref={ref}
			className={cn(dialogStyles.content, className)}
			{...props}
		>
			{children}
			<DialogClose className={dialogStyles.close}>
				<IconX className={dialogStyles.closeIcon} />
				<span className="sr-only">Close</span>
			</DialogClose>
		</BaseDialog.Popup>
	</DialogPortal>
));
DialogContent.displayName = "DialogContent";

const DialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(dialogStyles.header, className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(dialogStyles.footer, className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Title>,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Title>
>(({ className, ...props }, ref) => (
	<BaseDialog.Title
		ref={ref}
		className={cn(dialogStyles.title, className)}
		{...props}
	/>
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Description>,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Description>
>(({ className, ...props }, ref) => (
	<BaseDialog.Description
		ref={ref}
		className={cn(dialogStyles.description, className)}
		{...props}
	/>
));
DialogDescription.displayName = "DialogDescription";

export {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
};
