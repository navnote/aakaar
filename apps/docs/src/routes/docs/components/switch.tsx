import { Label, Switch } from "@aakaar/react";
import SwitchRegistry from "../../../../public/registry/switch.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";
export default () => {
	return (
		<article>
			<h1>Switch</h1>
			<p>
				A switch is a control that allows the user to toggle between two states.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`
<div className="flex items-center gap-md">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
        `}
			>
				<div className="flex items-center gap-md">
					<Switch id="airplane-mode" />
					<Label htmlFor="airplane-mode">Airplane Mode</Label>
				</div>
			</Demo>
			<Installation registry={SwitchRegistry} componentName="switch" />
		</article>
	);
};
