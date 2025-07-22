import type {
	CategoryDesignTokens,
	ColorStrategy,
	Size,
} from "@aakaar/dictionary";
import type { PackageManager } from "@aakaar/global";

export type Theme = "light" | "dark";

export type Base = "0.9rem" | "1rem" | "1.25rem" | "1.5rem";

export type FontFamily =
	| "Poppins"
	| "Montserrat"
	| "Raleway"
	| "Nunito"
	| "Ubuntu"
	| "Lexend"
	| "OpenDyslexicRegular"
	| "Comfortaa"
	| "Space Grotesk"
	| "Fredoka"
	| "Righteous";

export type AppContextType = {
	base: Base;
	setBase: (base: Base) => void;
	primary: string;
	setPrimary: (color: string) => void;
	theme: Theme;
	setTheme: (theme: Theme) => void;
	packageManager: PackageManager;
	setPackageManager: (pm: PackageManager) => void;
	categoryTokens: CategoryDesignTokens[];
	radius: Size;
	setRadius: (radius: Size) => void;
	fontFamily: FontFamily;
	setFontFamily: (font: FontFamily) => void;
	isSidebarOpen: boolean;
	setIsSidebarOpen: (isSidebarOpen: boolean) => void;
	strategy: ColorStrategy;
	setStrategy: (strategy: ColorStrategy) => void;
};
