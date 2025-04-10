//? JS DOM - Document Object Model

// HTMLElement - parent class of every element


//! Query Selector
// let headingElement = document.querySelector("h1");
// let wrapperElement = document.querySelector(".wrapper");
// let paragraphElement = document.querySelector("#paragraph");
// let nameInputElement = document.querySelector("[disabled]");
// let itemElement = document.querySelector('.banner .item')

//! Query Selector All
// let wrapperElements = document.querySelectorAll(".wrapper");
// wrapperElements.forEach(wrapper => console.log(wrapper))

//? Node List
// let wrapperElements = document.querySelectorAll(".wrapper");
// const wrappersArray = [...wrapperElements];

// let paragraphElements = document.querySelectorAll('#paragraph');
// const paragraphsArray = [...paragraphElements];
// const successP = paragraphsArray.filter(p => p.textContent === 'Success')
// console.log(successP)

//! Get element by ID
// let headingElement = document.getElementById('heading')

//! Get element by class name
// let headingElement = document.getElementsByClassName('heading')


//! Element.textContent <h1>textContent</h1>
// let headingElement = document.querySelector("h1");

//! Element.innerHTML
// let paragraphElement = document.querySelector("#paragraph");
// console.log(paragraphElement.innerHTML)
// paragraphElement.textContent = 'Nesto drugo'
// paragraphElement.innerHTML = "<h1>Ovo ce biti boldirano</h1>"

//! Create element
// const footerElement = document.createElement('footer')
// console.log(footerElement)