import styled from "styled-components";
import { Breakpoints } from "@/Library/common/Grids/Grids";

export const PostDetailPage = styled.div`
	position: relative;
`;
export const PostHeroContainer = styled.div`
	width: 100%;
	height: 100dvh;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #1f3154;

	@media screen and (max-width: 768px) {
		height: 60dvh;
	}
`;
export const PostHero = styled.div`
	padding-top: 7.5rem;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	&.no-image {
		background-color: #1f3154;
	}

	@media screen and (max-width: 768px) {
		overflow: hidden;
		padding-top: 3.5rem;
	}
`;

export const PostContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 138px auto;
	gap: 130px;

	@media screen and (max-width: 768px) {
		margin: 60px auto;
	}
`;

export const PostDate = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 1.125rem;
	color: #fff;
	margin-bottom: 1.5rem;
	text-transform: uppercase;

	@media screen and (max-width: ${Breakpoints.md}) {
		font-size: 0.875rem;
	}
`;

export const PostTitle = styled.h1`
	width: 65%;
	font-size: 5.25rem;
	color: #fff;
	text-align: center;
	font-weight: bold;
	margin-bottom: 1.5rem;
	z-index: 2;

	@media screen and (max-width: 768px) {
		width: 90%;
		text-align: center;
		margin: 0.67em 0;
		margin-top: 0;
		margin-bottom: 10px;
		font-weight: 700;
		line-height: 1.155em;
		font-size: 43px;
		color: var(--neutral--100);
		transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
		transform-style: preserve-3d;
		opacity: 1;
	}
`;

export const ImgContainer = styled.div`
	position: relative;
	margin: auto;
	display: flex;
	justify-content: center;
	width: 70%;

	& .circle1 {
		right: -60px;
		top: -75px;
	}
	& .circle2 {
		right: -120px;
		top: 10px;
	}
	& .circle3 {
		left: -100px;
		top: 220px;
	}
	& .circle4 {
		left: -100px;
		top: 365px;
	}
	@media screen and (max-width: 768px) {
		width: 90%;
		margin-top: 1rem;
		& div {
			scale: 0.5;
		}

		& .circle1 {
			right: -130px;
			top: 25px;
			transform: rotate(0deg);
		}
		& .circle2 {
			right: -120px;
			top: 80px;
		}
		& .circle3 {
			left: -100px;
			top: 60px;
		}
		& .circle4 {
			left: -100px;
			top: 120px;
		}
	}
`;

export const Img = styled.img`
	width: 100%;
	border-radius: 1.5rem;
	z-index: 2;
`;

export const ParsedContent = styled.div`
	width: 50%;

	p {
		color: #6e7a91;
		font-size: 18px;
		font-weight: 500;
		line-height: 1.667em;
		margin-top: 0;
		margin-bottom: 24px;
	}

	strong {
		font-size: 18px;
		line-height: 1.667em;
		color: #1f3154;
		font-weight: 700;
	}

	h2 {
		color: #1f3154;
		margin-bottom: 24px;
		font-size: 38px;
		font-weight: 700;
	}

	img {
		width: 100%;
		height: auto;
		border-radius: 1.5rem;
	}

	a {
		color: #ff5f55;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	ol {
		color: var(--neutral--600);
		font-size: 18px;
		font-weight: 500;
		line-height: 1.667em;
		box-sizing: border-box;
		margin-top: 0;
		padding-left: 40px;
		overflow: hidden;
		margin-bottom: 64px;
		list-style: decimal;

		list-style-type: decimal;
	}

	li {
		color: var(--neutral--600);
		font-size: 18px;
		font-weight: 500;
		line-height: 1.667em;
		margin-bottom: 8px;
		padding-left: 8px;
		list-style: unset;
	}

	h3 {
		scrollbar-width: none !important;
		color: var(--neutral--800);
		margin-top: 0;
		font-size: 24px;
		font-weight: 700;
		line-height: 1.417em;
		margin-bottom: 16px;
	}

	figure {
		color: var(--neutral--600);
		font-size: 18px;
		font-weight: 500;
		line-height: 1.667em;
		position: relative;
		margin-top: 40px;
		margin-bottom: 64px;
		width: 100%;
		max-width: 100%;
		text-align: center;
		clear: both;
		margin-left: auto;
		margin-right: auto;
		display: block;
	}

	figcaption {
		color: var(--neutral--600);
		font-family: Thicccboi, sans-serif;
		font-size: 18px;
		font-weight: 500;
		line-height: 1.667em;
		text-align: center;
		margin-top: 21px;
		caption-side: bottom;
		display: block;
	}

	h4 {
		color: var(--neutral--800);
		margin-top: 0;
		font-size: 22px;
		font-weight: 700;
		line-height: 1.273em;
		margin-bottom: 16px;
	}

	h5 {
		color: var(--neutral--800);
		margin-top: 0;
		font-size: 18px;
		font-weight: 700;
		line-height: 1.333em;
		margin-bottom: 16px;
	}

	ul {
		color: var(--neutral--600);
		font-size: 18px;
		font-weight: 500;
		line-height: 1.667em;
		margin-top: 0;
		padding-left: 40px;
		overflow: hidden;
		margin-bottom: 64px;
		list-style: unset;
	}

	blockquote {
		margin: 0 0 10px;
		background-color: var(--neutral--200);
		border: 0 solid #000;
		border-radius: 24px;
		padding: 86px 64px;
		margin-top: 64px;
		margin-bottom: 64px;
	}

	blockquote p {
		font-size: 24px;
		color: var(--neutral--800);
		text-align: center;
		font-weight: 600;
	}

	h6 {
		color: var(--neutral--800);
		margin-top: 0;
		font-size: 16px;
		font-weight: 700;
		line-height: 1.375em;
		margin-bottom: 16px;
	}

	@media screen and (max-width: 768px) {
		width: 90%;
		h2 {
			line-height: 1.316em;
			font-size: 24px;
			margin-bottom: 10px;
		}

		blockquote {
			margin: 0 0 10px;
			background-color: var(--neutral--200);
			color: var(--neutral--800);
			text-align: center;
			border: 0 solid #000;
			font-weight: 600;
			line-height: 1.667em;
			border-radius: 18px;
			font-size: 20px;
			padding: 50px 24px;
			margin-top: 45px;
			margin-bottom: 45px;
		}

		blockquote p {
			font-size: 18px;
		}
	}
`;
