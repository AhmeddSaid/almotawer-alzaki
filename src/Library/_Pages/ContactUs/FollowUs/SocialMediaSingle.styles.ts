"use client";

import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Library/common/Grids/Grids";

export const SocialMediaIcon = styled.span`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		width: 60px;
		height: 60px;
	}

	background-color: teal;
	border-radius: 50%;
	overflow: hidden;
	transition: all 0.2s ease-in-out;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		transition: all 0.2s ease-in-out;
	}
`;

export const SocialMediaContainer = styled(Flexbox)`
	padding: 34px;
	background-color: var(--neutral--200, #f7f8fc);
	border-radius: 24px;
	margin-bottom: 24px;
	transition: all 0.2s ease-in-out;

	p {
		font-weight: 700;
		line-height: 1.417em;
		font-size: 20px;
	}

	&:hover {
		transform: translateY(8px);
		p {
			color: var(--accent--primary-1);

			@media screen and (min-width: ${Breakpoints.md}) {
				font-size: 24px;
			}
		}
		img {
			transform: scale(1.05);
		}
	}
	p {
		color: var(--neutral--800, #1f3154);
		font-size: 20px;
		font-weight: 700;
		line-height: 1.417em;
		transition: all 0.2s ease-in-out;
	}
`;
