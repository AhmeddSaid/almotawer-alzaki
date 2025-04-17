import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./../../../common/Grids/Spaces.module.css";
import { Flexbox } from "@/Library/common/Grids/Grids";
import {
	BlogResourcesCardP,
	BlogResourcesCardShell,
	BlogResourcesCardTitle,
	ReadMore,
} from "@/Library/page/Home/Blog&Resources/Blog&Resources.styles";

interface BlogResourcesCardProps {
	image?: string;
	title?: string;
	date?: string;
	category?: string;
	link?: string;
}

const BlogResourcesCard: React.FC<BlogResourcesCardProps> = ({
	image,
	title,
	date,
	category,
	link,
}) => {
	return (
		<BlogResourcesCardShell>
			<div className={"BlogResourcesCardImage"}>
				<Image
					src={image ?? "/BlogDefaultImage.jpg"}
					alt=""
					width={420}
					height={0}
					style={{ height: "100%", width: "100%", objectFit: "cover" }}
				/>
			</div>

			<Flexbox className={`${styles.marginTop32} ${styles.marginBottom16}`} justify="space-between">
				<BlogResourcesCardTitle>{category ?? "Contact"}</BlogResourcesCardTitle>
				<BlogResourcesCardTitle>{date ?? "May 12, 2022"}</BlogResourcesCardTitle>
			</Flexbox>

			<Link href={link ?? "/"}>
				<BlogResourcesCardP className={"BlogResourcesCardP"}>
					{title ?? "How to reach out for guest posts to increase your SEO authority"}
				</BlogResourcesCardP>
			</Link>
			<Link href={link ?? "/"}>
				<ReadMore>Read more</ReadMore>
			</Link>
		</BlogResourcesCardShell>
	);
};

export default BlogResourcesCard;
