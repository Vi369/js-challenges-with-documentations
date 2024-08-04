/**
 * Activity 4: Assertions and boundaries
 * Task: 7 Write a regular expression to match a word only if it is at the beginnig of a string.
 * Log the captures.
*/

const sentence = "The JavaScript baby!.And one more time using The";
const regex = /^The/g;
const regexAnyWord = /^\w+/g;

console.log(sentence.match(regex));
console.log(sentence.match(regexAnyWord));

/**
 * Task 8: write a regular expression to match a word only if it is at the end of a string . Log the matches.
 */

const regexEndofStringWord = /The$/g;
const anyWordEndofStringRegex = /\w+$/g;
console.log("Word End of the String:", sentence.match(regexEndofStringWord));
console.log("Word End of the String:", sentence.match(anyWordEndofStringRegex));