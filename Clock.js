function clock()
{
  let mk = new  Date()
  let hours,min,sec;
  hours = mk.getHours();
  min = mk.getMinutes();
  sec = mk.getSeconds();
  let time;
  // HH:MM:SS
  time = hours+":"+min+":"+sec;
  document.getElementById("clock").innerHTML = time
  
  //(functionname,timeInMiliseconds)
  setTimeout(clock,1000)
  }
clock();