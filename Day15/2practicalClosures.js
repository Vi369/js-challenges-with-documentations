/**
 * Activity 2: Practical Closures
 * Task: 3 write a function that generates unique Ids.
 * use a closure to keep track of the last generated Id and increment it wich each call.
 */

function generateUniqueId(){
    let lastGeneratedId = 1100;
    function returnUniqueId(){
        lastGeneratedId++;
        return lastGeneratedId;
    }
    return returnUniqueId;
}

const generateId = generateUniqueId();

console.log(generateId())
console.log(generateId())
console.log(generateId())
console.log(generateId())



// Task : 4 Crate a closure that captures a user's name and returns a function that greets the user by name.
function namePlease(name){
    return function greet(){
        return `Welcome back, ${name}`;
    }
}

const greet = namePlease('vikas');
console.log(greet());