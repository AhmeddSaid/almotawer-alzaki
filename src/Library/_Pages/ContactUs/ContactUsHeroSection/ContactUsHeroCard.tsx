import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ContactUsHeroCardInner } from "@/Library/_Pages/ContactUs/ContactUsHeroSection/ContactUsHeroCard.styles";
import { Display4, Text200 } from "@/Library/common/Typograhy/Typography";

const ContactUsHeroCard = ({
	Icon,
	Heading,
	Caption,
	Info,
	linkInfo,
	index,
}: {
	Icon: string;
	Heading: string;
	Caption: string;
	Info: string;
	linkInfo: string;
	index: number;
}) => {
	return (
		<ContactUsHeroCardInner>
			{index === 2 ? (
				<Image src={`/icons/location.webp`} alt={""} width={70} height={70} />
			) : (
				<Image src={`/${Icon}`} alt={""} width={70} height={70} />
			)}
			<Display4>{Heading}</Display4>
			<p>{Caption}</p>
			{linkInfo === "none" ? (
				<Link href={""} className="noLink">
					<Text200 color="#4187ff" weight={"bold"}>
						{Info}
					</Text200>
				</Link>
			) : (
				<Link href={linkInfo}>
					<Text200 weight={"bold"}>{Info}</Text200>
				</Link>
			)}
		</ContactUsHeroCardInner>
	);
};

export default ContactUsHeroCard;
