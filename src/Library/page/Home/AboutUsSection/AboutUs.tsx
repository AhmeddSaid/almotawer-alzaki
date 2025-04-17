"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import { AboutUsAr, AboutUsEn } from "../../../../../messages/Home";
import Button from "@/Library/common/Button/Button";
import { Col, Flexbox, Row, Section } from "@/Library/common/Grids/Grids";
import PageHeader from "@/Library/common/PageHeader/PageHeader";
import { AboutUsBtn, AboutUsSectionShell } from "@/Library/page/Home/AboutUsSection/AboutUs.styles";

const AboutUs = ({
	locale,
	data,
}: {
	locale: string;
	data: {
		title: string;
		subtitle: string;
		body: string;
		image: string;
	};
}) => {
	const t = locale === "ar" ? AboutUsAr : AboutUsEn;

	return (
		<AboutUsSectionShell>
			<Section as={"div"}>
				<Row justify={"space-between"}>
					<Col lg={5}>
						{/*<div className="container">*/}
						{/*	<ScrollAnimation offset={0} animateIn={"fadeIn"} className="b1"></ScrollAnimation>*/}
						{/*	<ScrollAnimation offset={0} animateIn={"fadeIn"} className="b2"></ScrollAnimation>*/}
						{/*	<ScrollAnimation offset={0} animateIn={"fadeIn"} className="b4"></ScrollAnimation>*/}
						{/*	<ScrollAnimation offset={0} animateIn={"fadeIn"} className="b3"></ScrollAnimation>*/}
						{/*	<ScrollAnimation offset={0} animateIn={"fadeIn"} className="b5"></ScrollAnimation>*/}
						{/*	<ScrollAnimation offset={0} animateIn={"fadeIn"} className="b6"></ScrollAnimation>*/}
						{/*</div>*/}
						<Image src={data.image} width={500} height={500} alt="team" />
					</Col>

					<Col lg={5}>
						<ScrollAnimation offset={0} animateIn={"fadeIn"}>
							<div className={"AboutUSdiv"}>
								<PageHeader paragraph={data.body} title={data.title} subtitle={data.subtitle} />

								<Flexbox className={"AboutUsButton"} gap={28}>
									<Link href={"/contact"}>
										<Button size={"large"} body={t.getInTouch} arrow />
									</Link>
									<Link href={"/about"}>
										<AboutUsBtn>{t.aboutUs}</AboutUsBtn>
									</Link>
								</Flexbox>
							</div>
						</ScrollAnimation>
					</Col>
				</Row>
			</Section>
		</AboutUsSectionShell>
	);
};

export default AboutUs;
