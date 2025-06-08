import * as DialogPrimitive from "@radix-ui/react-dialog";
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
	header: cn(flexBox.column, "space-y-md text-center sm:text-left"),
	footer: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-xs",
	title: cn(typography.weight.semibold, "text-lg leading-none tracking-tight"),
	description: cn(typography.size.small, "text-on-surface"),
	closeIcon: cn(dimensions.medium),
};

const Dialog: typeof DialogPrimitive.Root = DialogPrimitive.Root;

const DialogTrigger: typeof DialogPrimitive.Trigger = DialogPrimitive.Trigger;

const DialogPortal: typeof DialogPrimitive.Portal = DialogPrimitive.Portal;

const DialogClose: typeof DialogPrimitive.Close = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(dialogStyles.overlay, className)}
		{...props}
	/>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={cn(dialogStyles.content, className)}
			{...props}
		>
			{children}
			<DialogPrimitive.Close className={dialogStyles.close}>
				<IconX className={dialogStyles.closeIcon} />
				<span className="sr-only">Close</span>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

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
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn(dialogStyles.title, className)}
		{...props}
	/>
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cn(dialogStyles.description, className)}
		{...props}
	/>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

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
