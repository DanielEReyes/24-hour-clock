
function currentTime() {
  var date = new Date(); 
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var milSec = date.getMilliseconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  milSec = updateTime(milSec);
  oppSec = updateTime(60 - sec);
  oppMin = updateTime(60 - min);
  oppHour = updateTime(24 - hour);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " : " + milSec + " : " + oppSec + " : " + oppMin + " : " + oppHour; 
  var t = setTimeout(function() {currentTime()}, 100); 
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();