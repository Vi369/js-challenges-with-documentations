/**
 * Activity 4: Memoization
 * Task: 7 Write a function that memoizes the results of another function.
 * use a closure to store the results of previous computations.
 * */

function memoizesFunction(func){
    const previousComputations = new Map();
    // console.log(previousComputations);

    return function(...args){
        // console.log(args);
        const key = args.join(',')
        // console.log(key);

        if(previousComputations.has(key)){
            return previousComputations.get(key);
        }else{
            const result = func(...args);
            previousComputations.set(key, result);
            return result;
        }
    }
}

// multiply function 
function multiply(a,b){
    return a*b;
}

// usage memoizes in multiply function
const memoizeMultiply = memoizesFunction(multiply);

console.log(memoizeMultiply(2,3))
console.log(memoizeMultiply(2,3))


// Task 8 Create a memoize version of a function that calculates the factorial of a number.

function factorial(num){
    if(num < 0){
        throw new Error("Factorial not defined for negative number!")
    }
    let result = 1;
    for(let i = 1; i<=num; i++ ){
        result *= i;
    }
    return result
}

const memoizedFactorial = memoizesFunction(factorial)
console.log(memoizedFactorial(5))
console.log(memoizedFactorial(5))


