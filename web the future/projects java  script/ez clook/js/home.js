
setInterval(function clock(){
    let date = new Date()
    let hours = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let hours_section = document.querySelector(".hours")
    let min_section= document.querySelector(".minute")
    let sec_section= document.querySelector(".second")
    let mil = document.querySelector(".mi")
    let m = date.getMilliseconds()


    if(hours > 12){
        hours_section.innerHTML = hours - 12
        min_section.innerHTML = min
        sec_section.innerHTML = sec 
        mil.innerHTML = m
        }

},0)




