let input = document.querySelector(".input")
let btn = document.querySelector(".message-btn")
let output = document.querySelector(".output")
let delete1 = document.querySelector("#delete")

btn.onclick = function(){
    if(input.value != ''){
        output.innerHTML += input.value
    }
}
