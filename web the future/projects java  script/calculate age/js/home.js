let input = document.querySelector(".input")
let days = document.querySelector(".day")
let months = document.querySelector(".month")
let years = document.querySelector(".year")
let date = new Date()
function agecalculater(){
    let day = input.value.slice(8)
    let month = input.value.slice(5,7)
    let year = input.value.slice(0,4)
    let date_day = date.getDay()
    let allMonth = [31,28,31,30,31,30,31,31,30,31,30,31,0]
    let date_month = 1+ date.getMonth()
    let date_year = date.getFullYear()
    let calc_month = date_month - +month
    let calc_day   = date_day   - +day 
    let calc_year  = date_year  - +year
    if(calc_month < 0 ){
        calc_year  =calc_year -1
        calc_month = 12 + calc_month
        console.log(calc_day,calc_month,calc_year)
    }else{
     if(calc_day < 0 ){
        calc_month = calc_month - 1 
        calc_day = allMonth[calc_month] + calc_day
    }
    }
    if(calc_day < 0 ){
        calc_month = calc_month - 1 
        calc_day = 31 + calc_day
    }

    months.innerHTML = calc_month
    days.innerHTML = calc_day
    years.innerHTML = calc_year
}