"use client";

import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection } from "app/sections";
import { CTASection } from "./sections/cta";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<ProjectsSection />
			<TechnologiesSection />
			<CTASection/>
		</div>
	);
}
