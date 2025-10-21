import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { FaEnvelope } from "react-icons/fa";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://gqoka.com/reset-password",
    });
    if (error) setError(error.message);
    else setSent(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg border border-zinc-200 text-center">
        <h1 className="text-3xl font-bold text-zinc-900 mb-2">
          Mot de passe oublié ?
        </h1>
        <p className="text-sm text-zinc-500 mb-6">
          Renseigne ton email pour recevoir un lien de réinitialisation.
        </p>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Adresse email
              </label>
              <div className="flex items-center border border-zinc-300 rounded-lg px-3 py-2 bg-zinc-50">
                <FaEnvelope className="text-zinc-400 mr-2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemple@email.com"
                  className="w-full bg-transparent outline-none text-zinc-800"
                  required
                />
              </div>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-xl bg-zinc-900 text-white py-3 mt-3 hover:bg-zinc-700 transition"
            >
              Envoyer le lien
            </button>
          </form>
        ) : (
          <p className="text-green-600 text-sm">
            ✅ Un email de réinitialisation a été envoyé.
            <br /> Vérifie ta boîte de réception.
          </p>
        )}

        <p className="mt-6 text-sm text-zinc-500">
          <Link href="/login" className="text-zinc-900 font-medium hover:underline">
            Retour à la connexion
          </Link>
        </p>
      </div>
    </div>
  );
}
