let userInfo = document.getElementById("user_info")
let userDom = document.getElementById("user")
let links = document.getElementById("links")
let logout = document.getElementById("logout")
let cartBtn = document.querySelector(".add-to-cart")
let productsDom = document.querySelector(".cart-products div")
let productMenu = document.querySelector(".cart-products")
let padge = document.querySelector(".padge")
let shopingCart = document.querySelector(".shoping-cart")


let username = localStorage.getItem('username')

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

// Define products

function drawProducts  () {
    let productsUi = products.map((item)=> {
        return`
    <div class="products-item">
        <img src="${item.imgUrl}" 
        alt="product" 
        class="products-item-img">
            <div class="products-item-desc">
                <h2>${item.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <span> size:${item.size}</span>
            </div>
            <div class="products-item-action">
                <button class="add-to-cart" onclick="addToCart(${item.id})">add to cart</button>
                <i class="fa-regular fa-heart favorite"></i>
            </div>
    </div>
        `
    })
    productDom.innerHTML = productsUi
}

drawProducts()

let adedItem = localStorage.getItem('productsInCart')?
JSON.parse(localStorage.getItem('productsInCart')):[]

if(adedItem){
    adedItem.map ( (item) => {
        productsDom.innerHTML += `<p>${item.title}</p>`;
    })
    padge.style.display = "block"
    padge.innerHTML += adedItem.length
}

function addToCart(id,item){
    if(localStorage.getItem("username")){
        let choosenItem  = products.find((item) => item.id === id);
        productsDom.innerHTML += `<p>${choosenItem.title}</p>`
        padge.style.display = "block"
        let productcartlength = document.querySelectorAll(".cart-products p")
        padge.innerHTML = productcartlength.length

        adedItem = [...adedItem,choosenItem]
        localStorage.setItem("productsInCart",JSON.stringify(adedItem))
    }else{
        location = "login.html"
    }
}


shopingCart.addEventListener("click",function(){
    if(productsDom.innerHTML != "" ){
        if(productMenu.style.display == "block"){
            productMenu.style.display = "none"
        }else{
            productMenu.style.display = "block"
        }
    }
})