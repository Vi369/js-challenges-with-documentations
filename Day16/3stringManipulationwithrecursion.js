/**
 * Activity 3: String Manipulation with Recursion
 * Task 5 Write a recursive function to reverse a string .
 * Log the result for a few text cases.
*/

function reverseString(str){
    if(str.length === 1){
        return str[0]
    }
    if(str.length === 0){
        return  '' //'Empty String'
    };

    return reverseString(str.slice(1)) + str[0]
}

console.log(reverseString('vikas'));
console.log(reverseString(''));
console.log(reverseString('v'));
console.log(reverseString('vi'));

/*
* Task 6 write a recursive functin to check if a string is a palindrome.
* log the result for a few text cases.
*/

function palindrome(str){
    // str = str.trim().toLowerCase(); // In each call its happern thats why in calling time we passed string in trim and to lower case format.
    if(str.length <= 1){
        return true
    }else if(str[0] === str[str.length -1]){
        return palindrome(str.substring(1,str.length -1))
    }else{
        return false
    }
}

let str = 'Step on no pets'
palindrome(str.trim().toLowerCase());

console.log(palindrome('redivider'))
console.log(palindrome('ii'))
console.log(palindrome(''))
console.log(palindrome('paap'))
console.log(palindrome('papa'))






