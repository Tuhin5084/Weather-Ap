

function getWeatherData(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(response => response.json())
    .then(data => showWeatherReport(data))
}

document.getElementById('searchButton').addEventListener('click', function(){
    const city = document.getElementById('cityName').value;
    document.getElementById('cityName').value = '';

    const weatherApi = {
        key: "b8545c8cd1a0cf6b38c99ab322c34fc4",
        baseUrl:"https://api.openweathermap.org/data/2.5/weather"
    }

    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(response => response.json())
    .then(data => displayWeatherDetails(data))

    // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b8545c8cd1a0cf6b38c99ab322c34fc4&units=metric`)
    // .then(res => res.json())
    // .then(json => displayWeatherDetails(json))
})

function displayWeatherDetails(value){
    console.log(value)
    document.getElementById('cityChange').innerHTML = `${value.name} , ${value.sys.country}`;
    document.getElementById('description').innerHTML = `${value.weather[0].main}`;
    document.getElementById('iconWeather').src = `https://openweathermap.org/img/wn/${value.weather[0].icon}.png`;
    document.getElementById('tempValue').innerHTML = `${value.main.temp} &deg;C`;
    document.getElementById('humidity').innerHTML = `Humidity : ${value.main.humidity} %`;
    document.getElementById('wind').innerHTML = `Wind Speed : ${value.wind.speed} m/s`;
    document.getElementById('sunsetTime').innerHTML = ` Sunset Time : ${(new Date(value.sys.sunset *1000)).toLocaleTimeString()}`;
    document.getElementById('sunriseTime').innerHTML = ` Sunrise Time : ${(new Date(value.sys.sunrise*1000)).toLocaleTimeString()}`;

    
    const options = {
        weekday : 'long',
        day : 'numeric',
        month : 'long'
    }
    const currentDate = new Date();
    const myDate = currentDate.toDateString(options);

    document.getElementById('date').innerHTML = myDate;

}
 