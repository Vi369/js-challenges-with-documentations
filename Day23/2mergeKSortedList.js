/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    const newArr= [];
    
    for(let i =0; i< lists.length; i++){
        const temp = lists[i];

        while(temp !==null){
            newArr.push(temp.val);
            temp = temp.next;
        }
    }

    const newList = new ListNode(-1);
    const head = newList;

    for(let i = 0 ; i< newArr.length; i++){
        newList.next = new ListNode(newArr[i]);
        newList = newList.next; // next node
    }

    return head.next;
};