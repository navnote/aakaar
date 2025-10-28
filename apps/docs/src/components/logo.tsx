import { Link } from "react-router";
import { useAppContext } from "src/core/app/context";
import { AakaarIcon } from "./aakaar-icon";

export const Logo = ({
	size = "md",
	className,
}: {
	size?: "lg" | "md";
	className?: string;
}) => {
	const sizeClass = `text-${size}`;
	const iconSizeClass = size === "lg" ? "xl" : "md";
	const { setIsSidebarOpen } = useAppContext();
	return (
		<Link
			className={`flex gap-0 items-baseline p-sm text-primary select-none  no-underline justify-center relative ${sizeClass} ${className}`}
			to="/"
			onClick={() => setIsSidebarOpen(false)}
		>
			<AakaarIcon
				style={{
					width: `var(--spacing-${iconSizeClass})`,
					height: `var(--spacing-${iconSizeClass})`,
				}}
			/>
			<span>akaar</span>
			{size === "md" && (
				<span className="ml-xs px-xs py-xxs text-xs bg-primary-container/10 text-primary rounded-sm font-medium absolute top-xs right-xs">
					v0.0.X
				</span>
			)}
		</Link>
	);
};
