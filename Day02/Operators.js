/**
 * Activity 1: Arithmetic Operations
 * task 1: add two number and log result
 *  task 2: subtract two number and log result
 *  task 3: multiply two number and log result
 *  task 4: divide two number and log result
 *  task 5: remainder two number and log result
 */

let num1 = 77, num2 = 7;
console.log("Sum of two Number:",num1 + num2)
console.log("Substraction of two Number:",num1 - num2)
console.log("Multiply of two Number:",num1 * num2)
console.log("Divide of two Number:",num1 / num2)
console.log("Remainder of two Number:",num1 % num2)

/**
 * Activity 2: Assignment Operators
 * task 6: using `+=` to add two number and log result
 *  task 7: using `-=` to subtract two number and log result
 */

num1 += num2
console.log("Addition using '+=' Operator: ", num1)
num1 -= num2
console.log("Subtraction using '-=' Operator: ", num1)


/**
 * Activity 3: Comparison Operators
 * task 8: compare using `>` and `<` two number and log result
 *  task 9: compare using `>=` and `<=` subtract two number and log result
 *  task 10: compare using `==` and `===` to subtract two number and log result
 */

console.log("num1 is greater then num2:",num1 > num2)
console.log("num1 is less then num2:",num1 < num2)
console.log("num1 is greter or equal num2:",num1 >= num2)
console.log("num1 is less or equal num2:",num1 <= num2)

/** Equality Operator
 * loose equlity `==` and strict Equlity`===` 
 */
console.log(500 == '500'); // true
console.log(0 == false); // true
console.log(null == undefined); // true

// strict Equlity`===`
console.log(500 === '500'); // false
console.log(0 === false); // false
console.log(null === undefined); // false


/**
 * Activity 4: Logical Operators
 * task 11: use `&&` operator condition check and log result
 *  task 12: use `||` operator condition check and log result
 *  task 13: use `!` operator condition check and log result
 */

// AND Operator
let isAdult = true;
let hasLicense = false;

console.log(`Is he an adult: ${isAdult} and does he have a license: ${hasLicense}? Can he ride a bike: ${isAdult && hasLicense}`);

// OR operetor
let isLoggedIn = false;
let hasGuestUser = true;
console.log(`is user logged in: ${isLoggedIn} and he has a guest user: ${hasGuestUser} Is user view Content: ${isLoggedIn || hasGuestUser} `);

// NOT Operator
let youAreBatman = false;
console.log(`You are a Batman: ${!youAreBatman}`);


/**
 * Activity 5: Ternary Operator
 * task 14: check number positive or not and log result
 */

let number = 100;
console.log("Provided Numbeer is: => ",number > 0? "Positive Number" : "Negative Number")


