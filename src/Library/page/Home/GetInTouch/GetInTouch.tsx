"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "@/Library/common/Button/Button";
import { Flexbox, Row } from "@/Library/common/Grids/Grids";
import PageHeader from "@/Library/common/PageHeader/PageHeader";
import { GetInTouchShell } from "@/Library/page/Home/GetInTouch/GetInTouch.styles";
import "animate.css/animate.compat.css";

const GetInTouch = ({
	locale,
	data,
}: {
	locale: string;
	data: {
		subtitle: string;
		title: string;
		image: string;
	};
}) => {
	const buttonText = locale === "ar" ? "تواصل معنا" : "Get in Touch";

	return (
		<GetInTouchShell>
			<Flexbox align={"center"} justify={"center"} className="get-in-touch-container">
				<Row>
					<ScrollAnimation className={"GetInTouchdiv"} offset={0} animateIn={"fadeIn"}>
						<PageHeader light title={data.title} subtitle={data.subtitle} />

						<div className={`GetInTouchButton `}>
							<Link href={"/contact"}>
								<Button body={buttonText} size={"large"} arrow />
							</Link>
						</div>
					</ScrollAnimation>
				</Row>
				<Image src={data.image} width={500} height={500} alt="" />
				{/*<div className="container">*/}
				{/*	<ScrollAnimation offset={0} animateIn={"fadeIn"} className="c1"></ScrollAnimation>*/}
				{/*	<ScrollAnimation offset={0} animateIn={"fadeIn"} className="c2"></ScrollAnimation>*/}
				{/*	<ScrollAnimation offset={0} animateIn={"fadeIn"} className="c3"></ScrollAnimation>*/}
				{/*	<ScrollAnimation offset={0} animateIn={"fadeIn"} className="c4"></ScrollAnimation>*/}
				{/*	<ScrollAnimation offset={0} animateIn={"fadeIn"} className="c5"></ScrollAnimation>*/}
				{/*	<ScrollAnimation offset={0} animateIn={"fadeIn"} className="c6"></ScrollAnimation>*/}
				{/*</div>*/}
			</Flexbox>
		</GetInTouchShell>
	);
};

export default GetInTouch;
