import { Metadata } from "next";
import React from "react";
import AboutUs from "@/Library/page/Home/AboutUsSection/AboutUs";
import GetInTouch from "@/Library/page/Home/GetInTouch/GetInTouch";
import HeroSection from "@/Library/page/Home/HeroSection/HeroSection";
import OurProcessSection from "@/Library/page/Home/OurProcessSection/OurProcessSection";
import ServicesSection from "@/Library/page/Home/ServicesSection/ServicesSection";
import Testimonials from "@/Library/page/Home/Testimonials/Testimonials";
import { fetchServices } from "@/utils/fetchServices";

export async function generateMetadata({
	params,
}: {
	params: { locale: string };
}): Promise<Metadata> {
	const { locale } = params;

	const res = await fetch(`${process.env.WP_LOCAL_API_URL}/pages?slug=home-page-dont-delete-me`);
	const homeData = await res.json();
	const home = homeData[0].acf;

	const homeMetaTags = {
		title: locale === "ar" ? home.home_meta_title_ar : home.home_meta_title,
		description: locale === "ar" ? home.home_meta_description_ar : home.home_meta_description,
		keywords: locale === "ar" ? home.home_meta_keywords_ar : home.home_meta_keywords,
	};

	return {
		title: homeMetaTags.title || "Home",
		description: homeMetaTags.description || "Home",
		keywords: homeMetaTags.keywords || "Home",
	};
}

