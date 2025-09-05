"use client";

import { HeadingDivider } from "components";
import { LazyMotion, domAnimation, motion, useInView } from "framer-motion";
import {
	BarChart3,
	Brain,
	Cloud,
	CreditCard,
	Database,
	Layers,
	LineChart,
	MessageSquareText,
	MonitorDot,
	PackageSearch,
	ShieldCheck
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TimeLineData = [
	{
		heading: "Software",
		icon: MonitorDot,
		secondaryIcons: [ShieldCheck, Database, BarChart3],
		color: "from-indigo-400 to-blue-700",
		text: ["Rental/Booking Software", "Customer/Admin Portals", "RBAC Systems", "Payment Systems"],
		bgPattern:
			"radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 90%)"
	},
	{
		heading: "AI Solutions",
		icon: Brain,
		secondaryIcons: [MessageSquareText, Database, LineChart],
		color: "from-violet-500 to-indigo-700",
		text: ["Chatbots", "Rags", "Agentic AI", "Vector DBs", "Automations"],
		bgPattern:
			"radial-gradient(circle at 10% 20%, rgba(109, 40, 217, 0.1) 0%, rgba(91, 33, 182, 0.05) 90%)"
	},
	// {
	// 	heading: "Business Pages",
	// 	icon: Globe,
	// 	secondaryIcons: [Building2, Smartphone, MailCheck],
	// 	color: "from-indigo-400 to-blue-600",
	// 	text: ["Company Profiles", "Responsive Design", "Contact Forms"],
	// 	bgPattern:
	// 		"radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 90%)"
	// },
	{
		heading: "SaaS",
		icon: Cloud,
		secondaryIcons: [CreditCard, Layers, PackageSearch],
		color: "from-indigo-500 to-violet-700",
		text: ["Subscription Models", "API Integrations", "Scalability", "Analytical Tools"],
		bgPattern:
			"radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 90%)"
		// "radial-gradient(circle at 10% 20%, rgba(109, 40, 217, 0.1) 0%, rgba(91, 33, 182, 0.05) 90%)"
	}
];

// Animation variants for the icons
const iconVariants = {
	hidden: { opacity: 0, scale: 0.6, rotate: -10 },
	visible: {
		opacity: 1,
		scale: 1,
		rotate: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut"
		}
	},
	hover: {
		scale: 1.1,
		rotate: 5,
		transition: { duration: 0.3 }
	}
};

const pulseVariants = {
	initial: { scale: 1 },
	pulse: {
		scale: [1, 1.05, 1],
		transition: {
			duration: 2,
			repeat: Infinity,
			repeatType: "reverse"
		}
	}
};

const floatVariants = {
	initial: { y: 0 },
	float: {
		y: [0, -8, 0],
		transition: {
			duration: 3,
			repeat: Infinity,
			repeatType: "reverse",
			ease: "easeInOut"
		}
	}
};

// const secondaryIconVariants = {
// 	hidden: { opacity: 0, y: 10 },
// 	visible: (i) => ({
// 		opacity: 1,
// 		y: 0,
// 		transition: {
// 			delay: 0.2 + i * 0.1,
// 			duration: 0.5
// 		}
// 	}),
// 	hover: {
// 		y: -5,
// 		transition: { duration: 0.2 }
// 	}
// };

