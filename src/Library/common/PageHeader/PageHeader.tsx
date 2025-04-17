import React from "react";
import {
	PageHeaderParagraph,
	PageHeaderSubtitle,
	PageHeaderTitle,
} from "@/Library/common/PageHeader/PageHeader.styles";

const PageHeader = ({
	title,
	subtitle,
	paragraph,
	light,
	center,
}: {
	title: string;
	subtitle: string;
	paragraph?: string;
	light?: boolean;
	center?: boolean;
}) => {
	return (
		<>
			<PageHeaderTitle light={light}> {subtitle}</PageHeaderTitle>
			<PageHeaderSubtitle center={center} light={light}>
				{title}
			</PageHeaderSubtitle>

			{paragraph && <PageHeaderParagraph> {paragraph}</PageHeaderParagraph>}
		</>
	);
};

export default PageHeader;
