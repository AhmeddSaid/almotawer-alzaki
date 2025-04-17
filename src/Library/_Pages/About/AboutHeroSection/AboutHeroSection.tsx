"use client";
import Link from "next/link";
import React from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import { AboutUsAr, AboutUsEn } from "../../../../../messages/AboutUs";
import {
	AboutHeroButtonContainer,
	AboutHerosection,
	AboutHeroSectionContainer,
	HeroCaption,
	HeroHeading,
	HeroTitle,
} from "@/Library/_Pages/About/AboutHeroSection/AboutHeroSection.styles";
import Button from "@/Library/common/Button/Button";
import { Section } from "@/Library/common/Grids/Grids";

const AboutHeroSection = ({ locale }: { locale: string }) => {
	const t = locale === "ar" ? AboutUsAr : AboutUsEn;

	return (
		<AboutHerosection>
			<ScrollAnimation animateIn={"fadeIn"}>
				<Section as={"div"}>
					<AboutHeroSectionContainer>
						<HeroTitle>{t.HeroTitle}</HeroTitle>
						<HeroHeading>{t.HeroHeading}</HeroHeading>
						<HeroCaption>{t.HeroCaption}</HeroCaption>

						<AboutHeroButtonContainer>
							<Link href={"/contact"}>
								<Button body={t.JoinOurTeam} size={"large"} width={"170px"} />
							</Link>
							{/* <Link href={"#"}>
								<Button body={t.OurStory} size={"large"} Bgcolor={"secondary"} />
							</Link> */}
						</AboutHeroButtonContainer>
					</AboutHeroSectionContainer>
				</Section>
			</ScrollAnimation>
		</AboutHerosection>
	);
};

export default AboutHeroSection;
