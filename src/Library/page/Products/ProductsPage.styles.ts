import Link from "next/link";
import styled from "styled-components";

export const ProductsPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 6rem 10rem;
	margin: auto;
	background: var(--neutral--800);
	/* min-height: 65dvh; */
	margin-bottom: 16rem;
	h1 {
		text-align: center;
		margin: 0.67em 0;
		font-size: 5.25rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		color: var(--neutral--100);
	}
	p {
		font-size: 18px;
		font-weight: 500;
		text-align: center;
		margin-bottom: 16px;
		color: var(--neutral--300);
		width: 50%;
	}
	ul {
		margin-top: 1rem;
	}
`;
export const ProductCardHolder = styled.div`
	font-size: 18px;
	font-weight: 500;
	line-height: 1.667em;
	background-color: var(--neutral--200);
	border-radius: 24px;
	overflow: hidden;
	max-width: 404px;
	padding: 54px 34px;
`;
export const IconName = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1rem;
	h2 {
		color: var(--neutral--800);
		font-size: 28px;
		font-weight: 700;
		margin-bottom: 0;
	}
`;
export const Price = styled.div`
	color: var(--neutral--800);
	font-weight: 700;
	line-height: 1.263em;
	margin-bottom: 12px;
	font-size: 38px;
`;
export const Desc = styled.div`
	color: var(--neutral--600);
	font-size: 18px;
	font-weight: 500;
	line-height: 1.667em;
	margin-top: 0;
	margin-bottom: 0;
`;
export const CardsContainer = styled.div`
	/* display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr); */
	gap: 2rem;
	margin-top: 3rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-bottom: -16rem;

	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
export const Divider = styled.div`
	height: 1px;
	background-color: var(--neutral--400);
	margin-top: 40px;
	margin-bottom: 40px;
`;

export const FeatureItem = styled.li`
	display: flex;
	gap: 0.5rem;
	margin-bottom: 1rem;
	align-items: center;
	color: var(--neutral--600);
`;
export const LearnMoreBtn = styled(Link)`
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	cursor: pointer;
	text-decoration: none;
	border: 1px solid var(--neutral--300);
	background-color: var(--neutral--100);
	box-shadow: 0 4px 10px 0 var(--button-shadow--white-01);
	color: var(--neutral--800);
	text-align: center;
	border-radius: 14px;
	padding: 30px 38px;
	font-size: 18px;
	transition:
		box-shadow 0.3s,
		border-color 0.3s,
		transform 0.3s,
		background-color 0.3s,
		color 0.3s;
	width: 100%;
	margin: 2rem 0 0;
	svg path {
		transition: 300ms;
	}
	&:hover {
		background-color: var(--accent--primary-1);
		color: var(--neutral--100);
	}

	&:hover svg path {
		background-color: var(--accent--primary-1);
		stroke: var(--neutral--100);
	}
	&:active {
		background-color: var(--accent--primary-1);
		color: var(--neutral--100);
	}
	&:focus {
		background-color: var(--accent--primary-1);
		color: var(--neutral--100);
	}
`;
