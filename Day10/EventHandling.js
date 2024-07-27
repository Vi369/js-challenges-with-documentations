/**
 * Activity 1: Basic Event Handling
 * Task: 1 add a click event listener to a buttoon that changes the text content paragraph.
 * Task: 2 add a double click event listener to an image that toggles its visibility.
 */

const text = document.querySelector('#changeText')
const button = document.querySelector('#changeTextBtn')
button.addEventListener('click', function(){
    text.textContent = 'Hey Baby!'
});


const img = document.querySelector('#img')

img.addEventListener('dblclick', function(){
    img.classList.toggle('visibility')
})

/**
 * Activity 2: Mouse Events
 * Task: 3 add mouseover event to change element background.
 * Task: 4 add mouseout event to reset background.
 */

const changeBg = document.querySelector('#changeBg')

changeBg.addEventListener('mouseover', function(){
    changeBg.classList = 'green';
})

changeBg.addEventListener('mouseout', function(){
    changeBg.classList.remove('green');
})

/**
 * Activity 3: keyboard Events
 * Task: 5  add key down event listner to an input field that logs the key pressed to the console.
 * Task: 6 add a keyup event listener to an input field that displays current value in a paragraph.
 */

const inputFeild = document.querySelector('#inputFeild');

inputFeild.addEventListener('keydown', function(e){
    console.log(e.key);
    console.log(e);
})

const paragraph = document.querySelector('#paragraph')

inputFeild.addEventListener('keyup', function(e){
    console.log("key up Event:",e);
    paragraph.textContent = e.key;
})

/**
 * Activity 4: form Events
 * Task: 7 add a submit event listener to a form that prevents the default submission and logs the form data to the console.
 */

const form = document.querySelector('#section4 form');

// console.log(form);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = new FormData(form);
    console.log('FormData Entries:');
    for (const [key, value] of data.entries()) {
        console.log(`Key: ${key}, Value: ${value}`);
    }

    data.forEach((value, key) => {
        console.log(`key: ${key} value${value}`);
    });

});

// Task: 8 add a change event listemer to a select dropdown that displays the selceted value in a paragraph;
const genderShowPara = document.querySelector('#section4 form p')
// console.log(genderShowPara);
const gender = document.getElementById('gender');
gender.addEventListener('change', function(e){
    genderShowPara.textContent = e.target.value;
})

/**
 * Activity 4: Event Delegation
 * Task: 9 add a click event listener to a list that logs the text content of hte clicked list item using event delegation.
 */

const ul = document.querySelector('#section5 ul')

ul.addEventListener('click', function (e){
    if(e.target.tagName === 'LI'){
        console.log("clicked" , e.target.textContent)
    }
})


// Task: 10 add an event listener to a parent element that listens for events from dynamically added child elements

const parentcontainer = document.getElementById("parentContainer");
const addItem = document.getElementById("addItem");

let count = 0;

addItem.addEventListener('click', function(){
    count++;
    const li = document.createElement('li');
    li.textContent = `item${count}`;
    parentcontainer.appendChild(li);
})

parentcontainer.addEventListener('click', function(e){
    if(e.target && e.target.tagName === 'LI'){
        console.log(e.target.textContent);
        alert(`you clicked ${e.target.textContent}`);
    }
})