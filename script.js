async function searchWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = '3ae3027f71dc8e0e3d21176373545912'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');

    // Update the container with the new weather data
    weatherContainer.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <button onclick="removeWeather()">Remove</button>
    `;

    // Add the show class to display the container
    weatherContainer.classList.add('show');
}

function removeWeather() {
    const weatherContainer = document.getElementById('weather-container');
    if (weatherContainer) {
        weatherContainer.classList.remove('show');
    }
}