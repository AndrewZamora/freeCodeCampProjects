var demo = document.getElementById('demo');
var online = document.getElementById('onOrOff');
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var urlStreams = "https://wind-bow.glitch.me/twitch-api/streams/";
var urlUsers = "https://wind-bow.glitch.me/twitch-api/users/";
var channelName = [];
var channelLogo = [];
var streamData = [];
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
/////////////////////////////////////////////////
function checkOnline(data) {
if(data.stream && data.stream !== null){
  demo.innerHTML+= '<h3>'+ data.stream.channel.display_name + '</h3><div><img src="' + data.stream.channel.logo + '"><p>Online</p><p>'+ data.stream.channel.status+ '</p>';
  channels.shift();
  console.log(channels);
}
}

function getAllUsers() {
  var stream = '';
  var users = '';
  for (var i = 0; i < channels.length; i++) {
    stream = urlStreams + channels[i];
    users = urlUsers + channels[i];
    getData(stream, checkOnline);
    getData(users,checkOnline)
  }
}

getAllUsers();








// Display All User Channel Names
// function displayChannel(data) {
//   demo.innerHTML += '<div><img src="' + data.logo + '">' + '<p>' + data.display_name + '</p></div>';
// }

// function allUsers() {
//   var users = '';
//   for (var i = 0; i < channels.length; i++) {
//     users = urlUsers + channels[i];
//     getData(users, displayChannel);
//   }
// }

// allUsers();
// Indicate Which User Channels Are Online
// function displayOnline (data) {
//   if (data.stream == null){
//     onOrOff.innerHTML += "<p>offline</p>";
//     console.log('offline');
//   } else {
//     onOrOff.innerHTML += "<p>online</p>";
//     console.log('online');
//   }
//   console.log(data);
// }

// function onlineChannels(){
//   var streams = '';
//   for (var i = 0; i < channels.length; i++) {
//    streams = urlStreams + channels[i];
//    getData(streams, displayOnline); 
//   }
// }

// onlineChannels();




// function collectChannel(data) {
//   channelName.push(data.display_name );
//   channelName.push(data.logo);
// }
// function allUsers() {
//   var users = '';
//   var streams = '';
//   for (var i = 0; i < channels.length; i++) {
//     users = urlUsers + channels[i];
//     getData(users, collectChannel);
//     streams = urlStreams + channels[i];
//     getData(streams, displayOnline);
//   }

// }

// function displayOnline(data) {
//   if (data.stream !== null){
//     channelName.push(data);
//   }
// }



// allUsers();