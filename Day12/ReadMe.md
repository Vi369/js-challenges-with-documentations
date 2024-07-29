## Day 12: Error Handling

### Approach and Thought Process

On Day 12, The goal was to understand and implement error handling, including using `try...catch`, `finally`, custom errors, handling errors in promises, and managing errors in `async` functions and `fetch` API requests.

#### Activity 1: Basic Error Handling with Try-catch

##### Task 1: Write a Function that Intentionally Throws an Error and Use try-catch Block to Handle It

###### Approach:
* Created a function `ThrowError` that throws a custom error.

* Used a `try-catch` block to catch and handle the thrown error.
###### Thought Process:
* I Used `throwError` function to throw coustom error and used `try-catch` block to log error proper in console.


##### Task 2: Create a Function to Divide Two Numbers and Throw an Error If Denominator is Zero; Use try-catch to Handle This Error

###### Approach:
* Approach is , Defined `divideNumber` function to perform division.

* Included error handling for division by zero within the function.

* Used a `try-catch` block to handle errors when calling this function.

###### Thought Process:
* The `divideNumber` function divides two numbers and throws an error if the denominator is zero. The `try-catch` block handles this error and logs the message.

#### Activity 2: Finallly Block

##### Task 3: Write a script with a try-catch block and a finally block. Log messages in all three blocks to observe the execution flow.

###### Approach and Thought Process:

* Added a `finally` block to ensure it runs regardless of whether an error occurs. This guarantees that cleanup or finalization code executes consistently.


#### Activity 3: Custom Error Objects

##### Task 4:  Create a Custom Error Class that Extends the Built-in Error Class, Throw an Instance of This Custom Error in a Function, and Handle It Using a try-catch Block

###### Approach:
* Approach is , defined a `customError` class extending the built-in `Error` class.
* And Created a function to throw this custom error `throwCustomError`
* And Used a `try-catch` block to catch and handle the error.


###### Thought Process:
* `customError` helps create meaningful error messages with custom names.

* And Using `try-catch` allows for graceful handling of specific errors.

##### Task 5: Validate User Input and Throw Custom Error

###### Approach:
* Approach is, defined `EmptyInputError` for handling cases where input is empty.

* Created `inputValidator` function to throw this error if validation fails.

* And Used `try-catch` to manage validation errors.


###### Thought Process:
* The `EmptyInputError` class provides clear error messages for invalid input.

* Try-catch ensures that validation errors are caught and managed effectively.

#### Activity 4: Error Handling in Promises

##### Task 6: Create a Promise that Randomly Resolves or Rejects
###### Approach:
* approach is, Created a promise that randomly either resolves or rejects.

* Used `.catch()` to handle rejection and log an error message.

###### Thought Process:
* Created a `randomPromise` that either resolves or rejects based on a random value. Random value i generate using `Math.floor(Math.random() * 2)` that only give either `0` or `1`

* And Used `.then()` to handle resolved values and `.catch()` to log any errors from the randomPromise.

##### Task 7: Use Try-Catch Within Async Function to Handle Errors
###### Approach:
* Approach is , defined an `async` function `randomlyResolveAndReject` to handle the promise.

* And Used `try-catch` within this function to manage and log any errors.

###### Thought Process:
* Used The `async/await` syntax makes handling asynchronous errors straightforward.

* The try-catch block in the async function ensures errors are managed and logged properly.

#### Activity 5: Graceful Error Handling in Fetch

##### Task 8: Handling Errors with `.catch()`

###### Approach:
* Approach is , Used the `fetch` API to request data from an invalid URL.

* Added a `.catch()` method to handle and log any errors

###### Thought Process:
* The `.catch()` method is used to handle and log errors when the fetch request fails due to an invalid URL.

##### Task 9: Handling Errors with `async/await`

###### Approach:
* Created an `async` function to fetch data from the same invalid URL.

Used `try-catch` within the `async` function to manage and log errors.

###### Thought Process:
* The `async/await` syntax simplifies handling asynchronous errors.

* The `try-catch` block ensures proper management and logging of errors during the fetch operation.

### Achievements
By completing these activities, I gained:

* Proficiency in using `try...catch` for basic error handling.

* Skills in utilizing `finally` blocks for cleanup.

* Ability to create and use custom error types.

* Experience handling errors in promises with `.catch()`.

* Improved error management in async functions with `try...catch`.

* Capability to handle errors gracefully in network requests using `fetch`.