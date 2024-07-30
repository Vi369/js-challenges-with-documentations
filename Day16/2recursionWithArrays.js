/**
 * Activity 1: Recursion With Arrays
 * Task 3 Write a recursive function to find the sum of all elements in an array.
 * log the result for a few test cases
*/

function sum(arr){
    if(arr.length === 0){
        return 0; // array is Empty
    }
    if(arr.length === 1){
        return arr[0];
    }

    return arr[0] + sum(arr.slice(1));
}

// console.log(sum([1,2,3]));
// console.log(sum([]));

// Task 4 Write a recursive function to find the maximum element in an array. log the result for a few test cases.

function maximum(arr){
    if(arr.length === 0){
        return 0; // array is Empty
    }
    if(arr.length === 1){
        return arr[0];
    }

    return Math.max(arr[0],maximum(arr.slice(1)));
}

console.log(maximum([1,2,3,4,5]))
console.log(maximum([]))