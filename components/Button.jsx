"use client"

import Link from "next/link";

export default function CustomButton({
	children,
	variant = "default",
	size = "default",
	className = "",
	href,
	onClick,
    arialabel
}) {
	const baseStyles =
		"cursor-pointer inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:opacity-50  group";

	const variants = {
		default: "bg-white text-black hover:bg-white/90",
		outline:
			"border border-white/20 hover:border-white bg-transparent text-white hover:bg-white/10",
		ghost: "hover:bg-white/10 text-white"
	};

	const sizes = {
		default: "h-10 py-2 px-4 text-sm",
		sm: "h-9 px-3 text-xs",
		lg: "h-12 px-6 text-base"
	};

	const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

	if (href) {
		return (
			<Link href={href} className={classes} aria-label={arialabel ? arialabel : null}>
				{children}
			</Link>
		);
	}

	return (
		<button onClick={onClick} className={classes}>
			{children}
		</button>
	);
}