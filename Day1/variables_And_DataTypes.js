/** Activity 1: Variable Declaration  
 * Task 1: Declare a variable using var assing number
 * Task 2: Dealate a variable using let assing string
*/
var num = 1000;
console.log("Number:", num);

let str = "Haanji, Namste";
console.log(str);

/** Activity 2: constant Declaration  
 * Task 3: Declare a variable using 'const' assing boolean
*/

const isTeaAvailable = true;
console.log("Chai is Available:",isTeaAvailable)

/** Activity 3: Data Types 
 * Task 3: Create variables of diff daya types and log using typeof operator.
*/
let overAllNumber = 67;
let result = 'Pass'
let resultStatus = true
let subject = {Hindi: 60, English: 65, Maths: 70, Science: 65, physics: 69, chemistry: 65}
let array = ['Superman', 'Batman', 'Ironman', 'Spiderman', 'Wonder Women']

console.log(" typeof overAllNumber:",typeof overAllNumber)
console.log(" typeof result:",typeof result)
console.log(" typeof resultStatus:",typeof resultStatus)
console.log(" typeof subject:",typeof subject)
console.log(" typeof array:",typeof array)

/** Activity 4: Reassigning Variables 
 * Task 5: reassing value in let variable and log the result 
*/

let changingData = 10;
console.log("initial Value:", changingData);
changingData = 100;
console.log("After Reaasing the Value:", changingData);

/** Activity 5: understanding const 
 * Task 5: reassing value in const variable and observe the code.
*/

const data = 'good';
console.log("initial value Delare by const",data)
data = 'very good';
console.log("After ressign the const value", data); // this line not run above line fire a error const ressing

