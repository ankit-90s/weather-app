const button = document.querySelector("button");
const input = document.querySelector("input");
const result = document.getElementById("result");

const API_KEY = "d449b2da66761b01ad7f1077b7a70dce"; // keep your existing key

button.addEventListener("click", () => {
  const city = input.value.trim();

  if (city === "") {
    result.innerHTML = "Please enter a city name";
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  )
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        result.innerHTML = "City not found ❌";
        return;
      }

      result.innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
      `;
    })
    .catch(() => {
      result.innerHTML = "Error fetching data";
    });
});


