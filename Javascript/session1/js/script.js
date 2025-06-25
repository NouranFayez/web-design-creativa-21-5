// var variableName = variableValue

// string , number , boolean ,  null , undefined , array , object ,


// string
var firstName = 'nouran'

// var age = 31
// var age = "31"

// console.log(firstName)
// console.log(age)

var isGraduated = true
var IsGraduated = "false"

// console.log(isGraduated)
// console.log(IsGraduated)

var num

// console.log(num)
// console.log(numb)

var t = null

var firstName = "zein"
var lastName = "Tamer"

// var fullName = firstName+ " " +lastName
// template string
var fullName = `${firstName} ${lastName}`

// console.log(fullName)


// Mathematical Operators (+ - ** / % ++ -- )

var h = 10
var t = 5
console.log(h + t)

var b = "text"
var k = h / b
// console.log(k) // NaN ==> Not a Number

// console.log(h/t+b)
// console.log(h+b)


var l = firstName

var k = 10
// console.log(k)
// var l = k++
// console.log(l)

// console.log(++k)

// console.log(k++) // 10
// console.log(k) // 11
// console.log(k--) // 11
// console.log(k) // 10

// Assignment Operator (+= , -= , /= , *=)

var x = 5
// x = x + 5

// console.log(x+=10)


// Comparison Operator ==> > , >= , < , <= , == , === , != , !==

var num1 = 10
var num2 = 20
var num3 = 20
var num4 = "20"
// console.log(num1 > num2)
// console.log(num2 >= num3)

// console.log(num3 == num4) // value
// console.log(num3 === num4) // value , data type

// console.log(num3 != num4) // value
// console.log(num3 !== num4) // value , data type

// ternary Operator ==> typeof instanceof(search)

var h = "text"
// console.log(typeof(h))
// console.log(typeof h)


var str = "Number"

// console.log(str == typeof h)


// logical operator ==> && , || ,  !
var num1 = 10
var num2 = 20
var num3 = 20
var num4 = "20";
// var num1 , num2 , num3
// console.log(num1 == num2 && str == "String")
// && ==>  false , true , true = false 
// && ==>  true , true , true = true

// || ==> false , true , false , false = true
// || ==> false , false , false , false = false

// console.log(num1 == 30 || num4 === num3 || str == "String")

// console.log(str == "String" || (!num2 == num4))


// ternary operator 

// (condition)? true code : false code

// (str == "String") ? console.log("String") : console.log('not string');


// var age = 0;
// var age = -0;
// var age; // undefined
// var age = "";
// var age = !null; // null
// var age = NaN; // NaN
// var age = 31;
// var age = "xcvghjkl";
// var age = " ";
// var age = true;
// (age)? console.log('correct') : console.log("wrong")

console.log(str)


// string , number , boolean ,  null , undefined


// if condition 

// if(condition){
//     true code 
// }
// else {
//     false
// }

var job = "developer"

if (job == "developer") {
    var result = "he is a developer"
    console.log(result)

}
// else {
//     console.log('invalid job')

// }

// var p = prompt("enter your name" , "Nouran")

// console.log(p)

// if(p == "Nouran") console.log(p)
//     else console.log('invalid user')


// user ==> dev , eng , inst

// var job = prompt('Enter your job')
// var num = prompt('enter userID')
// if (job == 'dev' && num == 1  ) console.log('developer')
// else if (job == 'eng') console.log('engineer')
// else if (job == 'ins') console.log('instructor')
// else console.log('invalid job')


// switch condition 

// switch(variable){
//     case 1: code ...
//     case 1: code ...
//     case 1: code ...
//     case 1: code ...
// }



var job = prompt('Enter your job')

switch (job) {
    case "12" : 
        console.log('number')
        break
    case 'dev':
    case "DEV":     
        console.log('developer')
        break
    case 'ins':
        console.log('instructor')
        break
    case 'eng':
        console.log('engineer')
        break
    default: console.log('invalid job')
}





















