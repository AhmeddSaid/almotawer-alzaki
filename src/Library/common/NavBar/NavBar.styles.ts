"use client";

import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Library/common/Grids/Grids";

export const NavBarShell = styled.nav`
	background-color: var(--neutral--800, #1f3154);
	padding-block: 32px;
	position: relative;
	@media screen and (max-width: ${Breakpoints.sm}) {
		position: sticky;
		top: -1px;
		left: 0;
		width: 100vw;
		z-index: 99999;
	}

	@media screen and (max-width: ${Breakpoints.lg}) {
		padding-block: unset;
	}

	& .NavBarSection {
		/* position: relative; */
	}

	& .desktopMenu {
		@media screen and (max-width: ${Breakpoints.lg}) {
			display: none;
		}
	}

	& .NavBarButton {
		display: block;

		@media screen and (max-width: ${Breakpoints.lg}) {
			display: none;
		}
	}
`;

export const MobileMenu = styled.div<{ open: boolean }>`
	display: none;
	position: fixed;
	top: 144px;
	height: calc(100dvh - 144px);
	width: 100%;
	padding: 0 24px;
	padding-block: 50px;
	background-color: var(--neutral--800);
	z-index: 5;
	left: 0;
	animation: slideIn 0.6s ease;
	@keyframes slideIn {
		from {
			left: 100%;
		}
		to {
			left: 0;
		}
	}

	@media screen and (max-width: ${Breakpoints.lg}) {
		display: ${({ open }) => (open ? "block" : "none")};
	}
`;

// export const Animate = styled.div`
// 	position: absolute;
// 	width: 90%;
// 	animation: slideIn 0.6s ease;
// 	@keyframes slideIn {
// 		from {
// 			left: 100%;
// 		}
// 		to {
// 			left: 0;
// 		}
// 	}
// `;

export const Logo = styled.p`
	cursor: pointer;
	font-size: 32px;
	color: white;
	transition:
		transform 0.3s,
		border-color 0.3s,
		background-color 0.3s,
		color 0.3s;

	&:hover {
		transform: scale3d(0.98, 0.98, 1.01);
		transition:
			transform 0.3s,
			border-color 0.3s,
			background-color 0.3s,
			color 0.3s;
	}
`;

export const LinkStyles = styled.li`
	padding-inline: 16px;
	padding-block: 10px;

	//margin-bottom: 10px;
	font-weight: 400;
	line-height: 1.111em;
	color: var(--neutral--100, #ffff);
	font-size: 18px;
	transition: color 0.3s;
	text-transform: capitalize;

	&:hover {
		color: var(--accent--primary-1, #4187ff);
		transition: color 0.3s;
	}

	@media screen and (max-width: 990px) {
		font-size: 30px;
		margin-bottom: 30px;
		padding-inline: 0;
	}
	@media screen and (max-width: 768px) {
		margin-bottom: 26px;
	}
	@media screen and (max-width: 375px) {
		margin-bottom: 10px;
	}
`;

export const HamburgerMenu = styled.div`
	transition: all 0.3s ease-in-out;
	display: none;
	width: 50px;
	height: 50px;
	background: var(--accent--primary-1);
	@media screen and (max-width: ${Breakpoints.lg}) {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 12px;
	}
	& span {
		display: block;
		height: 3px;
		width: 32px;
		background: white;
		transition: all 0.3s ease-in-out;

		&:first-child {
			transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
				rotateZ(0deg) skew(0deg, 0deg);
			transform-style: preserve-3d;
		}

		&:last-child {
			transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
				rotateZ(0deg) skew(0deg, 0deg);
			transform-style: preserve-3d;
		}

		&:not(:last-child) {
			margin-bottom: 12px;
			transition: all 0.3s ease-in-out;
		}
	}

	&.active span {
		&:first-child {
			transform: translate3d(0px, 8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
				rotateZ(135deg) skew(0deg, 0deg);
			transform-style: preserve-3d;
			transition: all 0.3s ease-in-out;
		}

		&:last-child {
			transform: translate3d(0px, -7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
				rotateZ(45deg) skew(0deg, 0deg);
			transform-style: preserve-3d;

			transition: all 0.3s ease-in-out;
		}
	}
`;

export const HeaderDropDown = styled(Flexbox)`
	position: relative;
	svg {
		//fill: white;
		color: white;
		path {
			stroke: white;
		}
	}

	& ul {
		display: none;
		padding: 1rem 0.5rem;
		border-radius: 24px;
		background: white;
		min-width: 250px;
		width: fit-content;
		position: absolute;
		z-index: 1;
		top: 40px;
		left: -65px;

		& li {
			text-align: center;
			&:not(:last-child) {
				margin-bottom: 1rem;
			}

			&:hover a {
				color: var(--accent--primary-1, #4187ff);
			}

			& a {
				display: inline-block;
				padding: 0;
				width: fit-content;
				transition: color 300ms;
				color: var(--neutral--600);
				font-size: 18px;
				font-weight: 500;
			}
		}
	}

	&:hover {
		ul {
			display: block;
		}

		svg {
			rotate: 180deg;
		}
	}
`;
