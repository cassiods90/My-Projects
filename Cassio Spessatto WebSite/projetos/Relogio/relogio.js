var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var startstop = document.getElementById("startstop");
/* Start functions to complete the alarm options */
function addMinSec(id) {
    var select = id;
    var min = 59;

    for(i=0; i<=min; i++){
        select.options[select.options.length] = new Option(i <10 ? "0" + i : i);
    }
}

function addHour(id) {
    var select = id;
    var min = 24;

    for(i=0; i<=min; i++){
        select.options[select.options.length] = new Option(i <10 ? "0" + i : i);
    }
}
addHour(hour);
addMinSec(minute);
addMinSec(second);
/* End functions to complete the alarm options */


/* Start Alarm functions*/
var alarmElement;
var activeAlarm = false;

startstop.onclick = function(){
    if(activeAlarm === false) {
        hour.disabled = true;
        minute.disabled = true;
        second.disabled = true;

        alarmElement = hour.value + ":" + minute.value + ":" + second.value;
        console.log(alarmElement);
        this.textContent = "Alarm On";
        activeAlarm = true;
    }
    else {
        hour.disabled = false;
        minute.disabled = false;
        second.disabled = false;
        
        document.getElementById("myAudio").pause();
        clearInterval(interval2);
        document.getElementById("hours").style.background="#2196f3";
        document.getElementById("hoursHours").style.background="#2196f3";
        document.getElementById("minutes").style.background="#2196f3";
        document.getElementById("minutesMinutes").style.background="#2196f3";
        document.getElementById("seconds").style.background="#ff006a"; 
        document.getElementById("secondsSeconds").style.background="#ff006a";
        this.textContent = "Alarm Off";
        activeAlarm = false;
    }
}
/* Start Alarm functions*/


/* Start Alarm active*/
var interval2
function alarmOn() {
    document.getElementById("myAudio").play(); 
    var i;
    i=0;
    interval2 = setInterval(() => {    
            if (i%2 == 0){
                document.getElementById("hours").style.background="#f32121";
                document.getElementById("hoursHours").style.background="#f32121";
                document.getElementById("minutes").style.background="#f32121";
                document.getElementById("minutesMinutes").style.background="#f32121";
                document.getElementById("seconds").style.background="#4dff00";
                document.getElementById("secondsSeconds").style.background="#4dff00";
            } else {  
                document.getElementById("hours").style.background="#2196f3";
                document.getElementById("hoursHours").style.background="#2196f3";
                document.getElementById("minutes").style.background="#2196f3";
                document.getElementById("minutesMinutes").style.background="#2196f3";
                document.getElementById("seconds").style.background="#ff006a"; 
                document.getElementById("secondsSeconds").style.background="#ff006a"; 
            }
            i++; 
        }, 1000)
}
/* End Alarm active*/

/* Start function to run the clock */
function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

function clock() {
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var currentTime;

    var h = addZero(new Date().getHours());
    var m = addZero(new Date().getMinutes());
    var s = addZero(new Date().getSeconds());
    
    currentTime = h + ":" + m + ":" + s;
    
    if (currentTime == alarmElement){
        alarmOn();
    }
    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}
var interval = setInterval(clock, 1000);

/* End function to run the clock */