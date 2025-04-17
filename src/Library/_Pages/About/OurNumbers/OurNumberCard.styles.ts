"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";
import { Display1, Display4 } from "@/Library/common/Typograhy/Typography";

export const OurNumberCardInner = styled.div`
	background-color: var(--neutral--200, #f7f8fc);
	border-radius: 24px;
	padding: 42px 24px;
	margin-bottom: 24px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding: 52px 34px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding: 65px 40px;
	}
	@media screen and (min-width: ${Breakpoints.xl}) {
		padding: 81px 48px;
	}
`;

export const OurNumberCardCaption = styled.p`
	color: var(--neutral--600, #6e7a91);
	font-family: Thicccboi, sans-serif;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.667em;
	margin-bottom: 43px;
	@media screen and (min-width: ${Breakpoints.sm}) {
		margin-bottom: 50px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		margin-bottom: 60px;
	}
`;

export const CardLineBottom = styled.div`
	height: 3px;
	width: 100%;
	max-width: 120px;
	min-height: 3px;
	background-color: var(--neutral--800, #1f3154);
`;

export const PlusColor = styled.span<{ plusColor: string }>`
	color: ${({ plusColor }) => {
		switch (plusColor) {
			case "yellow":
				return "var(--accent--primary-1,#ffc32a)";
			case "blue":
				return "var(--secondary--color-1,#4187ff)";
			case "green":
				return "var(--secondary--color-3,#77e36e)";
			case "red":
				return "var(--secondary--color-4,#ff5f55)";
			default:
				return "var(--accent--primary-1,#4187ff)";
		}
	}};
`;

export const OurNumberCardTitle = styled(Display1)`
	margin-bottom: 15px;
	@media screen and (min-width: ${Breakpoints.md}) {
		margin-bottom: 18px;
	}
`;
export const OurNumberCardHeader = styled(Display4)`
	margin-bottom: 10px;
`;
