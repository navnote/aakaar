import { Separator } from "@aakaar/react";
import SeparatorRegistry from "../../../../public/registry/separator.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Separator</h1>
			<p>Visually or semantically separates content.</p>

			<h2>Demo</h2>
			<Demo
				code={`<div className="space-y-md">
  <div>
    <h4 className="text-sm font-medium leading-none">Horizontal</h4>
    <p className="text-sm text-on-surface-variant">
      Separates content horizontally.
    </p>
  </div>
  <Separator />
  <div className="flex h-md items-center space-x-md text-sm">
    <div>Item 1</div>
    <Separator orientation="vertical" />
    <div>Item 2</div>
    <Separator orientation="vertical" />
    <div>Item 3</div>
  </div>
</div>`}
			>
				<div className="space-y-md w-full max-w-md">
					<div>
						<h4 className="text-sm font-medium leading-none">Horizontal</h4>
						<p className="text-sm text-on-surface-variant">
							Separates content horizontally.
						</p>
					</div>
					<Separator />
					<div className="flex h-md items-center space-x-md text-sm">
						<div>Item 1</div>
						<Separator orientation="vertical" />
						<div>Item 2</div>
						<Separator orientation="vertical" />
						<div>Item 3</div>
					</div>
				</div>
			</Demo>

			<Installation registry={SeparatorRegistry} componentName="separator" />
		</article>
	);
};
