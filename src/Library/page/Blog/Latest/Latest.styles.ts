import styled from "styled-components";

export const LatestPosts = styled.div`
	color: var(--neutral--600);
	font-size: 18px;
	font-weight: 500;
	line-height: 1.667em;
	box-sizing: border-box;
	scrollbar-width: none !important;
	display: block;
	background-color: var(--neutral--200);
	padding-top: 200px;
	padding-bottom: 200px;
`;

export const LatestPostsContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const Container = styled.div`
	color: var(--neutral--600);
	font-family: Thicccboi, sans-serif;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.667em;
	box-sizing: border-box;
	margin-bottom: 5rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Title = styled.div`
	font-family: Thicccboi, sans-serif;
	box-sizing: border-box;
	scrollbar-width: none !important;
	margin-top: 0;
	color: var(--neutral--800);
	font-size: 56px;
	font-weight: 700;
	line-height: 1.214em;
	margin-bottom: 0;
	grid-area: span 1 / span 1 / span 1 / span 1;

	@media screen and (max-width: 768px) {
		font-size: 30px;
		margin-bottom: 2rem;
	}
`;

export const Button = styled.div`
	color: var(--neutral--600);
	font-family: Thicccboi, sans-serif;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.667em;
	box-sizing: border-box;
	scrollbar-width: none !important;
	grid-column-gap: 28px;
	grid-row-gap: 20px;
	align-items: center;
	display: flex;
`;
export const ButtonText = styled.div`
	font-family: Thicccboi, sans-serif;
	font-weight: 500;
	box-sizing: border-box;
	scrollbar-width: none !important;
	cursor: pointer;
	text-decoration: none;
	display: inline-block;
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 4px 10px 0 var(--button-shadow--white-01);
	color: var(--neutral--800);
	text-align: center;
	transform-style: preserve-3d;
	border-radius: 14px;
	padding: 30px 38px;
	font-size: 18px;
	line-height: 1.111em;
	transition:
		box-shadow 0.3s,
		border-color 0.3s,
		transform 0.3s,
		background-color 0.3s,
		color 0.3s;

	&:hover {
		background-color: #4187ff;
		color: #fff;
	}
`;

export const PostsWrapper = styled.div`
	display: flex;
	/* flex-wrap: wrap; */
	gap: 2.5rem;
	width: 100%;

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;
