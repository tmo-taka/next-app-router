import type { Metadata } from "next";
import { Suspense } from 'react'
import Providers from "./provider";
import Error from "./error";
import {Loading} from "./ui/Loading";
import { FetchMenu } from "./ui/FetchMenu";
import { Navigation } from "./ui/Navigation";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import './globals.css'

export const metadata: Metadata = {
    title: "topのlayout",
    description: "説明文",
};

export default function Layout({children}: Props) {
    // throw 'こいでエラー'

    return (
        // NOTE: suppressHydrationWarning(https://financial-programmer.net/blog/nextjs-warning-extra-attributes)
        <html lang="ja" suppressHydrationWarning>
            <body className="relative" suppressHydrationWarning>
                <Providers>
                    <Suspense fallback={<Loading />}>
                        <div className="mb-4 w-full bg-white flex justify-center">
                            <Navigation />
                        </div>
                    </Suspense>
                    <div className="flex content-between">
                        <Suspense fallback={<div>こちらはページメニューがわ</div>}>
                            <ErrorBoundary fallback={<Error />}>
                                <FetchMenu />
                            </ErrorBoundary>
                        </Suspense>
                        <main className="w-full flex justify-center items-center">{children}</main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
