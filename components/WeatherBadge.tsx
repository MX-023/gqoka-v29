import { useEffect, useState } from "react";
import { WiDaySunny, WiCloud, WiRain } from "react-icons/wi";

export default function WeatherBadge() {
  const [weather, setWeather] = useState<{ temp: number; condition: string } | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=8fb37d0d62dd406fb90185632251210&units=metric&lang=fr`
        );
        const data = await response.json();
        setWeather({
          temp: data.main.temp,
          condition: data.weather[0].main,
        });
      } catch (error) {
        console.error("Erreur météo :", error);
      }
    }
    fetchWeather();
  }, []);

  if (!weather) return <p className="text-sm text-zinc-500">Chargement météo...</p>;

  const getIcon = () => {
    switch (weather.condition) {
      case "Clear":
        return <WiDaySunny className="text-yellow-500 text-5xl" />;
      case "Clouds":
        return <WiCloud className="text-zinc-500 text-5xl" />;
      case "Rain":
        return <WiRain className="text-blue-400 text-5xl" />;
      default:
        return <WiCloud className="text-zinc-400 text-5xl" />;
    }
  };

  return (
    <div className="flex items-center justify-center gap-4">
      {getIcon()}
      <span className="text-lg font-semibold text-zinc-800">
        {weather.temp.toFixed(0)}°C
      </span>
    </div>
  );
}
