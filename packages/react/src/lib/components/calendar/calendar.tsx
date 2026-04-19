import {
	IconChevronDown,
	IconChevronLeft,
	IconChevronRight,
} from "@tabler/icons-react";
import type * as React from "react";
import type { ComponentProps } from "react";
import {
	type DayButton,
	DayPicker,
	getDefaultClassNames,
} from "react-day-picker";
import { Button, buttonVariants } from "../../components/button/button";
import { coreClass } from "../../core/core";

export type CalendarProps = ComponentProps<typeof DayPicker>;

const defaultClassNames = getDefaultClassNames();

const Calendar = ({
	className,
	classNames,
	showOutsideDays = true,
	captionLayout = "label",
	...props
}: CalendarProps) => {
	const navButtonStyles = coreClass.cn(
		buttonVariants({ variant: "ghost", size: "icon" }),
		coreClass.colors.transparent,
		"p-0",
		coreClass.interactivity.states.clickable,
		"opacity-50 hover:opacity-100 aria-disabled:opacity-50",
		"hover:bg-surface-variant hover:text-on-surface-variant",
	);

	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			captionLayout={captionLayout}
			className={coreClass.cn(
				coreClass.colors.backgrounds.surface,
				coreClass.padding.medium,
				"group/calendar",
				className,
			)}
			classNames={{
				months: coreClass.cn(
					coreClass.flexBox.column,
					coreClass.spacing.medium,
					"md:flex-row",
					coreClass.positioning.relative,
					defaultClassNames.months,
				),
				month: coreClass.cn(
					coreClass.flexBox.column,
					coreClass.dimensions.fullWidth,
					coreClass.spacing.medium,
					defaultClassNames.month,
				),
				caption: coreClass.cn(
					coreClass.flexBox.row,
					coreClass.alignment.center,
					coreClass.positioning.relative,
					coreClass.paddingY.small,
					coreClass.dimensions.fullWidth,
				),
				month_caption: coreClass.cn(
					coreClass.flexBox.row,
					coreClass.alignment.center,
					coreClass.dimensions.fullWidth,
				),
				caption_label: coreClass.cn(
					coreClass.typography.size.small,
					coreClass.typography.weight.medium,
					coreClass.interactivity.states.clickable,
					defaultClassNames.caption_label,
				),
				nav: coreClass.cn(
					coreClass.alignment.spaceBetween,
					coreClass.dimensions.fullWidth,
					coreClass.positioning.absolute,
					"top-0 inset-x-0",
					"z-10",
					defaultClassNames.nav,
				),
				button_previous: coreClass.cn(
					navButtonStyles,
					defaultClassNames.button_previous,
				),
				button_next: coreClass.cn(
					navButtonStyles,
					defaultClassNames.button_next,
				),
				table: coreClass.cn(coreClass.dimensions.fullWidth, "border-collapse"),
				weekdays: coreClass.cn(
					coreClass.flexBox.row,
					defaultClassNames.weekdays,
				),
				weekday: coreClass.cn(
					"text-on-surface-variant",
					coreClass.shape.rounded,
					"flex-1",
					coreClass.typography.weight.regular,
					coreClass.typography.size.small,
					coreClass.alignment.center,
					coreClass.interactivity.states.clickable,
					defaultClassNames.weekday,
				),
				week: coreClass.cn(
					coreClass.flexBox.row,
					coreClass.dimensions.fullWidth,
					"mt-sm",
					defaultClassNames.week,
				),
				day: coreClass.cn(
					coreClass.positioning.relative,
					coreClass.dimensions.extraLarge,
					"p-0",
					coreClass.alignment.center,
					coreClass.interactivity.states.clickable,
					coreClass.utilities.aspectRatio.square,
					"group/day",
					defaultClassNames.day,
				),
				day_selected: "",
				day_today: coreClass.cn(
					coreClass.colors.backgrounds.surfaceVariant,
					coreClass.shape.rounded,
					"aria-selected:bg-primary aria-selected:text-on-primary",
					defaultClassNames.today,
				),
				day_outside: coreClass.cn(
					"text-on-surface-variant",
					"opacity-50",
					"aria-selected:text-on-surface-variant",
					defaultClassNames.outside,
				),
				day_disabled: coreClass.cn(
					"text-on-surface-variant",
					"opacity-50",
					defaultClassNames.disabled,
				),
				day_range_middle: coreClass.cn(
					"aria-selected:bg-primary-container",
					"aria-selected:text-on-primary-container",
					"rounded-none",
					defaultClassNames.range_middle,
				),
				day_range_start: coreClass.cn(
					"rounded-l-default bg-primary-container",
					defaultClassNames.range_start,
				),
				day_range_end: coreClass.cn(
					"rounded-r-default bg-primary-container",
					defaultClassNames.range_end,
				),
				day_hidden: coreClass.cn("invisible", defaultClassNames.hidden),
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
					return <Icon className={coreClass.cn(coreClass.dimensions.medium)} />;
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
			className={coreClass.cn(
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
