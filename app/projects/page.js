"use client";
import { useState, useEffect } from "react";
import { HeadingDivider, Loader } from "components";
import Error from "app/error";
import { ProjectItem } from "../../components/project-item.component";

export default function Page() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchProjects() {
			try {
				const res = await fetch("/api/projects");
				if (!res.ok) throw new Error("Failed to fetch projects");
				const data = await res.json();
				setProjects(data);
			} catch (err) {
				console.error("Error loading projects:", err);
				setError(err.message || "Something went wrong");
			} finally {
				setLoading(false);
			}
		}
		fetchProjects();
	}, []);

	if (error) {
		return <Error />;
	}

	return (
		<div className="container-md">
			<section id="projects" className="section">
				<HeadingDivider title="All projects" />
				<div className="mt-12">
					{loading ? (
						<Loader />
					) : (
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
							{projects
								?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
								?.map((project, index) => (
									<ProjectItem key={project._id} project={project} index={index} />
								))}
						</div>
					)}
				</div>
			</section>
		</div>
	);
}
