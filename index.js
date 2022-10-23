function clock() {
  var hours = document.getElementById("hours");
  var minutes = document.getElementById("mins");
  var seconds = document.getElementById("secs");
  var ap = document.getElementById("ap");

  var time = new Date();
  var hr = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var amOrPm;

  if (hr >= 0 && hr <= 12) {
    amOrPm = "AM";
  } else {
    amOrPm = "PM";
  }

  if (hr > 12) {
    hr = hr - 12;
  } else if (hr == 0) {
    hr = 12;
  }

  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  hours.innerHTML = hr;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
  ap.innerHTML = amOrPm;
}

setInterval(clock, 1000);

function setTime() {
  var optionValue1 = document.getElementById("wakeup-time");
  var optionValue2 = document.getElementById("lunch-time");
  var optionValue3 = document.getElementById("nap-time");
  var optionValue4 = document.getElementById("night-time");
  var hourrs = new Date().getHours();

  if (optionValue1.value == hourrs) {
    document.getElementById("img-container").style.backgroundImage ="url('./Assests/Mt.jpeg')";
    document.getElementById("ltext").innerHTML ="GOOD MORNNG !! WAKE UP !!";
    document.getElementById("text-container").innerHTML ="GRAB SOME HEALTHY BREAKFAST !!!";
    document.getElementById("wake-up-time-display").innerHTML = `Wake Up Time: ${
      optionValue1.options[optionValue1.value].text }`; 

  } 
  else {
          document.getElementById("wake-up-time-display").innerHTML = `Wake Up Time: ${
             optionValue1.options[optionValue1.value].text
               }`;
  }

  if (optionValue2.value == hourrs) {
    document.getElementById("img-container").style.backgroundImage ="url('./Assests/Lt.jpeg')";
    document.getElementById("ltext").innerHTML ="GOOD AFTERNOON !! TAKE SOME SLEEP";
    document.getElementById("text-container").innerHTML ="LET'S HAVE SOME LUNCH !!";
    document.getElementById("lunch-time-display").innerHTML = `Lunch Time: ${
      optionValue2.options[optionValue2.value].text
    }`;
  }
  else {
         document.getElementById("lunch-time-display").innerHTML = `Lunch Time: ${
           optionValue2.options[optionValue2.value].text
             }`;
  }

  if (optionValue3.value == hourrs) {
    document.getElementById("img-container").style.backgroundImage ="url('./Assests/Et.jpeg')";
    document.getElementById("ltext").innerHTML ="GOOD EVENING !!";
    document.getElementById("text-container").innerHTML ="STOP YAWNING,GET SOME TEA... ITS JUST EVENING !!";
    document.getElementById("nap-time-display").innerHTML = `Nap Time: ${
      optionValue3.options[optionValue3.value].text
    }`;
  }
else {
       document.getElementById("nap-time-display").innerHTML = `Nap Time: ${
          optionValue3.options[optionValue3.value].text
            }`;
    
  }


  if (optionValue4.value == hourrs) {
    document.getElementById("img-container").style.backgroundImage ="url('./Assests/Nt.jpeg')";
    document.getElementById("ltext").innerHTML ="GOOD NIGHT !!";
    document.getElementById("text-container").innerHTML ="CLOSE YOUR EYES AND GO TO SLEEP";
    document.getElementById("night-time-display").innerHTML = `Night Time: ${
      optionValue4.options[optionValue4.value].text
    }`;
  }
  else {
          document.getElementById("night-time-display").innerHTML = `Night Time: ${
           optionValue4.options[optionValue4.value].text
              }`;
  }
}
