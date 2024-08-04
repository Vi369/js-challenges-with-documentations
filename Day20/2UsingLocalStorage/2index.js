/**
 * Activity 2: Using LocalStorage
 * Task: 3 Create a simple form that saves user input eg name email to localSrorage when submitted .
 * Retrieve and siplay the saved data on page load.
*/

const form = document.getElementById('userForm');

// saved data display on page loaded
document.addEventListener('DOMContentLoaded', function(){
    // retreive data 
    // console.log(localStorage.getItem('UserData'));
    const localData = JSON.parse(localStorage.getItem('UserData'));
    // console.log(localData);
    document.getElementById('savedData').innerText = `Name: ${localData.name} and Email : ${localData.email}`
    document.getElementById('beforeRemove').innerText = `Name: ${localData.name} and Email : ${localData.email}`
})

form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const userData = {
        name: name,
        email: email
    }

    localStorage.setItem('UserData', JSON.stringify(userData));

    // display the data
    document.getElementById('savedData').innerText = `Name: ${name} and Email : ${email}`;

    document.getElementById('userForm').reset();
})


// Task 4 : localStorage data display before and after remove
document.getElementById('removeBtn').addEventListener('click', function(){
    localStorage.removeItem('UserData');

    const afterRemove = JSON.parse(localStorage.getItem('UserData'));
    if(afterRemove){
        document.getElementById('afterRemove').innerText = `Name: ${afterRemove.name} and Email : ${afterRemove.email}`
    }else{
        document.getElementById('afterRemove').innerText = `NO Data Found!`
    }
})


