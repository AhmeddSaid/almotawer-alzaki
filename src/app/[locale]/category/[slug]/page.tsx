import { notFound } from "next/navigation";
import React from "react";
import CategoryPosts from "../CategoryPosts/CategoryPosts";

const CategoryPageWrapper = async ({ params }: { params: { slug: string } }) => {
	const categorySlug = params.slug;

	try {
		const categoryRes = await fetch(
			`${process.env.WP_LOCAL_API_URL}/categories/?slug=${categorySlug}`,
		);
		if (!categoryRes.ok) throw new Error("Failed to fetch category.");

		const categoryData = await categoryRes.json();
		if (!Array.isArray(categoryData) || categoryData.length === 0) {
			return notFound();
		}

		const category = categoryData[0].name;

		const postsRes = await fetch(
			`${process.env.WP_LOCAL_API_URL}/posts?categories=${categoryData[0].id}`,
		);
		if (!postsRes.ok) throw new Error("Failed to fetch posts.");

		const posts = await postsRes.json();
		if (!Array.isArray(posts) || posts.length === 0) {
			return <div>No posts found in this category.</div>;
		}

		const allCategoriesRes = await fetch(`${process.env.WP_LOCAL_API_URL}/categories`);
		if (!allCategoriesRes.ok) throw new Error("Failed to fetch all categories.");

		const allCategories = await allCategoriesRes.json();

		const postsWithImages = await Promise.all(
			posts.map(async post => {
				let featuredImage = null;
				if (post.featured_media) {
					const mediaRes = await fetch(
						`${process.env.WP_LOCAL_API_URL}/media/${post.featured_media}`,
					);
					if (mediaRes.ok) {
						const mediaData = await mediaRes.json();
						featuredImage = mediaData.source_url;
					}
				}
				return { ...post, featuredImage };
			}),
		);

		return <CategoryPosts posts={postsWithImages} category={category} categories={allCategories} />;
	} catch (error) {
		// Check if error is an instance of Error and handle it
		if (error instanceof Error) {
			return <div>Something went wrong: {error.message}</div>;
		} else {
			return <div>Something went wrong.</div>;
		}
	}
};

export default CategoryPageWrapper;
