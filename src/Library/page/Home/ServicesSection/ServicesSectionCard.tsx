import Link from "next/link";
import React from "react";
import Button from "@/Library/common/Button/Button";
import {
	BlackLine,
	ServicesSectionCardImage,
	ServicesSectionCardShell,
	ServicesSectionCardSubTitle,
	ServicesSectionCardTitle,
} from "@/Library/page/Home/ServicesSection/ServicesSection.styles";

const ServicesSectionCard = ({
	isBig,
	center,
	title,
	subTitle,
	icon,
	// slug,
	btnText,
	locale,
	disableHover,
}: {
	isBig?: boolean;
	center?: boolean;
	title: string;
	subTitle: string;
	icon?: string;
	// slug?: string;
	btnText?: string;
	locale?: string;
	disableHover?: boolean;
}) => {
	return (
		<ServicesSectionCardShell isBig={isBig} center={center} disableHover={disableHover}>
			<ServicesSectionCardImage
				center={center}
				src={icon ?? "/inage1231 (1).svg"}
				alt={""}
				width={80}
				height={80}
			/>

			{disableHover ? (
				<ServicesSectionCardTitle center={center} isBig={isBig}>
					{title}{" "}
				</ServicesSectionCardTitle>
			) : (
				// <Link href={`services/${slug}`}>
				<ServicesSectionCardTitle center={center} isBig={isBig}>
					{title}{" "}
				</ServicesSectionCardTitle>
				// </Link>
			)}
			<ServicesSectionCardSubTitle center={center} isBig={isBig}>
				{subTitle}
			</ServicesSectionCardSubTitle>

			{!center && <BlackLine animateIn={"ProgressBar"} />}

			{center && (
				<Link href={"/services"}>
					<Button
						size={"med"}
						fullWidth
						body={(btnText ?? locale === "ar") ? "استعرض الخدمات" : "Browse Services"}
						arrow
					/>
				</Link>
			)}
		</ServicesSectionCardShell>
	);
};

export default ServicesSectionCard;
