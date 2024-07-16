import Image from "next/image";
import { Suspense } from 'react'
import Providers from "./provider";
import { FetchMenu } from "./ui/FetchMenu";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<div>Loading....</div>}>
        <Providers>
          <FetchMenu />
        </Providers>
      </Suspense>
    </main>
  );
}
