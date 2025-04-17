// formatDateName returns => "JANUARY 1, 2023"
export const formatDateName = (dateString: string) => {
	const date = new Date(dateString);
	return date
		.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		})
		.toUpperCase();
};

// formatDate returns => "01/01/2023"
export const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-GB");
};

// formatPrice returns => "$1,000"
export function formatPrice(
	amount: number,
	currency: string = "USD",
	locale: string = "en",
): string {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency: currency,
		currencyDisplay: "symbol",
	}).format(amount);
}
