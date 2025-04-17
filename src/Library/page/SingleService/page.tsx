"use client";
import PropTypes from "prop-types";
import React from "react";
import SendMessage from "@/Library/_Pages/ContactUs/SendMessage/SendMessage";
import AboutThisService from "@/Library/page/SingleService/AboutThisService/AboutThisService";
import OurProcess from "@/Library/page/SingleService/OurProcess/OurProcess";
import OurServices from "@/Library/page/SingleService/OurServices/OurServices";
import SingleService from "@/Library/page/SingleService/SingleService";
import SingleServiceColorShapes from "@/Library/page/SingleService/SingleServiceColorShapes";

const SinglePageData = ({
	service,
}: {
	service: {
		header: { subtitle: string; title: string; shortDesc: string };
		heroImages: {
			imageOne: string;
			imageTwo: string;
		};
		body: { title: string; cards: { icon: number; title: string; body: string }[] };
		about: { title: string; body: string };
		process: {
			title: string;
			bullets: {
				title: string;
				body: string;
			}[];
		};
	};
}) => {
	return (
		<>
			<SingleService data={service.header} />
			<SingleServiceColorShapes data={service.heroImages} />
			{/*@ts-ignore*/}
			<OurServices data={service.body} />
			<AboutThisService data={service.about} />
			<OurProcess data={service.process} />
			<SendMessage sectionVisible={false} />
		</>
	);
};

SinglePageData.propTypes = {
	service: PropTypes.shape({
		header: PropTypes.shape({
			title: PropTypes.string,
			subtitle: PropTypes.string,
			shortDesc: PropTypes.string,
		}),
		heroImages: PropTypes.shape({ imageOne: PropTypes.string, imageTwo: PropTypes.string }),

		body: PropTypes.shape({
			title: PropTypes.string,
			cards: PropTypes.arrayOf(
				PropTypes.shape({
					icon: PropTypes.string,
					title: PropTypes.string,
					body: PropTypes.string,
				}),
			),
		}),
		about: PropTypes.shape({
			title: PropTypes.string,
			body: PropTypes.string,
		}),
		process: PropTypes.shape({
			title: PropTypes.string,
			bullets: PropTypes.arrayOf(
				PropTypes.shape({
					title: PropTypes.string,
					body: PropTypes.string,
				}),
			),
		}),
	}),
};

export default SinglePageData;
