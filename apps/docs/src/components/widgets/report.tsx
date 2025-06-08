import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Checkbox,
	Input,
	Label,
	RadioGroup,
	RadioGroupItem,
	Textarea,
} from "@aakaar/react";

export const Report = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Report</CardTitle>
				<CardDescription>Submit your issue here.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-md">
				<div className="flex flex-col gap-sm">
					<Label htmlFor="subject">Subject</Label>
					<Input id="subject" />
				</div>
				<div className="flex flex-col gap-sm">
					<Label htmlFor="subject">Description</Label>
					<Textarea id="description" />
				</div>
				<div className="flex items-center gap-sm">
					<RadioGroup defaultValue="dev" className={"flex gap-sm"}>
						<div className="flex items-center gap-sm">
							<RadioGroupItem value="dev" id="dev" />
							<Label htmlFor="dev">Development</Label>
						</div>
						<div className="flex items-center gap-sm">
							<RadioGroupItem value="prod" id="prod" />
							<Label htmlFor="prod">Production</Label>
						</div>
					</RadioGroup>
				</div>

				<div className="flex items-center gap-sm">
					<Checkbox id="terms" />
					<Label htmlFor="terms">Accept terms and conditions</Label>
				</div>
				<Button>Submit</Button>
			</CardContent>
		</Card>
	);
};
