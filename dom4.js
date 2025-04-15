//? Forms
// formElement.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log('submitted')
// })

// const formElement = document.querySelector('#login-form');
// const emailInputElement = document.querySelector('#email-input');
// const passwordInputElement = document.querySelector('#password-input');

// formElement.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let emailValue = emailInputElement.value;
//     let passwordValue = passwordInputElement.value;
//     console.log(`Email address: ${emailValue} ------- Password ${passwordValue}`)
// })

//? Remove event listener
// const clickButtonElement = document.querySelector('#click-button');

// clickButtonElement.addEventListener("click", handleClick, {
//     once: true
// })

// function handleClick() {
//     console.log('click')
// }
// clickButtonElement.removeEventListener("click", handleClick)

//? focus/blur
// const emailInputElement = document.querySelector('#email-input');
// const passwordInputElement = document.querySelector('#password-input');
// emailInputElement.addEventListener("focus", () => {
//     console.log('focused!')
// })
// emailInputElement.addEventListener("blur", () => {
//     console.log('blured!')
// })

//? DOM content loaded
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM is ready')
// })

//? Scroll
// window.addEventListener('scroll', () => {
//     console.log('page scrolled')
// })

//? Change
const selectElement = document.querySelector('#cars')
selectElement.addEventListener('change', () => {
    console.log(selectElement.value)
})

//? keydown/keyup
document.addEventListener('keydown', (e) => {
    console.log(`Keydown ${e.key}`)
})

document.addEventListener('keyup', (e) => {
    console.log(`Keyup ${e.key}`)
})