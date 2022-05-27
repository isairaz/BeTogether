const ValidPassword = (event) => {

    let password = document.querySelector('.password-input').value
    let passwordChangeColor = document.querySelector('.password-input')
    let passwordConfirm = document.querySelector('.confirm-password-input').value
    let passwordConfirmChangeColor = document.querySelector('.confirm-password-input')
    // console.log(password)
    // console.log(passwordConfirm)
    

    if (password == passwordConfirm) {
        
        passwordChangeColor.style.backgroundColor = "white"
        passwordConfirmChangeColor.style.backgroundColor = "white"
    }
    else {
        passwordChangeColor.style.backgroundColor = "#EA2027"
        passwordConfirmChangeColor.style.backgroundColor = "#EA2027"
    }
}





export default ValidPassword