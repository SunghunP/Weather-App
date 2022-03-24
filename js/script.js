// API call example
// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key} 

// check to see if the request console.logs the correct data.
// $.ajax("https://api.openweathermap.org/data/2.5/weather?q=Federal%20Way&appid=key")
// // What we want to happen after the request is finished
// .then((data) => {
//     console.log(data)
// })

// This is for the city name and country code api calls
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// getting the api key from the console object in console.js
const API_KEY = console.API_KEY
// all constant variables using jQuery
const $contentContainer = $('.content-container')
const $submitBtn = $('button')
const $input = $("input")
// all constant variables using vanilla
const cityText = 'city-text'
const cityWeather = 'city-weather'
const flexCntr = "flex-cntr"

// function to convert Kelvin into Fahrenheit
// The weather API returns a Kelvin value for the temperature so we need to create a function to handle the conversion.
const kelvinToFahrenheit = function (kelvin) {
    return parseInt((kelvin*(9/5))-459.67)
}

// funtion to handle the creation of new divs and appending them to the .content-container div
function createAndPrependDiv (divSelector, className = null, idName = null ) {
    if (className === null && idName === null) {
        const $div = $('<div></div>')
        $div.prependTo(divSelector)
    } else if (className !== null && idName === null) {
        const $div = $(`<div class="${className}"></div>`)
        $div.prependTo(divSelector)
    } else if (className === null && idName !== null) {
        const $div = $(`<div id="${idName}"></div>`)
        $div.prependTo(divSelector)
    } else {
        const $div = $(`<div class="${className}" id="${idName}"></div>`)
        $div.prependTo(divSelector)
    }
}

$submitBtn.on("click", () => {
    // get the user input
    const userInput = $input.val()

})