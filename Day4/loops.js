/**
 * Activity 1: For loop
 * Task: 1 print number 1-10 
 * Task: 2 table of 5
 */

for(let i = 1; i<11; i++){
    console.log(i);
}

for(let i = 1; i<11; i++){
    console.log(`5*${i} => ${5*i}`)
}

/**
 * Activity 2: While loop
 * Task:3  calculate sum of number 1-10
 * Task:4 print 10-1 using while loop
 */

let num = 1;
let sum = 0;
while(num < 11){
    sum += num;
    num++
}
console.log('Sum of 1-10 Number is: ', sum)

// task 4 (10-1)
num = num - 1; // reassign value
while(num >=1){
    console.log(num)
    num--;
}
/**
 * Activity 3: Do...While loop
 * Task: 5 print number 1-5 
 * Task: 6 factorial of number
 */
num = 1; // reassign value
do{
    console.log(num)
    num++
}while(num < 6)

// factorial 
let fact = 1
let calFactNum = 15;
do{
    fact = fact * calFactNum;
    calFactNum--;
}while(calFactNum >=1);

console.log("Factorial:", fact); //1307674368000

/**
 * Activity 4: Nasted loop
 * Task: 7 start printing n number
 */
let n = 5;
for (let i = 0; i <n; i++) {
    let row = ''
    for(let j = 0; j< i+1; j++){
        row += '*'
    }
    console.log(row)
}

/**
 * Activity 4: Nasted loop
 * Task: 8 print 1-10 but skip 5
 * Task: 9 print 1-10 but stop 7 
 */

for(let i = 1; i<11; i++){
    if(i === 5){
        continue;
    }else{
        console.log(i);
    }
}

for(let i = 1; i<11; i++){
    if(i===7){
        break;
    }else{
        console.log(i)
    }
}