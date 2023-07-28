let productInCart = localStorage.getItem("productsInCart")
let productsDom = document.querySelector(".products")
if(productInCart){
    let items = JSON.parse(productInCart)
    drawProducts(items)
}
function drawProducts  (product) {
    let items = JSON.parse(productInCart)
    let productsUi = items.map((item)=> {
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
                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">remove from cart</button>
            </div>
    </div>`
    })
    productsDom.innerHTML = productsUi;
}


function removeItemFromCart(id){
    console.log(id)
    if(productInCart){
        let items = JSON.parse(productInCart)
       let filteredItems = items.filter((item) => item.id !== id);
       drawProducts(filteredItems)
        localStorage.setItem("productsInCart",JSON.stringify(filteredItems))
    }
}