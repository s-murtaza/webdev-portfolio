"use client";

import { useRef} from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./Services";
import Image from "next/image";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 flex md:flex-row flex-col justify-between gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl w-3/5 font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>My name is Saiyed Murtaza.</p>
						<p>
							I&apos;m a web developer dedicated to crafting tailored software solutions for small
							and medium businesses. With expertise in modern technologies like React, Node.js, and
							PostgreSQL, I specialize in creating responsive, user-friendly websites that drive
							results. Whether it&apos;s building a robust e-commerce platform, SaaS applications,
							Admin Panels, Integrating APIs or enhancing your online presence, I&apos;m here to
							turn your vision into reality. Let&apos;s create something amazing together!
						</p>
					</div>
					<div
						style={{
							transform: isInView ? "none" : "translateX(+200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<Image
							src="/profilePic.png"
							alt="profilePic"
							width={350}
							height={350}
							className="object-cover rounded-md"
						/>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
