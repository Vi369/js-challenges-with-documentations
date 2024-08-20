// this takes run time too much 
// var threeSum = function(nums) {
//     if(!nums || nums.length < 3){
//         return []
//     }

//     const set = new Set();
//     nums.sort((a,b)=> (a-b));

//     for(let i = 0; i<nums.length -2; i++){
//         let left = i+1;
//         let right = nums.length -1;

//         while(left < right){
//             let sum = nums[i] + nums[left] + nums[right];

//             if(sum === 0){
//                 const triplet = [nums[i], nums[left], nums[right]];
//                 set.add(triplet.toString());
//                 left++;
//                 right--;
//             }else if(sum < 0){
//                 left++;
//             }else{
//                 right--;
//             }
//         }
//     }
//     const result = Array.from(set).map(triplet => triplet.split(',').map(num => Number(num)));
//     // console.log(result);
//     return result;

// };

// const nums = [-1,0,1,2,-1,-4]
// const result = threeSum(nums);
// console.log(result)


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];

    if(!nums || nums.length < 3){
        return result;
    }

    // sort the array
    nums.sort((a,b)=> (a-b));

    for(let i = 0; i<nums.length -2; i++){
        let left = i+1;
        let right = nums.length -1;

        // skip and avoid duplicate value
        if( i>0 && nums[i] === nums[i-1]) continue;

        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];

            if(sum === 0){
                result.push([nums[i], nums[left], nums[right]]);

                // moving left pointer to next different number
                while(left < right && nums[left] === nums[left +1]) left++;
                
                // moving right pointer to next different number 
                while(left < right && nums[right] === nums[right -1]) right--;

                left++;
                right--;
            }else if(sum < 0){
                left++;
            }else{
                right--;
            }
        }
    }
    return result;
};

const nums = [-1,0,1,2,-1,-4]
const result = threeSum(nums);
console.log(result)