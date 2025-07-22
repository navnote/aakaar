import {
	type CategoryDesignTokens,
	type ColorStrategy,
	type CssObject,
	type DesignToken,
	VariableCase,
} from "../types";
import { transformCase } from "../utils/case";
import {
	dropShadowSizeTokens,
	insetShadowSizeTokens,
	shadowSizeTokens,
} from "./shadow";
import {
	baseToken,
	fontSizeTokens,
	radiusTokens,
	scaleToken,
	spacingTokens,
} from "./size";
import { colorStrategy } from "./strategy";

export const transformTokenToCssObject = (token: DesignToken): CssObject => {
	const name = `--${transformCase(token.name, VariableCase.KEBAB)}`;
	return {
		name,
		value: token.value,
	};
};

export const transformTokenToCSSVariable = (colorToken: DesignToken) => {
	const { name, value } = transformTokenToCssObject(colorToken);
	return `${name}: ${value};`;
};

const buildForCategory = (category: string, tokens: DesignToken[]) => {
	const output = [];
	output.push(`  /* Category: ${category} */`);
	for (const token of tokens) {
		output.push(`  ${transformTokenToCSSVariable(token)}`);
	}
	return output;
};

export const buildCategoryDesignTokens = (
	color: string,
	strategy: ColorStrategy = "harmony",
): CategoryDesignTokens[] => {
	const strategyResult = colorStrategy(strategy, color);
	return [
		{
			category: "Reset Colors",
			tokens: [
				{
					name: "color*",
					value: "initial",
				},
			],
		},
		{
			category: "Primary Colors",
			tokens: Object.values(strategyResult.primaryPalette).concat(
				Object.values(strategyResult.blackAndWhite),
			),
		},
		{
			category: "Palette Colors",
			tokens: Object.values(strategyResult.lightDark),
		},

		{
			category: "Scale",
			tokens: [scaleToken],
		},
		{
			category: "Base",
			tokens: [baseToken],
		},
		{
			category: "Reset spacing",
			tokens: [
				{
					name: "spacing*",
					value: "initial",
				},
			],
		},
		{
			category: "Spacing",
			tokens: spacingTokens,
		},
		{
			category: "FontSize",
			tokens: fontSizeTokens,
		},
		{
			category: "BorderRadius",
			tokens: radiusTokens,
		},
		{
			category: "Shadows",
			tokens: shadowSizeTokens,
		},
		{
			category: "Drop Shadows",
			tokens: dropShadowSizeTokens,
		},
		{
			category: "Inset Shadows",
			tokens: insetShadowSizeTokens,
		},
	];
};

export const runCss = (color: string, strategy: ColorStrategy = "harmony") => {
	const categoryTokens = buildCategoryDesignTokens(color, strategy);
	const output = [];
	// Root
	output.push("@theme {");
	for (const category of categoryTokens) {
		output.push(...buildForCategory(category.category, category.tokens));
		output.push("");
	}
	output.push("}");
	output.push("");
	return output.join("\n");
};
