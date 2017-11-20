$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(a) {
    $("#quote").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
  });