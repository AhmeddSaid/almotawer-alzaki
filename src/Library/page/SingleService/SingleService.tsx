"use client";

import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "@/Library/common/Button/Button";
import { Flexbox, Section } from "@/Library/common/Grids/Grids";
import {
	SingleServiceHeading,
	SingleServiceShell,
	SingleServiceSubHeading,
	SingleServiceTitle,
} from "@/Library/page/SingleService/SingleService.styles";

interface SingleServiceProps {
	data: {
		subtitle: string;
		title: string;
		shortDesc: string;
	};
}

const SingleService: React.FC<SingleServiceProps> = ({ data }) => {
	return (
		<SingleServiceShell>
			<Section as={"div"}>
				<ScrollAnimation duration={0.3} animateIn="rotateInUpLeft">
					<SingleServiceTitle>{data.subtitle}</SingleServiceTitle>
					<SingleServiceHeading>{data.title}</SingleServiceHeading>
					<SingleServiceSubHeading>{data.shortDesc}.</SingleServiceSubHeading>
					<Flexbox className="buttonShell" justify={"center"} gap={28}>
						<Button body={"احصل علي عرض اسعار"} size={"large"} />
						{/*<Button body={"Learn more"} size={"large"} Bgcolor={"secondary"} />*/}
					</Flexbox>
				</ScrollAnimation>
			</Section>
		</SingleServiceShell>
	);
};

SingleService.propTypes = {
	data: PropTypes.shape({
		subtitle: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		shortDesc: PropTypes.string.isRequired,
	}).isRequired,
};

export default SingleService;
