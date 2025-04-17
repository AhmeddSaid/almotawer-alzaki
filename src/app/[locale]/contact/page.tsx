import React from "react";
import { Locale } from "@/Global";
import OurOffices from "@/Library/_Pages/About/OurOffices/OurOffices";
import ContactUsHeroSection from "@/Library/_Pages/ContactUs/ContactUsHeroSection/ContactUsHeroSection";
import Faq from "@/Library/_Pages/ContactUs/FAQ/FAQ";
// import FollowUs from "@/Library/_Pages/ContactUs/FollowUs/FollowUs";
import SendMessage from "@/Library/_Pages/ContactUs/SendMessage/SendMessage";

const Page = ({ params }: { params: Locale }) => {
	const { locale } = params;
	return (
		<>
			<ContactUsHeroSection locale={locale} />
			<SendMessage />
			<OurOffices />
			<Faq />
			{/* NOTE: Temporary disabled */}
			{/* <FollowUs /> */}
		</>
	);
};

export default Page;
