import { 
    addTwoNumbers,
    person,
    subtract,
    multiply,
    divide
} from "./modules/Modules.js";

// import default function 
import greeting from "./modules/Modules.js";

// import all constants and functions as an object
import { myMath } from "./modules/Modules.js";

// importing a third party module lodash
import lodash from 'lodash'
import axios from "axios";

console.log("Activity : 1 Creating and Exporting Modules")
console.log("Add of two Number:",addTwoNumbers(12,13))
// access person object
console.log("Person Details",person.getDetails())
console.log("Person Status:",person.getStatus());

console.log('Activity : 2 named and Default Exports');
console.log('Sum of 2 and 3 is:', addTwoNumbers(2,3));
console.log('Subtraction of 2 and 3 is:', subtract(2,3));
console.log('Multiply of 2 and 3 is:', multiply(2,3));
console.log('Divide of 2 and 3 is:', divide(2,3));
console.log(greeting('shivani'))


console.log("Activity : 3 Importing Entire Modules")
console.log("Value of PI", myMath.PI);
console.log("Value of E", myMath.E);
console.log("Sum of 12 and 15 is", myMath.addTwoNumbers(12,15));


console.log("Activity : 4 using third Party module")
const arr = [2,1,4,5,3,7];
const sortArray = lodash.sortBy(arr);
console.log(`The Original Array is ${arr} and the sorted Array is ${sortArray}`);


const url = 'https://randomuser.me/api/'

async function getRandomUser(){
    try {
        const response = await axios.get(url);
        console.log(response.data.results[0])
        return response.data.results[0];
    } catch (error) {
        console.log("Error During Getting Random User Data:", error);
        throw error;
    }
}

getRandomUser().then((data)=>{
    console.log("Random user Data:", data);
})
.catch((err)=>{
    console.log("Error Occured:", err);
})