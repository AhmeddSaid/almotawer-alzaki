"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ContactUsTranslationAr } from "../../../../../messages/ContactUs";
import {
	OurOfficeList,
	OurOfficesHeaderContainer,
	OurOfficesHeading,
	OurOfficesImageContainer,
	OurOfficesSection,
} from "@/Library/_Pages/About/OurOffices/OurOffices.styles";
import { Col, Row, Section } from "@/Library/common/Grids/Grids";
import SectionHeader from "@/Library/common/SectionHeader/SectionHeader";
import { Text400 } from "@/Library/common/Typograhy/Typography";
import "animate.css/animate.compat.css";

const OurOffices = () =>
	// { lightBG }: { lightBG?: boolean }
	{
		const t = ContactUsTranslationAr.OurOffices;
		return (
			<OurOfficesSection lightBG>
				<Section>
					<Row justify={"center"} align={"center"} direction={"column"}>
						<OurOfficesHeaderContainer>
							<ScrollAnimation animateIn={"fadeIn"}>
								<SectionHeader textAline={"center"} title={t.Title} header={t.Heading} />
							</ScrollAnimation>
						</OurOfficesHeaderContainer>
						<Col lg={8}>
							<ScrollAnimation animateIn={"fadeIn"}>
								<OurOfficesImageContainer>
									<Image
										src={"/office.jpg"}
										alt={""}
										width={728 / 2}
										height={585 / 2}
										objectFit={"cover"}
									/>
								</OurOfficesImageContainer>
								<OurOfficesHeading>{t.Info.Heading}</OurOfficesHeading>
								<ul>
									<OurOfficeList dotColor={"blue"}>
										<Text400>{t.Info.Address}</Text400>
									</OurOfficeList>
									<OurOfficeList dotColor={"yellow"}>
										<Link href={"mailto:contact@almotawer-alzaki.com"}>
											<Text400>{t.Info.Email}</Text400>
										</Link>
									</OurOfficeList>
									<OurOfficeList dotColor={"red"}>
										<Link href={"tel:+91503606999"}>
											<Text400>{t.Info.Number}</Text400>
										</Link>
									</OurOfficeList>
								</ul>
							</ScrollAnimation>
						</Col>
					</Row>
				</Section>
			</OurOfficesSection>
		);
	};

export default OurOffices;
