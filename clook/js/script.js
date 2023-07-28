setInterval(setClock(), 1000);

let hourHand = document.querySelector("[data-hour-hand]")
let  minuteHand= document.querySelector("[data-minute-hand]")
let secondHand = document.querySelector("[data-second-hand]")


function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio +  currentDate.getMinutes() )/ 60
    const hoursRatio = (secondsRatio + currentDate.getHours()) / 12
    setRotaiton(secondsRatio,secondHand)
    setRotaiton(secondHand,minuteHand)
    setRotaiton(hoursRatio,hourHand)
}


function setRotaiton(elemnt,rotationRatio){
    element.style.setProperty('---rotation',rotationRatio * 360)
}