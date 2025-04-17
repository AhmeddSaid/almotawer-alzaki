import PropTypes from "prop-types";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "@/Library/common/Button/Button";
import { Col, Flexbox, Row, Section } from "@/Library/common/Grids/Grids";
import PageHeader from "@/Library/common/PageHeader/PageHeader";
import { AboutThisServiceShell } from "@/Library/page/SingleService/AboutThisService/AboutThisService.styles";
import "animate.css/animate.compat.css";

const AboutThisService = ({ data }: { data: { title: string; body: string } }) => {
	return (
		<AboutThisServiceShell>
			<Section as={"div"}>
				<Row justify={"space-between"}>
					<Col xl={5}>
						<div className="container">
							<ScrollAnimation animateIn={"fadeIn"} className="s1"></ScrollAnimation>
							<ScrollAnimation animateIn={"fadeIn"} className="s2"></ScrollAnimation>
							<ScrollAnimation animateIn={"fadeIn"} className="s3">
								{/*<ScrollAnimation animateIn={"fadeIn"}></ScrollAnimation>*/}
							</ScrollAnimation>
							<ScrollAnimation animateIn={"fadeIn"} className="s4">
								{/*<ScrollAnimation animateIn={"fadeIn"}></ScrollAnimation>*/}
							</ScrollAnimation>
							<ScrollAnimation animateIn={"fadeIn"} className="s5"></ScrollAnimation>
							<ScrollAnimation animateIn={"fadeIn"} className="s6"></ScrollAnimation>
						</div>
					</Col>
					<Col xl={5}>
						<ScrollAnimation className={"servicesHeader"} animateIn={"fadeIn"}>
							<PageHeader title={"عن الخدمات"} subtitle={data.title} paragraph={data.body} />

							<Flexbox justify={"center"}>
								<Button body={"احصل علي عرض اسعار"} size={"large"} arrow />
							</Flexbox>
						</ScrollAnimation>
					</Col>
				</Row>
			</Section>
		</AboutThisServiceShell>
	);
};

// Define the prop types
AboutThisService.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
	}).isRequired,
};

export default AboutThisService;
