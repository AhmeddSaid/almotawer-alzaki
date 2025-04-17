"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const NotFoundHeroSection = styled.section`
	padding-top: 160px;
	padding-bottom: 243px;
	text-align: center;
`;
export const NotFoundHeading = styled.p`
	color: var(--neutral--400, #dce1eb);
	margin-bottom: -108px;
	font-size: 310px;
	font-weight: 700;
	line-height: 1em;

	@media screen and (max-width: ${Breakpoints.md}) {
		font-size: 20vw;
		margin-bottom: 0;
	}
`;

export const NotFoundSectionHeaderContainer = styled.div`
	max-width: 800px;
	margin: 0 auto 30px;
`;
