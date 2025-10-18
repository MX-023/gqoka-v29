import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();

  async function onSignup() {
    setErr(null);
    const { error } = await supabase.auth.signUp({ email, password: pwd });
    if (error) setErr(error.message);
    else router.push("/login");
  }

  return (
    <div className="max-w-sm mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Inscription</h2>
      <input className="border rounded-xl px-3 py-2 w-full" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="border rounded-xl px-3 py-2 w-full" placeholder="Mot de passe" type="password" value={pwd} onChange={e=>setPwd(e.target.value)} />
      {err && <div className="text-sm text-red-500">{err}</div>}
      <button className="btn w-full" onClick={onSignup}>Créer un compte</button>
    </div>
  );
}
