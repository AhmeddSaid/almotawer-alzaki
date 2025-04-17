import React from "react";
import AboutHeroSection from "@/Library/_Pages/About/AboutHeroSection/AboutHeroSection";
import Shapes from "@/Library/_Pages/About/AboutHeroSection/Shapes";
import OurMission from "@/Library/_Pages/About/OurMission/OurMission";
import OurNumbers from "@/Library/_Pages/About/OurNumbers/OurNumbers";
// import OurTeam from "@/Library/_Pages/About/OurTeam/OurTeam";
import OurValues from "@/Library/_Pages/About/OurValues/OurValues";

const Page = ({ params }: { params: { locale: string } }) => {
	const { locale } = params;

	return (
		<>
			<AboutHeroSection locale={locale} />
			<Shapes />
			<OurNumbers locale={locale} />
			<OurMission locale={locale} />
			<OurValues locale={locale} />
			{/* <OurTeam locale={locale} /> */}
			{/*<OurOffices />*/}
		</>
	);
};

export default Page;
