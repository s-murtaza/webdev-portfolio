/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [new URL("https://cdn.sanity.io/images/**")]
	},
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"]
		});
		return config;
	}
};

module.exports = nextConfig;
