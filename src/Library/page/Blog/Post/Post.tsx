"use client";
import parse from "html-react-parser";
import React from "react";
import { HalfCircle, TextDivider } from "@/Library/page/Blog/Blog/Blog.styles";
import {
	Img,
	ImgContainer,
	ParsedContent,
	PostContainer,
	PostDate,
	PostDetailPage,
	PostHero,
	PostHeroContainer,
	PostTitle,
} from "@/Library/page/Blog/Post/Post.style";
import { formatDateName } from "@/helper/helper";

const Post = ({
	date,
	title,
	content,
	category,
	featuredImage,
}: {
	date: string;
	title: string;
	content: string;
	category: string;
	featuredImage: string;
}) => {
	return (
		<PostDetailPage>
			{featuredImage && <PostHeroContainer />}
			<PostHero className={`${featuredImage ? "" : "no-image"}`}>
				<PostDate>
					{category}
					<TextDivider />
					{formatDateName(date)}
				</PostDate>

				<PostTitle>{title}</PostTitle>
				{featuredImage && (
					<ImgContainer>
						<Img src={featuredImage} alt={title} />
						<HalfCircle className="circle1" color={"#ffc32a"} rotate={"270"} />
						<HalfCircle className="circle2" color={"#ff5f55"} rotate={"180"} />
						<HalfCircle className="circle3" color={"#4187ff"} rotate={"180"} />
						<HalfCircle className="circle4" color={"#77e36e"} rotate={"180"} />
					</ImgContainer>
				)}
			</PostHero>

			<PostContainer>
				<ParsedContent>{parse(content)}</ParsedContent>
				{/* Pass the posts prop to Latest component */}
			</PostContainer>
		</PostDetailPage>
	);
};

export default Post;
