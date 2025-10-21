// pages/_app.tsx
import BotpressChat from "@/components/BotpressChat";
...
<BotpressChat />

import type { AppProps } from "next/app";
import "../styles/globals.css";
import BotpressChat from "../components/BotpressChat";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white antialiased">
      <Component {...pageProps} />
      <BotpressChat />
    </div>
  );
}
