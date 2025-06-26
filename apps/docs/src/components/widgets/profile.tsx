import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Input,
	Label,
} from "@aakaar/react";

export const Profile = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Profile</CardTitle>
				<CardDescription>Profile description</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-sm items-start">
				<div className="flex gap-md">
					<b>Name:</b>
					<span>Navjot Ahuja</span>
				</div>
				<div className="flex gap-md">
					<b>Username:</b>
					<span>@navnote</span>
				</div>
				<Dialog>
					<DialogTrigger>
						<Button variant="outline">Edit Profile</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Edit profile</DialogTitle>
							<DialogDescription>
								Make changes to your profile here. Click save when you're done.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-xs py-xs">
							<div className="grid grid-cols-4 items-center gap-md">
								<Label htmlFor="name" className="text-right">
									Name
								</Label>
								<Input
									id="name"
									defaultValue="Navjot Ahuja"
									className="col-span-3"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-md">
								<Label htmlFor="username" className="text-right">
									Username
								</Label>
								<Input
									id="username"
									defaultValue="@navnote"
									className="col-span-3"
								/>
							</div>
						</div>
						<DialogFooter>
							<Button type="submit">Save changes</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</CardContent>
		</Card>
	);
};
