var submit = document.getElementById('form');
var results = document.getElementById('result');
var searchResult = document.getElementById('search-result');
var searchBtn = document.getElementById('search-btn');

function loadData(e) {
    // Stop form from submitting normally
    e.preventDefault();
    // Get users query from form and make url
    var userInput = document.getElementById('search').value;
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + userInput;
    // Request Data From Wiki
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            // Display user's search
            searchResult.innerHTML = 'Results for "' + userInput + '"';
            // Format User's Results
            var output = '';
            for (var i = 0; i < response[1].length; i++) {
                output += '<div class="card"><h2>'+ response[1][i]+'</h2>'+
                '<p>'+ response[2][i] + '</p>'+
                '<a target="_blank" href="'+ response[3][i] +'">Read More</a></div>';
            }
            // Display User's Results
            results.innerHTML = output;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

submit.addEventListener('submit', loadData);