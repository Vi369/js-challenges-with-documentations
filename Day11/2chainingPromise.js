
/**
 * Activity 2: Chaining Promises
 * Task: 3 create a swquence of promises that simulate fetching data from a server. Chian the promises to log messages in a specific order.
 */

// helper function for fetching data
function fetchData(data, delay){
    const response = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data);
        },delay)
    });
    return response;
};


fetchData("Fetching Product data from the server", 1000)
.then((res)=>{
    console.log(res);
    return fetchData('Fetching Product related data from the server', 1500);
})
.then((relatedData)=>{
    console.log(relatedData);
    return fetchData('Fetching More related Data from the Server', 1000);
})
.then((moreRelatedData)=>{
    console.log(moreRelatedData);
    return fetchData('Fetching All the Related Data', 1000);
})
.then((finalData)=>{
    console.log(finalData);
    return fetchData('Product Related All the data Fetched successfully!');
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.error("Error Occure during Fetching data:",error)
})
