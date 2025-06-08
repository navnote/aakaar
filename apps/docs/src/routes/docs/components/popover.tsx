import {
	Button,
	Input,
	Label,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@aakaar/react";
import PopoverRegistry from "../../../../public/registry/popover.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Popover</h1>
			<p>
				Displays a floating layer of content above the current page triggered by
				a button or other interactive element.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-60">
            <div className="grid gap-xs p-xs">
              <div className="space-y-xs">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-xs">
                <div className="grid grid-cols-2 items-center gap-md">
                  <Label htmlFor="width">Width</Label>
                  <Input id="width" defaultValue="100%" />
                </div>
                <div className="grid grid-cols-2 items-center gap-md">
                  <Label htmlFor="maxWidth">Max. width</Label>
                  <Input id="maxWidth" defaultValue="300px" />
                </div>
                <div className="grid grid-cols-2 items-center gap-md">
                  <Label htmlFor="height">Height</Label>
                  <Input id="height" defaultValue="25px" />
                </div>
                <div className="grid grid-cols-2 items-center gap-md">
                  <Label htmlFor="maxHeight">Max. height</Label>
                  <Input id="maxHeight" defaultValue="none" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        `}
			>
				<Popover>
					<PopoverTrigger asChild>
						<Button variant="outline">Open popover</Button>
					</PopoverTrigger>
					<PopoverContent className="w-[300px]">
						<div className="grid gap-xs p-xs">
							<div className="space-y-xs">
								<h4 className="font-medium leading-none">Dimensions</h4>
								<p className="text-sm text-muted-foreground">
									Set the dimensions for the layer.
								</p>
							</div>
							<div className="grid gap-xs">
								<div className="grid grid-cols-2 items-center gap-md">
									<Label htmlFor="width">Width</Label>
									<Input id="width" defaultValue="100%" />
								</div>
								<div className="grid grid-cols-2 items-center gap-md">
									<Label htmlFor="maxWidth">Max. width</Label>
									<Input id="maxWidth" defaultValue="300px" />
								</div>
								<div className="grid grid-cols-2 items-center gap-md">
									<Label htmlFor="height">Height</Label>
									<Input id="height" defaultValue="25px" />
								</div>
								<div className="grid grid-cols-2 items-center gap-md">
									<Label htmlFor="maxHeight">Max. height</Label>
									<Input id="maxHeight" defaultValue="none" />
								</div>
							</div>
						</div>
					</PopoverContent>
				</Popover>
			</Demo>
			<Installation registry={PopoverRegistry} componentName="popover" />
		</article>
	);
};
