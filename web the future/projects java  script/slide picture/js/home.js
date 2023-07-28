let img = document.querySelector("img")
let right = document.querySelector(".right")
let left = document.querySelector(".left")
let point0 = document.querySelector(".point0")
let point1 = document.querySelector(".point1")
let point2 = document.querySelector(".point2")
let point3 = document.querySelector(".point3")
let point4 = document.querySelector(".point4")
let point5 = document.querySelector(".point5")
let point6 = document.querySelector(".point6")
let point7 = document.querySelector(".point7")
let point8 = document.querySelector(".point8")
let points = [point0,point1,point2,point3,point4,point5,point6,point7,point8]
let i = 1
let x = 0
let y = 0

right.onclick = function(){
    if(i < 9){
        img.src = `/imgs/${++i}.jpg`
    }else{
        i = 0
    }
}