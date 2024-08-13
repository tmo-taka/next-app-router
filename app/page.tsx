import Image from "next/image";
import { Suspense } from 'react'
import Providers from "./provider";
import Error from "./error";
import {Loading} from "./ui/Loading";
import { FetchMenu } from "./ui/FetchMenu";
import { Navigation } from "./ui/Navigation";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Suspense fallback={<Loading />}> */}
        <Providers>
          <Suspense fallback={<Loading />}>
            <Navigation />
          </Suspense>
          <Suspense fallback={<div>こちらはページメニューがわ</div>}>
            <ErrorBoundary fallback={<Error />}>
              <FetchMenu />
            </ErrorBoundary>
          </Suspense>
        </Providers>
      {/* </Suspense> */}
    </main>
  );
}
