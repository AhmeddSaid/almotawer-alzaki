"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const SendMessageHeaderContainer = styled.div`
	margin-bottom: 36px;
`;
export const SendMessageSection = styled.section`
	//padding-top: calc(187px + 65px);
	//padding-bottom: 187px;

	& #form {
		position: relative;
		z-index: 666;
	}

	padding-block: 100px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding-block: 156px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		padding-block: 187px;
	}
`;

export const FormContainer = styled.div`
	padding: 59px 34px 60px;
	background-color: var(--neutral--200, #f7f8fc);
	border-radius: 24px;
	margin-top: 60px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding: 69px 52px 72px;
	}
`;
