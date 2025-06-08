import { type CSSProperties, useId } from "react";
import { cn } from "../../core/core";

interface GridPatternProps {
	width?: number;
	height?: number;
	x?: number;
	y?: number;
	squares?: Array<[x: number, y: number]>;
	strokeDasharray?: CSSProperties["strokeDasharray"];
	className?: string;
}

export const GridPattern = ({
	width = 40,
	height = 40,
	x = -1,
	y = -1,
	strokeDasharray = 0,
	squares,
	className,
	...props
}: GridPatternProps) => {
	const id = useId();

	return (
		<svg
			aria-hidden="true"
			className={cn(
				"pointer-events-none absolute inset-0 h-full w-full fill-secondary stroke-secondary opacity-45",
				className,
			)}
			{...props}
		>
			<defs>
				<pattern
					id={id}
					width={width}
					height={height}
					patternUnits="userSpaceOnUse"
					x={x}
					y={y}
				>
					<path
						d={`M.5 ${height}V.5H${width}`}
						fill="none"
						strokeDasharray={strokeDasharray}
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y], idx) => (
						<rect
							strokeWidth="0"
							key={`${x}-${y}-${
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								idx
							}`}
							width={width - 1}
							height={height - 1}
							x={x * width + 1}
							y={y * height + 1}
						/>
					))}
				</svg>
			)}
		</svg>
	);
};
