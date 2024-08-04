/**
 * Activity 1: Understanding LocalStorage
 * Task: 1 Write script to save a string value to LocalStorage and retrieve it. log the retrieved value.
*/
const btn = document.getElementById('submit')
btn.addEventListener('click', function(){

const username = document.getElementById('username').value;
// save a strin value to localStorage
localStorage.setItem("username", username);
// retrive value to localStorage
const retriveData = localStorage.getItem("username");
alert(`username: ${retriveData}`);
})


/**
 * Task: 2 Write a script to save an object to localStrorage by converting it to a json string 
 * Retrieve adn parse the object , then log it.
 */

document.getElementById('task2').addEventListener('click', function saveAndRetrieveObject(){
    //assuming constant user object data

    const email = document.getElementById('email').value;

    const userData = {
        email: email
    }

    localStorage.setItem('user', JSON.stringify(userData));

    const retrieveData = localStorage.getItem('user')
    
    alert(`user email: ${JSON.parse(retrieveData).email}`);
    // consoling the retrieve data
    console.log(JSON.parse(retrieveData))
    console.log(retrieveData)
})