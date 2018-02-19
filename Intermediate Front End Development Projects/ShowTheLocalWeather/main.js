var url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast ' +
'where woeid in (select woeid from geo.places(1) where text="London")&format=json';

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        console.log(response);
        console.log(response["query"]["results"]["channel"]["astronomy"]["sunset"]);
        document.getElementById("demo").innerHTML = response["query"]["results"]["channel"]["astronomy"]["sunset"];
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  loadDoc();
  