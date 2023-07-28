let title = document.querySelector(".userName")
let follow1 = document.querySelector(".follow1")
let follow2 = document.querySelector(".follow2")
let background = document.querySelector("header")
let follow = document.querySelector(".follow")
let message = document.querySelector(".message")
let blue = document.querySelector(".blue")
let red = document.querySelector(".red")
let green = document.querySelector(".green")
let purple = document.querySelector(".purple")
let orange = document.querySelector(".orange")

blue.addEventListener("click",function(){
    title.style.color = "#259ae3"
    follow2.style.color = "#259ae3"
    follow1.style.color = "#259ae3"
    follow.style.background = "#259ae3"
    message.style.border = "2.5px solid #259ae3"
    background.style.background = "#259ae3"
})
red.addEventListener("click",function(){
    title.style.color = "#e32548"
    follow2.style.color = "#e32548"
    follow1.style.color = "#e32548"
    follow.style.background = "#e32548"
    message.style.border = "2.5px solid #e32548"
    background.style.background = "#e32548"
})
green.addEventListener("click",function(){
    title.style.color = "#35c460"
    follow2.style.color = "#35c460"
    follow1.style.color = "#35c460"
    follow.style.background = "#35c460"
    message.style.border = "2.5px solid #35c460"
    background.style.background = "#35c460"
})
purple.addEventListener("click",function(){
    title.style.color = "#b93dfc"
    follow2.style.color = "#b93dfc"
    follow1.style.color = "#b93dfc"
    follow.style.background = "#b93dfc"
    message.style.border = "2.5px solid #b93dfc"
    background.style.background = "#b93dfc"
})
orange.addEventListener("click",function(){
    title.style.color = "#ff8000"
    follow2.style.color = "#ff8000"
    follow1.style.color = "#ff8000"
    follow.style.background = "#ff8000"
    message.style.border = "2.5px solid #ff8000"
    background.style.background = "#ff8000"
})
console.log(title);