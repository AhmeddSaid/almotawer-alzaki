"use client";
import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styles from "./../../../common/Grids/Spaces.module.css";
import { Col, Row, Section } from "@/Library/common/Grids/Grids";
import PageHeader from "@/Library/common/PageHeader/PageHeader";
import {
	OurProcessHeaderShell,
	OurProcessShell,
} from "@/Library/page/SingleService/OurProcess/OurProcess.styles";
import OurProcessSectionCard from "@/Library/page/SingleService/OurProcess/OurProcessSectionCard";

import "animate.css/animate.compat.css";
import uuid from "@/utils/uuid";

const OurProcess = ({
	data,
}: {
	data: {
		title: string;
		bullets: {
			title: string;
			body: string;
		}[];
	};
}) => {
	return (
		<OurProcessShell>
			<Section as={"div"}>
				<OurProcessHeaderShell>
					<PageHeader title={""} subtitle={data.title} center />
				</OurProcessHeaderShell>

				<Row as={"ul"} className={styles.marginTop48}>
					{data.bullets.map(
						(
							bullet: {
								title: string;
								body: string;
							},
							index: number,
						) => (
							<Col key={uuid} as={"li"} md={4}>
								<ScrollAnimation animateIn={"fadeIn"}>
									<OurProcessSectionCard index={index + 1} data={bullet} />
								</ScrollAnimation>
							</Col>
						),
					)}
				</Row>
			</Section>
		</OurProcessShell>
	);
};

OurProcess.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		bullets: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string.isRequired,
				body: PropTypes.string.isRequired,
			}),
		).isRequired,
	}).isRequired,
};

export default OurProcess;
