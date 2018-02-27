    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&redirects=return&search=dog&origin=*";
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        console.log(response);
        document.getElementById("demo").innerHTML = this.response;
      }
    };
    xhttp.open("GET", url , true);
    xhttp.send();
 
  