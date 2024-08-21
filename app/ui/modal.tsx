"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";

export function Modal({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	const handleClick = () => {
		router.back();
	};

	return (
		<div
			className="fixed top-0 left-0 h-full w-full bg-black opacity-35"
			suppressHydrationWarning
		>
			<Button childClick={() => handleClick()}>モーダルを閉じる</Button>
			<div className="absolute top-1/2 left-1/2 h-1/3 w-1/2 bg-white">
				{children}
			</div>
		</div>
	);
}
