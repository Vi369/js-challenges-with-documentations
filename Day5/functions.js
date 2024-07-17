/**
 * Activity 1: Functions Declaration
 * Task: 1  check even odd and log result 
 * Task: 2 square of number and return the result
 */

function checkEvenOdd(number){
    if(number % 2 === 0){
        console.log("Given number is Even")
    }else{
        console.log("Given number is Odd")
    }
}

// usage
checkEvenOdd(18);

function squareNumber(num){
    return num * num;
}
// usage
console.log("Squre number: ", squareNumber(10));


/**
 * Activity 2: Functions Expression
 * Task:3  find maximum of two number and console.
 * Task:4 concatenate two strings and return the result.
 */

const findMaximum = function(num1, num2){
    num1 > num2 ? console.log(`Greater number is:${num1}`): console.log(`Greater number is:${num2}`);
}

// usage
findMaximum(10,40);

const stringConcatenation = function(str1, str2){
    return str1 + str2;
}

//usage
console.log(stringConcatenation('Hello', 'ji'));

/**
 * Activity 3: Arrow Functions
 * Task: 5 calculate the sum of two number and console the result.
 * Task: 6 check strings contains specific character and return a boolean value.
 */

const sumOfTwoNum = (num1,num2)=>{
    console.log("Sum of numbers is: ", num1 + num2);
}

// usage
sumOfTwoNum(10,100);

const isHas = (strings, char) =>{
    return strings.includes(char);
}

// usage
console.log(isHas('What are you doing?', 'e'));

/**
 * Activity 4: Function Parameters and Default Values.
 * Task 7 : write func that takes two parameter and return their product second parameter has default value.
 * Task 8 : write func that takes person's name and age details and return and greeting message and age has default value.
 */

function productOfNumbers(num1, num2 = 1){
    return num1 * num2;
}

// usage
console.log("Product of number 10 and 5:",productOfNumbers(10,5));

function greeting(name, age =22){
    return `Hello ${name} sir, your age is ${age}.`
}

//usage
console.log(greeting('Vikas'));

/**
 * Activity 5: Higher-Order Functions.
 * Task 9: higher order function that takes function and calls the functions that many times.
 * Task 10: higher order function that takes two functions and a value , applies first function to the value and then applies the second function to the result.
 */

function callFunctionNTimes(func, times){
    while(times >= 1){
        func();
        times--
    }
}

//usage
callFunctionNTimes(()=>(console.log("Hanji")), 3);

function applyFunctions(func1, func2, value){
    const resultOffunc1 = func1(value);
    const finalResult = func2(resultOffunc1);
    return finalResult;
}



//usage
applyFunctions(squareNumber, (result)=>{console.log(result)}, 5)

