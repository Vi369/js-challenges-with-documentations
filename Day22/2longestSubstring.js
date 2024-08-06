/** Activity 2: Longest Substtring without Repeating Characters problem on leetCode
 * Task 2: Write a function to find the longest substring without repeating characters in a string.
 * log the length of substring few test cases.
*/

function lengthOfLongestSubstring(str){
    if(str.length === 0){
        return 0
    }
    if(str.length === 1){
        return 1
    }

    let left = 0;
    let maxLenngth = 0;
    const strSet = new Set();

    for(let right = 0; right < str.length; right++){

        while(strSet.has(str[right])){
            strSet.delete(str[left]);
            left++;
        }
        // adding value to set 
        strSet.add(str[right]);

        // maxLength 
        maxLenngth = Math.max(maxLenngth, right - left + 1)
    }
    return maxLenngth;
}


console.log(lengthOfLongestSubstring("abcdefghijiji")) // Expected 10