"use client";
import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";
import { NewHeading3 } from "@/Library/common/Typograhy/Typography";

export const OurTeamCardInner = styled.div`
	text-align: center;
	&:hover img {
		transform: scale(1.05);
	}
	img {
		width: 100%;
		transition: all 0.4s ease-in-out;
	}
	&:hover h3 {
		color: var(--accent--primary-1, #4187ff);
	}

	@media screen and (min-width: ${Breakpoints.lg}) {
		text-align: start;
	}
`;
export const OurTeamCardHeader = styled(NewHeading3)`
	color: var(--neutral--800, #1f3154);
	margin-top: 40px;
	transition: all 0.3s ease-in-out;
`;

export const OurTeamCardCaption = styled.p`
	font-size: 16px;
	font-weight: 500;
	line-height: 1.667em;
	color: var(--neutral--600, #6e7a91);
	margin-block: 4px 28px;
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 18px;
	}
`;

export const IconContainer = styled.div`
	display: flex;
	column-gap: 16px;
	justify-content: center;
	@media screen and (min-width: ${Breakpoints.lg}) {
		justify-content: start;
	}
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 36px;
		height: 36px;
		background-color: var(--neutral--800, #1f3154);
		border-radius: 50%;
		transition: all 0.3s ease-in-out;

		svg {
			fill: var(--neutral--100, #fff);
		}
	}
`;

export const OurTeamCardImage = styled.div`
	position: relative;
	border-radius: 24px;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	span {
		text-transform: uppercase;
		position: absolute;
		top: 19px;
		right: 18px;
		border: 1px solid var(--neutral--400, #dce1eb);
		background-color: var(--neutral--100, white);
		box-shadow: 0 2px 12px 0 var(--button-shadow--white-03, rgb(20 20 43 / 10%));
		color: var(--neutral--800, #1f3154);
		text-align: center;
		border-radius: 12px;
		padding: 18px 28px;
		font-size: 18px;
		line-height: 1.111em;
		text-decoration: none;
		display: inline-block;
	}
`;
