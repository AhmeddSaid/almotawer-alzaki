"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const AboutThisServiceShell = styled.section`
	padding-top: 233px;
	padding-bottom: 233px;
	background-color: var(--neutral--200, #f7f8fc);
	.servicesHeader {
	}
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, 1fr);
		grid-template-rows: 1fr 1fr 1fr 1fr;
		grid-auto-columns: 1fr;
		gap: 0 0;
		grid-auto-flow: row;
		grid-template-areas:
			"s1 s1 s2 s4"
			"s1 s1 s3 s4"
			"s5 s5 s6 s6"
			"s5 s5 s6 s6";

		@media screen and (max-width: ${Breakpoints.md}) {
			transform: scale(0.5);
		}

		@media screen and (max-width: ${Breakpoints.md}) {
			transform: scale(0.5);
		}
	}

	.s1 {
		grid-area: s1;
		width: 284px;
		height: 284px;
		max-width: 284px;
		max-height: 284px;
		border-radius: 50%;
		background: teal;

		@media screen and (max-width: ${Breakpoints.sm}) {
			width: 190px;
			height: 190px;
			max-width: 190px;
			max-height: 190px;
		}
	}

	.s2 {
		grid-area: s2;
		width: 142px;
		height: 142px;
		max-width: 142px;
		max-height: 142px;
		border-top-left-radius: 100%;
		background-color: var(--secondary--color-2, #ffbfc7);

		@media screen and (max-width: ${Breakpoints.sm}) {
			width: 95px;
			height: 95px;
			max-width: 95px;
			max-height: 95px;
		}
	}

	.s3 {
		grid-area: s3;
		width: 142px;
		height: 142px;
		max-width: 142px;
		max-height: 142px;
		border-bottom-left-radius: 100%;
		background-color: var(--secondary--color-2, #ffc32a);
		@media screen and (max-width: ${Breakpoints.sm}) {
			width: 95px;
			height: 95px;
			max-width: 95px;
			max-height: 95px;
		}
	}

	.s4 {
		grid-area: s4;
		width: 142px;
		height: 284px;
		max-width: 142px;
		max-height: 284px;
		background-color: var(--secondary--color-4, #ff5f55);

		@media screen and (max-width: ${Breakpoints.sm}) {
			width: 95px;
			height: 190px;
			max-width: 95px;
			max-height: 190px;
		}
	}

	.s5 {
		grid-area: s5;
		width: 284px;
		height: 284px;
		max-width: 284px;
		max-height: 284px;
		background-image: linear-gradient(
			225deg,
			var(--accent--primary-1, #4187ff) 50%,
			transparent 50%
		);

		@media screen and (max-width: ${Breakpoints.sm}) {
			width: 190px;
			height: 190px;
			max-width: 190px;
			max-height: 190px;
		}
	}

	.s6 {
		grid-area: s6;
		width: 284px;
		height: 284px;
		max-width: 284px;
		max-height: 284px;
		border-radius: 50%;
		background: teal;

		@media screen and (max-width: ${Breakpoints.sm}) {
			width: 190px;
			height: 190px;
			max-width: 190px;
			max-height: 190px;
		}
	}
`;
