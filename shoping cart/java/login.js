let email = document.getElementById("email")
let password = document.getElementById("password")
let submit = document.getElementById("submit")

let getusername = localStorage.getItem("username")
let user_password = localStorage.getItem("password")

submit.addEventListener('click', function(e){
    e.preventDefault()
   if(email.value == "" || password.value == ""){ 

        alert("plaese fill data")

    }else{
        if((getusername &&
            getusername === getusername && 
            user_password && 
            user_password === user_password
            ))
            {
                setTimeout(() => {
                    location = "index.html"
                    
                }, 1500);
            }else{
                alert("username or password is rong!");
            }

    }
})