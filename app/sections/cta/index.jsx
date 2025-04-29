"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import ShinyText from "components/Shiny";
import Link from "next/link";

export function CTASection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	return (
		<section ref={ref} className="relative py-24 px-4 overflow-hidden">
			{/* Background elements */}
			<div className="absolute -top-40 -right-40 w-96 h-96 blur-3xl" />
			<div className="absolute -bottom-40 -left-40 w-96 h-96" />

			{/* Decorative dots */}
			<div
				className="absolute inset-0 opacity-20"
				style={{
					backgroundImage: "radial-gradient(rgba(59,130,246,0.3) 1px, transparent 1px)",
					backgroundSize: "20px 20px"
				}}
			/>

			<div className="max-w-4xl mx-auto text-center relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="space-y-8"
				>
					<h2 className="text-4xl md:text-5xl font-bold">
						Ready to bring your{" "}
						<span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
							vision to life
						</span>
						?
					</h2>

					<p className="text-xl dark:text-gray-300 text-gray-500 max-w-2xl mx-auto">
						Let's discuss your needs and explore further.
					</p>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
						transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 100 }}
						className="pt-6"
					>
						<Link
							href="https://cal.com/saiyed-murtaza"
							tabIndex="0"
							className="inline-flex items-center rounded-lg bg-gradient-to-t from-blue-700 via-indigo-700 to-violet-900 gap-3 px-8 py-4 text-lg"
							aria-label="Latest projects"
						>
							<Calendar className="w-5 h-5" />
							<ShinyText
								text="Book A Free Consultation"
								disabled={false}
								speed={3}
								className="custom-class"
							></ShinyText>
							<motion.div
								animate={{ x: [0, 5, 0] }}
								transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
							>
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</motion.div>
						</Link>
						{/* <a
							href="https://calendly.com/your-username"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-full text-lg font-medium hover:shadow-lg hover:shadow-brand-purple/20 transition-all duration-300 group"
						>
							<span>Book a Free Consultation</span>
						</a> */}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
