"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";
import { Display2, Text200 } from "@/Library/common/Typograhy/Typography";

export const HeaderCaption = styled.p<{ darkBg?: boolean }>`
	color: ${({ darkBg }) =>
		darkBg ? "var(--neutral--400,#dce1eb)" : "var(--neutral--600,#6e7a91)"};
	font-family: Thicccboi, sans-serif;
	font-size: 16px;
	font-weight: 500;
	line-height: 1.667em;

	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 18px;
	}
`;

export const SectionHeaderContainer = styled.div<{ textAline?: "start" | "end" | "center" }>`
	text-align: ${({ textAline }) => {
		switch (textAline) {
			case "start":
				return "start";
			case "center":
				return "center";
			case "end":
				return "end";
			default:
				return "start";
		}
	}};
`;

export const SectionHeaderTitle = styled(Text200)`
	margin-bottom: 8px;
	color: var(--accent--primary-1, #4187ff);
	text-transform: uppercase;
	@media screen and (min-width: ${Breakpoints.lg}) {
		margin-bottom: 16px;
	}
`;

export const SectionHeaderHeading = styled(Display2)<{ darkBg?: boolean }>`
	margin-bottom: 0;
	color: ${({ darkBg }) => (darkBg ? "#fff" : "var(--neutral--800, #1f3154)")};
	@media screen and (min-width: ${Breakpoints.xl}) {
		margin-bottom: 48px;
	}
	@media screen and (min-width: ${Breakpoints.sm}) {
		margin-bottom: 40px;
	}
`;
