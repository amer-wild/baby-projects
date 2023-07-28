let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let input3 = document.querySelector(".input3")
let input = document.querySelectorAll("input")
let container = document.querySelector(".container")
let btn = document.querySelector(".btn")
let save = document.querySelector(".save")

input1.oninput = function(){
    container.style.background = `rgb(${input1.value},${input2.value},${input3.value})`
    btn.innerText = `R : G : B (${input1.value},${input2.value},${input3.value})`
}
input2.oninput = function(){
    container.style.background = `rgb(${input1.value},${input2.value},${input3.value})`
    btn.innerText = `R : G : B (${input1.value},${input2.value},${input3.value})`
}
input3.oninput = function(){
    container.style.background = `rgb(${input1.value},${input2.value},${input3.value})`
    btn.innerText = `R : G : B (${input1.value},${input2.value},${input3.value})`
}

save.onclick = function(){
    localStorage.setItem("red", input1.value)
    localStorage.setItem("green", input2.value)
    localStorage.setItem("blue", input3.value)
}

window.onload = function(){


    input1.value = localStorage.getItem("red")
    input2.value = localStorage.getItem("green")
    input3.value = localStorage.getItem("blue")


    btn.innerText = `R : G : B (${input1.value},${input2.value},${input3.value})`
    if(localStorage.getItem("red") != 0 ){
        container.style.background = 
        `rgb(${localStorage.getItem("red")},
            ${localStorage.getItem("green")},
            ${localStorage.getItem("blue")})`
            input1.value = localStorage.getItem("red")
            input2.value = localStorage.getItem("green")
            input3.value = localStorage.getItem("blue")
    }else{
        console.log("not true")
    }
}
