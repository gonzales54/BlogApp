import "destyle.css";
import "@/styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return <UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>;
}
