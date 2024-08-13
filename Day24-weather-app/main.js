import "./style.css"
const apikey = `b6758e48449d4af691482623240508`;

// http://api.weatherapi.com/v1/forecast.json?key=b6758e48449d4af691482623240508&q=London&days=5&aqi=no&alerts=no

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');

// weather-info
const cityName = document.getElementById('cityName');
const localTime = document.getElementById('localTime');
const dayContainer = document.getElementById('day');
const tempratureCard = document.getElementById('tempratureCard')
const timeZone = document.getElementById('timeZone');
const weatherCondition = document.getElementById('weather-condition');
// forecast-info
const forecastContainer = document.querySelector('.forcast-info');

// get weather and forecast data func
async function getData(apikey, cityName, days = 5) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${cityName}&days=${days}&aqi=no&alerts=no`)
        return await response.json();
    } catch (error) {
        console.log(error.message)
        console.log(error);
    }
}

// func get day of week
function getDayOfWeek(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = new Date(date).getDay(); // Get the day index (0-6) for the given date
    return daysOfWeek[dayIndex]; // Return the name of the day
}


searchButton.addEventListener('click', async function(){
    const input = cityInput.value;
    forecastContainer.innerHTML = ''; // reset privious value; 
    if(!input){
        alert("Please provide City Name.")
        return;
    }
    const result = await getData(apikey, input);
    console.log(result)

    const day = getDayOfWeek(result.location.localtime)


    weatherCondition.innerHTML = `
    <p>${result.current?.condition?.text}</p>
    <img src = "${result.current?.condition?.icon}" alt="Weather condition png" />
    `;
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
   tempratureCard.innerHTML = `
    <p>Current Temperature: ${result.current.temp_c}&deg</p>
    <p>${result.current.temp_f}  &#8457</p>`;
    localTime.innerText = `Date/Time ${result.location.localtime}`;
    dayContainer.innerText = `${day}`;
    timeZone.innerText = `Time Zone: ${result.location.tz_id}`

    // forecast info

result.forecast.forecastday.forEach((data)=>{
    let weatherCondition = data.day.condition.text;
    let date = data.date;
    let temperatur = data.day.avgtemp_c;
    let fahrenheit = data.day.avgtemp_f;
    const day = getDayOfWeek(date)

    const forecastItem = 
    `<div class ="forecast-Item">
        <h3>${day}</h3>
        <p>Date: ${date}</p>
        <img src ="${data.day.condition.icon}" alt = "Weather icon" />
        <p>${temperatur} &deg</p>
        <p>${fahrenheit} &#8457</p>
        <p>${weatherCondition}</p>
    </div>`;

    forecastContainer.innerHTML += forecastItem;

    })
    console.log(result.forecast.forecastday[0].day.condition.text)
    // display forcast data 
})

