import { Button, Toaster } from "@aakaar/react";
import { toast } from "sonner";
import SonnerRegistry from "../../../../public/registry/sonner.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	const demo = (
		<>
			<Toaster />
			<div className="flex flex-wrap gap-md items-center">
				<Button
					variant="outline"
					onClick={() => toast("Event has been created")}
				>
					Default
				</Button>
				<Button
					variant="outline"
					onClick={() => toast.success("Event has been created")}
				>
					Success
				</Button>
				<Button
					variant="outline"
					onClick={() =>
						toast.info("Be at the area 10 minutes before the event time")
					}
				>
					Info
				</Button>
				<Button
					variant="outline"
					onClick={() =>
						toast.warning("Event start time cannot be earlier than 8am")
					}
				>
					Warning
				</Button>
				<Button
					variant="outline"
					onClick={() => toast.error("Event has not been created")}
				>
					Error
				</Button>
				<Button
					variant="outline"
					onClick={() => {
						toast.promise<{ name: string }>(
							() =>
								new Promise((resolve) =>
									setTimeout(() => resolve({ name: "Event" }), 2000),
								),
							{
								loading: "Loading...",
								success: (data) => `${data.name} has been created`,
								error: "Error",
							},
						);
					}}
				>
					Promise
				</Button>
			</div>
		</>
	);

	return (
		<article>
			<h1>Sonner</h1>
			<p>
				An opinionated toast component for React. Sonner provides beautiful,
				accessible toast notifications with smooth animations and support for
				different types.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`import { Button, Toaster } from "@aakaar/react";
import { toast } from "sonner";

export default () => {
  return (
    <>
      {/* Add <Toaster /> to your app root to enable toasts */}
      <Toaster />
      <div className="flex flex-wrap gap-md items-center">
        {/* Use toast() function to show notifications */}
        <Button 
          variant="outline" 
          onClick={() => toast("Event has been created")}
        >
          Default
        </Button>
        <Button 
          variant="outline" 
          onClick={() => toast.success("Event has been created")}
        >
          Success
        </Button>
        <Button 
          variant="outline" 
          onClick={() => toast.info("Be at the area 10 minutes before the event time")}
        >
          Info
        </Button>
        <Button 
          variant="outline" 
          onClick={() => toast.warning("Event start time cannot be earlier than 8am")}
        >
          Warning
        </Button>
        <Button 
          variant="outline" 
          onClick={() => toast.error("Event has not been created")}
        >
          Error
        </Button>
        {/* toast.promise() shows loading state, then success/error */}
        <Button 
          variant="outline" 
          onClick={() => {
            toast.promise(
              () => new Promise((resolve) => 
                setTimeout(() => resolve({ name: "Event" }), 2000)
              ),
              {
                loading: "Loading...",
                success: (data) => \`\${data.name} has been created\`,
                error: "Error",
              }
            );
          }}
        >
          Promise
        </Button>
      </div>
    </>
  );
};`}
			>
				{demo}
			</Demo>

			<Installation registry={SonnerRegistry} componentName="sonner" />
		</article>
	);
};
