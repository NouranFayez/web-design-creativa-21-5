// DOM ==> document object model

// ==> id , class , tag 


console.log(document.getElementsByClassName('h1-element'))

var classElements = document.getElementsByClassName('h1-element')

classElements[0].innerText = "Javascript"

var div = document.getElementById('div-id')

// div.innerHTML = "<h2>Javascript</h2>"
div.children[0].textContent = "Javascript"

console.log(div)


// var querySelector = document.querySelector('#div-id h2')
// var querySelectorAll = document.querySelectorAll('.h1-element')
var querySelectorAll = document.querySelectorAll('#div-id')




// console.log(querySelectorAll)


var elementsStyle = document.getElementsByClassName('element-style')

console.log(elementsStyle)


for(var i =0 ; i < elementsStyle.length ; i++){
    elementsStyle[i].classList.add('bg-primary' , 'text-white' , 'fs-2')
}

elementsStyle[0].classList.remove('text-white')
elementsStyle[0].classList.toggle('p-5')


elementsStyle[1].style.backgroundColor = "lightgray"

var inp = document.querySelector('input')

console.log(inp.value);


function changeImg(){
    var img = document.getElementById('img')
    console.log(img.src);
    (img.src.endsWith('1.webp'))  ?
    img.src = 'images/2.jpg' :
      img.src = 'images/1.webp'

}

function mouseEnter(){
    var ele = document.querySelector('#mouse-div')
    ele.classList.add('bg-primary')
}
function mouseLeave(){
   var ele = document.querySelector('#mouse-div')
    ele.classList.remove('bg-primary')
}

function handleMouseEvent(flag , ele){
      if(flag == 'mouseenter') ele.classList.add('bg-primary')
        else ele.classList.remove('bg-primary')
 
}

var inp = document.getElementById('input-id')

inp.addEventListener('input' , function(e){
    console.log(e)
  console.log(inp.value)
  console.log(e.target.value)
  inp.nextElementSibling.innerText = inp.value
})




