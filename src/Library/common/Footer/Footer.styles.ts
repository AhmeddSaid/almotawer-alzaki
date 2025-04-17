"use client";
import styled from "styled-components";
import { Breakpoints, Flexbox, Row } from "@/Library/common/Grids/Grids";

export const FooterSection = styled.footer`
	background-color: #1f3154;

	.paymentIcons {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin: 2rem 0;
		width: 100%;
		gap: 1rem;

		& svg {
			width: 60px;
			height: 60px;
		}

		img {
			height: auto;
			width: auto;
			object-fit: contain;
		}
	}
`;

export const FooterTop = styled(Flexbox)`
	border-bottom: 1px solid var(--neutral--600, #6e7a91);
	padding-top: 84px;
	padding-bottom: 84px;
	align-items: center;

	@media screen and (max-width: ${Breakpoints.lg}) {
		flex-direction: column;
		padding-bottom: 30px;
	}

	& .footerCaption {
		max-width: 505px;

		@media screen and (max-width: ${Breakpoints.lg}) {
			img {
				text-align: center;
				margin: auto;
			}

			p {
				text-align: center;
				font-size: 16px;
				font-weight: 500;
				line-height: 1.667em;
			}
		}
	}

	& .footerForm {
		//width: 568px;
		max-width: 568px;
		//width: 500px;
		position: relative;
		@media screen and (max-width: ${Breakpoints.lg}) {
			//width: 500px;
		}

		p {
			color: var(--neutral--100);
			font-size: 24px;
			font-weight: 700;
			line-height: 1.417em;
			margin-bottom: 16px;

			@media screen and (max-width: ${Breakpoints.sm}) {
				font-size: 20px;
				text-align: center;
				font-weight: 700;
				line-height: 1.417em;
				margin-top: 40px;
				margin-bottom: 8px;
			}

			@media screen and (max-width: ${Breakpoints.lg}) {
				text-align: center;
			}
		}
	}

	input {
		min-height: 72px;
		border: 1px solid var(--neutral--300, #eff2f6);
		background-color: var(--neutral--100, #ffffff);
		box-shadow: 0 2px 6px 0 var(--general--shadow-01, rgb(20 20 43 / 6%));
		color: var(--neutral--800, #1f3154);
		border-radius: 28px;
		margin-bottom: 0;
		padding: 26px 24px;
		font-size: 18px;
		line-height: 1.111em;
		width: 100%;
	}

	input:focus {
		outline: none;
		box-shadow: none;
	}
`;

export const FooterCaptionParagraph = styled.p`
	color: #dce1eb;
	margin-top: 20px;
	font-family: Thicccboi, sans-serif;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.667em;
`;
export const FooterBoxInner = styled.div`
	height: 409px;
	max-width: 442px;
	//min-width: 426px;
	width: 100%;
	padding-top: 55px;
	padding-left: 44px;
	padding-right: 44px;
	position: relative;
	background-color: var(--neutral--700, #384763);
	border-radius: 24px;
	overflow: hidden;

	@media screen and (max-width: ${Breakpoints.sm}) {
		height: 600px;

		a {
			width: 100%;

			button {
				width: 100%;
			}
		}
	}

	:nth-child(1) {
		font-weight: 700;
		font-size: 20px;
		line-height: 1.1em;
		color: var(--neutral--100, #fff);

		@media screen and (max-width: ${Breakpoints.sm}) {
			line-height: 1.1em;
			font-weight: 700;
			font-size: 18px;
		}
	}

	:nth-child(2) {
		margin-top: 14px;
		margin-bottom: 18px;
		color: var(--neutral--600, #dce1eb);
		font-family: Thicccboi, sans-serif;
		font-size: 18px;
		font-weight: 500;
		line-height: 1.667em;

		@media screen and (max-width: ${Breakpoints.sm}) {
			font-size: 16px;
			font-weight: 500;
			line-height: 1.667em;
		}
	}

	button {
		padding: 18px;
		font-size: 16px !important;
		line-height: 1.125em;
		border: 1px solid #4187ff;
		background-color: var(--accent--primary-1, #4187ff);
		color: var(--neutral--100, #fff);
		text-align: center;
		transform-style: preserve-3d;
		border-radius: 14px;
		overflow: hidden;
		cursor: pointer;
	}

	img {
		position: absolute;
		pointer-events: none;
		bottom: -60px;
		right: -16px;
		@media screen and (max-width: ${Breakpoints.sm}) {
			right: 50%;
			transform: translateX(50%);
		}
		//z-index: -1;
	}
`;

export const FooterMiddle = styled(Row)`
	padding-top: 118px;
	padding-bottom: 118px;
	border-bottom: 1px solid var(--neutral--600, #6e7a91);

	@media screen and (max-width: ${Breakpoints.sm}) {
		padding-top: 70px;
		border-bottom: 0;
	}

	.footerLinksCol {
		@media screen and (max-width: ${Breakpoints.md}) {
			order: -1;
		}
	}

	.FooterCardCol {
		@media screen and (max-width: ${Breakpoints.lg}) {
			margin-top: 60px !important;
			order: 5;
		}
	}

	& .pages {
		& > :first-child {
			color: var(--neutral--400, #dce1eb);
			margin-bottom: 40px;
		}

		& > :not(:first-child) {
			margin-bottom: 10px;

			a {
				color: var(--neutral--100, #fff);
				font-size: 16px;
				font-weight: 700;
				line-height: 1.5rem;
				text-decoration: none;
				transition: color 0.3s;

				@media screen and (max-width: ${Breakpoints.sm}) {
					font-size: 20px;
					font-weight: 700;
					line-height: 1.417em;
					text-decoration: none;
				}

				&:hover {
					color: var(--accent--primary-1, #4187ff);
				}
			}
		}
	}

	& .services {
		background-color: red;
	}
`;

export const FooterBottom = styled(Flexbox)`
	border-top: 1px solid var(--neutral--600);
	padding-top: 40px;
	padding-bottom: 40px;
	text-align: start;
	@media screen and (max-width: ${Breakpoints.sm}) {
		flex-direction: column;
	}

	p {
		color: var(--neutral--300, #eff2f6);
		font-size: 18px;
		font-weight: 500;
		line-height: 1.667em;

		@media screen and (max-width: ${Breakpoints.sm}) {
			margin-top: 20px;
			text-align: center;
		}
	}

	a {
		color: var(--neutral--300, #eff2f6);
		text-decoration: underline;
		transition: color 0.3s;

		&:hover {
			color: var(--accent--primary-1, #4187ff);
		}
	}
`;

export const NewsLetter = styled.div`
	position: relative;

	input {
		//width: 100%;
	}
`;
export const SubscribeButton = styled.button`
	position: absolute;
	right: 10px;
	cursor: pointer;
	top: 50%;
	transform: translateY(-50%);
	background: #4187ff;
	color: #fff;
	font-weight: 700;
	padding: 16px 24px;
	border-radius: 18px;
	transition: 300ms;

	@media screen and (max-width: ${Breakpoints.sm}) {
		width: 100%;
		position: static;
		margin-top: 50px;
	}
	// @media screen and (max-width: ${Breakpoints.lg}) {
	// 	//width: 500px;
	// }

	&:hover {
		background: #ff5f55;
		scale: 0.96;
	}
`;

export const FooterIconStyles = styled.div`
	width: 36px;
	height: 36px;
	min-height: 36px;
	min-width: 36px;
	background-color: var(--neutral--600);
	color: var(--neutral--100);
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	transition:
		background-color 0.3s,
		color 0.3s;
	display: flex;

	svg {
		fill: white;

		path {
			fill: white;
		}
	}
`;
