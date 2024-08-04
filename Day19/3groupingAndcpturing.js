/**
 * Activity 3: Grouping and Capturing
 * Task: 5 Write a regular expression to capture the area code , central office code , and line number from a Us phone number format.
 * Log the captures.
*/

const example = "(123) 456-7890"
const regex = /^\((\d{3})\) (\d{3})\-(\d{4})/;

const result = example.match(regex);
// console.log(result);

console.log("Full Match:", result[0])
console.log("Area Code:", result[1])
console.log("Office Code:", result[2])
console.log("Line Number:", result[3])


/**
 * Task: 6 Write a regular expression to capture the username and domain from an email address.
 * log the captures.
 */

const email = "Vikashverma3001@gamil.com"
const regexForUsernameAndDomain = /(^([^@]+)@([^@]+))/

const usernameAndDomain = email.match(regexForUsernameAndDomain);

console.log("Username",usernameAndDomain[2])
console.log("Domain:",usernameAndDomain[3])