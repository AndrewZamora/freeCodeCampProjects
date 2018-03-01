var submit = document.getElementById('form');
var results = document.getElementById('result');
var searchResult = document.getElementById('search-result');
var searchBtn = document.getElementById('search-btn');

function loadData(e) {
    e.preventDefault();
    // Get users query from form and make url
    var userInput = document.getElementById('search').value;
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + userInput;
    // Request Data From Wiki
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            console.log(response);
            alert(response);
            searchResult.innerHTML = 'Results for "' + userInput + '"';
            results.innerHTML = response;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

submit.addEventListener('submit', loadData);