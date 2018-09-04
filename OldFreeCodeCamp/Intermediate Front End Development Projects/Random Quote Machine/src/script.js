var spaceForQuote = document.getElementById('spaceForQuote');
var button = document.getElementById('btn');
var twitterLink = document.getElementById('twitter');
var tumblrLink = document.getElementById('tumblr');
//Global variables
function makeQuote() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      var randomNum = Math.floor((Math.random() * 19) + 1);
      //This is a workaround because I could only call 19 quotes at a time
      var quote = response[randomNum].content;
      var author = response[randomNum].title;
      spaceForQuote.innerHTML = quote + "- " + "<span>" + author + "</span>";
      // Creates Quote
      var plainText = spaceForQuote.innerText.replace(/-/g, "&hashtags=");
      twitterLink.setAttribute("href", "https://twitter.com/intent/tweet?text=" + plainText);
      tumblrLink.setAttribute("href", "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=" + author + "&caption=" + author + "&content=" + plainText + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button");
      //Creates Social Media links
    }
  };
  xhttp.open("GET", "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=19&callback", true);
  //19(20 and greater don't seem to work) had to be called because of caching
  xhttp.send();
}
// You might have to add "=?" to "&callback" in the GET request Url depending on whether you are working locally or on codepen
makeQuote();
//Show initial quote on first page load
button.addEventListener('click', makeQuote);