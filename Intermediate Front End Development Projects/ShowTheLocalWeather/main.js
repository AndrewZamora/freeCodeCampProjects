var fahrenheitTemp = document.getElementById("fahrenheitTemp");
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
         fahrenheitTemp.innerHTML = response.main.temp + "&deg";

      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  loadData();
}
getLocation();

