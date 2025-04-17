"use client";
import parse from "html-react-parser";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styles from "./../../../common/Grids/Spaces.module.css";
import { Col, Flexbox, Row, Section } from "@/Library/common/Grids/Grids";
import { HalfCircle } from "@/Library/page/Blog/Blog/Blog.styles";
import ServicesCard from "@/Library/page/Services/ServicesHeroSection/ServicesCard";
import {
	Circle,
	Rec,
	ServicesHeroCardSection,
	ServicesHeroSectionHeader,
	ServicesHeroSectionShell,
	ServicesHeroSectionSubHeading,
} from "@/Library/page/Services/ServicesHeroSection/ServicesHeroSection.styles";
import "animate.css/animate.compat.css";
import uuid from "@/utils/uuid";

interface Service {
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
	};
	acf: {
		tagone_ar: string;
		tagtwo_ar: string;
		tagthree_ar: string;
		tagfour_ar: string;
		title_ar: string;
		title: string;
		tagone: string;
		tagtwo: string;
		tagthree: string;
		tagfour: string;
	};
	slug: string;
}

interface ServicesHeroSectionProps {
	services: {
		acf: {
			title: string;
			title_ar: string;
			sub_title: string;
			sub_title_ar: string;
		};
	};
	servicesData: Service[];
	locale?: string;
}

const ServicesHeroSection: React.FC<ServicesHeroSectionProps> = ({
	services,
	servicesData,
	locale,
}) => {
	const midpoint = Math.ceil(servicesData.length / 2);
	const column1 = servicesData.slice(0, midpoint);
	const column2 = servicesData.slice(midpoint);

	return (
		<>
			<ServicesHeroSectionShell>
				<ScrollAnimation animateIn={"fadeIn"}>
					<Section as={"div"}>
						<Flexbox justify={"center"}>
							<div>
								<ServicesHeroSectionHeader>
									{locale === "ar" ? services.acf.title_ar : services.acf.title}
									<Circle
										className={"shapes"}
										color={"#ffc32a"}
										size={"180px"}
										style={{
											left: "-34%",
											top: "-20%",
											zIndex: -2,
										}}
									></Circle>

									<HalfCircle
										className={"shapes"}
										color={"#ff5f55"}
										rotate="180"
										style={{
											left: "-40%",
											top: "40%",
											zIndex: -3,
										}}
									></HalfCircle>
									<HalfCircle
										color={"#77e36e"}
										className={"shapes"}
										style={{
											right: "-40%",
											top: "130%",
											zIndex: -1,
										}}
									></HalfCircle>
									<Rec
										color={"#4187ff"}
										width={"280px"}
										height={"160px"}
										style={{
											right: "-40%",
											top: "200%",
											zIndex: -1,
										}}
										className={"shapes"}
									></Rec>
								</ServicesHeroSectionHeader>

								<ServicesHeroSectionSubHeading>
									{locale === "ar" ? services.acf.sub_title_ar : services.acf.sub_title}
								</ServicesHeroSectionSubHeading>
							</div>
						</Flexbox>
					</Section>
				</ScrollAnimation>
			</ServicesHeroSectionShell>

			<ServicesHeroCardSection>
				<Section as={"div"}>
					<Row as={"ul"}>
						<Col as={"li"} lg={6} className={styles.marginTop_140}>
							{column1.map((item, i) => (
								<ServicesCard
									icon={`/icons/${i + 1}.png`}
									key={uuid}
									title={locale === "ar" ? item.acf.title_ar : item.acf.title}
									link={`/services/${item.slug}`}
									content={parse(item.content.rendered)}
									tags={
										locale === "ar"
											? [
													item.acf.tagone_ar,
													item.acf.tagtwo_ar,
													item.acf.tagthree_ar,
													item.acf.tagfour_ar,
												]
											: [item.acf.tagone, item.acf.tagtwo, item.acf.tagthree, item.acf.tagfour]
									}
								/>
							))}
						</Col>
						<Col as={"li"} lg={6}>
							{column2.map((item, i) => (
								<ServicesCard
									icon={`/icons/${i + 5}.png`}
									key={uuid}
									title={locale === "ar" ? item.acf.title_ar : item.acf.title}
									link={`/services/${item.slug}`}
									content={parse(item.content.rendered)}
									tags={
										locale === "ar"
											? [
													item.acf.tagone_ar,
													item.acf.tagtwo_ar,
													item.acf.tagthree_ar,
													item.acf.tagfour_ar,
												]
											: [item.acf.tagone, item.acf.tagtwo, item.acf.tagthree, item.acf.tagfour]
									}
								/>
							))}
						</Col>
					</Row>
				</Section>
			</ServicesHeroCardSection>
		</>
	);
};

export default ServicesHeroSection;
