let input = document.querySelector(".search");
let btn = document.querySelector(".search-btn");
let p = document.querySelector(".output > p");

btn.onclick = function(){
    let pattern = new RegExp(input.value, "gi");
    let matches = p.textContent.match(pattern);
    if(input.value){
        console.log(p.innerText.match());
    }
};

