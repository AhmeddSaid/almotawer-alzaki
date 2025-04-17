"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const ArrowsProcessShell = styled.div`
	//position: relative;
	margin-top: 50px;
`;

export const RightArrowProcessStyles = styled.div`
	position: absolute;
	width: 88px;
	height: 88px;
	top: 90%;
	right: 5%;
	//transform: translateX(75%);
	@media screen and (min-width: ${Breakpoints.lg}) {
		top: 50%;
		right: 5%;
	}
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	border: 1px solid var(--accent--primary-1, #4187ff);
	background-color: var(--accent--primary-1, #4187ff);
	cursor: pointer;
`;
export const LeftArrowProcessStyles = styled.div`
	position: absolute;
	width: 88px;
	height: 88px;
	top: 90%;
	left: 5%;
	//transform: translateX(-75%);
	@media screen and (min-width: ${Breakpoints.lg}) {
		top: 50%;
		left: 5%;
	}
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 12px;

	box-shadow: 0 2px 12px 0 rgba(20, 20, 43, 0.08);
	cursor: pointer;
`;
