import { Textarea } from "@aakaar/react";
import TextAreaRegistry from "../../../../public/registry/textarea.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";
export default () => {
	return (
		<article>
			<h1>Text</h1>
			<p>
				Textarea is a component that allows users to enter text. It is a wrapper
				around the native textarea element.
			</p>
			<h2>Demo</h2>
			<Demo code={`<Textarea placeholder="Type your message here." />`}>
				<Textarea placeholder="Type your message here." className="w-full" />
			</Demo>
			<Installation registry={TextAreaRegistry} componentName="textarea" />
		</article>
	);
};
