// pages/_app.tsx
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Header from "@/components/Header";
import BotpressChat from "@/components/BotpressChat";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${playfair.variable} bg-zinc-950 text-zinc-50 min-h-screen`}>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-10">
        <Component {...pageProps} />
      </main>
      <BotpressChat />
    </div>
  );
}
