"use client";
import React from "react";
import {
	ArrowsBlogShell,
	LeftArrowBlogStyles,
	RightArrowBlogStyles,
} from "@/Library/common/CarouselBlogs/ButtonGroupBlogs.styles"; // eslint-disable-next-line
import LeftArrow from "@/Library/common/Icons/LeftArrow/LeftArrow";
import RightArrow from "@/Library/common/Icons/RightArrow/RightArrow";

// eslint-disable-next-line
// @ts-ignore
const ButtonGroupBlogs = props => {
	// eslint-disable-next-line react/prop-types
	const { next, previous, ...rest } = props;

	const {
		// @ts-ignore
		carouselState: { currentSlide },
	} = rest;
	return (
		<ArrowsBlogShell className="carousel-button-group">
			<LeftArrowBlogStyles
				className={currentSlide === 0 ? "disable" : ""}
				onClick={() => previous()}
			>
				<LeftArrow />
			</LeftArrowBlogStyles>
			<RightArrowBlogStyles onClick={() => next()}>
				<RightArrow />
			</RightArrowBlogStyles>
		</ArrowsBlogShell>
	);
};

export default ButtonGroupBlogs;
