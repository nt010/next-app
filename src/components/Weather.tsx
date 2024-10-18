"use client";

import React, { useEffect, useState } from 'react';
import { WeatherData } from '../types/weather';

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    )
      .then(res => res.json())
      .then((data: WeatherData) => setWeatherData(data));
  }, []);

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-blue-100 rounded-md">
      <h2 className="text-lg font-bold">天気情報: {weatherData.name}</h2>
      <p>気温: {Math.round(weatherData.main.temp - 273.15)}°C</p>
      <p>天気: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default Weather;
