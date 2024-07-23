/**
 * Activity 3: Using Async / Await
 * Task: 4 write a async function that waits for a promise to resolve and then logs the resolved value.
 * Task: 5 write a async function that handles a rejected promise using try-catch and logs the error message. 
 */

const newPromise3 = new Promise((resolve, _)=>{
    resolve('Promise Resolved successfully!')
})

const newPromise4 = new Promise((_, reject)=>{
    reject('Promise Rejected!')
})

async function resolvedPromise(promise){
    try {
        const res = await promise;
        console.log(res);
    } catch (error) {
        console.error("During Resolving Promises:", error)
    }
}

// resolvedPromise(newPromise3);


async function handleRejectAndResolvedPromise(promise){
    try {
        const res = await promise;
        console.log("Resolved Promise:",res);
    } catch (error) {
        console.error("Rejected Promise with Error:", error)
    }
}

handleRejectAndResolvedPromise(newPromise3);
handleRejectAndResolvedPromise(newPromise4);