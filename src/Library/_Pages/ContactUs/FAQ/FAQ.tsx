"use client";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ContactUsTranslationAr } from "../../../../../messages/ContactUs";
import {
	FaqContainer,
	FaqHeaderContainer,
	FaqSection,
} from "@/Library/_Pages/ContactUs/FAQ/FAQ.styles";
import FaqComponent from "@/Library/_Pages/ContactUs/FAQ/FaqComponent";
import { Col, Row, Section } from "@/Library/common/Grids/Grids";
import SectionHeader from "@/Library/common/SectionHeader/SectionHeader";
import uuid from "@/utils/uuid";
import "animate.css/animate.compat.css";

const Faq = () => {
	const t = ContactUsTranslationAr.Faq;
	return (
		<FaqSection>
			<Section as={"div"}>
				<FaqHeaderContainer>
					<ScrollAnimation animateIn={"fadeIn"}>
						<SectionHeader textAline={"center"} title={""} header={t.Heading} caption={t.Caption} />
					</ScrollAnimation>
				</FaqHeaderContainer>

				<Row as={"ul"} justify={"center"}>
					<Col as={"li"} lg={10}>
						<ScrollAnimation animateIn={"fadeIn"}>
							<FaqContainer>
								{[...Array(4)].map((_, i) => (
									<FaqComponent
										key={uuid}
										question={t.Questions[i].Question}
										answer={t.Questions[i].Answer}
									/>
								))}
							</FaqContainer>
						</ScrollAnimation>
					</Col>
				</Row>
			</Section>
		</FaqSection>
	);
};

export default Faq;
