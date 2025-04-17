import parse from "html-react-parser";
import React from "react";
import Privacy from "@/Library/_Pages/Policy/Privacy";

const Page = async ({ params }: { params: { locale: string } }) => {
	const { locale } = params;
	const slug = locale === "en" ? "privacy-policy-english" : "privacy-policy-arabic";

	const res = await fetch(`${process.env.WP_LOCAL_API_URL}/pages/?slug=${slug}`);

	if (!res.ok) {
		return <div>Error loading content</div>;
	}

	const data = await res.json();
	const privacyContent = data[0]?.content.rendered || "Content not available";

	return <Privacy content={parse(privacyContent)} />;
};

export default Page;
