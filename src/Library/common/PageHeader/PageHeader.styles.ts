"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const PageHeaderTitle = styled.p<{ light?: boolean }>`
	//color: var(--accent--primary-1, #4187ff);

	color: ${({ light }) =>
		light ? "var(--neutral--100,#fff); " : " var(--accent--primary-1, #4187ff)"};

	font-size: 16px;
	line-height: 1.111em;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	font-weight: 700;
	margin-bottom: 16px;

	@media screen and (max-width: ${Breakpoints.lg}) {
		text-align: center;
	}
	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 18px !important;
		//text-align: start;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 18px !important;
		//text-align: start;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 18px !important;
		//text-align: start;
	}
`;

export const PageHeaderSubtitle = styled.h2<{ light?: boolean; center?: boolean }>`
	//color: var(--neutral--800, #1f3154);

	color: ${({ light }) => (light ? "var(--neutral--100,#fff); " : "var(--neutral--800, #1f3154)")};

	font-weight: 700;
	line-height: 1.214em;
	font-size: 30px;
	text-align: center;

	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 36px !important;
		text-align: center;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 45px !important;
		text-align: center;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 56px !important;
		text-align: ${({ center }) => (center ? "center" : "start")};
	}
`;

export const PageHeaderParagraph = styled.p`
	color: var(--neutral--600, #6e7a91);
	font-family: Thicccboi, sans-serif;
	font-size: 16px;
	font-weight: 500;
	line-height: 1.667em;
	margin-bottom: 48px;
	margin-top: 24px;
	text-align: center;
	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 18px !important;
		text-align: start;
	}
`;
