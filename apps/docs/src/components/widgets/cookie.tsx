import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Switch,
} from "@aakaar/react";

export const Cookie = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Cookie Settings</CardTitle>
				<CardDescription>Manage your cookie settings here.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-md ">
				<div className="flex justify-between items-center">
					<div className="flex flex-col gap-xs">
						<strong>Functional Cookies</strong>
						<small>Required for the website to function.</small>
					</div>
					<Switch />
				</div>
				<div className="flex justify-between items-center">
					<div className="flex flex-col gap-xs">
						<strong>Analytics Cookies</strong>
						<small>Help us improve the website.</small>
					</div>
					<Switch />
				</div>
				<div className="flex justify-between items-center">
					<div className="flex flex-col gap-xs">
						<strong>Marketing Cookies</strong>
						<small>Enable personalized ads.</small>
					</div>
					<Switch />
				</div>
				<Button variant="primary">Save Settings</Button>
			</CardContent>
		</Card>
	);
};
