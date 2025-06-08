import { Size } from "@aakaar/dictionary";
import { Button } from "@aakaar/react";
import { useAppContext } from "../core/app";

export const RadiusToggle = () => {
	const { radius, setRadius } = useAppContext();

	const sizes = [Size.zero, Size.xs, Size.sm, Size.md, Size.lg, Size.xl];

	const handleClick = () => {
		const currentIndex = sizes.indexOf(radius);
		const nextIndex = (currentIndex + 1) % sizes.length;
		setRadius(sizes[nextIndex]);
	};

	return (
		<Button variant="primary" size="icon" onClick={handleClick}>
			<span className="text-sm min-w-[1px]">
				{radius === Size.zero ? "0" : radius.replace("px", "")}
			</span>
		</Button>
	);
};
