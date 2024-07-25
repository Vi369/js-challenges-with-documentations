/**
 * Activity 1: Template Literals
 * Task: 1 using template literals create a string that includes person's name and age and log.
 * Task: 2 multi-line string using template literals.
 */

const person = {
    name: "Vikas",
    age: 22
}

console.log(`Person name : ${person.name} person age is: ${person.age}`);

// multi-line string 
const introduction = `
Hi, my name is ${person.name}.
I am ${person.age} years old.
Nice to meet you!
`;

console.log(introduction);


/**
 * Activity 2: Destructurings
 * Task: 3 use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
 * Task: 4 use object destructuring to extract the title and author from a book objet and log them.
 */

const nums = [1,2,3,4,5];
const [first, second] = nums;

console.log(`Array first Extracted Element:${first} and second Element : ${second}`);

// book Object
const book = {
    title: "Girl in Room 105",
    author: "Chetan Bhagat",
    year: 2018
}

const {title, author} = book;

console.log(`Object Extracted Title:${title} and Author Name : ${author}`);


/**
 * Activity 3: Spread and Rest Opretors
 * Task: 5 use spread operator to create an new array that includes all elemnets of an existion arrya plus additional elements and log new array.
 * Task: 6 use the rest operator in a function to accept an arbitarary number of argumenta and sum them and return result.
 */

// spread Operator
const newArray = [6,7,8,9,...nums];
console.log("new Array:", newArray);

// rest Operator
function sumNumbers(...nums){
    return nums.reduce((acc, cur)=>{
        return acc + cur;
    }, 0)
};

console.log("Sum of numbers:",sumNumbers(...newArray));

/**
 * Activity 4: Default Parameters
 * Task: 7 Write a function that takes two parametes and return their product with second having default value. 
 * calling func with and without second parameter and log result. 
*/

function productOfNum(num1, num2 = 1){
    return num1 * num2;
}

// calling function with parameter pass
console.log(productOfNum(20,30));

// calling function without second parameter pass
console.log(productOfNum(20));

/**
 * Activity 5: Enhanced Object Literals
 * Task: 8 use enhaced object literals to create an object with methods and propeerties and log the object.
 * Task: 9 create an object with computed property names based on variables and log the object to console.
 */

const firstName = "vikas"
const lastName = "varma"
const avatar = true
const IsLogedIn = true
const age = 22;
const country = "India";

const user = {
    firstName,
    lastName,
    avatar,
    IsLogedIn,
    age,
    country,

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    getStatus() {
        return this.isLoggedIn ? "Online" : "Offline";
    }
}

// console the user object
console.log(user);

// creating a object with computed property
let settingName = 'theme'
let settingValue = 'dark'

const config = {
    AppName: "ChaiCode",
    version: '1.0.0',
    [settingName]: settingValue,
    [`${settingName}Mode`]: 'night'

}

console.log(config);