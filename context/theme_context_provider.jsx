"use client";

import { ThemeContext } from "./theme_context";

export default function ThemeProviderWrapper({ children }) {
	return <ThemeContext>{children}</ThemeContext>;
}