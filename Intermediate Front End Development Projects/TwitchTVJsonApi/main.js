var demo = document.getElementById('demo');
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var urlStreams = "https://wind-bow.glitch.me/twitch-api/streams/";
var urlUsers = "https://wind-bow.glitch.me/twitch-api/users/";
var channelName = [];
var notOnline = [];

/* Make Get Requests */
getData = function (url, callback1) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      callback1(response);
      // callback2(response);
      /* I would Like to put another callback here that is called after the first callback without using promises */
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}


/* Use channels array to make URLs to get streaming data */
function getStreams() {
  var stream = '';
  for (var i = 0; i < channels.length; i++) {
    stream = urlStreams + channels[i];
    getData(stream, checkOnline);
  }

}
/* Use URLs to get which users that are online */
function checkOnline(data) {
  if (data.stream !== null) {
    demo.innerHTML += '<h3>' + data.stream.channel.display_name + '</h3><div><img src="' + data.stream.channel.logo + '"><p>Online</p><p>' + data.stream.channel.status + '</p>';
  }
}

getStreams();

function showUsers (data){
  demo.innerHTML+= data.display_name + '<br>';
}

function getUsers (){
  var users = '';
  for (var i = 0; i < channels.length; i++) {
    users = urlUsers + channels[i];
    getData(users,showUsers);
  }
}

getUsers();
/* If the user is online then knock that user's channel off the channels array*/
/* With new array make URLs to get offline user's data */
/* Display data on the page */
/* Problems: Data is asnyc = can control how the data comes in */