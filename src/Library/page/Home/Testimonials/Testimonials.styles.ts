"use client";

import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const TestimonialsShell = styled.section`
	/* padding-block: 135px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding-block: 162px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding-block: 194px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		padding-block: 233px;
	} */

	.TestimonialsCol {
		h2 {
			@media screen and (min-width: ${Breakpoints.md}) {
				text-align: center;
			}
		}

		p {
			text-align: center;
			@media screen and (min-width: ${Breakpoints.md}) {
				text-align: center;
			}
		}
	}

	& .TestButton div {
		width: 100%;
		margin: 28px auto 0;

		@media screen and (min-width: ${Breakpoints.sm}) {
			width: fit-content;
			margin: 28px auto 0;
		}
		@media screen and (min-width: ${Breakpoints.md}) {
			width: fit-content;
			margin: 28px 0 0;
		}
	}

	/* .react-multi-carousel-track {
		gap: 12rem;
	} */
	.testimonials-carousel-item {
		padding: 5rem;
		margin: auto;
	}
`;

export const TestimonialsCard = styled.div`
	max-width: 1050px;
	border-radius: 32px;
	background-color: #f7f8fc;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	//margin-inline: px;
	width: 100%;
	flex-direction: column;

	img {
		width: 100%;
	}

	@media screen and (min-width: ${Breakpoints.md}) {
		flex-direction: row;
	}
`;

export const TestimonialsCardInfo = styled.div`
	/* max-width: 565px; */
	padding: 60px 24px 50px;

	.testimonalP {
		width: 80%;
		margin: auto;
		font-size: 16px;
		text-align: center;
		color: var(--neutral--600);
		font-weight: 500;
		line-height: 1.667em;

		@media screen and (min-width: ${Breakpoints.md}) {
			font-size: 18px;
		}

		p {
			color: var(--neutral--600, #6e7a91);
			font-size: 18px;
			font-weight: 500;
			line-height: 1.667em;
			margin-bottom: 16px;
		}
	}
`;

export const TestimonialsCardInfoH3 = styled.h3`
	color: var(--neutral--800, #1f3154);
	font-size: 20px;
	text-align: center;
	font-weight: 700;
	line-height: 1.429em;
	margin-bottom: 8px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		font-size: 22px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		font-size: 24px;
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		font-size: 28px;
	}

	span {
		color: #4187ff;
	}
`;

export const Divider = styled.div`
	height: 1px;
	background-color: var(--neutral--400, #dce1eb);
	margin-top: 56px;
	margin-bottom: 56px;
`;

export const LinkContainer = styled.div`
	align-items: center;
	text-align: center;

	& .Bold {
		color: var(--neutral--800, #1f3154);
		font-weight: 700;
		font-size: 20px;
		line-height: 1.1em;
	}

	a {
		padding-inline: 8px;
		color: var(--accent--primary-1, #4187ff);
	}
`;
