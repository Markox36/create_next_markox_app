/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	cleanDistDir: true,
	compiler: {
		styledComponents: {
			minify: true,
			displayName: false,
		},
	},
	images: {
		domains: ["imgur.com", "i.imgur.com"],
		disableStaticImages: true,
		minimumCacheTTL: 0,
	},
};

module.exports = nextConfig;
