document.addEventListener("DOMContentLoaded", () => {
  // 🔐 OpenWeather API Key
  const API_KEY = "d449b2da66761b01ad7f1077b7a70dce";

  // 📌 Get elements
  const button = document.getElementById("getWeatherBtn");
  const input = document.getElementById("cityInput");
  const result = document.getElementById("weatherResult");

  // 🧪 Safety check (very important)
  if (!button || !input || !result) {
    console.error("One or more DOM elements not found");
    return;
  }

  // 🌦 Button click handler
  button.addEventListener("click", () => {
    const city = input.value.trim();

    if (city === "") {
      result.innerHTML = "<p>Please enter a city name</p>";
      return;
    }

    result.innerHTML = "<p>Loading...</p>";

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        if (data.cod !== 200) {
          result.innerHTML = "<p>City not found ❌</p>";
          return;
        }

        result.innerHTML = `
          <h3>Weather in ${data.name}</h3>
          <p>🌡 Temperature: ${data.main.temp}°C</p>
          <p>☁ Condition: ${data.weather[0].description}</p>
        `;
      })
      .catch(err => {
        console.error(err);
        result.innerHTML = "<p>Error fetching weather data</p>";
      });
  });
});






