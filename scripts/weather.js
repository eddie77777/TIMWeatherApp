document.addEventListener("DOMContentLoaded", () => {
    const cities = [
        { name: "București", lat: 44.4268, lon: 26.1025, id: "weather-result-bucharest" },
        { name: "London", lat: 51.5074, lon: -0.1278, id: "weather-result-london" },
        { name: "New York", lat: 40.7128, lon: -74.0060, id: "weather-result-newyork" },
        { name: "Tokyo", lat: 48.1351, lon: 11.5820, id: "weather-result-tokyo" }
    ];

    // Fetch and display weather data for a city
    async function getWeather(city) {
        const weatherResult = document.getElementById(city.id);
        weatherResult.textContent = "Loading...";

        try {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`
            );

            if (!response.ok) {
                throw new Error("Could not retrieve weather data");
            }

            const weatherData = await response.json();

            weatherResult.innerHTML = `
                <p>Temperature: ${weatherData.current_weather.temperature}°C</p>
                <p>Wind Speed: ${weatherData.current_weather.windspeed} m/s</p>
                <p>Condition Code: ${weatherData.current_weather.weathercode}</p>
            `;
        } catch (error) {
            weatherResult.textContent = "Failed to retrieve weather data. Please try again later.";
            console.error(`Error fetching weather data for ${city.name}:`, error);
        }
    }

    // Fetch weather for all cities
    cities.forEach(getWeather);
});
