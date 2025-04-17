import React from "react";
import {
	HeaderCaption,
	SectionHeaderContainer,
	SectionHeaderHeading,
	SectionHeaderTitle,
} from "@/Library/common/SectionHeader/SectionHeader.styles";

const SectionHeader = ({
	title,
	header,
	caption,
	textAline,
	darkBg,
}: {
	title: string;
	header: string;
	caption?: string;
	textAline?: "start" | "end" | "center";
	darkBg?: boolean;
}) => {
	return (
		<SectionHeaderContainer textAline={textAline}>
			<SectionHeaderTitle weight={"bold"}>{title}</SectionHeaderTitle>
			<SectionHeaderHeading darkBg={darkBg}>{header}</SectionHeaderHeading>
			<HeaderCaption darkBg={darkBg}>{caption}</HeaderCaption>
		</SectionHeaderContainer>
	);
};

export default SectionHeader;
