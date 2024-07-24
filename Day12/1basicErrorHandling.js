/**
 * Activity 1: Basic Error Handling with try-catch
 * Task: 1 write a function that intentionally throws an error and use a try catch block to handle the error.
 * Task: 2 create a function that divides two numbers and throw an error if the denominator is zero. try-catch block to handle this error.
 */

function ThrowError(){
    throw new Error("This is an Intentional Custom Error.")
}

try {
    ThrowError();
} catch (error) {
    console.log(error)
}

// function divide two number
function divideNumber(numerator, denominator){
    if(denominator === 0){
        throw new Error("Division by zero")
    }
    return numerator / denominator
};

try {
    const result = divideNumber(12,0);
    console.log(result);
} catch (error) {
    console.log(error)
}