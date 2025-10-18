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

export default function ResalePage() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("wardrobe").select("*").order("id", { ascending: false });
      setItems((data as Item[]) || []);
    })();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Revente</h2>
      <p className="text-gray-600">Sélectionne un article pour préparer une fiche de revente.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(it => (
          <div key={it.id} className="space-y-2">
            <WardrobeItem {...it} />
            <button className="btn w-full">Préparer la revente</button>
          </div>
        ))}
      </div>
    </div>
  );
}
