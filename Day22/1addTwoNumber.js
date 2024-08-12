/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let l3 = new ListNode(-1);
    const head = l3;
    while(l1 && l2){
        let value = l1.val + l2.val + carry;
        carry = Math.floor(value/10); // 16 /10 => 1
        l3.next = new ListNode(value%10) // 16 % 10 => 6

        l3 = l3.next;
        l2 = l2.next;
        l1 = l1.next;
    }

    // if l1 have still some digit
    while(l1){
        let value = l1.val  + carry;
        carry = Math.floor(value/10); // 16 /10 => 1
        l3.next = new ListNode(value % 10) // 16 % 10 => 6

        l3 = l3.next;
        l1 = l1.next;
    }

    // if l2 have still some digit
    while(l2){
        let value = l2.val  + carry;
        carry = Math.floor(value/10); // 16 /10 => 1
        l3.next = new ListNode(value % 10) // 16 % 10 => 6

        l3 = l3.next;
        l2 = l2.next;
    }

    if(carry){
        l3.next = new ListNode(carry);
    }

    return head.next;
};