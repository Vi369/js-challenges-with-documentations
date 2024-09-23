## Day 18: Algorithms

### Approach and Thought Process

#### Activity 1 : Sorting Alogirithm

##### Task 1: Bubble sort Implementation
Bubble sort means bubble out the highet element of array in the right of the array.
###### Approach and Thought Process :
* Approach is, defined a function `bubbleSort` that takes a array and retrun a sorted array.

* Lest supose if array is already sorted so why we do all the thing so i just used a loop that atleast one time run so i used `do... while` to check if array is sorted or not i introduced a variable `isSwap` that initial value every time in loop is false if swaping perform so i changed the variable value `true` based on this variable i run my `do...while` loop.

* I used in `for loop` in do while body that perform operation and in for loop i just check if `arr[i]` and `arr[i+1]` value is available so i juct compare the `arr[i]` value is greater or not to`arr[i+1]` if greater then using temporary variable and swap the value.And change the isSwap variable value to  `true` so we can perform the next iteration.


##### Task 2: Sort Array using Selection Sort
In Selection sort we select element index not index element value.And compare and sort it.
###### Approach and Thought Process :
* Approach is, created a function `selectionSort` that takes array and return sorted array.

* start with a `for-loop` that goes to the length-1 of the array and lets suppose our first element is the minimum value and introduced one more array that start `i+1` and goes length of the array and compare if `arr[j] < arr[mindex]` so i just update our mindex value to `j` value.

* And check if our mindex is `!==i` ith value its means its a new value so i just swap the mindex value to array ith value and array ith value to array mindex value.

##### Task 3: Sort Array using Quick sort algo

In Quick sort Algorithm we focused on the first find the `pivotIndex` and based on the pivotIndex we partition array left and right left side hold all the lower value of the pivotIndex value and right side hold the upper value of the pivotIndex value.
###### Approach and Thought Process :
Approach is , first defined a helper function named `partition` that help to find the pivotIndex.

* `partition` function takes three parameter `arr`, `low` and `high` low value is array first element index and high is array last element index.

* let's decalare two variable first is `pivot`, we can choose pivot value any element, i choosed the pivot value to array last element that is `arr[high]`
and the second variable is `i` that represent currently array first element `low -1` means negative index;

* start a loop in `j` that start with `low` value, and compare the array jth value is less then or not to the pivot value if `arr[j]` value is less then so first i increse `i++` ith value and swap the `arr[j]` to `arr[i]` value and `arr[i]` value to `arr[j]` value.At the end low value is equal to the high so i just increse the `i++` value and final swaping perform to the pivot value and the ith value `[arr[i], arr[high]] = [arr[high], arr[i]]` and return the `i` value that i pivotInedex.

* finally Defined the `quickSort` function that take array low and the high low value i by default provide `0` and the high value i provide `array.length -1`.

* firsty i check that i base case if `low < high` then only i perform the action called the helper function `partition` that return me `pivotIndex` based on the `pivotIndex` i called the quick sort function in recursive way for the the lower half and pass the high value `pivotIndex -1` and upper half the low value means staring value is `pivotIndex`.


#### Activity 2 : Named and default exports

##### Task: 3 exports multiple functions using named exports

###### Approach : 
* Approach is, Created multiple functions and used the `export` keyword to export them, then imported and used these functions in another script.

###### Thought Process: 

* I created several functions like subtract, multiply, and divide.
* I exported these functions using : 
```
export {
    subtract,
    multiply,
    divide
}
```

* In `main.js`, I imported these functions with: 
```
 import {
    subtract,
    multiply,
    divide
} from "./modules/Modules.js";

 ```

##### Task: 4 exporting single function using default export
###### Approach :
* Approach is very simple creating a function and export it default and use it in another script and use it the function.

###### Thought Process:
* I created a function named `greeting` that greets the user and exported it as default using `export default`.

* Then, I imported this function in my `main.js` file. By using the default export, we can call this function any name we want. I called it `greeting` and used it.


#### Activity 3: Importing Entire Modules

##### Task 5: Export Multiple Constants and Functions

###### Approach:
* Created multiple functions and constants as an object and imported it into another script to use them.

###### Thought Process:
* First, I created an object `myMath` and added constants and functions as the object's properties and methods.
* Then, I exported this object.
* In `main.js`, I imported it as an object named `myMath` and used its properties and methods using dot notation.

#### Activity 4: Using third-party modules

##### Task 8: Rotate an Array by K Positions

###### Approach:
* The function `rotateArray` rotates the given array by `k` positions. First, it stores the elements from index `k` to the end of the array in a temporary array. Then, it appends the elements from the start of the array up to `k` to the temporary array.

###### Thought Process:
* Rotation of an array by `k` positions can be visualized as cutting the array into two parts—one from the start up to the `k-th` element, and the other from the `k-th` element to the end. Concatenating these parts in reverse order gives the rotated array.

* This method works efficiently by avoiding unnecessary operations, focusing only on repositioning elements.

##### Task 9: Merge Two Sorted Arrays

##### Approach:

* The `mergeSortedArray` function merges two sorted arrays by concatenating them and then sorting the merged array. The `sort` method uses a comparison function to ensure numerical sorting.

###### Thought Process:

* Merging two sorted arrays can be done efficiently by leveraging the already sorted nature of the input arrays. The concatenation ensures all elements are available, and sorting ensures that the merged array remains in non-decreasing order.

#### Activity 5: Dynamic Programming
##### Task 10: Fibonacci Sequence Using Dynamic Programming
###### Approach:
* The function `fibMemo` is an implementation of the Fibonacci sequence using memoization, which is a key concept in dynamic programming.

* A `memo` object is passed to store already computed Fibonacci values. The function checks if the Fibonacci number for a particular input (`num`) has already been calculated and stored in the `memo`. If so, it returns the value from `memo` to avoid redundant calculations. Otherwise, it computes the Fibonacci number by recursively calling `fibMemo` on the previous two numbers and stores the result in `memo`.

#### Achievements:

* Got better at rotating and merging arrays, helping me handle data more efficiently.

* Learned how to solve the Fibonacci sequence using dynamic programming to make the solution faster.

* Improved my understanding of sorting algorithms and how they work.

* Practiced organizing code with modules, making it easier to reuse and manage.