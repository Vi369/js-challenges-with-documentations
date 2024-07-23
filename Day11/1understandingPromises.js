/**
 * Activity 1: Understanding Promises
 * Task: 1 create a promise that resolves with a message after a 2 secod timeout and log the message to console.
 * Task: 2 create a promise that rejects with an error message after a 2 second timeout and handle the error using catch.
 */

// resolved
const newPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('This Message Resolved After 2 second.');
    },2000);
});

newPromise.then((message)=>{
    console.log(message);
})

// rejection
const newPromise2 = new Promise((_, rejcet)=>{
    setTimeout(()=>{
        rejcet("This message reject after 2 second.")
    }, 2000)
})

newPromise2.catch((message)=>{
    console.log(message);
})