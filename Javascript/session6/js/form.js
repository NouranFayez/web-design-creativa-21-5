let form = document.getElementById('myForm')

let CheckName = (ele)=>{
    let inputValue = ele.value.trim()
    if(inputValue.length < 3){
        handleError(ele , "please enter at least 3 letters")
    }
    else {
        handleError(ele )
        // ele.nextElementSibling.textContent = ""
    }
}

let handleError = (ele , msg = "")=>{
    ele.nextElementSibling.innerText = msg
}

let checkEmail = (ele)=>{
    // https://www.tutorialspoint.com/how-to-validate-email-address-using-regexp-in-javascript
        // username@domain.subdomain
    let inputValue = ele.value
    // console.log(inputValue)
   let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    console.log(regex.test(inputValue))
    if(regex.test(inputValue)) handleError(ele)
        else handleError(ele , "invalid email")
}

let checkPassword = (ele)=>{
// https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/

let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
let inputValu = ele.value
if(regExp.test(inputValu)) handleError(ele)
    else handleError(ele , "enter at least 1 uppercase , 1 lowercase , 1 number , 1 special cgaracter")
}

form.addEventListener('input' , (e)=>{
    // console.log('typing')
    // console.log(e)
    if(e.target.id == "userName"){
        CheckName(e.target)
    }
    else if(e.target.id == "UserEmail"){
        checkEmail(e.target)
    }
    else if(e.target.id == 'userPassword'){
checkPassword(e.target)
    }
})

