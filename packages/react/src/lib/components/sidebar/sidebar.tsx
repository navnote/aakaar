import { Dialog as BaseDialog } from "@base-ui-components/react";
import { IconLayoutSidebar } from "@tabler/icons-react";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import {
	borders,
	cn,
	colors,
	dimensions,
	flexBox,
	interactivity,
	measurements,
	padding,
	positioning,
	shadows,
	shape,
	spacing,
	typography,
	utilities,
} from "../../core/core";
import { Button } from "../button/button";
import {
	Dialog,
	DialogDescription,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
} from "../dialog/dialog";
import { Separator } from "../separator/separator";
import { Skeleton } from "../skeleton/skeleton";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../tooltip/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
// Collapsed width: xl + sm gives room for icon, padding, borders, and active-bg inset.
const SIDEBAR_WIDTH_ICON = "calc(var(--spacing-xl) + var(--spacing-sm))";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

// CSS variables for sidebar width
const SIDEBAR_CSS_VARS = {
	"--sidebar-width": SIDEBAR_WIDTH,
	"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
} as React.CSSProperties;

const sidebarStyles = {
	// Layout
	wrapper: cn(flexBox.row, measurements.height.full, measurements.width.full),
	provider: cn(colors.backgrounds.main, positioning.relative, "min-h-svh"),

	// Desktop sidebar
	sidebarContainer: cn(
		positioning.fixed,
		"inset-y-0 z-50 hidden h-svh transition-[left,right,width] duration-200 ease-linear md:flex",
		colors.surface,
		borders.variant,
	),
	sidebarContainerFloating: cn(
		positioning.fixed,
		"inset-y-0 z-50 hidden h-svh transition-[left,right,width] duration-200 ease-linear md:flex",
		colors.surface,
		padding.extraSmall,
	),

	// Sidebar inner
	sidebar: cn(colors.surface, flexBox.column, measurements.height.full),
	sidebarInner: cn(
		flexBox.column,
		measurements.height.full,
		measurements.width.full,
		colors.surface,
	),
	sidebarInnerFloating: cn(
		flexBox.column,
		measurements.height.full,
		measurements.width.full,
		shape.roundedWithBorder,
		shadows.depth.low,
	),
	sidebarNone: cn(flexBox.column, measurements.height.full, colors.surface),

	// Mobile sidebar
	sidebarMobile: cn(
		colors.surface,
		flexBox.column,
		measurements.height.full,
		"p-0",
	),

	// Gap
	gap: cn(
		positioning.relative,
		"h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
	),
	gapCollapsed: "w-0",
	gapCollapsedFloating: "w-[calc(var(--sidebar-width-icon)+1rem)]",
	gapIcon: "w-[--sidebar-width-icon]",

	// Trigger & Rail
	trigger: cn(dimensions.large, colors.accent.justPrimary),
	rail: cn(
		positioning.absolute,
		"inset-y-0 z-20 hidden -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-outline-variant sm:flex",
	),
	railLeft: "-right-md",
	railRight: "left-0",

	// Inset
	inset: cn(
		positioning.relative,
		flexBox.column,
		measurements.width.full,
		"flex-1",
		colors.backgrounds.main,
	),

	// Input
	input: cn(
		dimensions.small,
		measurements.width.full,
		colors.backgrounds.main,
		"shadow-none",
	),

	// Structural elements
	header: cn(flexBox.column, spacing.small, padding.extraSmall),
	footer: cn(flexBox.column, spacing.small, padding.extraSmall),
	separator: cn("mx-sm w-auto", colors.backgrounds.surfaceVariant),
	content: cn(
		flexBox.column,
		"min-h-0 flex-1 gap-sm overflow-auto",
		"group-data-[collapsible=icon]:overflow-hidden",
	),

	// Groups
	group: cn(
		positioning.relative,
		flexBox.column,
		measurements.width.full,
		"min-w-0",
		padding.extraSmall,
		"group-data-[collapsible=icon]:px-xs group-data-[collapsible=icon]:py-0",
	),
	groupLabel: cn(
		"flex h-xl items-center",
		measurements.width.full,
		"shrink-0 rounded-default px-sm text-xs font-medium text-on-surface/70 outline-none transition-[margin,opacity] duration-200 ease-linear",
		"group-data-[collapsible=icon]:-mt-xl group-data-[collapsible=icon]:opacity-0",
	),
	groupAction: cn(
		positioning.absolute,
		"top-md right-md flex aspect-square items-center justify-center rounded-default p-0 text-on-surface outline-none transition-transform hover:bg-surface-variant",
		"after:absolute after:-inset-sm md:after:hidden",
		"group-data-[collapsible=icon]:hidden",
	),
	groupContent: cn(measurements.width.full, typography.size.small),

	// Menu
	menu: cn(flexBox.column, measurements.width.full, "min-w-0 gap-sm"),
	menuItem: "group/menu-item relative",
	menuButton: [
		// Layout
		"peer/menu-button flex w-full items-center justify-start gap-sm overflow-hidden",
		// Shape & spacing
		"rounded-default p-xs text-left text-sm",
		// Color & typography
		"text-on-surface outline-none transition-colors",
		// Interactive states
		"hover:bg-surface-variant focus-visible:ring-2 focus-visible:ring-outline-variant",
		"disabled:pointer-events-none disabled:opacity-50",
		// Active state
		"data-[active=true]:bg-surface-variant data-[active=true]:font-medium",
		// Icon styling
		"[&>span:last-child]:truncate [&>svg]:size-[--spacing-md] [&>svg]:shrink-0 [&>svg]:text-on-surface-variant",
		// Collapsed: only hide text — keep layout identical so icon doesn't jump
		"group-data-[collapsible=icon]:[&>span]:hidden group-data-[collapsible=icon]:[&>svg~*]:hidden",
	].join(" "),
	menuButtonOutline: cn(
		colors.backgrounds.main,
		"shadow-[0_0_0_1px_hsl(var(--outline))] hover:bg-surface-variant hover:shadow-[0_0_0_1px_hsl(var(--outline-variant))]",
	),
	menuButtonSm: "py-xs h-lg text-xs",
	menuButtonLg: "h-xl text-sm",
	menuAction: cn(
		positioning.absolute,
		"top-[0.375rem] right-xs flex aspect-square items-center justify-center rounded-default p-0 text-on-surface outline-none transition-transform hover:bg-surface-variant",
		"after:absolute after:-inset-sm md:after:hidden",
		"peer-data-[size=sm]/menu-button:top-xs",
		"peer-data-[size=default]/menu-button:top-[0.375rem]",
		"peer-data-[size=lg]/menu-button:top-[0.625rem]",
		"group-data-[collapsible=icon]:hidden",
	),
	menuActionShowOnHover:
		"group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-on-surface data-[state=open]:opacity-100 md:opacity-0",
	menuBadge: cn(
		positioning.absolute,
		"right-xs flex h-sm min-w-[1.25rem] items-center justify-center rounded-default px-xs text-xs font-medium text-on-surface tabular-nums select-none",
		"peer-data-[size=sm]/menu-button:top-xs",
		"peer-data-[size=default]/menu-button:top-[0.375rem]",
		"peer-data-[size=lg]/menu-button:top-[0.625rem]",
		"group-data-[collapsible=icon]:hidden",
	),
	menuSkeleton: cn(flexBox.inlineCenter, "h-md gap-sm rounded-default px-sm"),
	menuSkeletonIcon: cn(dimensions.medium, "rounded-default"),
	menuSkeletonText: "h-sm flex-1",
	menuSub: cn(
		flexBox.column,
		"mx-[0.875rem] min-w-0 translate-x-px gap-xs border-l border-outline-variant px-[0.625rem] py-xs",
		"group-data-[collapsible=icon]:hidden",
	),
	menuSubItem: "group/menu-sub-item relative",
	menuSubButton: cn(
		shape.rounded,
		interactivity.states.hover,
		interactivity.states.disabled,
		interactivity.transitions.opacity,
		shadows.focusRing.primary,
		"min-w-0 -translate-x-px gap-sm overflow-hidden p-sm text-sm data-[active=true]:bg-surface-variant group-data-[collapsible=icon]:hidden",
	),
	menuSubButtonSm: "text-xs",
	menuSubButtonMd: "text-sm",
};

