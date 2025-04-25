const author = "Saiyed Murtaza";
const description =
	"Software developer from Karachi, Pakistan, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React, Next.js, Nodejs, Nestjs, Express";
const url = "https://vasile-novatchii.netlify.app";
export const AppMetadata = {
	metadataBase: new URL("https://vasile-novatchii.netlify.app/"),
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
		images: [
			{
				url: "https://vasile-novatchii.netlify.app/screenshot.webp",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://vasile-novatchii.netlify.app/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
