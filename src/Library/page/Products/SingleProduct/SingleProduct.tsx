"use client";
import parse from "html-react-parser";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	AddToCartBox,
	ButtonGroup,
	Group,
	// Note,
	Price,
	ProductContainer,
	ProductDetails,
	ProductHeader,
	ProductImage,
	Qty,
	QtyContainer,
	QtyDivider,
} from "./SingleProduct.styles";
import { Row, Col } from "@/Library/common/Grids/Grids";
import { formatPrice } from "@/helper/helper";
import { addToCart } from "@/redux/slices/cartSlice";

export default function SingleProduct({
	product,
	locale,
}: {
	product: {
		id: number;
		image: string;
		price: number;
		name: string;
		desc: string;
	};
	locale: string;
}) {
	const [qty, setQty] = useState(1);
	const price = product.price;
	const total = qty * price;
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		const productData = {
			id: product.id,
			name: product.name,
			qty,
			price,
			total: qty * price,
		};

		dispatch(addToCart(productData));
	};

	return (
		<ProductContainer>
			<Row>
				<Col xl={6}>
					<ProductImage>
						<Image src={product.image} alt="" width={500} height={500} />
					</ProductImage>
				</Col>
				<Col xl={6}>
					<ProductDetails>
						<ProductHeader>
							<h1>{product.name}</h1>
							<h2>{formatPrice(price, "AED")}</h2>
						</ProductHeader>
						<Group>{parse(product.desc)}</Group>
						{/* <Note>
					وأخيرًا، يأتي الاشتراك مع ضمان طوال فترة الاشتراك. وخدمة عملاء ما بعد البيع تعمل على مدار
					24 ساعة.
				</Note> */}

						<AddToCartBox>
							<QtyContainer>
								<label>{locale === "ar" ? "الكمية :" : "Quantity :"}</label>
								<Qty>
									<button disabled={qty <= 1} onClick={() => setQty(qty - 1)}>
										-
									</button>
									<span>{qty}</span>
									<button onClick={() => setQty(qty + 1)}>+</button>
								</Qty>
							</QtyContainer>
							<QtyDivider></QtyDivider>
							<QtyContainer>
								<label>{locale === "ar" ? "السعر :" : "Price :"}</label>
								<Price>{formatPrice(total, "AED")}</Price>
							</QtyContainer>
							<ButtonGroup>
								<button onClick={handleAddToCart}>
									{locale === "ar" ? "اضافه الى العربة" : "Add To Cart"}
								</button>
								<button>{locale === "ar" ? "اشتر الأن" : "Buy Now"}</button>
							</ButtonGroup>
						</AddToCartBox>
					</ProductDetails>
				</Col>
			</Row>
		</ProductContainer>
	);
}
