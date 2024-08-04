/**
 * Activity 5: Comparing LocalStorage and SessionStorage
 * Task: 9 Write a function thar accepts a key and a value and saves the value to both localSrorage and sessionSrorage .
 * retrieve and log the values from both storage mechanisms.
 */

const showlocalData = document.getElementById('localData');
const showsessionData = document.getElementById('sessionData');
const username = document.getElementById('username')
const form = document.getElementById('form');

document.addEventListener('DOMContentLoaded', function(){
    const localData = localStorage.getItem(username.tagName);
    const sessionData = sessionStorage.getItem(username.tagName);
    showlocalData.innerText = `local Srorage: ${localData}`
    showsessionData.innerText = `session Srorage: ${sessionData}`
})

form.addEventListener('submit', function(e){
    e.preventDefault()
    storeData(username.tagName, username.value);
    retrieveData(username.tagName);

    form.reset();
} )
function storeData (key, value){
    
    // store data in local storage
    localStorage.setItem(key, value);

    // store data in session storage
    sessionStorage.setItem(key, value);
}

function retrieveData(key){
    // retrieve data from local storage
    const localData = localStorage.getItem(key);
    showlocalData.innerText = `local Srorage: ${localData}`
    console.log("local Srorage:",localData);

    // retrieve data from session storage
    const sessionData = sessionStorage.getItem(key);
    showsessionData.innerText = `session Srorage: ${sessionData}`
    console.log("session Srorage:",sessionData);
}

// storeData('username', 'vikas');
// retrieveData('username');

// Task 10 Clear localStorage data and sessionStorage data 

document.getElementById('clearBtn').addEventListener('click', clearData);
function clearData(){
    // local storage data clear
    localStorage.clear()

    // session storage data clear
    sessionStorage.clear()

    // make sure the data clearation
    const localData = localStorage.getItem(username.tagName);
    const sessionData = sessionStorage.getItem(username.tagName);

    if(localData || sessionData){
    showlocalData.innerText = `local Srorage: ${localData}`
    showsessionData.innerText = `session Srorage: ${sessionData}`
    }else{
    showlocalData.innerText = `Data Cleared . No Data Found!`
    showsessionData.innerText = `Data Cleared . No Data Found!`
    }
}
