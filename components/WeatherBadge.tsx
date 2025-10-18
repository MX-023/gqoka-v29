import { useEffect, useState } from "react";

export default function WeatherBadge() {
  const [city, setCity] = useState<string>("");
  const [temp, setTemp] = useState<string>("");

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    if (!key) return;
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric&lang=fr`);
        const j = await r.json();
        setCity(j?.name || "");
        setTemp(Number.isFinite(j?.main?.temp) ? `${Math.round(j.main.temp)}°C` : "");
      },
      async () => {
        // fallback Paris
        const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${key}&units=metric&lang=fr`);
        const j = await r.json();
        setCity("Paris");
        setTemp(Number.isFinite(j?.main?.temp) ? `${Math.round(j.main.temp)}°C` : "");
      },
      { timeout: 4000 }
    );
  }, []);

  if (!temp && !city) return null;

  return (
    <div className="flex items-center gap-2 text-sm rounded-md border px-2.5 py-1.5 bg-white">
      <span className="text-base">🌤️</span>
      <span className="whitespace-nowrap">{city}{temp ? ` · ${temp}` : ""}</span>
    </div>
  );
}