export function Services() {
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef(null);
	const isInView = useInView(carouselRef, { once: true, amount: 0.2 });

	const scroll = (node, left) => {
		return node.scrollTo({ left, behavior: "smooth" });
	};

	const handleClick = (e, i) => {
		e.preventDefault();
		setActiveItem(i);

		if (carouselRef.current) {
			const scrollLeft = Math.floor(
				carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
			);

			scroll(carouselRef.current, scrollLeft);
		}
	};

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) *
					TimeLineData.length
			);

			setActiveItem(index);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<LazyMotion features={domAnimation}>
			<div className="my-10">
				<HeadingDivider title="Services" />

				{/* Service navigation dots */}
				<div className="md:hidden flex justify-center gap-3 mt-12">
					{TimeLineData.map((_, index) => (
						<button
							key={`dot-${index}`}
							onClick={(e) => handleClick(e, index)}
							className={`w-2 h-2 rounded-full transition-all duration-300 ${
								activeItem === index
									? "bg-blue-normal scale-125"
									: "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
							}`}
							aria-label={`Navigate to ${TimeLineData[index].heading}`}
						/>
					))}
				</div>
			</div>

			<ul
				ref={carouselRef}
				onScroll={handleScroll}
				className="flex flex-row flex-nowrap gap-5 mt-8md:mt-16 justify-between overflow-x-auto snap-x cursor-pointer hide-scroll-bar pb-8"
			>
				{TimeLineData.map((item, index) => {
					const mod = (index + 2) % 2;
					const IconComponent = item.icon;

					return (
						<li
							id={`carousel__item-${index}`}
							key={index}
							className={`flex flex-col gap-4 snap-start w-[calc((100%/2)-30px)] min-w-[280px] md:w-[30%] p-6 
                dark:bg-gray-800/80 bg-white/90 rounded-xl backdrop-blur-xl transition-all duration-300
                border border-transparent hover:border-gray-200 dark:hover:border-gray-700
                ${mod !== 0 ? "md:mt-10" : ""}
                ${mod !== 1 ? "md:mb-10" : ""}`}
							onClick={(e) => handleClick(e, index)}
							style={{
								transform: isInView
									? "none"
									: `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
								opacity: isInView ? 1 : 0,
								transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
									index === 0 ? 0.5 : 1.05 * index
								}s`,
								background: `${item.bgPattern}`
							}}
						>
							{/* Icon header section */}
							<div className="flex flex-col items-center mb-4">
								<div
									className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} p-3 flex-center shadow-lg mb-4`}
								>
									<motion.div
										initial="hidden"
										animate={isInView ? "visible" : "hidden"}
										whileHover="hover"
										variants={iconVariants}
									>
										<IconComponent size={28} className="text-white" strokeWidth={1.5} />
									</motion.div>
								</div>

								<h3
									tabIndex="0"
									aria-label={item.heading}
									className="text-2xl font-bold text-center mb-2"
								>
									{item.heading}
								</h3>

								<motion.div
									style={{
										backgroundImage:
											"linear-gradient(120deg, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.2) 60%)"
									}}
									initial={{ width: 0, opacity: 0 }}
									animate={isInView ? { width: 80, opacity: 1 } : { width: 0, opacity: 0 }}
									transition={{ delay: 0.5, duration: 0.6 }}
									className={`h-[2px] w-20 bg-gradient-to-r ${item.color} rounded-full mb-2`}
								/>
							</div>

							{/* Secondary icons */}
							{/* <div className="flex justify-center gap-4 mb-4">
								{item.secondaryIcons.map((SecondaryIcon, i) => (
									<motion.div
										key={`secondary-icon-${i}`}
										custom={i}
										initial="hidden"
										animate={isInView ? "visible" : "hidden"}
										whileHover="hover"
										variants={secondaryIconVariants}
										className="flex-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 p-1.5"
									>
										<SecondaryIcon size={18} className="text-gray-600 dark:text-gray-300" />
									</motion.div>
								))}
							</div> */}

							{/* Service list */}
							<ul className="space-y-2 mt-2">
								{item.text.map((text, i) => (
									<motion.li
										className="flex items-start gap-2"
										key={i}
										initial={{ opacity: 0, x: -10 }}
										animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
										transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
									>
										<motion.div
											variants={pulseVariants}
											initial="initial"
											animate="pulse"
											className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${item.color}`}
										/>
										<p className="tracking-wide text-gray-700 dark:text-gray-300" tabIndex="0">
											{text}
										</p>
									</motion.li>
								))}
							</ul>

							{/* Floating decoration */}
							<motion.div
								className="absolute -z-10 opacity-20 right-4 bottom-4"
								variants={floatVariants}
								initial="initial"
								animate="float"
							>
								<IconComponent size={60} className="text-current opacity-20" strokeWidth={1} />
							</motion.div>
						</li>
					);
				})}
			</ul>

			{/* Call to action */}
			{/* <motion.div 
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <button className="px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-pink text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2 group">
          <span>Explore All Services</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.div>
        </button>
      </motion.div> */}
		</LazyMotion>
	);
}
