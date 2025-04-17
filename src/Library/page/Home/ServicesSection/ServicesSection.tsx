"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import styles from "./../../../common/Grids/Spaces.module.css";
import Button from "@/Library/common/Button/Button";
import { Col, Row, Section } from "@/Library/common/Grids/Grids";
import PageHeader from "@/Library/common/PageHeader/PageHeader";
import { ServicesSectionShell } from "@/Library/page/Home/ServicesSection/ServicesSection.styles";
import ServicesSectionCard from "@/Library/page/Home/ServicesSection/ServicesSectionCard";
import "animate.css/animate.compat.css";

const ScrollAnimation = dynamic(() => import("react-animate-on-scroll"), {
	ssr: false,
});

interface Service {
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
	};
	acf: {
		tagone: string;
		tagtwo: string;
		tagthree: string;
		tagfour: string;
		title: string;
		title_ar: string;
	};
	slug: string;
}

const ServicesSection = ({
	servicesData,
	locale,
	data,
}: {
	servicesData: Service[];
	locale: string;
	data: {
		subtitle: string;
		title: string;
	};
}) => {
	const firstFiveServices = servicesData.slice(0, 5);

	return (
		<ServicesSectionShell>
			<Section as={"div"}>
				<Row justify={"space-between"}>
					<Col md={7}>
						<ScrollAnimation offset={0} animateIn={"fadeIn"}>
							<PageHeader title={data.subtitle} subtitle={data.title} />
						</ScrollAnimation>
					</Col>

					<Col lg={3} className={"ServiceButton"}>
						<Link href={"/contact"}>
							<Button
								weight
								size={"large"}
								body={locale === "ar" ? "تواصل معنا" : "Contact Us"}
								arrow
							/>
						</Link>
					</Col>
				</Row>

				<ScrollAnimation offset={0} animateIn={"fadeIn"}>
					<Row as={"ul"} className={styles.marginTop48}>
						{firstFiveServices.map((service, i) => (
							<Col as={"li"} lg={4} key={service.slug}>
								<Link className="service-link" href={`services/${service.slug}`}>
									<ServicesSectionCard
										title={locale === "ar" ? service.acf.title_ar : service.acf.title}
										subTitle={""}
										// slug={service.slug}
										locale={locale}
										icon={`/icons/${i + 1}.png`}
									/>
								</Link>
							</Col>
						))}
						<Col as={"li"} lg={4}>
							<ServicesSectionCard
								locale={locale}
								title={locale === "ar" ? "استعرض جميع الخدمات" : "Browse all services"}
								subTitle={
									locale === "ar"
										? "ليس هناك شيء أفضل من أن تقوم بتقديم خدماتك للآخرين."
										: "Nothing beats offering your services to others."
								}
								center
								disableHover
							/>
						</Col>
					</Row>
				</ScrollAnimation>
			</Section>
		</ServicesSectionShell>
	);
};

export default ServicesSection;
