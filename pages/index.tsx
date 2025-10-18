// pages/index.tsx
import Link from "next/link";
import WeatherBadge from "@/components/WeatherBadge";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center">
      {/* Slogan principal */}
      <h1 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
        Ta garde-robe, <span className="whitespace-nowrap">intelligemment organisée.</span>
      </h1>

      {/* Baseline identité */}
      <p className="mt-4 max-w-2xl font-sans text-lg text-zinc-300">
        GQOKA t’aide à exploiter ton dressing avant d’acheter plus.
        <br className="hidden sm:block" />
        Une garde-robe efficace, responsable et affirmée.
      </p>

      {/* Météo compacte */}
      <div className="mt-6 w-full max-w-xl rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3">
        <div className="flex items-center justify-center gap-3 text-zinc-200">
          <WeatherBadge />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/wardrobe"
          className="rounded-xl bg-zinc-100 px-5 py-3 text-zinc-900 transition hover:bg-white"
        >
          Commencer
        </Link>
        <Link
          href="/resale"
          className="rounded-xl border border-zinc-700 px-5 py-3 text-zinc-200 hover:border-zinc-400"
        >
          Revendre
        </Link>
      </div>

      {/* Vision courte */}
      <div className="mt-14 max-w-3xl text-balance text-zinc-300">
        <p>
          Nous optimisons ce que tu possèdes déjà avant tout achat. Style sans compromis,
          impact mesuré. Urban, moderne, utile.
        </p>
      </div>
    </section>
  );
}
