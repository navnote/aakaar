import { Button } from "@aakaar/react";
import { IconBrandGoogle, IconPalette } from "@tabler/icons-react";
import { useAppContext } from "../core/app";

export const StrategyToggle = () => {
	const { strategy, setStrategy } = useAppContext();

	const handleClick = () => {
		setStrategy(strategy === "material" ? "harmony" : "material");
	};

	return (
		<Button
			variant="primary"
			size="icon"
			onClick={handleClick}
			title={`Current strategy: ${strategy}`}
		>
			{strategy === "material" ? (
				<>
					<span className="sr-only">Switch to Harmony strategy</span>
					<IconBrandGoogle size={20} stroke={1.5} />
				</>
			) : (
				<>
					<span className="sr-only">Switch to Material strategy</span>
					<IconPalette size={20} stroke={1.5} />
				</>
			)}
		</Button>
	);
};
