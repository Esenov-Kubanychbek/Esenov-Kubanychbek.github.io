let btn1 = document.querySelector('#btn1')
let name = document.querySelector('#name')
let massege = document.querySelector('#massage')
let color = document.querySelector('#color')
let chat = document.querySelector('#chat')
let delite = document.querySelector('#delite')

btn1.addEventListener("mousedown", function(){
    let div = document.createElement('div')
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    div.append(span1)
    div.append(span2)
    chat.append(div)
    span1.innerText = name.value + ": "
    span2.innerText = massege.value
    span1.style.color = color.value
    fetch("https://chat-710e8-default-rtdb.firebaseio.com/chat.json",{

    
    method: "POST",
    body: JSON.stringify({
        name: name.value,
        massege: massege.value,
        color: color.value
        
    })
})
})
fetch('https://chat-710e8-default-rtdb.firebaseio.com/chat.json')
.then(function (response) {
    return response.json();
    
})
.then(function (data) {
    for (const key in data) {
        let div = document.createElement('div')
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        div.append(span1)
        div.append(span2)
        chat.append(div)
        span1.innerText = data[key].name + ": "
        span2.innerText = data[key].massege
        span1.style.color = data[key].color
        
    }

        
});
delite.addEventListener('mousedown', function() {
    fetch('https://chat-710e8-default-rtdb.firebaseio.com/chat.json',{
        method: "DELETE"
    })
    .then(function (response) {
        div.remove();
    })

    setTimeout(function() {
            location.reload();
    }, 300);

});