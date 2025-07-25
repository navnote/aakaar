import { FormattedCode } from "../../components/code";

export default () => {
	return (
		<>
			<h1>Installation</h1>
			<p>
				Aakaar is a library that helps you build the form of your design system.
				It majorly used Base UI components. We follow the same approach as
				Shadcn UI which let's you add components to your project without any
				hassle.
			</p>
			<h2>Install Tailwind Dependencies</h2>
			<div>
				<FormattedCode
					isCli
					code="pnpm add tailwindcss @tailwindcss/vite class-variance-authority clsx tailwind-merge framer-motion"
				/>
			</div>
			<h2>Run setup</h2>
			<div>
				<FormattedCode isCli code="pnpx @aakaar/cli setup" />
			</div>

			<b>Only press y when you have correctly chosen path for following:</b>
			<FormattedCode
				code={`
// aakaar.json
export type AakaarConfig = {
	host: string; // The host of the aakaar server
	core: {
		path: string; // The path to the core files
		import: string; // The import path from where to import the core file
	};
	tokens: {
		color: string; // The source color of the tokens
		strategy: string; // Strategy used to generate tokens i.e. 'material' or 'harmony'
		output: string; // The output path for the tokens
	};
	react: {
		output: string; // The output path for the react components
	};
};`}
			/>
			<b>Your file structure should look like this:</b>
			<FormattedCode
				code={`
// src/
//   design/
//     css/tokens.css
//     components/
//     core.ts
            `}
			/>
			<h2>Setup tokens</h2>
			<div>
				<FormattedCode isCli code="pnpx @aakaar/cli token" />
			</div>
			<b>
				This will create a tokens.css file based on the color you have chosen in
				aakaar.json
			</b>
			<FormattedCode
				lang="css"
				code={`@import "tailwindcss";
@import 'src/design/css/tokens.css'
@source "./"`}
			/>
			<h2>Add component</h2>
			<div>
				<FormattedCode isCli code="pnpx @aakaar/cli add button" />
			</div>
			<h2>Use component</h2>
			<FormattedCode
				code={`import { Button } from '../design/components/button';`}
			/>
			<h2>Using tsconfig alias path</h2>
			<FormattedCode
				lang="js"
				code={`{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/design/components/*"]
    }
  }
}`}
			/>
			<b>Import component</b>
			<FormattedCode code={`import { Button } from '@/button/button';`} />
		</>
	);
};
