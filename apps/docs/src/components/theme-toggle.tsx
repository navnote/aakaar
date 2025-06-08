import { Button } from "@aakaar/react";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useAppContext } from "../core/app";

export const ThemeToggle = () => {
	const { theme, setTheme } = useAppContext();
	const handleClick = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<Button variant="primary" onClick={handleClick} size={"icon"}>
			{theme === "light" ? (
				<IconMoonFilled size={20} />
			) : (
				<IconSunFilled size={20} />
			)}
		</Button>
	);
};
