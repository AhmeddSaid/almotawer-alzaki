"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";
export const FaqSection = styled.section`
	padding-block: 135px;
	background-color: var(--neutral--200, #f7f8fc);

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding-block: 194px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		padding-block: 233px;
	}
`;

export const FaqHeaderContainer = styled.div`
	max-width: 807px;
	margin: 0 auto 48px;
`;

export const FaqContainer = styled.ul`
	border: 1px solid var(--neutral--300, #eff2f6);
	background-color: var(--neutral--100, white);
	box-shadow: 0 2px 12px 0 var(--general--shadow-02, rgb(20 20 43 / 8%));
	padding: 58px 24px;
	border-radius: 24px;
	overflow: hidden;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding: 80px 60px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding: 108px 106px;
	}
`;
