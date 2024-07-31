/**
 * Activity 2: Stack
 * Task: 3 Implement a Stack class with methods push pop and peek.
*/

class Stack{
    constructor(){
        this.stack = []
    }

    // Add method 
    push(data){
        this.stack.push(data);
    }

    // Remove method 
    pop(){
        return this.stack.pop();
    }

    // peek method 
    peek(){
        return this.stack[this.stack.length - 1]
    }
}


// Task 4 Use the stack class to revese a string by pushing all characters onto the stack and then popping them off.

let string = 'vikas';

const stack = new Stack();

for(let i = 0; i<string.length; i++){
    stack.push(string[i]);
}

let reversString = ''; 

for(let r = 0; r<string.length; r++){
    reversString += stack.pop()
}

console.log("Reverse String:", reversString)