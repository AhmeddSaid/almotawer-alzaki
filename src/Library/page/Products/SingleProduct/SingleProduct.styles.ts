import styled from "styled-components";
import { Section } from "./../../../common/Grids/Grids";
export const ProductContainer = styled(Section)`
	padding: 6rem 0;
	flex-wrap: wrap;
	width: 80%;
`;
export const ProductImage = styled.div`
	/* width: 40%; */
	display: flex;
	justify-content: center;
	/* align-items: center; */
	height: 100%;
	overflow: hidden;
	img {
		border-radius: 1rem;
		width: 75%;
		height: 75%;
		object-fit: cover;
		-webkit-user-drag: none;
	}
`;
export const ProductDetails = styled.div`
	/* width: 40%; */
	display: flex;
	flex-direction: column;
`;
export const ProductHeader = styled.div`
	border-bottom: 1px dotted #6e7a91;
	h1 {
		font-size: 3rem;
		font-weight: 700;
		color: var(--neutral--800);
	}
	h2 {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		color: var(--neutral--800);
	}
`;
export const Group = styled.div`
	margin: 1rem 0;
	h4 {
		margin: 0.5rem 0;
		font-size: 18px;
		font-weight: 700;
		color: var(--accent--primary-1);
	}
	ul {
		margin: 0 2rem;
	}
	li {
		list-style: disc;
		color: #6e7a91;
		font-size: 18px;
		font-weight: 500;
		margin-top: 0;
	}
`;
export const Note = styled.p`
	color: #6e7a91;
	font-size: 18px;
	font-weight: 500;
	line-height: 1.667em;
	margin-top: 0;
	margin-bottom: 24px;
`;
export const AddToCartBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #eee;
	width: 100%;
	min-height: 8rem;
	border-radius: 1rem;
	padding: 2rem;
`;
export const QtyContainer = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	font-size: 18px;
	font-weight: 500;
	color: var(--neutral--800);
`;
export const Price = styled.span`
	font-size: 1.5rem;
	font-weight: 700;
	color: var(--neutral--800);
`;
export const Qty = styled.div`
	width: 40%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	font-size: 18px;
	font-weight: 500;
	color: var(--neutral--800);
	border: 1px solid grey;
	background: #fff;
	border-radius: 0.5rem;
	@media screen and (max-width: 767px) {
		width: fit-content;
	}
	button {
		border: none;
		height: 100%;
		background: none;
		cursor: pointer;
		font-size: 18px;
		font-weight: 500;
		color: var(--neutral--800);
		padding: 0.5rem 1rem;
	}
	& :first-child {
		border-left: 1px solid grey;
	}
	& :last-child {
		border-right: 1px solid grey;
	}
`;
export const QtyDivider = styled.div`
	width: 100%;
	height: 4px;
	border-radius: 2rem;
	background-color: #fff;
	margin: 2rem 0;
`;
export const ButtonGroup = styled.div`
	display: flex;
	width: 90%;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 2rem;
	margin: 2rem 0 0;
	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
	button {
		/* padding: 1rem 5rem; */
		width: 40%;
		height: 4rem;
		background-color: var(--neutral--800);
		color: #fff;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: 300ms;
		font-weight: 700;
		border: 1px solid var(--neutral--800);
		&:hover {
			background-color: #fff;
			color: var(--neutral--800);
		}
		@media screen and (max-width: 767px) {
			width: 80%;
		}
	}
`;
