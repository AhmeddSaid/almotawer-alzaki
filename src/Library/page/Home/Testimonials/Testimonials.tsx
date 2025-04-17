"use client";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "@/Library/common/Button/Button";
import CaruselTestimonials from "@/Library/common/CaruselTestimonials/CaruselTestimonials";
import { Col, Row, Section } from "@/Library/common/Grids/Grids";
import PageHeader from "@/Library/common/PageHeader/PageHeader";
import { TestimonialsShell } from "@/Library/page/Home/Testimonials/Testimonials.styles";
import "animate.css/animate.compat.css";

const Testimonials = ({
	locale,
	data,
}: {
	locale: string;
	data: {
		title: string;
		subtitle: string;
	};
}) => {
	const buttonText = locale === "ar" ? "تواصل معنا" : "Get in touch";

	return (
		<TestimonialsShell>
			<Section as={"div"}>
				<ScrollAnimation offset={0} animateIn={"fadeIn"}>
					<Row justify={"space-between"}>
						<Col md={6} className={"TestimonialsCol"}>
							<PageHeader title={data.title} subtitle={data.subtitle} />
						</Col>

						<Col className={"TestButton"} md={3}>
							<Link href={"/contact"}>
								<Button size={"large"} weight body={buttonText} arrow />
							</Link>
						</Col>
					</Row>
				</ScrollAnimation>
			</Section>

			<ScrollAnimation offset={0} animateIn={"fadeIn"}>
				{/* @ts-ignore */}
				<CaruselTestimonials locale={locale} data={data} />
			</ScrollAnimation>
		</TestimonialsShell>
	);
};

export default Testimonials;
