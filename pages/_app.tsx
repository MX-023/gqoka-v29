import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import BotpressChat from "@/components/BotpressChat";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen text-white bg-gqoka">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-10">
        <Component {...pageProps} />
      </main>
      <BotpressChat />
    </div>
  );
}
