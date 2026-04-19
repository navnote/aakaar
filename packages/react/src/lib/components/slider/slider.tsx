import { Slider as BaseSlider } from "@base-ui-components/react";
import * as React from "react";
import { coreClass } from "../../core/core";

const sliderStyles = {
	root: coreClass.cn(coreClass.positioning.relative, "w-full"),
	control: coreClass.cn(
		coreClass.positioning.relative,
		"w-full touch-none select-none",
		coreClass.padding.large,
	),
	track: coreClass.cn(
		coreClass.positioning.relative,
		coreClass.measurements.width.minimum,
		coreClass.shape.rounded,
		coreClass.colors.containers.secondary,
		coreClass.shape.circlePrimary,
	),
	range: coreClass.cn(
		coreClass.positioning.absolute,
		"h-full rounded",
		coreClass.colors.surface,
	),
	thumb: coreClass.cn(
		"block",
		coreClass.shape.circle,
		"size-md",
		coreClass.colors.surface,
		coreClass.borders.variant,
		"select-none cursor-pointer",
		coreClass.shadows.depth.medium,
		coreClass.interactivity.states.disabled,
		"focus-visible:outline-2 focus-visible:outline-primary",
	),
};

const Slider = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseSlider.Root>
>(({ className, ...props }, ref) => (
	<BaseSlider.Root
		ref={ref as never}
		className={coreClass.cn(sliderStyles.root, className)}
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
		className={coreClass.cn(sliderStyles.track, className)}
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
		className={coreClass.cn(sliderStyles.range, className)}
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
		className={coreClass.cn(sliderStyles.thumb, className)}
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
		className={coreClass.cn(sliderStyles.control, className)}
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
