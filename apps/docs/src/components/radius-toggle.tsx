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
			<span
				className="w-[20px] h-[20px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap"
				style={{ fontSize: "14px" }}
			>
				{radius === Size.zero ? "0" : radius.replace("px", "")}
			</span>
		</Button>
	);
};
