import { Suspense, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import { Loader } from "components";
import { GitFork, ExternalLink } from "lucide-react";
import "react-image-gallery/styles/css/image-gallery.css";

export function ProjectItem({ project, index }) {
	const { description, images, featureDoc, links, technologies, title } = project;
	const cardRef = useRef(null);
	const isInView = useInView(cardRef, { once: true });

	const galleryImages = images.map((img, index) => ({
		key: index,
		original: img.url,
		loading: "lazy"
	}));

	return (
		<article
			ref={cardRef}
			className="flex flex-col rounded-lg bg-card-light dark:bg-card-dark"
			style={{
				transform: isInView
					? "none"
					: `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
				opacity: isInView ? 1 : 0,
				transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index === 0 ? 0 : 25 * index}ms`
			}}
		>
			<figure>
				<div className="aspect-video w-full h-full">
					<Suspense fallback={<Loader />}>
						<ImageGallery
							items={galleryImages}
							showPlayButton={false}
							showThumbnails={false}
							showIndex
							lazyload
							additionalClass="gallery-item"
							// autoPlay={false}
							// slideInterval={5000} // 3 seconds
						/>
					</Suspense>
				</div>
			</figure>

			<div className="flex-[2] px-5 py-6 text-center flex flex-col gap-10">
				<header className="flex-1 flex items-center justify-start flex-col gap-3">
					<h3 tabIndex="0" className="text-2xl font-bold">
						{title}
					</h3>
					<p tabIndex="0" className="leading-7 font-light">
						{description}
					</p>
					{featureDoc && (
						<Link href={featureDoc} className="underline" target="_blank" rel="noopener noreferrer">
							Complete Feature Documention
						</Link>
					)}
				</header>

				<footer className="flex flex-col gap-10">
					{!!technologies && (
						<div className="flex-center flex-wrap gap-3">
							{technologies.map((tag) => (
								<span
									key={tag}
									tabIndex="0"
									className="px-2 text-sm leading-normal rounded bg-badge-light/50 dark:bg-badge-dark"
								>
									{tag}
								</span>
							))}
						</div>
					)}

					<div className="capitalize text-sm flex-center gap-10 text-white">
						{links.github.url ? (
							<Link
								href={links.github.url}
								target="_blank"
								className="icon-link-btn"
								title="Go to Github repository"
							>
								<GitFork className="h-4 w-4" />
								<span>Source</span>
							</Link>
						) : (
							<span className="flex gap-2 leading-none">
								<GitFork className="h-4 w-4" />
								{links.github.unavailableMsg ?? "commercial repository"}
							</span>
						)}
						{links.live.url ? (
							<Link
								href={links.live.url}
								target="_blank"
								className="icon-link-btn"
								title="Go to live address"
							>
								<ExternalLink className="h-4 w-4" />
								<span>Demo</span>
							</Link>
						) : (
							<span className="flex gap-2 leading-none">
								<ExternalLink className="h-4 w-4" />
								{links.live.unavailableMsg ?? "unavailable"}
							</span>
						)}
					</div>
				</footer>
			</div>
		</article>
	);
}
