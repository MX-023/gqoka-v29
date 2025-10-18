import Image from "next/image";

type Props = {
  title?: string | null;
  image_url?: string | null;
  category?: string | null;
  color?: string | null;
};

export default function WardrobeItem({ title, image_url, category, color }: Props) {
  return (
    <div className="card overflow-hidden">
      {image_url ? (
        <Image
          src={image_url}
          alt={title || "Article"}
          width={600}
          height={600}
          className="object-cover w-full h-64"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-64 bg-gray-100 text-gray-400 text-sm">
          Image non disponible
        </div>
      )}
      <div className="p-3">
        <h3 className="text-base font-semibold text-gray-900 truncate">
          {title || "Article sans titre"}
        </h3>
        <p className="text-sm text-gray-500">
          {category ? category : "Catégorie inconnue"}{" "}
          {color && <span className="text-gray-400">• {color}</span>}
        </p>
      </div>
    </div>
  );
}
