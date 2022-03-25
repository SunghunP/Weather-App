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

// all constant variables using jQuery
const $contentContainer = $('.content-container')
const $submitBtn = $('button')
const $input = $("input")
// all constant variables using vanilla
const $cityText = $('#city-text')
const $cityWeather = $('#city-weather')
const flexCntr = "flex-cntr"

// function to convert Kelvin into Fahrenheit
// The weather API returns a Kelvin value for the temperature so we need to create a function to handle the conversion.
const kelvinToFahrenheit = function (kelvin) {
    return parseInt((kelvin*(9/5))-459.67)
}

// event handler for the submit button
$submitBtn.on("click", () => {
    // get the user input
    const userInput = $input.val()
    // make the api call
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${hidden.API_KEY}`)
    .then((data) => {
        // convert temperatures into usable ones
        const tempMain = kelvinToFahrenheit(data.main.temp)
        const tempFeelsLike = kelvinToFahrenheit(data.main.feels_like)
        $(`.city-text`).text(`The weather in ${data.name} is ${data.weather[0].description}. It is currently ${tempMain}°F but feels like ${tempFeelsLike}°F`)
        // use the img icon data to set the image for the appropriate weather
        $('img').attr("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        // add all of the text needed
        $(`#current-temp`).text(`Current Temperature: ${tempMain}°F`)
        $(`#0-description`).text(`${data.weather[0].main}`)
        $(`#humidity`).text(`Humidity: ${data.main.humidity}%`)
        $(`#wind-speed`).text(`Wind Speed: ${data.wind.speed}mph`)
    })
    .catch((error) => {
        console.log(error)
        window.alert("Sorry, but this city does not exist in our current records!")
    })
    // adds a border
    $cityText.css('border-radius', '20px')
    $cityWeather.css('border-radius', '20px')
    $cityText.css('border', '5px solid var(--color-highlight)')
    $cityWeather.css('border', '5px solid var(--color-highlight)')
    $cityText.css('background-color', 'var(--bg-color-highlight)')
    $cityWeather.css('background-color', 'var(--bg-color-highlight)')
    $cityText.css('color', 'var(--color-highlight)')
    $cityWeather.css('color', 'var(--color-highlight)')
    // clear input value
    $input.val('')
})

/* future developments

// used for saving a list and appending it to the correct div. 
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
*/