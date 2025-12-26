import { Alert, AlertDescription, AlertTitle } from "@aakaar/react";
import AlertRegistry from "../../../../public/registry/alert.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	const demo = (
		<div className="flex flex-col gap-md w-full">
			<Alert>
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>
					You can add components and dependencies to your app using the CLI.
				</AlertDescription>
			</Alert>
			<Alert variant="destructive">
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>
					Your session has expired. Please log in again.
				</AlertDescription>
			</Alert>
		</div>
	);

	return (
		<article>
			<h1>Alert</h1>
			<p>
				Displays a callout for important information that needs to be
				communicated to the user.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`
<div className="flex flex-col gap-md w-full">
  <Alert>
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components and dependencies to your app using the CLI.
    </AlertDescription>
  </Alert>

  <Alert variant="destructive">
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      Your session has expired. Please log in again.
    </AlertDescription>
  </Alert>
</div>
        `}
			>
				{demo}
			</Demo>

			<Installation registry={AlertRegistry} componentName="alert" />
		</article>
	);
};
