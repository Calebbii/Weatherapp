
const apiKey = "608deceb30a1afebadd0a2e5b152de8e"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q="

const searchBox = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-button");


async function checkWeather(city) {
    const response = await fetch(apiUrl +  city +`&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = data.main.temp + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


}

searchBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the form from submitting
    checkWeather(searchBox.value);
});

// initialize with weather for a default city

const defaultCity = "New York";

checkWeather(defaultCity);


