let title = document.querySelector(".title")
let price = document.querySelector(".price")
let taxes = document.querySelector(".taxes")
let ads = document.querySelector(".ads")
let discount = document.querySelector(".discount")
let total = document.querySelector(".total")
let count = document.querySelector("#count")
let category = document.querySelector(".category")
let create = document.querySelector(".create")
let deleteAll = document.querySelector(".deleteAll")
let tbody = document.querySelector("tbody")
let pro = JSON.parse(localStorage.pro || "[]");

function getTotal(){
    if(price.value && taxes.value){
        let result = (+price.value + +taxes.value + +ads.value - +discount.value) * +count.value
        total.innerHTML = `total : ${result}`
        total.style.background = "green"
    }else{
        total.style.background = "#f63f3f"
        total.innerHTML = "total : "
    }
}

function showData(){
    let table = "";
    for(let y = 0 ; y < pro.length; y++){
        table += `
        <tr>
            <td>${ 1 +y}</td>
            <td>${pro[y].title}</td>
            <td>${pro[y].price}</td>
            <td>${pro[y].taxes}</td>
            <td>${pro[y].ads}</td>
            <td>${pro[y].discount}</td>
            <td>${pro[y].total}</td>
            <td>${pro[y].category}</td>
            <td><button class="update-tr" onclick="">update</button></td>
            <td><button class="delete-tr" onclick="deleteI(${y})">delete</button></td>
        </tr>
        `
    }
    tbody.innerHTML = table;
    if(pro.length > 0){
        deleteAll.classList.remove("hidden")
        deleteAll.innerHTML = `delete all ( ${pro.length} )`
    }
    if(pro.length == 0 ){
        deleteAll.classList.add("hidden")
    }
}

create.onclick = function(){
    if(title.value && price.value && taxes.value && ads.value && discount.value && count.value && category.value){
        let newPro = {
            title : title.value,
            price : price.value,
            taxes : taxes.value,
            ads   : ads.value,
            discount: discount.value,
            total   : total.innerHTML.slice(9),
            category: category.value
        }
        let countValue = +count.value;
        if(countValue > 1){
            for(let i = 0; i < countValue; i++){
                pro.push(newPro)
            }
        }else{
            pro.push(newPro)
        }
        localStorage.setItem("pro", JSON.stringify(pro))
        showData()
    }else{
        alert("Please fill all the fields.")
    }
}

deleteAll.onclick = function(){
    localStorage.clear(pro)
    deleteAll.classList.add("hidden")
    tbody.innerHTML = ''
}

