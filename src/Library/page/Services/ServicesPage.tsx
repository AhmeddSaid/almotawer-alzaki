"use server";
import React from "react";
import ServicesHeroSection from "@/Library/page/Services/ServicesHeroSection/ServicesHeroSection";

const ServicesPage = async () => {
	// Fetch the services page data
	const servicesRes = await fetch(`${process.env.WP_LOCAL_API_URL}/pages/?slug=services`, {
		cache: "no-store",
	});
	const servicesData = await servicesRes.json();

	// Fetch the services items (servicesData) separately
	const servicesItemsRes = await fetch(`${process.env.WP_LOCAL_API_URL}/services`, {
		cache: "no-store",
	});
	const servicesItems = await servicesItemsRes.json();

	return (
		<div>
			<ServicesHeroSection services={servicesData[0]} servicesData={servicesItems} />
		</div>
	);
};

export default ServicesPage;
