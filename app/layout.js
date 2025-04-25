import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata } from "components";
import Loading from "./loading";
import "styles/globals.css";
import ThemeContextProvider  from "context/theme_context_provider";
import { Plus_Jakarta_Sans } from "next/font/google";

export const metadata = { ...AppMetadata };

const jakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	display: "swap"
});

// app/viewport.ts
export const viewport = {
    colorScheme: "dark",
};
  

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={jakarta.className}>
				<ThemeContextProvider>
					<AppHeader />
					<Suspense fallback={<Loading />}>{children}</Suspense>
					<AppFooter />
				</ThemeContextProvider>
			</body>
		</html>
	);
}
