import { Badge } from "@aakaar/react";
import BadgeRegistry from "../../../../public/registry/badge.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	const demo = (
		<div className="flex flex-wrap gap-md items-center">
			<Badge>Default</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="destructive">Destructive</Badge>
			<Badge variant="outline">Outline</Badge>
		</div>
	);

	return (
		<article>
			<h1>Badge</h1>
			<p>
				Displays a badge or a component that looks like a badge. Badges are used
				to display status, categories, or labels.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`
<div className="flex flex-wrap gap-md items-center">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
</div>
        `}
			>
				{demo}
			</Demo>

			<Installation registry={BadgeRegistry} componentName="badge" />
		</article>
	);
};
