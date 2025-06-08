import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Input,
	Tabs,
	TabsList,
	TabsTrigger,
} from "@aakaar/react";
import { TabsContent } from "@aakaar/react";
import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons-react";
import { useState } from "react";

export const Login = () => {
	const [activeTab, setActiveTab] = useState("social");
	return (
		<Card>
			<CardHeader>
				<CardTitle>Login</CardTitle>
			</CardHeader>
			<CardContent>
				<Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="social">Social</TabsTrigger>
						<TabsTrigger value="email">Email</TabsTrigger>
					</TabsList>
					<TabsContent value="social">
						<div className="flex flex-col gap-sm p-sm">
							<Button variant={"secondary"} className="flex gap-sm">
								<IconBrandGoogle className="size-md" />
								Login with Google
							</Button>
							<Button variant={"secondary"} className="flex gap-sm">
								<IconBrandFacebook className="size-md" />
								Login with Facebook
							</Button>
						</div>
					</TabsContent>
					<TabsContent value="email" className="flex flex-col gap-sm pt-md">
						<Input type="email" placeholder="Enter email" />
						<Input type="password" placeholder="Enter password" />
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
};
