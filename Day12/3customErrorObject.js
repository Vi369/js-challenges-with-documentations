/**
 * Activity 2: Custom Error Objects
 * Task: 4 create a custom error class that extends the built in Error class Throw an instance of this custom error in a function and handle it using a try-catch block.
 * Task: 5 write a function that validates user input (check if a string is not empty) and throws a custom error if the validation fails Handle the custom error using try catch block.
 */


class customError extends Error{
    constructor(message){
        super(message)
        this.name = 'customError'
    }
}

function throwCustomError(){
    throw new customError('this is a custom Error');
}

try {
    // throwCustomError(); // throwing an custom error
} catch (error) {
    console.log(error)
}

/**
 * task 2
 * input error 
*/ 
class EmptyInputError extends Error {
    constructor(message){
        super(message);
        this.name = 'EmptyInputError';
    }
}

// user input check 
function inputValidator(input){
    if(!input && input.trim() === ''){
        throw new EmptyInputError("Input is Empty please check and Provide Valid Data.")
    }else{
        return true
    }
}

try {
    let input = ''; // empty input
    // input = 50 valid input
    const result = inputValidator(input);
    if(result){
        console.log("Valid Input:", input)
    }
} catch (error) {
    console.log(error)
}

