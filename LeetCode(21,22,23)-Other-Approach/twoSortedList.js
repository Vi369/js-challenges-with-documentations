/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    const newList = new ListNode(-1);
    const head = newList;

    while(list1 !==null && list2 !==null){
        if(list1.val < list2.val){
            newList.next = list1;
            list1 = list1.next;
        }else{
            newList.next = list2;
            list2 = list2.next;
        }
        newList = newList.next;
    }

    if(list1){
        newList.next = list1;
    }else{
        newList.next = list2
    }

    return head.next;
};