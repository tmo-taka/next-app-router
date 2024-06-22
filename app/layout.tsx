import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "topのlayout",
    description: "説明文",
};

export default function Layout({children}: Props) {
    return (
        // NOTE: suppressHydrationWarning(https://financial-programmer.net/blog/nextjs-warning-extra-attributes)
        <html lang="en" suppressHydrationWarning>
            <body className="relative" suppressHydrationWarning>
                <div>{children}</div>
            </body>
        </html>
    );
}
