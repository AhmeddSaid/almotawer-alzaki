import styled from "styled-components";

export const CategoryPostsContainer = styled.div`
	margin-top: 100px;
`;

export const Title = styled.h1`
	user-select: text;
	text-align: center;
	margin: 0.67em 0;
	margin-top: 0;
	color: var(--neutral--800);
	font-size: 84px;
	font-weight: 700;
	line-height: 1.155em;
	margin-bottom: 0;
	text-transform: capitalize;

	@media screen and (max-width: 768px) {
		margin: 0.67em 0;
		margin-top: 0;
		color: var(--neutral--800);
		font-weight: 700;
		line-height: 1.155em;
		margin-bottom: 0;
		font-size: 43px;
	}
`;
export const CategoryHolder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 40px;
`;

export const Category = styled.span`
	text-transform: capitalize;
	font-weight: 500;
	user-select: text;
	box-sizing: border-box;
	scrollbar-width: none !important;
	cursor: pointer;
	text-decoration: none;
	display: inline-block;
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	color: var(--neutral--800);
	text-align: center;
	transform-style: preserve-3d;
	font-size: 18px;
	line-height: 1.111em;
	transition:
		box-shadow 0.3s,
		border-color 0.3s,
		transform 0.3s,
		background-color 0.3s,
		color 0.3s;
	border-color: var(--neutral--400);
	box-shadow: 0 2px 6px 0 var(--button-shadow--white-01);
	border-radius: 12px;
	padding: 18px 28px;

	//active
	&.active {
		border: 1px solid var(--neutral--300);
		border-color: var(--accent--primary-1);
		background-color: var(--accent--primary-1);
		color: var(--neutral--100);
	}
`;

export const PostsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin: auto;
	width: 100%;
	gap: 4rem;
	margin: 40px auto 100px;
	flex-wrap: wrap;
	height: 100%;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;
