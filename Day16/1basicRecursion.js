/**
 * Activity 1: Basic Recursion
 * Task: 1 Write a recursive function to calculate the factorial of a number. log the result for a few test cases
*/
function factorial(num){
    if(num === 1 || num === 0){
        return 1;
    }

    return num * factorial(num - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1


/**
 * Task 2 Write a recursive function to calculate the nth Fibonacci number.
 * Log the result for a few test cases.
 */ 

function fibonacci(num){
    if( num === 1 || num === 2){
        return 1;
    }
    if(num === 0){
        return 0;
    }
    if(num < 0){
        throw new Error("Fibonacci is not defined for negative numbers!")
    }
    return fibonacci(num - 2) + fibonacci( num -1); 
}

console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(0)); // 0
try {
    console.log(fibonacci(-1));
} catch (error) {
    console.log(error.message)
} // throw error


