## Day 11: Promises and Async/Await

### Approach and Thought Process

On Day 11, the focus was on understanding and revising promises, chaining them, using async/await for asynchronous operations, fetching data from an API, and handling concurrent promises.

#### Activity 1: Understanding Promises

##### Task 1: Create a promise that resolve with message after a 2-second

###### Approach:
* Created a promise that resolves with a message after a 2-second timeout.

* Used `setTimeout` to simulate the delay.

* Used `.then()` to log the resolved message to the console.

###### Thought Process:
* The promise is set to resolve after 2 seconds.

* Handled the resolved value using `.then() ` to ensure the message is logged after the delay.

##### Task 2: Create a Promise that Rejects After a Timeout and Handle the Error

###### Approach:
* Approach is , created a promise that rejects with an error message after a 2-second timeout.

* Used `setTimeout` to simulate the delay.

* used `.catch()` to handle the rejected promise and log the error message to the console.

###### Thought Process:
* The promise is set to reject after 2-seconds.

* Handled the error using `.catch()` to ensure the error message is logged appropriately. 

#### Activity 2: Chaining Promises

##### Task 3: Create a series of promises to simulate data fetching from a server, ensuring messages are logged in order.

###### Approach:

* Helper function, Created `fetchData()` to simulate data fetching with a delay, returning a promise.

* Chaining Promises, Used `.then()` to chain promises , logging each message in sequence.


###### Thought Process:
* Sequential Fetching, Each promise resolves and logs data before the next one starts.

* Error Handing, added `.catch()` to handle any potential errors during the process.

#### Activity 3: Using Async/Await

##### Task 4: Write an `async` function to await a promise's resolution and log the result
###### Approach:
* Created `resolvedPromise()` function that uses `await` to handle the promise.


###### Thought Process:
* Used `await` inside a `try` block to get the resolved value.

* Added `catch` block to handle errors, though not needed here.

##### Task 5: Write an `async` function to handle a rejected promise using `try-catch`.
###### Approach:
* Created `handleRejectAndResolvedPromise()` to manage both resolved and rejected promises.


###### Thought Process:
* Used `await` to handle promise resolution and catch any errors.

* Demonstrated error handling with `try-catch` to log errors from rejected promises.

#### Activity 4: Fetching Data from an Api

##### Task 6: Use the `fetch` API to retrieve data and handle responses with promises.
###### Approach:
* Created `fetchUser()` function to handle data fetching using promises.

###### Thought Process:
* Used `fetch()` to make a network request.

* Chained `.then()` to handle successful response and `.catch()` for errors.

* Checked if response was ok; if not, threw an error.

##### Task 7: Use `async/await` to fetch data and handle the response.
###### Approach:
* Created `fetchUserData()` function with `async` keyword to simplify asynchronous code.

###### Thought Process:
* Used `await` for cleaner, synchronous-looking code while handling the promise.

Used `try/catch` to handle errors similarly to promise chaining but in a more readable format.

#### Activity 5: Event Delegation

##### Task 8: using `promise.all` Wait for all promises to resolve and log their values.
###### Approach:
* Created multiple promises: `promise1`, `promise2`, and some API fetch requests.

* Used Promise.all to handle these promises concurrently.

###### Thought Process:
* `Promise.all` waits for all promises to resolve and returns an array of results.

* Ensured all promises are fulfilled before logging their values.

##### Task 9: using `promise.race`Log the value of the first promise that resolves among multiple promises.

###### Approach:
* Used `Promise.race` to determine which promise resolves first.

###### Thought Process:
* `Promise.race` returns the result of the first promise that resolves or rejects.

* Useful for scenarios where the fastest result is needed.

### Achievements
By completing these activities, I gained:

* Understanding Promises: Created and handled promises, including managing resolved and rejected states.

* Chaining Promises: Sequenced multiple promises to perform sequential asynchronous operations.

* Using Async/Await: Managed asynchronous code more readably with `async/await`.

* Fetching Data: Retrieved data from public APIs using both promises and `async/await`.

* Managing Concurrent Promises: Handled multiple concurrent promises with `Promise.all` and `Promise.race`.