type SidebarContextProps = {
	state: "expanded" | "collapsed";
	open: boolean;
	setOpen: (open: boolean) => void;
	openMobile: boolean;
	setOpenMobile: (open: boolean) => void;
	isMobile: boolean;
	toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
	const context = React.useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider.");
	}
	return context;
}

function useIsMobile() {
	const [isMobile, setIsMobile] = React.useState(false);

	React.useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	return isMobile;
}

interface SidebarProviderProps extends React.ComponentProps<"div"> {
	defaultOpen?: boolean;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

function SidebarProvider({
	defaultOpen = true,
	open: openProp,
	onOpenChange: setOpenProp,
	className,
	style,
	children,
	...props
}: SidebarProviderProps) {
	const isMobile = useIsMobile();
	const [openMobile, setOpenMobile] = React.useState(false);

	const [_open, _setOpen] = React.useState(defaultOpen);
	const open = openProp ?? _open;
	const setOpen = React.useCallback(
		(value: boolean | ((value: boolean) => boolean)) => {
			const openState = typeof value === "function" ? value(open) : value;
			if (setOpenProp) {
				setOpenProp(openState);
			} else {
				_setOpen(openState);
			}
			document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
		},
		[setOpenProp, open],
	);

	const toggleSidebar = React.useCallback(() => {
		return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
	}, [isMobile, setOpen]);

	React.useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (
				event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
				(event.metaKey || event.ctrlKey)
			) {
				event.preventDefault();
				toggleSidebar();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [toggleSidebar]);

	const state = open ? "expanded" : "collapsed";

	const contextValue = React.useMemo<SidebarContextProps>(
		() => ({
			state,
			open,
			setOpen,
			isMobile,
			openMobile,
			setOpenMobile,
			toggleSidebar,
		}),
		[state, open, setOpen, isMobile, openMobile, toggleSidebar],
	);

	return (
		<SidebarContext.Provider value={contextValue}>
			<TooltipProvider delay={0}>
				<div
					data-slot="sidebar-wrapper"
					className={cn(sidebarStyles.wrapper, className)}
					style={{
						...SIDEBAR_CSS_VARS,
						...style,
					}}
					{...props}
				>
					{children}
				</div>
			</TooltipProvider>
		</SidebarContext.Provider>
	);
}

interface SidebarProps extends React.ComponentProps<"div"> {
	side?: "left" | "right";
	variant?: "sidebar" | "floating" | "inset";
	collapsible?: "offcanvas" | "icon" | "none";
}

function Sidebar({
	side = "left",
	variant = "sidebar",
	collapsible = "offcanvas",
	className,
	children,
	...props
}: SidebarProps) {
	const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

	if (collapsible === "none") {
		return (
			<div
				data-slot="sidebar"
				className={cn(sidebarStyles.sidebarNone, className)}
				style={{ width: SIDEBAR_WIDTH }}
				{...props}
			>
				{children}
			</div>
		);
	}

	if (isMobile) {
		return (
			<Dialog open={openMobile} onOpenChange={setOpenMobile}>
				<DialogPortal>
					<DialogOverlay
						className={cn(
							positioning.fixed,
							positioning.inset.full,
							utilities.zIndex.modal,
							colors.overlay,
						)}
					/>
					<BaseDialog.Popup
						data-sidebar="sidebar"
						data-slot="sidebar"
						data-mobile="true"
						className={cn(
							colors.surface,
							flexBox.column,
							measurements.height.full,
							positioning.fixed,
							"inset-y-0 z-50 p-0",
							side === "left" ? "left-0" : "right-0",
						)}
						style={{
							width: SIDEBAR_WIDTH_MOBILE,
							maxWidth: SIDEBAR_WIDTH_MOBILE,
						}}
					>
						<DialogHeader className="sr-only">
							<DialogTitle>Sidebar</DialogTitle>
							<DialogDescription>
								Displays the mobile sidebar.
							</DialogDescription>
						</DialogHeader>
						{children}
					</BaseDialog.Popup>
				</DialogPortal>
			</Dialog>
		);
	}

	const isFloatingOrInset = variant === "floating" || variant === "inset";

	return (
		<div
			className={cn("group peer hidden text-on-surface md:block")}
			data-state={state}
			data-collapsible={state === "collapsed" ? collapsible : ""}
			data-variant={variant}
			data-side={side}
			data-slot="sidebar"
		>
			<div
				data-slot="sidebar-gap"
				className={cn(
					sidebarStyles.gap,
					state === "collapsed" &&
						collapsible === "offcanvas" &&
						sidebarStyles.gapCollapsed,
					side === "right" && "rotate-180",
					isFloatingOrInset
						? state === "collapsed"
							? sidebarStyles.gapCollapsedFloating
							: "w-[calc(var(--sidebar-width)+1rem)]"
						: state === "collapsed"
							? sidebarStyles.gapIcon
							: undefined,
				)}
			/>
			<div
				data-slot="sidebar-container"
				className={cn(
					isFloatingOrInset
						? sidebarStyles.sidebarContainerFloating
						: sidebarStyles.sidebarContainer,
					side === "left" ? "left-0" : "right-0",
					className,
				)}
				style={{
					width:
						state === "expanded"
							? "var(--sidebar-width)"
							: "var(--sidebar-width-icon)",
				}}
				{...props}
			>
				<div
					data-sidebar="sidebar"
					data-slot="sidebar inner"
					className={cn(
						isFloatingOrInset
							? sidebarStyles.sidebarInnerFloating
							: sidebarStyles.sidebarInner,
					)}
				>
					{children}
				</div>
			</div>
		</div>
	);
}

interface SidebarTriggerProps extends React.ComponentProps<typeof Button> {}

function SidebarTrigger({ className, onClick, ...props }: SidebarTriggerProps) {
	const { toggleSidebar } = useSidebar();

	return (
		<Button
			data-sidebar="trigger"
			data-slot="sidebar-trigger"
			variant="ghost"
			size="icon"
			className={cn(sidebarStyles.trigger, className)}
			onClick={(event) => {
				onClick?.(event);
				toggleSidebar();
			}}
			{...props}
		>
			<IconLayoutSidebar className={dimensions.medium} />
			<span className="sr-only">Toggle Sidebar</span>
		</Button>
	);
}

interface SidebarRailProps extends React.ComponentProps<"button"> {}

function SidebarRail({ className, ...props }: SidebarRailProps) {
	const { toggleSidebar } = useSidebar();

	return (
		<button
			data-sidebar="rail"
			data-slot="sidebar-rail"
			aria-label="Toggle Sidebar"
			tabIndex={-1}
			onClick={toggleSidebar}
			title="Toggle Sidebar"
			className={cn(
				sidebarStyles.rail,
				`group-data-[side=left]:${sidebarStyles.railLeft}`,
				`group-data-[side=right]:${sidebarStyles.railRight}`,
				className,
			)}
			{...props}
		/>
	);
}

interface SidebarInsetProps extends React.ComponentProps<"main"> {}

function SidebarInset({ className, ...props }: SidebarInsetProps) {
	return (
		<main
			data-slot="sidebar-inset"
			className={cn(sidebarStyles.inset, className)}
			{...props}
		/>
	);
}

interface SidebarInputProps extends React.ComponentProps<"input"> {}

function SidebarInput({ className, ...props }: SidebarInputProps) {
	return (
		<input
			data-slot="sidebar-input"
			data-sidebar="input"
			className={cn(sidebarStyles.input, className)}
			{...props}
		/>
	);
}

interface SidebarHeaderProps extends React.ComponentProps<"div"> {}

function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
	return (
		<div
			data-slot="sidebar-header"
			data-sidebar="header"
			className={cn(sidebarStyles.header, className)}
			{...props}
		/>
	);
}

