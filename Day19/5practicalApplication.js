/**
 * Activity 5: Practical Applications
 * Task: 9 Write a regular expression to validate a simple password (must include at leat one uppercase letter, one lowercase, one digit, and one special character). 
 * Log the password valid or not.
*/

const password = "12345678";
const strongPassword = "13Chai@"

const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])/;
// console.log(regex.test(password))
// console.log(regex.test(strongPassword))


if(regex.test(password)){
    console.log(`${password} :Valid Password`)
}else{
    console.log(`${password}: Not Valid Password. Please check and provide valid password.`)
}

if(regex.test(strongPassword)){
    console.log(`${strongPassword}: Valid Password`)
}else{
    console.log(`${strongPassword}: Not Valid Password. Please check and provide valid password.`)
}

/**
 * Task 10: Writw a regular expression to validate a URL.
 * log whether the URL is valid.
 */
