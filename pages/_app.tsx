import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Header from "@/components/Header";
import BotpressChat from "@/components/BotpressChat";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#111]">
      <Header />
      <main className="px-6 md:px-10 max-w-6xl mx-auto">{<Component {...pageProps} />}</main>
      <footer className="mt-16 py-10 text-xs text-neutral-500 text-center">
        © {new Date().getFullYear()} GQOKA • <a href="/cookies" className="underline">Cookies</a> • <a href="/privacy" className="underline">Confidentialité</a> • <a href="/terms" className="underline">CGU</a>
      </footer>
      <BotpressChat />
    </div>
  );
}
