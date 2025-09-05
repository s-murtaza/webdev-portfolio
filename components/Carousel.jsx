"use client"
import { useState } from "react";
import { ChevronRight, ExternalLink, Github, ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function CustomCarousel({ images, projectTitle, onImageClick }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	return (
		<div className="relative w-full">
			<div className="overflow-hidden rounded-md">
				<div className="relative aspect-video">
					<Image
						src={images[currentIndex].url || "/placeholder.svg"}
						alt={`${projectTitle} screenshot ${currentIndex + 1}`}
						fill
						className="object-cover transition-transform duration-500"
					/>
					<div
						className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
						onClick={() => onImageClick(currentIndex)}
					>
						<span className="text-white font-medium">View Larger</span>
					</div>
				</div>
			</div>

			{/* Navigation buttons */}
			<button
				onClick={prevSlide}
				className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
				aria-label="Previous slide"
			>
				<ChevronLeft className="h-5 w-5" />
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
				aria-label="Next slide"
			>
				<ChevronRight className="h-5 w-5" />
			</button>

			{/* Dots indicator */}
			<div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-2 h-2 rounded-full transition-colors ${
							index === currentIndex ? "bg-white" : "bg-white/50"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}