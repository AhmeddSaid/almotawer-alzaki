"use client";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { OurProcessSectionAr, OurProcessSectionEn } from "../../../../../messages/Home";
import Button from "@/Library/common/Button/Button";
import CarouselOurProcess from "@/Library/common/CarouselOurProcess/CarouselOurProcess";
import { Section } from "@/Library/common/Grids/Grids";
import PageHeader from "@/Library/common/PageHeader/PageHeader";
import {
	OurProcessSectionButton,
	OurProcessSectionShell,
} from "@/Library/page/Home/OurProcessSection/OurProcessSection.styles";
import "animate.css/animate.compat.css";

const OurProcessSection = ({
	locale,
	data,
}: {
	locale: string;
	data: {
		title: string;
		subtitle: string;
		processes: { title: string; body: string; image: string }[];
	};
}) => {
	const t = locale === "ar" ? OurProcessSectionAr : OurProcessSectionEn;

	return (
		<OurProcessSectionShell>
			<Section as={"div"}>
				<div className={"PageHeaderContainer"}>
					<ScrollAnimation offset={0} animateIn={"fadeIn"}>
						<PageHeader title={data.title} subtitle={data.subtitle} />
					</ScrollAnimation>
				</div>
				<ScrollAnimation offset={0} animateIn={"fadeIn"}>
					<CarouselOurProcess locale={locale} data={data.processes} />

					<OurProcessSectionButton>
						<Link href={"/contact"}>
							<Button body={t.getInTouch} size={"med"} weight arrow />
						</Link>
					</OurProcessSectionButton>
				</ScrollAnimation>
			</Section>
		</OurProcessSectionShell>
	);
};

export default OurProcessSection;
