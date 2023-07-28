let paper = document.querySelector(".paper-")
let rock = document.querySelector(".rock-")
let scissor = document.querySelector(".scissor-")
let scor = document.querySelector(".score")
let com_scor = document.querySelector(".com-scor")
let you_scor = document.querySelector(".you-scor")
let you_choose = document.querySelector(".choose-you")
let com_choose = document.querySelector(".choose-com")
let choose = document.querySelector(".choose")
let win_lose = document.querySelector(".win-lose")
let win2 = document.querySelector(".win-lose2")
let agin = document.querySelector(".agin")
setInterval(() => {
    let random = Math.floor(Math.random() * 3) + 1
    rock.onclick = function(){
        if(paper.id == random){
            agin.style.visibility = "visible"
            you_choose.style.visibility = "visible"
            com_choose.style.visibility = "visible"
            win2.style.visibility = "visible"
            win2.innerHTML = "you lose..!"
            win2.style.background = "#fe8c8c"
            win2.style.border = "2px solid #ff6262"
            win2.style.color = "white"
            you_choose.innerHTML = "you choose : rock"
            com_choose.innerHTML = "computer choose : paper"
            com_scor.innerHTML = `computer : ${loses++}`
        }else{
            if(random == 1){
                agin.style.visibility = "visible"
                you_choose.style.visibility = "visible"
                com_choose.style.visibility = "visible"
                win2.style.visibility = "visible"
                win2.innerHTML = "DRAW..!"
                win2.style.background = "#bfb9b9"
                win2.style.border = "2px solid white"
                win2.style.color = "white"
                you_choose.innerHTML = "you choose : rock"
                com_choose.innerHTML = "you choose : rock"
                }else{
            agin.style.visibility = "visible"
            you_choose.style.visibility = "visible"
            com_choose.style.visibility = "visible"
            win2.style.visibility = "visible"
            win2.innerHTML = "you win!"
            win2.style.background = "#d5ffd5"
            win2.style.border = "2px solid #73f373"
            win2.style.color = "black"
            you_choose.innerHTML = "you choose : rock "
            com_choose.innerHTML = "computer choose : scissor "
            you_scor.innerHTML = `you : ${wins++}`
                }
          
        }
    }
    //rock function //
    //paper fucntion
    paper.onclick = function(){
        if(scissor.id == random){
            agin.style.visibility = "visible"
            you_choose.style.visibility = "visible"
            com_choose.style.visibility = "visible"
            win2.style.visibility = "visible"
            win2.innerHTML = "you lose..!"
            win2.style.background = "#fe8c8c"
            win2.style.border = "2px solid #ff6262"
            win2.style.color = "white"
            you_choose.innerHTML = "you choose : paper"
            com_choose.innerHTML = "computer choose : scissor"
            com_scor.innerHTML = `computer : ${loses++}`
        }else{
            if(random == 2){
                agin.style.visibility = "visible"
                you_choose.style.visibility = "visible"
                com_choose.style.visibility = "visible"
                win2.style.visibility = "visible"
                win2.innerHTML = "DRAW..!"
                win2.style.background = "#bfb9b9"
                win2.style.border = "2px solid white"
                win2.style.color = "white"
                you_choose.innerHTML = "you choose : paper"
                com_choose.innerHTML = "computer choose : paper"
                }else{
            agin.style.visibility = "visible"
            you_choose.style.visibility = "visible"
            com_choose.style.visibility = "visible"
            win2.style.visibility = "visible"
            win2.innerHTML = "you win!"
            win2.style.background = "#d5ffd5"
            win2.style.border = "2px solid #73f373"
            win2.style.color = "black"
            you_choose.innerHTML = "you choose : paper "
            com_choose.innerHTML = "computer choose : rock "
            you_scor.innerHTML = `you : ${wins++}`
                }
          
        }
    }
    //paper fucntion //
    //scissor function
    scissor.onclick = function(){
        if(rock.id == random){
            agin.style.visibility = "visible"
            you_choose.style.visibility = "visible"
            com_choose.style.visibility = "visible"
            win2.style.visibility = "visible"
            win2.innerHTML = "you lose..!"
            win2.style.background = "#fe8c8c"
            win2.style.border = "2px solid #ff6262"
            win2.style.color = "white"
            you_choose.innerHTML = "you choose : scissor"
            com_choose.innerHTML = "computer choose : rock"
            com_scor.innerHTML = `computer : ${loses++}`
        }else{
            if(random == 1){
                agin.style.visibility = "visible"
                you_choose.style.visibility = "visible"
                com_choose.style.visibility = "visible"
                win2.style.visibility = "visible"
                win2.innerHTML = "DRAW..!"
                win2.style.background = "#bfb9b9"
                win2.style.border = "2px solid white"
                win2.style.color = "white"
                you_choose.innerHTML = "you choose : scissor"
                com_choose.innerHTML = "computer choose : scissor"
                }else{
            agin.style.visibility = "visible"
            you_choose.style.visibility = "visible"
            com_choose.style.visibility = "visible"
            win2.style.visibility = "visible"
            win2.innerHTML = "you win!"
            win2.style.background = "#d5ffd5"
            win2.style.border = "2px solid #73f373"
            win2.style.color = "black"
            you_choose.innerHTML = "you choose : scissor "
            com_choose.innerHTML = "computer choose : paper "
            you_scor.innerHTML = `you : ${wins++}`
                }
          
        }
    }
    //scissor function //
    agin.onclick = function(){
        agin.style.visibility = "hidden"
        you_choose.style.visibility = "hidden"
        com_choose.style.visibility = "hidden"
        win2.style.visibility = "hidden"
        you_scor.innerHTML = "you : 0"
        com_scor.innerHTML = "computer : 0"
        wins = 1
        loses = 1
    }
}, 10);
let wins = 1
let loses = 1
rock.id = 1
paper.id = 2
scissor.id = 3

agin.style.visibility = "hidden"
you_choose.style.visibility = "hidden"
com_choose.style.visibility = "hidden"
win2.style.visibility = "hidden"
//rock funciton 