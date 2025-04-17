"use client";

import styled from "styled-components";

export const ArrowsBlogShell = styled.div`
	margin-top: 50px;
`;

export const RightArrowBlogStyles = styled.div`
	position: absolute;
	width: 88px;
	height: 88px;
	top: 300px;
	left: 80%;
	transform: translateX(75%);

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	border: 1px solid var(--accent--primary-1, #4187ff);
	background-color: var(--accent--primary-1, #4187ff);
`;
export const LeftArrowBlogStyles = styled.div`
	position: absolute;
	width: 88px;
	height: 88px;
	top: 300px;
	left: 80%;
	transform: translateX(-75%);

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 12px;

	box-shadow: 0 2px 12px 0 rgba(20, 20, 43, 0.08);
`;
