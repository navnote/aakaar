import { Skeleton } from "@aakaar/react";
import SkeletonRegistry from "../../../../public/registry/skeleton.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Skeleton</h1>
			<p>Use to show a placeholder while content is loading.</p>

			<h2>Demo</h2>
			<Demo
				code={`<div className="flex items-center gap-lg w-[300px] mx-auto">
  <Skeleton className="size-xl rounded-full" />
  <div className="flex flex-col gap-sm w-full max-w-xs">
    <Skeleton className="h-md w-[100px]" />
    <Skeleton className="h-md w-[150px]" />
  </div>
</div>`}
			>
				<div className="w-full">
					<div className="flex items-center gap-lg w-[300px] mx-auto">
						<Skeleton className="size-xl rounded-full" />
						<div className="flex flex-col gap-sm w-full max-w-xs">
							<Skeleton className="h-md w-[100px]" />
							<Skeleton className="h-md w-[150px]" />
						</div>
					</div>
				</div>
			</Demo>

			<Installation registry={SkeletonRegistry} componentName="skeleton" />
		</article>
	);
};
