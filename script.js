// 🔐 OpenWeather API Key
const API_KEY = "d449b2da66761b01ad7f1077b7a70dce";

// 📌 Get required elements
const button = document.getElementById("getWeatherBtn");
const input = document.getElementById("cityInput");
const result = document.getElementById("weatherResult");

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
      if (data.cod === "404" || data.cod === 404) {
        result.innerHTML = "<p>City not found ❌</p>";
        return;
      }

      result.innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p>🌡 Temperature: ${data.main.temp}°C</p>
        <p>☁ Condition: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      console.error(error);
      result.innerHTML = "<p>Error fetching weather data</p>";
    });
});




