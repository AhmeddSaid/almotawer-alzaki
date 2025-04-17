"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const OurProcessSectionShell = styled.section`
	padding-block: 135px;
	position: relative;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding-block: 160px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding-block: 170px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		padding-block: 180px;
		padding-bottom: 233px;
	}

	& .PageHeaderContainer {
		max-width: 685px;
		text-align: center;
		margin: auto;
	}
`;

export const OurProcessCardShell = styled.div`
	background-color: #f7f8fc;
	border-radius: 24px;
	margin-top: 40px;

	margin-inline: auto;
	padding: 40px 34px 60px;
	max-width: 1000px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding: 40px 34px 60px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding: 79px 49px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		padding: 79px 49px;
	}

	& .OurProcessCardImage {
		border-radius: 20px;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
		}
	}

	& .indexDot {
		color: #4187ff;
		font-size: 43px;
		font-weight: 700;
		line-height: 1.155em;
		border-radius: 50%;
		overflow: hidden;

		@media screen and (min-width: ${Breakpoints.sm}) {
			font-size: 84px;
			position: static;
		}

		position: absolute;
		bottom: 25px;
		left: 50px;
	}

	& .relativeDiv {
		position: relative;
	}
`;

export const OurProcessCardIndex = styled.span`
	color: var(--neutral--800, #1f3154);
	font-size: 43px;
	font-weight: 700;
	line-height: 1.155em;
	position: relative;
	margin-bottom: 16px;
	margin-top: 50px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 54px;
		margin-top: 50px;
		margin-bottom: 20px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 67px;
		margin-top: 50px;
		margin-bottom: 24px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 84px;
		margin-top: 0;
		margin-bottom: 24px;
	}
`;

export const OurProcessCardH3 = styled.h3`
	color: var(--neutral--800, #1f3154);
	font-size: 25px;
	font-weight: 700;
	line-height: 1.263em;
	margin-bottom: 8px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 30px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 34px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 38px;
	}
`;

export const OurProcessCardp = styled.p`
	color: var(--neutral--600, #6e7a91);
	font-family: Thicccboi, sans-serif;
	font-size: 16px;
	font-weight: 500;
	line-height: 1.667em;

	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 16px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 18px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 18px;
	}
`;

export const OurProcessSectionButton = styled.div`
	justify-content: center;
	margin-top: 56px;
	display: none;

	@media screen and (min-width: ${Breakpoints.sm}) {
		display: flex;
	}
`;
