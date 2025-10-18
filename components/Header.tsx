import Link from "next/link";
import WeatherBadge from "./WeatherBadge";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-3 items-center px-5 h-16">
        <div className="flex items-center gap-3">
          <Link href="/wardrobe" className="hidden sm:inline-block text-sm text-white/80 hover:text-white">
            Garde-robe
          </Link>
        </div>

        <div className="flex justify-center">
          <Link href="/" className="h-title tracking-[0.28em] text-lg md:text-xl select-none">
            G Q O K A
          </Link>
        </div>

        <div className="flex justify-end items-center gap-3">
          <WeatherBadge />
          <Link href="/login" className="text-sm px-3 py-1.5 rounded-md bg-white text-black hover:bg-white/90">
            Se connecter
          </Link>
        </div>
      </div>
    </header>
  );
}

