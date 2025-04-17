"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const SingleServiceShell = styled.section`
	background-color: var(--neutral--800, #1f3154);
	text-align: center;
	padding-top: 116px;
	padding-bottom: 200px;
	margin-bottom: 18%;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding-bottom: 400px;
	}

	.buttonShell {
		flex-direction: column;

		div {
			width: 100%;
		}

		@media screen and (min-width: ${Breakpoints.sm}) {
			flex-direction: row;
			div {
				width: fit-content;
			}
		}
	}
`;

export const SingleServiceTitle = styled.p`
	color: var(--accent--primary-1, #4187ff);
	font-size: 24px;
	line-height: 1.083em;
	font-weight: 700;
	letter-spacing: 0.06em;
	text-transform: uppercase;

	@media screen and (max-width: 768px) {
		font-size: 16px;
	}
`;

export const SingleServiceHeading = styled.p`
	font-size: 84px;
	font-weight: 700;
	line-height: 1.155em;
	margin-bottom: 14px;
	margin-top: 10px;
	color: var(--neutral--100, #fff);

	@media screen and (max-width: 768px) {
		text-align: center;
		font-weight: 700;
		font-size: 43px;
		line-height: 1.3;
	}
`;

export const SingleServiceSubHeading = styled.p`
	font-size: 18px;
	font-weight: 500;
	line-height: 1.667em;
	margin-bottom: 40px;
	text-align: center;
	margin-inline: auto;
	color: var(--neutral--400, #dce1eb);
	max-width: 700px;
`;

export const SingleServiceColorShapesShell = styled.section`
	margin-top: -135px;
	overflow: hidden;

	@media screen and (min-width: ${Breakpoints.sm}) {
		margin-top: -530px;
	}

	@media screen and (max-width: ${Breakpoints.sm}) {
		overflow: unset;
	}
	.border50 {
		border-radius: 50%;
		overflow: hidden;
	}

	.container {
		max-width: 1500px;
		display: none;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr;
		grid-auto-columns: 1fr;
		gap: 0 0;
		grid-auto-flow: row;
		grid-template-areas: "x1 x1 x2 x3 x4 x4";
		margin: auto;
		@media screen and (min-width: ${Breakpoints.sm}) {
			display: grid;
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.x1 {
		grid-area: x1;
		width: 100%;
		height: 100%;
		max-width: 533px;
		max-height: 551px;
		background: teal;
	}

	.x2 {
		grid-area: x2;
		width: 100%;
		height: 100%;
		max-width: 266px;
		max-height: 551px;
		border-top-right-radius: 1000px;
		border-bottom-right-radius: 1000px;
		background-color: var(--secondary--color-4, #ff5f55);
	}

	.x3 {
		grid-area: x3;
		width: 100%;
		height: 100%;
		max-width: 266px;
		max-height: 551px;
		border-top-right-radius: 1000px;
		border-bottom-right-radius: 1000px;
		background-color: var(--secondary--color-1, #ffc32a);
	}

	.x4 {
		grid-area: x4;
		width: 532px;
		height: 532px;
		border-radius: 50%;
		overflow: hidden;
	}

	.container2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-auto-columns: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			"a1 a2"
			"a3 a4";
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

	.MobileShapes {
		@media screen and (min-width: ${Breakpoints.sm}) {
			display: none;
		}
	}
`;
