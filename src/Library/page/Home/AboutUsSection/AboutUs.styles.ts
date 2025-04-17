"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const AboutUsSectionShell = styled.section`
	padding-block: 135px;
	background-color: var(--neutral--200, #f7f8fc);
	overflow: hidden;

	.AboutUSdiv {
		text-align: center;
		h2 {
			text-align: center;
		}
		p {
			text-align: center;
		}
	}

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding-block: 130px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding-block: 140px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		padding-block: 160px;
		.AboutUSdiv {
			text-align: start;
			h2 {
				text-align: start;
			}
			p {
				text-align: start;
			}
		}
	}

	& .AboutUsButton {
		flex-direction: column;
		@media screen and (min-width: ${Breakpoints.sm}) {
			flex-direction: row;
		}

		div {
			width: 100%;

			@media screen and (min-width: ${Breakpoints.sm}) {
				width: fit-content;
			}
		}

		.container {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr;
			grid-auto-columns: 1fr;
			gap: 0 0;
			grid-auto-flow: row;
			grid-template-areas:
				"b1 b1 b3 b3"
				"b1 b1 b5 b6"
				"b2 b2 b4 b4"
				"b2 b2 b4 b4";
		}
	}

	.b1 {
		grid-area: b1;
		width: 284px;
		height: 284px;

		background: white !important;
	}

	.b2 {
		grid-area: b2;
		width: 284px;
		height: 284px;
		background-image: linear-gradient(225deg, #fff 50%, #4187ff 50%);
	}

	.b4 {
		grid-area: b4;

		width: 284px;
		height: 284px;
		background: teal;
	}

	.b3 {
		grid-area: b3;
		width: 284px;
		height: 142px;
		background-color: #ffbfc7;
		border-top-left-radius: 10000px;
		border-top-right-radius: 10000px;
	}

	.b5 {
		grid-area: b5;
		background-color: #ffc32a;
		border-bottom-left-radius: 100%;
		width: 142px;
		height: 142px;
	}

	.b6 {
		grid-area: b6;
		width: 142px;
		height: 142px;
		background-image: linear-gradient(
			45deg,
			var(--secondary--color-4, #ff5f55) 50%,
			transparent 50%
		);
	}
`;
export const AboutUsBtn = styled.div`
	background: transparent;
	border: 2px solid var(--neutral--800);
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--neutral--800);
	transition: 300ms;
	padding: 1.125rem 1.5rem;
	height: 3.5rem;
	border-radius: 0.875rem;
	font-size: 1rem;
	cursor: pointer;

	&:hover {
		background-color: var(--neutral--800);
		color: #fff;
	}
`;
