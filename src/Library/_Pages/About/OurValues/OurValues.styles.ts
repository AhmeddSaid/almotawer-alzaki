"use client";
import styled from "styled-components";
import { Breakpoints, Col } from "@/Library/common/Grids/Grids";

export const OurValuesSection = styled.section`
	padding-block: 135px;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding-block: 194px;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		padding-block: 223px;
	}
	background-color: var(--neutral--800, #1f3154);

	.OurValuesButton {
		width: 100%;

		a {
			width: 100%;
		}

		div {
			width: 100%;
		}
	}

	@media screen and (min-width: ${Breakpoints.sm}) {
		.OurValuesButton {
			width: fit-content;
			margin: auto;

			a {
				width: fit-content;
			}

			div {
				width: fit-content;
			}
		}
	}
`;

export const OurValuesSectionHeader = styled.div`
	max-width: 577px;
`;

export const OurValuesCardContainer = styled(Col)<{ index: number }>`
	@media screen and (min-width: ${Breakpoints.lg}) {
		margin-top: ${({ index }) => index * 118}px;
	}
`;
