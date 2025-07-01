
// var arr = ["html" , "css" , "Bootstrap" , "Js"]


// var p = prompt('enter course name')

// if(!arr.includes(p)) arr.push(p)

// console.log(arr)

// console.log(arr.includes("ts"))


var arr = ["html", "css", "Bootstrap", "Js"]

// splice ==> add
// splice ==> remove
// splice ==> add/remove
// splice(index , deletedCount , item/s)

// arr.splice(1 , 0 , "Ts" , "Angular" , "react"  ) // add

// arr.splice(3 , 3) // delete

// arr.splice(1 , 1 , "Node" , "Php" , ['text' , 'num']) // add / remove

// console.log(arr.indexOf('Angular'))
// console.log(arr)


var nums = [10, 5, 20, 4, 30]

// var element = nums.find((item)=>{return item > 5})
// var element = nums.find(item=> item > 5)
var element = nums.find(item => item > 100) // undefined

// var index = nums.findIndex(item => item == 5)
var index = nums.findIndex(item => item == 100) // -1

// var newNumsArray = nums.filter(items => items > 5)
var newNumsArray = nums.filter(items => items > 100)
// nums.find(item => item == 5)




// console.log(index)

// console.log(element)
// console.log(newNumsArray)

// if(element == undefined)

var numbers = [3, 1000, 5, 20, 4, 30]
var text = ['css', 'apple', 'bootstrap']

// console.log(numbers.sort())
// console.log(text.toString())
// console.log(text.join("-"))


var user = ["Nouran", "Ahmed", "31", true]

var userOb = {
    firstName: "Nouran",
    lastName: "Ahmed",
    Age: 31,
    isGraduated: true
}

var userOb2 = {
    firstName: "Tamer",
    lastName: "Ahmed",
    Age: 31,
    isGraduated: true
}

var userOb3 = {
    firstName: "zein",
    lastName: "Ahmed",
    Age: 31,
    isGraduated: true
}


var users = [
    {
        firstName: "Nouran",
        lastName: "Ahmed",
        Age: 31,
        isGraduated: true
    },
    {
        firstName: "Nouran",
        lastName: "Ahmed",
        Age: 20,
        isGraduated: true
    },
    {
        firstName: "Nouran",
        lastName: "Ahmed",
        Age: 40,
        isGraduated: true
    }

]

console.log(users)

users.forEach((element , index , arr)=>{
    if(element.Age == 40) console.log(index)
})

var i = users.findIndex(item => item.Age == 40)

users[i].firstName = 'Mahmoud'


console.table(users)

var fName = "zein"
var lName = "tamer"


var obj = {
    fName : prompt('enter your First Name') ,
    lName : prompt('enter your last Name'),
    fullName : function(){
        return `${obj.fName} ${this.lName}`
    },
    age : 20 ,
    address : ['nasr city ' , 'october'],
    phones : {
        mobile : "012222222",
        landNum : "022222222"
    }
}

console.log(obj.fullName())

obj.address = prompt('enter address')

obj.age = 31
console.log(obj)



var u = [
    {
    fName : prompt('enter your First Name') ,
    lName : prompt('enter your last Name'),
    fullName : function(){
        return `${obj.fName} ${this.lName}`
    },
    age : 20 ,
    address : ['nasr city ' , 'october'],
    phones : {
        mobile : "012222222",
        landNum : "022222222"
    }
},
   {
    fName : "nouran" ,
    lName : "ahmed",
    fullName : function(){
        return `${obj.fName} ${this.lName}`
    },
    age : 20 ,
    address : ['maddi ' , 'october'],
    phones : {
        mobile : "01999999",
        landNum : "222222"
    }
},

]

console.table(u)


// NumberOfUsers()

//  addUser ==> name , id , balance

// editUserBalanceById () ==> id , newBalance

// deleteUserById() ==> id 

var NumberOfUsers= ()=>{
    var num = prompt('enter number of users')
    for (var i = 0; i < num; i++) {
       addUser()
        
    }
}



















