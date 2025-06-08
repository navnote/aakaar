import { Link, useLocation } from "react-router";

import { BaseToggle } from "../../components/base-toggle";
import { ColorPicker } from "../../components/color-picker";
import { ConfigViewer } from "../../components/config-viewer";
import { FontToggle } from "../../components/font-toggle";
import { Logo } from "../../components/logo";
import { PmToggle } from "../../components/pm-toggle";
import { RadiusToggle } from "../../components/radius-toggle";
import { RandomToggle } from "../../components/random-toggle";
import { ThemeToggle } from "../../components/theme-toggle";
import { HEADER_NAVIGATION_ITEMS } from "../navigation";
import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@aakaar/react";
import { useAppContext } from "../app/context";
import { IconBrandGithub, IconMenu2, IconSettings } from "@tabler/icons-react";

export const Header = () => {
	const { pathname: urlPathname } = useLocation();
	const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
	const toggleOptions = (
		<>
			<RandomToggle />
			<PmToggle />
			<ColorPicker />
			<ThemeToggle />
			<RadiusToggle />
			<BaseToggle />
			<FontToggle />
			<ConfigViewer />
			<a href="https://github.com/navnote/aakaar" target="_blank">
				<Button size="icon">
					<IconBrandGithub size={20} />
				</Button>
			</a>
		</>
	);
	return (
		<header className="shadow-sm mb-xs p-sm md:px-md bg-surface text-on-surface w-full z-50 backdrop-blur-lg fixed">
			<div className="flex items-center justify-between xl:container xl:mx-auto">
				<div className="flex gap-xs items-center">
					<Button
						variant="ghost"
						size="icon"
						className="sm:hidden"
						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					>
						<IconMenu2 />
					</Button>
					<Logo />
					<nav className="hidden sm:flex items-center gap-md">
						{HEADER_NAVIGATION_ITEMS.map((link) => {
							return (
								<Link
									key={link.title}
									to={link.path}
									className={`${
										link.path === urlPathname ? "navigation-link-active" : ""
									}`}
								>
									{link.title}
								</Link>
							);
						})}
					</nav>
				</div>
				<Dialog>
					<DialogTrigger className="md:hidden">
						<IconSettings
							size={20}
							className="text-on-surface-variant cursor-pointer"
						/>
					</DialogTrigger>
					<DialogContent className="pt-lg  w-full">
						<DialogTitle className="text-sm hidden">
							Play with the theme
						</DialogTitle>
						<div className="flex gap-xs items-center justify-center ">
							{toggleOptions}
						</div>
					</DialogContent>
				</Dialog>
				<div className="hidden md:flex items-center w-full justify-center md:justify-end gap-xs overflow-x-auto">
					{toggleOptions}
				</div>
			</div>
		</header>
	);
};
