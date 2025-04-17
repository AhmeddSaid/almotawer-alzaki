import parse from "html-react-parser";
import React from "react";
import Terms from "@/Library/_Pages/Terms/Terms";

const Page = async ({ params }: { params: { locale: string } }) => {
	const { locale } = params;
	const slug = locale === "en" ? "terms-english" : "terms-arabic";

	const res = await fetch(`${process.env.WP_LOCAL_API_URL}/pages/?slug=${slug}`);

	if (!res.ok) {
		return <div>Error loading content</div>;
	}

	const data = await res.json();
	const termsContent = data[0]?.content.rendered || "Content not available";

	return <Terms content={parse(termsContent)} />;
};

export default Page;
