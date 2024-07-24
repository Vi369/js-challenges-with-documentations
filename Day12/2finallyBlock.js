/**
 * Activity 2: Finally block
 * Task: 3 write a script that includes a try-catch block and finally block log messages in the try catch and finally blocks for obsere the execution flow.
 */

try {
    console.log("Strting Point")
    throw new Error('custom error')
} catch (error) {
    console.log(error)
}finally{
    console.log("finally block")
}