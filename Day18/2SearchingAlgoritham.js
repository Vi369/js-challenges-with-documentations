/**
 * Activity 2: Searching Algorithms
 * Task: 4 Implement the linear search algorithm to find a target value in an array . log the index of th target value. 
 * Log the result for a few test cases.
*/

function linerSearch(arr, target){
    if(arr.length === 0){
        return "Provided Array is Empty!"
    }
    if(!target){
        return "target value is missing!. Please provide target value"
    }

    for(let i = 0; i< arr.length ; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return "Target value not Available in Array."

}

const arr = [1,2,3,1,5,2,7,9]
const result = linerSearch(arr, 7);
console.log(`Index of target value:${result}`);

console.log(linerSearch(arr, 10)) // target value not available
console.log(linerSearch([], 10)) // Provided Array is Empty!
console.log(linerSearch([1,2])) //Provided Array is Empty!


/** Task 5 Implement the binary search algorithm to find a target value in a sorted array.
 * log the index of the target value. 
 */

function binarySearch(arr, target, left = 0, right = arr.length -1){

    if(left > right){
        return -1
    }

    let middle = Math.floor((left + right) /2);

    if(arr[middle] === target){
        return middle
    }else if (arr[middle] > target){
        return binarySearch(arr, target, left, middle -1);
    }else{
        return binarySearch(arr, target, middle + 1, right);
    }
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(sortedArray, 5)) // 4