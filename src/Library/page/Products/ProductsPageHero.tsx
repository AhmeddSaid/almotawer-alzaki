"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { CardsContainer, ProductsPageContainer } from "./ProductsPage.styles";

export default function ProductsPageHero({
	products,
	productsData,
	locale,
}: {
	products: {
		slug: string;
		acf: {
			products_page_title: string;
			products_page_title_ar: string;
			products_page_description: string;
			products_page_description_ar: string;
		};
	};
	productsData: {
		slug: string;
		acf: {
			product_card_icon_url: string;
			product_card_price: string;
			product_card_name: string;
			product_card_name_ar: string;
			product_card_description: string;
			product_card_description_ar: string;
			product_card_feature_one: string;
			product_card_feature_two: string;
			product_card_feature_three: string;
			product_card_feature_four: string;
			product_card_feature_one_ar: string;
			product_card_feature_two_ar: string;
			product_card_feature_three_ar: string;
			product_card_feature_four_ar: string;
		};
	}[];
	locale?: string;
}) {
	const productsPage = {
		title: locale === "ar" ? products.acf.products_page_title_ar : products.acf.products_page_title,
		desc:
			locale === "ar"
				? products.acf.products_page_description_ar
				: products.acf.products_page_description,
		products: productsData.map(
			(product: {
				slug: string;
				acf: {
					product_card_icon_url: string;
					product_card_price: string;
					product_card_name: string;
					product_card_name_ar: string;
					product_card_description: string;
					product_card_description_ar: string;
					product_card_feature_one: string;
					product_card_feature_two: string;
					product_card_feature_three: string;
					product_card_feature_four: string;
					product_card_feature_one_ar: string;
					product_card_feature_two_ar: string;
					product_card_feature_three_ar: string;
					product_card_feature_four_ar: string;
				};
			}) => ({
				slug: product.slug,
				icon: product.acf.product_card_icon_url,
				price: product.acf.product_card_price,
				name: locale === "ar" ? product.acf.product_card_name_ar : product.acf.product_card_name,
				desc:
					locale === "ar"
						? product.acf.product_card_description_ar
						: product.acf.product_card_description,
				features:
					locale === "ar"
						? [
								product.acf.product_card_feature_one_ar,
								product.acf.product_card_feature_two_ar,
								product.acf.product_card_feature_three_ar,
								product.acf.product_card_feature_four_ar,
							]
						: [
								product.acf.product_card_feature_one,
								product.acf.product_card_feature_two,
								product.acf.product_card_feature_three,
								product.acf.product_card_feature_four,
							],
			}),
		),
	};

	return (
		<ProductsPageContainer>
			<h1>{productsPage.title}</h1>
			<p>{productsPage.desc}</p>
			<CardsContainer>
				{productsPage.products.map(
					(
						product: {
							slug: string | undefined;
							icon: string;
							price: string;
							name: string;
							desc: string;
							features: string[];
						},
						index: number,
					) => (
						<ProductCard
							slug={product.slug}
							key={index}
							icon={product.icon}
							price={product.price}
							name={product.name}
							desc={product.desc}
							features={product.features}
							locale={locale}
							index={index}
						/>
					),
				)}
			</CardsContainer>
		</ProductsPageContainer>
	);
}
