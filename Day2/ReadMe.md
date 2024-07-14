## Day 2: Operators

### Approach and Thought Process

Day 2 of this challenge, my goal was to revisit the basics and Practice javascript Operators.


#### Activity 1: Arithmetic Operations
I will use two numbers, `num1` and `num2`, and perform various arithmetic operations like addition, substraction, multiplication, division, and find the remainder.

#### Activity 2: Assignment Operators

- I will use the same two numbers, num1 and num2, to perform addition assignment ( `+=` ) and subtraction assignment ( `-=` ).

- These operations can also be used for string concatenation.

- The result of the operation will be assigned to the left operand.

#### Activity 3: Comparison Operators

- I will compare `num1` and `num2` using greater than (`>`), less than (`<`), greater than or equal to (`>=`), and less than or equal to (`<=`).

##### Equality Operators 

I will use `==` to compare two values, allowing for type conversion.

* `500 == '500'` =>  <mark style = "background-color: orange">true</mark> ,because `500` is converted to a `number`.

* `0 == false` => <mark style = "background-color: orange">true</mark> , because `false` is converted to `0`.

* `null == undefined`=>  <mark style = "background-color: orange">true</mark> , because they are considered equal in type conversion.

I will use `===` to compare two values without type conversion.

* `500 === '500'` => <mark style = "background-color: orange">false</mark> , because the types are different (number vs string).

* `0 === false` =><mark style = "background-color: orange">false</mark> , because the types are different (number vs boolean).

* `null === undefined` => <mark style = "background-color: orange">false</mark>, because they are different types.

#### Activity 4: Logical Operators

I will check two condition using `&&` operator. AND operator only return true when both condition is true.

- isAdult = `true`
- hasLicense = `false`

`isAdult && hasLicense` => <mark style = "background-color: orange">false</mark>

I will check two condition using `||` Operator. OR operator return true if any one condition is true.

- isLoggedIn = `false`
- hasGuestUser = `true`

`isLoggedIn && hasGuestUser` => <mark style = "background-color: orange">true</mark>

I will use the `!` operator to check conditions. The exclamation mark `!` is used as the NOT operator in JavaScript. It is used to invert the boolean value of an expression.

- youAreBatman = `false`

`!youAreBatman` => <mark style = "background-color: orange">true</mark>


#### Activity 5: Ternary Operator
I declare a variable `number` and using ternary operator to check it is a Positive number or a Negative number.

- number = 100
- `number > 0 ? "Positive Number" : "Negative Number" ` => "Positive Number"

ternary operator is used to check a condition. If the condition is true, it returns the value on the left side; if the condition is false, it returns the value on the right side.

### Achievements 

By completing these activities, I aim to:

- Understand and use different JavaScript operators.

- Perform basic arithmetic and comparison operations.

- Combine and invert boolean values using logical operators.

- Perform Ternary operator operation and understand how its work.

Enhance my problem-solving skills with practical examples.