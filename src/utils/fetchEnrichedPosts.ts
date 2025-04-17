type BlogPost = {
	id: number;
	title: { rendered: string };
	content: { rendered: string };
	date: string;
	featured_media?: number;
	categories?: number[];
};

type EnrichedPost = BlogPost & {
	featuredImage: string | null;
	category: { name: string; slug: string };
};

export const fetchEnrichedPosts = async (url: string): Promise<EnrichedPost[]> => {
	try {
		const res = await fetch(url);

		// Check if response is okay
		if (!res.ok) {
			throw new Error(`Error fetching posts: ${res.statusText}`);
		}

		const data: BlogPost[] = await res.json();

		if (!Array.isArray(data) || data.length === 0) {
			return [];
		}

		return await Promise.all(
			data.map(async post => {
				let featuredImage: string | null = null;

				// Fetch featured media if it exists
				if (post.featured_media) {
					try {
						const mediaResponse = await fetch(
							`${process.env.WP_LOCAL_API_URL}/media/${post.featured_media}`,
						);

						if (!mediaResponse.ok) {
							throw new Error(`Error fetching media: ${mediaResponse.statusText}`);
						} else {
							const mediaData = await mediaResponse.json();
							featuredImage = mediaData.source_url;
						}
					} catch (error) {
						throw new Error(`Error fetching featured media: ${error}`);
					}
				}

				// Fetch category if it exists
				let category = { name: "Uncategorized", slug: "" };
				if (post.categories && post.categories.length > 0) {
					try {
						const categoryResponse = await fetch(
							`${process.env.WP_LOCAL_API_URL}/categories/${post.categories[0]}`,
						);

						if (!categoryResponse.ok) {
							throw new Error(`Error fetching category: ${categoryResponse.statusText}`);
						} else {
							const categoryData = await categoryResponse.json();
							category = { name: categoryData.name, slug: categoryData.slug };
						}
					} catch (error) {
						throw new Error(`Error fetching Category: ${error}`);
					}
				}

				return {
					...post,
					featuredImage,
					category,
				};
			}),
		);
	} catch (error) {
		throw new Error(`Error in fetchEnrichedPosts: ${error}`);
	}
};
