/**
 * Activity 4: Recursive Search
 * Task 7 Write a recursive function to perform a binary search on a sorted array.
 * Log the index of the target element for a few text cases.
*/

function binarySearch(arr, target){
    return binaryRecursiveSearch(arr, target, 0, arr[arr.length - 1]);
}

function binaryRecursiveSearch(arr, target, left, right){
    if(left > right){
        return -1 // targeted value not in the array
    }

    const middle = Math.floor((left + right)/2);

    if(arr[middle] === target){
        return middle;
    }else if(arr[middle] > target){
        return binaryRecursiveSearch(arr, target, left, middle -1);
    }else{
        return binaryRecursiveSearch(arr, target, middle + 1, right);
    }
}


const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// console.log(binarySearch(sortedArray, 7)); // 3
// console.log(binarySearch(sortedArray, 9)); // 4
// console.log(binarySearch(sortedArray, 122)); // -1


function countOccurence(arr, target, index = 0, count = 0){
    if(arr.length === index){
        return count; // target element not found
    }
    if(arr[index] === target){
        count++;
    }
    return countOccurence(arr, target, index + 1, count);
}

const array = [1,2,3,4,5,1,2,1,3,1,4,1];

console.log("count :",countOccurence(array, 1)); // 5