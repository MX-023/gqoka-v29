import Link from "next/link";

export default function Home() {
  return (
    <div className="py-10 md:py-14">
      {/* HERO */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl tracking-[0.35em] font-semibold">G Q O K A</h1>
        <p className="text-sm md:text-base text-neutral-600">Révèle ce que tu possèdes déjà.</p>
        <div className="pt-2 space-y-2">
          <h2 className="text-2xl md:text-4xl font-semibold">Un style sans compromis.</h2>
          <p className="text-neutral-700">Moins d’achats. Plus de sens.</p>
          <p className="text-neutral-700">Avant de posséder plus, commence par maîtriser ton dressing.</p>
        </div>
        <div className="pt-4 flex justify-center">
          <Link href="/signup" className="px-5 py-3 rounded-md bg-black text-white">Commencer</Link>
        </div>
      </section>

      {/* MISSION */}
      <section className="mt-14 grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Notre engagement</h3>
          <p className="text-neutral-700">
            GQOKA n’est pas une plateforme de plus. C’est une façon plus intelligente et responsable d’exprimer ton style.
            Avant d’acheter, valorise d’abord ce que tu possèdes. Nous aidons à maîtriser sa garde-robe, réduire l’impact,
            et choisir avec intention.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Pourquoi GQOKA</h3>
          <p className="text-neutral-700">
            Style, Simplicité, Impact. Nous combinons design, data et bon sens. Moins de friction, plus de clarté.
            Ta garde-robe redevient un outil personnel, pas un flux sans fin d’achats.
          </p>
        </div>
      </section>

      {/* 3 PILIERS */}
      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border bg-white p-5">
          <h4 className="font-semibold mb-1">Style</h4>
          <p className="text-sm text-neutral-700">Des choix maîtrisés, adaptés à toi, pas aux tendances qui passent.</p>
        </div>
        <div className="rounded-xl border bg-white p-5">
          <h4 className="font-semibold mb-1">Simplicité</h4>
          <p className="text-sm text-neutral-700">Une interface claire, mobile-first, pensée pour l’usage quotidien.</p>
        </div>
        <div className="rounded-xl border bg-white p-5">
          <h4 className="font-semibold mb-1">Impact</h4>
          <p className="text-sm text-neutral-700">Moins d’achats inutiles, plus d’usage de ce que tu possèdes.</p>
        </div>
      </section>
    </div>
  );
}
