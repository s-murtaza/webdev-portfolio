import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import { HeadingDivider, Loader } from "components";
// import { fetcher } from "utils/fetcher";
import Error from "../../error";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "../../projects/components/Projects";
import { SITE_ROUTES } from "../../../constants";
import projects from "constants/projects";

// const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_LATEST_PROJECTS}`;

export function ProjectsSection() {
	const btnRef = useRef(null);
	const isBtnInView = useInView(btnRef, { once: true });

	// const { data, error } = useSWR(url, fetcher);
	// const projects = data?.result;
	// const projects = [
	// 	{
	// 		title: "Entry Mapper",
	// 		description: "A data-driven tool designed to assist businesses in identifying optimal expansion opportunities. Users input countries and specific criteria, such as market size, competition, economic factors. The backend processes this data and the frontend then generates a feasibility heatmap, visually ranking countries based on their suitability for new business ventures.",
	// 		images: ["/projectImages/entrymapper/entrymapper-finalheatmap.png",
	// 			"/projectImages/entrymapper/entrymapperlogin.png", 
	// 			"/projectImages/entrymapper/entrymapper-metric.png",
	// 			"/projectImages/entrymapper/entrymapper-country.png",
	// 			"/projectImages/entrymapper/entrymapper-interimap.png"
	// 		],
	// 		liveUrl: null,
	// 		repoUrl: null,
	// 		stack: ["React", "NextJS", "Typescript", "Node.js", "NestJs", "PostgreSQL", "Material-UI", "React-Context", "AntD"]
	// 	},
	// 	{
	// 		title: "Hotel Booking System",
	// 		description:
	// 			"Full stack Hotel booking website that allows users to browse available rooms, filter by location and category, view listings, make bookings. The platform includes secure user authentication, wishlist functionality, and booking management.",
	// 		images: [""],
	// 		liveUrl: "https://hotelapp-client.onrender.com/",
	// 		repoUrl: "https://github.com/s-murtaza/hotelApp",
	// 		stack: ["React", "Node.js", "Express.js", "PostgreSQL", "Material-UI", "Redux", "Framer Motion", "JWT"]
	// 	},
	// 	{
	// 		title : "Doors Indoor",
	// 		description: "Simple and clean Landing Page for doorsIndoor Pakistan featuring smooth animations, product catelogue,and email integration",
	// 		images: [''],
	// 		liveUrl: "https://www.doorsindoor.com/",
	// 		stack: ["NextJs", "Framer Motion", "ShadCn"]
	// 	},
		// {
		// 	title: "Restaurant App",
		// 	description:
		// }
	// ];

	// if (error && !data) {Hi, I'm Murtaza a full stack software 
	// 	return null;
	// }

	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<Suspense
						fallback={
							<div className="flex-center">
								<Loader />
							</div>
						}
					>
						<ErrorBoundary FallbackComponent={Error}>
							<Projects projects={projects} />
						</ErrorBoundary>
					</Suspense>

					<Link
						href={SITE_ROUTES.projects}
						tabIndex={-1}
						aria-label="Go to projects page"
						ref={btnRef}
						className="btn"
						style={{
							transform: btnRef ? "none" : "translateX(-50px)",
							opacity: isBtnInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<button aria-label="See more projects">More projects</button>
					</Link>
				</div>
			</section>
		</LazyMotion>
	);
}
