import {
	Button,
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
import DialogRegistry from "../../../../public/registry/dialog.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Dialog</h1>
			<p>
				A window overlaid on either the primary window or another dialog window,
				rendering the content underneath inert.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`<Dialog>
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
</Dialog>`}
			>
				<Dialog>
					<DialogTrigger>
						<Button variant="outline">Edit Profile</Button>
					</DialogTrigger>
					<DialogContent className="w-[90vw] md:w-[425px]">
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
			</Demo>
			<Installation registry={DialogRegistry} componentName="dialog" />
		</article>
	);
};
