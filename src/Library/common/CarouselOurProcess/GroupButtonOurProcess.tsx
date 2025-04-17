"use client";
import React from "react";
import {
	ArrowsProcessShell,
	LeftArrowProcessStyles,
	RightArrowProcessStyles,
} from "@/Library/common/CarouselOurProcess/GroupButtonOurProcess.styles"; // eslint-disable-next-line
import LeftArrow from "@/Library/common/Icons/LeftArrow/LeftArrow";
import RightArrow from "@/Library/common/Icons/RightArrow/RightArrow";

// eslint-disable-next-line
// @ts-ignore
const GroupButtonOurProcess = props => {
	// eslint-disable-next-line react/prop-types
	const { next, previous, ...rest } = props;

	const {
		// @ts-ignore
		carouselState: { currentSlide },
	} = rest;
	return (
		<ArrowsProcessShell className="carousel-button-group">
			<LeftArrowProcessStyles
				className={currentSlide === 0 ? "disable" : ""}
				onClick={() => previous()}
			>
				<LeftArrow />
			</LeftArrowProcessStyles>
			<RightArrowProcessStyles onClick={() => next()}>
				{" "}
				<RightArrow />
			</RightArrowProcessStyles>
		</ArrowsProcessShell>
	);
};

export default GroupButtonOurProcess;
