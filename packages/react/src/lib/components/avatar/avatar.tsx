import { Avatar as BaseAvatar } from "@base-ui-components/react";
import * as React from "react";
import {
	alignment,
	cn,
	colors,
	dimensions,
	measurements,
	positioning,
	shape,
	typography,
	utilities,
} from "../../core/core";

const avatarStyles = {
	base: cn(
		shape.circle,
		dimensions.extraLarge,
		alignment.center,
		positioning.relative,
		utilities.overflow.hidden,
		utilities.flexShrink.none,
	),
	image: cn(
		utilities.aspectRatio.square,
		measurements.height.full,
		measurements.width.full,
		utilities.objectFit.cover,
	),
	fallback: cn(
		shape.circle,
		colors.primary,
		alignment.center,
		typography.size.extraSmall,
		measurements.height.full,
		measurements.width.full,
	),
};

const Avatar = React.forwardRef<
	React.ElementRef<typeof BaseAvatar.Root>,
	React.ComponentPropsWithoutRef<typeof BaseAvatar.Root>
>(({ className, ...props }, ref) => (
	<BaseAvatar.Root
		ref={ref}
		className={cn(avatarStyles.base, className)}
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
		className={cn(avatarStyles.image, className)}
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
		className={cn(avatarStyles.fallback, className)}
		{...props}
	/>
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarFallback, AvatarImage };
