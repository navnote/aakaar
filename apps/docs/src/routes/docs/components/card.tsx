import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Input,
} from "@aakaar/react";
import CardRegistry from "../../../../public/registry/card.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Card</h1>
			<p>
				The card component is a container for a piece of content, such as a
				photo, text, or a combination of both.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`<Card className="w-5/6 md:w-1/2">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">Name</label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>`}
			>
				<Card className="w-5/6 md:w-1/2">
					<CardHeader>
						<CardTitle>Create project</CardTitle>
						<CardDescription>
							Deploy your new project in one-click.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form>
							<div className="grid w-full items-center gap-4">
								<div className="flex flex-col space-y-1.5">
									<label htmlFor="name">Name</label>
									<Input id="name" placeholder="Name of your project" />
								</div>
							</div>
						</form>
					</CardContent>
					<CardFooter className="flex justify-between">
						<Button variant="ghost">Cancel</Button>
						<Button>Deploy</Button>
					</CardFooter>
				</Card>
			</Demo>
			<Installation registry={CardRegistry} componentName="card" />
		</article>
	);
};
