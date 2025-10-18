import Link from "next/link";
import WeatherBadge from "@/components/WeatherBadge";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center h-text">
      {/* HERO */}
      <h1 className="h-title text-4xl sm:text-5xl md:text-6xl leading-tight">
        Ta garde-robe, <span className="whitespace-nowrap">intelligemment organisée.</span>
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-white/80">
        GQOKA t’aide à exploiter ton dressing avant d’acheter plus.
        <br className="hidden sm:block" />
        Une garde-robe efficace, responsable et affirmée.
      </p>

      {/* Meteo compacte */}
      <div className="mt-6 w-full max-w-xl">
        <div className="card flex items-center justify-center gap-3">
          <WeatherBadge />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/signup" className="btn-primary">Commencer</Link>
        <Link href="/wardrobe" className="btn-ghost">Découvrir</Link>
      </div>

      {/* Vision courte */}
      <div className="mt-14 max-w-3xl text-white/80">
        <p>
          Nous optimisons ce que tu possèdes déjà avant tout achat. Style sans compromis,
          impact mesuré. Urbain, moderne, utile.
        </p>
      </div>
    </section>
  );
}
