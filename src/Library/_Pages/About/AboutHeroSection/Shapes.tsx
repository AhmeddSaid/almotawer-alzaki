"use client";
import Image from "next/image";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {
	BlueCircle,
	GreenCircle,
	GridContainer1,
	GridContainer2,
	RightHalfCircle,
	ShapesContainer,
} from "@/Library/_Pages/About/AboutHeroSection/AboutHeroSection.styles";
import "animate.css/animate.compat.css";

const Shapes = () => {
	return (
		<ShapesContainer>
			<GridContainer1>
				<ScrollAnimation animateIn={"fadeIn"}>
					<Image
						className={"item1"}
						src={"/About/Image-1-hero-v2-inbound-template.jpg"}
						alt={""}
						width={467}
						height={470}
						style={{ borderRadius: "50%" }}
					/>
				</ScrollAnimation>
				<ScrollAnimation animateIn={"fadeIn"} className={"item2"}>
					<GreenCircle />
					<BlueCircle />
				</ScrollAnimation>
				<ScrollAnimation animateIn={"fadeIn"} className={"item3"} />
			</GridContainer1>
			<GridContainer2>
				<ScrollAnimation animateIn={"fadeIn"} className={"item4"}>
					<RightHalfCircle BgColor={"var(--accent--primary-1,#4187ff)"} />
					<RightHalfCircle BgColor={" var(--secondary--color-4,#ff5f55)"} />
				</ScrollAnimation>
				<ScrollAnimation animateIn={"fadeIn"} className={"item5"}>
					<Image
						src={"/About/Image-2-hero-v2-inbound-template.jpg"}
						alt={""}
						width={282}
						height={282}
					/>
					<Image
						src={"/About/Image-3-hero-v2-inbound-template.jpg"}
						alt={""}
						width={282}
						height={282}
					/>
				</ScrollAnimation>
			</GridContainer2>
		</ShapesContainer>
	);
};

export default Shapes;
