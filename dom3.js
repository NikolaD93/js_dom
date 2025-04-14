//? Add Event Listener

// const clickButtonElement = document.querySelector('#click-button');
// clickButtonElement.addEventListener("click", () => {
//     clickButtonElement.setAttribute("disabled", "disabled")
//     clickButtonElement.innerText = "Loading..."
// })

//! event
// clickButtonElement.addEventListener("click", event => {
//     console.log(event.currentTarget.textContent)
// })
// clickButtonElement.addEventListener("click", event => {
//     console.log(event.currentTarget.textContent)
// })
// const buttons = document.querySelectorAll('button');
// buttons.forEach(btn => {
//     btn.addEventListener('click', handleClick);
// })

// function handleClick(event) {
//     console.log(event.currentTarget.textContent)
// }

//! currentTarget vs target
// const button = document.querySelector('button');
// button.addEventListener('click', event => {
//     console.log(event.currentTarget)
//     console.log(event.target)
// })

//? Exercise toggle dark/light mode
// const bodyElement = document.body;
// const toggleBtnElement = document.querySelector('#toggle-btn');
// toggleBtnElement.addEventListener('click', () => {
//     // if (bodyElement.classList.contains('dark')) {
//     //     bodyElement.classList.remove('dark')
//     //     toggleBtnElement.textContent = "Dark"
//     // } else {
//     //     bodyElement.classList.add('dark')
//     //     toggleBtnElement.textContent = "Ligth"
//     // }
//     bodyElement.classList.toggle('dark')
// })

//? Exercise burger menu
const menuBtnElement = document.querySelector('#btn-menu');
const sidebarElement = document.querySelector('#sidebar');
const closeBtnElement = document.querySelector('#btn-close');

menuBtnElement.addEventListener('click', () => {
    sidebarElement.classList.add('sidebar-show')
})

closeBtnElement.addEventListener('click', () => {
    sidebarElement.classList.remove('sidebar-show')
})