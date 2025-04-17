"use client";
import Image from "next/image";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { OurMissionAr, OurMissionEn } from "../../../../../messages/AboutUs";
import {
	HalfCircle,
	OurMissionHeaderContainer,
	OurMissionSection,
	ShapeContainerInner,
	ShapeContainerInner2,
} from "@/Library/_Pages/About/OurMission/OurMission.styles";
import { Row, Section } from "@/Library/common/Grids/Grids";
import SectionHeader from "@/Library/common/SectionHeader/SectionHeader";
import "animate.css/animate.compat.css";

const OurMission = ({ locale }: { locale: string }) => {
	const t = locale === "ar" ? OurMissionAr : OurMissionEn;

	return (
		<OurMissionSection>
			<Section as={"div"}>
				<Row>
					<ScrollAnimation animateIn={"fadeIn"} className={"z1"}>
						<OurMissionHeaderContainer>
							<SectionHeader title={t.title} header={t.header} caption={t.caption} />
						</OurMissionHeaderContainer>
					</ScrollAnimation>

					<div className="container">
						<div className="a1">
							<div className="b1"></div>
							<div className="b2"></div>
							<div className="b3">
								<Image
									src={"/About/Image-1-mission-inbound-template.jpg"}
									alt=""
									width={420}
									height={420}
								/>
							</div>
						</div>
						<div className="a2">
							<Image
								src={"/About/Image-3-mission-inbound-template.jpg"}
								alt=""
								width={700}
								height={618}
							/>
							<div>
								<ShapeContainerInner2>
									<HalfCircle color={"#4187ff"} />
									<HalfCircle color={"#ff5f55"} flip />
								</ShapeContainerInner2>
							</div>
						</div>
						<div className="a3">
							<Image
								src={"/About/Image-2-mission-inbound-template.jpg"}
								alt=""
								width={700}
								height={782}
							/>
							<div>
								<ShapeContainerInner>
									<HalfCircle color={"#ff5f55"} />
									<HalfCircle color={"#ffc32a"} />
								</ShapeContainerInner>
							</div>
						</div>
						<div className="a4">
							<Image
								src={"/About/Image-4-mission-inbound-template.jpg"}
								alt=""
								width={700}
								height={578}
							/>
						</div>
					</div>
				</Row>
			</Section>
		</OurMissionSection>
	);
};

export default OurMission;
