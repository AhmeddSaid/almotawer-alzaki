"use client";

import styled from "styled-components";

export const OurProcessShell = styled.section`
	padding-top: 120px;
	padding-bottom: 60px;
`;
export const OurProcessHeaderShell = styled.div`
	max-width: 750px;

	margin: auto;
	text-align: center;
`;

export const OurProcessSectionCardShell = styled.div`
	max-width: 373px;
	text-align: center;
`;

export const OurProcessSectionCardIndex = styled.p`
	font-size: 84px;
	font-weight: 700;
	line-height: 1.155em;
	margin-bottom: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--neutral--800);
`;

export const Dot = styled.span<{ color: string }>`
	color: ${({ color }) => color};
`;

export const OurProcessSectionCardTitle = styled.p`
	color: var(--neutral--800, #1f3154);
	font-size: 28px;
	font-weight: 700;
	line-height: 1.429em;
	margin-bottom: 4px;
`;
export const OurProcessSectionCardSubTitle = styled.p`
	margin-bottom: 50px;
	color: var(--neutral--600, #6e7a91);
	font-family: Thicccboi, sans-serif;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.667em;
`;
