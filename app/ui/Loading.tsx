"use client";

export const Loading = () => {
	return (
		<div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-white opacity-35">
			<div className="h-2 w-2 animate-ping rounded-full bg-accent" />
			<div className="mx-4 h-2 w-2 animate-ping rounded-full bg-accent" />
			<div className="h-2 w-2 animate-ping rounded-full bg-accent" />
		</div>
	);
};
