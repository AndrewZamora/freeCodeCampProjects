var temperature = document.getElementById("temp");
var locationName = document.getElementById("location-name");
var weatherImg = document.getElementById("weather-img");
var changeTemp = document.getElementById("change-temp");
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
// Display Weather Icon
        weatherImg.src = response.weather[0].icon;
        changeTemp.addEventListener("toggle", function(){
          temperature.innerHTML = response.main.temp * 1.8 + 32;
          // changeTemp.innerHTML = "F";
        });
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  loadData();
}
getLocation();