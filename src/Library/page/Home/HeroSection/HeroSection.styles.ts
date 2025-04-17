"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const HomeSectionShel = styled.section`
	background: var(--neutral--800, #1f3154);
	/* padding: 60px 0 160px 0; */
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100dvh;
	overflow: hidden;
	/* @media screen and (min-width: ${Breakpoints.md}) {
		padding-top: 80px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		padding-top: 100px;
	}

	@media screen and (min-width: ${Breakpoints.lg}) {
		padding-top: 130px;
	} */

	.HeroHomeSectionButton {
		flex-direction: column;

		& a,
		& a div {
			width: 100%;
		}

		@media screen and (min-width: ${Breakpoints.sm}) {
			flex-direction: row;
			& a,
			& a div {
				width: unset;
			}
		}
	}

	& .container {
		width: 0;
		@media screen and (max-width: ${Breakpoints.sm}) {
			scale: 0.5;
		}

		& .a1 {
			border-top-left-radius: 10000px;
			border-bottom-left-radius: 10000px;
			width: 100%;
			height: 100%;
			min-width: 114px;
			min-height: 228px;
			background: var(--secondary--color-2, #ffbfc7);
		}

		& .a2 {
			width: 100%;
			height: 100%;
			min-width: 114px;
			min-height: 228px;
			background: var(--accent--primary-1, #4187ff);
		}

		& .a3 {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			min-width: 228px;
			min-height: 228px;
			background: #fff;
		}

		& .a4 {
			width: 100%;
			height: 100%;
			background-image: linear-gradient(
				45deg,
				var(--secondary--color-4, #ff5f55) 50%,
				transparent 50%
			);
			min-width: 228px;
			min-height: 228px;
		}

		& .a5 {
			width: 100%;
			height: 100%;
			border-radius: 1000000px;
			min-width: 228px;
			min-height: 455px;
			background-color: #ffc32a;
		}

		& .a6 {
			width: 100%;
			height: 100%;
			min-width: 228px;
			min-height: 228px;
			background-image: linear-gradient(
				225deg,
				var(--secondary--color-1, #ffc32a) 50%,
				var(--secondary--color-4, #ff5f55) 50%
			);
		}

		& .a9 {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			max-width: 228px;
			max-height: 228px;
			background-color: #ffc32a;
		}

		& .a7 {
			width: 100%;
			height: 100%;
			border-top-left-radius: 10000px;
			border-top-right-radius: 10000px;
			min-width: 228px;
			min-height: 114px;
			background-color: var(--secondary--color-3, #77e36e);
		}

		& .a8 {
			width: 100%;
			height: 100%;
			border-top-left-radius: 10000px;
			border-top-right-radius: 10000px;
			min-width: 228px;
			min-height: 114px;
			background-color: #ffc32a;
		}

		& .a10 {
			width: 100%;
			height: 100%;

			min-width: 228px;
			min-height: 114px;
			background-color: #fff;
		}

		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-auto-columns: 1fr;
		gap: 0 0;
		grid-auto-flow: row;
		grid-template-areas:
			"a1 a2 a3 a3 a4 a4"
			"a1 a2 a3 a3 a4 a4"
			"a5 a5 a6 a6 a9 a9"
			"a5 a5 a6 a6 a9 a9"
			"a5 a5 a7 a7 a10 a10"
			"a5 a5 a8 a8 a10 a10";
	}

	.a1 {
		grid-area: a1;
	}

	.a2 {
		grid-area: a2;
	}

	.a3 {
		grid-area: a3;
	}

	.a4 {
		grid-area: a4;
	}

	.a5 {
		grid-area: a5;
	}

	.a6 {
		grid-area: a6;
	}

	.a7 {
		grid-area: a7;
	}

	.a8 {
		grid-area: a8;
	}

	.a9 {
		grid-area: a9;
	}

	.a10 {
		grid-area: a10;
	}

	.PaddingHeroSection {
		padding-block: 76px;

		@media screen and (min-width: ${Breakpoints.sm}) {
			padding-block: 90px;
		}
		@media screen and (min-width: ${Breakpoints.md}) {
			padding-block: 110px;
		}
		@media screen and (min-width: ${Breakpoints.lg}) {
			padding-block: 130px;
		}
	}
`;

export const ContentHolder = styled.div`
	width: 40%;
`;
export const HeroSectionContainer = styled.div`
	display: flex;
	gap: 3rem;
	align-items: center;
	justify-content: center;
	width: 75%;
	margin: auto;
`;
export const HeroImageHolder = styled.div`
	width: 680px;
	height: 680px;
	overflow: hidden;
	/* border: 16px solid; */
	/* border-image: linear-gradient(45deg, transparent, var(--accent--primary-1), transparent) 1; */
	border-radius: 12px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		pointer-events: none;
	}
`;

export const HeroHomeSectionHeader = styled.h1`
	font-size: 28px;
	text-align: center;
	font-weight: 700;
	line-height: 1.155em;
	margin-bottom: 24px;
	color: white;

	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 54px !important;
		text-align: center;
		width: unset;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 67px !important;
		text-align: center;
		width: unset;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 64px !important;
		text-align: start;
		max-width: 800px;
		line-height: 1.3;
	}
`;

export const HeroHomeSectionSubHeader = styled.p`
	font-size: 20px;
	line-height: 1.583em;
	margin-bottom: 40px;
	color: var(--neutral--400, #dce1eb);
	text-align: center;
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 22px !important;
		text-align: center;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 24px !important;
		text-align: start;
	}
`;

export const TrustedByTitle = styled.p`
	font-weight: 700;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	line-height: 1.111em;
	font-size: 18px;
	color: var(--neutral--100, #fff);
	min-width: 250px;
	text-align: center;
	padding-bottom: 40px;

	@media screen and (min-width: ${Breakpoints.md}) {
		text-align: start;
		padding-bottom:;
	}
`;
