import React from "react";
import HelpCard from "@/Library/page/Services/HelpCard/HelpCard";
import ServicesHeroSection from "@/Library/page/Services/ServicesHeroSection/ServicesHeroSection";
import { fetchServices } from "@/utils/fetchServices";

const Page = async ({ params }: { params: { locale: string } }) => {
	const { locale } = params;
	try {
		const { parent, services } = await fetchServices();

		return (
			<>
				<ServicesHeroSection services={parent} servicesData={services} locale={locale} />
				<HelpCard locale={locale} />
			</>
		);
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
		return <div>Error fetching services: {errorMessage}</div>;
	}
};

export default Page;
