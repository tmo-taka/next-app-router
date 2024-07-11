import Image from "next/image";
import { Suspense } from 'react'
import Providers from "./provider";
import { FetchData } from "./ui/FetchData";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<div>Loading....</div>}>
        <Providers>
          <FetchData />
        </Providers>
      </Suspense>
    </main>
  );
}
