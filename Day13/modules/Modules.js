/**
 * Activity 1: Creating and Exporting Modules
 * Task: 1 Create a module that exports a function to add two numbers. import and use this module in another script.
 * Task: 2 crate a module that exports an object representing a person with properties and method . import and use this module.
 */

export function addTwoNumbers(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        return 0 //invalid Input Please provide valid 
    }
    return num1 + num2;
}

// person object
export const person = {
    username : 'vikas',
    IsLogedIn : true,
    age : 22,
    country: 'India',
    getDetails() {
        return `${this.username} and age ${this.age}`;
    },
    getStatus() {
        return this.IsLogedIn? "Online" : "Offline";
    }
}

/**
 * Activity 2: Named and Default Exports
 * Task: 3 create a method that exports multiple functions using named exports. import and use these function in another script.
 * Task: 4 create a module that export a single function using default export. import and use this function in another script.
 */

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error('Cannot divide by zero. Please provide a non-zero divisor.');
    }
    return num1 / num2;
}

// default export function 
export default function greeting(name){
    return `Hello, ${name} Nice to meet you!
    Have a nice Day.`
}

/**
 * Activity 3: Importing Entire modules
 * Task: 5 module that exports multiple constants and functions . import the extire module as an object in another script and use its properties.
 */

// Define some Constants 
const PI = 3.141;
const E = 2.71828;

// Export all constants and functions as an object
export const myMath = {
    PI,
    E,
    divide,
    multiply,
    addTwoNumbers,
    subtract
}


// exporting function 
export{
    subtract,
    multiply,
    divide
}