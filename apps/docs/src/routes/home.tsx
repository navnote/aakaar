import { Button, GridPattern, cn } from "@aakaar/react";
import { Link } from "react-router";
import { Logo } from "src/components/logo";
import { Widgets } from "src/components/widgets";

export default function Home() {
	return (
		<div className="bg-background text-on-background">
			<div className="w-full min-h-[70vh]">
				<div className="mx-auto px-xs">
					<div className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden">
						<div className="z-10 flex flex-col items-center gap-xs bg-surface/30 rounded-default p-md">
							<Logo size="lg" className="animate-pulse" />
							<span className="text-center text-xl font-medium">
								Build the form of your design system
							</span>
							<span className="text-center text-md font-medium">
								Many free and open-source animated components built with React,
								Typescript, Tailwind CSS
							</span>
							<span className="text-center text-md font-medium">
								Heavily customizable using tokens.
							</span>
							<div className="h-md" />
							<Button size="lg" asChild>
								<Link to="/docs/introduction">Get Started</Link>
							</Button>
						</div>
						<GridPattern
							squares={[
								[4, 4],
								[5, 1],
								[8, 2],
								[5, 3],
								[5, 5],
								[10, 10],
								[20, 21],
								[15, 11],
								[10, 15],
								[15, 10],
								[10, 17],
								[15, 25],
							]}
							className={cn(
								"[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
								"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
							)}
						/>
					</div>
					<Widgets />
				</div>
			</div>
		</div>
	);
}
