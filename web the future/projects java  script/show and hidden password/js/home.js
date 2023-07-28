let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
 
btn.onclick = function(){
    if(input.getAttribute("type") == "text"){
        btn.textContent = "hidden"
        input.setAttribute("type","password")
    }else{
        btn.textContent = "show"
        input.setAttribute("type","text")
    }
}