"use client";
import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Library/common/Grids/Grids";

export const ServicesHeroSectionShell = styled.section`
	padding-block: 104px 350px;
	background-color: var(--neutral--800, #1f3154);
	overflow: hidden;
`;

export const ServicesHeroSectionHeader = styled.div`
	font-size: 80px;
	font-weight: 700;
	line-height: 1.155em;
	text-align: center;
	max-width: 910px;
	margin-bottom: 24px;
	color: var(--neutral--100, white);
	position: relative;

	@media screen and (max-width: ${Breakpoints.md}) {
		margin: 0.67em 0;
		margin-top: 0;
		margin-bottom: 10px;
		font-weight: 700;
		line-height: 1.155em;
		font-size: 43px;
		color: var(--neutral--100);
		transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
		transform-style: preserve-3d;
		opacity: 1;
		//
		//.shapes {
		//	display: none;
		//}
	}

	@media screen and (max-width: ${Breakpoints.lg}) {
		.shapes {
			display: none;
		}
	}
`;

export const ServicesHeroSectionSubHeading = styled.p`
	font-size: 18px;
	font-weight: 500;
	line-height: 1.667em;
	text-align: center;
	max-width: 615px;
	margin-inline: auto;
	margin-bottom: 16px;
	color: var(--neutral--400, #dce1eb);
`;

export const ServicesCardShell = styled.div`
	padding: 70px 40px 87px;
	max-width: 600px;
	background-color: var(--neutral--200, #f7f8fc);
	margin-top: 72px;
	border-radius: 24px;
	transition: all 0.2s ease-in;
	position: relative;
	z-index: 3;

	&:hover {
		transform: translateY(10px);
		transition: all 0.2s ease-in;
	}

	&:hover .ServicesCardTitle {
		color: #4187ff;
	}

	@media screen and (max-width: 768px) {
		padding: 25px 40px;
	}
`;

export const ServicesCardTitle = styled.div`
	margin-block: 56px 8px;
	font-size: 38px;
	font-weight: 700;
	line-height: 1.263em;
	color: rgb(31, 49, 84);
	cursor: pointer;

	@media screen and (max-width: 768px) {
		font-size: 25px;
		margin-block: 16px 8px;
	}
`;

export const ServicesCardSubTitle = styled.div`
	font-size: 18px;
	font-weight: 500;
	line-height: 1.667em;
	color: var(--neutral--700, #384763);

	margin-bottom: 32px;
`;

export const CheckDiv = styled(Flexbox)`
	min-width: 220px;

	p {
		color: var(--neutral--800, #1f3154);
		line-height: 1.1em;
		font-size: 20px;
		font-weight: 700;
	}
`;

export const ServicesHeroCardSection = styled.section`
	margin-top: -270px;
	margin-bottom: 270px;
	.service-link {
		display: unset;
	}
`;

export const Circle = styled.div<{ color: string; size?: string }>`
	${({ size }) => (size ? `height: ${size}; width: ${size};` : `height: 60px; width: 60px;`)}

	position: absolute;
	border-radius: 50%;
	background-color: ${({ color }) => color};
`;

export const Rec = styled.div<{ color: string; width: string; height: string }>`
	position: absolute;
	background-color: ${({ color }) => color};
	width: ${({ width }) => width};
	height: ${({ height }) => height};
`;
