import Link from "next/link";
import WeatherBadge from "@/components/WeatherBadge";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center bg-white min-h-screen text-zinc-900 px-6 py-20">
      {/* Slogan principal */}
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
        Ton style, ton histoire.
      </h1>

      {/* Baseline identité */}
      <p className="mt-4 max-w-2xl font-sans text-lg text-zinc-600">
        GQOKA t’aide à exploiter ton dressing avant d’acheter plus.
        <br className="hidden sm:block" />
        Une garde-robe efficace, responsable et affirmée.
      </p>

      {/* Météo agrandie */}
      <div className="mt-6 w-full max-w-md rounded-2xl border border-zinc-200 bg-zinc-50 shadow-md px-5 py-4">
        <WeatherBadge />
      </div>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/wardrobe"
          className="rounded-xl bg-zinc-900 text-white px-5 py-3 font-medium transition hover:bg-zinc-700"
        >
          Commencer
        </Link>
        <Link
          href="/resale"
          className="rounded-xl border border-zinc-800 px-5 py-3 text-zinc-800 hover:bg-zinc-100"
        >
          Revendre
        </Link>
      </div>

      {/* Vision */}
      <div className="mt-16 max-w-3xl text-balance text-zinc-600 text-base">
        <p>
          Un style maîtrisé, un impact mesuré. L’intelligence de ta garde-robe commence ici.
        </p>
      </div>
    </section>
  );
}

