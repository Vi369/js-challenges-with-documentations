/**
 * Activity 3: Closures in loops
 * Task: 5 write a loop that creates an array of function.
 * Each function should log its index when called. Use a closure to ensure each function logs the correct index.
 * */

function createsFunctions(){
    const arrayOfFunctions = [];

    for(let index = 0; index<10; index++){
        arrayOfFunctions.push(
            (function(index){
            return function logIndex(){
                console.log(index);
            }
        })(index)); // imdiatly invoke this function expect a parameter
    }

    return arrayOfFunctions;
}

const functions = createsFunctions();

functions[0]();
functions[1]();
functions[2]();
functions[3]();
functions[4]();
functions[5]();