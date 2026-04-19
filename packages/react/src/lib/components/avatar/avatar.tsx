import { Avatar as BaseAvatar } from "@base-ui-components/react";
import * as React from "react";
import { coreClass } from "../../core/core";

const avatarStyles = {
	base: coreClass.cn(
		coreClass.shape.circle,
		coreClass.dimensions.extraLarge,
		coreClass.alignment.center,
		coreClass.positioning.relative,
		coreClass.utilities.overflow.hidden,
		coreClass.utilities.flexShrink.none,
	),
	image: coreClass.cn(
		coreClass.utilities.aspectRatio.square,
		coreClass.measurements.height.full,
		coreClass.measurements.width.full,
		coreClass.utilities.objectFit.cover,
	),
	fallback: coreClass.cn(
		coreClass.shape.circle,
		coreClass.colors.primary,
		coreClass.alignment.center,
		coreClass.typography.size.extraSmall,
		coreClass.measurements.height.full,
		coreClass.measurements.width.full,
	),
};

const Avatar = React.forwardRef<
	React.ElementRef<typeof BaseAvatar.Root>,
	React.ComponentPropsWithoutRef<typeof BaseAvatar.Root>
>(({ className, ...props }, ref) => (
	<BaseAvatar.Root
		ref={ref}
		className={coreClass.cn(avatarStyles.base, className)}
		{...props}
	/>
));
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
	React.ElementRef<typeof BaseAvatar.Image>,
	React.ComponentPropsWithoutRef<typeof BaseAvatar.Image>
>(({ className, ...props }, ref) => (
	<BaseAvatar.Image
		ref={ref}
		className={coreClass.cn(avatarStyles.image, className)}
		{...props}
	/>
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
	React.ElementRef<typeof BaseAvatar.Fallback>,
	React.ComponentPropsWithoutRef<typeof BaseAvatar.Fallback>
>(({ className, ...props }, ref) => (
	<BaseAvatar.Fallback
		ref={ref}
		className={coreClass.cn(avatarStyles.fallback, className)}
		{...props}
	/>
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarFallback, AvatarImage };
