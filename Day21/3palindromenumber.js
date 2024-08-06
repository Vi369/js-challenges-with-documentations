/**
 * Activity: 3 palindrome Number
 * Task: 3: write a function take takes integer and returns true if if is palindrome , and false otherwise.
 * log the result for a few test cases
 */

function checkPalindromeNumber(number){
    if(number < 0){
        return false
    }

const str = number.toString();
const reversed = str.split('').reverse().join('');

return str === reversed;
}

console.log(checkPalindromeNumber(121))
console.log(checkPalindromeNumber(-121))
console.log(checkPalindromeNumber(10))