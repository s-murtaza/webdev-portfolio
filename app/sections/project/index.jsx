"use client";
import CustomCarousel from "components/Carousel";
import CustomButton from "components/Button";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projects from "constants/projects";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { HeadingDivider } from "components";
import Link from "next/link";
import { SITE_ROUTES } from "constants";
import { VscSourceControl } from "react-icons/vsc";

export function ProjectsSection() {
	const btnRef = useRef(null);
	const isBtnInView = useInView(btnRef, { once: true });

	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"]
	});

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
	return (
		<div className="min-h-screen max-w-7xl mx-auto py-24 text-white" id="projects">
			<div className="">
				<HeadingDivider title="Projects"></HeadingDivider>

				<div className="space-y-64 relative" ref={container}>
					{projects.map((project, i) => {
						const targetScale = 1 - (projects.length - i) * 0.05;
						return (
							<ProjectCard
								key={project.id}
								project={project}
								i={i}
								{...project}
								progress={scrollYProgress}
								range={[i * 0.25, 1]}
								targetScale={targetScale}
							/>
						);
					})}

					<motion.div
						className="flex justify-center pt-16"
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							type: "spring",
							stiffness: 100,
							damping: 20
						}}
						viewport={{ once: true, amount: 0.8 }}
					>
						<Link
							href={"/projects"}
							tabIndex={-1}
							aria-label="Go to projects page"
							ref={btnRef}
							className="btn bg-gradient-to-t from-blue-700 via-indigo-700 to-violet-900"
							style={{
								transform: btnRef ? "none" : "translateX(-50px)",
								opacity: isBtnInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							{" "}
							See More Projects
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

// Custom Modal Component
function CustomModal({ isOpen, onClose, children }) {
	if (!isOpen) return null;

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
				onClick={onClose}
			>
				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.9, opacity: 0 }}
					transition={{ type: "spring", damping: 20, stiffness: 300 }}
					className="bg-zinc-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
					onClick={(e) => e.stopPropagation()}
				>
					<div className="p-6">
						{children}
						<button
							onClick={onClose}
							className="absolute top-4 right-4 text-gray-400 hover:text-white"
							aria-label="Close modal"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						</button>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}

function ProjectCard({ i, project, progress, range, targetScale, links }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"]
	});

	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const scale = useTransform(progress, range, [1, targetScale]);

	const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
	// const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);
	// const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, index % 2 === 0 ? -2 : 2]);

	const handleImageClick = (imageIndex) => {
		setActiveImageIndex(imageIndex);
		setIsModalOpen(true);
	};

	return (
		<div
			ref={container}
			className="sticky top-0 h-[100vh] mb-12 md:mb-0 flex justify-center items-center"
		>
			<motion.div
				style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
				className="dark:bg-[#1a2132] bg-blue-50 py-4 px-2 md:p-8 rounded-lg grid md:grid-cols-[_3fr_2fr] gap-8 h-[700px] md:h-fit dark:text-brand-light text-brand-dark md:gap-16 items-center"
			>
				{/* Left side - Project Images Carousel */}
				<div className="relative">
					<motion.div>
						<CustomCarousel
							images={project.images}
							projectTitle={project.title}
							onImageClick={handleImageClick}
						/>
					</motion.div>
				</div>

				{/* Right side - Project Details */}
				<motion.div
					style={{ y: useTransform(scrollYProgress, [0, 1], [0, 0]) }} //possibly change
					className="space-y-6"
				>
					<motion.h3
						className="text-3xl font-bold"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<span className="relative z-10">{project.title}</span>
					</motion.h3>
					<motion.div
						initial={{ opacity: 0, width: 0 }}
						whileInView={{ opacity: 1, width: "40%", height: '2px', backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.2) 60%)' }}
						transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{once: true}}
            className={`bg-gradient-to-r from-indigo-300 to-indigo-500 rounded-full mb-2`}
					/>

					<motion.p
						className=""
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						{project.description}
					</motion.p>

					<motion.div
						className="flex flex-wrap gap-2"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
					>
						{project.technologies.map((tech) => (
							<span key={tech} className="px-3 py-1 bg-violet-400/15 rounded-md text-sm">
								{tech}
							</span>
						))}
					</motion.div>

					<motion.div
						className="flex gap-4 pt-4"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
					>
						{/* <CustomButton href={project.links.live} variant="outline" size="sm" className="gap-2">
						<ExternalLink className="h-4 w-4" />
						<span>Live Demo</span>
					</CustomButton>
					<CustomButton href={project.links.github} variant="outline" size="sm" className="gap-2">
						<Github className="h-4 w-4" />
						<span>Source Code</span>
					</CustomButton> */}
						<div className="flex-center gap-10">
							{links.github ? (
								<Link
									href={links.github}
									target="_blank"
									className="icon-link-btn"
									title="Go to Github repository"
								>
									<VscSourceControl />
									<span>Source</span>
								</Link>
							) : (
								<p className="text-sm">commercial private repository</p>
							)}
							{links.live ? (
								<Link
									href={links.live}
									target="_blank"
									className="icon-link-btn"
									title="Go to live address"
								>
									<Github className="h-4 w-4" />
									<span>Demo</span>
								</Link>
							) : (
								<p className="text-sm">currently unavailable</p>
							)}
						</div>
					</motion.div>
				</motion.div>

				{/* Modal for enlarged images */}
				<CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
					<div className="space-y-4">
						<div>
							<h3 className="text-xl font-bold">{project.title}</h3>
							<p className="text-gray-400">Project Screenshot {activeImageIndex + 1}</p>
						</div>

						<div className="mt-4">
							<CustomCarousel
								images={project.images}
								projectTitle={project.title}
								onImageClick={() => {}}
							/>
						</div>
					</div>
				</CustomModal>
			</motion.div>
		</div>
	);
}
