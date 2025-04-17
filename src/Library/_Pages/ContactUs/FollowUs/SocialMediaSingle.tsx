import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	SocialMediaContainer,
	SocialMediaIcon,
} from "@/Library/_Pages/ContactUs/FollowUs/SocialMediaSingle.styles";

const SocialMediaSingle = ({
	Icon,
	SocialLink,
	SocialInfo,
}: {
	Icon: string;
	SocialLink: string;
	SocialInfo: string;
}) => {
	return (
		<SocialMediaContainer justify={"center"} align={"center"} gap={17}>
			<SocialMediaIcon>
				<Image src={`/Contact/${Icon}`} alt={""} width={61} height={61} />
			</SocialMediaIcon>
			<Link href={SocialLink}>
				<p>{SocialInfo}</p>
			</Link>
		</SocialMediaContainer>
	);
};

export default SocialMediaSingle;