interface SidebarFooterProps extends React.ComponentProps<"div"> {}

function SidebarFooter({ className, ...props }: SidebarFooterProps) {
	return (
		<div
			data-slot="sidebar-footer"
			data-sidebar="footer"
			className={cn(sidebarStyles.footer, className)}
			{...props}
		/>
	);
}

interface SidebarSeparatorProps
	extends React.ComponentProps<typeof Separator> {}

function SidebarSeparator({ className, ...props }: SidebarSeparatorProps) {
	return (
		<Separator
			data-slot="sidebar-separator"
			data-sidebar="separator"
			className={cn(sidebarStyles.separator, className)}
			{...props}
		/>
	);
}

interface SidebarContentProps extends React.ComponentProps<"div"> {}

function SidebarContent({ className, ...props }: SidebarContentProps) {
	return (
		<div
			data-slot="sidebar-content"
			data-sidebar="content"
			className={cn(sidebarStyles.content, className)}
			{...props}
		/>
	);
}

interface SidebarGroupProps extends React.ComponentProps<"div"> {}

function SidebarGroup({ className, ...props }: SidebarGroupProps) {
	return (
		<div
			data-slot="sidebar-group"
			data-sidebar="group"
			className={cn(sidebarStyles.group, className)}
			{...props}
		/>
	);
}

