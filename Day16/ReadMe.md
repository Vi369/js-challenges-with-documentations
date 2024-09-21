## Day 16: Recursion

### Approach and Thought Process

On Day 16, the focus was on understanding and practicing recursion, working with arrays and strings using recursion, performing recursive search, and tree traversal.

#### Activity 1: Basic Recursion

##### Task 1: Calculate Factorial of a Number

###### Approach:
* Approach is, created a `factorail` function that takes a numbers as input. 

* Used base case to return `1` when the input is `0` or `1` 

* Implemented the recursive call to calculate the factorial by multiplying the number with the factorial of `num-1`.


###### Thought Process:
* I created a function `factorial` and define the the base case, prevent infinite recursion and set the  stopping point.

* The recursive step reduces the problem size in each call , eventually reaching the base case.

##### Task 2: Calculate the nth Fibonacci Number


###### Approach:
* Approach is , Created a `fibonacci` function that takes a number as input.

* Defined base cases for `0`, `1`, and `2` to return `0` and `1` respectively.

* Implemented the recursive call to calculate the Fibonacci number by summing the Fibonacci numbers of num - 1 and num - 2.

###### Thought Process:
* Set up the base cases to handle the simplest scenarios and ensure the function returns a result without further recursion.

* Designed the recursive logic to break down the problem, summing the results of smaller subproblems.

* Included error handling for negative input to handle invalid cases appropriately.


#### Activity 3: Recursion with Arrays

##### Task 3: sum of all elements in Array using recursion

###### Approach and Thought Process:
* Approach: Created a `sum` function that takes an array of numbers as input.

* Base Case: Defined a base case to return the first element if the array length is `1`, which stops further recursion.

* Also added base case if array is `length === 0` so function return `0` it meant given array is empty.

Recursive Step: In each recursive call, sliced the array to exclude the first element, and added its value to the result of the recursive call. This ensures that when the base case is reached, the function adds up all the elements of the array.

##### Task 4: Maximum element in an Array:

###### Approach and Thought Process:
*Approach and thought process is exact the same as above Task , only one think i do in this task this time i just check the numbers using `math.max()` and every recursive function return the max number of two elements so finaaly at the end we get our maximum element in an array.

#### Activity: String Manipulation with Recursion

##### Task : 5 reverse string using recursion 

###### Approach and Thought Process:
* Approach is , defined a function `reverseString` that take string as a argument.

* Base Case: Defined a base case to return the first element if the string length is `1`, which stops further recursion.And also added base case if provide string is Empty so directly return '' Empty string.

Recursive step: In each recursive call, sliced the string to exclude the first element, and added its value to the result of the recursive call. This ensures that when the base case is reached, the function adds up all the string element to decending order because i first added the recursive function result then added the string first element.


##### Task 6 recursive function for check given string is palindrome or not
###### Approach and Thought Process:
* Approach: Defined a function palindrome that takes a string as an argument and checks if it's a palindrome using recursion.

* Base Case: Defined a base case to return true if the string length is 1 or less, which stops further recursion. This is because a single character or an empty string is considered a palindrome.

* Recursive Step: In each recursive call, checked if the first and last characters of the string are the same. If they are, recursively called the function with the substring excluding the first and last characters. If they are not the same, returned false.

#### Activity 4 Recursive Search

##### Task 7: Binary search perform on sorted array

###### Approach and Thought Process:
* First Lets assume one example of sorted array based on the example lets define a function and their base case. I Defined a function `binarySearch` that takes Array `arr` and `target` value. And retrun a function `binaryRecursiveSearch`.

* `binaryRecursiveSearch` function takes `arr` , `target` , `left`, and `right`. I call this function in `binarySearch` function and pass the value array , target value and assume left value is array starting element in `0` index and the right value is `arr[arr.length - ]` array last element.This function find the target index value and return it.

* I defined `binaryRecursiveSearch` function, Base case: if left > right so i return `-1` its means array is out of bound target value is not exist in array.

* Second case is, lets find middle index value of the array so based on the middle value we search our target value is upper half of the portion lower half the portion.

* Checking if `arr[middle] === target` so i just return middle index else if I checked the if `arr[middle] > target` it means our targeted value in lower half so i just reduce the right value and call the function again else means our target value is Array upper half so i juct increse the left value and call the function. If target value find so its return the index value other wise return `-1`.


##### Task 8 Occurence count

###### Approach:

Recursive Structure:

* I designed the function `countOccurence` to use recursion, where the function calls itself to move through the array.

* The function has three parameters: the array (`arr`), the target value (`target`), and two optional parameters (`index` and `count`), initialized to 0.
 Base Case:

* The recursion stops when the index is equal to the array’s length (`arr.length`), meaning all elements have been checked.

* At this point, the function returns the count, which tracks how many times the target was found.

Recursive Case:

* On each recursive call, the function checks if the element at the current index matches the target.

* If it matches, count is incremented.

* The function then calls itself with index + 1 to move to the next element in the array.

Tail Recursion:

* The function efficiently updates the count and index on each recursive call, ensuring smooth traversal through the array without needing extra memory or variables.

###### Thought Process:
* I wanted a simple, clear solution to count how many times the target value appears.

* Recursion is a clean way to break the task into smaller steps: check one element at a time and move forward.

* This makes the function easy to understand and efficient, as it only processes each element once.

##### Task 9: In-Order Traversal of a Binary Tree

###### Approach:

Recursive Function:

* I implemented a recursive function `inorderTraversal` to perform in-order traversal (Left, Root, Right) on a binary tree.

* The function first visits the left subtree, then logs the root node's data, and finally traverses the right subtree.

Base Condition:

* If the node is `null`, the function stops (this handles leaf nodes and empty trees).

Traversal Execution:

* The function prints the nodes in their in-order sequence as it navigates through the tree.

###### Thought Process:

* In-order traversal is a natural fit for recursion, as it breaks down the problem into smaller sub-problems.

* The left and right subtrees are treated independently, making recursion a simple and efficient way to visit all nodes.

* By printing the node during the root step, the output logs the values in the correct sequence. 

##### Task 10: Calculating Depth of a Binary Tree 

###### Approach: 
Recursive Function:

* I wrote the `calculateDepth` function to determine the depth of the tree by recursively checking the left and right subtrees.
Base Case:

* When a `null` node is encountered, the function returns 0 (indicating no depth).

Depth Calculation:

* The depth of each subtree is calculated by comparing the depths of the left and right subtrees, then adding 1 for the current node.

###### Thought Process:

* To find the depth, the function moves to the deepest node on each side and keeps track of the greater depth.

* This recursive solution ensures that all nodes are visited while maintaining a clear calculation of depth for any subtree. 

### Achievements

* By completing these activities, I gained a deeper understanding of recursion, including its application in traversing binary trees, performing searches, manipulating arrays and strings, and solving complex problems with simple, reusable logic.


