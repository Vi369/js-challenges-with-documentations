/**
 * Activity 3: String Algorithms
 * Task: 6 Write a function to count the occurrences of each character in a string .
 *  log the character counts.
*/

function occurrenceCount(str){

    const mapCount = new Map();

    for (const char of str) {
        mapCount.set(char, (mapCount.get(char) || 0) + 1);
    }

    return mapCount;
}

const str = "abcabcbb"
console.log("Occurence",occurrenceCount(str));


/**
 * Task: 7 Write a function to find the longest substring without repeating characters in a string.
 * log the length of substring.
*/

function LengthOfLongestSubstring(str){
    if(str.length === 0){
        return 0;
    }
    if(str.length === 1){
        return 1;
    }

    let left = 0;
    let maxLenngth = 0;
    const substringSet = new Set();

    for(let right = 0; right < str.length; right++){

        while(substringSet.has(str[right])){
            substringSet.delete(str[left]);
            left++;
        }

        substringSet.add(str[right]);

        
        maxLenngth = Math.max(maxLenngth, (right - left + 1));
    }

    return maxLenngth;
}

const str1 = "pwwkew"
const str2 = "bbbbb"
const str3 = "abcabcbb"
const str4 = ""
const str5 = "v"

console.log(LengthOfLongestSubstring(str1)) // 3
console.log(LengthOfLongestSubstring(str2)) // 1
console.log(LengthOfLongestSubstring(str3)) // 3
console.log(LengthOfLongestSubstring(str4)) // 0
console.log(LengthOfLongestSubstring(str5)) // 1

