## Day 15: Closures

### Approach and Thought Process 
On Day 15, The focus was on understanding and practicing Closures concepts, Understanding Closures, practicle closure, Closures in Loops and modle pattern, memoization concept.

#### Activity 1: Understanding Closures

##### Task 1: Function returning another function accessing outer scope variables

###### Approach:
* The outer function (`outerfunction`) defines a variable (`outerGreeting`) in its scope.

* An inner function (`innerfunction`) is returned, which has access to the outer function's variable (`outerGreeting`), showcasing the closure concept.

###### Thought Process:

* Closures allow inner functions to access variables from their parent function’s scope even after the parent function has executed. This mechanism helps retain state across function calls.

##### Task 2: Closure with private counter

###### Approach:
* The function (`privateCounter`) maintains a private variable (`count`).
Two functions (`increment` and `getValue`) allow controlled manipulation and access to the count variable, preserving its state through closure.

###### Thought Process:
* By returning an object with methods, this closure creates a private counter, maintaining its value in memory without direct external access.

#### Activity 2: Practical Closures

##### Task 3: Generate unique IDs using closure

###### Approach:
* The `generateUniqueId` function holds a private `lastGeneratedId` variable, and the inner function (`returnUniqueId`) increments and returns this value upon each call.

###### Thought Process:
* Closures help maintain state (in this case, the last generated ID) across multiple function calls, making it ideal for generating unique identifiers.

##### Task 4: Closure capturing user’s name for greeting

###### Approach:
* The function `namePlease` returns a function that uses the captured `name` to greet the user.

###### Thought Process:
* Closures are perfect for capturing variables like user data and persisting them for use across multiple interactions, such as personalized greetings.

#### Activity 3: Closures in Loops
##### Task 5: Array of functions that log their index

###### Approach:
* A loop creates an array of functions, each capturing its current index using an immediately invoked function expression (IIFE). This prevents all functions from logging the same value.
###### Thought Process:
* Closures ensure that each function in the array correctly remembers the index at the time of its creation, avoiding typical issues with variables inside loops.

#### Activity 4: Module Pattern
###### Task 6: Create a module for managing a collection of items

###### Approach:
* The `collectionOfItems` function uses closures to create a simple module for managing items. The module provides methods to add, remove, and list items.

##### Thought Process:
* The module pattern leverages closures to encapsulate state (the item variable) and expose only the methods required to manipulate the state, providing a clean interface for external code.

#### Activity 5: Memoization
##### Task 7: Memoize results of a function

###### Approach:
* The `memoizesFunction` function uses a closure to store previously computed results in a Map. If a function with the same arguments is called again, the result is fetched from the `map` instead of recomputing.

###### Thought Process:
* Memoization optimizes performance by storing the results of expensive computations and avoiding redundant calculations for the same inputs.

##### Task 8: Memoize version of factorial calculation

###### Approach:
* The `factorial` function computes the factorial of a number, and the memoized version of this function stores the results for faster future lookups.
###### Thought Process:
* Memoization is especially useful for functions like factorials where repeated calculations with the same inputs can be avoided, enhancing efficiency.


### Achievements
After completing these tasks, I gained:

* `Clear Understanding of Closures`: How functions access outer variables and maintain state across calls.

* `Practical Use of Closures`: Implemented closures for counters, unique ID generation, and personalized greetings.

* `Memoization`: Learned to optimize functions by caching results to improve performance.

* `Module Pattern`: Used closures to create clean, modular code with encapsulated logic.

* `Handling Loops with Closures`: Managed closures in loops to ensure correct values at each iteration.