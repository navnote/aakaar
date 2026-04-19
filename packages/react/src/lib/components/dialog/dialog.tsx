import { Dialog as BaseDialog, mergeProps } from "@base-ui-components/react";
import { IconX } from "@tabler/icons-react";
import * as React from "react";
import { coreClass } from "../../core/core";

const dialogStyles = {
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
	close: coreClass.cn(
		coreClass.positioning.absolute,
		coreClass.positioning.corners.topRight,
		coreClass.shape.roundedWithBorder,
		coreClass.interactivity.transitions.opacity,
		coreClass.interactivity.states.clickable,
		coreClass.interactivity.states.disabled,
		coreClass.interactivity.dataStates.open,
		coreClass.interactivity.dataStates.checked,
		coreClass.interactivity.dataStates.selected,
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
	closeIcon: coreClass.cn(coreClass.dimensions.medium),
};

const Dialog = BaseDialog.Root;

const DialogTrigger = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Trigger> & {
		asChild?: boolean;
	}
>(({ asChild, children, ...props }, ref) => {
	if (asChild && React.isValidElement(children)) {
		return (
			<BaseDialog.Trigger
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
		<BaseDialog.Trigger {...props} ref={ref}>
			{children}
		</BaseDialog.Trigger>
	);
});
DialogTrigger.displayName = "DialogTrigger";

const DialogPortal = BaseDialog.Portal;

const DialogClose = BaseDialog.Close;

const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Backdrop>,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>
>(({ className, ...props }, ref) => (
	<BaseDialog.Backdrop
		ref={ref}
		className={coreClass.cn(dialogStyles.overlay, className)}
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
			className={coreClass.cn(dialogStyles.content, className)}
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
	<div className={coreClass.cn(dialogStyles.header, className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={coreClass.cn(dialogStyles.footer, className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
	React.ElementRef<typeof BaseDialog.Title>,
	React.ComponentPropsWithoutRef<typeof BaseDialog.Title>
>(({ className, ...props }, ref) => (
	<BaseDialog.Title
		ref={ref}
		className={coreClass.cn(dialogStyles.title, className)}
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
		className={coreClass.cn(dialogStyles.description, className)}
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
