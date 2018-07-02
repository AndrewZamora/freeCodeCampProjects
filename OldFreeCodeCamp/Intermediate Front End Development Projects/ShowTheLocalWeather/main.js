var temperature = document.getElementById("temp");
var locationName = document.getElementById("location-name");
var weatherImg = document.getElementById("weather-img");
var changeTemp = document.getElementById("change-temp");
var fahrenheitBtn = document.getElementById("fahrenheit");
var celciusBtn = document.getElementById("celcius");
var humid = document.getElementById("humid-space");
// Get Position of User
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(makeUrl);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
// Concat latitude and Longitude in Url
function makeUrl(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var url = "https://fcc-weather-api.glitch.me/api/current?lon=" + longitude + "&lat=" + latitude;
// Get Weather Data
  function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        console.log(response);
// Display City Name and Country
        locationName.innerHTML = response.name + ", " + response.sys.country;
// Display Temp
        temperature.innerHTML = response.main.temp + "&deg";
// Converts Temp to Fahrenheit
        fahrenheitBtn.addEventListener("click", function(){
          temperature.innerHTML = (response.main.temp * 1.8 + 32).toFixed(2) + "&deg";
        });
        celciusBtn.addEventListener("click", function(){
          temperature.innerHTML = response.main.temp + "&deg";
        });
// Display Humidity
        humid.innerHTML = "Humidity" + response.main.humidity + "%";

      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  loadData();
}
getLocation();