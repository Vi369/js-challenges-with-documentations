/**
 * Activity 1: if else statements
 * Task: 1 check number positive , negative or zero and log result
 * Task: 2 check is user eligivle to vote and log result
 */

let Amount = 1000;

if(Amount > 0){
    console.log("Positive Number:",Amount)
}else if(Amount < 0){
    console.log("Negative Number:",Amount)
}else{
    console.log("Zero")
}

let userAge = 17.9

if(userAge >= 18){
    console.log("You are eligiable for voting!")
}else{
    console.log("You are not eligiable for voting!")
}

/**
 * Activity 2: Nasted if else statements
 * Task: 3 find the largest of three numbers
 */

let largest = 0, num1 = 11, num2 = 21 , num3 = 13

if(num1 > num2 && num1 > num3){
    largest = num1;
}else{
    if(num2 > num3){
        largest = num2
    }else{
        largest = num3
    }
}
console.log(`In this number num1: ${num1} , num2: ${num2} and num3 ${num3} largest is ${largest}`);


/**
 * Activity 3: Switch case
 * Task: 4 determine day of the week based on the number and console.
 * Task: 5 assign grade baase on the numbers and console.
 */

let dayNumber = 5 // assume

switch (dayNumber) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day number (0-6 expected)");
  }

  let marks = 65 // assume

  switch (true) {
    case (marks >= 90):
      console.log("Grade A");
      break;
    case  (marks >= 75):
      console.log("Grade B");
      break;
    case (marks >=65):
      console.log("Grade C");
      break;
    case (marks >=45):
      console.log("Grade D");
      break;
    case (marks < 35):
      console.log("Grade F");
      break;
    default:
      console.log("Invalid Information  (Marks expected)");
  }

  /**
 * Activity 4: Conditional (Ternary) Operator 
 * Task: 6 check number even odd and console.
 */

  let number = 51 // assume

  number % 2 === 0 ? console.log("Provided Number is Even Number"): console.log("Provided Number is Odd Number");
/**
 * Activity 5: Combining Conditions
 * Task: 7 leap year or not a leap year.
 */

let year = 2026;

if(year % 4 === 0){
    console.log("Leap year!")
}else if(year % 400 === 0 && year % 100 !==0){
    console.log("Leap year!")
}else{
    console.log("Not Leap year!")
}