export default async function Home({ params }: { params: { locale: string } }) {
	const { locale } = params;
	const { services } = await fetchServices();

	const res = await fetch(`${process.env.WP_LOCAL_API_URL}/pages?slug=home-page-dont-delete-me`);
	const homeData = await res.json();

	const home = homeData[0].acf;

	const mediaIds = [
		home.home_hero_section_image,
		home.home_about_section_image,
		home.home_process_one_image,
		home.home_process_two_image,
		home.home_process_three_image,
		home.home_contact_section_image,
	];
	const mediaPromises = mediaIds.map(id =>
		fetch(`${process.env.WP_LOCAL_API_URL}/media/${id}`).then(mediaRes => mediaRes.json()),
	);
	const mediaData = await Promise.all(mediaPromises);

	const mediaMap: { [key: number]: string } = {};
	mediaData.forEach(media => {
		if (media.source_url) {
			mediaMap[media.id] = media.source_url;
		}
	});

	const structuredHome = {
		heroSection: {
			image: mediaMap[home.home_hero_section_image] || "",
			title: locale === "ar" ? home.home_hero_section_title_ar : home.home_hero_section_title,
			body: locale === "ar" ? home.home_hero_section_body_ar : home.home_hero_section_body,
		},
		servicesSection: {
			active: home.home_services_section_visible,
			subtitle:
				locale === "ar"
					? home.home_services_section_subtitle_ar
					: home.home_services_section_subtitle,
			title:
				locale === "ar" ? home.home_services_section_title_ar : home.home_services_section_title,
		},
		about: {
			active: home.home_about_section_visible,
			image: mediaMap[home.home_about_section_image],
			subtitle:
				locale === "ar" ? home.home_about_section_subtitle_ar : home.home_about_section_subtitle,
			title: locale === "ar" ? home.home_about_section_title_ar : home.home_about_section_title,
			body: locale === "ar" ? home.home_about_section_body_ar : home.home_about_section_body,
		},
		process: {
			active: home.home_process_section_visible,
			subtitle:
				locale === "ar"
					? home.home_process_section_subtitle_ar
					: home.home_process_section_subtitle,
			title: locale === "ar" ? home.home_process_section_title_ar : home.home_process_section_title,
			processes: [
				{
					title: locale === "ar" ? home.home_process_one_title_ar : home.home_process_one_title,
					body: locale === "ar" ? home.home_process_one_body_ar : home.home_process_one_body,
					image: mediaMap[home.home_process_one_image],
				},
				{
					title: locale === "ar" ? home.home_process_two_title_ar : home.home_process_two_title,
					body: locale === "ar" ? home.home_process_two_body_ar : home.home_process_two_body,
					image: mediaMap[home.home_process_two_image],
				},
				{
					title: locale === "ar" ? home.home_process_three_title_ar : home.home_process_three_title,
					body: locale === "ar" ? home.home_process_three_body_ar : home.home_process_three_body,
					image: mediaMap[home.home_process_three_image],
				},
			],
		},
		testimonials: {
			active: home.home_testimonials_section_visible,
			subtitle:
				locale === "ar"
					? home.home_testimonials_section_subtitle_ar
					: home.home_testimonials_section_subtitle,
			title:
				locale === "ar"
					? home.home_testimonials_section_title_ar
					: home.home_testimonials_section_title,
			reviews: [
				{
					title: locale === "ar" ? home.testimonial_one_title_ar : home.testimonial_one_title,
					highlight:
						locale === "ar"
							? home.testimonial_one_title_highlight_ar
							: home.testimonial_one_title_highlight,
					body: locale === "ar" ? home.testimonial_one_body_ar : home.testimonial_one_body,
					reviewerName:
						locale === "ar"
							? home.testimonial_one_reviewer_name_ar
							: home.testimonial_one_reviewer_name,
					reviewerJobTitle:
						locale === "ar"
							? home.testimonial_one_reviewer_job_title_ar
							: home.testimonial_one_reviewer_job_title,
					reviewCompanyName:
						locale === "ar"
							? home.testimonial_one_reviewer_company_name_ar
							: home.testimonial_one_reviewer_company_name,
					agencyLink: home.testimonial_one_agency_link,
				},
				{
					title: locale === "ar" ? home.testimonial_two_title_ar : home.testimonial_two_title,
					highlight:
						locale === "ar"
							? home.testimonial_two_title_highlight_ar
							: home.testimonial_two_title_highlight,
					body: locale === "ar" ? home.testimonial_two_body_ar : home.testimonial_two_body,
					reviewerName:
						locale === "ar"
							? home.testimonial_two_reviewer_name_ar
							: home.testimonial_two_reviewer_name,
					reviewerJobTitle:
						locale === "ar"
							? home.testimonial_two_reviewer_job_title_ar
							: home.testimonial_two_reviewer_job_title,
					reviewCompanyName:
						locale === "ar"
							? home.testimonial_two_reviewer_company_name_ar
							: home.testimonial_two_reviewer_company_name,

					agencyLink: home.testimonial_two_agency_link,
				},
				{
					title: locale === "ar" ? home.testimonial_three_title_ar : home.testimonial_three_title,
					highlight:
						locale === "ar"
							? home.testimonial_three_title_highlight_ar
							: home.testimonial_three_title_highlight,
					body: locale === "ar" ? home.testimonial_three_body_ar : home.testimonial_three_body,
					reviewerName:
						locale === "ar"
							? home.testimonial_three_reviewer_name_ar
							: home.testimonial_three_reviewer_name,
					reviewerJobTitle:
						locale === "ar"
							? home.testimonial_three_reviewer_job_title_ar
							: home.testimonial_three_reviewer_job_title,
					reviewCompanyName:
						locale === "ar"
							? home.testimonial_three_reviewer_company_name_ar
							: home.testimonial_three_reviewer_company_name,
					agencyLink: home.testimonial_three_agency_link,
				},
			],
		},
		contactUs: {
			image: mediaMap[home.home_contact_section_image],
			active: home.home_contact_section_visible,
			subtitle:
				locale === "ar"
					? home.home_contact_section_subtitle_ar
					: home.home_contact_section_subtitle,
			title: locale === "ar" ? home.home_contact_section_title_ar : home.home_contact_section_title,
		},
	};

	return (
		<>
			<HeroSection locale={locale} data={structuredHome.heroSection} />
			{structuredHome.servicesSection.active && (
				<ServicesSection
					locale={locale}
					servicesData={services}
					data={structuredHome.servicesSection}
				/>
			)}
			{structuredHome.about.active && <AboutUs locale={locale} data={structuredHome.about} />}
			{structuredHome.process.active && (
				<OurProcessSection locale={locale} data={structuredHome.process} />
			)}
			{structuredHome.testimonials.active && (
				<Testimonials locale={locale} data={structuredHome.testimonials} />
			)}
			{structuredHome.contactUs.active && (
				<GetInTouch locale={locale} data={structuredHome.contactUs} />
			)}
			{/*<BlogResources posts={enrichedPosts} />*/}
		</>
	);
}
