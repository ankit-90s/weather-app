const button = document.querySelector("button");
const input = document.querySelector("input");

const API_KEY = "d449b2da66761b01ad7f1077b7a70dce";

button.addEventListener("click", async () => {
    const city = input.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
            alert("City not found");
            return;
        }

        const data = await response.json();

        alert(
            `Weather in ${data.name}\nTemperature: ${data.main.temp}°C\nCondition: ${data.weather[0].description}`
        );

    } catch (error) {
        alert("Something went wrong. Try again later.");
    }
});
