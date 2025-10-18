import Link from "next/link";
import WeatherBadge from "@/components/WeatherBadge";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 grid grid-cols-3 items-center">
        <div className="text-sm">
          <Link href="/wardrobe" className="hidden sm:inline-block px-3 py-1.5 rounded-md border border-white/15 hover:border-white/30">
            Garde-robe
          </Link>
        </div>

        {/* Logo typographique G Q O K A centré */}
        <div className="flex justify-center">
          <Link href="/" className="tracking-[0.35em] font-semibold text-lg md:text-xl select-none">
            G Q O K A
          </Link>
        </div>

        <div className="flex justify-end items-center gap-3">
          <WeatherBadge />
          <Link href="/login" className="px-3 py-1.5 rounded-md bg-white text-black text-sm hover:bg-white/90">
            Se connecter
          </Link>
        </div>
      </div>
    </header>
  );
}
