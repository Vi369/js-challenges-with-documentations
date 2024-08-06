/**
 * Activity: 2 Reverse integer
 * Task: 2: write a function that takes an integer and returns it with its digit reversed.
 * Handle edge case like negative numbers and numbers ending in zero.
 * log the result for a few test cases
 */

var reverse = function(x) {
    // handle edge case number negative
    const negativeNumber  = x<0;
    const str = Math.abs(x).toString();
    const reversed = str.split('').reverse().join('');
    // its also handle the second edge case
    let reversedNumber = parseInt(reversed, 10);

    if(negativeNumber){
        reversedNumber *= -1
    }
    if(reversedNumber < (Math.pow(-2, 31)) || reversedNumber > (Math.pow(2, 31) -1)){
        return 0
    }

    return reversedNumber
};


