## Day 8: ES6+ Features

### Approach and Thought Process

On Day 8, the goal was to explore and gain a deeper understanding of various JavaScript concepts, including ES6+ Features like Template Literals, Destructuring, Spread and rest Operators, Default parameters, and Enhanced Object Literals.

#### Activity 1 : Template Literals
##### Task 1: Using Template Literals:
###### Approach :
* Approach is, creating a string that includes a person's name and age using template literals.

###### Thought Process :

* I used template literals and their syntax to inject variables value directly into the string and access the object properties using dot notation `person.name` and `person.age`.

##### Task 2: Multi-line String using Template Literals

###### Approach :
* Approach is, creating a multi-line string using template literals.

###### Thought Process :

* Template literals are great for multi-line strings as they keep formatting and line breaks intact without extra characters or methods.

#### Activity 2 : Destructurings

##### Task 3: Array Destructuring

###### Approach: 
* Approach is, using array destructuring to extract the first and second elements from an array.

###### Thought process: 

* I used Array destructuring its allows direct assignment `const [first, second] = nums;` of array elements to variables, simplifying access.

##### Task 4: Object Destructuring

###### Approach: 

* Approach is to using object destructuring to extract specific properties from an object.

###### Thought process: 

* I used Object destructuring `const {title, author} = book;` and extract book object title and author to dirctly to variables, Object destructuring results are cleaner code by allowing direct extraction of properties.

#### Activity 3 : Spread and Rest Opretors
##### Task 5: Spread Operator
###### Approach: 

* Approach is, using the spread operator to create a new array that includes all elements of an existing array plus additional elements.

###### Thought process: 

* I used the spread operator  to simplifies the process of combining arrays and adding new elements without modifying the original array `const newArray = [6,7,8,9,...nums]`.

##### Task 6: Rest Operator

###### Approach: 

* Approach is, using the rest operator in a function to accept an arbitrary number of arguments and sum them.

###### Thought process: 

* The rest operator `...nums` lets functions handle any number of arguments, making it easy to aggregate multiple values into a single array.

#### Activity 4 : Default Parameters
##### Task 7: Default Parameters in Function
###### Approach: 
* Approach is, writing a function with a default parameter value.

###### Thought process: 

* I used Default parameters it enhance the robustness of function by providing fallback values, I provide the second parameter default value `productOfNum(num1, num2 = 1)`; if the user doesn’t provide a second value, the function still works accurately with the default value of 1.

#### Activity 5 : Enhanced Object Literals

##### Task 8: Enhanced Object Literals
 
###### Approach: 

* Approach is, using enhanced object literals to create an object with methods and properties.

###### Thought process: 

* I used enhanced object literals to create the `user` object more efficiently. By using shorthand property names, I kept the code concise. The `getFullName` method returns the user's full name, and `getStatus` shows if the user is online or offline based on their login status.

##### Task 9: Computed Property Names

###### Approach : 
* Approach is, creating an object with computed property names based on variables.

###### Thought Process : 
* I used computed property names to dynamically set object properties. By using `[settingName]: settingValue`, I assigned `theme` as a key with the value `dark`. Similarly, `[${settingName}Mode]` creates a key based on the `settingName` variable and sets its value to `night`. This approach allows for flexible property names based on variables.

### Achievements 

By completing these activities, I gained:

* Practical experience with template literals, destructuring, spread and rest operators, default parameters, and enhanced object literals.

* Improved code readability and conciseness by using modern JavaScript features.

* A better understanding and effective use of dynamic property names and flexible function parameters.

* Enhanced ability to work with complex data structures in JavaScript.
