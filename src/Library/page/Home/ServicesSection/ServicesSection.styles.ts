"use client";
import Image from "next/image";

import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const ServicesSectionShell = styled.section`
	position: relative;
	padding-block: 135px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding-block: 160px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding-block: 170px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		padding-block: 180px;
	}

	& .ServiceButton div {
		width: 100%;
		//width: fit-content;
		margin-top: 28px;
		//display: none;

		@media screen and (min-width: ${Breakpoints.sm}) {
			width: fit-content;
			text-align: center;
		}
		@media screen and (min-width: ${Breakpoints.md}) {
			width: fit-content;
			text-align: center;
		}
		@media screen and (min-width: ${Breakpoints.lg}) {
			width: fit-content;
			text-align: center;
		}
	}
	.service-link {
		display: flex;
	}
`;

export const ServicesSectionCardShell = styled.div<{
	center?: boolean;
	isBig?: boolean;
	disableHover?: boolean;
}>`
	width: 96%;
	height: fit-content;
	transition: 300ms;
	cursor: ${({ disableHover }) => (disableHover ? "default" : "pointer")};
	position: relative;
	padding: ${({ isBig }) => (isBig ? "56px 24px 50px" : "53px 24px")};
	margin-top: 32px;
	background-color: ${({ center }) =>
		center ? "var(--neutral--800,#1f3154)" : "var(--neutral--200, #f7f8fc)"};
	border-radius: 24px;
	text-align: ${({ center }) => (center ? "center" : "")};

	&:hover {
		transform: ${({ disableHover }) => (disableHover ? "none" : "translateY(10px)")};
	}

	&:hover h3 {
		color: ${({ disableHover }) => (disableHover ? "#fff" : "#4187ff")};
	}
	&:hover .ProgressBar {
		background-color: ${({ disableHover }) => (disableHover ? "#fff" : "#4187ff")};
		transition: 300ms;
	}

	& .ProgressBar {
		width: 100%;
		max-width: 120px;
		transition: all 1s ease;
	}

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding: ${({ isBig }) => (isBig ? "67px 34px 60px" : "64px 34px")};
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding: ${({ isBig }) => (isBig ? "84px 45px 75px" : "77px 60px")};
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		padding: ${({ isBig }) => (isBig ? "105px 56px 94px" : "92px 40px")};
	}
`;

export const ServicesSectionCardTitle = styled.h3<{ center?: boolean; isBig?: boolean }>`
	//color: var(--neutral--800, #1f3154);
	color: ${({ center }) =>
		center ? " var(--neutral--100,#ffffff)" : "var(--neutral--800, #1f3154)"};
	font-size: 20px;
	font-weight: 700;
	line-height: 1.429em;
	margin-bottom: ${({ isBig }) => (isBig ? "16px" : "12px")};
	margin-top: 40px;
	transition: 300ms;

	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 22px;
		margin-top: 40px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 24px;
		margin-top: 48px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 28px;
		margin-top: 48px;
	}
`;

export const ServicesSectionCardSubTitle = styled.p<{ center?: boolean; isBig?: boolean }>`
	//color: var(--neutral--600, #6e7a91);
	color: ${({ center }) => (center ? " #dce1eb" : "var(--neutral--600, #6e7a91)")};
	font-size: 16px;
	font-weight: 500;
	line-height: 1.667em;

	margin-bottom: ${({ isBig }) => (isBig ? "64px" : "26px")};

	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 16px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 18 px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 18px;
	}
`;

export const ServicesSectionCardImage = styled(Image)<{ center?: boolean }>`
	margin: ${({ center }) => (center ? "auto" : "")};
`;

export const BlackLine = styled(ScrollAnimation)`
	height: 3px;
	width: 0;
	max-width: 120px;
	min-height: 3px;
	background-color: var(--neutral--800, #1f3154);
`;
export const Triangle = styled.div`
	position: absolute;
	background-image: linear-gradient(135deg, #ffc32a 50%, transparent 50%);
	width: 205px;
	height: 213px;
	bottom: 300px;
	left: 250px;
	z-index: -1;
`;
export const Triangle2 = styled.div`
	position: absolute;
	background-image: linear-gradient(225deg, #ffc32a 49%, #fff 1%, #ff5f55 50%);
	width: 205px;
	height: 213px;
	top: 560px;
	right: 260px;
	z-index: -1;
`;
