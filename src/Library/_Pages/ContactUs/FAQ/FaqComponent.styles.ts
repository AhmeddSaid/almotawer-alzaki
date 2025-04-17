"use client";
import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Library/common/Grids/Grids";
import { NewHeading3 } from "@/Library/common/Typograhy/Typography";

export const FaqInnerContainer = styled(Flexbox)`
	gap: 20px;
	border-bottom: 1px solid var(--neutral--400, #dce1eb);
	cursor: pointer;
	justify-content: space-between;
	padding-block: 40px;
	transition: transform 0.3s;

	@media screen and (min-width: ${Breakpoints.md}) {
		padding-block: 50px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		padding-block: 60px;
	}

	&:hover {
		transform: translateX(6px);
	}
`;
export const QuestionContainer = styled.div``;
export const IconContainer = styled.span`
	width: 50px;
	height: 50px;
	min-height: 50px;
	min-width: 50px;
	box-shadow: 0 4px 4px 0 var(--general--shadow-02, rgb(20 20 43 / 8%));
	border: 1px solid var(--neutral--300, #eff2f6);
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	transition: all 0.3s ease;

	&.active {
		box-shadow: 0 4px 4px 0 var(--general--shadow-05);
		background-color: var(--accent--primary-1, #4187ff);
		transform: rotate(90deg);
		transform-style: preserve-3d;
		color: rgb(255, 255, 255);
		transition: all 0.3s ease;

		& svg path {
			stroke: #fff;
		}
	}

	@media screen and (max-width: ${Breakpoints.md}) {
		height: 40px;
		width: 40px;
		min-height: 40px;
		min-width: 40px;
	}
`;
export const Question = styled(NewHeading3)`
	color: var(--neutral--800);
	font-size: 1rem;
	font-weight: 700;
	line-height: 1.316em;

	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 30px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 38px;
	}
`;
export const Answer = styled.p<{ open: boolean }>`
	color: var(--neutral--600, #6e7a91);
	font-family: Thicccboi, sans-serif;
	font-size: 16px;
	font-weight: 500;
	line-height: 1.667em;
	margin-top: 8px;
	height: ${({ open }) => (open ? "100%" : "0")};
	overflow: hidden;
	transition: all 0.3s ease-in-out;
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 18px;
	}
`;
