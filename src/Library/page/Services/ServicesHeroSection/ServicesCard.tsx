import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./../../../common/Grids/Spaces.module.css";
import { Col, Row } from "@/Library/common/Grids/Grids";
import RightIcon from "@/Library/common/Icons/RightIcon/RightIcon";
import {
	CheckDiv,
	ServicesCardShell,
	ServicesCardSubTitle,
	ServicesCardTitle,
} from "@/Library/page/Services/ServicesHeroSection/ServicesHeroSection.styles";

const ServicesCard = ({
	title,
	link,
	content,
	tags,
	icon,
}: {
	title: string;
	link: string;
	content: JSX.Element | JSX.Element[] | string;
	tags: string[];
	icon: string;
}) => {
	return (
		<Link href={link} className="service-link">
			<ServicesCardShell>
				<Image src={icon} alt={""} width={80} height={80} />
				<ServicesCardTitle className={"ServicesCardTitle"}>{title}</ServicesCardTitle>
				<ServicesCardSubTitle>{content}</ServicesCardSubTitle>
				<Row>
					<Col md={6}>
						<CheckDiv align={"center"} gap={14}>
							<RightIcon />
							<p>{tags[0]}</p>
						</CheckDiv>
					</Col>
					<Col md={6}>
						<CheckDiv align={"center"} gap={14}>
							<RightIcon />
							<p>{tags[1]}</p>
						</CheckDiv>
					</Col>
				</Row>
				<Row className={styles.marginTop16}>
					<Col md={6}>
						<CheckDiv align={"center"} gap={14}>
							<RightIcon />
							<p>{tags[2]}</p>
						</CheckDiv>
					</Col>
					<Col md={6}>
						<CheckDiv align={"center"} gap={14}>
							<RightIcon />
							<p>{tags[3]}</p>
						</CheckDiv>
					</Col>
				</Row>
			</ServicesCardShell>
		</Link>
	);
};

export default ServicesCard;
