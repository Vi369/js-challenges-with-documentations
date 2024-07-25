## Day 7: Objects

### Approach and Thought Process

On Day 7, the goal was to explore object creation, manipulation, working with objects, object methods, nested objects, the `this` keyword, and object iteration.

#### Activity 1 : Object Creation and Access
There are several ways to create objects in JavaScript.

* The task was to create an object that represents a book, so I used an object literal notation to create an object with key-value pairs for the book's title, author, and year.

* There are two primary ways to access object properties: `dot notation and bracket notation`. I used dot notation to access the book title and bracket notation to access the book author.

#### Activity 2 : Object Methods

There are serveral ways to add methods in Object.Here I choosed adding method after object creation.

* I created a method `getBookDetails` that return a string containing the book's title , author and publication year using the `this` keyword to access the object's properties.

* Created a method `bookYearUpdate` that take a parameter, this method updates the year property of the book object with new value passed as an argument.

#### Activity 3 : Nasted Objects
Approach is, Created a nested object that represent library with name and array of books object and log library name and books.

* I created a `Library` Object using Object literal notation, and write two properties first is library name and second one is collection of library books.

* Using dot notation i access library name `Library.name` and library books `Library.books` and log.

#### Activity 4 : The `this` keyword
The this keyword refers to the object that is currently executing the code.

* I defined a method `getTitleAndPublishYearDetail` that returns a string combining the book's title and publication year. The `this` keyword is used to access the title and year properties of the book object.

#### Activity 5 : Object Iteration
Approach is, I want to loop through the book object using a `for..in` loop. 

* I used the `for..in` loop to iterate through all enumerable properties of the book object

Within the loop, access each property name and its associated value, and also i added a condition to check if the value's type is not a function before logging it.

* I Used `Object.keys` to get an array of the object’s property names and log array of keys values.

* I Used `Object.values` to get an array of the object’s property values and log array of values.


### Achievements 

By completing these activities, I aimed to:

* Gain practical experience and revise object creation and manipulation with properties and methods.

* Understand and use the this keyword in object methods.

* Work with nested objects and arrays of objects.

* Iterate over an object's properties using built-in methods and loops.
