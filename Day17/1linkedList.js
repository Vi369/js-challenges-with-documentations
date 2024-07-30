/**
 * Activity 1: Linked List
 * Task: 1 Implement a Node class to represent an element in a linked list with properties value and next.
*/

class Node{
    constructor(value, next){
        this.value = value,
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}

// Task 2 Implement a LinkedList class with methods to add a node to the end, remove a node from the end and display all nodes
LinkedList.prototype.addNodeAtEnd = function(value){
    const newNode = new Node(value);

    if(!this.head){
        this.head = newNode;
    }

    let lastNode = this.head;

    while(lastNode.next !== null){
        lastNode = lastNode.next;
    }

    lastNode.next = newNode;
}

// Remove Node to the end
LinkedList.prototype.removeNodeAtEnd = function(){
    if(!this.head){
        return [] // List not Exist
    }

    let currentNode = this.head;
    if(currentNode.next === null){
        this.head = null;
    }

    while(currentNode.next.next !==null){
        currentNode = currentNode.next;
    }

    currentNode.next = null;
}

// Display All nodes value
LinkedList.prototype.display = function(){
    let result = []
    if(!this.head){
        return result // List not exist
    }

    let currentNode = this.head;

    while(currentNode.next !==null){
        result.push(currentNode.data);
        currentNode = currentNode.next;
    }

    return result;

}