interface SidebarGroupLabelProps extends React.ComponentProps<"div"> {}

function SidebarGroupLabel({ className, ...props }: SidebarGroupLabelProps) {
	return (
		<div
			data-slot="sidebar-group-label"
			data-sidebar="group-label"
			className={cn(sidebarStyles.groupLabel, className)}
			{...props}
		/>
	);
}

interface SidebarGroupActionProps extends React.ComponentProps<"button"> {}

function SidebarGroupAction({ className, ...props }: SidebarGroupActionProps) {
	return (
		<button
			data-slot="sidebar-group-action"
			data-sidebar="group-action"
			className={cn(sidebarStyles.groupAction, className)}
			{...props}
		/>
	);
}

interface SidebarGroupContentProps extends React.ComponentProps<"div"> {}

function SidebarGroupContent({
	className,
	...props
}: SidebarGroupContentProps) {
	return (
		<div
			data-slot="sidebar-group-content"
			data-sidebar="group-content"
			className={cn(sidebarStyles.groupContent, className)}
			{...props}
		/>
	);
}

interface SidebarMenuProps extends React.ComponentProps<"ul"> {}

function SidebarMenu({ className, ...props }: SidebarMenuProps) {
	return (
		<ul
			data-slot="sidebar-menu"
			data-sidebar="menu"
			className={cn(sidebarStyles.menu, className)}
			{...props}
		/>
	);
}

