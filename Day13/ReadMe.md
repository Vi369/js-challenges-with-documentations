## Day 13: Modules

### Approach and Thought Process

On Day 13, the goal was to explore and gain a deeper understanding of creating, exporting, and importing modules. I focused on:

* Creating and Exporting modules
* Named and default exports
* Importing entire modules
* Using third-party modules
* Module binding

#### Activity 1 : Creating and Exporting Modules.

Since JavaScript script files don't support imports directly, I first initialized a `package.json` file using `npm init`. Then, I set `"type": "module"` in the package.json to enable ES6 module features like `import` and `export`
##### Task 1: Create and Export a Function
###### Approach :
* Approach is, created a function that add two number and export it, then imported this module into another script to use the function.

###### Thought Process :

* I defined a function that add two number and i used `export` keyword to exporting the function and make the functiono available for other files. After that I Importing it inot `main.js` file and call the function and excute the function.

##### Task 2: Create and export object

###### Approach :
* Approach is, create a module that exports an object `person` with properties and methods then imported this module into another script to use the object.

###### Thought Process :

* I created `person` Object includes properties and methods to getDetails and status and using `export` keyword to export this object , and importing it in `main.js` script file and access its properties and methods.

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

###### Approach : 
* Used third party modules like axios, lodash and use it.

###### Thought Process :

* Firstly i installed modules using `npm` and import it on my `main.js` file and use it.

#### Achievements:
By completing these activities, I gained:

* Experience in creating and exporting functions, objects, and constants using modules.

* Proficiency in importing modules using named and default imports.

* Skills in using third-party modules installed via npm.
