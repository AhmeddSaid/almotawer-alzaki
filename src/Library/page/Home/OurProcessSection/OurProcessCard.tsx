import Image from "next/image";
import React from "react";
import { Col, Flexbox, Row } from "@/Library/common/Grids/Grids";
import {
	OurProcessCardH3,
	OurProcessCardIndex,
	OurProcessCardp,
	OurProcessCardShell,
} from "@/Library/page/Home/OurProcessSection/OurProcessSection.styles";

const OurProcessCard = ({
	process,
}: {
	process: { index: number; title: string; body: string; image: string };
}) => {
	return (
		<OurProcessCardShell>
			<Row>
				<Col lg={6}>
					<div className={"OurProcessCardImage"}>
						<Image src={process.image} alt={process.title} width={425} height={425} />
					</div>
				</Col>
				<Col lg={6}>
					<div>
						<Flexbox align={"end"} className={"relativeDiv"}>
							<OurProcessCardIndex>{process.index}</OurProcessCardIndex>
							<div className={"indexDot"}>.</div>
						</Flexbox>

						<OurProcessCardH3>{process.title}</OurProcessCardH3>

						<OurProcessCardp>{process.body}</OurProcessCardp>
					</div>
				</Col>
			</Row>
		</OurProcessCardShell>
	);
};

export default OurProcessCard;
