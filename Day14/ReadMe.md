## Day 14: Classes

### Approach and Thought Process

On Day 14, The focus was on understanding and practicing class definitions, inheritance, static methods and properties, getters and setters, and private fields.

This activity focuses on object-oriented programming (OOP) in JavaScript. Here's how I approached the tasks step-by-step:
#### Activity 1: Class Definition

##### Task 1: Define class add name age properties add method that greet the person

###### Approach:
* Approach is, defined a person class with properties name and age and add method greeting to greet.

###### Thought Process:
* I created a class `Person` and add properties `name` and `age` and for greeting create a method `greeting` that return a simple greet using class properties.

##### Task 2: add method to update the age

###### Approach:
* Approach is , defined a method that take newAge value and update the previous one.


###### Thought Process:
* I Created a method `updateAge` that override the age value to provided newAge value.

#### Activity 2: Class Inheritance

##### Task 3: Define student class that extends person class and add method that return studentid

###### Approach:
* Approach is, using `extends` keyword to extend `Person` class properties in student class and add method in student class that return student id.

###### Thought Process:

* Used `Student extends Person` to extends all propeties from the person class and used `super` keyword that call `Person` class constructor, and added studentId properties.

* added a method `getStudentId` that simply return the studentid.

##### Task 4: Override the grreting method in the student class and return the overridden greeting message

###### Approach:
* The `greeting()` method was overridden in the `Student` class to include the `studentId` in the message.

###### Thought Process:

* Overriding allowed me to customize the behavior of the parent class method for the `Student` class while maintaining the logic of the original `greeting()` method using `super`.


#### Activity 3: Static Methods and Properties

##### Task 5 : Task 5: Add a static method to `Person`.

###### Approach:

* I added a static method `genralGreeting()` to the `Person` class. This method can be called directly on the class without creating an instance.

* Demonstrated calling this method on both the `Person` and `Student` classes.

###### Thought Process:

* This emphasized the difference between instance methods (used by objects) and static methods (used by the class itself).

##### Task 6: Add a static property to `Student`.

###### Approach:

Added a static property `count` to track the number of `Student` instances.

* Incremented `count` within the constructor and displayed the total using a static method `displayStudent()`.

###### Thought Process:

This task showed how to maintain class-level data (shared by all instances) with static properties.
The static method `displayStudent()` provided a convenient way to access this data without needing an instance.

#### Activity 4: Getters and Setters

##### Task 7: Add a getter method for full name.

###### Approach:
* I added `#firstName` and `#lastName` private properties with getter methods for each.

* The getter method returned the full name, demonstrating encapsulation and the importance of controlled access to properties.

###### Thought Process:
* Getters provide a clean and controlled way to access object data, even when the properties are private.

##### Task 8: Add setter methods to update name properties.

###### Approach:
* Added setter methods to update the `firstname` and `lastname` properties.

* Demonstrated their usage by updating the instance's full name and logging the updated name.

###### Thought Process:
* Setters allow controlled modification of object properties, ensuring validation or additional logic can be applied during updates.

#### Activity 5: Private Fields

##### Task 9: Define a class `Account` with private fields and methods.

###### Approach:
* I defined an `Account` class with a private field `#balance` to ensure that the balance cannot be accessed or modified directly from outside the class.

* The class includes methods for depositing (`deposite()`) and withdrawing (`withdraw()`) money, ensuring that the balance is only updated through these methods.

* Error handling was added to prevent invalid deposit or withdrawal amounts, such as negative or zero values, and to ensure the withdrawal does not exceed the available balance.

###### Thought Process:
* Private fields (`#balance`) ensure that sensitive data like account balance is protected and can only be manipulated in a controlled manner.

* The deposit and withdrawal methods encapsulate the logic for modifying the balance while validating the inputs to prevent misuse.

##### Task 10: Create an instance and test the methods.

###### Approach:
* Created an instance of the `Account` class and tested the deposit and withdrawal methods.

* Logged the balance after each operation to verify the correct behavior.

* Handled errors such as insufficient balance or invalid initial deposits using `try-catch` blocks to ensure robustness.

###### Thought Process:
* This task emphasized the importance of maintaining encapsulation while providing controlled access to sensitive data through methods.

* Error handling ensured the class behaved correctly even in edge cases like negative balances or overdrawn accounts.

### Achievements
By completing these activities, I gained:

* Class Definition: Basic blueprint for objects, with properties and methods.

* Inheritance: Extending functionality from a parent class to a child class.

* Static Methods/Properties: Methods and properties belonging to the class itself rather than any object.

* Getters/Setters: Provide controlled access and updates to object properties.