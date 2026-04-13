// Weather App

// HTML, CSS, JS & Bootstrap

// Concepts -- Async JS, External API's, Fetching data from an external API

// What to display - City, temp, Humidity Wind speed

// Open Weather API


const api_key = "608deceb30a1afebadd0a2e5b152de8e"

const base_url = "https://api.openweathermap.org/data/2.5/weather?q="

const searchBox = document.querySelector('#search-input')
const searchBtn = document.querySelector('#search-btn')
 


async function checkWeather(city) {
    const response = await fetch(base_url + city + `&units=metric&appid=${api_key}`)

    const data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
    document.querySelector('.humidity').innerHTML = data.main.humidity + " " + 'rh'
    document.querySelector('.wind').innerHTML = data.wind.speed + " " + "knots"

}

// Addng an event listener
searchBtn.addEventListener('click', (event)=> {
    event.preventDefault()
    checkWeather(searchBox.value)
})







// checkWeather('Madrid')