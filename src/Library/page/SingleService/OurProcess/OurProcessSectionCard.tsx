import PropTypes from "prop-types";
import React from "react";
import { Flexbox } from "@/Library/common/Grids/Grids";
import { BlackLine } from "@/Library/page/Home/ServicesSection/ServicesSection.styles";
import {
	Dot,
	OurProcessSectionCardIndex,
	OurProcessSectionCardShell,
	OurProcessSectionCardSubTitle,
	OurProcessSectionCardTitle,
} from "@/Library/page/SingleService/OurProcess/OurProcess.styles";

const OurProcessSectionCard = ({
	data,
	index,
}: {
	data: { title: string; body: string };
	index: number;
}) => {
	const colors = [
		"var(--secondary--color-4)",
		"var(--accent--primary-1)",
		"var(--secondary--color-1)",
	];
	const dotColor = colors[index % colors.length];

	return (
		<OurProcessSectionCardShell>
			<OurProcessSectionCardIndex>
				0{index}
				<Dot color={dotColor}>.</Dot>
			</OurProcessSectionCardIndex>
			<OurProcessSectionCardTitle>{data.title}</OurProcessSectionCardTitle>
			<OurProcessSectionCardSubTitle>{data.body}</OurProcessSectionCardSubTitle>
			<Flexbox justify={"center"}>
				<BlackLine />
			</Flexbox>
		</OurProcessSectionCardShell>
	);
};

OurProcessSectionCard.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
	}).isRequired,
	index: PropTypes.number.isRequired,
};

export default OurProcessSectionCard;
