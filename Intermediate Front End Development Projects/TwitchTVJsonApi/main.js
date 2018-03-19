var demo = document.getElementById('demo');
var offline = document.getElementById('offline');
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var urlStreams = "https://wind-bow.glitch.me/twitch-api/streams/";
var urlUsers = "https://wind-bow.glitch.me/twitch-api/users/";
var offlineChannels = [];

/* Make Get Requests */
getData = function (url, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      callback(response);
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}

/* Make URLs to get streaming data */
function getStreams() {
  var stream = '';
  for (var i = 0; i < channels.length; i++) {
    stream = urlStreams + channels[i];
    getData(stream, checkOnline);
  }
}

function checkOnline(data) {
  if (data.stream == null) {
    /* If the user is online then knock that user's channel off the channels array*/
    offlineChannels.push(channels.pop());
    getUsers();
  } else {
    online.innerHTML += '<h3>' + data.stream.channel.display_name + '</h3><div><a href="' + data.stream.channel.url + '" target="_blank" ><img src="' + data.stream.channel.logo + '" alt="Channel Logo"></a><div class="status-circle online"></div><p>' + data.stream.channel.status + '</p>';
  }
}
getStreams();

/* Use URLs to get which users that are online */
function getUsers() {
  var users = '';
  /* With new array make URLs to get offline user's data */
  users = urlUsers + offlineChannels.pop();
  getData(users, showUsers);
}

function showUsers(data) {
  offline.innerHTML += '<h3>' + data.display_name + '</h3><div><img src="' + data.logo + '"><div class="status-circle offline"></div><p>'+ data.display_name + ' is currently offline.</p>';
}