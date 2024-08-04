/**
 * Activity 2: Character Classes and Quantifires
 * Task: 1 Write a regular expression to match all words in a string that start with a capital letter.
 * Log the matches.
*/

const sentence = "Write a Regular Expression to Match all Words in a String that Start with a Capital Letter"
const regexMatchAllStartCap = /\b[A-Z][a-z]*\b/g;
const result = sentence.match(regexMatchAllStartCap);

for (const word of result) {
    console.log(word);
}

/**
 * Task 4 write a regular expression match all sequences of one or more digits in a string.
 * log the matches.
 */

const sentenceWithDigits = "hello123 hello Mic Testing123 123";
const regexCheckOneOrMoreDigit = /\d+/g;

const result3 = sentenceWithDigits.match(regexCheckOneOrMoreDigit);
// console.log(result3)
for (const digits of result3) {
    console.log(digits);
}