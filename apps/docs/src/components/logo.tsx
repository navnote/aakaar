import { Link } from "react-router";
import { AakaarIcon } from "./aakaar-icon";
import { useAppContext } from "src/core/app/context";

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
			className={`flex gap-0 items-baseline p-sm text-primary select-none  no-underline justify-center ${sizeClass} ${className}`}
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
		</Link>
	);
};
