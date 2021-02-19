let btn1 = document.querySelector('#btn1')
let name = document.querySelector('#name')
let massege = document.querySelector('#massage')
let color = document.querySelector('#color')

btn1.addEventListener("mousedown", function(){
    console.log(name.value)
    console.log(massege.value)
    console.log(color.value)
})