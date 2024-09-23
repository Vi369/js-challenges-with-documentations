/**
 * Activity 5: Dynamic Programming
 * Task: 10 Write a function to solve the fibonacci sequence using dynamic programming .
 * Log the fibonacci numbers
*/

function fibMemo(num, memo = {}){
    if(num in memo){
        return memo[num];
    }
    if(num <= 1 ){
        return 1
    }
    memo[num] = fibMemo(num -1, memo) + fibMemo(num - 2, memo);

    return memo[num];
}

console.log(fibMemo(5)); // 8


/**
 * Task: 11 Write a function to solve the knapsack problem using dynamic programming .
 * Log the maximum value that can be obtained.
*/

