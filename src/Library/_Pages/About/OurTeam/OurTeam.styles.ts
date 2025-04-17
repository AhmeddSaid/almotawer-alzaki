"use client";
import styled from "styled-components";
import { Breakpoints, Col, Flexbox } from "@/Library/common/Grids/Grids";

export const OurTeamSection = styled.section`
	padding-block: 135px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding-block: 194px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding-block: 223px;
	}
`;

export const OurTeamHeaderContainer = styled(Flexbox)`
	margin-bottom: 48px;

	flex-direction: column;

	.ButtonOurTeam {
		width: 100%;
		margin-top: 32px;

		div {
			width: 100%;
		}

		a {
			width: 100%;
		}

		&_container {
			display: flex;
			justify-content: center;
		}
	}

	@media screen and (min-width: ${Breakpoints.sm}) {
		.ButtonOurTeam {
			width: fit-content;
			//margin: auto;

			div {
				width: fit-content;
			}

			a {
				//width: fit-content;
			}
		}
	}
	@media screen and (min-width: ${Breakpoints.lg}) {
		flex-direction: row;
	}

	& :nth-child(1) {
		max-width: 455px;
		text-align: center;
		margin: 0 auto;
		@media screen and (min-width: ${Breakpoints.lg}) {
			text-align: start;
			margin: 0;
		}
	}
`;

export const OurTeamCardContainer = styled(Col)<{ index: number }>`
	margin-bottom: 20px;
	@media screen and (min-width: ${Breakpoints.lg}) {
		margin-top: ${({ index }) => index * 76}px;
	}
`;
