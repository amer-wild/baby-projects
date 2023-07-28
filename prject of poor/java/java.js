let userName = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let password1 = document.getElementById("password2")
let btn = document.getElementById("newEmail")


btn.onclick = function(){
    let user = {
        name:userName.value,
        email:email.value,
        password:password.value,
        password2:password1.value,
    }
    if(password1.value == password.value){
        window.localStorage.setItem(JSON.stringify(userName.value),JSON.stringify(user))
        open("http://127.0.0.1:5500/html/page1/index2.html")
        
    }else{
        password1.style.background = "red"
    }
}