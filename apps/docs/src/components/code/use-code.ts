import { useEffect, useState } from "react";
import { createCssVariablesTheme, createHighlighter } from "shiki";
import { useAppContext } from "../../core/app";
import type { CodeArguments } from "./types";

import babelPlugin from "prettier/plugins/babel";
import estreePlugin from "prettier/plugins/estree";

import * as parserTypeScript from "prettier/parser-typescript";

import type { PackageManager } from "@aakaar/global";
import * as prettier from "prettier/standalone";

const cssVarTheme = createCssVariablesTheme({
	name: "css-variables",
	variablePrefix: "--shiki-",
	fontStyle: false,
});

const InstallCmdPrefix: Record<PackageManager, string> = {
	npm: "npm install",
	yarn: "yarn add",
	pnpm: "pnpm add",
	bun: "bun add",
	deno: "deno install",
};

const BinaryCmdPrefix: Record<PackageManager, string> = {
	npm: "npx",
	yarn: "yarn",
	pnpm: "pnpx",
	bun: "bun",
	deno: "deno",
};

// Create a singleton highlighter instance with proper typing
type Highlighter = Awaited<ReturnType<typeof createHighlighter>>;
let highlighterInstance: Highlighter | null = null;
let highlighterPromise: Promise<Highlighter> | null = null;

const getHighlighter = async (): Promise<Highlighter> => {
	if (highlighterInstance) {
		return highlighterInstance;
	}

	if (highlighterPromise) {
		return highlighterPromise;
	}

	highlighterPromise = createHighlighter({
		langs: ["typescript", "javascript", "jsx", "css", "html"],
		themes: [cssVarTheme],
	}).then((instance) => {
		highlighterInstance = instance;
		return instance;
	});

	return highlighterPromise;
};

export const useCode = ({
	code,
	lang = "jsx",
	isCli = false,
	jsScript = undefined,
}: CodeArguments) => {
	const { packageManager } = useAppContext();
	const [formattedCode, setFormattedCode] = useState(code);
	const [prettierCode, setPrettierCode] = useState(code);
	const [highlighter, setHighlighter] = useState<Highlighter | null>(null);

	useEffect(() => {
		let mounted = true;

		const initHighlighter = async () => {
			const instance = await getHighlighter();
			if (mounted) {
				setHighlighter(instance);
			}
		};

		initHighlighter();

		return () => {
			mounted = false;
		};
	}, []);

	useEffect(() => {
		if (!highlighter) return;

		const formatCode = async () => {
			let sanitizedCode = code;
			if (isCli || jsScript) {
				if (jsScript?.isInstall) {
					sanitizedCode = `${InstallCmdPrefix[packageManager]} ${code}`;
				}
				if (jsScript?.isBinary) {
					sanitizedCode = `${BinaryCmdPrefix[packageManager]} ${code}`;
				}
			} else if (
				lang === "typescript" ||
				lang === "javascript" ||
				lang === "jsx"
			) {
				const formatted = await prettier.format(code, {
					parser: "typescript",
					plugins: [babelPlugin, estreePlugin, parserTypeScript],
					semi: false,
				});
				sanitizedCode = formatted.trim().replace(";", "");
			}
			setPrettierCode(sanitizedCode);
			const formattedCode = highlighter.codeToHtml(sanitizedCode, {
				theme: "css-variables",
				lang,
			});
			setFormattedCode(formattedCode);
		};
		formatCode();
	}, [code, lang, isCli, jsScript, packageManager, highlighter]);

	return { prettierCode, formattedCode };
};
