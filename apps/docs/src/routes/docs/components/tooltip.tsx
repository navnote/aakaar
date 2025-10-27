import {
	Button,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@aakaar/react";
import TooltipRegistry from "../../../../public/registry/tooltip.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Tooltip</h1>
			<p>
				A popup that displays additional information for an element when it
				receives focus or is hovered over.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>This is a tooltip</TooltipContent>
  </Tooltip>
</TooltipProvider>
        `}
			>
				<TooltipProvider>
					<div className="flex gap-md items-center">
						<Tooltip>
							<TooltipTrigger>
								<Button variant="outline">Hover me</Button>
							</TooltipTrigger>
							<TooltipContent>This is a tooltip</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<Button variant="ghost">Another button</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Tooltips are useful for additional context</p>
							</TooltipContent>
						</Tooltip>
					</div>
				</TooltipProvider>
			</Demo>
			<Installation registry={TooltipRegistry} componentName="tooltip" />
		</article>
	);
};
