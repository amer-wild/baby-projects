//*********** - register- ***********
let userName = document.getElementById("userName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let submit = document.getElementById("submit")

submit.addEventListener("click" , function(e){
    e.preventDefault()
    if(userName.value === '' || email.value === '' || password.value === '' ){
        alert("please fill the data")

    }else{
        localStorage.setItem("username",userName.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)

        setTimeout(() => {
            location = "login.html"
        }, 1500);
    }
})