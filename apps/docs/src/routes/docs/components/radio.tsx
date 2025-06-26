import { Label, RadioGroup, RadioGroupItem } from "@aakaar/react";
import { useState } from "react";
import RadioRegistry from "../../../../public/registry/radio.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	const [value, setValue] = useState("md");
	return (
		<article>
			<h1>Radio</h1>
			<p>
				Radio is a component that allows the user to select a single option from
				a list of options.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`
<RadioGroup
  defaultValue="md"
  value={value}
  onValueChange={(value) => setValue(value)}
  className={"flex flex-col gap-\${value}"}
>
  <div className="flex items-center gap-sm">
    <RadioGroupItem value="md" id="md" />
    <Label htmlFor="md">Default</Label>
  </div>
  <div className="flex items-center gap-sm">
    <RadioGroupItem value="lg" id="lg" />
    <Label htmlFor="lg">Comfortable</Label>
  </div>
  <div className="flex items-center gap-sm">
    <RadioGroupItem value="sm" id="sm" />
    <Label htmlFor="sm">Compact</Label>
  </div>
</RadioGroup>
    `}
			>
				<RadioGroup
					defaultValue="md"
					value={value}
					onValueChange={(value: unknown) => setValue(value as string)}
					className={`flex flex-col gap-${value}`}
				>
					<div className="flex items-center gap-sm">
						<RadioGroupItem value="md" id="md" />
						<Label htmlFor="md">Default</Label>
					</div>
					<div className="flex items-center gap-sm">
						<RadioGroupItem value="lg" id="lg" />
						<Label htmlFor="lg">Comfortable</Label>
					</div>
					<div className="flex items-center gap-sm">
						<RadioGroupItem value="sm" id="sm" />
						<Label htmlFor="sm">Compact</Label>
					</div>
				</RadioGroup>
			</Demo>
			<Installation registry={RadioRegistry} componentName="radio" />
		</article>
	);
};
