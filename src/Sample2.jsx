import React, { useState, useEffect } from "react";

const Sample2 = () => {
    const [city, setCity] = useState("London"); // Default city
    const [weather, setWeather] = useState(null); // Weather data
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state
                                                        
    // Fetch weather data from API
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const API_KEY = "0db0107bb8b645ca24bf8a10afb3bc74"; // Replace with your OpenWeatherMap API key
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
  
        if (!response.ok) {
          throw new Error("City not found");
        }
  
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };
  

    useEffect(() => {
      fetchWeather();
    }, [city]); // Dependency: `city`
  
    // Handle city input change
    const handleCityChange = (e) => {
      setCity(e.target.value);
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchWeather();
    };
  
    return (
      <div>
        <h1>Live Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleCityChange}
          />
          <button type="submit">Search</button>
        </form>
  
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "green" }}>{error}</p>}
        {weather && (
          <div>
            <h2>{weather.name}, {weather.sys.country}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    );
  
};

export default Sample2;