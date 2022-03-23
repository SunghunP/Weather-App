// API call example
// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key} 

// check to see if the request console.logs the correct data.
$.ajax("https://api.openweathermap.org/data/2.5/weather?q=Federal%20Way&appid=key")
// What we want to happen after the request is finished
.then((data) => {
    console.log(data)
})

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

const kelvinToFahrenheit = function (kelvin) {
    return parseInt((kelvin*(9/5))-459.67)
}
console.log(kelvinToFahrenheit(290))