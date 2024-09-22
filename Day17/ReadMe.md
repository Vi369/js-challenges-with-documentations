## Day 17: Data Structures

### Approach and Thought Process

#### Activity 1: Linked List

##### Task 1: Implement Node class

###### Approach:
* Created a `Node` class to represent an element in a `linked list` with `value` and `next` properties.

###### Thought Process: 

* The Node class acts as the building block for constructing a linked list, storing the data and linking to the next node.

##### Task 2: LinkedList class with add, remove, and display methods

###### Approach: 
* Implemented `addNodeAtEnd` to append a node, `removeNodeAtEnd` to remove the last node, and `display` to show all node values.

###### Thought Process: 
* Designed the linked list to handle node addition and removal, ensuring traversal from head to tail to perform these operations efficiently.

#### Activity 2: Stack

##### Task 3: Implement Stack class

###### Approach: 
* Implemented a `Stack` class with methods `push`, `pop`, and `peek`.

Thought Process:
* The stack follows a Last In, First Out (LIFO) principle, so push adds elements to the top and pop removes them.

##### Task 4: Reverse a string using Stack

###### Approach:
* Used the `Stack` class to reverse a string by pushing each character onto the stack and popping them off in reverse order.

###### Thought Process:
* Leveraged the LIFO structure of the stack to reverse the order of characters easily.

#### Activity 3: Queue
##### Task 5: Implement Queue class

###### Approach:
* Created a `Queue` class with methods `enqueue`, `dequeue`, and `front`.

###### Thought Process:

* The queue operates on First In, First Out (FIFO) principle, where enqueue adds items to the back and dequeue removes from the front.

##### Task 6: Simulate a simple printer queue

###### Approach:
 
* Used the `Queue` class to manage and process print jobs in the order they were added.

###### Thought Process:
* Ensured that jobs are printed in the same sequence they were added, simulating real-world print queue behavior.

#### Activity 4: Binary Tree

##### Task 7: Implement TreeNode class

###### Approach:

* Created a `TreeNode` class to represent a `node` in a binary tree with `value`, `left`, and `right` properties.

###### Thought Process:
* This class serves as the base for binary tree structures, storing node values and linking to child nodes.

##### Task 8: BinaryTree class with insert and in-order traversal

###### Approach:
* Implemented a `BinarySearchTree` class with methods to `insert` nodes and perform `in-order` traversal.

###### Thought Process:
* Designed the tree for efficient insertion and in-order traversal, ensuring left, root, and right sequence during traversal.

#### Activity 5: Graph
##### Task 9: Implement Graph class

###### Approach:
* Created a `Graph` class with methods to `add vertices`, `add edges`, and perform `Breadth-First Search` (BFS).

###### Thought Process:
* Represented the graph using an adjacency list, ensuring efficient BFS traversal through connected nodes.

##### Task 10: Find the shortest path using BFS

###### Approach:
* Used the `BFS algorithm` to find the shortest path between two nodes in the graph.

###### Thought Process:
* Traversed the graph level by level to find the shortest path, ensuring that each node and its neighbors are visited in sequence.


#### Achievements : 

* Through these activities, I gained a solid understanding of data structures like `Linked Lists`, `Stacks`, `Queues`, `Binary Trees`, and `Graphs`, while developing problem-solving skills using recursion, traversal techniques, and efficient search algorithms.