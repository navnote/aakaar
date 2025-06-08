import { Button } from "@aakaar/react";
import { Icon123 } from "@tabler/icons-react";
import ButtonRegistry from "../../../../public/registry/button.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";
export default () => {
	const demo = (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-md justify-items-start">
			<Button variant="primary">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="tertiary">Tertiary</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="link">Link</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="primary" size="icon">
				<Icon123 />
			</Button>
		</div>
	);
	return (
		<article>
			<h1>Button</h1>
			<p>Displays a button or button lookalike.</p>
			<h2>Demo</h2>
			<Demo
				code={`<div className="grid grid-cols-2 md:grid-cols-3 gap-md justify-items-start">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="primaryContainer">PrimaryContainer</Button>
      <Button variant="secondaryContainer">SecondaryContainer</Button>
      <Button variant="tertiaryContainer">TertiaryContainer</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="primary" size="icon">
        <Icon123 />
      </Button>
    </div>`}
			>
				{demo}
			</Demo>

			<Installation registry={ButtonRegistry} componentName="button" />
		</article>
	);
};
