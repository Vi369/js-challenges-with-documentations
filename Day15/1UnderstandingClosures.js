/**
 * Activity 1: Understanding Closures
 * Task: 1 Write a function that returns another function, where the inner function accesses a variable from the outer function's scope 
 * call the inner function and log the result.
*/

function outerfunction(){
    let outerGreeting = 'Hello jii'
    function innerfunction(name){
        return `${outerGreeting}, my name is ${name}.`;
    }
    return innerfunction;
}

const innerfunction = outerfunction();
const result = innerfunction('vikas');
console.log("Inner function Result: ", result);

/*
* Task: 2 create a closure that maintains a private counter .
* implement functions to icrement and get the current value of the counter.
*/


const privateCounter = ()=>{
    let count = 0; // initial value 

    function icrement(){
        count++;
    }
    function getValue(){
        return count;
    }

    return {
        icrement,
        getValue
    }
}

const counter = privateCounter();

console.log("current value:",counter.getValue());
counter.icrement()
console.log("After Increment current value:",counter.getValue());