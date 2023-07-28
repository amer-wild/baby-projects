let content = document.querySelector(".dice-content")
let dice1 = document.querySelector(".dice1")
let dice2 = document.querySelector(".dice2")
let btn = document.querySelector(".btn")
let p = document.querySelector(".roll")



btn.onclick = function(){
    dice1.style.animationName = "vibrate"
    dice2.style.animationName = "vibrate"
    setTimeout(() => {
        let random1 = Math.floor(Math.random() * 6) +1
        let random2 = Math.floor(Math.random() * 6) +1
        dice1.innerHTML = sidess[random1 - 1]
        dice2.innerHTML = sidesss[random2 - 1]
        p.innerHTML = `your roll is ${(random1 ) + (random2)} `
        dice1.style.animationName = ''
        dice2.style.animationName = ''
    }, 300);

}