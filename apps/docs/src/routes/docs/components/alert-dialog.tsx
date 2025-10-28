import {
	AlertDialog,
	AlertDialogClose,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
	Button,
} from "@aakaar/react";
import AlertDialogRegistry from "../../../../public/registry/alert-dialog.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Alert Dialog</h1>
			<p>
				A modal dialog that interrupts the user's workflow to communicate an
				important message and obtain a response.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`
<AlertDialog>
  <AlertDialogTrigger>
    <Button variant="destructive">Delete account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogClose asChild>
        <Button variant="ghost">Cancel</Button>
      </AlertDialogClose>
      <AlertDialogClose asChild>
        <Button variant="destructive">Yes, delete account</Button>
      </AlertDialogClose>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
        `}
			>
				<AlertDialog>
					<AlertDialogTrigger>
						<Button variant="primary">Delete account</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
							<AlertDialogDescription>
								This action cannot be undone. This will permanently delete your
								account and remove your data from our servers.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogClose>
								<Button variant="ghost">Cancel</Button>
							</AlertDialogClose>
							<AlertDialogClose>
								<Button variant="primary">Yes, delete account</Button>
							</AlertDialogClose>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</Demo>
			<Installation
				registry={AlertDialogRegistry}
				componentName="alertDialog"
			/>
		</article>
	);
};
