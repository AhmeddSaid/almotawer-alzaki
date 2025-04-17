"use client";
import styled, { css, DefaultTheme } from "styled-components";
import { HeadingType } from "./TypographyProps";
import { Breakpoints } from "@/Library/common/Grids/Grids";

const getColor = ({
	color = "black",
}: {
	theme: DefaultTheme;
	color?: "success" | "white" | "brand" | "black" | "secondary" | "danger" | "gray";
}): string => {
	switch (color) {
		case "white":
			return "#fff";
		case "success":
			return "var(--success)";
		case "brand":
			return "var(--main-color)";
		case "secondary":
			return "var(--secondary-black)";
		case "danger":
			return "var(--danger)";
		default:
			return "var(--primary-black)";
	}
};

const getWeight = ({ bold }: { bold?: boolean }): string => (bold ? "600" : "400");

const textAlign = ({ center }: { center?: boolean }): string => (center ? "center" : "");

const baseStyles = css<HeadingType>`
	color: ${getColor};
	text-align: ${textAlign};
`;

export const Heading1 = styled.h1<HeadingType>`
	font-size: 2.5rem;
	font-weight: 600;
	line-height: 100%;
	${baseStyles}
`;

export const Heading2 = styled.h2<HeadingType>`
	font-size: 2rem;
	font-weight: 600;
	line-height: 3rem;
	@media (max-width: 540px) {
		font-size: 2rem;
		line-height: 2.5rem;
	}
	${baseStyles}
`;

export const Heading3 = styled.h3<HeadingType>`
	font-size: 1.75rem;
	font-weight: 600;
	line-height: 1.5rem;
	${baseStyles}
`;

export const BigParagraph = styled.p<HeadingType>`
	font-size: 1.25rem;
	white-space: nowrap;
	font-weight: ${getWeight};
	line-height: 1.75rem;
	${baseStyles}
`;

export const Paragraph = styled.p<HeadingType>`
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: ${getWeight};
	${baseStyles}
`;

export const SmallParagraph = styled.p<HeadingType>`
	font-size: 0.75rem;
	margin-block: 0.5rem;
	line-height: 1.25rem;
	font-weight: ${getWeight};
	${baseStyles}
`;

export const LabelStyles = styled.label<{
	color?: "success" | "white" | "brand" | "black" | "secondary";
}>`
	display: inline-block;
	margin-bottom: 0.5rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: ${getColor};
	font-weight: 400;
	user-select: none;
`;

export const Text200 = styled.p<{ weight?: "md" | "semi" | "bold" }>`
	font-size: 16px;
	font-weight: ${({ weight }) => {
		switch (weight) {
			case "md":
				return "500";
			case "semi":
				return "600";
			case "bold":
				return "700";
			default:
				return "500";
		}
	}};
	line-height: 1.111em;
	letter-spacing: 0.06em;
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 18px;
	}
`;

export const Text300 = styled.p<{ weight?: "md" | "semi" | "bold" }>`
	font-size: 18px;
	line-height: 1.1em;
	font-weight: ${({ weight }) => {
		switch (weight) {
			case "md":
				return "500";
			case "semi":
				return "600";
			case "bold":
				return "700";
			default:
				return "500";
		}
	}};

	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 22px;
	}
`;
export const Text400 = styled.p<{ weight?: "md" | "semi" | "bold" }>`
	//font-size: 24px;

	font-size: 16px;
	font-weight: ${({ weight }) => {
		switch (weight) {
			case "md":
				return "500";
			case "semi":
				return "600";
			case "bold":
				return "700";
			default:
				return "500";
		}
	}};
	line-height: 1.083em;
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 20px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 22px;
	}
	@media screen and (min-width: ${Breakpoints.xl}) {
		font-size: 24px;
	}
`;

export const Display2 = styled.p`
	font-size: 30px;
	font-weight: 700;
	line-height: 1.214em;
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 36px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 45px;
	}
	@media screen and (min-width: ${Breakpoints.xl}) {
		font-size: 56px;
	}
`;
export const Display1 = styled.p`
	color: var(--neutral--800, #1f3154);
	font-size: 43px;
	font-weight: 700;
	line-height: 1.155em;
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 54px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 67px;
	}
	@media screen and (min-width: ${Breakpoints.xl}) {
		font-size: 84px;
	}
`;
export const Display4 = styled.p`
	color: var(--neutral--800, #1f3154);
	font-size: 20px;
	font-weight: 700;
	line-height: 1.429em;
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 22px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 24px;
	}
	@media screen and (min-width: ${Breakpoints.xl}) {
		font-size: 28px;
	}
`;

export const NewHeading3 = styled.h3`
	font-size: 26px;
	font-weight: 700;
	line-height: 1.316em;
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 30px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 34px;
	}
	@media screen and (min-width: ${Breakpoints.xl}) {
		font-size: 38px;
	}
`;
export const NewHeading4 = styled.h4`
	font-size: 18px;
	font-weight: 700;
	line-height: 1.273em;

	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 22px;

`;
