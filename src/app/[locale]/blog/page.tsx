import React from "react";
import Blog from "@/Library/page/Blog/Blog/Blog";
import { fetchEnrichedPosts } from "@/utils/fetchEnrichedPosts";

const Page = async ({ params }: { params: { locale: string } }) => {
	const { locale } = params;
	const enrichedPosts = await fetchEnrichedPosts(`${process.env.WP_LOCAL_API_URL}/posts`);

	const firstPostImage: string | null = enrichedPosts[0]?.featuredImage ?? null;

	const categories: { name: string; slug: string }[] = [
		{ name: locale === "ar" ? "الكل" : "All", slug: "all" },
		...Array.from(new Set(enrichedPosts.map(post => post.category.name))).map(name => ({
			name,
			slug: name.toLowerCase().replace(/\s+/g, "-"),
		})),
	];
	//@ts-ignore
	return (
		<Blog
			posts={enrichedPosts}
			firstPostImage={firstPostImage}
			categories={categories}
			locale={locale}
		/>
	);
};

export default Page;
