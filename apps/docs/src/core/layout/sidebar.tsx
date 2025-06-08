import { useLocation } from "react-router";

import { useAppContext } from "../app/context";
import { Navigation } from "./navigation";

// for mobile always hide sidebar it should be open only when the user clicks on the menu icon
// for desktop show sidebar only when the user is on the docs page

export const Sidebar = () => {
	const { isSidebarOpen } = useAppContext();
	const { pathname: urlPathname } = useLocation();
	const isDocs = urlPathname.startsWith("/docs");
	return (
		<aside
			className={`
				h-screen w-full fixed left-0 bg-background z-20
				sm:col-span-3 md:col-span-3 lg:col-span-2
				sm:h-auto sm:relative sm:bg-transparent sm:border-r-[1px] border-outline-variant
				${isSidebarOpen ? "flex" : "hidden"}
				md:${isDocs ? "flex" : "hidden"}
			`}
		>
			<Navigation />
		</aside>
	);
};
