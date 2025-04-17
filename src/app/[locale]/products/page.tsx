import React from "react";
import Faq from "@/Library/_Pages/ContactUs/FAQ/FAQ";
import ProductsPageHero from "@/Library/page/Products/ProductsPageHero";
import HelpCard from "@/Library/page/Services/HelpCard/HelpCard";
import { fetchProducts } from "@/utils/fetchProducts";

const Page = async ({ params }: { params: { locale: string } }) => {
	const { locale } = params;
	try {
		const { parent, products } = await fetchProducts();

		return (
			<>
				<ProductsPageHero products={parent} productsData={products} locale={locale} />
				<HelpCard locale={locale} />
				<Faq />
			</>
		);
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
		return <div>Error fetching services: {errorMessage}</div>;
	}
};

export default Page;
