// button click
var clicky = document.getElementById("#butty")
//location typed
var locay = document.getElementById("searchy")

//Click event for button, fetch API data. Push to variables.
clicky.addEventListener("click", function() {
    fetch(api.openweathermap.org/data/2.5/weather?q={locay}&appid={2d78b1dcfdd8add897be9ea1c09e3067}
        .then(response => response.json())
        .then(data => {
            var xHigh = data["high"];
            var xHival = data["hival"];
            var xLow = data["low"];
            var xLoval = data["loval"];
            var xHumidity = data["humidity"];
            var xHumval = data["humval"];
            var xWind = data["wind"];
            var xWindval = data["windval"];
        }
    )
})