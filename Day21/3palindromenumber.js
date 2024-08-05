/**
 * Activity: 3 palindrome Number
 * Task: 3: write a function take takes integer and returns true if if is palindrome , and false otherwise.
 * log the result for a few test cases
 */

function checkPalindromeNumber(...args){
    if(args.length <= 1){
        return true
    }else if(args[0] === args[args.length -1]){
        return checkPalindromeNumber(args.slice(1,args.length -1));
    }else{
        return false
    }
}

console.log(checkPalindromeNumber(1,2,3,4))
console.log(checkPalindromeNumber(1,2,1))
console.log(checkPalindromeNumber([1,2,1]))