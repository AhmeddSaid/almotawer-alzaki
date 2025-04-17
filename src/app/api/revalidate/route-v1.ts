/* eslint-disable */
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const secret = process.env.REVALIDATION_SECRET;
	const token = req.nextUrl.searchParams.get("secret");

	console.log("Received revalidation request");
	console.log("Secret from environment:", secret);
	console.log("Token from request:", token);

	// Validate the secret token
	if (secret && token !== secret) {
		console.log("Invalid token");
		return NextResponse.json({ message: "Invalid token" }, { status: 401 });
	}

	try {
		// Log request body
		const body = await req.json();
		console.log("Request body:", body);

		const { slug, locale } = body;

		// Ensure locale is provided
		if (!locale) {
			console.log("Locale is missing in the request");
			return NextResponse.json({ error: "Locale is required" }, { status: 400 });
		}

		// Log the paths to be revalidated
		console.log(`Revalidating blog page for locale: ${locale}`);
		revalidatePath(`/${locale}/blog`);

		// Revalidate a specific post page if the slug is provided
		if (slug) {
			console.log(`Revalidating post page for slug: ${slug} and locale: ${locale}`);
			revalidatePath(`/${locale}/blog/${slug}`);
		}

		console.log("Revalidation successful");
		return NextResponse.json({ revalidated: true });
	} catch (err) {
		console.error("Error revalidating:", err);
		return NextResponse.json(
			// @ts-ignore
			{ error: "Error revalidating", details: err.message },
			{ status: 500 },
		);
	}
}

export async function GET(req: NextRequest) {
	const secret = process.env.REVALIDATION_SECRET;
	const token = req.nextUrl.searchParams.get("secret");

	console.log("Received revalidation request");
	console.log("Secret from environment:", secret);
	console.log("Token from request:", token);

	// Validate the secret token
	if (secret && token !== secret) {
		console.log("Invalid token");
		return NextResponse.json({ message: "Invalid token" }, { status: 401 });
	}

	try {
		// Log request body
		const body = await req.json();
		console.log("Request body:", body);

		const { slug, locale } = body;

		// Ensure locale is provided
		if (!locale) {
			console.log("Locale is missing in the request");
			return NextResponse.json({ error: "Locale is required" }, { status: 400 });
		}

		// Log the paths to be revalidated
		console.log(`Revalidating blog page for locale: ${locale}`);
		revalidatePath(`/${locale}/blog`);

		// Revalidate a specific post page if the slug is provided
		if (slug) {
			console.log(`Revalidating post page for slug: ${slug} and locale: ${locale}`);
			revalidatePath(`/${locale}/blog/${slug}`);
		}

		console.log("Revalidation successful");
		return NextResponse.json({ revalidated: true });
	} catch (err) {
		console.error("Error revalidating:", err);
		return NextResponse.json(
			// @ts-ignore
			{ error: "Error revalidating", details: err.message },
			{ status: 500 },
		);
	}
}
