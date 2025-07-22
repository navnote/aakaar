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

export type PrimaryPalette = {
	primary0: DesignToken;
	primary10: DesignToken;
	primary20: DesignToken;
	primary30: DesignToken;
	primary40: DesignToken;
	primary50: DesignToken;
	primary60: DesignToken;
	primary70: DesignToken;
	primary80: DesignToken;
	primary90: DesignToken;
	primary95: DesignToken;
	primary100: DesignToken;
};

export type AakaarColorScheme = {
	primary: DesignToken;
	onPrimary: DesignToken;
	primaryContainer: DesignToken;
	onPrimaryContainer: DesignToken;
	secondary: DesignToken;
	onSecondary: DesignToken;
	secondaryContainer: DesignToken;
	onSecondaryContainer: DesignToken;
	tertiary: DesignToken;
	onTertiary: DesignToken;
	tertiaryContainer: DesignToken;
	onTertiaryContainer: DesignToken;
	error: DesignToken;
	onError: DesignToken;
	errorContainer: DesignToken;
	onErrorContainer: DesignToken;
	background: DesignToken;
	onBackground: DesignToken;
	surface: DesignToken;
	onSurface: DesignToken;
	surfaceVariant: DesignToken;
	onSurfaceVariant: DesignToken;
	outline: DesignToken;
	outlineVariant: DesignToken;
	shadow: DesignToken;
	scrim: DesignToken;
	inverseSurface: DesignToken;
	inverseOnSurface: DesignToken;
	inversePrimary: DesignToken;
};

export type BlackAndWhiteScheme = {
	white: DesignToken;
	black: DesignToken;
};

export type ColorStrategyOutput = {
	primaryPalette: PrimaryPalette;
	lightDark: AakaarColorScheme;
	blackAndWhite: BlackAndWhiteScheme;
};

export type ColorStrategy = "material" | "harmony";
