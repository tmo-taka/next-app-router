import Image from "next/image";
import { Suspense } from 'react'
import Providers from "./provider";
import { FetchMenu } from "./ui/FetchMenu";
import Error from "./error";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<Loading />}>
        <Providers>
          <ErrorBoundary fallback={<Error />}>
            <FetchMenu />
          </ErrorBoundary>
        </Providers>
      </Suspense>
    </main>
  );
}
