import styled from "styled-components";

export const Container = styled.div`
	background-color: #1f3154;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 6rem 10rem;
	margin: auto;

	@media (max-width: 768px) {
		padding: unset;
	}
`;

export const BlogContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin: auto;
	width: 80%;
	@media screen and (max-width: 768px) {
		width: 100%;
		overflow: hidden;
	}
`;

export const BlogTitle = styled.h1`
	color: #fff;
	font-size: 5.25rem;
	@media screen and (max-width: 768px) {
		font-size: 43px;
		text-align: center;
		margin: auto;
		margin-top: 60px;
	}
`;

export const BlogMain = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	gap: 2rem;
	margin-top: 3rem;
	position: relative;
	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;

export const FirstPost = styled.div`
	border-radius: 8px;
	color: white;
	display: flex;
	flex-direction: column;
	width: 70%;
	@media screen and (max-width: 768px) {
		width: 90%;
		padding-bottom: 20px;
		border-bottom: 1px solid #6e7a91;
		border-radius: unset;
	}
`;

export const RemainingPosts = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	width: 50%;
	@media screen and (max-width: 768px) {
		padding-bottom: 60px;
		width: 90%;
	}
`;

export const Post = styled.div`
	color: white;
	border-bottom: 1px solid #6e7a91;

	@media screen and (max-width: 768px) {
		padding-bottom: 20px;
		border-bottom: unset;

		// border bottom for except last post
		&:not(:last-child) {
			border-bottom: 1px solid #6e7a91;
		}
	}
`;

export const Img = styled.img`
	width: 100%;
	height: auto;
	border-radius: 24px;
	margin-bottom: 2rem;
	position: relative;
	z-index: 2;
`;

export const TextDivider = styled.div`
	width: 18px;
	height: 1px;
	background-color: #6e7a91;
`;

export const TagnDate = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	text-transform: uppercase;
`;

export const PostTitle = styled.h2`
	font-size: 2.5rem;
	transition: 300ms;
	cursor: pointer;

	&:hover {
		color: #4187ff;
	}

	@media screen and (max-width: 768px) {
		font-family: Thicccboi, sans-serif;
		margin-top: 10px;
		margin-bottom: 0;
		font-weight: 700;
		line-height: 1.316em;
		font-size: 26px;
		background-attachment: scroll !important;
		color: var(--neutral--100);
	}
`;

export const HalfCircle = styled.div<{ color?: string; rotate?: string }>`
	height: 140px;
	width: 280px;
	border-top-left-radius: 10000px;
	border-top-right-radius: 10000px;
	background-color: ${({ color }) => color ?? "#ffc32a"};
	transform: ${({ rotate }) => `rotate(${rotate + "deg" || "0deg"})`};
	position: absolute;
	z-index: 1;
`;

export const PostsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin: auto;
	width: 100%;
	padding: 16rem 0;
	gap: 4rem;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		padding: 8rem 0;
		align-items: center;
	}
`;

export const Posts = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
	width: 50%;

	@media screen and (max-width: 768px) {
		width: 100%;
		justify-content: center;
	}
`;

export const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	position: sticky;
	top: 0;

	@media screen and (max-width: 768px) {
		position: unset;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
`;
export const FilterItemContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
		width: 80%;
		overflow: auto;
	}
`;

export const FilterItem = styled.div`
	display: flex;
	cursor: pointer;
	margin: 1rem 0;
	font-size: 1.75rem;
	color: #6e7a91;
	transition: 300ms;
	text-transform: capitalize;
	font-weight: 600;

	&.first-link {
		color: #4187ff;
	}

	&:hover {
		color: #4187ff;
	}

	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;

export const FilterTitle = styled.h3`
	font-size: 3.5rem;
	font-weight: 700;

	@media screen and (max-width: 768px) {
		font-size: 30px;
	}
`;

export const Loading = styled.div`
	color: white;
	font-size: 2rem;
	text-align: center;
	margin-top: 2rem;
`;
