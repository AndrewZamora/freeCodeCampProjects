var onlineSpace = document.getElementById('online-space');
var offlineSpace = document.getElementById('offline-space');
var onlineBtn = document.getElementById('online-btn');
var offlineBtn = document.getElementById('offline-btn');
var allBtn = document.getElementById('all-btn');
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
    /* If the user is offline push user name to offlineChannels array*/
    offlineChannels.push(data._links.self.slice(37 - self.length));
    getUsers();
  } else {
    onlineSpace.innerHTML += '<div class="online-box"><div class="box-text"><div><a href="' + data.stream.channel.url + '" target="_blank" ><img src="' + data.stream.channel.logo + '" alt="Channel Logo"></a><div class="status-circle online-color"></div></div><div><h3>' + data.stream.channel.display_name + '</h3><p>Streaming: ' + data.stream.game + '</p></div></div><div class="preview"><img src="'+ data.stream.preview.large+'"></div></div>';
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
  offlineSpace.innerHTML += '<div class="offline-box"><div class="box-text"><div><a href="https://www.twitch.tv/' + data.display_name + '" target="_blank"><img src="' + data.logo + '"></a><div class="status-circle offline-color"></div></div><div><h3>' + data.display_name + '</h3><p>Currently Offline.</p></div></div>';
}

/* Navigation Buttons */

/* Hide offline channels when online button is clicked */
onlineBtn.addEventListener("click", hideOffline);
function hideOffline() {
  offlineSpace.classList.add("hidden");
  onlineBtn.classList.add("active");
  onlineSpace.classList.remove("hidden");
  allBtn.classList.remove("active");
  offlineBtn.classList.remove("active");
}
/* Hide online channels when offline button is clicked */
offlineBtn.addEventListener("click", hideOnline);
function hideOnline() {
  offlineBtn.classList.add("active");
  onlineSpace.classList.add("hidden");
  offlineSpace.classList.remove("hidden");
  allBtn.classList.remove("active");
  onlineBtn.classList.remove("active");
}
/* Display All Channels */
allBtn.addEventListener("click", showAll);
function showAll(){
  allBtn.classList.add("active");
  onlineSpace.classList.remove("hidden");
  offlineSpace.classList.remove("hidden");
  offlineBtn.classList.remove("active");
  onlineBtn.classList.remove("active");
 
}