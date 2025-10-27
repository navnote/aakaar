import {
	type ColorStrategy,
	Size,
	buildCategoryDesignTokens,
	transformTokenToCssObject,
} from "@aakaar/dictionary";

import type { PackageManager } from "@aakaar/global";
import { useEffect, useMemo, useState } from "react";
import { AppContext } from "./context";
import type { AppContextType, Base, FontFamily, Theme } from "./types";

const fetchLocalStorageItem = (key: string): string | null => {
	return typeof window !== "undefined" && window.localStorage
		? ((localStorage.getItem(key) as Theme) ?? null)
		: null;
};

const commitLocalStorageItem = (key: string, value: string) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	typeof window !== "undefined" && window.localStorage
		? localStorage.setItem(key, value)
		: null;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
	const [strategy, setStrategy] = useState<ColorStrategy>("material");

	const [theme, setTheme] = useState<Theme>(
		(fetchLocalStorageItem("theme") as Theme) ?? "light",
	);

	const [radius, setRadius] = useState<Size>(
		(fetchLocalStorageItem("radius") as Size) ?? Size.md,
	);

	const [packageManager, setPackageManagerState] = useState<PackageManager>(
		(fetchLocalStorageItem("packageManager") as PackageManager) ?? "npm",
	);
	const [primary, setPrimaryState] = useState(
		fetchLocalStorageItem("primaryColor") ?? "#a42700",
	);

	const [base, setBase] = useState<Base>(
		(fetchLocalStorageItem("base") as Base) ?? "1.25rem",
	);

	const [fontFamily, setFontFamilyState] = useState<FontFamily>(
		(fetchLocalStorageItem("fontFamily") as FontFamily) ?? "Poppins",
	);

	const categoryTokens = useMemo(() => {
		return buildCategoryDesignTokens(primary, strategy);
	}, [primary, strategy]);

	useEffect(() => {
		const rootElem = document.querySelector<HTMLElement>(":root");

		for (const category of categoryTokens) {
			for (const token of category.tokens) {
				const cssObject = transformTokenToCssObject(token);
				rootElem?.style.setProperty(cssObject.name, cssObject.value);
				if (token.name === "radiusDefault") {
					rootElem?.style.setProperty(
						"--radius-default",
						`var(--radius-${radius})`,
					);
				}
				if (token.name === "base") {
					rootElem?.style.setProperty("--base", base);
				}
			}
		}
	}, [categoryTokens, radius, base]);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.style.setProperty("color-scheme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.style.setProperty("color-scheme", "light");
			document.documentElement.classList.remove("dark");
		}
		commitLocalStorageItem("theme", theme);
	}, [theme]);

	useEffect(() => {
		const rootElem = document.querySelector<HTMLElement>(":root");
		rootElem?.style.setProperty("--font-sans", `"${fontFamily}", sans-serif`);
		commitLocalStorageItem("fontFamily", fontFamily);
	}, [fontFamily]);

	const appContextValue: AppContextType = {
		primary,
		setPrimary: (value: string) => {
			setPrimaryState(value);
			commitLocalStorageItem("primaryColor", value);
		},
		radius,
		setRadius: (value: Size) => {
			setRadius(value);
			commitLocalStorageItem("radius", value);
		},
		base,
		setBase: (value: Base) => {
			setBase(value);
			commitLocalStorageItem("base", value);
		},
		theme,
		setTheme,
		packageManager,
		setPackageManager: (pm: PackageManager) => {
			setPackageManagerState(pm);
			commitLocalStorageItem("packageManager", pm);
		},
		categoryTokens: [...categoryTokens],
		fontFamily,
		setFontFamily: (font: FontFamily) => {
			setFontFamilyState(font);
			commitLocalStorageItem("fontFamily", font);
		},
		isSidebarOpen,
		setIsSidebarOpen,
		strategy,
		setStrategy: (strategy: ColorStrategy) => {
			setStrategy(strategy);
			commitLocalStorageItem("strategy", strategy);
		},
	};

	return (
		<AppContext.Provider value={appContextValue}>
			{children}
		</AppContext.Provider>
	);
};
