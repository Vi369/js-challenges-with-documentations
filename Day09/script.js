/**
 * Activity 1: Selecting and Manipulation Elements
 * Task: 1 select an HTML element by its id and change its text content.
 * Task: 2 select by its class and change background color.
 */

const changeText = document.getElementById('changeText')
changeText.textContent = 'Chai Aur Code';

const changeBgColor = document.getElementsByClassName('ChangeBgColor');

for(let i = 0 ; i< changeBgColor.length; i++){
    changeBgColor[i].style.backgroundColor = 'red'
}


/**
 * Activity 2: Creating and Appending Elements
 * Task: 3 create div element with some text content and appent it to body.
 * Task: 4 create li element and add it to an existing UL list.
 */

const bodyContainer = document.getElementById('bodyContainer')

const div = document.createElement('div');
div.innerHTML = `<h1>Dynamically Added Elemnet: Activity 2 task 1</h1>`;

bodyContainer.appendChild(div);

const unOrderlist = document.getElementById('unOrderlist');

const li = document.createElement('li');
li.textContent = `Pani`;

unOrderlist.appendChild(li)


/**
 * Activity 3: Removing Elements
 * Task: 5 select an html element and remove it from the dom.
 * Task: 6 remove specific child.
 */

const removePara = document.getElementById('removePara');
const para = document.getElementById('para');
removePara.removeChild(para);

const parent = document.getElementById('parent');

// console.log(parent.children[3])
const removeLastChild = parent.children[3];

parent.removeChild(removeLastChild);

/**
 * Activity 4: Modifying Attributes and Classes
 * Task: 7  selcet an HTML and change one of its attributes.
 * Task: 8  add and remove a css class to/from an HTML.
 */

document.getElementById('hello').style = 'none'
document.getElementById('hello').id = 'chai'

// TODO: using class selector and setAttributes
const helloClass = document.querySelector('.hello')

helloClass.className = 'bello'

document.getElementById('select').setAttribute('class', 'bold')

// add and remove a css class
const toggleButton = document.getElementById('toggleButton');
const text = document.getElementById('text');

toggleButton.addEventListener('click', function(){
    text.classList.toggle('decorate');
})

/**
 * Activity 5: Event Handling
 * Task: 9 add click event listener to a button that changes the text contect of a paragraph
 * Task: 10 add a mouseover event linster to an element that chanegs its color.
 */

const button = document.querySelector('#changeButton')
const changePara = document.querySelector('#changeAblePara')


button.addEventListener('click', function(){
    changePara.textContent = 'Hey Baby!'
});


button.addEventListener('mouseover', function(){
    button.style.borderColor = 'red'
})