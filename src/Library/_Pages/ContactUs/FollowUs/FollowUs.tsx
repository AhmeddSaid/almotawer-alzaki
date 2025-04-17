"use client";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ContactUsTranslationAr } from "../../../../../messages/ContactUs";
import {
	FollowUsHeaderContainer,
	FollowUsSection,
} from "@/Library/_Pages/ContactUs/FollowUs/FollowUs.styles";
import SocialMediaSingle from "@/Library/_Pages/ContactUs/FollowUs/SocialMediaSingle";
import { Col, Row, Section } from "@/Library/common/Grids/Grids";
import SectionHeader from "@/Library/common/SectionHeader/SectionHeader";
import "animate.css/animate.compat.css";
import uuid from "@/utils/uuid";

const FollowUs = () => {
	const t = ContactUsTranslationAr.SocialMedia;
	return (
		<FollowUsSection>
			<Section as={"div"}>
				<FollowUsHeaderContainer>
					<ScrollAnimation animateIn={"fadeIn"}>
						<SectionHeader
							textAline={"center"}
							title={t.Title}
							header={t.Heading}
							caption={t.Caption}
						/>
					</ScrollAnimation>
				</FollowUsHeaderContainer>
				<Row justify={"center"}>
					<Col lg={11}>
						<Row as={"ul"}>
							{[...Array(6)].map(() => (
								<Col key={uuid} as={"li"} lg={4} sm={6}>
									<ScrollAnimation animateIn={"fadeIn"}>
										<SocialMediaSingle
											Icon={"Icon-3-social-media-inbound-template.svg"}
											SocialLink={""}
											SocialInfo={"FaceBook"}
										/>
									</ScrollAnimation>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Section>
		</FollowUsSection>
	);
};

export default FollowUs;
