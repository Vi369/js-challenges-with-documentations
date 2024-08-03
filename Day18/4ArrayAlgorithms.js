/**
 * Activity 4: Array Algorithms 
 * Task: 8 Write a function to rotate an array by k positions. log the rotated array.
*/

function rotateArray(arr, k){
    const tempArray = []
    for(let i = k; i<arr.length; i++){
        tempArray.push(arr[i]);
    }

    for(let j = 0; j<k; j++){
        tempArray.push(arr[j])
    }

    return tempArray;
}

const arr = [1,2,3,4,5,6,7];
const arr2 = [3,4,5,6,7,1,2]
const k = 2;

console.log("Array 1: ",rotateArray(arr, k)); // 3,4,5,6,7,1,2
console.log("Array 2:",rotateArray(arr2, k)); // 5,6,7,1,2,3,4

/**  Task: 9 write a function to merge two sorted array into one sorted array.
 * log the merge sorted array.
*/

function mergeSortedArray(arr1, arr2){
    const tempArray = [...arr1, ...arr2];
    const sortedArray = tempArray.sort((a,b)=> (a-b));
    return sortedArray
}

const arr3 = [1, 3, 5, 7];
const arr4 = [2, 4, 6, 8];

console.log("Merge Sorted array of two Sorted Array:", mergeSortedArray(arr3, arr4)) // 1, 2, 3, 4, 5, 6, 7, 8