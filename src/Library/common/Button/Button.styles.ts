"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const ButtonShell = styled.div<{
	size?: string;
	Bgcolor?: string;
	weight?: boolean;
	fullWidth?: boolean;
	width?: string;
}>`
	@media screen and (min-width: 0) {
		padding: 18px 24px;
	}
	// @media screen and (min-width: ${Breakpoints.md}) {
	// 	padding: 30px;
	// }

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	//padding: 18px 24px;
	font-weight: ${({ weight }) => (weight ? "700" : "")};
	padding: ${({ size }) => {
		switch (size) {
			case "large":
				return " 30px 56px";
			case "med":
				return " 30px 38px";
			case "small":
				return "18px 24px";

			default:
				return "18px 24px";
		}
	}};

	&:hover svg {
		transform: translateX(6px);
	}

	svg {
		margin-inline-start: 6px;
		transition: all 0.3s ease-in-out;
	}

	width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};

	@media screen and (min-width: ${Breakpoints.lg}) {
		width: ${({ width }) => width ?? ""} !important;
	}

	font-size: 16px;
	line-height: 1.125em;
	//border: 1px solid var(--accent--primary-1, #4187ff);
	//background-color: var(--accent--primary-1, #4187ff);
	border: 1px solid
		${({ Bgcolor }) => {
			switch (Bgcolor) {
				case "primary":
					return "var(--accent--primary-1, #4187ff)";
				case "secondary":
					return " white";

				default:
					return "var(--accent--primary-1, #4187ff)";
			}
		}};
	background: ${({ Bgcolor }) => {
		switch (Bgcolor) {
			case "primary":
				return "var(--accent--primary-1, #4187ff)";
			case "secondary":
				return " transparent";

			default:
				return "var(--accent--primary-1, #4187ff)";
		}
	}};
	color: var(--neutral--100, #ffff);
	text-align: center;
	transform-style: preserve-3d;
	border-radius: 14px;

	transition:
		transform 0.3s,
		border-color 0.3s,
		background-color 0.3s,
		color 0.3s;

	&:hover {
		//border-color: var(--secondary--color-4, #ff5f55);

		color: ${({ Bgcolor }) => {
			switch (Bgcolor) {
				case "primary":
					return "";
				case "secondary":
					return "var(--neutral--800,#1f3154)";

				default:
					return "";
			}
		}};

		border-color: ${({ Bgcolor }) => {
			switch (Bgcolor) {
				case "primary":
					return " var(--secondary--color-4, #ff5f55)";
				case "secondary":
					return "white";

				default:
					return " var(--secondary--color-4, #ff5f55)";
			}
		}};

		background: ${({ Bgcolor }) => {
			switch (Bgcolor) {
				case "primary":
					return "var(--secondary--color-4, #ff5f55)";
				case "secondary":
					return "white";

				default:
					return "var(--secondary--color-4, #ff5f55)";
			}
		}};
		transition:
			transform 0.3s,
			border-color 0.3s,
			background-color 0.3s,
			color 0.3s;
		transform: scale3d(0.98, 0.98, 1.01);
	}
`;
