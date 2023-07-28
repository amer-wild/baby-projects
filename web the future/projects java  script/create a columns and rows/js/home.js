let input_column = document.querySelector("#column_number")
let input_row = document.querySelector("#rows_number")
let btn = document.querySelector("#create")
let table_section = document.querySelector(".content_section")

btn.onclick = function(){
    if(input_column.value,input_row.value !=''){
        for(var i = 0 ; i > 2 ; i++){
            let tr = document.createElement("tr")
        }
    }else{
        alert("pleas full the information")
    }
}