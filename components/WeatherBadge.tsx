import { useEffect, useState } from "react";

type W = { name?: string; main?: { temp?: number }; weather?: { id: number }[] };

function iconFromCode(code?: number) {
  if (!code) return "🌤️";
  if (code >= 200 && code < 300) return "⛈️";
  if (code >= 300 && code < 600) return "🌧️";
  if (code >= 600 && code < 700) return "❄️";
  if (code === 800) return "☀️";
  if (code > 800) return "☁️";
  return "🌤️";
}

export default function WeatherBadge() {
  const [city, setCity] = useState<string>("");
  const [temp, setTemp] = useState<string>("");
  const [icon, setIcon] = useState<string>("🌤️");

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    if (!key) return;

    const fetchBy = async (url: string, fallbackCity?: string) => {
      const r = await fetch(url);
      const j: W = await r.json();
      setCity(fallbackCity || j?.name || "");
      const t = j?.main?.temp;
      setTemp(Number.isFinite(t as number) ? `${Math.round(t as number)}°C` : "");
      setIcon(iconFromCode(j?.weather?.[0]?.id));
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) =>
          fetchBy(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${key}&units=metric&lang=fr`
          ),
        () =>
          fetchBy(
            `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${key}&units=metric&lang=fr`,
            "Paris"
          ),
        { timeout: 4000 }
      );
    } else {
      fetchBy(
        `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${key}&units=metric&lang=fr`,
        "Paris"
      );
    }
  }, []);

  if (!city && !temp) return null;

  return (
    <div className="flex items-center gap-2 rounded-md border border-white/15 px-2.5 py-1.5 bg-white/5">
      <span className="text-2xl leading-none" aria-hidden>{icon}</span>
      <span className="text-sm whitespace-nowrap">{city}{temp ? ` · ${temp}` : ""}</span>
    </div>
  );
}
