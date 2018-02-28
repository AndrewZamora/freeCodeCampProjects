var submit = document.getElementById('search-btn');
var demo = document.getElementById('demo');
var userQuery = document.getElementById('user-query');

function loadData() {
// Get users query from form and make url
    var userInput = document.getElementById('search').value;
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + userInput;
// Request Data From Wiki
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            console.log(response);
            userQuery.innerHTML = 'Results for "' + userInput + '"';
            demo.innerHTML = response;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
submit.addEventListener('click', loadData);