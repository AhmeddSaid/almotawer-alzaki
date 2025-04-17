"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import { HeroSectionAr, HeroSectionEn } from "../../../../../messages/Home";
import Button from "@/Library/common/Button/Button";
import { Flexbox } from "@/Library/common/Grids/Grids";
import {
	ContentHolder,
	HeroHomeSectionHeader,
	HeroHomeSectionSubHeader,
	HeroImageHolder,
	HeroSectionContainer,
	HomeSectionShel,
} from "@/Library/page/Home/HeroSection/HeroSection.styles";

const HeroSection = ({
	locale,
	data,
}: {
	locale: string;
	data: {
		image: string;
		title: string;
		body: string;
	};
}) => {
	const t = locale === "ar" ? HeroSectionAr : HeroSectionEn;

	return (
		<HomeSectionShel>
			<HeroSectionContainer>
				<ContentHolder>
					<ScrollAnimation offset={-10} animateIn={"fadeIn"}>
						<HeroHomeSectionHeader>{data.title}</HeroHomeSectionHeader>

						<HeroHomeSectionSubHeader>{data.body}</HeroHomeSectionSubHeader>

						<Flexbox gap={28} className="HeroHomeSectionButton">
							<Link href={"/contact"}>
								<Button weight size={"large"} body={t.getInTouch} arrow />
							</Link>
							{/*<Link href={"tel:+91503606999"}>*/}
							{/*	<Button Bgcolor={"secondary"} size={"large"} body={t.talkToSales} />*/}
							{/*</Link>*/}
						</Flexbox>
					</ScrollAnimation>
				</ContentHolder>
				<HeroImageHolder>
					<Image src={data.image} alt={""} width={680} height={680} />
				</HeroImageHolder>
			</HeroSectionContainer>
			{/* <Col md={5}>
						<div
							style={{
								margin: "0 auto",
							}}
						>
							<div className="container">
								<div className="a1"></div>
								<div className="a2"></div>
								<div className="a3"></div>
								<div className="a4"></div>
								<div className="a5"></div>
								<div className="a6"></div>
								<div className="a7"></div>
								<div className="a8"></div>
								<div className="a9"></div>
								<div className="a10"></div>
							</div>
						</div>
					</Col> */}
			{/*<ScrollAnimation offset={0} animateIn={"fadeIn"}>*/}
			{/*	<Row justify={"center"} className={"PaddingHeroSection"}>*/}
			{/*		<Col sm={12} md={2} lg={2}>*/}
			{/*			<TrustedByTitle>{t.trustedBy}</TrustedByTitle>*/}
			{/*		</Col>*/}
			{/*		<Col className={styles.marginBottom32} sm={4} md={2} lg={2}>*/}
			{/*			<Image src={"/inage1231.svg"} alt={""} width={140} height={32} />*/}
			{/*		</Col>*/}
			{/*		<Col className={styles.marginBottom32} sm={4} md={2} lg={2}>*/}
			{/*			<Image src={"/inage1231.svg"} alt={""} width={140} height={32} />*/}
			{/*		</Col>*/}
			{/*		<Col className={styles.marginBottom32} sm={4} md={2} lg={2}>*/}
			{/*			<Image src={"/inage1231.svg"} alt={""} width={140} height={32} />*/}
			{/*		</Col>*/}
			{/*		<Col className={styles.marginBottom32} sm={4} md={2} lg={2}>*/}
			{/*			<Image src={"/inage1231.svg"} alt={""} width={140} height={32} />*/}
			{/*		</Col>*/}
			{/*		<Col className={styles.marginBottom32} sm={4} md={2} lg={2}>*/}
			{/*			<Image src={"/inage1231.svg"} alt={""} width={140} height={32} />*/}
			{/*		</Col>*/}
			{/*	</Row>*/}
			{/*</ScrollAnimation>*/}
		</HomeSectionShel>
	);
};

export default HeroSection;
