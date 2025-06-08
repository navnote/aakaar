import { Avatar, AvatarFallback, AvatarImage } from "@aakaar/react";
import AvatarRegistry from "../../../../public/registry/avatar.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";
export default () => {
	return (
		<article>
			<h1>Avatar</h1>
			<p>Displays an avatar.</p>
			<h2>Demo</h2>
			<Demo
				code={`
<div className="flex gap-md">
  <Avatar>
    <AvatarImage src="https://github.com/navnote.png" />
    <AvatarFallback>NN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</div>
`}
			>
				<div className="flex gap-md">
					<Avatar>
						<AvatarImage src="https://github.com/navnote.png" />
						<AvatarFallback>NN</AvatarFallback>
					</Avatar>
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
			</Demo>

			<Installation registry={AvatarRegistry} componentName="avatar" />
		</article>
	);
};
