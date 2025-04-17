"use client";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { OurTeamAr, OurTeamEn } from "../../../../../messages/AboutUs";
import styles from "./../../../common/Grids/Spaces.module.css";
import {
	OurTeamCardContainer,
	OurTeamHeaderContainer,
	OurTeamSection,
} from "@/Library/_Pages/About/OurTeam/OurTeam.styles";
import OurTeamCard from "@/Library/_Pages/About/OurTeam/OurTeamCard";
import Button from "@/Library/common/Button/Button";
import { Flexbox, Row, Section } from "@/Library/common/Grids/Grids";
import SectionHeader from "@/Library/common/SectionHeader/SectionHeader";
import "animate.css/animate.compat.css";
import uuid from "@/utils/uuid";

const OurTeam = ({ locale }: { locale: string }) => {
	const t = locale === "ar" ? OurTeamAr : OurTeamEn;

	return (
		<OurTeamSection>
			<Section as={"div"}>
				<ScrollAnimation animateIn={"fadeIn"}>
					<OurTeamHeaderContainer justify={"space-between"}>
						<SectionHeader title={t.title} header={t.header} />
						<Flexbox justify={"center"} className={styles.marginTop32}>
							<Link href={"/contact"} className={"ButtonOurTeam"}>
								<Button body={t.button} />
							</Link>
						</Flexbox>
					</OurTeamHeaderContainer>
				</ScrollAnimation>

				<ScrollAnimation animateIn={"fadeIn"}>
					<Row as={"ul"} justify={"center"}>
						{t.teamMembers.map((member, i) => (
							<OurTeamCardContainer key={uuid} index={i} as={"li"} lg={4}>
								<Link href={""}>
									<OurTeamCard
										badgeBody={member.role}
										cardImage={member.image}
										heading={member.name}
										caption={member.description}
									/>
								</Link>
							</OurTeamCardContainer>
						))}
					</Row>
				</ScrollAnimation>
			</Section>
		</OurTeamSection>
	);
};

export default OurTeam;
