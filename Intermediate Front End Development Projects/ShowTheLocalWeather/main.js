
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(makeUrl);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
getLocation();
function makeUrl(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var url = "https://fcc-weather-api.glitch.me/api/current?lon=" + longitude + "&lat=" + latitude;
  function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        console.log(response);
        document.getElementById("demo").innerHTML = response.main.temp;
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  loadData();
}


