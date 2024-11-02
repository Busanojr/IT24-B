class WeatherApp {
    constructor() {
        //API Key
        this.apiKey = document.getElementById('apiKeyInput');

        //Text Input
        this.cityInput = document.getElementById('cityInput');
        this.getWeatherBtn = document.getElementById('getWeatherBtn');

        //Geolocation Input
        this.getLocationBtn = document.getElementById('getLocationBtn');

        //Weather Card
        this.weatherCard = document.getElementById('weatherCard');
        this.cityName = document.getElementById('cityName');
        this.temperature = document.getElementById('temperature');
        this.description = document.getElementById('description');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');

        //Event Listener
        this.getWeatherBtn.addEventListener('click', () => this.fetchWeather());
        this.getLocationBtn.addEventListener('click', () => this.fetchWeatherByLocation());
    }

    displayWeather(data) {
        this.cityName.textContent = `${data.name}, ${data.sys.country} (${data.coord.lat}, ${data.coord.lon})`;
        this.temperature.textContent = `Temperature: ${data.main.temp} °C`;
        this.description.textContent = `Weather: ${data.weather[0].description}`;
        this.humidity.textContent = `Humidity: ${data.main.humidity}%`;
        this.windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

        // Set the weather icon
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById('weatherIcon').src = iconUrl;

        this.weatherCard.style.display = 'block';
    }
}

class WeatherService extends WeatherApp {
    async fetchWeather() {
        const apiKey = this.apiKey.value;
        const city = this.cityInput.value;

        // Check if we're in testing mode
        if (city.toLowerCase() === 'manolo fortich') {
            const dummyData = this.getDummyWeatherData(); // Call the dummy data function
            this.displayWeather(dummyData); // Use displayWeather method to show it
            return; // Exit the method to prevent further processing
        }

        if (city) {
            const data = await this.getWeatherData(city, apiKey);
            if (data) {
                this.displayWeather(data);
            } else {
                alert('City not found. Please try again.');
            }
        } else {
            alert('Please enter a city name.');
        }
    }

    getDummyWeatherData() {
        // Dummy weather data for Manolo Fortich
        return {
            coord: {
                lon: 124.8857,
                lat: 8.4173
            },
            weather: [
                {
                    id: 801,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d"
                }
            ],
            main: {
                temp: 25,
                pressure: 1012,
                humidity: 60
            },
            wind: {
                speed: 3,
                deg: 360
            },
            sys: {
                country: "PH"
            },
            name: "Manolo Fortich"
        };
    }

    async fetchWeatherByLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const data = await this.getWeatherDataByCoordinates(latitude, longitude, this.apiKey.value);
                    if (data) {
                        this.displayWeather(data);
                        this.cityInput.value = '';
                    } else {
                        alert('Unable to retrieve weather data for your location.');
                    }
                },
                () => {
                    alert('Unable to retrieve your location. Please allow location access.');
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }

    async getWeatherData(city, apiKey) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
        return null;
    }

    async getWeatherDataByCoordinates(latitude, longitude, apiKey) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.error('Error fetching weather data by coordinates:', error);
        }
        return null;
    }
}

const weatherApp = new WeatherService();

document.addEventListener('DOMContentLoaded', () => {
    const modal = new bootstrap.Modal(document.getElementById('infoModal'));
    modal.show();
});