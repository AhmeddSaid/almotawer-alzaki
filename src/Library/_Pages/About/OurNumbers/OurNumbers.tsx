"use client";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { OurNumbersAr, OurNumbersEn } from "../../../../../messages/AboutUs";
import OurNumberCard from "@/Library/_Pages/About/OurNumbers/OurNumberCard";
import {
	OurNumbersHeaderContainer,
	OurNumbersSecondCol,
	OurNumbersSection,
} from "@/Library/_Pages/About/OurNumbers/OurNumbers.styles";
import { Col, Row, Section } from "@/Library/common/Grids/Grids";
import SectionHeader from "@/Library/common/SectionHeader/SectionHeader";
import "animate.css/animate.compat.css";

const OurNumbers = ({ locale }: { locale: string }) => {
	const t = locale === "ar" ? OurNumbersAr : OurNumbersEn;

	// Split cards into two columns
	const midIndex = Math.ceil(t.cards.length / 2);
	const firstColCards = t.cards.slice(0, midIndex);
	const secondColCards = t.cards.slice(midIndex);

	return (
		<OurNumbersSection>
			<Section as={"div"}>
				<ScrollAnimation animateIn={"fadeIn"}>
					<OurNumbersHeaderContainer>
						<SectionHeader title={t.title} header={t.header} />
					</OurNumbersHeaderContainer>
				</ScrollAnimation>
				<Row as={"ul"} justify={"end"}>
					<Col as={"li"} lg={5}>
						{firstColCards.map((card, index) => (
							<ScrollAnimation animateIn={"fadeIn"} key={index}>
								<OurNumberCard
									title={card.title}
									heading={card.heading}
									caption={card.caption}
									plusColor={card.plusColor}
								/>
							</ScrollAnimation>
						))}
					</Col>
					<OurNumbersSecondCol as={"li"} lg={5}>
						{secondColCards.map((card, index) => (
							<ScrollAnimation animateIn={"fadeIn"} key={index}>
								<OurNumberCard
									title={card.title}
									heading={card.heading}
									caption={card.caption}
									plusColor={card.plusColor}
								/>
							</ScrollAnimation>
						))}
					</OurNumbersSecondCol>
				</Row>
			</Section>
		</OurNumbersSection>
	);
};

export default OurNumbers;
