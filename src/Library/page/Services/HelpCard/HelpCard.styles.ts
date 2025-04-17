"use client";

import styled from "styled-components";
import { Col } from "@/Library/common/Grids/Grids";

export const HelpCardSectionShell = styled.section`
	padding-block: 104px 250px;
`;

export const HelpCardShell = styled.div`
	max-width: 907px;
	margin-inline: auto;
	border-radius: 24px;
	background-color: var(--neutral--800, #1f3154);

	img {
		width: 100%;
		height: 100%;
	}
`;

export const HelpCardInfo = styled(Col)`
	padding: 65px 70px 65px 74px;
`;

export const HelpCardInfoTitle = styled.p`
	color: var(--neutral--100, white);

	margin-bottom: 4px;
	font-size: 28px;
	font-weight: 700;
	line-height: 1.429em;
`;

export const HelpCardInfoSubTitle = styled.p`
	font-size: 18px;
	font-weight: 500;
	line-height: 1.667em;
	margin-bottom: 32px;
	color: var(--neutral--400, #dce1eb);
`;
