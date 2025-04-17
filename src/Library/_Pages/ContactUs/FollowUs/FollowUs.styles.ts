"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const FollowUsSection = styled.section`
	padding-block: 135px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 194px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 233px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 280px;
	}
`;
export const FollowUsHeaderContainer = styled.div`
	max-width: 670px;
	margin: 0 auto 50px;
`;
