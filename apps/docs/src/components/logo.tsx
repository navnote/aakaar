import { Link } from "react-router";
import { useAppContext } from "src/core/app/context";
import { AakaarIcon } from "./aakaar-icon";

export const Logo = ({
	size = "md",
	className,
}: {
	size?: "lg" | "md" | "xl";
	className?: string;
}) => {
	const sizeMap = {
		lg: "text-lg",
		md: "text-md",
		xl: "text-xl",
	};
	const iconSizeMap = {
		lg: "xl",
		md: "md",
		xl: "2xl",
	};
	const { setIsSidebarOpen } = useAppContext();
	return (
		<Link
			className={`flex items-baseline p-sm text-primary select-none no-underline justify-center relative ${sizeMap[size]} ${className}`}
			to="/"
			onClick={() => setIsSidebarOpen(false)}
		>
			<AakaarIcon
				style={{
					width: `var(--spacing-${iconSizeMap[size]})`,
					height: `var(--spacing-${iconSizeMap[size]})`,
				}}
			/>
			<span className="font-semibold">akaar</span>
			{size === "md" && (
				<span className="ml-xs px-xs py-xxs text-xs bg-primary-container/10 text-primary rounded-sm font-medium absolute top-xs right-xs">
					v0.0.X
				</span>
			)}
		</Link>
	);
};
