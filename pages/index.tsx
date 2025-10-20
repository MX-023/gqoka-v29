// pages/index.tsx
import Link from "next/link";
import WeatherBadge from "../components/WeatherBadge";
import { FiPlay, FiRefreshCcw } from "react-icons/fi";
import { LuShirt } from "react-icons/lu";

export default function Home() {
  return (
    <main className="px-6">
      <section className="max-w-6xl mx-auto py-16 md:py-24 text-center">
        <h1 className="font-[ClashDisplay] text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Ta garde-robe, intelligemment organisée.
        </h1>

        <p className="mt-4 text-xl text-zinc-300">
          Style maîtrisé. Impact assuré.
        </p>

        {/* Météo compacte */}
        <div className="mt-6 flex justify-center">
          <div className="w-full max-w-md rounded-xl bg-white text-black px-4 py-3 shadow-sm">
            <div className="flex items-center justify-center gap-3">
              <WeatherBadge />
            </div>
          </div>
        </div>

        {/* CTA en icônes */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/wardrobe"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 hover:border-zinc-400"
            aria-label="Ouvrir la garde-robe"
          >
            <LuShirt className="text-xl" />
            <span className="sr-only">Garde-robe</span>
          </Link>

          <Link
            href="/resale"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 hover:border-zinc-400"
            aria-label="Revendre"
          >
            <FiRefreshCcw className="text-xl" />
            <span className="sr-only">Revendre</span>
          </Link>

          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 hover:opacity-90"
            aria-label="Commencer"
          >
            <FiPlay className="text-xl" />
            <span className="sr-only">Commencer</span>
          </Link>
        </div>

        {/* Vision */}
        <p className="mt-14 mx-auto max-w-3xl text-zinc-300">
          Ton style est déjà là. Débloque le potentiel de ton dressing et donne une suite au reste.
        </p>
      </section>
    </main>
  );
}
