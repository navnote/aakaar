import { Checkbox, Label } from "@aakaar/react";
import CheckboxRegistry from "../../../../public/registry/checkbox.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Checkbox</h1>
			<p>
				A control that allows the user to toggle between checked and not
				checked.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`<div className="flex items-center gap-sm">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>`}
			>
				<div className="flex items-center gap-sm">
					<Checkbox id="terms" />
					<Label htmlFor="terms">Accept terms and conditions</Label>
				</div>
			</Demo>
			<Installation registry={CheckboxRegistry} componentName="checkbox" />
		</article>
	);
};
