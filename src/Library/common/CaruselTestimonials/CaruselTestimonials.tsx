"use client";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import ButtonGroup from "@/Library/common/CarouselBlogs/ButtonGroupTestimonial";
import { Flexbox } from "@/Library/common/Grids/Grids";
import {
	Divider,
	LinkContainer,
	TestimonialsCard,
	TestimonialsCardInfo,
	TestimonialsCardInfoH3,
} from "@/Library/page/Home/Testimonials/Testimonials.styles";

const CaruselTestimonials = ({
	data,
}: {
	locale: string;
	data: {
		reviews: {
			highlight?: string;
			title: string;
			body: string;
			reviewerName: string;
			reviewerJobTitle: string;
			reviewCompanyName: string;
			agencyLink?: string;
		}[];
	};
}) => {
	// const testimonials: Testimonial[] = [
	// 	{
	// 		text:
	// 			locale === "ar"
	// 				? "ساعدتنا المطور الذكي في زيادة <span>نسبة الاحتفاظ بنسبة %300</span>"
	// 				: "“Inbound helped us to increase our <span>retention by 300%</span>”",
	// 		description:
	// 			locale === "ar"
	// 				? "منذ أن بدأنا العمل مع المطور الذكي، شهدنا تحولًا كبيرًا في استراتيجيتنا التسويقية. زادت نسبة الاحتفاظ بالعملاء بشكل ملحوظ، مما أدى إلى تعزيز نجاحنا ونمو أعمالنا"
	// 				: "Since we started working with Inbound, we've experienced a significant transformation in our marketing strategy. Our customer retention rates have noticeably increased, leading to greater success and growth for our business.",
	// 		name: locale === "ar" ? "مات باركر" : "Matt Parker",
	// 		position: locale === "ar" ? "مسوق نمو في" : "Growth Marketer at",
	// 		agencyLink: "",
	// 	},
	// 	{
	// 		text:
	// 			locale === "ar"
	// 				? "ساعدتنا المطور الذكي في زيادة <span>نسبة الاحتفاظ بنسبة %300</span>"
	// 				: "“Inbound helped us to increase our <span>retention by 300%</span>”",
	// 		description:
	// 			locale === "ar"
	// 				? "منذ أن بدأنا العمل مع المطور الذكي، شهدنا تحولًا كبيرًا في استراتيجيتنا التسويقية. زادت نسبة الاحتفاظ بالعملاء بشكل ملحوظ، مما أدى إلى تعزيز نجاحنا ونمو أعمالنا"
	// 				: "Since we started working with Inbound, we've experienced a significant transformation in our marketing strategy. Our customer retention rates have noticeably increased, leading to greater success and growth for our business.",
	// 		name: locale === "ar" ? "مات باركر" : "Matt Parker",
	// 		position: locale === "ar" ? "مسوق نمو في" : "Growth Marketer at",
	// 		agencyLink: "",
	// 	},
	// 	{
	// 		text:
	// 			locale === "ar"
	// 				? "ساعدتنا المطور الذكي في زيادة <span>نسبة الاحتفاظ بنسبة %300</span>"
	// 				: "“Inbound helped us to increase our <span>retention by 300%</span>”",
	// 		description:
	// 			locale === "ar"
	// 				? "منذ أن بدأنا العمل مع المطور الذكي، شهدنا تحولًا كبيرًا في استراتيجيتنا التسويقية. زادت نسبة الاحتفاظ بالعملاء بشكل ملحوظ، مما أدى إلى تعزيز نجاحنا ونمو أعمالنا"
	// 				: "Since we started working with Inbound, we've experienced a significant transformation in our marketing strategy. Our customer retention rates have noticeably increased, leading to greater success and growth for our business.",
	// 		name: locale === "ar" ? "مات باركر" : "Matt Parker",
	// 		position: locale === "ar" ? "مسوق نمو في" : "Growth Marketer at",
	// 		agencyLink: "",
	// 	},
	// ];

	return (
		<Carousel
			additionalTransfrom={0}
			arrows={false}
			customButtonGroup={<ButtonGroup />}
			autoPlay
			autoPlaySpeed={3000}
			centerMode={true}
			className="testimonials-carousel-parent"
			containerClass="container"
			draggable
			focusOnSelect={false}
			infinite
			itemClass="testimonials-carousel-item"
			keyBoardControl
			minimumTouchDrag={80}
			pauseOnHover
			renderButtonGroupOutside={true}
			renderDotsOutside={false}
			// partialVisible
			responsive={{
				desktop: {
					breakpoint: {
						max: 3000,
						min: 1024,
					},
					items: 1,
					// partialVisibilityGutter: 120,
				},
				mobile: {
					breakpoint: {
						max: 464,
						min: 0,
					},
					items: 1,
				},
				tablet: {
					breakpoint: {
						max: 1024,
						min: 464,
					},
					items: 1,
				},
			}}
			rewind={false}
			rewindWithAnimation={false}
			rtl={false}
			shouldResetAutoplay
			showDots={true}
			sliderClass=""
			slidesToSlide={1}
			swipeable
		>
			{data.reviews.map((testimonial, index) => (
				<Flexbox key={index} justify="center" as={"li"}>
					<TestimonialsCard>
						<TestimonialsCardInfo>
							<TestimonialsCardInfoH3>
								{testimonial.title} <span>{testimonial.highlight}</span>
							</TestimonialsCardInfoH3>
							<p className={"testimonalP"}>{testimonial.body}</p>

							<Divider />

							<LinkContainer>
								{testimonial.agencyLink && (
									<span>
										<Link href={testimonial.agencyLink}>{testimonial.reviewCompanyName}</Link>
									</span>
								)}
								<span className={"Bold"}>{testimonial.reviewerName}</span>{" "}
								<span>, {testimonial.reviewerJobTitle}</span>
							</LinkContainer>
						</TestimonialsCardInfo>
					</TestimonialsCard>
				</Flexbox>
			))}
		</Carousel>
	);
};

export default CaruselTestimonials;
