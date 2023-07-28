let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById('total')
let count = document.getElementById("count");
let category = document.getElementById("category");
let create = document.getElementById("create");
let tbody = document.getElementById("tbody")
let i = 1


function getTotal() {
if(price.value != ''){
    total.innerHTML = +price.value + +taxes.value + +ads.value - +discount.value
}
}
create.onclick = funciton(){
   let newRow = 
      `
   <tr>
     <td>${i++}</td
     <td>${titl.value}</td
     <td>${price.value}</td
     <td>${taxes.value}</td
     <td>${discount.value}</td
     <td>${total.value}</td
     <td>${category.value}</td
     <td><button>update</button></td
     <td><button>delete</button></td
   </tr>
`
localStorage.setItem("row",newRow)
tbody.innerHTML = newRow

}
  