/**
 * Activity 1: Array Creation and Access
 * Task: 1  create array of numbers 1-5 and console.
 * Task: 2 access the first element and the last elsement.
 */

const arr = [1,2,3,4,5];
console.log(arr);

console.log("First Element", arr[0]);
console.log("First Element", arr[arr.length -1]);


/**
 * Activity 2: Array Method (Basic)
 * Task: 3  use push method to add a new number in the array and console update array.
 * Task: 4 use pop method to remove last value and log the update array.
 * Task: 5  use shift method to remove first element of the array and log arr.
 * Task: 6 use unshift method to add new element to the front of array and log arr.
 */

arr.push(6);
console.log("After push Updated Array:",arr);

arr.pop();
console.log("After pop Updated Array:",arr);

arr.shift();
console.log("After shift Update Array:", arr);

arr.unshift(1);
console.log("After unshift Update Array:", arr);


/**
 * Activity 3: Array Methods (Intermediate)
 * Task: 7  use map method to create new array and log new array.
 * Task: 8  use filter method to create new even nums of array.
 * Task: 9 use reduce method to create sum of array nums.
 */

const doubledArray = arr.map((element)=>{
    return element * element
})

console.log("New Doubled array:", doubledArray);

const evenNumArray = arr.filter((element)=>{
    return element % 2 === 0
})

console.log("Filtred Even numbers of array:", evenNumArray)


const sumOfnumbers = arr.reduce((acc, cur)=>{
    return acc + cur;
},0);

console.log("Sum of array numbers:",sumOfnumbers)

/**
 * Activity 4: Array Iteration
 * Task: 10 use for loop to iterate each element of array and console.
 * Task: 11  use forEach method to iterate each element of array and console.
 */

for(let i =0; i<arr.length; i++){
    console.log(`${i} element of Array: $${arr[i]}`)
}

console.log("Iterate array using forEach method.")
arr.forEach((element)=>{
    console.log(`${i} element => $${arr[i]}`)
})

/**
 * Activity 5: Multi-dimensional Array 
 * Task: 12 create two dimentional array and log.
 * Task: 13 console and log the specific element of array.
 **/
const twoDimentinalArray = [
    [1,9,3]
    [4,7,2]
]

console.log("matrix first element:",twoDimentinalArray[0][0]); // Output: 1
console.log("Matric last element:",twoDimentinalArray[1][2]); // Output: 2