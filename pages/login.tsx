// pages/login.tsx
import Link from "next/link";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

export default function Login() {
  return (
    <main className="min-h-screen grid place-items-center px-6">
      <div className="w-full max-w-md">
        <header className="text-center mb-8">
          <h1 className="font-[ClashDisplay] text-3xl font-bold">Connexion</h1>
          <p className="mt-2 text-zinc-400">Sobre. Rapide. Respectueuse.</p>
        </header>

        <form className="rounded-2xl border border-zinc-800 bg-[#0F0F0F] p-6 space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm text-zinc-400">Email</span>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-black/30 px-3">
              <FiMail />
              <input
                type="email"
                className="w-full bg-transparent py-3 outline-none"
                placeholder="ton.email@exemple.com"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-1 block text-sm text-zinc-400">Mot de passe</span>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-black/30 px-3">
              <FiLock />
              <input
                type="password"
                className="w-full bg-transparent py-3 outline-none"
                placeholder="••••••••"
              />
            </div>
          </label>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-black py-3 hover:opacity-90"
          >
            <FiLogIn className="text-lg" />
            <span>Se connecter</span>
          </button>

          <div className="text-center text-sm text-zinc-500">
            Pas de compte ?{" "}
            <Link href="/signup" className="underline hover:text-zinc-300">Créer un compte</Link>
          </div>
        </form>
      </div>
    </main>
  );
}
