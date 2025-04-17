"use client";

import Link from "next/link";
import React from "react";
import {
	BlogContainer,
	BlogMain,
	BlogTitle,
	Container,
	FilterContainer,
	FilterItem,
	FilterItemContainer,
	FilterTitle,
	FirstPost,
	Img,
	Post,
	Posts,
	PostsContainer,
	PostTitle,
	RemainingPosts,
	TagnDate,
	TextDivider,
} from "@/Library/page/Blog/Blog/Blog.styles";
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

interface Category {
	name: string;
	slug: string;
}

interface BlogProps {
	posts: BlogPost[];
	firstPostImage: string | null;
	categories: Category[];
	locale: string;
	slug?: string;
}

const Blog = ({ posts, firstPostImage, categories, locale }: BlogProps) => {
	if (posts.length === 0) {
		return <div>No posts available.</div>;
	}

	const firstPost = posts[0];
	const remainingPosts = posts.slice(1, 4);

	return (
		<>
			<Container>
				<BlogContainer>
					<BlogTitle>{locale === "ar" ? "المدونة والموارد" : "Blog & Resources"}</BlogTitle>
					<BlogMain>
						<FirstPost>
							{firstPostImage && <Img src={firstPostImage} alt={firstPost?.title?.rendered} />}
							<TagnDate>
								<span>{firstPost?.category?.name ?? "Uncategorized"}</span>
								<TextDivider />
								<span>{formatDateName(firstPost?.date)}</span>
							</TagnDate>
							<Link href={`/blog/${firstPost?.slug}`} style={{ color: "white" }}>
								<PostTitle>{firstPost?.title?.rendered}</PostTitle>
							</Link>
						</FirstPost>
						<RemainingPosts>
							{remainingPosts.map(post => (
								<Post key={post.id}>
									<TagnDate>
										<span>{post.category?.name ?? "Uncategorized"}</span>
										<TextDivider />
										<span>{formatDateName(post.date)}</span>
									</TagnDate>
									<Link href={`/blog/${post.slug}`} style={{ color: "white" }}>
										<PostTitle>{post.title.rendered}</PostTitle>
									</Link>
								</Post>
							))}
						</RemainingPosts>
					</BlogMain>
				</BlogContainer>
			</Container>

			<PostsContainer>
				<FilterContainer>
					<FilterTitle>{locale === "ar" ? "أحدث المنشورات" : "Latest Posts"}</FilterTitle>
					<FilterItemContainer>
						{categories.map((category, index) => (
							<Link key={category.slug} href={`/category/${category.slug}`}>
								<FilterItem className={index === 0 ? "first-link" : "link"}>
									{category.name}
								</FilterItem>
							</Link>
						))}
					</FilterItemContainer>
				</FilterContainer>

				<Posts>
					{posts.map(post => (
						<BlogResourcesCard
							key={post.id}
							title={post.title.rendered}
							image={post.featuredImage || ""}
							link={`/blog/${post.slug}`}
							category={post.category?.name || ""}
							date={formatDateName(post.date)}
						/>
					))}
				</Posts>
			</PostsContainer>
		</>
	);
};

export default Blog;
