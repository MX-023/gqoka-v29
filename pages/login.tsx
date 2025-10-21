import Link from "next/link";
import { FaUser, FaLock } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg border border-zinc-200 text-center">
        <h1 className="text-3xl font-bold text-zinc-900 mb-1">Bienvenue sur GQOKA</h1>
        <p className="text-sm text-zinc-500 mb-8">
          Connecte-toi pour explorer ton dressing intelligent.
        </p>

        <form className="space-y-5 text-left">
          {/* Champ utilisateur */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
            <div className="flex items-center border border-zinc-300 rounded-lg px-3 py-2 bg-zinc-50">
              <FaUser className="text-zinc-400 mr-2" />
              <input
                type="email"
                placeholder="exemple@email.com"
                className="w-full bg-transparent outline-none text-zinc-800"
                required
              />
            </div>
          </div>

          {/* Champ mot de passe */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Mot de passe</label>
            <div className="flex items-center border border-zinc-300 rounded-lg px-3 py-2 bg-zinc-50">
              <FaLock className="text-zinc-400 mr-2" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent outline-none text-zinc-800"
                required
              />
            </div>
          </div>

          {/* Bouton connexion */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-zinc-900 text-white py-3 mt-3 hover:bg-zinc-700 transition"
          >
            <span>Se connecter</span>
            <FiArrowRightCircle className="text-xl" />
          </button>
        </form>

        {/* Lien inscription */}
        <p className="mt-6 text-sm text-zinc-500">
          Pas encore de compte ?{" "}
          <Link href="/signup" className="text-zinc-900 font-medium hover:underline">
            Inscris-toi
          </Link>
        </p>
      </div>
    </div>
  );
}
