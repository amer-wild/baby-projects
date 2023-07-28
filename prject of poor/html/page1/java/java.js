let email2 = document.getElementById("email")
let password2 = document.getElementById("passowrd")
let BTN = document.getElementById("BTN")
BTN.onclick = function(){
    if(email2.value == email.value){
        email.style.background = "red"
    }else{
        email.style.background = "green"
    }
}