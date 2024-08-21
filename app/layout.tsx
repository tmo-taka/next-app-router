import type { Metadata } from "next";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import Error from "./error";
import { FetchMenu } from "./ui/FetchMenu";
import { Loading } from "./ui/Loading";
import { Navigation } from "./ui/Navigation";
import "./globals.css";

export const metadata: Metadata = {
	title: "topのlayout",
	description: "説明文",
};

export default function Layout({ children }: Props) {
	// throw 'こいでエラー'

	return (
		// NOTE: suppressHydrationWarning(https://financial-programmer.net/blog/nextjs-warning-extra-attributes)
		<html lang="ja" suppressHydrationWarning>
			<body className="relative" suppressHydrationWarning>
				<Suspense fallback={<Loading />}>
					<div className="mb-4 flex w-full justify-center bg-white">
						<Navigation />
					</div>
				</Suspense>
				<div className="flex content-between">
					<Suspense fallback={<div>こちらはページメニューがわ</div>}>
						<ErrorBoundary fallback={<Error />}>
							<FetchMenu />
						</ErrorBoundary>
					</Suspense>
					<main className="flex w-full items-center justify-center">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
