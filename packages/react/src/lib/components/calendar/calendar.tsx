import {
	IconChevronDown,
	IconChevronLeft,
	IconChevronRight,
} from "@tabler/icons-react";
import type { ComponentProps } from "react";
import {
	type DayButton,
	DayPicker,
	getDefaultClassNames,
} from "react-day-picker";
import { Button, buttonVariants } from "../../components/button/button";
import {
	alignment,
	cn,
	colors,
	dimensions,
	flexBox,
	interactivity,
	padding,
	paddingY,
	positioning,
	shape,
	spacing,
	typography,
	utilities,
} from "../../core/core";

export type CalendarProps = ComponentProps<typeof DayPicker>;

const defaultClassNames = getDefaultClassNames();

const Calendar = ({
	className,
	classNames,
	showOutsideDays = true,
	captionLayout = "label",
	...props
}: CalendarProps) => {
	const navButtonStyles = cn(
		buttonVariants({ variant: "ghost", size: "icon" }),
		colors.transparent,
		"p-0",
		interactivity.states.clickable,
		"opacity-50 hover:opacity-100 aria-disabled:opacity-50",
		"hover:bg-surface-variant hover:text-on-surface-variant",
	);

	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			captionLayout={captionLayout}
			className={cn(
				colors.backgrounds.surface,
				padding.medium,
				"group/calendar",
				className,
			)}
			classNames={{
				months: cn(
					flexBox.column,
					spacing.medium,
					"md:flex-row",
					positioning.relative,
					defaultClassNames.months,
				),
				month: cn(
					flexBox.column,
					dimensions.fullWidth,
					spacing.medium,
					defaultClassNames.month,
				),
				caption: cn(
					flexBox.row,
					alignment.center,
					positioning.relative,
					"pt-xs",
					paddingY.small,
					dimensions.fullWidth,
				),
				month_caption: cn(flexBox.row, alignment.center, dimensions.fullWidth),
				caption_label: cn(
					typography.size.small,
					typography.weight.medium,
					interactivity.states.clickable,
					defaultClassNames.caption_label,
				),
				nav: cn(
					alignment.spaceBetween,
					dimensions.fullWidth,
					positioning.absolute,
					"top-0 inset-x-0",
					"z-10",
					defaultClassNames.nav,
				),
				button_previous: cn(navButtonStyles, defaultClassNames.button_previous),
				button_next: cn(navButtonStyles, defaultClassNames.button_next),
				table: cn(dimensions.fullWidth, "border-collapse"),
				weekdays: cn(flexBox.row, defaultClassNames.weekdays),
				weekday: cn(
					"text-on-surface-variant",
					shape.rounded,
					"flex-1",
					typography.weight.regular,
					typography.size.small,
					alignment.center,
					interactivity.states.clickable,
					defaultClassNames.weekday,
				),
				week: cn(
					flexBox.row,
					dimensions.fullWidth,
					"mt-2",
					defaultClassNames.week,
				),
				day: cn(
					positioning.relative,
					dimensions.extraLarge,
					"p-0",
					alignment.center,
					interactivity.states.clickable,
					utilities.aspectRatio.square,
					"group/day",
					defaultClassNames.day,
				),
				day_selected: "",
				day_today: cn(
					colors.backgrounds.surfaceVariant,
					shape.rounded,
					"aria-selected:bg-primary aria-selected:text-on-primary",
					defaultClassNames.today,
				),
				day_outside: cn(
					"text-on-surface-variant",
					"opacity-50",
					"aria-selected:text-on-surface-variant",
					defaultClassNames.outside,
				),
				day_disabled: cn(
					"text-on-surface-variant",
					"opacity-50",
					defaultClassNames.disabled,
				),
				day_range_middle: cn(
					"aria-selected:bg-primary-container",
					"aria-selected:text-on-primary-container",
					"rounded-none",
					defaultClassNames.range_middle,
				),
				day_range_start: cn(
					"rounded-l-default bg-primary-container",
					defaultClassNames.range_start,
				),
				day_range_end: cn(
					"rounded-r-default bg-primary-container",
					defaultClassNames.range_end,
				),
				day_hidden: cn("invisible", defaultClassNames.hidden),
				...classNames,
			}}
			components={{
				Chevron: ({ orientation }) => {
					const Icon =
						orientation === "left"
							? IconChevronLeft
							: orientation === "right"
								? IconChevronRight
								: IconChevronDown;
					return <Icon className={cn(dimensions.medium)} />;
				},
				DayButton: CalendarDayButton,
				...props.components,
			}}
			formatters={{
				formatMonthDropdown: (date) =>
					date.toLocaleString("default", { month: "short" }),
				...props.formatters,
			}}
			{...props}
		/>
	);
};
Calendar.displayName = "Calendar";

function CalendarDayButton({
	className,
	day,
	modifiers,
	...props
}: React.ComponentProps<typeof DayButton>) {
	return (
		<Button
			variant="ghost"
			size="icon"
			data-day={day.date.toLocaleDateString()}
			data-selected-single={
				modifiers.selected &&
				!modifiers.range_start &&
				!modifiers.range_end &&
				!modifiers.range_middle
			}
			data-range-start={modifiers.range_start}
			data-range-end={modifiers.range_end}
			data-range-middle={modifiers.range_middle}
			className={cn(
				"size-full font-normal",
				"data-[selected-single=true]:bg-primary data-[selected-single=true]:text-on-primary",
				"data-[selected-single=true]:hover:bg-primary data-[selected-single=true]:hover:text-on-primary",

				"data-[range-middle=true]:bg-primary-container data-[range-middle=true]:text-on-primary-container",
				"data-[range-middle=true]:rounded-none",

				"data-[range-start=true]:bg-primary data-[range-start=true]:text-on-primary",
				"data-[range-start=true]:rounded-l-default",

				"data-[range-end=true]:bg-primary data-[range-end=true]:text-on-primary",
				"data-[range-end=true]:rounded-r-default",

				// Focus states
				"group-data-[focused=true]/day:border-outline-variant",
				"group-data-[focused=true]/day:ring-2",
				"group-data-[focused=true]/day:ring-outline-variant",

				// Hover states
				"hover:bg-surface-variant hover:text-on-surface-variant",

				className,
			)}
			{...props}
		/>
	);
}

export { Calendar, CalendarDayButton };
