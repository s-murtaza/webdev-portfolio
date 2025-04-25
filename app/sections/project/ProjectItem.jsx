import { Suspense, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import { Loader } from "components";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import "react-image-gallery/styles/css/image-gallery.css";

export function ProjectItem({ project, index }) {
	const { description, images, links, technologies, title } = project;
	const cardRef = useRef(null);
	const isInView = useInView(cardRef, { once: true });

	const galleryImages = images.map((img, index) => ({
		key: index,
		original: img,
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
				<div className="aspect-[12/9.2] w-full h-full">
					<Suspense fallback={<Loader />}>
						<ImageGallery
							items={galleryImages}
							showPlayButton={false}
							showThumbnails={false}
							showIndex
							lazyload
							additionalClass="gallery-item"
							autoPlay={true}							
							slideInterval={5000} // 3 seconds

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
				</header>

				<footer className="flex flex-col gap-10">
					{!!technologies.length && (
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
						):(<p className="text-sm">
							commercial private repository 
						</p>)}
						{links.live ? (
							<Link
								href={links.live}
								target="_blank"
								className="icon-link-btn"
								title="Go to live address"
							>
								<FiExternalLink />
								<span>Demo</span>
							</Link>
						):(
							<p className="text-sm">currently unavailable</p>
						)}
					</div>
				</footer>
			</div>
		</article>
	);
}
