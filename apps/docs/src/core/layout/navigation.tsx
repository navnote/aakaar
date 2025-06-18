import { Link, useLocation } from "react-router";
import { useAppContext } from "../app/context";
import {
	COMPONENTS_NAVIGATION_ITEMS,
	INTRO_NAVIGATION_ITEMS,
} from "../navigation";

export const Navigation = () => {
	const { pathname: urlPathname } = useLocation();
	const { setIsSidebarOpen } = useAppContext();
	return (
		<div className="flex flex-col gap-none p-md overflow-y-auto w-full mb-lg">
			<h4 className="font-bold mt-md">Getting Started</h4>
			<ul className="list-none flex flex-col gap-0 p-0">
				{INTRO_NAVIGATION_ITEMS.map((item) => {
					return (
						<li className="my-[2px]" key={item.path}>
							<Link
								to={item.path}
								className={`navigation-link ${
									item.path === urlPathname ? "navigation-link-active" : ""
								}`}
								onClick={() => setIsSidebarOpen(false)}
							>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
			<h4 className="font-bold mt-md">Components</h4>
			<ul className="list-none flex flex-col gap-0 p-0 mb-lg">
				{COMPONENTS_NAVIGATION_ITEMS.map((item) => {
					return (
						<li className="my-[2px]" key={item.path}>
							<Link
								to={item.path}
								className={`navigation-link ${
									item.path === urlPathname ? "navigation-link-active" : ""
								}`}
								onClick={() => setIsSidebarOpen(false)}
							>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
