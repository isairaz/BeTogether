const ValidCreateAccount = () => {

    let firstNameInput = document.querySelector('#login')
    let lastNameInput = document.querySelector('#text')
    let emailInput = document.querySelector('#email')
    let passwordInput = document.querySelector('.password-confirm')
    let passwordConfirmInput = document.querySelector('.confirm-password-input')
    let createAccountBtn = document.querySelector('#logIn')
    // console.log(firstNameInput.value.length)

    if (firstNameInput.value.length , lastNameInput.value.length ,
        emailInput.value.length , passwordInput.value.length ,passwordConfirmInput.value.lentght >= 1 && emailInput.style.backgroundColor,passwordInput.style.backgroundColor, passwordConfirmInput.style.backgroundColor == "white") {
            createAccountBtn.classList.remove("isDisabled");
        }
}

export default ValidCreateAccount