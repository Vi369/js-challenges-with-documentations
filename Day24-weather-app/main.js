import "./style.css"
const apikey = `b6758e48449d4af691482623240508`;

// http://api.weatherapi.com/v1/forecast.json?key=b6758e48449d4af691482623240508&q=London&days=5&aqi=no&alerts=no

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');

// weather-info
const cityName = document.getElementById('cityName');
const localTime = document.getElementById('localTime');
const tempValue = document.getElementById('tempValue');
const timeZone = document.getElementById('timeZone');

// forecast-info
const forecastContainer = document.querySelector('.forcast-info');
// http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityInput}&aqi=yes/
// get data function
async function getData(apikey, cityName, days = 5) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${cityName}&days=${days}&aqi=no&alerts=no`)
    return await response.json();
}

searchButton.addEventListener('click', async function(){
    const input = cityInput.value;
    if(!input){
        alert("Please provide City Name.")
        return;
    }
    const result = await getData(apikey, input);
    console.log(result)
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    tempValue.innerText = `Current Temperature: ${result.current.temp_c}`;
    localTime.innerText = `Current Date/Time ${result.location.localtime}`;
    timeZone.innerText = `Time Zone: ${result.location.tz_id}`

    // forecast info

result.forecast.forecastday.forEach((data)=>{
    let weatherCondition = data.day.condition.text;
    let date = data.date;
    let temperatur = data.day.avgtemp_c;
    let fahrenheit = data.day.avgtemp_f;

    const forecastItem = 
    `<div class ="forecast-Item">
        <h3>Date: ${date}</h3>
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

