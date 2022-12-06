var fullname
var password 
var repassword

function nameFocus(){
    fullname = document.getElementById("fullname")
    fullname.style.border = "blue solid 1px"
    fullname.style.outline = "none"
}

function nameBlur(){
    fullname = document.getElementById("fullname")
    fullname.style.border = "black solid 1px"
    // fullname.style.outline = "block"

    var error = document.querySelector(".error")
    if(fullname.value == "" || fullname.value.length < 3){
        error.style.display = "inline"
        nameFocus()
        fullname.select()
    }else{
        error.style.display = "none"
    }
}

function repasswordBlur(){
    password = document.getElementById("password")
    repassword = document.getElementById("repassword")
    var error = document.querySelectorAll(".error")[1]

    if(repassword.value == ""){
        error.innerHTML = " Required"
        error.style.display = "inline"
    }else{
        error.innerHTML = " Password and repeat password should be the same"
        error.style.display = "none"
    }

    if(repassword.value !== password.value){
        error.style.display = "inline"
    }else{
        error.style.display = "none"
    }
}

function register(){
    var th = document.getElementById("thanks")
    fullname = document.getElementById("fullname")
    th.innerText = 'Thank you, ' + fullname.value + " for registering in our website"
}