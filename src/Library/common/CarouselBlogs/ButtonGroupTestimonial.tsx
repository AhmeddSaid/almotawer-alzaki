"use client";
import React from "react";
import {
	ArrowsShell,
	LeftArrowStyles,
	RightArrowStyles,
} from "@/Library/common/CaruselTestimonials/ButtonGroup.styles";
import LeftArrow from "@/Library/common/Icons/LeftArrow/LeftArrow";
import RightArrow from "@/Library/common/Icons/RightArrow/RightArrow";

// eslint-disable-next-line
// @ts-ignore
const ButtonGroup = props => {
	// eslint-disable-next-line react/prop-types
	const { next, previous, ...rest } = props;

	const {
		// @ts-ignore
		carouselState: { currentSlide },
	} = rest;
	return (
		<ArrowsShell className="carousel-button-group">
			<LeftArrowStyles className={currentSlide === 0 ? "disable" : ""} onClick={() => previous()}>
				<LeftArrow />
			</LeftArrowStyles>
			<RightArrowStyles onClick={() => next()}>
				{" "}
				<RightArrow />
			</RightArrowStyles>
		</ArrowsShell>
	);
};

export default ButtonGroup;
