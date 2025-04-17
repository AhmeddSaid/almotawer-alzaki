import { notFound, redirect } from "next/navigation";
import React from "react";
import Latest from "../../../../Library/page/Blog/Latest/Latest";
import Post from "@/Library/page/Blog/Post/Post";
import { fetchEnrichedPosts } from "@/utils/fetchEnrichedPosts";

export async function generateStaticParams() {
	const res = await fetch(`${process.env.WP_LOCAL_API_URL}/posts`);

	const data = await res.json();

	const postSlugEn = data.map((post: { slug: string }) => ({ locale: "en", slug: post.slug }));
	const postSlugAr = data.map((post: { slug: string }) => ({ locale: "ar", slug: post.slug }));

	const posts = [...postSlugEn, ...postSlugAr];
	return posts;
}

interface EnrichedPost {
	id: number;
	slug?: string;
	title: {
		rendered: string;
	};
	date: string;
	featuredImage?: string | null;
	category?: { name: string; slug: string };
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
	const res = await fetch(`${process.env.WP_LOCAL_API_URL}/posts?slug=${params.slug}`, {
		cache: "no-store",
	});
	if (!res.ok) {
		return redirect("/500");
	}

	const posts = await res.json();
	if (posts.length === 0) {
		return notFound();
	}

	const post = posts[0];
	const perPage = 5;

	// Fetch category and media data
	let categoryName = "Uncategorized";
	let featuredImage = null;

	if (post.categories && post.categories.length > 0) {
		const categoryRes = await fetch(
			`${process.env.WP_LOCAL_API_URL}/categories/${post.categories[0]}`,
		);
		const categoryData = await categoryRes.json();
		categoryName = categoryData.name;
	}

	if (post.featured_media) {
		const mediaRes = await fetch(`${process.env.WP_LOCAL_API_URL}/media/${post.featured_media}`);
		const mediaData = await mediaRes.json();
		featuredImage = mediaData.source_url;
	}
	//@ts-ignore
	const enrichedPosts: EnrichedPost[] = await fetchEnrichedPosts(
		`${process.env.WP_LOCAL_API_URL}/posts?per_page=${perPage}`,
	);

	return (
		<>
			<Post
				date={post.date}
				title={post.title.rendered}
				content={post.content.rendered}
				category={categoryName}
				featuredImage={featuredImage}
			/>
			<Latest posts={enrichedPosts} />
		</>
	);
};

export default PostPage;
