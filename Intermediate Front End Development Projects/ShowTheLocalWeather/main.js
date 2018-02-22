var url = "https://fcc-weather-api.glitch.me/api/current?lon=135.4009&lat= 34.7843";

// Check to see if the browser supports the GeoLocation API.

function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        console.log(response);      
        // document.getElementById("demo").innerHTML = ;
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  loadData();