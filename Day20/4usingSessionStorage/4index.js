/**
 * Activity 4: Using SessionStorage
 * Task: 7 Create a simple form that saves user input name and email to sessinSrorage when submitted. 
 * log the retrieve value when page load.
 */ 

const form =  document.getElementById('form')

document.addEventListener('DOMContentLoaded', function(){
    const data = JSON.parse(sessionStorage.getItem('UserData'));
    document.getElementById('savedData').innerText = `Username: ${data.username} and Email : ${data.email}`;
})
form.addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    const userData = {
        username: username,
        email: email
    }

    sessionStorage.setItem('UserData', JSON.stringify(userData));
    document.getElementById('savedData').innerText = `Username: ${username} and Email : ${email}`;
    document.getElementById('form').reset();
})

// Task 4 : sessionStorage data display before and after remove
document.getElementById('removeBtn').addEventListener('click', function(){
    sessionStorage.removeItem('UserData');

    const afterRemove = JSON.parse(sessionStorage.getItem('UserData'));
    if(afterRemove){
        document.getElementById('afterRemove').innerText = `Name: ${afterRemove.username} and Email : ${afterRemove.email}`
    }else{
        document.getElementById('afterRemove').innerText = `NO Data Found!`
    }
})