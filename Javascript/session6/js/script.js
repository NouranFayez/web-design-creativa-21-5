

// -- setAttributes
// -- tabs 
// -- validation 



// -- let var const 

// console.log(middleName)
// console.log(lastName)

var firstName = "Nouran"

firstName = "Tamer"
console.log(firstName)
let middleName = "Ahmed"
middleName = 30
console.log(middleName)

const lastName = "Fayez"
// lastName = "fghkjb"
// console.log(lastName)


function getFullName (){
    let y = "text"
    if(true){
        var f = "text"
    }
    console.log(f)
    console.log(y)
}

getFullName()
// console.log(f)


// -- localstorage - sessionStorage


// sessionStorage.setItem("firstName" , "Nouran")
// sessionStorage.setItem("address" , "Nasr city")
// sessionStorage.setItem("age" , "31")

// console.log(sessionStorage.getItem('age'))
// console.log(sessionStorage.removeItem('age'))


// localStorage.setItem('firstNAme' , 'Nouran')
// localStorage.setItem('userId' , '123')


let users = [

    {
        name : "Nouran",
        id : "123",
        balance : 1000
    },
      {
        name : "Ahmed",
        id : "123",
        balance : 1000
    }
]
// var num = [2 , 5 ,7]
// console.log(num.toString())

localStorage.setItem('users' , JSON.stringify(users))

console.log(JSON.stringify(users))

let newList = JSON.parse(localStorage.getItem('users'))

newList.push({
    name : 'dgfghg', id:345 , balance:34556
})

console.log(newList)

console.log(localStorage.getItem('address'))






