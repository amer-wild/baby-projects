let start = document.querySelector(".start")
let pause = document.querySelector(".pause")
let reset = document.querySelector(".reset")
let sec = document.querySelector(".second")
let min = document.querySelector(".minute")
let hours = document.querySelector(".hours")
let milli = document.querySelector(".millisecond")
let [millisecond,second,minute,hour] = [0,0 ,0 ,0 ]

let int;

// start funciotn
start.onclick = function(){
   int =  setInterval(function(){
     millisecond+=10 
     if(millisecond == 1000){
     millisecond = 0
     second++ 
     if(second == 60){
     second= 0
     minute++ 
     if(minute == 60){
     minute = 0
     hour++ 
     }if(hour == 60)
     hour = 0
     }
     }
     milli.innerHTML = millisecond
     sec.innerHTML = second
     min.innerHTML = minute
     hours.innerHTML = hour
    }, 10);
}
// start function//

// paues function
pause.onclick = function(){
    clearInterval(int)
}
//paues funciton//
//reset function
reset.onclick = function(){
    clearInterval(int)
    milli.innerHTML = 00
    sec.innerHTML = 00
    min.innerHTML = 00
    hours.innerHTML = 00
    [millisecond,second,minute,hour] = [0,0 ,0 ,0 ]
}
//reset funciton //