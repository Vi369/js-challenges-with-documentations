/**
 * Activity 1: Two sum
 * Task 1 : solve the "two sum" problem on LeetCode
 * write a function that takes an array of numberas and a trget number retruns the indices of the two numbers that add up to the target.
 * log the indices for a few test cases.
 */

var twoSum = function(nums, target) {
    
    for(let i = 0; i< nums.length; i++){
        for(let j = i+1; j< nums.length; j++){
            if(nums[j] === target - nums[i]){
                return [i, j];
            }
        }
    }
    return null // 
    
};

const nums =  [2,7,11,15] 
const nums1 =  [3,2,4] 
const nums2 =  [3,3] 

console.log(twoSum(nums2, 6))
console.log(twoSum(nums1, 6))
console.log(twoSum(nums, 9))