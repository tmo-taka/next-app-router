import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テストだ",
  description: "話たい",
};

type Props =  {
    children: React.ReactNode
    a: React.ReactNode
    b: React.ReactNode
}

export default function Layout({children, a, b}: Props) {
    return (
        <div>
            <div>{children}</div>
            <div>{a}</div>
            <div>{b}</div>
        </div>
    );
}
