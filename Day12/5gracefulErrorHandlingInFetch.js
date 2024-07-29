/**
 * Activity 5: Graceful Error Handling in Fetch
 * Task: 8  use the fetch api to request data from an invalid url and handle the error using .catch() log an appropriate error message to the console.
 * Task: 9 use the fetch api to request data from an invalid url and handle using async await try catch an appropriate error message to log.
 */

// const url = 'https://randomuser.me/api/' // valid url
const url = 'https://randomuser.me/a/' // invalid url

fetch(url)
.then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then(userData => {
    console.log("User Data:", userData);
  })
.catch((error)=>{
    console.log("Error During geting data:", error)
})



// fetch data using async await
async function fetchRandomData(url){
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error Occured during fetching data using Async Await:", error)
    }
}

fetchRandomData(url)
.then((res)=>{
    console.log("User Data:", res);
})
.catch((error)=>{
    console.log("Error:", error);
})