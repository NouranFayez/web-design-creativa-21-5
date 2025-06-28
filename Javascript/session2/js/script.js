// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(5)
// console.log(5)
// console.log(5)

// -- looping ==> while , for , do-while  (search) , forEach (array)

// variable
// while(condition){
//     code ..
//     increment / decrement
// }

// 1 : 10
// var i = 1
// while(i <= 10){
//    console.log(i)
//    i++
//     // increment / decrement
// }

// for(variable ; condition ; increment/ decrement){
// codee ..
// }

for (var i = 1; i <= 10; i++) {
    if (i == 8) break
    else if (i == 4) continue
    // else console.log(i)
}

// var x = 40
// var y = 50
// var a = x + y

// function funName(){
//     code >
// }

// call()


function sum(num , num2 , num3) {
    // var x = 40
    // var y = 50
    // var a = x + y
    // console.log(a)
    var a = num + num2
    console.log(a)
    // return a
    // return "javascript"
    return null
}

// sum(20 , 30)
// sum(40 , 30)
// sum(110 , 30)
// sum(40 , 90)



// var sumFun = sum(20 , 30)
// console.log(sumFun)

//  var p = prompt('enter your name')


function getNumbers(num1 , num2 , num3 = 100){
    console.log(num3)
    var h = num1+num2+num3
    return h
}

var n = getNumbers(10 , 20)
// console.log(n)


var firstName = "Nouran"
var lastName = "Fayez"

function getFullName(firstName , lastName){
    return `${firstName} ${lastName}`
}

var fullName = getFullName(firstName  , lastName)
// console.log(fullName)


// function ==> startNum , endNum , breakNum , ContNum

function looping(startNum , endNum , breakNum , contNum){
    if(startNum == undefined || endNum == undefined ||
         breakNum == undefined || contNum == undefined){
            // console.log('please enter all numbers')
    }
    else{

        for(var i = startNum ; i <= endNum ; i++){
            if(i == breakNum ) break
            else if(i == contNum ) continue
            // else console.log(i)
    
        }
    }
}
looping(1)
looping(1 , 20 , 15 , 4)


//  function Statment
function getName(){
    return 'Nouran'
}
var firstName = getName()

// function expression
var fullName = function(){
    return "Nouran Fayez"
}
console.log(fullName())

// arrow Function 
var arrFun = ()=>  "Javascript"

// console.log(arrFun())


// array

var firstName = "Nouran"
var lastName = "Fayez"
var age = 31
var isGraduated = true

var userData = ["Nouran" , "Fayez" , 31 , true ]

var userAge = userData[2]
console.log(userAge)

userData[4] = "Nasr city"
// userData[10] = "Developer"
userData[userData.length] = "developer"
console.log(userData.length)

userData.push("ghj" , 20 , true)
userData.unshift(false)

userData.pop()
userData.pop()
userData.pop()

userData.shift()

console.log(userData)


// console.log(userData[1])
// console.log(userData[2])
// console.log(userData[3])
// console.log(userData[4])

// for(var i = 0 ; i < userData.length ; i++){
//     console.log(userData[i])
// }


userData.forEach((items , i , arr)=>{
        console.log(i)
    
})












