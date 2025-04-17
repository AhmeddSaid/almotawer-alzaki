"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GroupButtonOurProcess from "@/Library/common/CarouselOurProcess/GroupButtonOurProcess";
import OurProcessCard from "@/Library/page/Home/OurProcessSection/OurProcessCard";
import uuid from "@/utils/uuid";

const CarouselOurProcess = ({
	locale,
	data,
}: {
	locale: string;
	data: {
		title: string;
		body: string;
		image: string;
	}[];
}) => {
	const processes = data;

	return (
		<Carousel
			additionalTransfrom={0}
			arrows={false}
			customButtonGroup={<GroupButtonOurProcess />}
			autoPlaySpeed={3000}
			centerMode={false}
			className=""
			containerClass="container-with-dots"
			dotListClass=""
			draggable
			focusOnSelect={false}
			infinite
			itemClass=""
			keyBoardControl
			minimumTouchDrag={80}
			pauseOnHover
			renderArrowsWhenDisabled={false}
			renderButtonGroupOutside={true}
			renderDotsOutside={false}
			responsive={{
				desktop: {
					breakpoint: {
						max: 3000,
						min: 1024,
					},
					items: 1,
					partialVisibilityGutter: 40,
				},
				mobile: {
					breakpoint: {
						max: 464,
						min: 0,
					},
					items: 1,
					partialVisibilityGutter: 30,
				},
				tablet: {
					breakpoint: {
						max: 1024,
						min: 464,
					},
					items: 1,
					partialVisibilityGutter: 30,
				},
			}}
			rewind={false}
			rewindWithAnimation={false}
			rtl={locale === "ar"}
			shouldResetAutoplay
			showDots={false}
			sliderClass=""
			slidesToSlide={1}
			swipeable
		>
			{processes.map((process, i) => (
				<OurProcessCard key={uuid} process={{ ...process, index: i + 1 }} />
			))}
		</Carousel>
	);
};

export default CarouselOurProcess;
