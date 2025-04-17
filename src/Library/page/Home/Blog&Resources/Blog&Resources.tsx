"use client";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styles from "./../../../common/Grids/Spaces.module.css";
import Button from "@/Library/common/Button/Button";
import CarouselBlogs from "@/Library/common/CarouselBlogs/CarouselBlogs";
import { Col, Row, Section } from "@/Library/common/Grids/Grids";
import PageHeader from "@/Library/common/PageHeader/PageHeader";
import { BlogResourcesShell } from "@/Library/page/Home/Blog&Resources/Blog&Resources.styles";
import "animate.css/animate.compat.css";

interface BlogPost {
	featuredImage: string | null;
	category: string;
	id: number;
	title: { rendered: string };
	featured_media: number | null;
	categories: number[];
	slug: string;
	date: string;
}

const BlogResources = ({ posts }: { posts: BlogPost[] }) => {
	return (
		<BlogResourcesShell>
			<Section>
				<Row>
					<Col md={6}>
						<ScrollAnimation offset={0} animateIn={"fadeIn"}>
							<PageHeader title={"Blog & resources"} subtitle={"Browse our articles & resources"} />
						</ScrollAnimation>
					</Col>
				</Row>
			</Section>

			<div className={styles.marginTop48}>
				<ScrollAnimation offset={0} animateIn={"fadeIn"}>
					<CarouselBlogs posts={posts} />
				</ScrollAnimation>
			</div>

			<Section className={"BlogResourcesButton"}>
				<Link href={"/blog"}>
					<Button body={"Browse All Articles"} size={"med"} />
				</Link>
			</Section>
		</BlogResourcesShell>
	);
};

export default BlogResources;
