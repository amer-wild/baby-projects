let photo = document.getElementById("photo1");
let picture = document.getElementById("picture");
let shoes = document.getElementById("shoes-card");
let btn = document.querySelector("button")
console.log(btn)
btn.onclick = function(){
    shoes.style.background = 'red'
}
// translate
function change(){
    document.getElementById("picture").src = "image/red_shoes1.png"
}
function change2(){
    document.getElementById("picture").src = "image/red_shoes2.png"
}
function change3(){
    document.getElementById("picture").src = "image/red_shoes3.png"
}
function change4(){
    document.getElementById("picture").src = "image/red_shoes4.png"
}