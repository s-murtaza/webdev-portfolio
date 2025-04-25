const author = "Saiyed Murtaza";
const description = "Software developer from Karachi, Pakistan, expert in react, nestjs";
const url = "https://murtaza-webservices.vercel.app/";
export const AppMetadata = {
	metadataBase: new URL("https://murtaza-webservices.vercel.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Saiyed Murtaza",
		"Saiyed Murtaza - software developer",
		"Frontend developer",
		"Backend developer",
		"Full stack Developer",
		"Portfolio website",
		"Full Stack developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		locale: "en-US",
		type: "website",
		images: [
			{
				url: "/opengraph-image.png", // ✅ Next.js will convert this into an absolute URL
				width: 1200,
				height: 630,
				alt: "Saiyed Murtaza's Portfolio"
			}
		]
	}
};
