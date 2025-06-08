import { Size } from "@aakaar/dictionary";
import type { PackageManager } from "@aakaar/global";
import { createContext, useContext } from "react";
import type { AppContextType, Base, FontFamily, Theme } from "./types";

export const AppContext = createContext<AppContextType>({
	primary: "blue",
	setPrimary: (_color: string) => {},
	theme: "light",
	setTheme: (_theme: Theme) => {},
	packageManager: "npm",
	setPackageManager: (_pm: PackageManager) => {},
	categoryTokens: [],
	radius: Size.md,
	base: "1rem",
	setRadius: (_radius: Size) => {},
	setBase: (_base: Base) => {},
	fontFamily: "Poppins",
	setFontFamily: (_font: FontFamily) => {},
	isSidebarOpen: false,
	setIsSidebarOpen: (_isSidebarOpen: boolean) => {},
});

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (context === undefined) {
		throw new Error("useAppContext must be used within a AppProvider");
	}
	return context;
};
