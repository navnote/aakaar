import type { SVGAttributes } from "react";

export const AakaarIcon = ({
	width = 24,
	height = 24,
	...rest
}: SVGAttributes<SVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...rest}
	>
		<path d="M 1 24 C 12 -10 18 0 22 24" />
		<circle cx="6" cy="10" r="2" fill="currentColor" />
		<circle cx="20" cy="14" r="2" fill="currentColor" />
		<line
			x1="10"
			y1="12"
			x2="15"
			y2="14"
			stroke="currentColor"
			strokeWidth="2"
		/>
	</svg>
);
