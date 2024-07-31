/**
 * Activity 3: Queue
 * Task: 5 Implement a Queue class with methods enqueue , dequeue and front.
*/

class Queue{
    constructor(){
        this.queue = []
    }

    
    // Add method 
    enqueue(data){
        this.queue.push(data);
    }

    // Remove method 
    dequeue(){
        return this.queue.shift();
    }

    // front method 
    front(){
        return this.queue[0]
    }
}


// Task 6 use the queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

const Jobs = [
    "chaicode1.pdf",
    "chaiAurcode2.docx",
    "Image1.png",
    "Image2.png",
];

const queue = new Queue()

Jobs.forEach((job)=> queue.enqueue(job));
// processed in order
Jobs.forEach(()=> console.log(queue.dequeue()));