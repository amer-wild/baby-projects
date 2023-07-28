let input = document.querySelector(".task_input")
let btn = document.querySelector(".add_btn")
let addseciton = document.querySelector(".toDoList")
var current_task = document.querySelectorAll(".remove")

btn.onclick = function(){
    if(input.value != ''){
        addseciton.innerHTML +=
        `
        <div class = "list1">
        <p class = "p">
        ${input.value}
        </p>
        <button class = "remove">
        <i class = "fa-solid fa-trash"></i>
        </button>
        </div>
        ` 
    }
}


