import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@aakaar/react";
import { Mondrian } from "../mondrian";
import { Cookie } from "./cookie";
import { Faq } from "./faq";
import { Login } from "./login";
import { Profile } from "./profile";
import { Report } from "./report";
import { Share } from "./share";

export const Widgets = () => {
	return (
		<div
			className="p-sm md:p-md md:m-xl rounded transition-all duration-500"
			id="demo-container"
		>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/widgets">Widgets</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="grid grid-cols-1 gap-md lg:grid-cols-3 py-md">
				<Cookie />
				<div className="flex flex-col gap-xs">
					<Faq />
					<div className="flex w-full scale-95">
						<Mondrian />
					</div>
				</div>
				<Report />
				<Share />
				<Login />
				<Profile />
			</div>
		</div>
	);
};
