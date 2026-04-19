import { Progress as BaseProgress } from "@base-ui-components/react";
import * as React from "react";
import { coreClass } from "../../core/core";

const progressStyles = {
	root: coreClass.cn(
		"grid grid-cols-2 gap-1 gap-y-2",
		coreClass.measurements.width.minimum,
	),
	track: coreClass.cn(
		"col-span-2",
		"h-xs w-full overflow-hidden",
		coreClass.shape.rounded,
		coreClass.colors.containers.primary,
		coreClass.borders.variant,
	),
	indicator: coreClass.cn(
		coreClass.positioning.relative,
		"h-full rounded-full",
		coreClass.colors.accent.primary,
	),
	label: coreClass.cn(
		coreClass.typography.size.small,
		coreClass.typography.weight.medium,
	),
	value: coreClass.cn(
		coreClass.typography.size.small,
		"text-right col-start-2",
	),
};

const Progress = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseProgress.Root>
>(({ className, ...props }, ref) => (
	<BaseProgress.Root
		ref={ref}
		className={coreClass.cn(progressStyles.root, className)}
		{...props}
	/>
));
Progress.displayName = "Progress";

const ProgressTrack = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseProgress.Track>
>(({ className, ...props }, ref) => (
	<BaseProgress.Track
		ref={ref}
		className={coreClass.cn(progressStyles.track, className)}
		{...props}
	/>
));
ProgressTrack.displayName = "ProgressTrack";

const ProgressIndicator = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseProgress.Indicator>
>(({ className, ...props }, ref) => (
	<BaseProgress.Indicator
		ref={ref}
		className={coreClass.cn(progressStyles.indicator, className)}
		{...props}
	/>
));
ProgressIndicator.displayName = "ProgressIndicator";

const ProgressValue = React.forwardRef<
	HTMLSpanElement,
	React.ComponentPropsWithoutRef<typeof BaseProgress.Value>
>(({ className, ...props }, ref) => (
	<BaseProgress.Value
		ref={ref}
		className={coreClass.cn(progressStyles.value, className)}
		{...props}
	/>
));
ProgressValue.displayName = "ProgressValue";

const ProgressLabel = React.forwardRef<
	HTMLLabelElement,
	React.ComponentPropsWithoutRef<typeof BaseProgress.Label>
>(({ className, ...props }, ref) => (
	<BaseProgress.Label
		ref={ref}
		className={coreClass.cn(progressStyles.label, className)}
		{...props}
	/>
));
ProgressLabel.displayName = "ProgressLabel";

export {
	Progress,
	ProgressIndicator,
	ProgressLabel,
	ProgressTrack,
	ProgressValue,
};
