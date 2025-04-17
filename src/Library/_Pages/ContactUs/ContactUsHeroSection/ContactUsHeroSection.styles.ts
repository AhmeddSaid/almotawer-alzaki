"use client";

import styled from "styled-components";
import { Breakpoints, Section } from "@/Library/common/Grids/Grids";

export const ContactUsHero = styled.section`
	background-color: var(--neutral--800, #1f3154);
	padding-top: 60px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding-top: 70px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding-top: 76px;
	}
`;

export const ContactUsHeroShell = styled(Section)`
	position: relative;
`;

export const ContactUsShapes = styled.div`
	position: absolute;
	display: flex;

	left: -50px;
	top: 25px;

	@media screen and (max-width: ${Breakpoints.lg}) {
		display: none;
	}

	.div1 {
		background-color: var(--secondary--color-3);
		border-top-right-radius: 1000px;
		border-bottom-right-radius: 1000px;
		height: 360px;
		width: 180px;
	}

	.div2 {
		background-color: var(--secondary--color-1);
		border-top-right-radius: 1000px;
		border-bottom-right-radius: 1000px;
		height: 360px;
		width: 180px;
	}
`;

export const CaptionContainer = styled.div`
	max-width: 640px;
	margin: 0 auto 64px;
	text-align: center;
	position: relative;
	z-index: 1;

	& :nth-child(1) {
		color: var(--neutral--100, #fff);
	}

	& :nth-child(2) {
		color: var(--neutral--300, #eff2f6);
		margin-block: 6px 16px;
	}
`;

export const ContactUsHeroCardContainer = styled.div`
	@media screen and (min-width: ${Breakpoints.lg}) {
		transform: translateY(10%);
	}
`;

export const ContactBackground = styled.div`
	background-color: var(--neutral--800);
	min-height: 90%;
	position: absolute;
	z-index: -1;
	top: 0;
	bottom: auto;
	left: 0;
	right: 0;
`;

export const SendUsMessageBG = styled.section`
	background-color: var(--neutral--800);
	//width: 100dvw;
	//height: 85dvh;
	height: 620px;
	padding: 50px;
	z-index: -1;
	margin-top: -650px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		margin-top: -600px;
	}

	@media screen and (min-width: ${Breakpoints.lg}) {
		margin-top: -400px;
	}

	overflow: hidden;

	section {
		overflow: hidden;
	}

	.container {
		@media screen and (max-width: ${Breakpoints.lg}) {
			display: none;
		}
		z-index: 4444;
		max-width: 570px;
		height: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		grid-auto-columns: 1fr;
		gap: 0 0;
		grid-auto-flow: row;
		grid-template-areas:
			"a1 a1 a2 a2"
			"a1 a1 a3 a4"
			"a5 a5 a6 a6"
			"a5 a5 a6 a6";
	}

	.a1 {
		grid-area: a1;

		background: var(--secondary--color-4);
		width: 285px;
		height: 285px;
		position: relative;

		div {
			width: 50%;
			height: 100%;
			border-top-left-radius: 10000px;
			border-bottom-left-radius: 10000px;
			background-color: var(--secondary--color-1);
			z-index: 555;
			position: absolute;
		}
	}

	.a2 {
		grid-area: a2;
		background-color: var(--secondary--color-1);
		border-top-left-radius: 10000px;
		border-top-right-radius: 10000px;
		width: 285px;
		height: 142.5px;
	}

	.a3 {
		grid-area: a3;
		border-bottom-left-radius: 100%;
		background-color: var(--secondary--color-2);
		width: 142.5px;
		height: 142.5px;
	}

	.a4 {
		grid-area: a4;
		width: 142.5px;
		height: 142.5px;
		background-image: linear-gradient(45deg, var(--secondary--color-4) 50%, transparent 50%);
	}

	.a5 {
		grid-area: a5;
		width: 285px;
		height: 285px;
		background-image: linear-gradient(45deg, var(--accent--primary-1) 50%, transparent 50%);

		padding: 35px;

		div {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background-color: var(--secondary--color-3);
		}
	}

	.a6 {
		grid-area: a6;
		width: 285px;
		height: 285px;
		position: relative;
		background-color: var(--secondary--color-1);

		div {
			width: 50%;
			height: 100%;
			border-top-right-radius: 10000px;
			border-bottom-right-radius: 10000px;
			background-color: var(--accent--primary-1);
			z-index: 555;
			position: absolute;
		}
	}
`;
