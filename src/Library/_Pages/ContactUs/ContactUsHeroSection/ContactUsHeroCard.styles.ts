"use client";
import styled from "styled-components";

export const ContactUsHeroCardInner = styled.div`
	text-align: center;
	padding: 83px 20px 78px;
	background-color: var(--neutral--200, #f7f8fc);
	border-radius: 24px;
	margin-bottom: 24px;
	.noLink {
		pointer-events: none;
	}
	img {
		margin: 0 auto 28px;
	}

	& :nth-child(3) {
		color: var(--neutral--600, #6e7a91);
		font-size: 18px;
		font-weight: 500;
		line-height: 1.667em;
		margin-block: 6px 26px;
	}

	a {
		color: var(--accent--primary-1, #4187ff);
		transition: color 0.2s ease-in-out;

		&:hover {
			color: var(--secondary--color-4, #ff5f55);
		}
	}
`;
