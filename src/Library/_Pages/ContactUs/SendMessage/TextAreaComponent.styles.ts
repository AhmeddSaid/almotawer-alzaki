"use client";
import styled from "styled-components";

export const TextArea = styled.textarea<{ hasError?: boolean }>`
	height: auto;
	max-height: 200px;
	max-width: 100%;
	min-height: 144px;
	min-width: 100%;
	border: 1px solid ${({ hasError }) => (hasError ? "red" : "var(--neutral--300,#eff2f6)")};
	background-color: var(--neutral--100, white);
	box-shadow: 0 4px 20px 0 var(--general--shadow-01, rgb(20 20 43 / 6%));
	color: var(--neutral--800, #1f3154);
	border-radius: 16px;
	margin-bottom: 0;
	padding: 24px;
	font-size: 18px;
	line-height: 1.4em;
	transition:
		box-shadow 0.3s,
		color 0.3s,
		border-color 0.3s;
	width: 100%;

	&:hover {
		border-color: ${({ hasError }) => (hasError ? "red" : "var(--accent--primary-1,#4187ff)")};
		box-shadow: 0 2px 12px 0 var(--general--shadow-03, rgb(20 20 43 / 10%));
	}
`;
