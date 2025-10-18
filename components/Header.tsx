// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-800">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-3 items-center px-5 py-5">
        {/* left spacer */}
        <div />

        {/* center brand */}
        <div className="text-center">
          <Link href="/" className="font-serif text-2xl tracking-widest">
            GQOKA
          </Link>
        </div>

        {/* right actions */}
        <nav className="flex justify-end gap-3">
          <Link
            href="/wardrobe"
            className="rounded-xl bg-zinc-100 px-4 py-2 text-zinc-900 transition hover:bg-white"
          >
            Ma garde-robe
          </Link>
          <Link
            href="/resale"
            className="rounded-xl border border-zinc-700 px-4 py-2 hover:border-zinc-400"
          >
            Revente
          </Link>
        </nav>
      </div>
    </header>
  );
}
