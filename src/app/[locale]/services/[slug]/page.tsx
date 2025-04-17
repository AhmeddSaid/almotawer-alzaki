import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import React from "react";
import Page from "../../../../Library/page/SingleService/page";

export async function generateStaticParams() {
	const res = await fetch(`${process.env.WP_LOCAL_API_URL}/pages`, { cache: "no-store" });
	const data = await res.json();
	const postsEn = data.map((service: { slug: string }) => ({ locale: "en", slug: service.slug }));
	const postsAr = data.map((service: { slug: string }) => ({ locale: "ar", slug: service.slug }));

	const posts = [...postsEn, ...postsAr];
	return posts;
}

const ServicePage = async ({ params }: { params: { slug: string } }) => {
	const cookiesJar = cookies();
	// @ts-ignore
	const locale = cookiesJar.get("NEXT_LOCALE")?.value ?? "ar";

	const res = await fetch(`${process.env.WP_LOCAL_API_URL}/pages?slug=${params.slug}`);

	// const res2 = await fetch(`${process.env.WP_LOCAL_API_URL}/pages`, { cache: "default" });
	// const data2 = await res2.json();

	if (!res.ok) {
		return redirect("/500");
	}

	const serviceData = await res.json();

	if (serviceData.length === 0) {
		return notFound();
	}

	const service = serviceData[0];

	const mediaIds = [
		service.acf.service_card_one_icon,
		service.acf.service_card_two_icon,
		service.acf.service_card_three_icon,
		service.acf.service_card_four_icon,
		service.acf.service_card_five_icon,
		service.acf.service_card_six_icon,
		service.acf.service_hero_image_one,
		service.acf.service_hero_image_two,
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

	const structuredService = {
		header: {
			title: (locale === "ar" ? service.acf.title_ar : service.acf.title) || "Default Title",
			subtitle:
				(locale === "ar" ? service.acf.subtitle_ar : service.acf.subtitle) || "Default Subtitle",
			shortDesc:
				(locale === "ar" ? service.acf.short_description_ar : service.acf.short_description) ||
				"This is a short description of the service.",
		},
		heroImages: {
			imageOne: mediaMap[service.acf.service_hero_image_one] || "/inage1232.jpg",
			imageTwo: mediaMap[service.acf.service_hero_image_two] || "/inage1231 (2).jpg",
		},
		body: {
			title:
				(locale === "ar" ? service.acf.body_title_ar : service.acf.body_title) || "Main Body Title",
			cards: [
				{
					icon: mediaMap[service.acf.service_card_one_icon] || "/inage1231 (1).svg",
					title:
						(locale === "ar"
							? service.acf.service_card_one_title_ar
							: service.acf.service_card_one_title) || "Card 1 Title",
					body:
						(locale === "ar"
							? service.acf.service_card_one_body_ar
							: service.acf.service_card_one_body) || "Card 1 body description.",
				},
				{
					icon: mediaMap[service.acf.service_card_two_icon] || "/inage1231 (1).svg",
					title:
						(locale === "ar"
							? service.acf.service_card_two_title_ar
							: service.acf.service_card_two_title) || "Card 2 Title",
					body:
						(locale === "ar"
							? service.acf.service_card_two_body_ar
							: service.acf.service_card_two_body) || "Card 2 body description.",
				},
				{
					icon: mediaMap[service.acf.service_card_three_icon] || "/inage1231 (1).svg",
					title:
						(locale === "ar"
							? service.acf.service_card_three_title_ar
							: service.acf.service_card_three_title) || "Card 3 Title",
					body:
						(locale === "ar"
							? service.acf.service_card_three_body_ar
							: service.acf.service_card_three_body) || "Card 3 body description.",
				},
				{
					icon: mediaMap[service.acf.service_card_four_icon] || "/inage1231 (1).svg",
					title:
						(locale === "ar"
							? service.acf.service_card_four_title_ar
							: service.acf.service_card_four_title) || "Card 4 Title",
					body:
						(locale === "ar"
							? service.acf.service_card_four_body_ar
							: service.acf.service_card_four_body) || "Card 4 body description.",
				},
				{
					icon: mediaMap[service.acf.service_card_five_icon] || "/inage1231 (1).svg",
					title:
						(locale === "ar"
							? service.acf.service_card_five_title_ar
							: service.acf.service_card_five_title) || "Card 5 Title",
					body:
						(locale === "ar"
							? service.acf.service_card_five_body_ar
							: service.acf.service_card_five_body) || "Card 5 body description.",
				},
				{
					icon: mediaMap[service.acf.service_card_six_icon] || "/inage1231 (1).svg",
					title:
						(locale === "ar"
							? service.acf.service_card_six_title_ar
							: service.acf.service_card_six_title) || "Card 6 Title",
					body:
						(locale === "ar"
							? service.acf.service_card_six_body_ar
							: service.acf.service_card_six_body) || "Card 6 body description.",
				},
			],
		},
		about: {
			title:
				(locale === "ar" ? service.acf.service_about_title_ar : service.acf.service_about_title) ||
				"About This Service",
			body:
				(locale === "ar" ? service.acf.service_about_body_ar : service.acf.service_about_body) ||
				"This section describes the service in detail and gives additional context.",
		},
		process: {
			title:
				(locale === "ar"
					? service.acf.service_process_title_ar
					: service.acf.service_process_title) || "Our Process",
			bullets: [
				{
					title:
						(locale === "ar"
							? service.acf.service_process_step_one_title_ar
							: service.acf.service_process_step_one_title) || "Step 1",
					body:
						(locale === "ar"
							? service.acf.service_process_step_one_body_ar
							: service.acf.service_process_step_one_body) ||
						"Explanation of step 1 in the process.",
				},
				{
					title:
						(locale === "ar"
							? service.acf.service_process_step_two_title_ar
							: service.acf.service_process_step_two_title) || "Step 2",
					body:
						(locale === "ar"
							? service.acf.service_process_step_two_body_ar
							: service.acf.service_process_step_two_body) ||
						"Explanation of step 2 in the process.",
				},
				{
					title:
						(locale === "ar"
							? service.acf.service_process_step_three_title_ar
							: service.acf.service_process_step_three_title) || "Step 3",
					body:
						(locale === "ar"
							? service.acf.service_process_step_three_body_ar
							: service.acf.service_process_step_three_body) ||
						"Explanation of step 3 in the process.",
				},
			],
		},
	};
	// @ts-ignore
	return <Page service={structuredService} />;
};

export default ServicePage;
