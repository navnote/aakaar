import { transformTokenToCssObject } from "@aakaar/dictionary";
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@aakaar/react";
import { IconSettingsSearch } from "@tabler/icons-react";
import { useAppContext } from "../core/app";
import { FormattedCode } from "./code";

export const ConfigViewer = () => {
	const {
		categoryTokens,
		fontFamily,
		theme,
		radius,
		packageManager,
		base,
		strategy,
		primary,
	} = useAppContext();

	return (
		<Dialog>
			<DialogTrigger>
				<Button size={"icon"}>
					<IconSettingsSearch size={20} />
				</Button>
			</DialogTrigger>
			<DialogContent className="w-full sm:max-w-[600px] max-h-[80vh] overflow-auto">
				<DialogHeader>
					<DialogTitle>Configuration</DialogTitle>
				</DialogHeader>
				<div className="flex flex-col gap-md">
					<table className="w-full" border={0}>
						<tbody>
							<tr>
								<td className="text-sm font-bold p-xs">Font</td>
								<td className="p-xs">{fontFamily}</td>
							</tr>
							<tr>
								<td className="text-sm font-bold p-xs">Color Strategy</td>
								<td className="p-xs">{strategy}</td>
							</tr>
							<tr>
								<td className="text-sm font-bold p-xs">Theme</td>
								<td className="p-xs">{theme}</td>
							</tr>
							<tr>
								<td className="text-sm font-bold p-xs">Radius</td>
								<td className="p-xs">{radius}</td>
							</tr>
							<tr>
								<td className="text-sm font-bold p-xs">Package Manager</td>
								<td className="p-xs">{packageManager}</td>
							</tr>
							<tr>
								<td className="text-sm font-bold p-xs">Base</td>
								<td className="p-xs">{base}</td>
							</tr>
						</tbody>
					</table>
					<div className="flex flex-col gap-xs">
						<h4 className="text-sm font-bold">Tokens</h4>
						<FormattedCode
							code={`/* Aakaar Design Tokens: Source: ${primary} */\n${categoryTokens
								.map(({ category, tokens }) => {
									return `/* ${category} */\n${tokens
										.map(transformTokenToCssObject)
										.map(({ name, value }) => `${name}: ${value};`)
										.join("\n")}`;
								})
								.join("\n\n")}`}
							lang="css"
						/>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};
