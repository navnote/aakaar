import { Button, ButtonGroup } from "@aakaar/react";
import ButtonGroupRegistry from "../../../../public/registry/button-group.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	const demo = (
		<div className="flex flex-col gap-md w-full">
			<ButtonGroup>
				<Button variant="outline">One</Button>
				<Button variant="outline">Two</Button>
				<Button variant="outline">Three</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="primary">Save</Button>
				<Button variant="primary">Cancel</Button>
			</ButtonGroup>
			<ButtonGroup orientation="vertical">
				<Button variant="outline">Top</Button>
				<Button variant="outline">Middle</Button>
				<Button variant="outline">Bottom</Button>
			</ButtonGroup>
		</div>
	);

	return (
		<article>
			<h1>Button Group</h1>
			<p>
				Groups related buttons together, removing borders and rounded corners
				between them for a cohesive appearance.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`
<div className="flex flex-col gap-md w-full">
  <ButtonGroup>
    <Button variant="outline">One</Button>
    <Button variant="outline">Two</Button>
    <Button variant="outline">Three</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button variant="primary">Save</Button>
    <Button variant="primary">Cancel</Button>
  </ButtonGroup>

  <ButtonGroup orientation="vertical">
    <Button variant="outline">Top</Button>
    <Button variant="outline">Middle</Button>
    <Button variant="outline">Bottom</Button>
  </ButtonGroup>
</div>
        `}
			>
				{demo}
			</Demo>

			<Installation
				registry={ButtonGroupRegistry}
				componentName="button-group"
			/>
		</article>
	);
};
