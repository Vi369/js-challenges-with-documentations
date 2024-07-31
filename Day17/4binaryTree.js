/**
 * Activity 4: Binary Tree
 * Task: 7 Implement a treeNode class to represent a node in a binary tree with properties value left and right.
*/

class TreeNode{
    constructor(value, left = null, right = null){
        this.value = value,
        this.left = left,
        this.right = right
    }
}

// Task 8 Implement a BinaryTree class with methods for inseritng values and performing in order traversal.

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    // insert node method
    insert(value){
        const newNode = new TreeNode(value);

        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(rootNode, newNode){
        if(newNode.value < rootNode.value){
            if(rootNode.left === null){
                rootNode.left = newNode;
            }else{
                this.insertNode(rootNode.left, newNode);
            }
        }else{
            if(rootNode.right === null){
                rootNode.right = newNode;
            }else{
                this.insertNode(rootNode.right, newNode);
            }
        }
    }

    inorserTraversal(){
        const result = [];
        this.inorder(this.root, result);
        return result;
    }

    inorder(rootNode, result){
        if(rootNode !== null){
            this.inorder(rootNode.left, result);
            result.push(rootNode.value);
            this.inorder(rootNode.right, result);
        }
    }
}


const bst = new BinarySearchTree();

bst.insert(100)
bst.insert(80)
bst.insert(10)
bst.insert(90)
bst.insert(50)
bst.insert(70)
bst.insert(60)
bst.insert(40)
bst.insert(30)
bst.insert(20)

const result = bst.inorserTraversal();

console.log(result);