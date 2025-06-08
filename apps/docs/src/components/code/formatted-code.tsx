import { Button } from "@aakaar/react";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useState } from "react";
import type { CodeArguments } from "./types";
import { useCode } from "./use-code";

export const FormattedCode = ({
	code,
	lang = "jsx",
	isCli = false,
	jsScript = undefined,
	pm = "npm",
	enableCopy = true,
}: CodeArguments & {
	enableCopy?: boolean;
}) => {
	const [isCopied, setIsCopied] = useState(false);
	const { prettierCode, formattedCode } = useCode({
		code,
		lang,
		isCli,
		jsScript,
		pm,
	});

	const handleCopy = async () => {
		await navigator.clipboard.writeText(prettierCode);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	};

	return (
		<pre className={"relative p-md"}>
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
			<span dangerouslySetInnerHTML={{ __html: formattedCode }} />
			{enableCopy && (
				<Button
					variant={"secondary"}
					size={"icon"}
					onClick={handleCopy}
					className="absolute top-sm right-sm"
				>
					{isCopied ? <IconCheck size={16} /> : <IconCopy size={16} />}
				</Button>
			)}
		</pre>
	);
};
