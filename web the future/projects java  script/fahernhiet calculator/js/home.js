let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");

celsius.oninput = function(){
    let result1 = parseFloat(celsius.value)
    if(!isNaN(result1)){
        let result = (result1 * 1.8) + 32
        fahrenheit.value = result.toFixed(2)
    }else{
        fahrenheit.value = ''
    }
}
fahrenheit.oninput = function(){
    let fahrenheitValue = parseFloat(fahrenheit.value)
    if(!isNaN(fahrenheitValue)){
        let result = (fahrenheitValue - 32)/ 1.8
        celsius.value = result.toFixed(2)
    }else{
        celsius.value = ''
    }
}