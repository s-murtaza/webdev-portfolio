"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { Services } from "./Services";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Bulb, Code, Briefcase, GraduationCap, Coffee } from "lucide-react";
import { AiFillBulb, AiOutlineBulb } from "react-icons/ai";

export function AboutSection() {
	const ref = useRef(null);
	const imageRef = useRef(null);
	const isImageInView = useInView(imageRef, { once: true });
	const isInView = useInView(ref, { once: true });
	const [isHovered, setIsHovered] = useState(false);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3
			}
		}
	};
	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 }
		}
	};

	const highlightVariants = {
		initial: { width: "0%" },
		animate: { width: "100%", transition: { duration: 0.8, ease: "easeOut" } }
	};

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 flex md:flex-row flex-col justify-between align-center gap-3 relative">
					<div
						tabIndex="0"
						ref={ref}
						className="text-lg w-full md:w-3/5 tracking-wide leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>My name is Saiyed Murtaza.</p>
						<p className="mb-8">
							Full-Stack Developer specializing in scalable web solutions for SMB's. With expertise
							in a modern techstack, I specialize in websites that drive results. Whether it&apos;s
							building, SaaS applications, Admin Panels, Integrating APIs or enhancing your online
							presence, I&apos;m here to turn your vision into reality.
						</p>
						<HeadingDivider
							title={<span className="text-sm">What you get with me</span>}
						></HeadingDivider>
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-base font-medium"
						>
							{[
								{
									icon: Code,
									text: "Transparency, No tech jargon",
									color: "from-indigo-500 to-violet-900"
								},
								{
									icon: Code,
									text: "Clean code.",
									color: "from-violet-500 to-blue-900"
								},
								{
									icon: AiOutlineBulb,
									text: "Messy ideas -> working web solutions",
									color: "from-blue-700 to-violet-500"
								},
								{
									icon: Coffee,
									text: "Robust architecture with long-term maintainability",
									color: "from-blue-700 to-indigo-500"
								}
							].map((item, index) => (
								<motion.div
									key={index}
									variants={itemVariants}
									className="flex items-center gap-3 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-200/10 dark:border-gray-700/30 hover:border-blue-light/30 transition-all duration-300"
								>
									<div
										className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} p-2 flex-center shadow-md`}
									>
										<item.icon size={20} className="text-white" strokeWidth={1.5} />
									</div>
									<span className="text-gray-700 dark:text-gray-300">{item.text}</span>
								</motion.div>
							))}
						</motion.div>
					</div>
					{/* <motion.div
						ref={imageRef}
						initial={{ opacity: 0, x: 100, rotate: -5 }}
						animate={
							isImageInView
								? { opacity: 1, x: 0, rotate: isHovered ? 0 : -5 }
								: { opacity: 0, x: 100, rotate: -5 }
						}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="w-full md:w-2/5 flex justify-center items-start"
					>
						<div
							className="relative"
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							<div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-600 rounded-lg transform rotate-3 scale-[1.03] opacity-70" />

							<div className="relative p-1 bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-[1.02]"> */}
					<Image
						src="/profile-pic.webp"
						alt="Saiyed Murtaza - Web Developer"
						width={375}
						height={375}
						className="object-cover rounded-md"
						loading="lazy"
					/>

					{/* Decorative elements */}
					{/* <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-light to-blue-normal rounded-full opacity-20" /> */}
					{/* <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-800 via-blue-800 to-indigo-900 rounded-full opacity-20" /> */}
					{/* </div>

							<motion.div
								className="absolute -right-5 -bottom-5 bg-gradient-to-r from-indigo-600 to-indigo-900 text-white px-4 py-2 rounded-full shadow-lg"
								initial={{ scale: 0, rotate: -10 }}
								animate={isImageInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
								transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
							>
								<span className="font-bold">5+ Satisfied</span> Clients
							</motion.div>
						</div>
					</motion.div> */}
				</div>

				<Services />
			</section>
		</LazyMotion>
	);
}
