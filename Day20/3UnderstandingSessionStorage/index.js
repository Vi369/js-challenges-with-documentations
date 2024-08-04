/**
 * Activity 3: Understanding SessionStorage
 * Task: 5 Write a script to save a string value to sessionSrorage and retrieve it 
 * log the retrieve value.
 */ 

const btn = document.getElementById('submit')
btn.addEventListener('click', function(){

const age = document.getElementById('age').value;
// save a strin value to localStorage
sessionStorage.setItem("age", age);
// retrive value to localStorage
const retriveData = sessionStorage.getItem("age");
alert(`age: ${retriveData}`);
})


// Task 6 save an object to sessionStorage by converting it to json string. Retrieve parse the object then log it
document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;

    const userData = {
        email: email,
        username: username
    }

    sessionStorage.setItem('user', JSON.stringify(userData));

    const retrieveData = JSON.parse(sessionStorage.getItem('user'))
    
    document.getElementById('savedData').innerText = `Username: ${retrieveData.username} and Email: ${retrieveData.email}`
    // consoling the retrieve data
    console.log(JSON.parse(retrieveData))
    console.log(retrieveData)
})