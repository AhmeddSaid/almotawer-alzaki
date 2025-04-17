"use client";
import styled from "styled-components";
import { Breakpoints, Col } from "@/Library/common/Grids/Grids";

export const OurNumbersSection = styled.section`
	padding-block: 135px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding-block: 194px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding-block: 223px;
	}
`;

export const OurNumbersHeaderContainer = styled.div`
	max-width: 381px;
	margin-bottom: 32px;
`;

export const OurNumbersSecondCol = styled(Col)`
	margin-top: 0;

	@media screen and (min-width: ${Breakpoints.lg}) {
		margin-top: -187px;
	}
`;
