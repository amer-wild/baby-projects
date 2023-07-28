let text = document.querySelector(".text")
let count = document.querySelector(".count")
text.oninput = function(){
   let result = text.value.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().length
    count.innerHTML = `total character : ${result}`
}