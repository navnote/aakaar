import { Checkbox, Label } from "@aakaar/react";
import LabelRegistry from "../../../../public/registry/label.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Label</h1>
			<p>Renders a label for controls.</p>
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
			<Installation registry={LabelRegistry} componentName="label" />
		</article>
	);
};
