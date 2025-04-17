import Link from "next/link";
import React from "react";
import {
	NotFoundHeading,
	NotFoundHeroSection,
	NotFoundSectionHeaderContainer,
} from "@/Library/_Pages/NotFound/NotFoundHero/NotFoundHero.styles";
import Button from "@/Library/common/Button/Button";
import { Section } from "@/Library/common/Grids/Grids";
import { Display1 } from "@/Library/common/Typograhy/Typography";

const NotFoundHero = ({ heading, caption }: { heading: string; caption: string }) => {
	return (
		<NotFoundHeroSection>
			<Section as={"div"}>
				<NotFoundSectionHeaderContainer>
					<NotFoundHeading>{heading}</NotFoundHeading>
					<Display1>{caption}</Display1>
				</NotFoundSectionHeaderContainer>
				<Link href={"/"}>
					<Button body={"Go to Home Page"} size={"large"} />
				</Link>
			</Section>
		</NotFoundHeroSection>
	);
};

export default NotFoundHero;
