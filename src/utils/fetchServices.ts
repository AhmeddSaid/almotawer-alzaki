export const fetchServices = async (
	slug: string = "services-parent-dont-delete-me",
	cacheType: RequestCache = "default",
) => {
	const res = await fetch(`${process.env.WP_LOCAL_API_URL}/pages/?slug=${slug}`, {
		cache: cacheType,
	});

	if (!res.ok) {
		throw new Error(`Failed to fetch services with slug: ${slug}`);
	}

	const data = await res.json();

	if (data[0]?.id) {
		const parentID = process.env.PARENT_ID;

		const serviceDataRes = await fetch(`${process.env.WP_LOCAL_API_URL}/pages?parent=${parentID}`, {
			cache: cacheType,
		});

		const serviceData = await serviceDataRes.json();
		return { parent: data[0], services: serviceData };
	}

	return { parent: data[0], services: [] };
};
