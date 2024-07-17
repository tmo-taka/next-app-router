import type { Metadata } from "next";
import { Suspense } from 'react';
import Providers from "@/app/provider";

export const metadata: Metadata = {
    title: "contentsのlayout",
    description: "説明文",
};

type Props =  {
    children: React.ReactNode
}

export default function Layout({children}: Props) {
    return (
        <div>
            <Providers>
                <Suspense fallback={<div className="w-full h-full bg-black">Loading...</div>}>
                    <div>{children}</div>
                </Suspense>
            </Providers>
        </div>
    );
}
