const fs = require("fs");

console.log("[Manifest]: Initiating program to configure the manifest");

if (fs.existsSync("./public/site.webmanifest")) {
	fs.unlinkSync("./public/site.webmanifest");
	console.log("[Manifest]: Replacing existing configuration...");
} else {
	console.log("[Manifest]: Generating configuration...");
}

fs.writeFileSync(
	"./public/site.webmanifest",
	JSON.stringify(
		{
			name: "",
			description: "",
			short_name: "",
			start_url: ".",
			scope: "/",
			display: "standalone",
			icons: [
				{
					src: "images/favicon-32x32.ico",
					sizes: "32x32",
					type: "image/x-icon",
					purpose: "any maskable",
				},
				{
					src: "images/favicon-256x256.ico",
					sizes: "256x256",
					type: "image/x-icon",
					purpose: "any maskable",
				},
			],
			theme_color: "#ffffff",
			background_color: "#ffffff",
		},
		null,
		2,
	),
);

console.log(`✨ [Manifest]: File generated: file:///${__dirname.replaceAll(/\\/g, "/")}/public/site.webmanifest`);
console.log("✅ [Manifest]: Generation completed\n");
