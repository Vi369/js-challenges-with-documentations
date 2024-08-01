/**
 * Activity 1: Sorting Algorithms
 * Task: 1 Implement the bubble sort algorithm to sort an arr of numbers in ascending order.
 * Log the sored array.
*/

function bubbleSort(arr){
    let isSwap;
    do {
        isSwap = false;
        for(let i = 0; i< arr.length - 1; i++){
            if(arr[i] && arr[i+1] && arr[i] > arr[i+1]){
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                isSwap = true
            }
        }    
    } while (isSwap);

    // return array 
    return arr
}

const unsortedArray = [10, 4, 2, 8, 6, 1, 5, 3, 9, 7];
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const emptyArray = [];
const arrayWithNegatives = [-10, 4, -2, 8, -6, 1, -5, 3, 9, -7];
const arrayWithDuplicates = [3, 5, 2, 3, 8, 5, 2, 9, 1, 4];


console.log("Perfoming bubble sort in UnsortedArrary", bubbleSort(unsortedArray))
console.log("Perfoming bubble sort in sortedArrary", bubbleSort(sortedArray))
console.log("Perfoming bubble sort in emptyArray", bubbleSort(emptyArray))
console.log("Perfoming bubble sort in arrayWithNegatives", bubbleSort(arrayWithNegatives))
console.log("Perfoming bubble sort in arrayWithDuplicates", bubbleSort(arrayWithDuplicates))


/** Task 2 Implement the selection sort algorithm to sort an array of numbers in ascending order.
 * log the sorted array.
*/ 

function selectionSort(arr){
    for(let i = 0 ; i < arr.length - 1; i++){
        let mindex = i

        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[mindex]){
                mindex = j
            }
        }

        if(mindex !== i){
            [arr[i], arr[mindex]] = [arr[mindex], arr[i]];
        }
    }

    return arr;
}

console.log("Selection Sort:",selectionSort(unsortedArray))


// Task 3 : Implement the quickSort algorithm to sort an array of numbers in ascending order. log the sorted array.

function partition(arr, low, high){
    let pivot = arr[high];
    let i = low - 1;

    for(let j = low; j < high; j++){
        if(arr[j] < pivot){ // arr[high]
            i++;
            // swap 
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    i++;
    // final swap pivot value and ith value
    [arr[i], arr[high]] = [arr[high], arr[i]];

    return i;
}

// quick sort 
function quickSort(arr, low = 0, high = arr.length - 1){
    if(low < high){
        const pivotIndex = partition(arr, low, high);

        quickSort(arr, low, pivotIndex - 1);
        quickSort (arr, pivotIndex + 1, high);

    }

    return arr;
}

console.log("Quick Sort:", quickSort(unsortedArray));