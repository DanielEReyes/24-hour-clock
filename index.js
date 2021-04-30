
function currentTime() {
  let date = new Date(); 
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let milSec = date.getMilliseconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  milSec = updateTime(milSec);
  oppMilSec = updateTime(999 - milSec)
  oppSec = updateTime(60 - sec);
  oppMin = updateTime(59 - min);
  oppHour = updateTime(23 - hour);
  document.getElementById("clock").innerHTML = hour + " : <span>" + min + "</span> : <span>"  + sec +  "</span> : <span>" + oppMilSec + "</span> : <span>" + oppSec + "</span> : <span>" + oppMin + "</span> : <span>" + oppHour;  
   
  const t = setTimeout(function() {currentTime()}, 100); 
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
