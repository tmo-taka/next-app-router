import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "setのlayout",
	description: "説明文",
};

type Props = {
	children: React.ReactNode;
	modal: React.ReactNode;
};

export default function Layout({ children, modal }: Props) {
	return (
		// NOTE: suppressHydrationWarning(https://financial-programmer.net/blog/nextjs-warning-extra-attributes)
		// <body className="relative" suppressHydrationWarning>
		<div>
			<div>{children}</div>
			<Suspense
				fallback={<div className="h-full w-full bg-black">Loading...</div>}
			>
				{modal}
			</Suspense>
		</div>
		// </body>
		// </html>
	);
}
