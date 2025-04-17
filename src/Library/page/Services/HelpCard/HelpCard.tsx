"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "@/Library/common/Button/Button";
import { Col, Row, Section } from "@/Library/common/Grids/Grids";
import {
	HelpCardInfo,
	HelpCardInfoSubTitle,
	HelpCardInfoTitle,
	HelpCardSectionShell,
	HelpCardShell,
} from "@/Library/page/Services/HelpCard/HelpCard.styles";
import "animate.css/animate.compat.css";

const HelpCard = ({ locale }: { locale: string }) => {
	return (
		<HelpCardSectionShell>
			<ScrollAnimation animateIn={"fadeIn"}>
				<Section as={"div"}>
					<HelpCardShell>
						<Row>
							<HelpCardInfo md={6}>
								<HelpCardInfoTitle>
									{locale === "ar"
										? "تبحث عن مساعدة في شيء آخر؟"
										: "Looking for help with something else?"}
								</HelpCardInfoTitle>
								<HelpCardInfoSubTitle>
									{locale === "ar"
										? "أرسل لنا بريداً إلكترونياً! سيكون فريقنا سعيداً بمساعدتك."
										: "Send us an email! Our team will be happy to help you out."}
								</HelpCardInfoSubTitle>

								<Link href={"/contact"}>
									<Button
										body={locale === "ar" ? "طلب عرض الأسعار" : "Request the quote"}
										size={"large"}
									/>
								</Link>
							</HelpCardInfo>{" "}
							<Col md={6}>
								<Image src={"/inage1231 (4).svg"} alt={""} width={415} height={390} />
							</Col>
						</Row>
					</HelpCardShell>
				</Section>
			</ScrollAnimation>
		</HelpCardSectionShell>
	);
};

export default HelpCard;
