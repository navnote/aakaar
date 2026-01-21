import { Button } from "@aakaar/react";
import { IconTypography } from "@tabler/icons-react";
import { useContext } from "react";
import { AppContext } from "../core/app/context";
import type { FontFamily } from "../core/app/types";

const FONTS: { category: string; fonts: FontFamily[] }[] = [
	{
		category: "Professional",
		fonts: ["Sora", "Poppins", "Montserrat", "Raleway", "Nunito", "Ubuntu"],
	},
	{
		category: "Dyslexic-friendly",
		fonts: ["Lexend", "OpenDyslexicRegular"],
	},
	{
		category: "Creative",
		fonts: ["Comfortaa", "Space Grotesk", "Fredoka", "Righteous"],
	},
];

// Flatten fonts array for cycling through them
const ALL_FONTS = FONTS.flatMap((category) => category.fonts);

export const FontToggle = () => {
	const { fontFamily, setFontFamily } = useContext(AppContext);

	const handleClick = () => {
		const currentIndex = ALL_FONTS.indexOf(fontFamily);
		const nextIndex = (currentIndex + 1) % ALL_FONTS.length;
		setFontFamily(ALL_FONTS[nextIndex]);
		// Add animation class to trigger font transition
		document.documentElement.classList.add("animate-font-change");
		setTimeout(() => {
			document.documentElement.classList.remove("animate-font-change");
		}, 300);
	};

	// Find the current font's category
	const currentCategory = FONTS.find((category) =>
		category.fonts.includes(fontFamily),
	)?.category;

	return (
		<Button
			variant="primary"
			size="icon"
			onClick={handleClick}
			title={`Current font: ${fontFamily} (${currentCategory})`}
		>
			<IconTypography size={20} />
		</Button>
	);
};
