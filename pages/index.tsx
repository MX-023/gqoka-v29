import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12 md:py-16">
      {/* HERO */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl tracking-[0.35em] font-semibold">G Q O K A</h1>
        <p className="text-sm md:text-base text-white/70">Révèle ce que tu possèdes déjà.</p>

        <div className="pt-3 space-y-2">
          <h2 className="text-2xl md:text-4xl font-semibold">Un style sans compromis.</h2>
          <p className="text-white/80">GQOKA t’aide à exploiter ton dressing avant d’acheter plus.</p>
          <p className="text-white/60">Une garde-robe efficace, responsable et affirmée.</p>
        </div>

        <div className="pt-5 flex justify-center gap-3">
          <Link href="/signup" className="px-5 py-3 rounded-md bg-white text-black hover:bg-white/90">Commencer</Link>
          <Link href="/wardrobe" className="px-5 py-3 rounded-md border border-white/20 hover:border-white/40">Découvrir</Link>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="space-y-3 bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="text-xl font-semibold">Notre engagement</h3>
          <p className="text-white/70 text-sm">
            Moins d’achats. Plus de sens. Avant d’acheter, valorise ce que tu possèdes.
            Nous aidons à maîtriser sa garde-robe, réduire l’impact et choisir avec intention.
          </p>
        </div>
        <div className="space-y-3 bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="text-xl font-semibold">Pourquoi GQOKA</h3>
          <p className="text-white/70 text-sm">
            Style, Simplicité, Impact. Design clair, data utile, bons réflexes.
            Ta garde-robe redevient un outil personnel, pas un flux d’achats.
          </p>
        </div>
      </section>

      {/* 3 PILIERS */}
      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h4 className="font-semibold mb-1">Style</h4>
          <p className="text-sm text-white/70">Des choix maîtrisés, adaptés à toi.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h4 className="font-semibold mb-1">Simplicité</h4>
          <p className="text-sm text-white/70">Mobile-first, rapide, clair.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h4 className="font-semibold mb-1">Impact</h4>
          <p className="text-sm text-white/70">Consommer moins. Porter mieux.</p>
        </div>
      </section>
    </div>
  );
}
