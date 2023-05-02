const webUrl = process.env.NEXT_PUBLIC_WEB_URL;

const siteUrl = webUrl || "your-domain.com";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
	outDir: "./public",
	siteUrl,
	sitemapSize: 7000,
	generateRobotsTxt: true,
	generateIndexSitemap: true,
};
