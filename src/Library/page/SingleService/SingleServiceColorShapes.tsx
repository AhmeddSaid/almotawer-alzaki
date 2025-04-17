"use client";
import Image from "next/image";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Flexbox } from "@/Library/common/Grids/Grids";
import { SingleServiceColorShapesShell } from "@/Library/page/SingleService/SingleService.styles";
import "animate.css/animate.compat.css";

const SingleServiceColorShapes = ({
	data: { imageOne, imageTwo },
}: {
	data: {
		imageOne: string;
		imageTwo: string;
	};
}) => {
	return (
		<ScrollAnimation duration={0.2} animateIn="fadeIn">
			<SingleServiceColorShapesShell>
				<div className="container">
					<div className="x1">
						<Image src={imageTwo} alt={""} width={532} height={552} />
					</div>
					<div className="x2"></div>
					<div className="x3"></div>
					<div className="x4">
						<Image src={imageOne} alt={""} width={532} height={532} />
					</div>
				</div>
				<ScrollAnimation duration={0.2} animateIn="fadeIn">
					<Flexbox className={"MobileShapes"}>
						<div>
							<Image src={imageTwo} alt={""} width={176} height={198} />
						</div>

						<div className={"border50"}>
							<Image src={imageOne} alt={""} width={176} height={176} />
						</div>
					</Flexbox>
				</ScrollAnimation>
			</SingleServiceColorShapesShell>
		</ScrollAnimation>
	);
};

export default SingleServiceColorShapes;
