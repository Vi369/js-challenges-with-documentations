/**
 * Activity 4: Merge two sorted List
 * Task: 4 solve the merge two sorted lists problem on leetCode
 * Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
 * Create a few test case with linked lists and log the merged list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var mergeTwoLists = function(list1, list2) {
    const list = [];

    while(list1 !== null){
        list.push(list1.val);
        list1 = list1.next;
    }

    while(list2 !== null){
        list.push(list2.val);
        list2 = list2.next;
    }
    // sorted the list
    const sortedList  = list.sort((a,b)=> (a-b))

    const temp = new ListNode(-1);
    const head = temp;
    for(let val of sortedList){
        temp.next = new ListNode(val);
        temp = temp.next;
    }
    head = head.next;
    return head;
};