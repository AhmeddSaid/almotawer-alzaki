import parse from "html-react-parser";
import React from "react";
import Refund from "@/Library/_Pages/Refund/Refund";

const Page = async ({ params }: { params: { locale: string } }) => {
	const { locale } = params;
	const slug = locale === "en" ? "refund-english" : "refund-arabic";

	const res = await fetch(`${process.env.WP_LOCAL_API_URL}/pages/?slug=${slug}`);

	if (!res.ok) {
		return <div>Error loading content</div>;
	}

	const data = await res.json();

	const refundContent = data[0]?.content?.rendered || "Content not available";

	return <Refund content={parse(refundContent)} />;
};

export default Page;
