import type { AakaarComponentName, ComponentRegistry } from "@aakaar/global";
import { Card, Tabs, TabsContent, TabsList, TabsTrigger } from "@aakaar/react";
import { FormattedCode } from "./code";

export const Installation = ({
	componentName,
	registry,
}: {
	componentName: AakaarComponentName;
	registry: ComponentRegistry;
}) => {
	return (
		<>
			<h2>Installation</h2>
			<Card>
				<Tabs defaultValue="cli" className="">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger variant={"secondary"} value="cli">
							CLI
						</TabsTrigger>
						<TabsTrigger variant={"secondary"} value="manual">
							Manual
						</TabsTrigger>
					</TabsList>
					<TabsContent value="cli">
						<FormattedCode
							jsScript={{ isBinary: true }}
							code={`@aakaar/cli add ${componentName}`}
						/>
					</TabsContent>
					<TabsContent value="manual" className="max-w-full overflow-auto">
						<div className="flex flex-col gap-md p-md">
							{registry.dependencies && registry.dependencies.length > 0 && (
								<>
									<h5>Step 1 - Run</h5>
									<FormattedCode
										jsScript={{ isInstall: true }}
										code={`${registry.dependencies.join(" ")}`}
									/>
								</>
							)}
							{registry.files.map((file) => (
								<div key={file.name}>
									<h5>Step 2 - Copy</h5>
									<div className="max-w-full">
										<FormattedCode code={`// ${file.name}\n${file.content}`} />
									</div>
								</div>
							))}
						</div>
					</TabsContent>
				</Tabs>
			</Card>
		</>
	);
};
