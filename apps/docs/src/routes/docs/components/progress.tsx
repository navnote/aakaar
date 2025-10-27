import {
	Progress,
	ProgressIndicator,
	ProgressLabel,
	ProgressTrack,
	ProgressValue,
} from "@aakaar/react";
import ProgressRegistry from "../../../../public/registry/progress.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Progress</h1>
			<p>
				Displays an indicator showing the completion progress of a task,
				typically displayed as a progress bar.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`
<div className="space-y-md">
  <Progress value={33}>
    <ProgressLabel>Loading...</ProgressLabel>
    <ProgressTrack>
      <ProgressIndicator />
    </ProgressTrack>
    <ProgressValue />
  </Progress>
  <Progress value={66}>
    <ProgressLabel>Processing...</ProgressLabel>
    <ProgressTrack>
      <ProgressIndicator />
    </ProgressTrack>
    <ProgressValue />
  </Progress>
  <Progress value={100}>
    <ProgressLabel>Complete</ProgressLabel>
    <ProgressTrack>
      <ProgressIndicator />
    </ProgressTrack>
    <ProgressValue />
  </Progress>
</div>
        `}
			>
				<div className="space-y-md">
					<Progress value={33}>
						<ProgressLabel>Loading...</ProgressLabel>
						<ProgressTrack>
							<ProgressIndicator />
						</ProgressTrack>
						<ProgressValue />
					</Progress>
					<Progress value={66}>
						<ProgressLabel>Processing...</ProgressLabel>
						<ProgressTrack>
							<ProgressIndicator />
						</ProgressTrack>
						<ProgressValue />
					</Progress>
					<Progress value={100}>
						<ProgressLabel>Complete</ProgressLabel>
						<ProgressTrack>
							<ProgressIndicator />
						</ProgressTrack>
						<ProgressValue />
					</Progress>
				</div>
			</Demo>
			<Installation registry={ProgressRegistry} componentName="progress" />
		</article>
	);
};
