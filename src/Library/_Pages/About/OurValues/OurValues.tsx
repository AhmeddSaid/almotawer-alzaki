"use client";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { OurValuesAr, OurValuesEn } from "../../../../../messages/AboutUs";
import styles from "./../../../common/Grids/Spaces.module.css";
import {
	OurValuesCardContainer,
	OurValuesSection,
	OurValuesSectionHeader,
} from "@/Library/_Pages/About/OurValues/OurValues.styles";
import Button from "@/Library/common/Button/Button";
import { Col, Flexbox, Row, Section } from "@/Library/common/Grids/Grids";
import SectionHeader from "@/Library/common/SectionHeader/SectionHeader";
import ServicesSectionCard from "@/Library/page/Home/ServicesSection/ServicesSectionCard";
import "animate.css/animate.compat.css";
import uuid from "@/utils/uuid";

const OurValues = ({ locale }: { locale: string }) => {
	const values = locale === "ar" ? OurValuesAr : OurValuesEn;

	return (
		<OurValuesSection>
			<Section as={"div"}>
				<Row justify="center">
					<OurValuesSectionHeader>
						<ScrollAnimation animateIn={"fadeIn"}>
							<SectionHeader
								title={values.title}
								header={values.header}
								caption={values.caption}
								darkBg
								textAline={"center"}
							/>
						</ScrollAnimation>
					</OurValuesSectionHeader>

					<Col lg={10}>
						<ScrollAnimation animateIn={"fadeIn"}>
							<Row as={"ul"}>
								{values.services.map((service, index) => (
									<OurValuesCardContainer key={uuid} index={index} as={"li"} lg={6}>
										<ServicesSectionCard
											isBig
											title={service.titleOne}
											subTitle={service.subTitleOne}
										/>
										<ServicesSectionCard
											isBig
											title={service.titleTwo}
											subTitle={service.subTitleTwo}
										/>
									</OurValuesCardContainer>
								))}
							</Row>
						</ScrollAnimation>
					</Col>

					<ScrollAnimation animateIn={"fadeIn"}>
						<Flexbox justify={"center"} className={`${styles.marginTop64} OurValuesButton`}>
							<Link href={"/contact"}>
								<Button body={values.button} />
							</Link>
						</Flexbox>
					</ScrollAnimation>
				</Row>
			</Section>
		</OurValuesSection>
	);
};

export default OurValues;
