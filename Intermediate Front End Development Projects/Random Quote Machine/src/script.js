// $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback", function(a) {
//     $("#quote").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
//   });
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      console.log(response[0].content);
      document.getElementById('quote').innerHTML = response[0].content;
    }
};
xhttp.open("GET", "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback", true);
xhttp.send();
  