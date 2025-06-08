import { Size } from "@aakaar/dictionary";
import { Button } from "@aakaar/react";
import { IconDice } from "@tabler/icons-react";
import { useCallback, useEffect } from "react";
import { useAppContext } from "../core/app";
import type { Base, FontFamily, Theme } from "../core/app/types";

const ALL_PACKAGE_MANAGERS = ["pnpm", "yarn", "npm", "bun"] as const;
const ALL_THEMES: Theme[] = ["light", "dark"];
const ALL_RADII = [Size.zero, Size.xs, Size.sm, Size.md, Size.lg, Size.xl];
const ALL_BASES: Base[] = ["0.9rem", "1rem", "1.25rem", "1.5rem"];
const ALL_FONTS: FontFamily[] = [
	"Poppins",
	"Montserrat",
	"Raleway",
	"Nunito",
	"Ubuntu",
	"Lexend",
	"OpenDyslexicRegular",
	"Comfortaa",
	"Space Grotesk",
	"Fredoka",
	"Righteous",
];
const RANDOM_COLORS = [
	"#FF0000", // Red
	"#FF4500", // Orange Red
	"#FFA500", // Orange
	"#FFD700", // Golden Yellow
	"#FFFF00", // Yellow
	"#32CD32", // Lime Green
	"#008000", // Dark Green
	"#00CED1", // Dark Turquoise
	"#1E90FF", // Dodger Blue
	"#0000FF", // Blue
	"#4B0082", // Indigo
	"#8A2BE2", // Blue Violet
	"#800080", // Purple
	"#FF1493", // Deep Pink
	"#FF69B4", // Hot Pink
	"#C71585", // Medium Violet Red
	"#8B4513", // Saddle Brown
	"#A0522D", // Sienna
	"#708090", // Slate Gray
	"#2F4F4F", // Dark Slate Gray
];

function getRandom<T>(arr: readonly T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

export const RandomToggle = () => {
	const {
		setTheme,
		setPrimary,
		setRadius,
		setBase,
		setFontFamily,
		setPackageManager,
	} = useAppContext();

	const handleRandomize = useCallback(() => {
		setTheme(getRandom(ALL_THEMES));
		setPrimary(getRandom(RANDOM_COLORS));
		setRadius(getRandom(ALL_RADII));
		setBase(getRandom(ALL_BASES));
		setFontFamily(getRandom(ALL_FONTS));
		setPackageManager(getRandom(ALL_PACKAGE_MANAGERS));
	}, [
		setTheme,
		setPrimary,
		setRadius,
		setBase,
		setFontFamily,
		setPackageManager,
	]);

	// Add keyboard shortcut listener
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (e.ctrlKey && e.shiftKey && e.key === "R") {
				e.preventDefault(); // Prevent browser refresh
				handleRandomize();
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [handleRandomize]);

	return (
		<Button
			variant="primary"
			size="icon"
			onClick={handleRandomize}
			title="Randomize All"
		>
			<IconDice size={20} />
		</Button>
	);
};
