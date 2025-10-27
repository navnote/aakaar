import { Progress as BaseProgress } from "@base-ui-components/react";
import * as React from "react";
import {
	borders,
	cn,
	colors,
	measurements,
	positioning,
	shape,
	typography,
} from "../../core/core";

const progressStyles = {
	root: cn("grid grid-cols-2 gap-1 gap-y-2", measurements.width.minimum),
	track: cn(
		"col-span-2",
		"h-xs w-full overflow-hidden",
		shape.rounded,
		colors.containers.primary,
		borders.variant,
	),
	indicator: cn(
		positioning.relative,
		"h-full rounded-full",
		colors.accent.primary,
	),
	label: cn(typography.size.small, typography.weight.medium),
	value: cn(typography.size.small, "text-right col-start-2"),
};

const Progress = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseProgress.Root>
>(({ className, ...props }, ref) => (
	<BaseProgress.Root
		ref={ref}
		className={cn(progressStyles.root, className)}
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
		className={cn(progressStyles.track, className)}
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
		className={cn(progressStyles.indicator, className)}
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
		className={cn(progressStyles.value, className)}
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
		className={cn(progressStyles.label, className)}
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
