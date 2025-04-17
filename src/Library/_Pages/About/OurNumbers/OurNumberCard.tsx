import React from "react";
import {
	CardLineBottom,
	OurNumberCardCaption,
	OurNumberCardHeader,
	OurNumberCardInner,
	OurNumberCardTitle,
	PlusColor,
} from "@/Library/_Pages/About/OurNumbers/OurNumberCard.styles";

const OurNumberCard = ({
	plusColor,
	title,
	heading,
	caption,
}: {
	title: string;
	heading: string;
	caption: string;
	plusColor: string;
}) => {
	return (
		<OurNumberCardInner>
			<OurNumberCardTitle>
				{title}
				<PlusColor plusColor={plusColor}>+</PlusColor>
			</OurNumberCardTitle>
			<OurNumberCardHeader>{heading}</OurNumberCardHeader>
			<OurNumberCardCaption>{caption}</OurNumberCardCaption>
			<CardLineBottom />
		</OurNumberCardInner>
	);
};

export default OurNumberCard;
