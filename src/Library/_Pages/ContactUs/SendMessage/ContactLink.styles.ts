"use client";
import styled from "styled-components";

export const ContactLinkInner = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	a {
		color: var(--accent--primary-1, #4187ff);
		transition: color 0.2s ease-in-out;
		&:hover {
			color: var(--secondary--color-4, #ff5f55);
		}
	}
`;

export const ContactLinkInnerInfo = styled.div`
	& .contactHeader {
		margin-bottom: 4px;
		color: var(--neutral--800, #1f3154);
	}
`;
