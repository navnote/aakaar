export enum VariableCase {
	KEBAB = "KEBAB",
	SNAKE = "SNAKE",
	CAMEL = "CAMEL",
}

export enum Size {
	zero = "0",
	xs = "xs",
	sm = "sm",
	md = "md",
	lg = "lg",
	xl = "xl",
	full = "full",
}

export type CssObject = {
	name: string; // '--color-primary'
	value: string;
};

export type DesignToken = {
	name: string;
	value: string;
};

export type CategoryDesignTokens = {
	category: string;
	tokens: DesignToken[];
};
