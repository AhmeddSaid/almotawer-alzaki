import Image from "next/image";
import React from "react";
import {
	Desc,
	Divider,
	FeatureItem,
	IconName,
	LearnMoreBtn,
	Price,
	ProductCardHolder,
} from "./ProductsPage.styles";
import RightArrow from "@/Library/common/Icons/RightArrow/RightArrow";
import { formatPrice } from "@/helper/helper";
import uuid from "@/utils/uuid";

export default function ProductCard({
	slug = "",
	icon = "/icons/product-card-1.png",
	name = "Standard",
	price = "2500",
	desc = "This plan is ideal for small businesses looking to boost their online presence with essential marketing services at an affordable rate",
	features = [
		"Social Media Marketing",
		"SEO: Search Engine Optimization",
		"Paid Advertising",
		"Normal Support",
	],
	locale,
	index,
}: {
	slug?: string;
	icon?: string;
	name?: string;
	price?: string;
	desc?: string;
	features?: string[];
	locale?: string;
	index?: number;
}) {
	const CheckIcon = ({ fill = "#1f3154" }: { fill?: string }) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 72 72"
				width={24}
				height={24}
				fill={fill}
			>
				<path d="M57.658,12.643c1.854,1.201,2.384,3.678,1.183,5.532l-25.915,40c-0.682,1.051-1.815,1.723-3.064,1.814	C29.764,59.997,29.665,60,29.568,60c-1.146,0-2.241-0.491-3.003-1.358L13.514,43.807c-1.459-1.659-1.298-4.186,0.36-5.646	c1.662-1.46,4.188-1.296,5.646,0.361l9.563,10.87l23.043-35.567C53.329,11.971,55.806,11.442,57.658,12.643z" />
			</svg>
		);
	};

	return (
		<ProductCardHolder>
			<IconName>
				<Image src={icon} alt={""} width={50} height={50} />
				<h2>{name}</h2>
			</IconName>
			<Price>{formatPrice(Number(price), "AED")}</Price>
			<Desc>{desc}</Desc>
			<Divider></Divider>
			<div>{locale === "ar" ? "ماذا يتضمن؟" : "What's included?"}</div>
			<ul>
				{features?.map(feature => (
					<FeatureItem key={uuid}>
						{/* <Image src={"/icons/checkmark.svg"} alt={""} width={24} height={24} />{" "} */}
						<CheckIcon fill={index === 1 ? "#4b8eff" : ""} />
						<span>{feature}</span>
					</FeatureItem>
				))}
			</ul>
			<LearnMoreBtn href={`/products/${slug}`}>
				<span>{locale === "ar" ? "اقرأ المزيد" : "Learn More"}</span>{" "}
				<RightArrow dir={locale === "ar"} color="#1f3154" />
			</LearnMoreBtn>
		</ProductCardHolder>
	);
}
