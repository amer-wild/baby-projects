let input = document.querySelector(".guess")
let btn = document.querySelector(".guess-btn")
let p = document.querySelector(".change")
let guess_number = document.querySelector(".body")
let guesses = document.querySelector(".foot")

onload

btn.onclick = function(){
    if(input.value != ''){
        if(input.value == Math.random().toString().slice(2,3)){
            p.innerText = "Yippeie You Win!!"
            guess_number.innerText = `The number was : ${input.value}`
            guesses.innerText = `You guessed it in (${i - 1}) guesses`
        }else{
            guess_number.innerText = `No. Of Guesses : ${i++}` 
            guesses.innerText += input.value + ","
            input.value = ''
        }
    }
}
let i = 1
let inputV = input.value
console.log(Math.random().toString().slice(2,3));