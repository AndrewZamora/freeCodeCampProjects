var demo = document.getElementById('demo');
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var urlStreams = "https://wind-bow.glitch.me/twitch-api/streams/";
var urlUsers = "https://wind-bow.glitch.me/twitch-api/users/";

// Get JSON Data
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
// Display All User Channel Names
function displayChannel(data) {
  demo.innerHTML += '<div><img src="' + data.logo + '">' + '<p>' + data.display_name + '</p></div>';
}

function allUsers() {
  var users = '';
  for (var i = 0; i < channels.length; i++) {
    users = urlUsers + channels[i];
    getData(users, displayChannel);
  }
}

allUsers();

// Indicate Which User Channels Are Online
function displayOnline (data) {
  if (data.stream == null) {
    console.log('offline')  
  }else{
    console.log('online')
  }
  console.log(data);
}

function onlineChannels(){
  var streams = '';
  for (var i = 0; i < channels.length; i++) {
   streams = urlStreams + channels[i];
   getData(streams, displayOnline); 
  }
}

onlineChannels();
