import { Card, Tabs, TabsContent, TabsList, TabsTrigger } from "@aakaar/react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import type { ReactNode } from "react";
import { FormattedCode } from "./formatted-code";
export const Demo = ({
	code,
	children,
	...props
}: {
	code: string;
	children: ReactNode;
}) => {
	return (
		<Slot {...props}>
			<Card>
				<Tabs defaultValue="preview">
					<TabsList className={"grid w-full grid-cols-2"}>
						<TabsTrigger variant={"secondary"} value="preview">
							Preview
						</TabsTrigger>
						<TabsTrigger variant={"secondary"} value="code">
							Code
						</TabsTrigger>
					</TabsList>
					<TabsContent value="preview">
						<div className="flex flex-col items-center justify-center p-md">
							<Slottable>{children}</Slottable>
						</div>
					</TabsContent>
					<TabsContent value="code">
						<FormattedCode code={code} />
					</TabsContent>
				</Tabs>
			</Card>
		</Slot>
	);
};
