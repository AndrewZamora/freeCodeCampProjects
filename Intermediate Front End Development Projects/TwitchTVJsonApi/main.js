var demo = document.getElementById('demo');
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var url = "https://wind-bow.glitch.me/twitch-api/streams/";
var output= '';

function loop (loadData){
  for (var i = 0; i < channels.length; i++) {
    output= url + channels[i];
  }
    
}



function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          demo.innerHTML = response.stream;
          
          console.log(output);
        }
      };
      xhttp.open("GET", output, true);
      xhttp.send();
    
}
loop();

