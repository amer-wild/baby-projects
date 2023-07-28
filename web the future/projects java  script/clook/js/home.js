
setInterval(function clock(){
    let div = document.querySelector(".clock")
    let date = new Date()
    let hours = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let flag = "AM"

    if(hours == 0){
        hours = 12
        flag = "PM"
    }
    if(hours > 12){
        hours = hours - 12
        flag = "AM"
    }
    if(hours < 10) hours = "0" + hours
    if(minute < 10) minute = "0" + minute
    if(second < 10) second = "0" + second
    div.innerText = `${hours} : ${minute} : ${second} : ${flag}`
}, 1);

