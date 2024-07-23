/**
 * Activity 4: Using Async / Await
 * Task: 6 use fetch api to get data from a public api and log ther reponse data to console using promises.
 * Task: 7 use fetch api to get data from a public api and log the responce data to the console using async/await.
 */

const url = 'https://randomuser.me/api/'

// fetch data console using promises
function fetchUser(url){
    return fetch(url).then((res)=>{
        if(!res.ok){
            throw new Error('Somthing went wrong user Data not fetched!')
        }
        return res.json()
    })
}

fetchUser(url)
.then((res)=>{
    console.log("Data Fetched form the public Server using Promises:", res.results[0]);
})
.catch((error)=>{
    console.error(error)
});

// fetch data console using async/await

async function fetchUserData(url){
    try {
        const res = await fetch(url)
        if(!res.ok){
            throw new Error("Something Went wrong during fetching data.")
        }
    
        const data = await res.json()
        return data.results[0];
    } catch (error) {
        console.log("During fetching data using async await",error)
        throw error;
    }
}

fetchUserData(url)
.then((res)=>{
    console.log("successfully Fetched data using async await", res);
})
.catch((error)=>{
    console.log("Failed to fetched data!", error);
})
