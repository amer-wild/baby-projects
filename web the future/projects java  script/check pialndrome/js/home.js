let input = document.querySelector("#input")
let btn = document.querySelector("#btn")
let p = document.querySelector(".p")
btn.onclick = function removeInvalidCharacters() {
    let newText = input.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let len = newText.length
    let halflen = Math.floor(len / 2)
    let isPalindrome = true
    for(i = 1; i < halflen ; i++){
        if(newText[i] != newText[len - 1 - i]){
            isPalindrome = false
            break
        }
    }
    if(isPalindrome){
        p.innerHTML = "yes! it's a palindrome"
    }else{
        p.innerHTML = "npe! not a palindrome"
        p.style.color = "#FF6347"
    }
}
