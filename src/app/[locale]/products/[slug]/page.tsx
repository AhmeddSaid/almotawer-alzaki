import { cookies } from "next/headers";
import React from "react";
import SingleProduct from "@/Library/page/Products/SingleProduct/SingleProduct";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
	const cookiesJar = cookies();
	// @ts-ignore
	const locale = cookiesJar.get("NEXT_LOCALE")?.value ?? "ar";

	const { slug } = params;

	const res = await fetch(`${process.env.WP_LOCAL_API_URL}/pages/?slug=${slug}`);
	if (!res.ok) {
		return <div>Error loading content</div>;
	}
	const productData = await res.json();
	const product = productData[0];
	const mediaIds = [product.acf.product_image];

	const mediaPromises = mediaIds.map(id =>
		fetch(`${process.env.WP_LOCAL_API_URL}/media/${id}`).then(mediaRes => mediaRes.json()),
	);
	const mediaData = await Promise.all(mediaPromises);

	const mediaMap: { [key: number]: string } = {};
	mediaData.forEach(media => {
		if (media.source_url) {
			mediaMap[media.id] = media.source_url;
		}
	});

	const structuredProduct = {
		id: product.acf.product_id,
		image: mediaMap[product.acf.product_image],
		price: product.acf.product_price,
		name: locale === "ar" ? product.acf.product_name_ar : product.acf.product_name,
		desc: locale === "ar" ? product.acf.product_description_ar : product.acf.product_description,
	};

	return <SingleProduct product={structuredProduct} locale={locale} />;
};

export default ProductPage;
