import { Button } from "@aakaar/react";
import { type Base, useAppContext } from "../core/app";

export const BaseToggle = () => {
	const { base, setBase } = useAppContext();

	const sizes = ["0.9rem", "1rem", "1.25rem", "1.5rem"] as const;

	const handleClick = () => {
		const currentIndex = sizes.indexOf(base);
		const nextIndex = (currentIndex + 1) % sizes.length;
		setBase(sizes[nextIndex] as Base);
	};

	return (
		<Button
			variant="primary"
			size="icon"
			className="text-sm"
			onClick={handleClick}
		>
			{base}
		</Button>
	);
};
