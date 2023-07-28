let like = document.getElementById("icone1")
let dislike = document.getElementById("icone2")
let picture = document.querySelector("img")

let img1 = document.getElementsByClassName("img1")
let img2 = document.getElementsByClassName("img2")
let img3 = document.getElementsByClassName("img3")
let img4 = document.getElementsByClassName("img4")

like.onmouseenter = function(){
    like.style.animationName = "like"
    like.style.background = "pink"
    like.style.color = 'black'
}
like.onmouseleave = function(){
    like.style.animationName = ''
    like.style.background = ''
    like.style.color = ''
    like.style.transition = "0.3s"
}
dislike.onmouseenter = function(){
    dislike.style.background = "red"
}
dislike.onmouseleave = function(){
    dislike.style.background = ''
}

if(img1.style.display = "none"){
    console.log("yes");

}

like.onclick = function(){
   
}

