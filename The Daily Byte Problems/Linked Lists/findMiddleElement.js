/**
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */

function findMiddleElement(head) {
  // 2 pointer approach
  let fast,
    slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
