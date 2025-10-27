import { Slider as BaseSlider } from "@base-ui-components/react";
import * as React from "react";
import {
	borders,
	cn,
	colors,
	interactivity,
	padding,
	positioning,
	shadows,
	shape,
} from "../../core/core";

const sliderStyles = {
	root: cn(positioning.relative, "w-full"),
	control: cn(
		positioning.relative,
		"w-full touch-none select-none",
		padding.large,
	),
	track: cn(
		positioning.relative,
		"w-[200px] rounded",
		colors.containers.secondary,
		shape.circlePrimary,
	),
	range: cn(positioning.absolute, "h-full rounded", colors.surface),
	thumb: cn(
		"block",
		shape.circle,
		"size-md",
		colors.surface,
		borders.variant,
		"select-none cursor-pointer",
		shadows.depth.medium,
		interactivity.states.disabled,
		"focus-visible:outline-2 focus-visible:outline-primary",
	),
};

const Slider = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseSlider.Root>
>(({ className, ...props }, ref) => (
	<BaseSlider.Root
		ref={ref as never}
		className={cn(sliderStyles.root, className)}
		{...props}
	/>
));
Slider.displayName = "Slider";

const SliderTrack = React.forwardRef<
	React.ElementRef<typeof BaseSlider.Track>,
	React.ComponentPropsWithoutRef<typeof BaseSlider.Track>
>(({ className, ...props }, ref) => (
	<BaseSlider.Track
		ref={ref as never}
		className={cn(sliderStyles.track, className)}
		{...props}
	/>
));
SliderTrack.displayName = "SliderTrack";

const SliderValue = React.forwardRef<
	HTMLOutputElement,
	React.ComponentPropsWithoutRef<typeof BaseSlider.Value>
>(({ className, ...props }, ref) => (
	<BaseSlider.Value ref={ref} className={className} {...props} />
));
SliderValue.displayName = "SliderValue";

const SliderRange = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<BaseSlider.Indicator
		ref={ref as never}
		className={cn(sliderStyles.range, className)}
		{...props}
	/>
));
SliderRange.displayName = "SliderRange";

const SliderThumb = React.forwardRef<
	React.ElementRef<typeof BaseSlider.Thumb>,
	React.ComponentPropsWithoutRef<typeof BaseSlider.Thumb>
>(({ className, ...props }, ref) => (
	<BaseSlider.Thumb
		ref={ref}
		className={cn(sliderStyles.thumb, className)}
		{...props}
	/>
));
SliderThumb.displayName = "SliderThumb";

const SliderControl = React.forwardRef<
	React.ElementRef<typeof BaseSlider.Control>,
	React.ComponentPropsWithoutRef<typeof BaseSlider.Control>
>(({ className, ...props }, ref) => (
	<BaseSlider.Control
		ref={ref}
		className={cn(sliderStyles.control, className)}
		{...props}
	/>
));
SliderControl.displayName = "SliderControl";

export {
	Slider,
	SliderControl,
	SliderRange,
	SliderThumb,
	SliderTrack,
	SliderValue,
};
