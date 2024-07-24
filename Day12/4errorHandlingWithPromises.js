/**
 * Activity 4: Error Handling in Promises
 * Task: 6 Create a promise that randomly resolves or rejects. use .catch to handle the rejection and log an appropriate message to the console.
 * Task: 7 use try-catch within an async function to handle errors from a promise that randomly resolves or rejects , and log the error message.
*/

const randomPromise = new Promise((resolve, reject)=>{
    const randomSelection = Math.floor(Math.random()*2)
    randomSelection? resolve("Promise Resolved successfully!"): reject("Promise Rejected!")
});

randomPromise
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error)
});

// async await
async function randomlyResolveAndReject(){
    try {
        const result = await randomPromise
        console.log("Randomly resolve reject using Async Await: ",result)
    } catch (error) {
        console.log(error);
    }
}

randomlyResolveAndReject()