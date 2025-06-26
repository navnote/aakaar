import { Mondrian } from "../../components/mondrian";

export default () => (
	<>
		<h1>Introduction</h1>
		<p>
			Aakaar is library that helps you build the form of your design system. It
			majorly used Base UI components. We follow the same approach as Shadcn UI
			which let's you add components to your project without any hassle.{" "}
			<b>
				But the gotcha here is that you can heavly customise your components.
			</b>{" "}
			Because we use token based design system, you can easily change the look
			and feel of the components.
		</p>
		<div className="flex justify-center p-sm my-md w-full">
			<Mondrian />
		</div>
		<p>
			Just like shadcn this is not a component library. Do not install it as a
			dependency. It is not available or distributed via npm.
		</p>
	</>
);
