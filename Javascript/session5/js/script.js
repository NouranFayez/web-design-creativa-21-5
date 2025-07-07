var form = document.getElementById('myForm')

var users = []
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    console.log('submit')

    console.log(e.target[0].value)
    console.log(e.target[1].value)

    addUser(e.target[0].value, e.target[1].value)

})

var addUser = (name, email) => {
    var user = {
        firstName: name,
        email

    }


    users.push(user)
    console.table(users)
}



var divContainer = document.querySelector('#div-container')

//  <div class="alert alert-primary">
//                 <h3>title</h3>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloribus.</p>
//             </div>

var btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    var newDiv = document.createElement('div')
    newDiv.classList.add('alert', 'alert-primary')
    var newH3 = document.createElement('h3')
    var newP = document.createElement('p')

    newH3.innerText = "title"
    newP.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloribus."

    newDiv.append(newH3)
    newDiv.append(newP)

    divContainer.append(newDiv)


    console.log(newDiv)

})


var scrollDiv = document.getElementById('scroll-div')

scrollDiv.addEventListener('scroll', () => {
    // console.log('scrolling...')

    // console.log(document.getElementsByClassName('bg-info'))
    console.log(scrollDiv.scrollTop)
    if (scrollDiv.scrollTop > 100) scrollDiv.classList.add('border', 'border-danger', 'border-5')
    else scrollDiv.classList.remove('border', 'border-danger', 'border-5')
})


// dom ==> document object model 
// bom => browser object model

var scrollBtn = document.getElementById('scroll-btn')

window.addEventListener('scroll', () => {
    // console.log('window scrolling')
    if (document.documentElement.scrollTop > 300) {
        console.log(document.documentElement.scrollTop)
        scrollBtn.classList.remove('d-none')

    }
    else scrollBtn.classList.add('d-none')

})

setTimeout(() => {
    console.log('js')
}, 2000)

console.log('html')

setInterval(() => {
    console.log('setInterval')
}, 1000)


var counter = document.getElementById('counter')
var counter2 = document.getElementById('counter2')

function counterElements(startCount , element , endCount , time) {
    var i = startCount
    var set = setInterval(() => {
        element.innerText = i
        if (i == endCount) clearInterval(set)
        i++
    }, time)
}


counterElements(0 , counter , 100 , 200)
counterElements(5000 , counter2 , 20000 , 20)









