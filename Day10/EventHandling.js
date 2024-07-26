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
 * Activity 3: form Events
 * Task: 7 add a submit event listener to a form that prevents the default submission and logs the form data to the console.
 */

const form = document.querySelector('#section4 form');

console.log(form);

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
