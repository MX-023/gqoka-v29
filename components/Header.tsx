import Link from "next/link";
import WeatherBadge from "@/components/WeatherBadge";

export default function Header() {
  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 grid grid-cols-3 items-center">
        <div className="text-sm">
          <Link href="/wardrobe" className="hidden sm:inline-block px-3 py-1.5 rounded-md border">Garde-robe</Link>
        </div>

        {/* Logo typographique G Q O K A centré */}
        <div className="flex justify-center">
          <Link href="/" className="tracking-[0.35em] font-semibold text-lg md:text-xl select-none">
            G Q O K A
          </Link>
        </div>

        <div className="flex justify-end items-center gap-3">
          <WeatherBadge />
          <Link href="/login" className="px-3 py-1.5 rounded-md bg-black text-white text-sm">Se connecter</Link>
        </div>
      </div>
    </header>
  );
}
