"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const OurMissionSection = styled.section`
	padding-bottom: 233px;
	background-color: var(--neutral--200, #f7f8fc);

	padding-block: 135px;
	overflow: hidden;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding-block: 194px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding-block: 223px;
	}

	& .container {
		display: grid;
		grid-template-columns: 1fr 1fr 2fr 4fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		gap: 20px 20px;
		grid-auto-flow: row;
		grid-template-areas:
			"a1 a1 a1 a3"
			"a1 a1 a1 a3"
			"a2 a2 a2 a3"
			"a2 a2 a2 a3"
			"a2 a2 a2 a3"
			". . . a4"
			". . . a4"
			". . . a4";
		@media screen and (min-width: ${Breakpoints.md}) {
			gap: 40px 40px;
		}

		& .a1 {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;
			gap: 0 0;
			grid-auto-flow: row;
			grid-template-areas:
				"b1 b2 b3 b3"
				"b1 b2 b3 b3"
				"b1 b2 b3 b3";
			grid-area: a1;

			margin-left: -20%;

			& .b1 {
				grid-area: b1;
				border-top-right-radius: 1000px;
				border-bottom-right-radius: 1000px;
				width: 100%;
				height: 100%;
				background-color: var(--secondary--color-2);
			}

			& .b2 {
				grid-area: b2;
				border-top-right-radius: 1000px;
				border-bottom-right-radius: 1000px;
				width: 100%;
				height: 100%;
				background-color: var(--secondary--color-3);
			}

			& .b3 {
				grid-area: b3;
				border-radius: 50%;
				overflow: hidden;
			}
		}

		& .a2 {
			grid-area: a2;
			position: relative;

			& > div {
				width: 71%;
				margin-bottom: -35.5%;
				margin-left: auto;
				margin-right: auto;
				padding-top: 71%;
				top: auto;
				bottom: 0;
				left: 0;
				right: 0;
				position: absolute;
			}
		}

		& .a3 {
			grid-area: a3;
			margin-right: -14%;
			position: relative;

			img {
				position: relative;
				z-index: 1;
			}

			& > div {
				width: 65%;
				margin-top: -54%;
				margin-left: auto;
				margin-right: 8%;
				padding-top: 65%;
				top: 0;
				bottom: auto;
				left: 0;
				right: 0;
				position: absolute;
			}
		}

		& .a4 {
			grid-area: a4;
			margin-right: -14%;
			position: relative;

			&:after {
				content: "";
				background-image: linear-gradient(
					45deg,
					var(--secondary--color-1, #ffc32a) 50%,
					transparent 50%
				);
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				z-index: 100;
			}
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const ShapeContainerInner = styled.div`
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	position: absolute;
`;

export const OurMissionHeaderContainer = styled.div`
	margin-bottom: 48px;

	& div > p {
		margin-bottom: 40px;

		@media screen and (max-width: ${Breakpoints.md}) {
			margin-bottom: 20px;
		}
	}

	@media screen and (min-width: ${Breakpoints.md}) {
		max-width: 60%;
	}
`;

export const HalfCircle = styled.div<{ flip?: boolean; color: string }>`
	border-top-left-radius: 10000px;
	border-top-right-radius: 10000px;
	background: ${({ color }) => color};
	width: 100%;
	height: 50%;
	transform: rotateX(${({ flip }) => flip && "180deg"});
`;
export const ColoredDiv2 = styled.div`
	border-top-left-radius: 10000px;
	border-top-right-radius: 10000px;
	background: #ffc32a;
	width: 100%;
	height: 50%;
`;

export const ShapeContainerInner2 = styled.div`
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	position: absolute;
`;
