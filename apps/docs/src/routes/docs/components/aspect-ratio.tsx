import { AspectRatio } from "@aakaar/react";
import AspectRatioRegistry from "../../../../public/registry/aspect-ratio.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	const demo = (
		<div className="flex flex-col items-center justify-center gap-md w-full">
			<AspectRatio ratio={16 / 9} className="w-5/6 md:w-1/2">
				<div className="flex items-center justify-center h-full w-full bg-surface-variant rounded-default text-on-surface-variant">
					16:9
				</div>
			</AspectRatio>
			<AspectRatio ratio={4 / 3} className="w-5/6 md:w-1/2">
				<div className="flex items-center justify-center h-full w-full bg-surface-variant rounded-default text-on-surface-variant">
					4:3
				</div>
			</AspectRatio>
			<AspectRatio ratio={1} className="w-5/6 md:w-1/2">
				<div className="flex items-center justify-center h-full w-full bg-surface-variant rounded-default text-on-surface-variant">
					1:1
				</div>
			</AspectRatio>
		</div>
	);

	return (
		<article>
			<h1>Aspect Ratio</h1>
			<p>
				Displays content within a container that maintains a specific aspect
				ratio.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`
<div className="flex flex-col gap-md w-full">
  <AspectRatio ratio={16 / 9} className="w-5/6 md:w-1/2">
    <div className="flex items-center justify-center h-full w-full bg-surface-variant rounded-default">
      16:9
    </div>
  </AspectRatio>

  <AspectRatio ratio={4 / 3} className="w-5/6 md:w-1/2">
    <div className="flex items-center justify-center h-full w-full bg-surface-variant rounded-default">
      4:3
    </div>
  </AspectRatio>

  <AspectRatio ratio={1} className="w-5/6 md:w-1/2">
    <div className="flex items-center justify-center h-full w-full bg-surface-variant rounded-default">
      1:1
    </div>
  </AspectRatio>
</div>
        `}
			>
				{demo}
			</Demo>

			<Installation
				registry={AspectRatioRegistry}
				componentName="aspectRatio"
			/>
		</article>
	);
};
