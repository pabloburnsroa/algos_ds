/**
 *
 * @param {LinkedList} list
 * @param {number} n
 * @returns {LinkedList}
 * @readonly Given a linked list and a value n, remove the nth to last node and return the resulting list.
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function removeNthToLastNode(head, n) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let fast = dummyHead;
  let slow = dummyHead;
  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }
  while (fast != null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return dummyHead.next;
}
