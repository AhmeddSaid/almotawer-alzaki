import React from "react";

const RightArrow = ({ dir = true, color = "#fff" }: { dir?: boolean; color?: string }) => {
	return (
		<svg
			width="17px"
			height="17px"
			viewBox="0 0 24 24"
			strokeWidth="2.4"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			color={color}
			style={{ transform: dir ? "rotate(0deg)" : "rotate(180deg)" }}
		>
			<path
				d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
				stroke={color}
				strokeWidth="2.4"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	);
};

export default RightArrow;
