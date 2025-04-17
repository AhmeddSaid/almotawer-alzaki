"use client";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ContactUsTranslationAr, ContactUsTranslationEN } from "../../../../../messages/ContactUs";
import { Locale } from "@/Global";
import ContactUsHeroCard from "@/Library/_Pages/ContactUs/ContactUsHeroSection/ContactUsHeroCard";
import {
	CaptionContainer,
	ContactBackground,
	ContactUsHero,
	ContactUsHeroCardContainer,
	ContactUsHeroShell,
	ContactUsShapes,
} from "@/Library/_Pages/ContactUs/ContactUsHeroSection/ContactUsHeroSection.styles";
import { Col, Row } from "@/Library/common/Grids/Grids";
import { Display1 } from "@/Library/common/Typograhy/Typography";
import uuid from "@/utils/uuid";
import "animate.css/animate.compat.css";

const ContactUsHeroSection = ({ locale }: Locale) => {
	const t = locale === "ar" ? ContactUsTranslationAr : ContactUsTranslationEN;
	return (
		<ContactUsHero>
			<ContactBackground />
			<ContactUsHeroShell as={"div"}>
				<ContactUsShapes>
					<div className={"div1"}></div>
					<div className={"div2"}></div>
				</ContactUsShapes>

				<CaptionContainer>
					<ScrollAnimation animateIn={"fadein"}>
						<Display1>{t.Hero.Heading}</Display1>
						<p>{t.Hero.Caption}</p>
					</ScrollAnimation>
				</CaptionContainer>
				<ContactUsHeroCardContainer>
					<Row as={"ul"} justify={"center"}>
						{[...Array(3)].map((_, i) => (
							<Col key={uuid} as={"li"} lg={4}>
								<ScrollAnimation animateIn={"fadeIn"}>
									<ContactUsHeroCard
										Icon={i === 2 ? "/icons/lcoation.webp" : t.Hero.ContactInfo[i].Icon}
										Heading={t.Hero.ContactInfo[i].Header}
										Caption={t.Hero.ContactInfo[i].Body}
										Info={t.Hero.ContactInfo[i].Link}
										linkInfo={t.Hero.ContactInfo[i].LinkInfo}
										index={i}
									/>
								</ScrollAnimation>
							</Col>
						))}
					</Row>
				</ContactUsHeroCardContainer>
			</ContactUsHeroShell>
		</ContactUsHero>
	);
};

export default ContactUsHeroSection;
