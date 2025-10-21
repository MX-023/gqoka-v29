import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const confirm = (form.elements.namedItem("confirm") as HTMLInputElement).value;

    if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else setSuccess(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg border border-zinc-200 text-center">
        <div className="flex justify-center mb-4">
          <FiUserPlus className="text-4xl text-zinc-900" />
        </div>

        <h1 className="text-3xl font-bold text-zinc-900 mb-1">Crée ton compte</h1>
        <p className="text-sm text-zinc-500 mb-6">
          Rejoins GQOKA et découvre la liberté d’un dressing intelligent.
        </p>

        {!success ? (
          <form onSubmit={handleSignup} className="space-y-5 text-left">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Email
              </label>
              <div className="flex items-center border border-zinc-300 rounded-lg px-3 py-2 bg-zinc-50">
                <FaEnvelope className="text-zinc-400 mr-2" />
                <input
                  name="email"
                  type="email"
                  placeholder="exemple@email.com"
                  className="w-full bg-transparent outline-none text-zinc-800"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Mot de passe
              </label>
              <div className="flex items-center border border-zinc-300 rounded-lg px-3 py-2 bg-zinc-50">
                <FaLock className="text-zinc-400 mr-2" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-transparent outline-none text-zinc-800"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-zinc-400 hover:text-zinc-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Confirmer le mot de passe
              </label>
              <div className="flex items-center border border-zinc-300 rounded-lg px-3 py-2 bg-zinc-50">
                <FaLock className="text-zinc-400 mr-2" />
                <input
                  name="confirm"
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-transparent outline-none text-zinc-800"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="text-zinc-400 hover:text-zinc-600"
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-zinc-900 text-white py-3 mt-3 hover:bg-zinc-700 transition"
            >
              <span>S’inscrire</span>
              <FiUserPlus className="text-xl" />
            </button>
          </form>
        ) : (
          <p className="text-green-600 mt-6 text-sm">
            Un email de confirmation a été envoyé. Vérifie ta boîte de réception.
          </p>
        )}

        <p className="mt-6 text-sm text-zinc-500">
          Déjà un compte ?{" "}
          <Link href="/login" className="text-zinc-900 font-medium hover:underline">
            Connecte-toi
          </Link>
        </p>
      </div>
    </div>
  );
}
