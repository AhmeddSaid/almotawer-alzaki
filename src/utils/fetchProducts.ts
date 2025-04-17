export const fetchProducts = async (
	slug: string = "products-parent-dont-delete-me",
	cacheType: RequestCache = "default",
) => {
	const res = await fetch(`${process.env.WP_LOCAL_API_URL}/pages/?slug=${slug}`, {
		cache: cacheType,
	});

	if (!res.ok) {
		throw new Error(`Failed to fetch products with slug: ${slug}`);
	}

	const data = await res.json();

	if (data[0]?.id) {
		const parentID = process.env.PRODUCT_PARENT_ID;

		const productDataRes = await fetch(`${process.env.WP_LOCAL_API_URL}/pages?parent=${parentID}`, {
			cache: cacheType,
		});

		const productData = await productDataRes.json();

		const productsWithIcons = await Promise.all(
			productData.map(
				async (product: {
					acf: {
						product_card_icon: number;
						product_card_icon_url: string;
					};
				}) => {
					if (product.acf.product_card_icon) {
						const mediaRes = await fetch(
							`${process.env.WP_LOCAL_API_URL}/media/${product.acf.product_card_icon}`,
						);
						const mediaData = await mediaRes.json();

						return {
							...product,
							acf: {
								...product.acf,
								// eslint-disable-next-line camelcase
								product_card_icon_url: mediaData.source_url,
							},
						};
					}
					return product;
				},
			),
		);

		return { parent: data[0], products: productsWithIcons };
	}

	return { parent: data[0], products: [] };
};
