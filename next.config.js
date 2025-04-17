const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: false,
	compiler: {
		styledComponents: true,
	},
	output: "standalone",
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "wordpress-vo48sco004wscww808g8s0cw.91.205.105.70.sslip.io",
			},
			{
				protocol: "https",
				hostname: "admin.almotawer-alzaki.com",
			},
		],
	},
};

module.exports = withNextIntl(nextConfig);