interface SidebarMenuItemProps extends React.ComponentProps<"li"> {}

function SidebarMenuItem({ className, ...props }: SidebarMenuItemProps) {
	return (
		<li
			data-slot="sidebar-menu-item"
			data-sidebar="menu-item"
			className={cn(sidebarStyles.menuItem, className)}
			{...props}
		/>
	);
}

const sidebarMenuButtonVariants = cva(sidebarStyles.menuButton, {
	variants: {
		variant: {
			default: "",
			outline: `${borders.variant} hover:bg-surface-variant`,
		},
		size: {
			default: "h-xl",
			sm: "py-xs h-lg text-xs",
			lg: "h-xl text-sm",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

interface SidebarMenuButtonProps
	extends React.ComponentProps<"button">,
		VariantProps<typeof sidebarMenuButtonVariants> {
	isActive?: boolean;
	tooltip?: string | React.ComponentProps<typeof TooltipContent>;
}

function SidebarMenuButton({
	isActive = false,
	variant = "default",
	size = "default",
	tooltip,
	className,
	...props
}: SidebarMenuButtonProps) {
	const { isMobile, state } = useSidebar();

	const button = (
		<button
			data-slot="sidebar-menu-button"
			data-sidebar="menu-button"
			data-size={size}
			data-active={isActive}
			className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
			{...props}
		/>
	);

	if (!tooltip) {
		return button;
	}

	const tooltipContent =
		typeof tooltip === "string" ? tooltip : tooltip.children;

	return (
		<Tooltip>
			<TooltipTrigger render={button} />
			{state === "collapsed" && !isMobile && (
				<TooltipContent>{tooltipContent}</TooltipContent>
			)}
		</Tooltip>
	);
}

interface SidebarMenuActionProps extends React.ComponentProps<"button"> {
	showOnHover?: boolean;
}

function SidebarMenuAction({
	className,
	showOnHover = false,
	...props
}: SidebarMenuActionProps) {
	return (
		<button
			data-slot="sidebar-menu-action"
			data-sidebar="menu-action"
			className={cn(
				sidebarStyles.menuAction,
				showOnHover && sidebarStyles.menuActionShowOnHover,
				className,
			)}
			{...props}
		/>
	);
}

interface SidebarMenuBadgeProps extends React.ComponentProps<"div"> {}

function SidebarMenuBadge({ className, ...props }: SidebarMenuBadgeProps) {
	return (
		<div
			data-slot="sidebar-menu-badge"
			data-sidebar="menu-badge"
			className={cn(sidebarStyles.menuBadge, className)}
			{...props}
		/>
	);
}

interface SidebarMenuSkeletonProps extends React.ComponentProps<"div"> {
	showIcon?: boolean;
}

function SidebarMenuSkeleton({
	className,
	showIcon = false,
	...props
}: SidebarMenuSkeletonProps) {
	const width = React.useMemo(() => {
		return `${Math.floor(Math.random() * 40) + 50}%`;
	}, []);

	return (
		<div
			data-slot="sidebar-menu-skeleton"
			data-sidebar="menu-skeleton"
			className={cn(sidebarStyles.menuSkeleton, className)}
			{...props}
		>
			{showIcon && <Skeleton className={sidebarStyles.menuSkeletonIcon} />}
			<Skeleton
				className={sidebarStyles.menuSkeletonText}
				style={{
					maxWidth: width,
				}}
			/>
		</div>
	);
}

interface SidebarMenuSubProps extends React.ComponentProps<"ul"> {}

function SidebarMenuSub({ className, ...props }: SidebarMenuSubProps) {
	return (
		<ul
			data-slot="sidebar-menu-sub"
			data-sidebar="menu-sub"
			className={cn(sidebarStyles.menuSub, className)}
			{...props}
		/>
	);
}

interface SidebarMenuSubItemProps extends React.ComponentProps<"li"> {}

function SidebarMenuSubItem({ className, ...props }: SidebarMenuSubItemProps) {
	return (
		<li
			data-slot="sidebar-menu-sub-item"
			data-sidebar="menu-sub-item"
			className={cn(sidebarStyles.menuSubItem, className)}
			{...props}
		/>
	);
}

interface SidebarMenuSubButtonProps extends React.ComponentProps<"a"> {
	size?: "sm" | "md";
	isActive?: boolean;
}

function SidebarMenuSubButton({
	size = "md",
	isActive = false,
	className,
	...props
}: SidebarMenuSubButtonProps) {
	return (
		<a
			data-slot="sidebar-menu-sub-button"
			data-sidebar="menu-sub-button"
			data-size={size}
			data-active={isActive}
			className={cn(
				sidebarStyles.menuSubButton,
				size === "sm" && sidebarStyles.menuSubButtonSm,
				size === "md" && sidebarStyles.menuSubButtonMd,
				className,
			)}
			{...props}
		/>
	);
}

export {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInput,
	SidebarInset,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSkeleton,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarRail,
	SidebarSeparator,
	SidebarTrigger,
	useSidebar,
};
