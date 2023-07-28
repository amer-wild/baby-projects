let username = localStorage.getItem('username')
let userInfo = document.getElementById("user_info")
let userDom = document.getElementById("user")
let links = document.getElementById("links")
let logout = document.getElementById("logout")

if(username){
    links.remove()
    userInfo.style.display = "flex"
    userDom.innerHTML = username
}
logout.addEventListener("click",function(){
    localStorage.clear()
    setTimeout(() => {
        location = "register.html"
    }, 1500);
})