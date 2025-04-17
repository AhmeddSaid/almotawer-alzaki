"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const ArrowsShell = styled.div`
	position: relative;
	margin-top: 50px;
`;

export const RightArrowStyles = styled.div`
	position: absolute;
	width: 88px;
	height: 88px;
	top: 100%;
	left: 40%;
	transform: translateX(75%);
	@media screen and (min-width: ${Breakpoints.sm}) {
		top: 100%;
		left: 50%;
	}
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	border: 1px solid var(--accent--primary-1, #4187ff);
	background-color: var(--accent--primary-1, #4187ff);
	cursor: pointer;
`;
export const LeftArrowStyles = styled.div`
	position: absolute;
	width: 88px;
	height: 88px;
	top: 100%;
	left: 40%;
	transform: translateX(-75%);

	@media screen and (min-width: ${Breakpoints.sm}) {
		top: 100%;
		left: 50%;
	}

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 12px;

	box-shadow: 0 2px 12px 0 rgba(20, 20, 43, 0.08);
	cursor: pointer;
`;
