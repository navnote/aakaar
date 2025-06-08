import * as AvatarPrimitive from "@radix-ui/react-avatar";
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
	React.ElementRef<typeof AvatarPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Root
		ref={ref}
		className={cn(avatarStyles.base, className)}
		{...props}
	/>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Image>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={cn(avatarStyles.image, className)}
		{...props}
	/>
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Fallback>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={cn(avatarStyles.fallback, className)}
		{...props}
	/>
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
