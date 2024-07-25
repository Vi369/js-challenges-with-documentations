## Day 2: Operators

### Approach and Thought Process

On Day 2, the goal was to revisit the basics and practice JavaScript operators.

#### Activity 1: Arithmetic Operations

- I used two numbers, `num1` and `num2`, to perform various arithmetic operations such as addition, subtraction, multiplication, division, and finding the remainder.

#### Activity 2: Assignment Operators

- I used the same two numbers, `num1` and `num2`, to perform addition assignment (`+=`) and subtraction assignment (`-=`).
- These operations can also be used for string concatenation.
- The result of the operation is assigned to the left operand.

#### Activity 3: Comparison Operators

- I compared `num1` and `num2` using greater than (`>`), less than (`<`), greater than or equal to (`>=`), and less than or equal to (`<=`).

##### Equality Operators

- I used `==` to compare two values, allowing for type conversion.
  - `500 == '500'` => **true**, because `500` is converted to a number.
  - `0 == false` => **true**, because `false` is converted to `0`.
  - `null == undefined` => **true**, because they are considered equal in type conversion.

- I used `===` to compare two values without type conversion.
  - `500 === '500'` => **false**, because the types are different (number vs string).
  - `0 === false` => **false**, because the types are different (number vs boolean).
  - `null === undefined` => **false**, because they are different types.

#### Activity 4: Logical Operators

- I checked two conditions using the `&&` operator, which only returns true when both conditions are true.
  - `isAdult = true`
  - `hasLicense = false`
  - `isAdult && hasLicense` => **false**

- I checked two conditions using the `||` operator, which returns true if any one condition is true.
  - `isLoggedIn = false`
  - `hasGuestUser = true`
  - `isLoggedIn || hasGuestUser` => **true**

- I used the `!` operator to invert boolean values.
  - `youAreBatman = false`
  - `!youAreBatman` => **true**

#### Activity 5: Ternary Operator

- I declared a variable `number` and used the ternary operator to check if it is a positive or negative number.
  - `number = 100`
  - `number > 0 ? "Positive Number" : "Negative Number"` => "Positive Number"
  - The ternary operator is used to check a condition. If the condition is true, it returns the value on the left side; if the condition is false, it returns the value on the right side.

### Achievements

By completing these activities, I aimed to:

- Understand and use different JavaScript operators.
- Perform basic arithmetic and comparison operations.
- Combine and invert boolean values using logical operators.
- Use the ternary operator for concise condition checking.
- Enhance my problem-solving skills with practical examples.
