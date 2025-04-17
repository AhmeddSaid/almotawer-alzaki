import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "@/Library/common/Button/Button";
import { Col, Flexbox, Row, Section } from "@/Library/common/Grids/Grids";
import styles from "@/Library/common/Grids/Spaces.module.css";
import PageHeader from "@/Library/common/PageHeader/PageHeader";
import ServicesSectionCard from "@/Library/page/Home/ServicesSection/ServicesSectionCard";
import {
	OurServicesHeaderShell,
	OurServicesShell,
} from "@/Library/page/SingleService/OurServices/OurServices.styles";
import "animate.css/animate.compat.css";
import uuid from "@/utils/uuid";

const OurServices = ({
	data,
}: {
	data: { title: string; cards: { icon: string; title: string; body: string }[] };
}) => {
	return (
		<OurServicesShell>
			<Section as={"div"}>
				<ScrollAnimation animateIn="fadeIn">
					<OurServicesHeaderShell>
						<PageHeader title={"الخدمات"} subtitle={data.title} center />
					</OurServicesHeaderShell>

					<Row as={"ul"} className={styles.marginTop48}>
						<Col as={"li"} lg={6} xl={4}>
							<ScrollAnimation animateIn="fadeIn">
								{/*{data.cards.slice(0, 2).map(card => (*/}
								<ServicesSectionCard
									key={uuid}
									icon={data.cards[0].icon}
									title={data.cards[0].title}
									subTitle={data.cards[0].body}
								/>
								{/*))}*/}
							</ScrollAnimation>
						</Col>
						<Col as={"li"} className={styles.marginTop72} xl={4}>
							{/*{data.cards.slice(2, 4).map(card => (*/}
							{/*	<ServicesSectionCard*/}
							{/*		key={uuid}*/}
							{/*		icon={card.icon}*/}
							{/*		title={card.title}*/}
							{/*		subTitle={card.body}*/}
							{/*	/>*/}
							{/*))}*/}

							<ServicesSectionCard
								key={uuid}
								icon={data.cards[1].icon}
								title={data.cards[1].title}
								subTitle={data.cards[1].body}
							/>
						</Col>
						<Col as={"li"} className={styles.marginTop142} xl={4}>
							{/*{data.cards.slice(4, 6).map(card => (*/}
							{/*	<ServicesSectionCard*/}
							{/*		key={uuid}*/}
							{/*		icon={card.icon}*/}
							{/*		title={card.title}*/}
							{/*		subTitle={card.body}*/}
							{/*	/>*/}
							{/*))}*/}

							<ServicesSectionCard
								key={uuid}
								icon={data.cards[2].icon}
								title={data.cards[2].title}
								subTitle={data.cards[2].body}
							/>
						</Col>
					</Row>

					<Flexbox className={styles.marginTop64} justify={"center"}>
						<Link href={"/contact"}>
							<Button body={"احصل علي عرض اسعار"} size={"large"} arrow />
						</Link>
					</Flexbox>
				</ScrollAnimation>
			</Section>
		</OurServicesShell>
	);
};

OurServices.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		cards: PropTypes.arrayOf(
			PropTypes.shape({
				icon: PropTypes.number.isRequired,
				title: PropTypes.string.isRequired,
				body: PropTypes.string.isRequired,
			}),
		).isRequired,
	}).isRequired,
};

export default OurServices;
