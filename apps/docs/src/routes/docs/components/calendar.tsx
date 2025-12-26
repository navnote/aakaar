import { Calendar } from "@aakaar/react";
import * as React from "react";
import CalendarRegistry from "../../../../public/registry/calendar.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	const [date, setDate] = React.useState<Date | undefined>(new Date());

	const demo = (
		<div className="flex flex-col items-center justify-center gap-md w-full">
			<Calendar
				mode="single"
				selected={date}
				onSelect={setDate}
				className="rounded-default border border-outline-variant"
			/>
		</div>
	);

	return (
		<article>
			<h1>Calendar</h1>
			<p>
				A date field component that allows users to enter and edit dates. Built
				on top of React DayPicker.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`
import { Calendar } from "@aakaar/react";
import * as React from "react";

const [date, setDate] = React.useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-default border border-outline-variant"
/>

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-default border border-outline-variant"
  captionLayout="dropdown-buttons"
  fromYear={2020}
  toYear={2030}
/>
        `}
			>
				{demo}
			</Demo>

			<Installation registry={CalendarRegistry} componentName="calendar" />
		</article>
	);
};
