/**
 * Activity 4: Module Pattern
 * Task: 6 Use closures to create a simple module for managing a collection of items. 
 * Implement methods to add remove and list items.
 * */

function collectionOfItems(){
    let item = 0;

    function addItem(){
        item++;
        return item;
    }

    function removeItem(){
        item--;
    }

    function getListItem(){
        return item;
    }

    return {
        addItem,
        removeItem,
        getListItem,
    };
};


const addCart = collectionOfItems();

console.log("Add item:", addCart.addItem())
console.log("Add item:", addCart.addItem())
console.log("Add item:", addCart.addItem())
console.log("Add item:", addCart.addItem())
addCart.removeItem()
console.log("1 Item Removed")
console.log("List of item:", addCart.getListItem());

