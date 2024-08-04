/**
 * Activity 1: Basic Regular Expression
 * Task: 1 Write a regular expression to match a simple pattern. 
 * Log the matches.
*/

const sentence = "JavaScript is popular. Many developers use JavaScript daily."
const regex = /JavaScript/g;

const result = sentence.match(regex);
console.log(result);

/**
 * Task 2 : write a regular expression to match all digits in a string. 
 * log the matches.
 */

const stringWithDigits = "Hello World 105001";
const regexForDigitCheck = /\d/ig
const result2 = stringWithDigits.match(regexForDigitCheck);
console.log(result2);