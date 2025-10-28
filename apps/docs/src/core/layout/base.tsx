import { ToastProvider, ToastViewport } from "@aakaar/react";
import { Outlet, useLocation } from "react-router";
import { AppProvider } from "../app";
import { Footer } from "./footer";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

import "../../styles/global.css";

export const BaseLayout = () => {
	const { pathname: urlPathname } = useLocation();
	const isDocs = urlPathname.startsWith("/docs");

	return (
		<AppProvider>
			<ToastProvider>
				<div className="bg-background text-on-background flex-1 ">
					<div className="w-full overflow-auto">
						<Header />
						<div
							className={`mt-xl px-sm container mx-auto pt-md ${
								isDocs ? "grid grid-cols-12 gap-md" : ""
							}`}
						>
							<Sidebar />
							<div
								className={`flex flex-col flex-1 py-xl min-h-[80vh] w-full ${
									isDocs
										? "col-span-12 sm:col-span-9 md:col-span-9 lg:col-span-10"
										: ""
								}`}
							>
								<Outlet />
							</div>
						</div>
					</div>
					<Footer />
				</div>
				<ToastViewport />
			</ToastProvider>
		</AppProvider>
	);
};
