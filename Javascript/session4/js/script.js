var obj = {
    firstName: 'Tamer',
    lastName: 'Fayez',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    addresses: function () {
        return {
            homeAddress: "Nasr city",
            workAddress: 'October'
        }
    }
}


// var getUserData = ()=>{
//     return {
//         firstName : "Zein",
//         lastName : 'Tamer',
//         age : 11
//     }
// }

var getUserData = (userData) => {
    return userData
}

// console.log(getUserData(obj).fullName())

// console.log(getUserData(obj).addresses().workAddress)

//// Methods of string 


var firstName = "Nouran"

// console.log(firstName.length)
// console.log(firstName[0])

for (var i = 0; i < firstName.length; i++) {
    // console.log(firstName[i])
}
var str = "    Lorem ipsum consectetur dolor sit amet consectetur      "


// console.log(str.startsWith('lorem'))
// console.log(str.endsWith('html'))
// console.log(str.indexOf('sit'))
// console.log(str.includes('sit'))
// console.log(str.replace('consectetur' , 'Html'))
// console.log(str.replaceAll('consectetur' , 'Html'))
// console.log(str.trim())

// console.log(str.slice(0 , 10).trim())

var txt = "30"

// console.log(isNaN(txt))


// var s = prompt('enter number')

// console.log(parseInt(s))
// console.log(parseFloat(s))
// console.log(Number(s))

// var p = +s

// console.log(p)

// console.log(Math.random()*100)

var n = 3.9
// console.log(Math.round(n))
// console.log(Math.ceil(n))
// console.log(Math.floor(n))

// console.log(Math.max(3, 10 , 50 , 2, 100))
// console.log(Math.min(3, 10 , 50 , 2, 100))

// var m = -5
// console.log(Math.abs(m))


var d = new Date()

console.log(d)
console.log(d.getFullYear())
console.log(d.getMonth()) // 0 - 11
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

console.log(month[d.getMonth()])

console.log(d.getDay()) // 0 : 6 ==> starts with Sunday
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())

var v = "20/5/2024"

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(`${days[d.getDay()]} ${month[d.getMonth()]}`)




// $(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            // items : 2 ,
            loop: true,
            margin: 30,
            nav: true,
            autoplay: true ,
            autoplayTimeout: 3000, 
            navText :['<i class="fa-solid fa-arrow-left-long bg-primary text-white"></i>' , '<i class="fa-solid fa-arrow-right-long"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                // 600: {
                //     items: 
                // },
                1000: {
                    items: 2
                }
            }
        }
    );
// });


