import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	ContactLinkInner,
	ContactLinkInnerInfo,
} from "@/Library/_Pages/ContactUs/SendMessage/ContactLink.styles";
import { NewHeading4, Text300 } from "@/Library/common/Typograhy/Typography";

const ContactLink = ({ Icon, Header, Info }: { Icon: string; Header: string; Info: string }) => {
	return (
		<ContactLinkInner>
			<Image src={`/${Icon}`} alt={""} width={66} height={66} />
			<ContactLinkInnerInfo>
				<NewHeading4 className={"contactHeader"}>{Header}</NewHeading4>
				<Link href="">
					<Text300 weight={"bold"}>{Info}</Text300>
				</Link>
			</ContactLinkInnerInfo>
		</ContactLinkInner>
	);
};

export default ContactLink;
