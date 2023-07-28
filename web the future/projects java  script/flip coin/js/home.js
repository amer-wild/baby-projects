let flip = document.querySelector(".btn1")
let reset = document.querySelector(".btn2")
let heads = document.querySelector(".btn2")
let tails = document.querySelector(".btn2")
let coin = document.querySelector(".coin-container > img")

flip.onclick = function(){
    let random = Math.floor(Math.random() * 2) +1
    coin.style.animation = "none"
    if(random == 1){
        coin.src = "/imgs/heads.svg"
        coin.style.animation = "flip 1.5s";
    }else{
        coin.src = "/imgs/tails.svg"
        coin.style.animation = "flip 1.5s";
    }
    coin.style.animation = ''
}