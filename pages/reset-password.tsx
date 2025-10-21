import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.updateUser({ password });
    if (error) setError(error.message);
    else setSuccess(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg border border-zinc-200 text-center">
        <h1 className="text-3xl font-bold text-zinc-900 mb-3">
          Nouveau mot de passe
        </h1>
        <p className="text-sm text-zinc-500 mb-6">
          Entre ton nouveau mot de passe ci-dessous.
        </p>

        {!success ? (
          <form onSubmit={handleReset} className="space-y-5 text-left">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Nouveau mot de passe
              </label>
              <div className="flex items-center border border-zinc-300 rounded-lg px-3 py-2 bg-zinc-50">
                <FaLock className="text-zinc-400 mr-2" />
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-transparent outline-none text-zinc-800"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="text-zinc-400 hover:text-zinc-600"
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-xl bg-zinc-900 text-white py-3 mt-3 hover:bg-zinc-700 transition"
            >
              Réinitialiser
            </button>
          </form>
        ) : (
          <p className="text-green-600 text-sm">
            ✅ Ton mot de passe a été mis à jour.  
            Tu peux te reconnecter à ton compte.
          </p>
        )}
      </div>
    </div>
  );
}
