import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import WardrobeItem from "../components/WardrobeItem";

type Item = {
  id: string;
  title: string | null;
  image_url: string | null;
  category: string | null;
  color: string | null;
};

export default function WardrobePage() {
  const [items, setItems] = useState<Item[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("wardrobe").select("*").order("id", { ascending: false });
      setItems((data as Item[]) || []);
    })();
  }, []);

  async function upload() {
    if (!file) return;
    setLoading(true);
    const path = `${Date.now()}-${file.name}`.replace(/\s+/g, "-");
    const { data: up, error: upErr } = await supabase.storage.from("wardrobe").upload(path, file, { upsert: false });
    if (upErr) { setLoading(false); return; }
    const { data: url } = supabase.storage.from("wardrobe").getPublicUrl(up.path);
    const { data: row } = await supabase.from("wardrobe").insert({ title, category, color, image_url: url.publicUrl }).select().single();
    setItems([row as Item, ...items]);
    setTitle(""); setCategory(""); setColor(""); setFile(null); setLoading(false);
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Ma garde-robe</h2>
      <div className="card p-4">
        <div className="grid md:grid-cols-4 gap-3">
          <input className="border rounded-xl px-3 py-2" placeholder="Titre" value={title} onChange={e=>setTitle(e.target.value)} />
          <input className="border rounded-xl px-3 py-2" placeholder="Catégorie" value={category} onChange={e=>setCategory(e.target.value)} />
          <input className="border rounded-xl px-3 py-2" placeholder="Couleur" value={color} onChange={e=>setColor(e.target.value)} />
          <input type="file" accept="image/*" onChange={e=>setFile(e.target.files?.[0]||null)} />
        </div>
        <button className="btn mt-3" onClick={upload} disabled={loading}>{loading ? "Chargement..." : "Ajouter"}</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(it => (
          <WardrobeItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
}
