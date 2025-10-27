import { Toast as BaseToast } from "@base-ui-components/react";
import * as React from "react";
import {
	borders,
	cn,
	colors,
	padding,
	positioning,
	shadows,
	shape,
	typography,
} from "../../core/core";

const toastStyles = {
	root: cn(
		positioning.absolute,
		"w-full max-w-full",
		shape.rounded,
		borders.variant,
		colors.surface,
		padding.small,
		shadows.depth.medium,
		"select-none cursor-default",
		"origin-bottom-center",
		"transition-[transform,opacity,height] duration-500",
		"z-[calc(1000-var(--toast-index))]",
		"h-[var(--toast-frontmost-height,var(--toast-height))]",
		// Transform for stacking animation
		"translate-x-[var(--toast-swipe-movement-x)]",
		"translate-y-[calc(var(--toast-swipe-movement-y)-(var(--toast-index)*0.75rem))]",
		// Expanded state
		"[&[data-expanded]]:translate-y-[calc(var(--toast-offset-y)*-1+(var(--toast-index)*-0.75rem)+var(--toast-swipe-movement-y))]",
		"[&[data-expanded]]:h-[var(--toast-height)]",
		// Animation states
		"[&[data-starting-style],[&[data-ending-style]]:translate-y-[150%]",
		"[&[data-limited]]:opacity-0",
		"[&[data-ending-style]]:opacity-0",
		// Swipe directions
		"[&[data-ending-style][data-swipe-direction=up]]:translate-y-[calc(var(--toast-swipe-movement-y)-150%)]",
		"[&[data-ending-style][data-swipe-direction=down]]:translate-y-[calc(var(--toast-swipe-movement-y)+150%)]",
		"[&[data-ending-style][data-swipe-direction=left]]:translate-x-[calc(var(--toast-swipe-movement-x)-150%)]",
		"[&[data-ending-style][data-swipe-direction=right]]:translate-x-[calc(var(--toast-swipe-movement-x)+150%)]",
	),
	viewport: cn(
		positioning.fixed,
		"bottom-[12rem] right-md w-[250px] z-[1] md:bottom-[12rem] md:right-lg md:w-[300px]",
	),
	title: cn(typography.size.small, "font-medium !m-0 !pt-0"),
	description: cn(typography.size.extraSmall, "m-none"),
	close: cn(
		positioning.absolute,
		"top-sm right-sm size-xs rounded p-0 border-0 bg-transparent",
		"flex items-center justify-center",
		"hover:bg-secondary-container",
	),
};

const ToastProvider = BaseToast.Provider;

const ToastViewport = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseToast.Viewport>
>(({ className, ...props }, ref) => (
	<BaseToast.Viewport
		ref={ref}
		className={cn(toastStyles.viewport, className)}
		{...props}
	/>
));
ToastViewport.displayName = "ToastViewport";

const ToastPortal = BaseToast.Portal;

const Toast = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseToast.Root>
>(({ className, ...props }, ref) => (
	<BaseToast.Root
		ref={ref}
		className={cn(toastStyles.root, className)}
		{...props}
	/>
));
Toast.displayName = "Toast";

const ToastTitle = React.forwardRef<
	HTMLParagraphElement,
	React.ComponentPropsWithoutRef<typeof BaseToast.Title>
>(({ className, ...props }, ref) => (
	<BaseToast.Title
		ref={ref}
		className={cn(toastStyles.title, className)}
		{...props}
	/>
));
ToastTitle.displayName = "ToastTitle";

const ToastDescription = React.forwardRef<
	HTMLParagraphElement,
	React.ComponentPropsWithoutRef<typeof BaseToast.Description>
>(({ className, ...props }, ref) => (
	<BaseToast.Description
		ref={ref}
		className={cn(toastStyles.description, className)}
		{...props}
	/>
));
ToastDescription.displayName = "ToastDescription";

const ToastClose = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof BaseToast.Close>
>(({ className, ...props }, ref) => (
	<BaseToast.Close
		ref={ref}
		className={cn(toastStyles.close, className)}
		{...props}
	/>
));
ToastClose.displayName = "ToastClose";

const ToastAction = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof BaseToast.Action>
>(({ className, ...props }, ref) => (
	<BaseToast.Action
		ref={ref}
		className={cn(padding.small, typography.size.small, className)}
		{...props}
	/>
));
ToastAction.displayName = "ToastAction";

export {
	Toast,
	ToastAction,
	ToastClose,
	ToastDescription,
	ToastPortal,
	ToastProvider,
	ToastTitle,
	ToastViewport,
};

// Import the base Toast namespace to access useToastManager
import { Toast as BaseToastNS } from "@base-ui-components/react";
const ToastWithManager = {
	Provider: ToastProvider,
	Viewport: ToastViewport,
	Portal: ToastPortal,
	Root: Toast,
	Title: ToastTitle,
	Description: ToastDescription,
	Close: ToastClose,
	Action: ToastAction,
	useToastManager: BaseToastNS.useToastManager,
};
export { ToastWithManager as default };
