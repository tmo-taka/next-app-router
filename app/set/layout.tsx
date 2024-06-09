import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "setのlayout",
    description: "説明文",
};

type Props =  {
    children: React.ReactNode
    modal: React.ReactNode
}

export default function Layout({children, modal}: Props) {
    return (
        <html lang="en">
            <body>
                <div>{children}</div>
                {modal}
            </body>
        </html>
    );
}
