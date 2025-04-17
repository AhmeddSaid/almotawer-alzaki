"use client";

import Link from "next/link";
import React from "react";
import {
	Category,
	CategoryHolder,
	CategoryPostsContainer,
	PostsContainer,
	Title,
} from "./CategoryPosts.styles";
import BlogResourcesCard from "@/Library/page/Home/Blog&Resources/BlogResourcesCard";
import { formatDateName } from "@/helper/helper";

interface BlogPost {
	id: number;
	slug: string;
	title: {
		rendered: string;
	};
	date: string;
	featuredImage?: string | null;
	category?: string;
}

interface CategoryPostsProps {
	posts: BlogPost[];
	category: string;
	categories: { name: string; slug: string }[];
}

const CategoryPosts: React.FC<CategoryPostsProps> = ({ posts, category, categories }) => {
	return (
		<CategoryPostsContainer>
			<Title>{category} Posts</Title>
			<CategoryHolder>
				<Link href="/blog" style={{ marginRight: "10px" }}>
					<Category>All</Category>
				</Link>
				{categories.map(cat => (
					<Link key={cat.slug} href={`/category/${cat.slug}`} style={{ marginRight: "10px" }}>
						<Category className={cat.slug === category.toLowerCase() ? "active" : ""}>
							{cat.name}
						</Category>
					</Link>
				))}
			</CategoryHolder>
			<PostsContainer>
				{posts.map(post => (
					<BlogResourcesCard
						key={post.id}
						title={post.title.rendered}
						image={post.featuredImage ?? undefined}
						link={`/blog/${post.slug}`}
						category={category}
						date={formatDateName(post.date)}
					/>
				))}
			</PostsContainer>
		</CategoryPostsContainer>
	);
};

export default CategoryPosts;
