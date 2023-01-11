//document.getElementById('count').innerHTML =5 ;
//let count = document.getElementById('count') ;
let count=0;
let getEl = document.getElementById('count')
function increment () {
     count += 1
     getEl.textContent = count
     console.log('clicked')
}
let saveEl = document.getElementById('save-el');

function save () {
     let countStr = count + " - "
     saveEl.innerHTML += countStr
}