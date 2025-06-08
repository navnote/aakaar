import { Input } from "@aakaar/react";
import InputRegistry from "../../../../public/registry/input.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Input</h1>
			<p>
				Input is used to get user input. It is a form component that allows the
				user to enter data.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`
        <div className="flex w-full flex-col gap-sm sm:w-3/6">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>
        `}
			>
				<div className="flex w-full flex-col gap-sm sm:w-3/6">
					<Input type="email" placeholder="Email" />
					<Input type="password" placeholder="Password" />
				</div>
			</Demo>
			<Installation registry={InputRegistry} componentName="input" />
		</article>
	);
};
