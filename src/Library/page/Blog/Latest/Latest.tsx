"use client";

import Link from "next/link";
import React from "react";
import {
	Button,
	ButtonText,
	Container,
	LatestPosts,
	LatestPostsContainer,
	PostsWrapper,
	Title,
} from "./Latest.styles";
import BlogResourcesCard from "@/Library/page/Home/Blog&Resources/BlogResourcesCard";
import { formatDateName } from "@/helper/helper";

interface BlogPost {
	id: number;
	slug?: string;
	title: {
		rendered: string;
	};
	date: string;
	featuredImage?: string | null;
	category?: { name: string; slug: string };
}

const Latest = ({ posts }: { posts: BlogPost[] }) => {
	if (posts.length === 0) {
		return <div>No latest posts available.</div>;
	}

	const latestThreePosts = posts.slice(0, 3);

	return (
		<LatestPosts>
			<LatestPostsContainer>
				<Container>
					<Title>Latest Articles</Title>
					<Link href={"/blog"}>
						<Button>
							<ButtonText>Browse all articles</ButtonText>
						</Button>
					</Link>
				</Container>
				<PostsWrapper>
					{latestThreePosts.map((post: BlogPost) => (
						<BlogResourcesCard
							key={post.id}
							title={post.title.rendered}
							image={post.featuredImage || ""} // Use the featuredImage
							link={`/blog/${post.slug}`}
							category={post.category?.name || ""}
							date={formatDateName(post.date)}
						/>
					))}
				</PostsWrapper>
			</LatestPostsContainer>
		</LatestPosts>
	);
};

export default Latest;
