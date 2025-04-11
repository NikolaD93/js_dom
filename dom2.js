//? JS DOM - Document Object Model

//! element.classList
// let itemElement = document.querySelector('#first-item');
// itemElement.classList.add('accent');
// itemElement.classList.add('accent', "dark", "toggle");
// itemElement.classList.remove('accent');

// console.log(itemElement.classList.contains('accent'))
// itemElement.classList.replace('accent', "block")
// console.log(itemElement)

//! element attributes
// let buttonElement = document.querySelector('#login');
// buttonElement.getAttribute('id');
// buttonElement.removeAttribute('mario')
// buttonElement.setAttribute("test", "petak")
// console.log(buttonElement.hasAttribute('test'))

//! style
// let containerElement = document.querySelector("#container");
// containerElement.style.backgroundColor = "red"
// containerElement.style.height = "125px"
// containerElement.style.display = "none"

//! element.remove()
// let headingElement = document.querySelector('#heading');
// headingElement.remove()

const htmlElement = document.documentElement; // get html element
const bodyElement = document.body;
bodyElement.classList.add("dark")

//! append(end) & prepend(beginning)
// let shoppingListElement = document.querySelector('#shopping-list');
// let newItem = document.createElement('li'); // Create a new <li> element
// newItem.textContent = 'Grapes'; // Set its text
// shoppingListElement.insertAdjacentElement("afterend", newItem); // Append it


//! Create element
const paragraphElement = document.createElement('p')
paragraphElement.classList.add('text-center')
paragraphElement.textContent = "Hello world"
document.body.appendChild(paragraphElement)
console.log(paragraphElement)


