"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const GetInTouchShell = styled.section`
	background-color: var(--neutral--800, #1f3154);
	position: relative;

	padding-block: 135px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding-block: 162px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding-block: 194px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		padding-block: 233px;
	}
	.get-in-touch-container {
		width: 80%;
		margin: auto;

		img {
			border-radius: 1rem;
		}
	}
	.GetInTouchdiv {
		p {
			text-align: center;
			@media screen and (min-width: ${Breakpoints.lg}) {
				text-align: start;
			}
		}
	}

	& .GetInTouchButton {
		margin-top: 40px;
		@media screen and (min-width: ${Breakpoints.sm}) {
			text-align: center;
			//margin-top: 40px;
		}
		@media screen and (min-width: ${Breakpoints.lg}) {
			text-align: start;
			//margin-top: 40px;
		}
	}

	& .GetInTouchButton a {
		width: 100%;
		//margin-top: 48px;
		text-align: center;
		margin-inline: auto;
		@media screen and (min-width: ${Breakpoints.md}) {
			width: fit-content;
			text-align: start;
			//margin-top: 0;
		}
		div {
			width: 100%;
			//margin-top: 40px;

			@media screen and (min-width: ${Breakpoints.sm}) {
				width: fit-content;
				text-align: center;
				margin-top: 0;
			}
			@media screen and (min-width: ${Breakpoints.md}) {
				width: fit-content;
				text-align: start;
				margin-top: 0;
			}
		}

		@media screen and (min-width: ${Breakpoints.sm}) {
			width: fit-content;
		}
	}

	.container {
		display: none;

		@media screen and (min-width: ${Breakpoints.sm}) {
			display: grid;
		}
		position: absolute;
		right: 10%;
		top: 0;

		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		grid-auto-columns: 1fr;
		gap: 0 0;
		grid-auto-flow: row;
		grid-template-areas:
			"c1 c1 c4 c5"
			"c2 c2 c4 c5"
			"c3 c3 c6 c6"
			"c3 c3 c6 c6";
	}

	.c1 {
		grid-area: c1;
		width: 404px;
		height: 206px;
		border-top-left-radius: 10000px;
		border-top-right-radius: 10000px;
		background-color: var(--secondary--color-3, #77e36e);
	}

	.c2 {
		grid-area: c2;
		width: 404px;
		height: 206px;
		border-top-left-radius: 10000px;
		border-top-right-radius: 10000px;
		background-color: #ffc32a;
	}

	.c3 {
		grid-area: c3;

		width: 404px;
		height: 404px;
		background-image: linear-gradient(
			45deg,
			var(--accent--primary-1, #4187ff) 50%,
			transparent 50%
		);
	}

	.c4 {
		grid-area: c4;
		height: 404px;
		width: 206px;
		border-top-left-radius: 10000px;
		background-color: #ffbfc7;
		border-bottom-left-radius: 10000px;
	}

	.c5 {
		grid-area: c5;
		height: 404px;
		width: 206px;
		background-color: #4187ff;
	}

	.c6 {
		grid-area: c6;

		height: 404px;
		width: 404px;
		background-image: linear-gradient(225deg, var(--secondary--color-1, #ffc32a) 50%, #ff5f55 50%);
	}
`;
