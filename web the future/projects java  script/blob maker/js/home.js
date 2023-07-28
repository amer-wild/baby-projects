let blob = document.querySelector(".blob-maker")
let height = document.querySelector(".height")
let width = document.querySelector(".width")
let range1 = document.querySelector(".range1")
let range2 = document.querySelector(".range2")
let range3 = document.querySelector(".range3")
let range4 = document.querySelector(".range4")
let span = document.querySelector(".border-radius")
let btn = document.querySelector(".btn")
let copy = document.querySelector(".copy")



function width_(){
    blob.style.width = width.value  + "px"
    localStorage.setItem("width",width.value)
}
function height_(){
    blob.style.height = height.value  + "px"
    localStorage.setItem("height",height.value)
}
function range_1(){
    blob.style.borderRadius = `${range1.value + "%"}  ${ 100 - range1.value +"%"}  
   ${100 - range2.value + "%"}    ${range2.value + "%"} /
   ${range4.value + "%"}    ${range3.value +"%"}   
   ${100 - range3.value + "%"}    ${100 - range4.value + "%"}`
    localStorage.setItem("range1",range1.value)
    localStorage.setItem("range2", 100 -range2.value)
    localStorage.setItem("range3",range3.value)
    localStorage.setItem("range4",range4.value)
    localStorage.setItem("range-1",100 - range1.value)
    localStorage.setItem("range-2",range2.value)
    localStorage.setItem("range-3",100 - range3.value)
    localStorage.setItem("range-4", 100 - range4.value)
    localStorage.setItem("span1",range1.value)
    localStorage.setItem("span2", 100 -range2.value)
    localStorage.setItem("span3",range3.value)
    localStorage.setItem("span4",range4.value)
    localStorage.setItem("span-1",100 - range1.value)
    localStorage.setItem("span-2",range2.value)
    localStorage.setItem("span-3",100 - range3.value)
    localStorage.setItem("span-4", 100 - range4.value)
    span.value = `  border-radius :   ${localStorage.span1 + "%"}   ${localStorage.getItem("span-1")  +"%"}   
   ${localStorage.span2 + "%"}   ${localStorage.getItem("span-2") + "%"}  /  
   ${localStorage.span4 + "%"}   ${localStorage.span3 + "%"}   
   ${localStorage.getItem("span-3")  + "%"}   ${localStorage.getItem("span-4")  + "%"}`   

}
function defult(){
    blob.style.width = localStorage.width + "px"
    width.value = localStorage.width
    blob.style.height = localStorage.height + "px"
    height.value = localStorage.height
    blob.style.borderRadius = `   ${localStorage.range1 + "%"}    ${localStorage.getItem("range-1")  +"%"}   
   ${localStorage.range2 + "%"}    ${localStorage.getItem("range-2") + "%"}    /
   ${localStorage.range4 + "%"} ${localStorage.range3 + "%"}
   ${localStorage.getItem("range-3") + "%"}    ${localStorage.getItem("range-4")  + "%"}   `
    range1.value = localStorage.range1
    range2.value = localStorage.getItem("range-2")
    range3.value = localStorage.range3
    range4.value = localStorage.range4
    span.value = `  border-radius :   ${localStorage.range1 + "%"}   ${ localStorage.getItem("range-1")  +"%"}   
   ${localStorage.getItem("range-2") + "%"}   ${  localStorage.getItem("range-2") + "%"}  /  
   ${localStorage.range4 + "%"}   ${localStorage.range3 + "%"}   
   ${localStorage.getItem("range-3")  + "%"}   ${  localStorage.getItem("range-4")  + "%"}   `
                      
}
defult()

btn.onclick = function(){
    let textCopy = span.select()
    document.execCommand('copy')
}    


