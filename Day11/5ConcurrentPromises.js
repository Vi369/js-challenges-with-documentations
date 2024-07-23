/**
 * Activity 5: concurrent Promises
 * Task: 8 use promise.all to wait for multiple promises to resolve and then log all their value.
 * Task: 9 use promise.race log the value of the first promise that resolves among multiple promises.
 */

// promise all (if all promises resolve only then printed values)
const promise1 = new Promise((resolve, _)=>{
    setTimeout(()=>{
        resolve("hello jii😊");
    },500)
});

const promise2 = Promise.resolve('Chai Aur Code');

const userUrl = 'https://jsonplaceholder.typicode.com/users/1'
const userPostUrl = 'https://jsonplaceholder.typicode.com/posts?userId=1'

async function fetchUserData(url){
    try {
        const res = await fetch(url)
        if(!res.ok){
            throw new Error('Somthing went wrong During user Data fetch!')
        }
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

Promise.all([promise1, promise2, fetchUserData(userUrl), fetchUserData(userPostUrl)]).then((values)=>{
    console.log(values)
})


// promise race (all value fulfuled but which promises take resolve faster then only come first)

Promise.race([promise1,promise2,fetchUserData(userUrl), fetchUserData(userPostUrl)]).then((fastResolve)=>{
    console.log("This promise resolve first:", fastResolve); // Chai Aur Code
})