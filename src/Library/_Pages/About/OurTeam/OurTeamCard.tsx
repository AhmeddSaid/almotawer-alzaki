import Image from "next/image";
import React from "react";
import {
	IconContainer,
	OurTeamCardCaption,
	OurTeamCardHeader,
	OurTeamCardImage,
	OurTeamCardInner,
} from "@/Library/_Pages/About/OurTeam/OurTeamCard.styles";
import FaceBook from "@/Library/common/Icons/FaceBook/FaceBook";
import Linkedin from "@/Library/common/Icons/Linkedin/Linkedin";
import Twitter from "@/Library/common/Icons/Twitter/Twitter";

const OurTeamCard = ({
	cardImage,
	heading,
	caption,
	badgeBody,
}: {
	cardImage: string;
	heading: string;
	caption: string;
	badgeBody: string;
}) => {
	return (
		<OurTeamCardInner>
			<OurTeamCardImage>
				<Image src={`/About/${cardImage}`} alt={""} width={404} height={522} />
				<span>{badgeBody}</span>
			</OurTeamCardImage>

			<OurTeamCardHeader>{heading}</OurTeamCardHeader>
			<OurTeamCardCaption>{caption}</OurTeamCardCaption>
			<IconContainer>
				<div>
					<FaceBook />
				</div>
				<div>
					<Twitter />
				</div>
				<div>
					<Linkedin />
				</div>
			</IconContainer>
		</OurTeamCardInner>
	);
};

export default OurTeamCard;
