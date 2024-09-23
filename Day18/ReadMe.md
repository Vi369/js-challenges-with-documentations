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

##### Task 4: Linear Search Algorithm
###### Approach:
* Loop through the array and compare each element to the target value.
* If a match is found, return the index.
* If the array is empty or no match is found, return a suitable message.
###### Thought Process:
* Linear Search is straightforward as it checks each element one by one. It’s useful for unsorted arrays but can be slow for large datasets.

##### Task 5: Binary Search Algorithm
###### Approach:

* Use a divide-and-conquer approach. Find the middle element and compare it to the target.

* If it matches, return the index. If it's smaller, search the right half; if larger, search the left half.

* Repeat until the target is found or the search space is empty.

###### Thought Process:

* Binary Search reduces the problem size by half in every step, making it much faster than Linear Search for sorted arrays.
#### Activity: 3 String Algorithm

##### Task 6: Counting Character Occurrences
###### Approach:

* Loop through the string and use a Map to track each character’s frequency.
For each character, increment its count or initialize it to 1 if it’s the first occurrence.

###### Thought Process:

* Using a map is an efficient way to store character counts, as it provides fast lookups and updates. This task helps in understanding how to efficiently manage character frequencies.

##### Task 7: Longest Substring Without Repeating Characters
###### Approach:

* Use a sliding window technique with two pointers (`left` and `right`) and a set to track unique characters.

* Move the right pointer through the string, and if a duplicate is found, move the left pointer to shrink the window.

* Keep track of the longest substring found.

###### Thought Process:

* The sliding window technique allows us to find the solution in linear time, ensuring that we only scan the string once. This is optimal for solving problems involving substrings or subsequences.

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

* Sorting Skills Improved: Learned and implemented Bubble Sort, Selection Sort, and Quick Sort. Optimized Bubble Sort using a loop check to stop early if the array is already sorted.

* Search Algorithms Mastered: Implemented Linear Search and Binary Search. Understood how Binary Search is faster for sorted arrays by cutting the search space in half.

* String Handling: Counted character occurrences using a Map and found the longest substring without repeating characters with an efficient sliding window method.

* Used Advanced Data Structures: Applied a Map and Set to make the solutions more efficient and faster.

* Array Manipulation: Rotated arrays by a given number of positions and merged sorted arrays using practical techniques.

* Dynamic Programming Basics: Solved the Fibonacci sequence problem using memoization to avoid repeating calculations and save time.

* Recursive Thinking: Built recursive solutions for Quick Sort and the Fibonacci sequence, breaking bigger problems into smaller, manageable ones.

Achieved stronger problem-solving skills with each task, making the code more efficient and easy to understand.