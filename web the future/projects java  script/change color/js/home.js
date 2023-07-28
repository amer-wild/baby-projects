let color_btn = document.querySelector("#change_color")
let color_section = document.getElementById("color")

color_btn.onclick = function(){
    let random = Math.random().toString().slice(2,8)
    color_section.style.background = "#" + random
}