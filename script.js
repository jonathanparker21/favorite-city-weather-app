/*
link js file to html
get access to the input field
get access to button
create function to fetch api data when button is clicked
*/

var inputField = document.querySelector('#city')
var button = document.querySelector('#get-weather')
// var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

function fetchData() {
    // console.log(inputField.value) 
        // to get the value from the input field (we have acces to the city name now)
    var cityName = inputField.value
    var apiKey = 'b04cc2de859ae3c5c525426c1b0511bb'
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
    // console.log(requestUrl)

    fetch(requestUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function(weatherData) {
            console.log(weatherData)
        })
}

button.addEventListener('click', fetchData)