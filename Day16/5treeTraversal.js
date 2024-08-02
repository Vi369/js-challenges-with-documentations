/**
 * Activity 5: Tree Traversal
 * Task 9 Write a recursive function to perform an in-order traversal of a  binary tree. 
 * Log the nodes as they are visited.
*/

class TreeNode{
    constructor(data, left = null, right = null){
        this.data = data,
        this.left = left,
        this.right = right
    }
}


function inorderTraversal(node){
    if(node !== null){
        inorderTraversal(node.left);
        console.log(node.data);
        inorderTraversal(node.right);
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("A Simple Binary Tree",root);
inorderTraversal(root);

// Task 10 Write a recursive function to calculate the depth of a binary tree. 
// log the result for a few text cases.

function calculateDeapth(node){
    if(node === null){
        return 0; // base case node is empty tree null
    }

    const left_Deapth = calculateDeapth(node.left);
    const right_Deapth = calculateDeapth(node.right);

    return Math.max(left_Deapth, right_Deapth) + 1
}

console.log("Deapth of binary tree:", calculateDeapth(root)); // expected 3

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log("Deapth of binary tree:", calculateDeapth(tree2)); // expected 2 

